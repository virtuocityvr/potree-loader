var n = `#version 300 es

precision highp float;\r
precision highp int;

#define max_clip_boxes 30

in vec3 position;\r
in vec3 normal;\r
in float intensity;\r
in float classification;\r
in float returnNumber;\r
in float numberOfReturns;\r
in float pointSourceID;\r
in vec4 indices;

uniform mat4 modelMatrix;\r
uniform mat4 modelViewMatrix;\r
uniform mat4 projectionMatrix;\r
uniform mat4 viewMatrix;\r
uniform mat3 normalMatrix;

uniform float pcIndex;

uniform float screenWidth;\r
uniform float screenHeight;\r
uniform float fov;\r
uniform float spacing;

#if defined use_clip_box\r
	uniform mat4 clipBoxes[max_clip_boxes];\r
#endif

uniform float heightMin;\r
uniform float heightMax;\r
uniform float size; 
uniform float minSize; 
uniform float maxSize; 
uniform float octreeSize;\r
uniform vec3 bbSize;\r
uniform vec3 uColor;\r
uniform float opacity;\r
uniform float clipBoxCount;\r
uniform float level;\r
uniform float vnStart;\r
uniform bool isLeafNode;

uniform float filterByNormalThreshold;\r
uniform vec2 intensityRange;\r
uniform float opacityAttenuation;\r
uniform float intensityGamma;\r
uniform float intensityContrast;\r
uniform float intensityBrightness;\r
uniform float rgbGamma;\r
uniform float rgbContrast;\r
uniform float rgbBrightness;\r
uniform float transition;\r
uniform float wRGB;\r
uniform float wIntensity;\r
uniform float wElevation;\r
uniform float wClassification;\r
uniform float wReturnNumber;\r
uniform float wSourceID;

uniform sampler2D visibleNodes;\r
uniform sampler2D gradient;\r
uniform sampler2D classificationLUT;\r
uniform sampler2D depthMap;

#ifdef highlight_point\r
	uniform vec3 highlightedPointCoordinate;\r
	uniform bool enablePointHighlighting;\r
	uniform float highlightedPointScale;\r
#endif

#ifdef new_format\r
	in vec4 rgba;\r
	out vec4 vColor;\r
#else\r
	in vec3 color;\r
	out vec3 vColor;\r
#endif

#if !defined(color_type_point_index)\r
	out float vOpacity;\r
#endif

#if defined(weighted_splats)\r
	out float vLinearDepth;\r
#endif

#if !defined(paraboloid_point_shape) && defined(use_edl)\r
	out float vLogDepth;\r
#endif

#if defined(color_type_phong) && (MAX_POINT_LIGHTS > 0 || MAX_DIR_LIGHTS > 0) || defined(paraboloid_point_shape)\r
	out vec3 vViewPosition;\r
#endif

#if defined(weighted_splats) || defined(paraboloid_point_shape)\r
	out float vRadius;\r
#endif

#if defined(color_type_phong) && (MAX_POINT_LIGHTS > 0 || MAX_DIR_LIGHTS > 0)\r
	out vec3 vNormal;\r
#endif

#ifdef highlight_point\r
	out float vHighlight;\r
#endif\r
 \r

#if (defined(adaptive_point_size) || defined(color_type_lod)) && defined(tree_type_octree)\r

int numberOfOnes(int number, int index) {\r
	int numOnes = 0;\r
	int tmp = 128;\r
	for (int i = 7; i >= 0; i--) {

		if (number >= tmp) {\r
			number = number - tmp;

			if (i <= index) {\r
				numOnes++;\r
			}\r
		}

		tmp = tmp / 2;\r
	}

	return numOnes;\r
}

/**\r
 * Checks whether the bit at index is 1.0\r
 *\r
 * number is treated as if it were an integer in the range 0-255\r
 */\r
bool isBitSet(int number, int index){

	
	int powi = 1;\r
	if (index == 0) {\r
		powi = 1;\r
	} else if (index == 1) {\r
		powi = 2;\r
	} else if (index == 2) {\r
		powi = 4;\r
	} else if (index == 3) {\r
		powi = 8;\r
	} else if (index == 4) {\r
		powi = 16;\r
	} else if (index == 5) {\r
		powi = 32;\r
	} else if (index == 6) {\r
		powi = 64;\r
	} else if (index == 7) {\r
		powi = 128;\r
	}

	int ndp = number / powi;

	return mod(float(ndp), 2.0) != 0.0;\r
}

/**\r
 * Gets the the LOD at the point position.\r
 */\r
float getLOD() {\r
	vec3 offset = vec3(0.0, 0.0, 0.0);\r
	int iOffset = int(vnStart);\r
	float depth = level;

	for (float i = 0.0; i <= 30.0; i++) {\r
		float nodeSizeAtLevel = octreeSize  / pow(2.0, i + level + 0.0);\r
		\r
		vec3 index3d = (position-offset) / nodeSizeAtLevel;\r
		index3d = floor(index3d + 0.5);\r
		int index = int(round(4.0 * index3d.x + 2.0 * index3d.y + index3d.z));\r
		\r
		vec4 value = texture(visibleNodes, vec2(float(iOffset) / 2048.0, 0.0));\r
		int mask = int(round(value.r * 255.0));

		if (isBitSet(mask, index)) {\r
			
			int advanceG = int(round(value.g * 255.0)) * 256;\r
			int advanceB = int(round(value.b * 255.0));\r
			int advanceChild = numberOfOnes(mask, index - 1);\r
			int advance = advanceG + advanceB + advanceChild;

			iOffset = iOffset + advance;

			depth++;\r
		} else {\r
			return value.a * 255.0; 
		}\r
		\r
		offset = offset + (vec3(1.0, 1.0, 1.0) * nodeSizeAtLevel * 0.5) * index3d;  \r
	}\r
		\r
	return depth;\r
}

float getPointSizeAttenuation() {\r
	return 0.5 * pow(2.0, getLOD());\r
}

#endif\r

#if (defined(adaptive_point_size) || defined(color_type_lod)) && defined(tree_type_kdtree)

float getLOD() {\r
	vec3 offset = vec3(0.0, 0.0, 0.0);\r
	float intOffset = 0.0;\r
	float depth = 0.0;\r
			\r
	vec3 size = bbSize;	\r
	vec3 pos = position;\r
		\r
	for (float i = 0.0; i <= 1000.0; i++) {\r
		\r
		vec4 value = texture(visibleNodes, vec2(intOffset / 2048.0, 0.0));\r
		\r
		int children = int(value.r * 255.0);\r
		float next = value.g * 255.0;\r
		int split = int(value.b * 255.0);\r
		\r
		if (next == 0.0) {\r
		 	return depth;\r
		}\r
		\r
		vec3 splitv = vec3(0.0, 0.0, 0.0);\r
		if (split == 1) {\r
			splitv.x = 1.0;\r
		} else if (split == 2) {\r
		 	splitv.y = 1.0;\r
		} else if (split == 4) {\r
		 	splitv.z = 1.0;\r
		}\r
		\r
		intOffset = intOffset + next;\r
		\r
		float factor = length(pos * splitv / size);\r
		if (factor < 0.5) {\r
		 	
			if (children == 0 || children == 2) {\r
				return depth;\r
			}\r
		} else {\r
			
			pos = pos - size * splitv * 0.5;\r
			if (children == 0 || children == 1) {\r
				return depth;\r
			}\r
			if (children == 3) {\r
				intOffset = intOffset + 1.0;\r
			}\r
		}\r
		size = size * ((1.0 - (splitv + 1.0) / 2.0) + 0.5);\r
		\r
		depth++;\r
	}\r
		\r
		\r
	return depth;	\r
}

float getPointSizeAttenuation() {\r
	return 0.5 * pow(1.3, getLOD());\r
}

#endif

float getContrastFactor(float contrast) {\r
	return (1.0158730158730156 * (contrast + 1.0)) / (1.0158730158730156 - contrast);\r
}

#ifndef new_format

vec3 getRGB() {\r
	#if defined(use_rgb_gamma_contrast_brightness)\r
	  vec3 rgb = color;\r
		rgb = pow(rgb, vec3(rgbGamma));\r
		rgb = rgb + rgbBrightness;\r
		rgb = (rgb - 0.5) * getContrastFactor(rgbContrast) + 0.5;\r
		rgb = clamp(rgb, 0.0, 1.0);\r
		return rgb;\r
	#else\r
		return color;\r
	#endif\r
}

#endif

float getIntensity() {\r
	float w = (intensity - intensityRange.x) / (intensityRange.y - intensityRange.x);\r
	w = pow(w, intensityGamma);\r
	w = w + intensityBrightness;\r
	w = (w - 0.5) * getContrastFactor(intensityContrast) + 0.5;\r
	w = clamp(w, 0.0, 1.0);\r
	\r
	return w;\r
}

vec3 getElevation() {\r
	vec4 world = modelMatrix * vec4( position, 1.0 );\r
	float w = (world.z - heightMin) / (heightMax-heightMin);\r
	vec3 cElevation = texture(gradient, vec2(w,1.0-w)).rgb;\r
	\r
	return cElevation;\r
}

vec4 getClassification() {\r
	vec2 uv = vec2(classification / 255.0, 0.5);\r
	vec4 classColor = texture(classificationLUT, uv);\r
	\r
	return classColor;\r
}

vec3 getReturnNumber() {\r
	if (numberOfReturns == 1.0) {\r
		return vec3(1.0, 1.0, 0.0);\r
	} else {\r
		if (returnNumber == 1.0) {\r
			return vec3(1.0, 0.0, 0.0);\r
		} else if (returnNumber == numberOfReturns) {\r
			return vec3(0.0, 0.0, 1.0);\r
		} else {\r
			return vec3(0.0, 1.0, 0.0);\r
		}\r
	}\r
}

vec3 getSourceID() {\r
	float w = mod(pointSourceID, 10.0) / 10.0;\r
	return texture(gradient, vec2(w, 1.0 - w)).rgb;\r
}

#ifndef new_format

vec3 getCompositeColor() {\r
	vec3 c;\r
	float w;

	c += wRGB * getRGB();\r
	w += wRGB;\r
	\r
	c += wIntensity * getIntensity() * vec3(1.0, 1.0, 1.0);\r
	w += wIntensity;\r
	\r
	c += wElevation * getElevation();\r
	w += wElevation;\r
	\r
	c += wReturnNumber * getReturnNumber();\r
	w += wReturnNumber;\r
	\r
	c += wSourceID * getSourceID();\r
	w += wSourceID;\r
	\r
	vec4 cl = wClassification * getClassification();\r
	c += cl.a * cl.rgb;\r
	w += wClassification * cl.a;

	c = c / w;\r
	\r
	if (w == 0.0) {\r
		gl_Position = vec4(100.0, 100.0, 100.0, 0.0);\r
	}\r
	\r
	return c;\r
}

#endif

#ifdef new_format\r
	vec4 fromLinear(vec4 linearRGB) {\r
		bvec4 cutoff = lessThan(linearRGB, vec4(0.0031308));\r
		vec4 higher = vec4(1.055)*pow(linearRGB, vec4(1.0/2.4)) - vec4(0.055);\r
		vec4 lower = linearRGB * vec4(12.92);\r
		return mix(higher, lower, cutoff);\r
	} \r
	vec4 toLinear(vec4 sRGB) {\r
		bvec4 cutoff = lessThan(sRGB, vec4(0.04045));\r
		vec4 higher = pow((sRGB + vec4(0.055))/vec4(1.055), vec4(2.4));\r
		vec4 lower = sRGB/vec4(12.92);\r
		return mix(higher, lower, cutoff);\r
	}\r
#else\r
	vec3 fromLinear(vec3 linearRGB) {\r
		bvec3 cutoff = lessThan(linearRGB, vec3(0.0031308));\r
		vec3 higher = vec3(1.055)*pow(linearRGB, vec3(1.0/2.4)) - vec3(0.055);\r
		vec3 lower = linearRGB * vec3(12.92);\r
		return mix(higher, lower, cutoff);\r
	}\r
	vec3 toLinear(vec3 sRGB) {\r
		bvec3 cutoff = lessThan(sRGB, vec3(0.04045));\r
		vec3 higher = pow((sRGB + vec3(0.055))/vec3(1.055), vec3(2.4));\r
		vec3 lower = sRGB/vec3(12.92);\r
		return mix(higher, lower, cutoff);\r
	}\r
#endif\r

void main() {\r
	vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);

	gl_Position = projectionMatrix * mvPosition;

	#if defined(color_type_phong) && (MAX_POINT_LIGHTS > 0 || MAX_DIR_LIGHTS > 0) || defined(paraboloid_point_shape)\r
		vViewPosition = mvPosition.xyz;\r
	#endif

	#if defined weighted_splats\r
		vLinearDepth = gl_Position.w;\r
	#endif

	#if defined(color_type_phong) && (MAX_POINT_LIGHTS > 0 || MAX_DIR_LIGHTS > 0)\r
		vNormal = normalize(normalMatrix * normal);\r
	#endif

	#if !defined(paraboloid_point_shape) && defined(use_edl)\r
		vLogDepth = log2(-mvPosition.z);\r
	#endif

	
	
	

	float pointSize = 1.0;\r
	float slope = tan(fov / 2.0);\r
	float projFactor =  -0.5 * screenHeight / (slope * mvPosition.z);

	#if defined fixed_point_size\r
		pointSize = size;\r
	#elif defined attenuated_point_size\r
		pointSize = size * spacing * projFactor;\r
	#elif defined adaptive_point_size\r
		float worldSpaceSize = 2.0 * size * spacing / getPointSizeAttenuation();\r
		pointSize = worldSpaceSize * projFactor;\r
	#endif

	pointSize = max(minSize, pointSize);\r
	pointSize = min(maxSize, pointSize);

	#if defined(weighted_splats) || defined(paraboloid_point_shape)\r
		vRadius = pointSize / projFactor;\r
	#endif

	gl_PointSize = pointSize;

	
	
	

	#ifdef highlight_point\r
		vec4 mPosition = modelMatrix * vec4(position, 1.0);\r
		if (enablePointHighlighting && abs(mPosition.x - highlightedPointCoordinate.x) < 0.0001 &&\r
			abs(mPosition.y - highlightedPointCoordinate.y) < 0.0001 &&\r
			abs(mPosition.z - highlightedPointCoordinate.z) < 0.0001) {\r
			vHighlight = 1.0;\r
			gl_PointSize = pointSize * highlightedPointScale;\r
		} else {\r
			vHighlight = 0.0;\r
		}\r
	#endif

	
	
	

	#ifndef color_type_point_index\r
		#ifdef attenuated_opacity\r
			vOpacity = opacity * exp(-length(-mvPosition.xyz) / opacityAttenuation);\r
		#else\r
			vOpacity = opacity;\r
		#endif\r
	#endif

	
	
	

	#ifdef use_filter_by_normal\r
		if(abs((modelViewMatrix * vec4(normal, 0.0)).z) > filterByNormalThreshold) {\r
			
			gl_Position = vec4(0.0, 0.0, 2.0, 1.0);\r
		}\r
	#endif

	
	
	
	#ifdef new_format\r
		vColor = rgba;\r
	#elif defined color_type_rgb\r
		vColor = getRGB();\r
	#elif defined color_type_height\r
		vColor = getElevation();\r
	#elif defined color_type_rgb_height\r
		vec3 cHeight = getElevation();\r
		vColor = (1.0 - transition) * getRGB() + transition * cHeight;\r
	#elif defined color_type_depth\r
		float linearDepth = -mvPosition.z ;\r
		float expDepth = (gl_Position.z / gl_Position.w) * 0.5 + 0.5;\r
		vColor = vec3(linearDepth, expDepth, 0.0);\r
	#elif defined color_type_intensity\r
		float w = getIntensity();\r
		vColor = vec3(w, w, w);\r
	#elif defined color_type_intensity_gradient\r
		float w = getIntensity();\r
		vColor = texture(gradient, vec2(w, 1.0 - w)).rgb;\r
	#elif defined color_type_color\r
		vColor = uColor;\r
	#elif defined color_type_lod\r
	float w = getLOD() / 10.0;\r
	vColor = texture(gradient, vec2(w, 1.0 - w)).rgb;\r
	#elif defined color_type_point_index\r
		vColor = indices.rgb;\r
	#elif defined color_type_classification\r
	  vec4 cl = getClassification(); \r
		vColor = cl.rgb;\r
	#elif defined color_type_return_number\r
		vColor = getReturnNumber();\r
	#elif defined color_type_source\r
		vColor = getSourceID();\r
	#elif defined color_type_normal\r
		vColor = (modelMatrix * vec4(normal, 0.0)).xyz;\r
	#elif defined color_type_phong\r
		vColor = color;\r
	#elif defined color_type_composite\r
		vColor = getCompositeColor();\r
	#endif\r
	\r
	#if !defined color_type_composite && defined color_type_classification\r
		if (cl.a == 0.0) {\r
			gl_Position = vec4(100.0, 100.0, 100.0, 0.0);\r
			return;\r
		}\r
	#endif

	
	
	

	#if defined use_clip_box\r
		bool insideAny = false;\r
		for (int i = 0; i < max_clip_boxes; i++) {\r
			if (i == int(clipBoxCount)) {\r
				break;\r
			}\r
		\r
			vec4 clipPosition = clipBoxes[i] * modelMatrix * vec4(position, 1.0);\r
			bool inside = -0.5 <= clipPosition.x && clipPosition.x <= 0.5;\r
			inside = inside && -0.5 <= clipPosition.y && clipPosition.y <= 0.5;\r
			inside = inside && -0.5 <= clipPosition.z && clipPosition.z <= 0.5;\r
			insideAny = insideAny || inside;\r
		}

		if (!insideAny) {\r
			#if defined clip_outside\r
				gl_Position = vec4(1000.0, 1000.0, 1000.0, 1.0);\r
			#elif defined clip_highlight_inside && !defined(color_type_depth)\r
				float c = (vColor.r + vColor.g + vColor.b) / 6.0;\r
			#endif\r
		} else {\r
			#if defined clip_highlight_inside\r
				vColor.r += 0.5;\r
			#endif\r
		}\r
	#endif

	
	
	
	
	

	#if defined(output_color_encoding_sRGB) && defined(input_color_encoding_linear)\r
		vColor = toLinear(vColor);\r
	#endif

	#if defined(output_color_encoding_linear) && defined(input_color_encoding_sRGB)\r
		vColor = fromLinear(vColor);\r
	#endif\r
}`;
export {
  n as default
};
//# sourceMappingURL=potree-loader.es40.js.map
