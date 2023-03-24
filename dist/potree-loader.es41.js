var n = `#version 300 es

precision highp float;\r
precision highp int;

uniform mat4 viewMatrix;\r
uniform vec3 cameraPosition;

uniform mat4 projectionMatrix;\r
uniform float opacity;

uniform float blendHardness;\r
uniform float blendDepthSupplement;\r
uniform float fov;\r
uniform float spacing;\r
uniform float pcIndex;\r
uniform float screenWidth;\r
uniform float screenHeight;

uniform sampler2D depthMap;

out vec4 fragColor;

#ifdef highlight_point\r
	uniform vec4 highlightedPointColor;\r
#endif

#ifdef new_format\r
	in vec4 vColor;\r
#else\r
	in vec3 vColor;\r
#endif

#if !defined(color_type_point_index)\r
	in float vOpacity;\r
#endif

#if defined(weighted_splats)\r
	in float vLinearDepth;\r
#endif

#if !defined(paraboloid_point_shape) && defined(use_edl)\r
	in float vLogDepth;\r
#endif

#if defined(color_type_phong) && (MAX_POINT_LIGHTS > 0 || MAX_DIR_LIGHTS > 0) || defined(paraboloid_point_shape)\r
	in vec3 vViewPosition;\r
#endif

#if defined(weighted_splats) || defined(paraboloid_point_shape)\r
	in float vRadius;\r
#endif

#if defined(color_type_phong) && (MAX_POINT_LIGHTS > 0 || MAX_DIR_LIGHTS > 0)\r
	in vec3 vNormal;\r
#endif

#ifdef highlight_point\r
	in float vHighlight;\r
#endif

float specularStrength = 1.0;

void main() {

	#ifdef new_format\r
		
		vec3 actualColor = vColor.xyz;\r
	#else\r
		
		vec3 actualColor = vColor;\r
	#endif\r
	\r
	vec3 color = actualColor;\r
	float depth = gl_FragCoord.z;

	#if defined(circle_point_shape) || defined(paraboloid_point_shape) || defined (weighted_splats)\r
		float u = 2.0 * gl_PointCoord.x - 1.0;\r
		float v = 2.0 * gl_PointCoord.y - 1.0;\r
	#endif\r
	\r
	#if defined(circle_point_shape) || defined (weighted_splats)\r
		float cc = u*u + v*v;\r
		if(cc > 1.0){\r
			discard;\r
		}\r
	#endif

	#if defined weighted_splats\r
		vec2 uv = gl_FragCoord.xy / vec2(screenWidth, screenHeight);\r
		float sDepth = texture2D(depthMap, uv).r;\r
		if(vLinearDepth > sDepth + vRadius + blendDepthSupplement){\r
			discard;\r
		}\r
	#endif\r
		\r
	#if defined color_type_point_index\r
		fragColor = vec4(color, pcIndex / 255.0);\r
	#else\r
		fragColor = vec4(color, vOpacity);\r
	#endif

	#if defined(color_type_phong)\r
		#if MAX_POINT_LIGHTS > 0 || MAX_DIR_LIGHTS > 0\r
			vec3 normal = normalize( vNormal );\r
			normal.z = abs(normal.z);

			vec3 viewPosition = normalize( vViewPosition );\r
		#endif

		
	\r
		#if MAX_POINT_LIGHTS > 0

			vec3 pointDiffuse = vec3( 0.0 );\r
			vec3 pointSpecular = vec3( 0.0 );

			for ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {

				vec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\r
				vec3 lVector = lPosition.xyz + vViewPosition.xyz;

				float lDistance = 1.0;\r
				if ( pointLightDistance[ i ] > 0.0 )\r
					lDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );

				lVector = normalize( lVector );

						

				float dotProduct = dot( normal, lVector );

				#ifdef WRAP_AROUND

					float pointDiffuseWeightFull = max( dotProduct, 0.0 );\r
					float pointDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );

					vec3 pointDiffuseWeight = mix( vec3( pointDiffuseWeightFull ), vec3( pointDiffuseWeightHalf ), wrapRGB );

				#else

					float pointDiffuseWeight = max( dotProduct, 0.0 );

				#endif

				pointDiffuse += diffuse * pointLightColor[ i ] * pointDiffuseWeight * lDistance;

				

				vec3 pointHalfVector = normalize( lVector + viewPosition );\r
				float pointDotNormalHalf = max( dot( normal, pointHalfVector ), 0.0 );\r
				float pointSpecularWeight = specularStrength * max( pow( pointDotNormalHalf, shininess ), 0.0 );

				float specularNormalization = ( shininess + 2.0 ) / 8.0;

				vec3 schlick = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( lVector, pointHalfVector ), 0.0 ), 5.0 );\r
				pointSpecular += schlick * pointLightColor[ i ] * pointSpecularWeight * pointDiffuseWeight * lDistance * specularNormalization;\r
				pointSpecular = vec3(0.0, 0.0, 0.0);\r
			}\r
		\r
		#endif\r
		\r
		#if MAX_DIR_LIGHTS > 0

			vec3 dirDiffuse = vec3( 0.0 );\r
			vec3 dirSpecular = vec3( 0.0 );

			for( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {

				vec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\r
				vec3 dirVector = normalize( lDirection.xyz );

						

				float dotProduct = dot( normal, dirVector );

				#ifdef WRAP_AROUND

					float dirDiffuseWeightFull = max( dotProduct, 0.0 );\r
					float dirDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );

					vec3 dirDiffuseWeight = mix( vec3( dirDiffuseWeightFull ), vec3( dirDiffuseWeightHalf ), wrapRGB );

				#else

					float dirDiffuseWeight = max( dotProduct, 0.0 );

				#endif

				dirDiffuse += diffuse * directionalLightColor[ i ] * dirDiffuseWeight;

				

				vec3 dirHalfVector = normalize( dirVector + viewPosition );\r
				float dirDotNormalHalf = max( dot( normal, dirHalfVector ), 0.0 );\r
				float dirSpecularWeight = specularStrength * max( pow( dirDotNormalHalf, shininess ), 0.0 );

				float specularNormalization = ( shininess + 2.0 ) / 8.0;

				vec3 schlick = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( dirVector, dirHalfVector ), 0.0 ), 5.0 );\r
				dirSpecular += schlick * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight * specularNormalization;\r
			}

		#endif\r
		\r
		vec3 totalDiffuse = vec3( 0.0 );\r
		vec3 totalSpecular = vec3( 0.0 );\r
		\r
		#if MAX_POINT_LIGHTS > 0

			totalDiffuse += pointDiffuse;\r
			totalSpecular += pointSpecular;

		#endif\r
		\r
		#if MAX_DIR_LIGHTS > 0

			totalDiffuse += dirDiffuse;\r
			totalSpecular += dirSpecular;

		#endif\r
		\r
		gl_FragColor.xyz = gl_FragColor.xyz * ( emissive + totalDiffuse + ambientLightColor * ambient ) + totalSpecular;

	#endif\r
	\r
	#if defined weighted_splats\r
	    
		\r
		float wx = 2.0 * length(2.0 * gl_PointCoord - 1.0);\r
		float w = exp(-wx * wx * 0.5);\r
		\r
		
		
		\r
		gl_FragColor.rgb = gl_FragColor.rgb * w;\r
		gl_FragColor.a = w;\r
	#endif\r
	\r
	#if defined paraboloid_point_shape\r
		float wi = 0.0 - ( u*u + v*v);\r
		vec4 pos = vec4(vViewPosition, 1.0);\r
		pos.z += wi * vRadius;\r
		float linearDepth = -pos.z;\r
		pos = projectionMatrix * pos;\r
		pos = pos / pos.w;\r
		float expDepth = pos.z;\r
		depth = (pos.z + 1.0) / 2.0;\r
		gl_FragDepth = depth;\r
		\r
		#if defined(color_type_depth)\r
			gl_FragColor.r = linearDepth;\r
			gl_FragColor.g = expDepth;\r
		#endif\r
		\r
		#if defined(use_edl)\r
			gl_FragColor.a = log2(linearDepth);\r
		#endif\r
		\r
	#else\r
		#if defined(use_edl)\r
			gl_FragColor.a = vLogDepth;\r
		#endif\r
	#endif

	#ifdef highlight_point\r
		if (vHighlight > 0.0) {\r
			gl_FragColor = highlightedPointColor;\r
		}\r
	#endif\r
}`;
export {
  n as default
};
//# sourceMappingURL=potree-loader.es41.js.map
