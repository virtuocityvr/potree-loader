import {ShaderMaterial as $hgUW1$ShaderMaterial, Texture as $hgUW1$Texture, Color as $hgUW1$Color, Vector3 as $hgUW1$Vector3, NearestFilter as $hgUW1$NearestFilter, NoBlending as $hgUW1$NoBlending, LessEqualDepth as $hgUW1$LessEqualDepth, AdditiveBlending as $hgUW1$AdditiveBlending, WebGLRenderTarget as $hgUW1$WebGLRenderTarget, RawShaderMaterial as $hgUW1$RawShaderMaterial, Vector4 as $hgUW1$Vector4, DataTexture as $hgUW1$DataTexture, RGBAFormat as $hgUW1$RGBAFormat, CanvasTexture as $hgUW1$CanvasTexture, LinearFilter as $hgUW1$LinearFilter, Sphere as $hgUW1$Sphere, EventDispatcher as $hgUW1$EventDispatcher, Box3 as $hgUW1$Box3, BufferGeometry as $hgUW1$BufferGeometry, Points as $hgUW1$Points, Scene as $hgUW1$Scene, Object3D as $hgUW1$Object3D, Vector2 as $hgUW1$Vector2, Matrix4 as $hgUW1$Matrix4, Frustum as $hgUW1$Frustum, BufferAttribute as $hgUW1$BufferAttribute, Uint8BufferAttribute as $hgUW1$Uint8BufferAttribute, LineBasicMaterial as $hgUW1$LineBasicMaterial, LineSegments as $hgUW1$LineSegments} from "three";

function $parcel$exportWildcard(dest, source) {
  Object.keys(source).forEach(function(key) {
    if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function get() {
        return source[key];
      }
    });
  });

  return dest;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequirefa99"];
if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequirefa99"] = parcelRequire;
}
parcelRequire.register("3xD1Z", function(module, exports) {
module.exports = "precision highp float;\nprecision highp int;\n#define GLSLIFY 1\n\nattribute vec3 position;\nattribute vec2 uv;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\n\nvarying vec2 vUv;\n\nvoid main() {\n    vUv = uv;\n\n    gl_Position =   projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}";

});

parcelRequire.register("1SAI9", function(module, exports) {
module.exports = "precision highp float;\nprecision highp int;\n#define GLSLIFY 1\n\nuniform mat4 projectionMatrix;\n\nuniform float screenWidth;\nuniform float screenHeight;\n\nuniform sampler2D map;\n\nvarying vec2 vUv;\n\nvoid main() {\n\n\tfloat dx = 1.0 / screenWidth;\n\tfloat dy = 1.0 / screenHeight;\n\n\tvec3 color = vec3(0.0, 0.0, 0.0);\n\tcolor += texture2D(map, vUv + vec2(-dx, -dy)).rgb;\n\tcolor += texture2D(map, vUv + vec2(  0, -dy)).rgb;\n\tcolor += texture2D(map, vUv + vec2(+dx, -dy)).rgb;\n\tcolor += texture2D(map, vUv + vec2(-dx,   0)).rgb;\n\tcolor += texture2D(map, vUv + vec2(  0,   0)).rgb;\n\tcolor += texture2D(map, vUv + vec2(+dx,   0)).rgb;\n\tcolor += texture2D(map, vUv + vec2(-dx,  dy)).rgb;\n\tcolor += texture2D(map, vUv + vec2(  0,  dy)).rgb;\n\tcolor += texture2D(map, vUv + vec2(+dx,  dy)).rgb;\n    \n\tcolor = color / 9.0;\n\t\n\tgl_FragColor = vec4(color, 1.0);\n\t\n\t\n}";

});

var $ddbabd1d335f84a9$exports = {};
var $886301ae952e8f57$exports = {};

$parcel$export($886301ae952e8f57$exports, "BlurMaterial", () => $886301ae952e8f57$export$ec8ead0ea9fedf30);



class $886301ae952e8f57$export$ec8ead0ea9fedf30 extends $hgUW1$ShaderMaterial {
    constructor(){
        super(...arguments);
        this.vertexShader = (parcelRequire("3xD1Z"));
        this.fragmentShader = (parcelRequire("1SAI9"));
        this.uniforms = {
            screenWidth: {
                type: 'f',
                value: 0
            },
            screenHeight: {
                type: 'f',
                value: 0
            },
            map: {
                type: 't',
                value: null
            }
        };
    }
}


var $7b3263892bf52898$exports = {};

$parcel$export($7b3263892bf52898$exports, "ClipMode", () => $7b3263892bf52898$export$e04e7431702ec10a);
var $7b3263892bf52898$export$e04e7431702ec10a;
(function($7b3263892bf52898$export$e04e7431702ec10a) {
    $7b3263892bf52898$export$e04e7431702ec10a[$7b3263892bf52898$export$e04e7431702ec10a["DISABLED"] = 0] = "DISABLED";
    $7b3263892bf52898$export$e04e7431702ec10a[$7b3263892bf52898$export$e04e7431702ec10a["CLIP_OUTSIDE"] = 1] = "CLIP_OUTSIDE";
    $7b3263892bf52898$export$e04e7431702ec10a[$7b3263892bf52898$export$e04e7431702ec10a["HIGHLIGHT_INSIDE"] = 2] = "HIGHLIGHT_INSIDE";
})($7b3263892bf52898$export$e04e7431702ec10a || ($7b3263892bf52898$export$e04e7431702ec10a = {
}));


var $5e4fff88bfda53ee$exports = {};

$parcel$export($5e4fff88bfda53ee$exports, "PointSizeType", () => $5e4fff88bfda53ee$export$d1cbf822ea081fee);
$parcel$export($5e4fff88bfda53ee$exports, "PointShape", () => $5e4fff88bfda53ee$export$5ffaab227f4e4906);
$parcel$export($5e4fff88bfda53ee$exports, "TreeType", () => $5e4fff88bfda53ee$export$eaf124a76310c668);
$parcel$export($5e4fff88bfda53ee$exports, "PointOpacityType", () => $5e4fff88bfda53ee$export$b3da46a9b4c877b5);
$parcel$export($5e4fff88bfda53ee$exports, "PointColorType", () => $5e4fff88bfda53ee$export$e95c0b95a8f50828);
var $5e4fff88bfda53ee$export$d1cbf822ea081fee;
(function($5e4fff88bfda53ee$export$d1cbf822ea081fee) {
    $5e4fff88bfda53ee$export$d1cbf822ea081fee[$5e4fff88bfda53ee$export$d1cbf822ea081fee["FIXED"] = 0] = "FIXED";
    $5e4fff88bfda53ee$export$d1cbf822ea081fee[$5e4fff88bfda53ee$export$d1cbf822ea081fee["ATTENUATED"] = 1] = "ATTENUATED";
    $5e4fff88bfda53ee$export$d1cbf822ea081fee[$5e4fff88bfda53ee$export$d1cbf822ea081fee["ADAPTIVE"] = 2] = "ADAPTIVE";
})($5e4fff88bfda53ee$export$d1cbf822ea081fee || ($5e4fff88bfda53ee$export$d1cbf822ea081fee = {
}));
var $5e4fff88bfda53ee$export$5ffaab227f4e4906;
(function($5e4fff88bfda53ee$export$5ffaab227f4e4906) {
    $5e4fff88bfda53ee$export$5ffaab227f4e4906[$5e4fff88bfda53ee$export$5ffaab227f4e4906["SQUARE"] = 0] = "SQUARE";
    $5e4fff88bfda53ee$export$5ffaab227f4e4906[$5e4fff88bfda53ee$export$5ffaab227f4e4906["CIRCLE"] = 1] = "CIRCLE";
    $5e4fff88bfda53ee$export$5ffaab227f4e4906[$5e4fff88bfda53ee$export$5ffaab227f4e4906["PARABOLOID"] = 2] = "PARABOLOID";
})($5e4fff88bfda53ee$export$5ffaab227f4e4906 || ($5e4fff88bfda53ee$export$5ffaab227f4e4906 = {
}));
var $5e4fff88bfda53ee$export$eaf124a76310c668;
(function($5e4fff88bfda53ee$export$eaf124a76310c668) {
    $5e4fff88bfda53ee$export$eaf124a76310c668[$5e4fff88bfda53ee$export$eaf124a76310c668["OCTREE"] = 0] = "OCTREE";
    $5e4fff88bfda53ee$export$eaf124a76310c668[$5e4fff88bfda53ee$export$eaf124a76310c668["KDTREE"] = 1] = "KDTREE";
})($5e4fff88bfda53ee$export$eaf124a76310c668 || ($5e4fff88bfda53ee$export$eaf124a76310c668 = {
}));
var $5e4fff88bfda53ee$export$b3da46a9b4c877b5;
(function($5e4fff88bfda53ee$export$b3da46a9b4c877b5) {
    $5e4fff88bfda53ee$export$b3da46a9b4c877b5[$5e4fff88bfda53ee$export$b3da46a9b4c877b5["FIXED"] = 0] = "FIXED";
    $5e4fff88bfda53ee$export$b3da46a9b4c877b5[$5e4fff88bfda53ee$export$b3da46a9b4c877b5["ATTENUATED"] = 1] = "ATTENUATED";
})($5e4fff88bfda53ee$export$b3da46a9b4c877b5 || ($5e4fff88bfda53ee$export$b3da46a9b4c877b5 = {
}));
var $5e4fff88bfda53ee$export$e95c0b95a8f50828;
(function($5e4fff88bfda53ee$export$e95c0b95a8f50828) {
    $5e4fff88bfda53ee$export$e95c0b95a8f50828[$5e4fff88bfda53ee$export$e95c0b95a8f50828["RGB"] = 0] = "RGB";
    $5e4fff88bfda53ee$export$e95c0b95a8f50828[$5e4fff88bfda53ee$export$e95c0b95a8f50828["COLOR"] = 1] = "COLOR";
    $5e4fff88bfda53ee$export$e95c0b95a8f50828[$5e4fff88bfda53ee$export$e95c0b95a8f50828["DEPTH"] = 2] = "DEPTH";
    $5e4fff88bfda53ee$export$e95c0b95a8f50828[$5e4fff88bfda53ee$export$e95c0b95a8f50828["HEIGHT"] = 3] = "HEIGHT";
    $5e4fff88bfda53ee$export$e95c0b95a8f50828[$5e4fff88bfda53ee$export$e95c0b95a8f50828["ELEVATION"] = 3] = "ELEVATION";
    $5e4fff88bfda53ee$export$e95c0b95a8f50828[$5e4fff88bfda53ee$export$e95c0b95a8f50828["INTENSITY"] = 4] = "INTENSITY";
    $5e4fff88bfda53ee$export$e95c0b95a8f50828[$5e4fff88bfda53ee$export$e95c0b95a8f50828["INTENSITY_GRADIENT"] = 5] = "INTENSITY_GRADIENT";
    $5e4fff88bfda53ee$export$e95c0b95a8f50828[$5e4fff88bfda53ee$export$e95c0b95a8f50828["LOD"] = 6] = "LOD";
    $5e4fff88bfda53ee$export$e95c0b95a8f50828[$5e4fff88bfda53ee$export$e95c0b95a8f50828["LEVEL_OF_DETAIL"] = 6] = "LEVEL_OF_DETAIL";
    $5e4fff88bfda53ee$export$e95c0b95a8f50828[$5e4fff88bfda53ee$export$e95c0b95a8f50828["POINT_INDEX"] = 7] = "POINT_INDEX";
    $5e4fff88bfda53ee$export$e95c0b95a8f50828[$5e4fff88bfda53ee$export$e95c0b95a8f50828["CLASSIFICATION"] = 8] = "CLASSIFICATION";
    $5e4fff88bfda53ee$export$e95c0b95a8f50828[$5e4fff88bfda53ee$export$e95c0b95a8f50828["RETURN_NUMBER"] = 9] = "RETURN_NUMBER";
    $5e4fff88bfda53ee$export$e95c0b95a8f50828[$5e4fff88bfda53ee$export$e95c0b95a8f50828["SOURCE"] = 10] = "SOURCE";
    $5e4fff88bfda53ee$export$e95c0b95a8f50828[$5e4fff88bfda53ee$export$e95c0b95a8f50828["NORMAL"] = 11] = "NORMAL";
    $5e4fff88bfda53ee$export$e95c0b95a8f50828[$5e4fff88bfda53ee$export$e95c0b95a8f50828["PHONG"] = 12] = "PHONG";
    $5e4fff88bfda53ee$export$e95c0b95a8f50828[$5e4fff88bfda53ee$export$e95c0b95a8f50828["RGB_HEIGHT"] = 13] = "RGB_HEIGHT";
    $5e4fff88bfda53ee$export$e95c0b95a8f50828[$5e4fff88bfda53ee$export$e95c0b95a8f50828["COMPOSITE"] = 50] = "COMPOSITE";
})($5e4fff88bfda53ee$export$e95c0b95a8f50828 || ($5e4fff88bfda53ee$export$e95c0b95a8f50828 = {
}));


var $104fbfc219aa06c4$exports = {};

$parcel$export($104fbfc219aa06c4$exports, "PointCloudMaterial", () => $104fbfc219aa06c4$export$29121d9ccd2f757a, (v) => $104fbfc219aa06c4$export$29121d9ccd2f757a = v);

var $ad1acfee4d35e677$exports = {};
$ad1acfee4d35e677$exports = "#version 300 es\n\nprecision highp float;\nprecision highp int;\n#define GLSLIFY 1\n\n#define max_clip_boxes 30\n\nin vec3 position;\nin vec3 normal;\nin float intensity;\nin float classification;\nin float returnNumber;\nin float numberOfReturns;\nin float pointSourceID;\nin vec4 indices;\n\nuniform mat4 modelMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\n\nuniform float pcIndex;\n\nuniform float screenWidth;\nuniform float screenHeight;\nuniform float fov;\nuniform float spacing;\n\n#if defined use_clip_box\n\tuniform mat4 clipBoxes[max_clip_boxes];\n#endif\n\nuniform float heightMin;\nuniform float heightMax;\nuniform float size; // pixel size factor\nuniform float minSize; // minimum pixel size\nuniform float maxSize; // maximum pixel size\nuniform float octreeSize;\nuniform vec3 bbSize;\nuniform vec3 uColor;\nuniform float opacity;\nuniform float clipBoxCount;\nuniform float level;\nuniform float vnStart;\nuniform bool isLeafNode;\n\nuniform float filterByNormalThreshold;\nuniform vec2 intensityRange;\nuniform float opacityAttenuation;\nuniform float intensityGamma;\nuniform float intensityContrast;\nuniform float intensityBrightness;\nuniform float rgbGamma;\nuniform float rgbContrast;\nuniform float rgbBrightness;\nuniform float transition;\nuniform float wRGB;\nuniform float wIntensity;\nuniform float wElevation;\nuniform float wClassification;\nuniform float wReturnNumber;\nuniform float wSourceID;\n\nuniform sampler2D visibleNodes;\nuniform sampler2D gradient;\nuniform sampler2D classificationLUT;\nuniform sampler2D depthMap;\n\n#ifdef highlight_point\n\tuniform vec3 highlightedPointCoordinate;\n\tuniform bool enablePointHighlighting;\n\tuniform float highlightedPointScale;\n#endif\n\n#ifdef new_format\n\tin vec4 rgba;\n\tout vec4 vColor;\n#else\n\tin vec3 color;\n\tout vec3 vColor;\n#endif\n\n#if !defined(color_type_point_index)\n\tout float vOpacity;\n#endif\n\n#if defined(weighted_splats)\n\tout float vLinearDepth;\n#endif\n\n#if !defined(paraboloid_point_shape) && defined(use_edl)\n\tout float vLogDepth;\n#endif\n\n#if defined(color_type_phong) && (MAX_POINT_LIGHTS > 0 || MAX_DIR_LIGHTS > 0) || defined(paraboloid_point_shape)\n\tout vec3 vViewPosition;\n#endif\n\n#if defined(weighted_splats) || defined(paraboloid_point_shape)\n\tout float vRadius;\n#endif\n\n#if defined(color_type_phong) && (MAX_POINT_LIGHTS > 0 || MAX_DIR_LIGHTS > 0)\n\tout vec3 vNormal;\n#endif\n\n#ifdef highlight_point\n\tout float vHighlight;\n#endif\n \n// ---------------------\n// OCTREE\n// ---------------------\n\n#if (defined(adaptive_point_size) || defined(color_type_lod)) && defined(tree_type_octree)\n\n/**\n * Rounds the specified number to the closest integer.\n */\nfloat round(float number){\n\treturn floor(number + 0.5);\n}\n\n/**\n * Gets the number of 1-bits up to inclusive index position.\n * \n * number is treated as if it were an integer in the range 0-255\n */\nint numberOfOnes(int number, int index) {\n\tint numOnes = 0;\n\tint tmp = 128;\n\tfor (int i = 7; i >= 0; i--) {\n\n\t\tif (number >= tmp) {\n\t\t\tnumber = number - tmp;\n\n\t\t\tif (i <= index) {\n\t\t\t\tnumOnes++;\n\t\t\t}\n\t\t}\n\n\t\ttmp = tmp / 2;\n\t}\n\n\treturn numOnes;\n}\n\n/**\n * Checks whether the bit at index is 1.0\n *\n * number is treated as if it were an integer in the range 0-255\n */\nbool isBitSet(int number, int index){\n\n\t// weird multi else if due to lack of proper array, int and bitwise support in WebGL 1.0\n\tint powi = 1;\n\tif (index == 0) {\n\t\tpowi = 1;\n\t} else if (index == 1) {\n\t\tpowi = 2;\n\t} else if (index == 2) {\n\t\tpowi = 4;\n\t} else if (index == 3) {\n\t\tpowi = 8;\n\t} else if (index == 4) {\n\t\tpowi = 16;\n\t} else if (index == 5) {\n\t\tpowi = 32;\n\t} else if (index == 6) {\n\t\tpowi = 64;\n\t} else if (index == 7) {\n\t\tpowi = 128;\n\t}\n\n\tint ndp = number / powi;\n\n\treturn mod(float(ndp), 2.0) != 0.0;\n}\n\n/**\n * Gets the the LOD at the point position.\n */\nfloat getLOD() {\n\tvec3 offset = vec3(0.0, 0.0, 0.0);\n\tint iOffset = int(vnStart);\n\tfloat depth = level;\n\n\tfor (float i = 0.0; i <= 30.0; i++) {\n\t\tfloat nodeSizeAtLevel = octreeSize  / pow(2.0, i + level + 0.0);\n\t\t\n\t\tvec3 index3d = (position-offset) / nodeSizeAtLevel;\n\t\tindex3d = floor(index3d + 0.5);\n\t\tint index = int(round(4.0 * index3d.x + 2.0 * index3d.y + index3d.z));\n\t\t\n\t\tvec4 value = texture(visibleNodes, vec2(float(iOffset) / 2048.0, 0.0));\n\t\tint mask = int(round(value.r * 255.0));\n\n\t\tif (isBitSet(mask, index)) {\n\t\t\t// there are more visible child nodes at this position\n\t\t\tint advanceG = int(round(value.g * 255.0)) * 256;\n\t\t\tint advanceB = int(round(value.b * 255.0));\n\t\t\tint advanceChild = numberOfOnes(mask, index - 1);\n\t\t\tint advance = advanceG + advanceB + advanceChild;\n\n\t\t\tiOffset = iOffset + advance;\n\n\t\t\tdepth++;\n\t\t} else {\n\t\t\treturn value.a * 255.0; // no more visible child nodes at this position\n\t\t}\n\t\t\n\t\toffset = offset + (vec3(1.0, 1.0, 1.0) * nodeSizeAtLevel * 0.5) * index3d;  \n\t}\n\t\t\n\treturn depth;\n}\n\nfloat getPointSizeAttenuation() {\n\treturn 0.5 * pow(2.0, getLOD());\n}\n\n#endif\n\n// ---------------------\n// KD-TREE\n// ---------------------\n\n#if (defined(adaptive_point_size) || defined(color_type_lod)) && defined(tree_type_kdtree)\n\nfloat getLOD() {\n\tvec3 offset = vec3(0.0, 0.0, 0.0);\n\tfloat intOffset = 0.0;\n\tfloat depth = 0.0;\n\t\t\t\n\tvec3 size = bbSize;\t\n\tvec3 pos = position;\n\t\t\n\tfor (float i = 0.0; i <= 1000.0; i++) {\n\t\t\n\t\tvec4 value = texture(visibleNodes, vec2(intOffset / 2048.0, 0.0));\n\t\t\n\t\tint children = int(value.r * 255.0);\n\t\tfloat next = value.g * 255.0;\n\t\tint split = int(value.b * 255.0);\n\t\t\n\t\tif (next == 0.0) {\n\t\t \treturn depth;\n\t\t}\n\t\t\n\t\tvec3 splitv = vec3(0.0, 0.0, 0.0);\n\t\tif (split == 1) {\n\t\t\tsplitv.x = 1.0;\n\t\t} else if (split == 2) {\n\t\t \tsplitv.y = 1.0;\n\t\t} else if (split == 4) {\n\t\t \tsplitv.z = 1.0;\n\t\t}\n\t\t\n\t\tintOffset = intOffset + next;\n\t\t\n\t\tfloat factor = length(pos * splitv / size);\n\t\tif (factor < 0.5) {\n\t\t \t// left\n\t\t\tif (children == 0 || children == 2) {\n\t\t\t\treturn depth;\n\t\t\t}\n\t\t} else {\n\t\t\t// right\n\t\t\tpos = pos - size * splitv * 0.5;\n\t\t\tif (children == 0 || children == 1) {\n\t\t\t\treturn depth;\n\t\t\t}\n\t\t\tif (children == 3) {\n\t\t\t\tintOffset = intOffset + 1.0;\n\t\t\t}\n\t\t}\n\t\tsize = size * ((1.0 - (splitv + 1.0) / 2.0) + 0.5);\n\t\t\n\t\tdepth++;\n\t}\n\t\t\n\t\t\n\treturn depth;\t\n}\n\nfloat getPointSizeAttenuation() {\n\treturn 0.5 * pow(1.3, getLOD());\n}\n\n#endif\n\n// formula adapted from: http://www.dfstudios.co.uk/articles/programming/image-programming-algorithms/image-processing-algorithms-part-5-contrast-adjustment/\nfloat getContrastFactor(float contrast) {\n\treturn (1.0158730158730156 * (contrast + 1.0)) / (1.0158730158730156 - contrast);\n}\n\n#ifndef new_format\n\nvec3 getRGB() {\n\t#if defined(use_rgb_gamma_contrast_brightness)\n\t  vec3 rgb = color;\n\t\trgb = pow(rgb, vec3(rgbGamma));\n\t\trgb = rgb + rgbBrightness;\n\t\trgb = (rgb - 0.5) * getContrastFactor(rgbContrast) + 0.5;\n\t\trgb = clamp(rgb, 0.0, 1.0);\n\t\treturn rgb;\n\t#else\n\t\treturn color;\n\t#endif\n}\n\n#endif\n\nfloat getIntensity() {\n\tfloat w = (intensity - intensityRange.x) / (intensityRange.y - intensityRange.x);\n\tw = pow(w, intensityGamma);\n\tw = w + intensityBrightness;\n\tw = (w - 0.5) * getContrastFactor(intensityContrast) + 0.5;\n\tw = clamp(w, 0.0, 1.0);\n\t\n\treturn w;\n}\n\nvec3 getElevation() {\n\tvec4 world = modelMatrix * vec4( position, 1.0 );\n\tfloat w = (world.z - heightMin) / (heightMax-heightMin);\n\tvec3 cElevation = texture(gradient, vec2(w,1.0-w)).rgb;\n\t\n\treturn cElevation;\n}\n\nvec4 getClassification() {\n\tvec2 uv = vec2(classification / 255.0, 0.5);\n\tvec4 classColor = texture(classificationLUT, uv);\n\t\n\treturn classColor;\n}\n\nvec3 getReturnNumber() {\n\tif (numberOfReturns == 1.0) {\n\t\treturn vec3(1.0, 1.0, 0.0);\n\t} else {\n\t\tif (returnNumber == 1.0) {\n\t\t\treturn vec3(1.0, 0.0, 0.0);\n\t\t} else if (returnNumber == numberOfReturns) {\n\t\t\treturn vec3(0.0, 0.0, 1.0);\n\t\t} else {\n\t\t\treturn vec3(0.0, 1.0, 0.0);\n\t\t}\n\t}\n}\n\nvec3 getSourceID() {\n\tfloat w = mod(pointSourceID, 10.0) / 10.0;\n\treturn texture(gradient, vec2(w, 1.0 - w)).rgb;\n}\n\n#ifndef new_format\n\nvec3 getCompositeColor() {\n\tvec3 c;\n\tfloat w;\n\n\tc += wRGB * getRGB();\n\tw += wRGB;\n\t\n\tc += wIntensity * getIntensity() * vec3(1.0, 1.0, 1.0);\n\tw += wIntensity;\n\t\n\tc += wElevation * getElevation();\n\tw += wElevation;\n\t\n\tc += wReturnNumber * getReturnNumber();\n\tw += wReturnNumber;\n\t\n\tc += wSourceID * getSourceID();\n\tw += wSourceID;\n\t\n\tvec4 cl = wClassification * getClassification();\n\tc += cl.a * cl.rgb;\n\tw += wClassification * cl.a;\n\n\tc = c / w;\n\t\n\tif (w == 0.0) {\n\t\tgl_Position = vec4(100.0, 100.0, 100.0, 0.0);\n\t}\n\t\n\treturn c;\n}\n\n#endif\n\nvoid main() {\n\tvec4 mvPosition = modelViewMatrix * vec4(position, 1.0);\n\n\tgl_Position = projectionMatrix * mvPosition;\n\n\t#if defined(color_type_phong) && (MAX_POINT_LIGHTS > 0 || MAX_DIR_LIGHTS > 0) || defined(paraboloid_point_shape)\n\t\tvViewPosition = mvPosition.xyz;\n\t#endif\n\n\t#if defined weighted_splats\n\t\tvLinearDepth = gl_Position.w;\n\t#endif\n\n\t#if defined(color_type_phong) && (MAX_POINT_LIGHTS > 0 || MAX_DIR_LIGHTS > 0)\n\t\tvNormal = normalize(normalMatrix * normal);\n\t#endif\n\n\t#if !defined(paraboloid_point_shape) && defined(use_edl)\n\t\tvLogDepth = log2(-mvPosition.z);\n\t#endif\n\n\t// ---------------------\n\t// POINT SIZE\n\t// ---------------------\n\n\tfloat pointSize = 1.0;\n\tfloat slope = tan(fov / 2.0);\n\tfloat projFactor =  -0.5 * screenHeight / (slope * mvPosition.z);\n\n\t#if defined fixed_point_size\n\t\tpointSize = size;\n\t#elif defined attenuated_point_size\n\t\tpointSize = size * spacing * projFactor;\n\t#elif defined adaptive_point_size\n\t\tfloat worldSpaceSize = 2.0 * size * spacing / getPointSizeAttenuation();\n\t\tpointSize = worldSpaceSize * projFactor;\n\t#endif\n\n\tpointSize = max(minSize, pointSize);\n\tpointSize = min(maxSize, pointSize);\n\n\t#if defined(weighted_splats) || defined(paraboloid_point_shape)\n\t\tvRadius = pointSize / projFactor;\n\t#endif\n\n\tgl_PointSize = pointSize;\n\n\t// ---------------------\n\t// HIGHLIGHTING\n\t// ---------------------\n\n\t#ifdef highlight_point\n\t\tvec4 mPosition = modelMatrix * vec4(position, 1.0);\n\t\tif (enablePointHighlighting && abs(mPosition.x - highlightedPointCoordinate.x) < 0.0001 &&\n\t\t\tabs(mPosition.y - highlightedPointCoordinate.y) < 0.0001 &&\n\t\t\tabs(mPosition.z - highlightedPointCoordinate.z) < 0.0001) {\n\t\t\tvHighlight = 1.0;\n\t\t\tgl_PointSize = pointSize * highlightedPointScale;\n\t\t} else {\n\t\t\tvHighlight = 0.0;\n\t\t}\n\t#endif\n\n\t// ---------------------\n\t// OPACITY\n\t// ---------------------\n\n\t#ifndef color_type_point_index\n\t\t#ifdef attenuated_opacity\n\t\t\tvOpacity = opacity * exp(-length(-mvPosition.xyz) / opacityAttenuation);\n\t\t#else\n\t\t\tvOpacity = opacity;\n\t\t#endif\n\t#endif\n\n\t// ---------------------\n\t// FILTERING\n\t// ---------------------\n\n\t#ifdef use_filter_by_normal\n\t\tif(abs((modelViewMatrix * vec4(normal, 0.0)).z) > filterByNormalThreshold) {\n\t\t\t// Move point outside clip space space to discard it.\n\t\t\tgl_Position = vec4(0.0, 0.0, 2.0, 1.0);\n\t\t}\n\t#endif\n\n\t// ---------------------\n\t// POINT COLOR\n\t// ---------------------\t\n\t#ifdef new_format\n\t\tvColor = rgba;\n\t#elif defined color_type_rgb\n\t\tvColor = getRGB();\n\t#elif defined color_type_height\n\t\tvColor = getElevation();\n\t#elif defined color_type_rgb_height\n\t\tvec3 cHeight = getElevation();\n\t\tvColor = (1.0 - transition) * getRGB() + transition * cHeight;\n\t#elif defined color_type_depth\n\t\tfloat linearDepth = -mvPosition.z ;\n\t\tfloat expDepth = (gl_Position.z / gl_Position.w) * 0.5 + 0.5;\n\t\tvColor = vec3(linearDepth, expDepth, 0.0);\n\t#elif defined color_type_intensity\n\t\tfloat w = getIntensity();\n\t\tvColor = vec3(w, w, w);\n\t#elif defined color_type_intensity_gradient\n\t\tfloat w = getIntensity();\n\t\tvColor = texture(gradient, vec2(w, 1.0 - w)).rgb;\n\t#elif defined color_type_color\n\t\tvColor = uColor;\n\t#elif defined color_type_lod\n\tfloat w = getLOD() / 10.0;\n\tvColor = texture(gradient, vec2(w, 1.0 - w)).rgb;\n\t#elif defined color_type_point_index\n\t\tvColor = indices.rgb;\n\t#elif defined color_type_classification\n\t  vec4 cl = getClassification(); \n\t\tvColor = cl.rgb;\n\t#elif defined color_type_return_number\n\t\tvColor = getReturnNumber();\n\t#elif defined color_type_source\n\t\tvColor = getSourceID();\n\t#elif defined color_type_normal\n\t\tvColor = (modelMatrix * vec4(normal, 0.0)).xyz;\n\t#elif defined color_type_phong\n\t\tvColor = color;\n\t#elif defined color_type_composite\n\t\tvColor = getCompositeColor();\n\t#endif\n\t\n\t#if !defined color_type_composite && defined color_type_classification\n\t\tif (cl.a == 0.0) {\n\t\t\tgl_Position = vec4(100.0, 100.0, 100.0, 0.0);\n\t\t\treturn;\n\t\t}\n\t#endif\n\n\t// ---------------------\n\t// CLIPPING\n\t// ---------------------\n\n\t#if defined use_clip_box\n\t\tbool insideAny = false;\n\t\tfor (int i = 0; i < max_clip_boxes; i++) {\n\t\t\tif (i == int(clipBoxCount)) {\n\t\t\t\tbreak;\n\t\t\t}\n\t\t\n\t\t\tvec4 clipPosition = clipBoxes[i] * modelMatrix * vec4(position, 1.0);\n\t\t\tbool inside = -0.5 <= clipPosition.x && clipPosition.x <= 0.5;\n\t\t\tinside = inside && -0.5 <= clipPosition.y && clipPosition.y <= 0.5;\n\t\t\tinside = inside && -0.5 <= clipPosition.z && clipPosition.z <= 0.5;\n\t\t\tinsideAny = insideAny || inside;\n\t\t}\n\n\t\tif (!insideAny) {\n\t\t\t#if defined clip_outside\n\t\t\t\tgl_Position = vec4(1000.0, 1000.0, 1000.0, 1.0);\n\t\t\t#elif defined clip_highlight_inside && !defined(color_type_depth)\n\t\t\t\tfloat c = (vColor.r + vColor.g + vColor.b) / 6.0;\n\t\t\t#endif\n\t\t} else {\n\t\t\t#if defined clip_highlight_inside\n\t\t\t\tvColor.r += 0.5;\n\t\t\t#endif\n\t\t}\n\t#endif\n}\n";


var $9d44389b42069366$exports = {};
$9d44389b42069366$exports = "#version 300 es\n\nprecision highp float;\nprecision highp int;\n#define GLSLIFY 1\n\nuniform mat4 viewMatrix;\nuniform vec3 cameraPosition;\n\nuniform mat4 projectionMatrix;\nuniform float opacity;\n\nuniform float blendHardness;\nuniform float blendDepthSupplement;\nuniform float fov;\nuniform float spacing;\nuniform float pcIndex;\nuniform float screenWidth;\nuniform float screenHeight;\n\nuniform sampler2D depthMap;\n\nout vec4 fragColor;\n\n#ifdef highlight_point\n\tuniform vec4 highlightedPointColor;\n#endif\n\n#ifdef new_format\n\tin vec4 vColor;\n#else\n\tin vec3 vColor;\n#endif\n\n#if !defined(color_type_point_index)\n\tin float vOpacity;\n#endif\n\n#if defined(weighted_splats)\n\tin float vLinearDepth;\n#endif\n\n#if !defined(paraboloid_point_shape) && defined(use_edl)\n\tin float vLogDepth;\n#endif\n\n#if defined(color_type_phong) && (MAX_POINT_LIGHTS > 0 || MAX_DIR_LIGHTS > 0) || defined(paraboloid_point_shape)\n\tin vec3 vViewPosition;\n#endif\n\n#if defined(weighted_splats) || defined(paraboloid_point_shape)\n\tin float vRadius;\n#endif\n\n#if defined(color_type_phong) && (MAX_POINT_LIGHTS > 0 || MAX_DIR_LIGHTS > 0)\n\tin vec3 vNormal;\n#endif\n\n#ifdef highlight_point\n\tin float vHighlight;\n#endif\n\nfloat specularStrength = 1.0;\n\nvoid main() {\n\n\t#ifdef new_format\n\t\t// set actualColor vec3 from vec4 vColor\n\t\tvec3 actualColor = vColor.xyz;\n\t#else\n\t\t// set actualColor RGB from the XYZ of vColor\n\t\tvec3 actualColor = vColor;\n\t#endif\n\t\n\tvec3 color = actualColor;\n\tfloat depth = gl_FragCoord.z;\n\n\t#if defined(circle_point_shape) || defined(paraboloid_point_shape) || defined (weighted_splats)\n\t\tfloat u = 2.0 * gl_PointCoord.x - 1.0;\n\t\tfloat v = 2.0 * gl_PointCoord.y - 1.0;\n\t#endif\n\t\n\t#if defined(circle_point_shape) || defined (weighted_splats)\n\t\tfloat cc = u*u + v*v;\n\t\tif(cc > 1.0){\n\t\t\tdiscard;\n\t\t}\n\t#endif\n\n\t#if defined weighted_splats\n\t\tvec2 uv = gl_FragCoord.xy / vec2(screenWidth, screenHeight);\n\t\tfloat sDepth = texture2D(depthMap, uv).r;\n\t\tif(vLinearDepth > sDepth + vRadius + blendDepthSupplement){\n\t\t\tdiscard;\n\t\t}\n\t#endif\n\t\t\n\t#if defined color_type_point_index\n\t\tfragColor = vec4(color, pcIndex / 255.0);\n\t#else\n\t\tfragColor = vec4(color, vOpacity);\n\t#endif\n\n\t#if defined(color_type_phong)\n\t\t#if MAX_POINT_LIGHTS > 0 || MAX_DIR_LIGHTS > 0\n\t\t\tvec3 normal = normalize( vNormal );\n\t\t\tnormal.z = abs(normal.z);\n\n\t\t\tvec3 viewPosition = normalize( vViewPosition );\n\t\t#endif\n\n\t\t// code taken from three.js phong light fragment shader\n\t\n\t\t#if MAX_POINT_LIGHTS > 0\n\n\t\t\tvec3 pointDiffuse = vec3( 0.0 );\n\t\t\tvec3 pointSpecular = vec3( 0.0 );\n\n\t\t\tfor ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\n\n\t\t\t\tvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\n\t\t\t\tvec3 lVector = lPosition.xyz + vViewPosition.xyz;\n\n\t\t\t\tfloat lDistance = 1.0;\n\t\t\t\tif ( pointLightDistance[ i ] > 0.0 )\n\t\t\t\t\tlDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\n\n\t\t\t\tlVector = normalize( lVector );\n\n\t\t\t\t\t\t// diffuse\n\n\t\t\t\tfloat dotProduct = dot( normal, lVector );\n\n\t\t\t\t#ifdef WRAP_AROUND\n\n\t\t\t\t\tfloat pointDiffuseWeightFull = max( dotProduct, 0.0 );\n\t\t\t\t\tfloat pointDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\n\n\t\t\t\t\tvec3 pointDiffuseWeight = mix( vec3( pointDiffuseWeightFull ), vec3( pointDiffuseWeightHalf ), wrapRGB );\n\n\t\t\t\t#else\n\n\t\t\t\t\tfloat pointDiffuseWeight = max( dotProduct, 0.0 );\n\n\t\t\t\t#endif\n\n\t\t\t\tpointDiffuse += diffuse * pointLightColor[ i ] * pointDiffuseWeight * lDistance;\n\n\t\t\t\t// specular\n\n\t\t\t\tvec3 pointHalfVector = normalize( lVector + viewPosition );\n\t\t\t\tfloat pointDotNormalHalf = max( dot( normal, pointHalfVector ), 0.0 );\n\t\t\t\tfloat pointSpecularWeight = specularStrength * max( pow( pointDotNormalHalf, shininess ), 0.0 );\n\n\t\t\t\tfloat specularNormalization = ( shininess + 2.0 ) / 8.0;\n\n\t\t\t\tvec3 schlick = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( lVector, pointHalfVector ), 0.0 ), 5.0 );\n\t\t\t\tpointSpecular += schlick * pointLightColor[ i ] * pointSpecularWeight * pointDiffuseWeight * lDistance * specularNormalization;\n\t\t\t\tpointSpecular = vec3(0.0, 0.0, 0.0);\n\t\t\t}\n\t\t\n\t\t#endif\n\t\t\n\t\t#if MAX_DIR_LIGHTS > 0\n\n\t\t\tvec3 dirDiffuse = vec3( 0.0 );\n\t\t\tvec3 dirSpecular = vec3( 0.0 );\n\n\t\t\tfor( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {\n\n\t\t\t\tvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\n\t\t\t\tvec3 dirVector = normalize( lDirection.xyz );\n\n\t\t\t\t\t\t// diffuse\n\n\t\t\t\tfloat dotProduct = dot( normal, dirVector );\n\n\t\t\t\t#ifdef WRAP_AROUND\n\n\t\t\t\t\tfloat dirDiffuseWeightFull = max( dotProduct, 0.0 );\n\t\t\t\t\tfloat dirDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\n\n\t\t\t\t\tvec3 dirDiffuseWeight = mix( vec3( dirDiffuseWeightFull ), vec3( dirDiffuseWeightHalf ), wrapRGB );\n\n\t\t\t\t#else\n\n\t\t\t\t\tfloat dirDiffuseWeight = max( dotProduct, 0.0 );\n\n\t\t\t\t#endif\n\n\t\t\t\tdirDiffuse += diffuse * directionalLightColor[ i ] * dirDiffuseWeight;\n\n\t\t\t\t// specular\n\n\t\t\t\tvec3 dirHalfVector = normalize( dirVector + viewPosition );\n\t\t\t\tfloat dirDotNormalHalf = max( dot( normal, dirHalfVector ), 0.0 );\n\t\t\t\tfloat dirSpecularWeight = specularStrength * max( pow( dirDotNormalHalf, shininess ), 0.0 );\n\n\t\t\t\tfloat specularNormalization = ( shininess + 2.0 ) / 8.0;\n\n\t\t\t\tvec3 schlick = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( dirVector, dirHalfVector ), 0.0 ), 5.0 );\n\t\t\t\tdirSpecular += schlick * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight * specularNormalization;\n\t\t\t}\n\n\t\t#endif\n\t\t\n\t\tvec3 totalDiffuse = vec3( 0.0 );\n\t\tvec3 totalSpecular = vec3( 0.0 );\n\t\t\n\t\t#if MAX_POINT_LIGHTS > 0\n\n\t\t\ttotalDiffuse += pointDiffuse;\n\t\t\ttotalSpecular += pointSpecular;\n\n\t\t#endif\n\t\t\n\t\t#if MAX_DIR_LIGHTS > 0\n\n\t\t\ttotalDiffuse += dirDiffuse;\n\t\t\ttotalSpecular += dirSpecular;\n\n\t\t#endif\n\t\t\n\t\tgl_FragColor.xyz = gl_FragColor.xyz * ( emissive + totalDiffuse + ambientLightColor * ambient ) + totalSpecular;\n\n\t#endif\n\t\n\t#if defined weighted_splats\n\t    //float w = pow(1.0 - (u*u + v*v), blendHardness);\n\t\t\n\t\tfloat wx = 2.0 * length(2.0 * gl_PointCoord - 1.0);\n\t\tfloat w = exp(-wx * wx * 0.5);\n\t\t\n\t\t//float distance = length(2.0 * gl_PointCoord - 1.0);\n\t\t//float w = exp( -(distance * distance) / blendHardness);\n\t\t\n\t\tgl_FragColor.rgb = gl_FragColor.rgb * w;\n\t\tgl_FragColor.a = w;\n\t#endif\n\t\n\t#if defined paraboloid_point_shape\n\t\tfloat wi = 0.0 - ( u*u + v*v);\n\t\tvec4 pos = vec4(vViewPosition, 1.0);\n\t\tpos.z += wi * vRadius;\n\t\tfloat linearDepth = -pos.z;\n\t\tpos = projectionMatrix * pos;\n\t\tpos = pos / pos.w;\n\t\tfloat expDepth = pos.z;\n\t\tdepth = (pos.z + 1.0) / 2.0;\n\t\tgl_FragDepth = depth;\n\t\t\n\t\t#if defined(color_type_depth)\n\t\t\tgl_FragColor.r = linearDepth;\n\t\t\tgl_FragColor.g = expDepth;\n\t\t#endif\n\t\t\n\t\t#if defined(use_edl)\n\t\t\tgl_FragColor.a = log2(linearDepth);\n\t\t#endif\n\t\t\n\t#else\n\t\t#if defined(use_edl)\n\t\t\tgl_FragColor.a = vLogDepth;\n\t\t#endif\n\t#endif\n\n\t#ifdef highlight_point\n\t\tif (vHighlight > 0.0) {\n\t\t\tgl_FragColor = highlightedPointColor;\n\t\t}\n\t#endif\n}\n";



const $495369f3383d41e2$export$d8264162e39166da = 0;
const $495369f3383d41e2$export$f5bcf4061d6c95ff = 0;
const $495369f3383d41e2$export$3dfcde43b7e3a6b2 = 1;
const $495369f3383d41e2$export$4085dab35b4d87d0 = 50;
const $495369f3383d41e2$export$3b9a069507d71e62 = 50;
const $495369f3383d41e2$export$1239abc5c6b6b638 = 2;
const $495369f3383d41e2$export$3afb6949e9e95986 = 15;
const $495369f3383d41e2$export$c8c6b7c1efe52f9c = 1000000;
const $495369f3383d41e2$export$ab0b8debcb3d8b4b = 2;
const $495369f3383d41e2$export$1cee45d320f06d39 = 4;
const $495369f3383d41e2$export$8900560817e7f3be = 'PerspectiveCamera';
const $495369f3383d41e2$export$b20901887aa920fd = new $hgUW1$Color(0, 0, 0);
const $495369f3383d41e2$export$4b15acc9c405c4bd = new $hgUW1$Vector4(1, 0, 0, 1);


function $5de7f1de3e851041$export$dd1fe7c4c1e496ce(name) {
    return parseInt(name.charAt(name.length - 1), 10);
}
function $5de7f1de3e851041$export$62f8c94ac3a8e8b3(a, b) {
    const na = a.name;
    const nb = b.name;
    if (na.length !== nb.length) return na.length - nb.length;
    else if (na < nb) return -1;
    else if (na > nb) return 1;
    else return 0;
}



const $453c0a8ef7e718e1$export$9b199c3271672261 = {
    0: new $hgUW1$Vector4(0.5, 0.5, 0.5, 1),
    1: new $hgUW1$Vector4(0.5, 0.5, 0.5, 1),
    2: new $hgUW1$Vector4(0.63, 0.32, 0.18, 1),
    3: new $hgUW1$Vector4(0, 1, 0, 1),
    4: new $hgUW1$Vector4(0, 0.8, 0, 1),
    5: new $hgUW1$Vector4(0, 0.6, 0, 1),
    6: new $hgUW1$Vector4(1, 0.66, 0, 1),
    7: new $hgUW1$Vector4(1, 0, 1, 1),
    8: new $hgUW1$Vector4(1, 0, 0, 1),
    9: new $hgUW1$Vector4(0, 0, 1, 1),
    12: new $hgUW1$Vector4(1, 1, 0, 1),
    DEFAULT: new $hgUW1$Vector4(0.3, 0.6, 0.6, 0.5)
};




var $56280d40890ebad7$exports = {};
var $e9094b64304453a9$exports = {};

$parcel$export($e9094b64304453a9$exports, "GRAYSCALE", () => $e9094b64304453a9$export$795f08762ba1b68c);

const $e9094b64304453a9$export$795f08762ba1b68c = [
    [
        0,
        new $hgUW1$Color(0, 0, 0)
    ],
    [
        1,
        new $hgUW1$Color(1, 1, 1)
    ], 
];


var $de7fe8deb64de9a4$exports = {};

$parcel$export($de7fe8deb64de9a4$exports, "INFERNO", () => $de7fe8deb64de9a4$export$26ffe1805c7bf718);

const $de7fe8deb64de9a4$export$26ffe1805c7bf718 = [
    [
        0,
        new $hgUW1$Color(0.077, 0.042, 0.206)
    ],
    [
        0.1,
        new $hgUW1$Color(0.225, 0.036, 0.388)
    ],
    [
        0.2,
        new $hgUW1$Color(0.373, 0.074, 0.432)
    ],
    [
        0.3,
        new $hgUW1$Color(0.522, 0.128, 0.42)
    ],
    [
        0.4,
        new $hgUW1$Color(0.665, 0.182, 0.37)
    ],
    [
        0.5,
        new $hgUW1$Color(0.797, 0.255, 0.287)
    ],
    [
        0.6,
        new $hgUW1$Color(0.902, 0.364, 0.184)
    ],
    [
        0.7,
        new $hgUW1$Color(0.969, 0.516, 0.063)
    ],
    [
        0.8,
        new $hgUW1$Color(0.988, 0.683, 0.072)
    ],
    [
        0.9,
        new $hgUW1$Color(0.961, 0.859, 0.298)
    ],
    [
        1,
        new $hgUW1$Color(0.988, 0.998, 0.645)
    ], 
];


var $b45e8c3ed76e3d5b$exports = {};

$parcel$export($b45e8c3ed76e3d5b$exports, "PLASMA", () => $b45e8c3ed76e3d5b$export$6c89e34c5e9ab660);

const $b45e8c3ed76e3d5b$export$6c89e34c5e9ab660 = [
    [
        0,
        new $hgUW1$Color(0.241, 0.015, 0.61)
    ],
    [
        0.1,
        new $hgUW1$Color(0.387, 0.001, 0.654)
    ],
    [
        0.2,
        new $hgUW1$Color(0.524, 0.025, 0.653)
    ],
    [
        0.3,
        new $hgUW1$Color(0.651, 0.125, 0.596)
    ],
    [
        0.4,
        new $hgUW1$Color(0.752, 0.227, 0.513)
    ],
    [
        0.5,
        new $hgUW1$Color(0.837, 0.329, 0.431)
    ],
    [
        0.6,
        new $hgUW1$Color(0.907, 0.435, 0.353)
    ],
    [
        0.7,
        new $hgUW1$Color(0.963, 0.554, 0.272)
    ],
    [
        0.8,
        new $hgUW1$Color(0.992, 0.681, 0.195)
    ],
    [
        0.9,
        new $hgUW1$Color(0.987, 0.822, 0.144)
    ],
    [
        1,
        new $hgUW1$Color(0.94, 0.975, 0.131)
    ], 
];


var $4982ed7e4b958d27$exports = {};

$parcel$export($4982ed7e4b958d27$exports, "RAINBOW", () => $4982ed7e4b958d27$export$fc43e6ea480ea76f);

const $4982ed7e4b958d27$export$fc43e6ea480ea76f = [
    [
        0,
        new $hgUW1$Color(0.278, 0, 0.714)
    ],
    [
        1 / 6,
        new $hgUW1$Color(0, 0, 1)
    ],
    [
        2 / 6,
        new $hgUW1$Color(0, 1, 1)
    ],
    [
        0.5,
        new $hgUW1$Color(0, 1, 0)
    ],
    [
        4 / 6,
        new $hgUW1$Color(1, 1, 0)
    ],
    [
        5 / 6,
        new $hgUW1$Color(1, 0.64, 0)
    ],
    [
        1,
        new $hgUW1$Color(1, 0, 0)
    ], 
];


var $855161ee86562854$exports = {};

$parcel$export($855161ee86562854$exports, "SPECTRAL", () => $855161ee86562854$export$8beb2468e5d7f653);

const $855161ee86562854$export$8beb2468e5d7f653 = [
    [
        0,
        new $hgUW1$Color(0.3686, 0.3098, 0.6353)
    ],
    [
        0.1,
        new $hgUW1$Color(0.1961, 0.5333, 0.7412)
    ],
    [
        0.2,
        new $hgUW1$Color(0.4, 0.7608, 0.6471)
    ],
    [
        0.3,
        new $hgUW1$Color(0.6706, 0.8667, 0.6431)
    ],
    [
        0.4,
        new $hgUW1$Color(0.902, 0.9608, 0.5961)
    ],
    [
        0.5,
        new $hgUW1$Color(1, 1, 0.749)
    ],
    [
        0.6,
        new $hgUW1$Color(0.9961, 0.8784, 0.5451)
    ],
    [
        0.7,
        new $hgUW1$Color(0.9922, 0.6824, 0.3804)
    ],
    [
        0.8,
        new $hgUW1$Color(0.9569, 0.4275, 0.2627)
    ],
    [
        0.9,
        new $hgUW1$Color(0.8353, 0.2431, 0.3098)
    ],
    [
        1,
        new $hgUW1$Color(0.6196, 0.0039, 0.2588)
    ], 
];


var $874a1d158524c990$exports = {};

$parcel$export($874a1d158524c990$exports, "VIRIDIS", () => $874a1d158524c990$export$d793f114aad17738);

const $874a1d158524c990$export$d793f114aad17738 = [
    [
        0,
        new $hgUW1$Color(0.267, 0.005, 0.329)
    ],
    [
        0.1,
        new $hgUW1$Color(0.283, 0.141, 0.458)
    ],
    [
        0.2,
        new $hgUW1$Color(0.254, 0.265, 0.53)
    ],
    [
        0.3,
        new $hgUW1$Color(0.207, 0.372, 0.553)
    ],
    [
        0.4,
        new $hgUW1$Color(0.164, 0.471, 0.558)
    ],
    [
        0.5,
        new $hgUW1$Color(0.128, 0.567, 0.551)
    ],
    [
        0.6,
        new $hgUW1$Color(0.135, 0.659, 0.518)
    ],
    [
        0.7,
        new $hgUW1$Color(0.267, 0.749, 0.441)
    ],
    [
        0.8,
        new $hgUW1$Color(0.478, 0.821, 0.318)
    ],
    [
        0.9,
        new $hgUW1$Color(0.741, 0.873, 0.15)
    ],
    [
        1,
        new $hgUW1$Color(0.993, 0.906, 0.144)
    ], 
];


var $2dd88a2a4c2e9932$exports = {};

$parcel$export($2dd88a2a4c2e9932$exports, "YELLOW_GREEN", () => $2dd88a2a4c2e9932$export$c97e84e6a442ddd4);

const $2dd88a2a4c2e9932$export$c97e84e6a442ddd4 = [
    [
        0,
        new $hgUW1$Color(0.1647, 0.2824, 0.3451)
    ],
    [
        0.1,
        new $hgUW1$Color(0.1338, 0.3555, 0.4227)
    ],
    [
        0.2,
        new $hgUW1$Color(0.061, 0.4319, 0.4864)
    ],
    [
        0.3,
        new $hgUW1$Color(0, 0.5099, 0.5319)
    ],
    [
        0.4,
        new $hgUW1$Color(0, 0.5881, 0.5569)
    ],
    [
        0.5,
        new $hgUW1$Color(0.137, 0.665, 0.5614)
    ],
    [
        0.6,
        new $hgUW1$Color(0.2906, 0.7395, 0.5477)
    ],
    [
        0.7,
        new $hgUW1$Color(0.4453, 0.8099, 0.5201)
    ],
    [
        0.8,
        new $hgUW1$Color(0.6102, 0.8748, 0.485)
    ],
    [
        0.9,
        new $hgUW1$Color(0.7883, 0.9323, 0.4514)
    ],
    [
        1,
        new $hgUW1$Color(0.9804, 0.9804, 0.4314)
    ], 
];


$parcel$exportWildcard($56280d40890ebad7$exports, $e9094b64304453a9$exports);
$parcel$exportWildcard($56280d40890ebad7$exports, $de7fe8deb64de9a4$exports);
$parcel$exportWildcard($56280d40890ebad7$exports, $b45e8c3ed76e3d5b$exports);
$parcel$exportWildcard($56280d40890ebad7$exports, $4982ed7e4b958d27$exports);
$parcel$exportWildcard($56280d40890ebad7$exports, $855161ee86562854$exports);
$parcel$exportWildcard($56280d40890ebad7$exports, $874a1d158524c990$exports);
$parcel$exportWildcard($56280d40890ebad7$exports, $2dd88a2a4c2e9932$exports);


var $3fa0b589b7342ac5$exports = {};

$parcel$export($3fa0b589b7342ac5$exports, "generateDataTexture", () => $3fa0b589b7342ac5$export$1e96beb2edc20271);
$parcel$export($3fa0b589b7342ac5$exports, "generateGradientTexture", () => $3fa0b589b7342ac5$export$fdceb370ef27f1c7);
$parcel$export($3fa0b589b7342ac5$exports, "generateClassificationTexture", () => $3fa0b589b7342ac5$export$20a331fc7ad618b2);

function $3fa0b589b7342ac5$export$1e96beb2edc20271(width, height, color) {
    const size = width * height;
    const data = new Uint8Array(4 * size);
    const r = Math.floor(color.r * 255);
    const g = Math.floor(color.g * 255);
    const b = Math.floor(color.b * 255);
    for(let i = 0; i < size; i++){
        data[i * 3] = r;
        data[i * 3 + 1] = g;
        data[i * 3 + 2] = b;
    }
    const texture = new $hgUW1$DataTexture(data, width, height, $hgUW1$RGBAFormat);
    texture.needsUpdate = true;
    texture.magFilter = $hgUW1$NearestFilter;
    return texture;
}
function $3fa0b589b7342ac5$export$fdceb370ef27f1c7(gradient) {
    const size = 64;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const context = canvas.getContext('2d');
    context.rect(0, 0, size, size);
    const ctxGradient = context.createLinearGradient(0, 0, size, size);
    for(let i = 0; i < gradient.length; i++){
        const step = gradient[i];
        ctxGradient.addColorStop(step[0], `#${step[1].getHexString()}`);
    }
    context.fillStyle = ctxGradient;
    context.fill();
    const texture = new $hgUW1$CanvasTexture(canvas);
    texture.needsUpdate = true;
    texture.minFilter = $hgUW1$LinearFilter;
    // textureImage = texture.image;
    return texture;
}
function $3fa0b589b7342ac5$export$20a331fc7ad618b2(classification) {
    const width = 256;
    const height = 256;
    const size = width * height;
    const data = new Uint8Array(4 * size);
    for(let x = 0; x < width; x++)for(let y = 0; y < height; y++){
        const i = x + width * y;
        let color;
        if (classification[x]) color = classification[x];
        else if (classification[x % 32]) color = classification[x % 32];
        else color = classification.DEFAULT;
        data[4 * i + 0] = 255 * color.x;
        data[4 * i + 1] = 255 * color.y;
        data[4 * i + 2] = 255 * color.z;
        data[4 * i + 3] = 255 * color.w;
    }
    const texture = new $hgUW1$DataTexture(data, width, height, $hgUW1$RGBAFormat);
    texture.magFilter = $hgUW1$NearestFilter;
    texture.needsUpdate = true;
    return texture;
}


var $104fbfc219aa06c4$var$__decorate = undefined && undefined.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const $104fbfc219aa06c4$var$TREE_TYPE_DEFS = {
    [$5e4fff88bfda53ee$export$eaf124a76310c668.OCTREE]: 'tree_type_octree',
    [$5e4fff88bfda53ee$export$eaf124a76310c668.KDTREE]: 'tree_type_kdtree'
};
const $104fbfc219aa06c4$var$SIZE_TYPE_DEFS = {
    [$5e4fff88bfda53ee$export$d1cbf822ea081fee.FIXED]: 'fixed_point_size',
    [$5e4fff88bfda53ee$export$d1cbf822ea081fee.ATTENUATED]: 'attenuated_point_size',
    [$5e4fff88bfda53ee$export$d1cbf822ea081fee.ADAPTIVE]: 'adaptive_point_size'
};
const $104fbfc219aa06c4$var$OPACITY_DEFS = {
    [$5e4fff88bfda53ee$export$b3da46a9b4c877b5.ATTENUATED]: 'attenuated_opacity',
    [$5e4fff88bfda53ee$export$b3da46a9b4c877b5.FIXED]: 'fixed_opacity'
};
const $104fbfc219aa06c4$var$SHAPE_DEFS = {
    [$5e4fff88bfda53ee$export$5ffaab227f4e4906.SQUARE]: 'square_point_shape',
    [$5e4fff88bfda53ee$export$5ffaab227f4e4906.CIRCLE]: 'circle_point_shape',
    [$5e4fff88bfda53ee$export$5ffaab227f4e4906.PARABOLOID]: 'paraboloid_point_shape'
};
const $104fbfc219aa06c4$var$COLOR_DEFS = {
    [$5e4fff88bfda53ee$export$e95c0b95a8f50828.RGB]: 'color_type_rgb',
    [$5e4fff88bfda53ee$export$e95c0b95a8f50828.COLOR]: 'color_type_color',
    [$5e4fff88bfda53ee$export$e95c0b95a8f50828.DEPTH]: 'color_type_depth',
    [$5e4fff88bfda53ee$export$e95c0b95a8f50828.HEIGHT]: 'color_type_height',
    [$5e4fff88bfda53ee$export$e95c0b95a8f50828.INTENSITY]: 'color_type_intensity',
    [$5e4fff88bfda53ee$export$e95c0b95a8f50828.INTENSITY_GRADIENT]: 'color_type_intensity_gradient',
    [$5e4fff88bfda53ee$export$e95c0b95a8f50828.LOD]: 'color_type_lod',
    [$5e4fff88bfda53ee$export$e95c0b95a8f50828.POINT_INDEX]: 'color_type_point_index',
    [$5e4fff88bfda53ee$export$e95c0b95a8f50828.CLASSIFICATION]: 'color_type_classification',
    [$5e4fff88bfda53ee$export$e95c0b95a8f50828.RETURN_NUMBER]: 'color_type_return_number',
    [$5e4fff88bfda53ee$export$e95c0b95a8f50828.SOURCE]: 'color_type_source',
    [$5e4fff88bfda53ee$export$e95c0b95a8f50828.NORMAL]: 'color_type_normal',
    [$5e4fff88bfda53ee$export$e95c0b95a8f50828.PHONG]: 'color_type_phong',
    [$5e4fff88bfda53ee$export$e95c0b95a8f50828.RGB_HEIGHT]: 'color_type_rgb_height',
    [$5e4fff88bfda53ee$export$e95c0b95a8f50828.COMPOSITE]: 'color_type_composite'
};
const $104fbfc219aa06c4$var$CLIP_MODE_DEFS = {
    [$7b3263892bf52898$export$e04e7431702ec10a.DISABLED]: 'clip_disabled',
    [$7b3263892bf52898$export$e04e7431702ec10a.CLIP_OUTSIDE]: 'clip_outside',
    [$7b3263892bf52898$export$e04e7431702ec10a.HIGHLIGHT_INSIDE]: 'clip_highlight_inside'
};
class $104fbfc219aa06c4$export$29121d9ccd2f757a extends $hgUW1$RawShaderMaterial {
    constructor(parameters = {
    }){
        super();
        this.lights = false;
        this.fog = false;
        this.numClipBoxes = 0;
        this.clipBoxes = [];
        this.visibleNodeTextureOffsets = new Map();
        this._gradient = $855161ee86562854$export$8beb2468e5d7f653;
        this.gradientTexture = $3fa0b589b7342ac5$export$fdceb370ef27f1c7(this._gradient);
        this._classification = $453c0a8ef7e718e1$export$9b199c3271672261;
        this.classificationTexture = $3fa0b589b7342ac5$export$20a331fc7ad618b2(this._classification);
        this.uniforms = {
            bbSize: $104fbfc219aa06c4$var$makeUniform('fv', [
                0,
                0,
                0
            ]),
            blendDepthSupplement: $104fbfc219aa06c4$var$makeUniform('f', 0),
            blendHardness: $104fbfc219aa06c4$var$makeUniform('f', 2),
            classificationLUT: $104fbfc219aa06c4$var$makeUniform('t', this.classificationTexture || new $hgUW1$Texture()),
            clipBoxCount: $104fbfc219aa06c4$var$makeUniform('f', 0),
            clipBoxes: $104fbfc219aa06c4$var$makeUniform('Matrix4fv', []),
            depthMap: $104fbfc219aa06c4$var$makeUniform('t', null),
            diffuse: $104fbfc219aa06c4$var$makeUniform('fv', [
                1,
                1,
                1
            ]),
            fov: $104fbfc219aa06c4$var$makeUniform('f', 1),
            gradient: $104fbfc219aa06c4$var$makeUniform('t', this.gradientTexture || new $hgUW1$Texture()),
            heightMax: $104fbfc219aa06c4$var$makeUniform('f', 1),
            heightMin: $104fbfc219aa06c4$var$makeUniform('f', 0),
            intensityBrightness: $104fbfc219aa06c4$var$makeUniform('f', 0),
            intensityContrast: $104fbfc219aa06c4$var$makeUniform('f', 0),
            intensityGamma: $104fbfc219aa06c4$var$makeUniform('f', 1),
            intensityRange: $104fbfc219aa06c4$var$makeUniform('fv', [
                0,
                65000
            ]),
            isLeafNode: $104fbfc219aa06c4$var$makeUniform('b', 0),
            level: $104fbfc219aa06c4$var$makeUniform('f', 0),
            maxSize: $104fbfc219aa06c4$var$makeUniform('f', $495369f3383d41e2$export$4085dab35b4d87d0),
            minSize: $104fbfc219aa06c4$var$makeUniform('f', $495369f3383d41e2$export$1239abc5c6b6b638),
            octreeSize: $104fbfc219aa06c4$var$makeUniform('f', 0),
            opacity: $104fbfc219aa06c4$var$makeUniform('f', 1),
            pcIndex: $104fbfc219aa06c4$var$makeUniform('f', 0),
            rgbBrightness: $104fbfc219aa06c4$var$makeUniform('f', $495369f3383d41e2$export$d8264162e39166da),
            rgbContrast: $104fbfc219aa06c4$var$makeUniform('f', $495369f3383d41e2$export$f5bcf4061d6c95ff),
            rgbGamma: $104fbfc219aa06c4$var$makeUniform('f', $495369f3383d41e2$export$3dfcde43b7e3a6b2),
            screenHeight: $104fbfc219aa06c4$var$makeUniform('f', 1),
            screenWidth: $104fbfc219aa06c4$var$makeUniform('f', 1),
            size: $104fbfc219aa06c4$var$makeUniform('f', 1),
            spacing: $104fbfc219aa06c4$var$makeUniform('f', 1),
            toModel: $104fbfc219aa06c4$var$makeUniform('Matrix4f', []),
            transition: $104fbfc219aa06c4$var$makeUniform('f', 0.5),
            uColor: $104fbfc219aa06c4$var$makeUniform('c', new $hgUW1$Color(16777215)),
            // @ts-ignore
            visibleNodes: $104fbfc219aa06c4$var$makeUniform('t', this.visibleNodesTexture || new $hgUW1$Texture()),
            vnStart: $104fbfc219aa06c4$var$makeUniform('f', 0),
            wClassification: $104fbfc219aa06c4$var$makeUniform('f', 0),
            wElevation: $104fbfc219aa06c4$var$makeUniform('f', 0),
            wIntensity: $104fbfc219aa06c4$var$makeUniform('f', 0),
            wReturnNumber: $104fbfc219aa06c4$var$makeUniform('f', 0),
            wRGB: $104fbfc219aa06c4$var$makeUniform('f', 1),
            wSourceID: $104fbfc219aa06c4$var$makeUniform('f', 0),
            opacityAttenuation: $104fbfc219aa06c4$var$makeUniform('f', 1),
            filterByNormalThreshold: $104fbfc219aa06c4$var$makeUniform('f', 0),
            highlightedPointCoordinate: $104fbfc219aa06c4$var$makeUniform('fv', new $hgUW1$Vector3()),
            highlightedPointColor: $104fbfc219aa06c4$var$makeUniform('fv', $495369f3383d41e2$export$4b15acc9c405c4bd.clone()),
            enablePointHighlighting: $104fbfc219aa06c4$var$makeUniform('b', true),
            highlightedPointScale: $104fbfc219aa06c4$var$makeUniform('f', 2)
        };
        this.useClipBox = false;
        this.weighted = false;
        this.pointColorType = $5e4fff88bfda53ee$export$e95c0b95a8f50828.RGB;
        this.pointSizeType = $5e4fff88bfda53ee$export$d1cbf822ea081fee.ADAPTIVE;
        this.clipMode = $7b3263892bf52898$export$e04e7431702ec10a.DISABLED;
        this.useEDL = false;
        this.shape = $5e4fff88bfda53ee$export$5ffaab227f4e4906.SQUARE;
        this.treeType = $5e4fff88bfda53ee$export$eaf124a76310c668.OCTREE;
        this.pointOpacityType = $5e4fff88bfda53ee$export$b3da46a9b4c877b5.FIXED;
        this.useFilterByNormal = false;
        this.highlightPoint = false;
        this.attributes = {
            position: {
                type: 'fv',
                value: []
            },
            color: {
                type: 'fv',
                value: []
            },
            normal: {
                type: 'fv',
                value: []
            },
            intensity: {
                type: 'f',
                value: []
            },
            classification: {
                type: 'f',
                value: []
            },
            returnNumber: {
                type: 'f',
                value: []
            },
            numberOfReturns: {
                type: 'f',
                value: []
            },
            pointSourceID: {
                type: 'f',
                value: []
            },
            indices: {
                type: 'fv',
                value: []
            }
        };
        const tex = this.visibleNodesTexture = $3fa0b589b7342ac5$export$1e96beb2edc20271(2048, 1, new $hgUW1$Color(16777215));
        tex.minFilter = $hgUW1$NearestFilter;
        tex.magFilter = $hgUW1$NearestFilter;
        this.setUniform('visibleNodes', tex);
        this.treeType = $104fbfc219aa06c4$var$getValid(parameters.treeType, $5e4fff88bfda53ee$export$eaf124a76310c668.OCTREE);
        this.size = $104fbfc219aa06c4$var$getValid(parameters.size, 1);
        this.minSize = $104fbfc219aa06c4$var$getValid(parameters.minSize, 2);
        this.maxSize = $104fbfc219aa06c4$var$getValid(parameters.maxSize, 50);
        this.newFormat = !!parameters.newFormat;
        this.classification = $453c0a8ef7e718e1$export$9b199c3271672261;
        this.defaultAttributeValues.normal = [
            0,
            0,
            0
        ];
        this.defaultAttributeValues.classification = [
            0,
            0,
            0
        ];
        this.defaultAttributeValues.indices = [
            0,
            0,
            0,
            0
        ];
        this.vertexColors = true;
        // throw new Error('Not implemented');
        // this.extensions.fragDepth = true;
        this.updateShaderSource();
    }
    dispose() {
        super.dispose();
        if (this.gradientTexture) {
            this.gradientTexture.dispose();
            this.gradientTexture = undefined;
        }
        if (this.visibleNodesTexture) {
            this.visibleNodesTexture.dispose();
            this.visibleNodesTexture = undefined;
        }
        this.clearVisibleNodeTextureOffsets();
        if (this.classificationTexture) {
            this.classificationTexture.dispose();
            this.classificationTexture = undefined;
        }
        if (this.depthMap) {
            this.depthMap.dispose();
            this.depthMap = undefined;
        }
    }
    clearVisibleNodeTextureOffsets() {
        this.visibleNodeTextureOffsets.clear();
    }
    updateShaderSource() {
        this.vertexShader = this.applyDefines((/*@__PURE__*/$parcel$interopDefault($ad1acfee4d35e677$exports)));
        this.fragmentShader = this.applyDefines((/*@__PURE__*/$parcel$interopDefault($9d44389b42069366$exports)));
        if (this.opacity === 1) {
            this.blending = $hgUW1$NoBlending;
            this.transparent = false;
            this.depthTest = true;
            this.depthWrite = true;
            this.depthFunc = $hgUW1$LessEqualDepth;
        } else if (this.opacity < 1 && !this.useEDL) {
            this.blending = $hgUW1$AdditiveBlending;
            this.transparent = true;
            this.depthTest = false;
            this.depthWrite = true;
        }
        if (this.weighted) {
            this.blending = $hgUW1$AdditiveBlending;
            this.transparent = true;
            this.depthTest = true;
            this.depthWrite = false;
            this.depthFunc = $hgUW1$LessEqualDepth;
        }
        this.needsUpdate = true;
    }
    applyDefines(shaderSrc) {
        const parts = [];
        function define(value) {
            if (value) parts.push(`#define ${value}`);
        }
        define($104fbfc219aa06c4$var$TREE_TYPE_DEFS[this.treeType]);
        define($104fbfc219aa06c4$var$SIZE_TYPE_DEFS[this.pointSizeType]);
        define($104fbfc219aa06c4$var$SHAPE_DEFS[this.shape]);
        define($104fbfc219aa06c4$var$COLOR_DEFS[this.pointColorType]);
        define($104fbfc219aa06c4$var$CLIP_MODE_DEFS[this.clipMode]);
        define($104fbfc219aa06c4$var$OPACITY_DEFS[this.pointOpacityType]);
        // We only perform gamma and brightness/contrast calculations per point if values are specified.
        if (this.rgbGamma !== $495369f3383d41e2$export$3dfcde43b7e3a6b2 || this.rgbBrightness !== $495369f3383d41e2$export$d8264162e39166da || this.rgbContrast !== $495369f3383d41e2$export$f5bcf4061d6c95ff) define('use_rgb_gamma_contrast_brightness');
        if (this.useFilterByNormal) define('use_filter_by_normal');
        if (this.useEDL) define('use_edl');
        if (this.weighted) define('weighted_splats');
        if (this.numClipBoxes > 0) define('use_clip_box');
        if (this.highlightPoint) define('highlight_point');
        define('MAX_POINT_LIGHTS 0');
        define('MAX_DIR_LIGHTS 0');
        if (this.newFormat) define('new_format');
        // If "#version 300 es" exists as a line in shaderSrc, remove it and add it as the first element in the parts array
        const versionLine = shaderSrc.match(/^\s*#version\s+300\s+es\s*\n/);
        if (versionLine) {
            parts.unshift(versionLine[0]);
            shaderSrc = shaderSrc.replace(versionLine[0], '');
        }
        parts.push(shaderSrc);
        return parts.join('\n');
    }
    setClipBoxes(clipBoxes) {
        if (!clipBoxes) return;
        this.clipBoxes = clipBoxes;
        const doUpdate = this.numClipBoxes !== clipBoxes.length && (clipBoxes.length === 0 || this.numClipBoxes === 0);
        this.numClipBoxes = clipBoxes.length;
        this.setUniform('clipBoxCount', this.numClipBoxes);
        if (doUpdate) this.updateShaderSource();
        const clipBoxesLength = this.numClipBoxes * 16;
        const clipBoxesArray = new Float32Array(clipBoxesLength);
        for(let i = 0; i < this.numClipBoxes; i++)clipBoxesArray.set(clipBoxes[i].inverse.elements, 16 * i);
        for(let i1 = 0; i1 < clipBoxesLength; i1++)if (isNaN(clipBoxesArray[i1])) clipBoxesArray[i1] = Infinity;
        this.setUniform('clipBoxes', clipBoxesArray);
    }
    get gradient() {
        return this._gradient;
    }
    set gradient(value) {
        if (this._gradient !== value) {
            this._gradient = value;
            this.gradientTexture = $3fa0b589b7342ac5$export$fdceb370ef27f1c7(this._gradient);
            this.setUniform('gradient', this.gradientTexture);
        }
    }
    get classification() {
        return this._classification;
    }
    set classification(value) {
        const copy = {
        };
        for (const key of Object.keys(value))copy[key] = value[key].clone();
        let isEqual = false;
        if (this._classification === undefined) isEqual = false;
        else {
            isEqual = Object.keys(copy).length === Object.keys(this._classification).length;
            for (const key of Object.keys(copy)){
                isEqual = isEqual && this._classification[key] !== undefined;
                isEqual = isEqual && copy[key].equals(this._classification[key]);
            }
        }
        if (!isEqual) {
            this._classification = copy;
            this.recomputeClassification();
        }
    }
    recomputeClassification() {
        this.classificationTexture = $3fa0b589b7342ac5$export$20a331fc7ad618b2(this._classification);
        this.setUniform('classificationLUT', this.classificationTexture);
    }
    get elevationRange() {
        return [
            this.heightMin,
            this.heightMax
        ];
    }
    set elevationRange(value) {
        this.heightMin = value[0];
        this.heightMax = value[1];
    }
    getUniform(name) {
        return this.uniforms === undefined ? undefined : this.uniforms[name].value;
    }
    setUniform(name, value) {
        if (this.uniforms === undefined) return;
        const uObj = this.uniforms[name];
        if (uObj.type === 'c') uObj.value.copy(value);
        else if (value !== uObj.value) uObj.value = value;
    }
    updateMaterial(octree, visibleNodes, camera, renderer) {
        const pixelRatio = renderer.getPixelRatio();
        if (camera.type === $495369f3383d41e2$export$8900560817e7f3be) this.fov = camera.fov * (Math.PI / 180);
        else this.fov = Math.PI / 2; // will result in slope = 1 in the shader
        const renderTarget = renderer.getRenderTarget();
        if (renderTarget !== null && renderTarget instanceof $hgUW1$WebGLRenderTarget) {
            this.screenWidth = renderTarget.width;
            this.screenHeight = renderTarget.height;
        } else {
            this.screenWidth = renderer.domElement.clientWidth * pixelRatio;
            this.screenHeight = renderer.domElement.clientHeight * pixelRatio;
        }
        const maxScale = Math.max(octree.scale.x, octree.scale.y, octree.scale.z);
        this.spacing = octree.pcoGeometry.spacing * maxScale;
        this.octreeSize = octree.pcoGeometry.boundingBox.getSize($104fbfc219aa06c4$export$29121d9ccd2f757a.helperVec3).x;
        if (this.pointSizeType === $5e4fff88bfda53ee$export$d1cbf822ea081fee.ADAPTIVE || this.pointColorType === $5e4fff88bfda53ee$export$e95c0b95a8f50828.LOD) this.updateVisibilityTextureData(visibleNodes);
    }
    updateVisibilityTextureData(nodes) {
        nodes.sort($5de7f1de3e851041$export$62f8c94ac3a8e8b3);
        const data = new Uint8Array(nodes.length * 4);
        const offsetsToChild = new Array(nodes.length).fill(Infinity);
        this.visibleNodeTextureOffsets.clear();
        for(let i = 0; i < nodes.length; i++){
            const node = nodes[i];
            this.visibleNodeTextureOffsets.set(node.name, i);
            if (i > 0) {
                const parentName = node.name.slice(0, -1);
                const parentOffset = this.visibleNodeTextureOffsets.get(parentName);
                const parentOffsetToChild = i - parentOffset;
                offsetsToChild[parentOffset] = Math.min(offsetsToChild[parentOffset], parentOffsetToChild);
                // tslint:disable:no-bitwise
                const offset = parentOffset * 4;
                data[offset] = data[offset] | 1 << node.index;
                data[offset + 1] = offsetsToChild[parentOffset] >> 8;
                data[offset + 2] = offsetsToChild[parentOffset] % 256;
            // tslint:enable:no-bitwise
            }
            data[i * 4 + 3] = node.name.length;
        }
        const texture = this.visibleNodesTexture;
        if (texture) {
            texture.image.data.set(data);
            texture.needsUpdate = true;
        }
    }
    static makeOnBeforeRender(octree, node, pcIndex) {
        return (_renderer, _scene, _camera, _geometry, material)=>{
            const pointCloudMaterial = material;
            const materialUniforms = pointCloudMaterial.uniforms;
            materialUniforms.level.value = node.level;
            materialUniforms.isLeafNode.value = node.isLeafNode;
            const vnStart = pointCloudMaterial.visibleNodeTextureOffsets.get(node.name);
            if (vnStart !== undefined) materialUniforms.vnStart.value = vnStart;
            materialUniforms.pcIndex.value = pcIndex !== undefined ? pcIndex : octree.visibleNodes.indexOf(node);
            // Note: when changing uniforms in onBeforeRender, the flag uniformsNeedUpdate has to be
            // set to true to instruct ThreeJS to upload them. See also
            // https://github.com/mrdoob/three.js/issues/9870#issuecomment-368750182.
            // Remove the cast to any after updating to Three.JS >= r113
            material /*ShaderMaterial*/ .uniformsNeedUpdate = true;
        };
    }
}
$104fbfc219aa06c4$export$29121d9ccd2f757a.helperVec3 = new $hgUW1$Vector3();
$104fbfc219aa06c4$var$__decorate([
    $104fbfc219aa06c4$var$uniform('bbSize')
], $104fbfc219aa06c4$export$29121d9ccd2f757a.prototype, "bbSize", void 0);
$104fbfc219aa06c4$var$__decorate([
    $104fbfc219aa06c4$var$uniform('depthMap')
], $104fbfc219aa06c4$export$29121d9ccd2f757a.prototype, "depthMap", void 0);
$104fbfc219aa06c4$var$__decorate([
    $104fbfc219aa06c4$var$uniform('fov')
], $104fbfc219aa06c4$export$29121d9ccd2f757a.prototype, "fov", void 0);
$104fbfc219aa06c4$var$__decorate([
    $104fbfc219aa06c4$var$uniform('heightMax')
], $104fbfc219aa06c4$export$29121d9ccd2f757a.prototype, "heightMax", void 0);
$104fbfc219aa06c4$var$__decorate([
    $104fbfc219aa06c4$var$uniform('heightMin')
], $104fbfc219aa06c4$export$29121d9ccd2f757a.prototype, "heightMin", void 0);
$104fbfc219aa06c4$var$__decorate([
    $104fbfc219aa06c4$var$uniform('intensityBrightness')
], $104fbfc219aa06c4$export$29121d9ccd2f757a.prototype, "intensityBrightness", void 0);
$104fbfc219aa06c4$var$__decorate([
    $104fbfc219aa06c4$var$uniform('intensityContrast')
], $104fbfc219aa06c4$export$29121d9ccd2f757a.prototype, "intensityContrast", void 0);
$104fbfc219aa06c4$var$__decorate([
    $104fbfc219aa06c4$var$uniform('intensityGamma')
], $104fbfc219aa06c4$export$29121d9ccd2f757a.prototype, "intensityGamma", void 0);
$104fbfc219aa06c4$var$__decorate([
    $104fbfc219aa06c4$var$uniform('intensityRange')
], $104fbfc219aa06c4$export$29121d9ccd2f757a.prototype, "intensityRange", void 0);
$104fbfc219aa06c4$var$__decorate([
    $104fbfc219aa06c4$var$uniform('maxSize')
], $104fbfc219aa06c4$export$29121d9ccd2f757a.prototype, "maxSize", void 0);
$104fbfc219aa06c4$var$__decorate([
    $104fbfc219aa06c4$var$uniform('minSize')
], $104fbfc219aa06c4$export$29121d9ccd2f757a.prototype, "minSize", void 0);
$104fbfc219aa06c4$var$__decorate([
    $104fbfc219aa06c4$var$uniform('octreeSize')
], $104fbfc219aa06c4$export$29121d9ccd2f757a.prototype, "octreeSize", void 0);
$104fbfc219aa06c4$var$__decorate([
    $104fbfc219aa06c4$var$uniform('opacity', true)
], $104fbfc219aa06c4$export$29121d9ccd2f757a.prototype, "opacity", void 0);
$104fbfc219aa06c4$var$__decorate([
    $104fbfc219aa06c4$var$uniform('rgbBrightness', true)
], $104fbfc219aa06c4$export$29121d9ccd2f757a.prototype, "rgbBrightness", void 0);
$104fbfc219aa06c4$var$__decorate([
    $104fbfc219aa06c4$var$uniform('rgbContrast', true)
], $104fbfc219aa06c4$export$29121d9ccd2f757a.prototype, "rgbContrast", void 0);
$104fbfc219aa06c4$var$__decorate([
    $104fbfc219aa06c4$var$uniform('rgbGamma', true)
], $104fbfc219aa06c4$export$29121d9ccd2f757a.prototype, "rgbGamma", void 0);
$104fbfc219aa06c4$var$__decorate([
    $104fbfc219aa06c4$var$uniform('screenHeight')
], $104fbfc219aa06c4$export$29121d9ccd2f757a.prototype, "screenHeight", void 0);
$104fbfc219aa06c4$var$__decorate([
    $104fbfc219aa06c4$var$uniform('screenWidth')
], $104fbfc219aa06c4$export$29121d9ccd2f757a.prototype, "screenWidth", void 0);
$104fbfc219aa06c4$var$__decorate([
    $104fbfc219aa06c4$var$uniform('size')
], $104fbfc219aa06c4$export$29121d9ccd2f757a.prototype, "size", void 0);
$104fbfc219aa06c4$var$__decorate([
    $104fbfc219aa06c4$var$uniform('spacing')
], $104fbfc219aa06c4$export$29121d9ccd2f757a.prototype, "spacing", void 0);
$104fbfc219aa06c4$var$__decorate([
    $104fbfc219aa06c4$var$uniform('transition')
], $104fbfc219aa06c4$export$29121d9ccd2f757a.prototype, "transition", void 0);
$104fbfc219aa06c4$var$__decorate([
    $104fbfc219aa06c4$var$uniform('uColor')
], $104fbfc219aa06c4$export$29121d9ccd2f757a.prototype, "color", void 0);
$104fbfc219aa06c4$var$__decorate([
    $104fbfc219aa06c4$var$uniform('wClassification')
], $104fbfc219aa06c4$export$29121d9ccd2f757a.prototype, "weightClassification", void 0);
$104fbfc219aa06c4$var$__decorate([
    $104fbfc219aa06c4$var$uniform('wElevation')
], $104fbfc219aa06c4$export$29121d9ccd2f757a.prototype, "weightElevation", void 0);
$104fbfc219aa06c4$var$__decorate([
    $104fbfc219aa06c4$var$uniform('wIntensity')
], $104fbfc219aa06c4$export$29121d9ccd2f757a.prototype, "weightIntensity", void 0);
$104fbfc219aa06c4$var$__decorate([
    $104fbfc219aa06c4$var$uniform('wReturnNumber')
], $104fbfc219aa06c4$export$29121d9ccd2f757a.prototype, "weightReturnNumber", void 0);
$104fbfc219aa06c4$var$__decorate([
    $104fbfc219aa06c4$var$uniform('wRGB')
], $104fbfc219aa06c4$export$29121d9ccd2f757a.prototype, "weightRGB", void 0);
$104fbfc219aa06c4$var$__decorate([
    $104fbfc219aa06c4$var$uniform('wSourceID')
], $104fbfc219aa06c4$export$29121d9ccd2f757a.prototype, "weightSourceID", void 0);
$104fbfc219aa06c4$var$__decorate([
    $104fbfc219aa06c4$var$uniform('opacityAttenuation')
], $104fbfc219aa06c4$export$29121d9ccd2f757a.prototype, "opacityAttenuation", void 0);
$104fbfc219aa06c4$var$__decorate([
    $104fbfc219aa06c4$var$uniform('filterByNormalThreshold')
], $104fbfc219aa06c4$export$29121d9ccd2f757a.prototype, "filterByNormalThreshold", void 0);
$104fbfc219aa06c4$var$__decorate([
    $104fbfc219aa06c4$var$uniform('highlightedPointCoordinate')
], $104fbfc219aa06c4$export$29121d9ccd2f757a.prototype, "highlightedPointCoordinate", void 0);
$104fbfc219aa06c4$var$__decorate([
    $104fbfc219aa06c4$var$uniform('highlightedPointColor')
], $104fbfc219aa06c4$export$29121d9ccd2f757a.prototype, "highlightedPointColor", void 0);
$104fbfc219aa06c4$var$__decorate([
    $104fbfc219aa06c4$var$uniform('enablePointHighlighting')
], $104fbfc219aa06c4$export$29121d9ccd2f757a.prototype, "enablePointHighlighting", void 0);
$104fbfc219aa06c4$var$__decorate([
    $104fbfc219aa06c4$var$uniform('highlightedPointScale')
], $104fbfc219aa06c4$export$29121d9ccd2f757a.prototype, "highlightedPointScale", void 0);
$104fbfc219aa06c4$var$__decorate([
    $104fbfc219aa06c4$var$requiresShaderUpdate()
], $104fbfc219aa06c4$export$29121d9ccd2f757a.prototype, "useClipBox", void 0);
$104fbfc219aa06c4$var$__decorate([
    $104fbfc219aa06c4$var$requiresShaderUpdate()
], $104fbfc219aa06c4$export$29121d9ccd2f757a.prototype, "weighted", void 0);
$104fbfc219aa06c4$var$__decorate([
    $104fbfc219aa06c4$var$requiresShaderUpdate()
], $104fbfc219aa06c4$export$29121d9ccd2f757a.prototype, "pointColorType", void 0);
$104fbfc219aa06c4$var$__decorate([
    $104fbfc219aa06c4$var$requiresShaderUpdate()
], $104fbfc219aa06c4$export$29121d9ccd2f757a.prototype, "pointSizeType", void 0);
$104fbfc219aa06c4$var$__decorate([
    $104fbfc219aa06c4$var$requiresShaderUpdate()
], $104fbfc219aa06c4$export$29121d9ccd2f757a.prototype, "clipMode", void 0);
$104fbfc219aa06c4$var$__decorate([
    $104fbfc219aa06c4$var$requiresShaderUpdate()
], $104fbfc219aa06c4$export$29121d9ccd2f757a.prototype, "useEDL", void 0);
$104fbfc219aa06c4$var$__decorate([
    $104fbfc219aa06c4$var$requiresShaderUpdate()
], $104fbfc219aa06c4$export$29121d9ccd2f757a.prototype, "shape", void 0);
$104fbfc219aa06c4$var$__decorate([
    $104fbfc219aa06c4$var$requiresShaderUpdate()
], $104fbfc219aa06c4$export$29121d9ccd2f757a.prototype, "treeType", void 0);
$104fbfc219aa06c4$var$__decorate([
    $104fbfc219aa06c4$var$requiresShaderUpdate()
], $104fbfc219aa06c4$export$29121d9ccd2f757a.prototype, "pointOpacityType", void 0);
$104fbfc219aa06c4$var$__decorate([
    $104fbfc219aa06c4$var$requiresShaderUpdate()
], $104fbfc219aa06c4$export$29121d9ccd2f757a.prototype, "useFilterByNormal", void 0);
$104fbfc219aa06c4$var$__decorate([
    $104fbfc219aa06c4$var$requiresShaderUpdate()
], $104fbfc219aa06c4$export$29121d9ccd2f757a.prototype, "highlightPoint", void 0);
function $104fbfc219aa06c4$var$makeUniform(type, value) {
    return {
        type: type,
        value: value
    };
}
function $104fbfc219aa06c4$var$getValid(a, b) {
    return a === undefined ? b : a;
}
// tslint:disable:no-invalid-this
function $104fbfc219aa06c4$var$uniform(uniformName, requireSrcUpdate = false) {
    return (target, propertyKey)=>{
        Object.defineProperty(target, propertyKey, {
            get () {
                return this.getUniform(uniformName);
            },
            set (value) {
                if (value !== this.getUniform(uniformName)) {
                    this.setUniform(uniformName, value);
                    if (requireSrcUpdate) this.updateShaderSource();
                }
            }
        });
    };
}
function $104fbfc219aa06c4$var$requiresShaderUpdate() {
    return (target, propertyKey)=>{
        const fieldName = `_${propertyKey.toString()}`;
        Object.defineProperty(target, propertyKey, {
            get () {
                return this[fieldName];
            },
            set (value) {
                if (value !== this[fieldName]) {
                    this[fieldName] = value;
                    this.updateShaderSource();
                }
            }
        });
    };
}



var $6c56a4539ef01077$exports = {};



$parcel$exportWildcard($ddbabd1d335f84a9$exports, $886301ae952e8f57$exports);
$parcel$exportWildcard($ddbabd1d335f84a9$exports, $7b3263892bf52898$exports);
$parcel$exportWildcard($ddbabd1d335f84a9$exports, $5e4fff88bfda53ee$exports);
$parcel$exportWildcard($ddbabd1d335f84a9$exports, $104fbfc219aa06c4$exports);
$parcel$exportWildcard($ddbabd1d335f84a9$exports, $3fa0b589b7342ac5$exports);
$parcel$exportWildcard($ddbabd1d335f84a9$exports, $6c56a4539ef01077$exports);
$parcel$exportWildcard($ddbabd1d335f84a9$exports, $56280d40890ebad7$exports);


var $6917a634b1124b58$exports = {};

$parcel$export($6917a634b1124b58$exports, "PointAttributeName", () => $6917a634b1124b58$export$718faa7d6d01aabc);
$parcel$export($6917a634b1124b58$exports, "POINT_ATTRIBUTE_TYPES", () => $6917a634b1124b58$export$f447a8ca794d62f1);
$parcel$export($6917a634b1124b58$exports, "POINT_ATTRIBUTES", () => $6917a634b1124b58$export$c9c943992b7ca9cc);
$parcel$export($6917a634b1124b58$exports, "PointAttributes", () => $6917a634b1124b58$export$33a55c29cc28473e);
var $6917a634b1124b58$export$718faa7d6d01aabc;
(function($6917a634b1124b58$export$718faa7d6d01aabc) {
    $6917a634b1124b58$export$718faa7d6d01aabc[$6917a634b1124b58$export$718faa7d6d01aabc["POSITION_CARTESIAN"] = 0] = "POSITION_CARTESIAN";
    $6917a634b1124b58$export$718faa7d6d01aabc[$6917a634b1124b58$export$718faa7d6d01aabc["COLOR_PACKED"] = 1] = "COLOR_PACKED";
    $6917a634b1124b58$export$718faa7d6d01aabc[$6917a634b1124b58$export$718faa7d6d01aabc["COLOR_FLOATS_1"] = 2] = "COLOR_FLOATS_1";
    $6917a634b1124b58$export$718faa7d6d01aabc[$6917a634b1124b58$export$718faa7d6d01aabc["COLOR_FLOATS_255"] = 3] = "COLOR_FLOATS_255";
    $6917a634b1124b58$export$718faa7d6d01aabc[$6917a634b1124b58$export$718faa7d6d01aabc["NORMAL_FLOATS"] = 4] = "NORMAL_FLOATS";
    $6917a634b1124b58$export$718faa7d6d01aabc[$6917a634b1124b58$export$718faa7d6d01aabc["FILLER"] = 5] = "FILLER";
    $6917a634b1124b58$export$718faa7d6d01aabc[$6917a634b1124b58$export$718faa7d6d01aabc["INTENSITY"] = 6] = "INTENSITY";
    $6917a634b1124b58$export$718faa7d6d01aabc[$6917a634b1124b58$export$718faa7d6d01aabc["CLASSIFICATION"] = 7] = "CLASSIFICATION";
    $6917a634b1124b58$export$718faa7d6d01aabc[$6917a634b1124b58$export$718faa7d6d01aabc["NORMAL_SPHEREMAPPED"] = 8] = "NORMAL_SPHEREMAPPED";
    $6917a634b1124b58$export$718faa7d6d01aabc[$6917a634b1124b58$export$718faa7d6d01aabc["NORMAL_OCT16"] = 9] = "NORMAL_OCT16";
    $6917a634b1124b58$export$718faa7d6d01aabc[$6917a634b1124b58$export$718faa7d6d01aabc["NORMAL"] = 10] = "NORMAL";
})($6917a634b1124b58$export$718faa7d6d01aabc || ($6917a634b1124b58$export$718faa7d6d01aabc = {
}));
const $6917a634b1124b58$export$f447a8ca794d62f1 = {
    DATA_TYPE_DOUBLE: {
        ordinal: 0,
        size: 8
    },
    DATA_TYPE_FLOAT: {
        ordinal: 1,
        size: 4
    },
    DATA_TYPE_INT8: {
        ordinal: 2,
        size: 1
    },
    DATA_TYPE_UINT8: {
        ordinal: 3,
        size: 1
    },
    DATA_TYPE_INT16: {
        ordinal: 4,
        size: 2
    },
    DATA_TYPE_UINT16: {
        ordinal: 5,
        size: 2
    },
    DATA_TYPE_INT32: {
        ordinal: 6,
        size: 4
    },
    DATA_TYPE_UINT32: {
        ordinal: 7,
        size: 4
    },
    DATA_TYPE_INT64: {
        ordinal: 8,
        size: 8
    },
    DATA_TYPE_UINT64: {
        ordinal: 9,
        size: 8
    }
};
function $6917a634b1124b58$var$makePointAttribute(name, type, numElements) {
    return {
        name: name,
        type: type,
        numElements: numElements,
        byteSize: numElements * type.size
    };
}
const $6917a634b1124b58$var$RGBA_PACKED = $6917a634b1124b58$var$makePointAttribute($6917a634b1124b58$export$718faa7d6d01aabc.COLOR_PACKED, $6917a634b1124b58$export$f447a8ca794d62f1.DATA_TYPE_INT8, 4);
const $6917a634b1124b58$export$c9c943992b7ca9cc = {
    POSITION_CARTESIAN: $6917a634b1124b58$var$makePointAttribute($6917a634b1124b58$export$718faa7d6d01aabc.POSITION_CARTESIAN, $6917a634b1124b58$export$f447a8ca794d62f1.DATA_TYPE_FLOAT, 3),
    RGBA_PACKED: $6917a634b1124b58$var$RGBA_PACKED,
    COLOR_PACKED: $6917a634b1124b58$var$RGBA_PACKED,
    RGB_PACKED: $6917a634b1124b58$var$makePointAttribute($6917a634b1124b58$export$718faa7d6d01aabc.COLOR_PACKED, $6917a634b1124b58$export$f447a8ca794d62f1.DATA_TYPE_INT8, 3),
    NORMAL_FLOATS: $6917a634b1124b58$var$makePointAttribute($6917a634b1124b58$export$718faa7d6d01aabc.NORMAL_FLOATS, $6917a634b1124b58$export$f447a8ca794d62f1.DATA_TYPE_FLOAT, 3),
    FILLER_1B: $6917a634b1124b58$var$makePointAttribute($6917a634b1124b58$export$718faa7d6d01aabc.FILLER, $6917a634b1124b58$export$f447a8ca794d62f1.DATA_TYPE_UINT8, 1),
    INTENSITY: $6917a634b1124b58$var$makePointAttribute($6917a634b1124b58$export$718faa7d6d01aabc.INTENSITY, $6917a634b1124b58$export$f447a8ca794d62f1.DATA_TYPE_UINT16, 1),
    CLASSIFICATION: $6917a634b1124b58$var$makePointAttribute($6917a634b1124b58$export$718faa7d6d01aabc.CLASSIFICATION, $6917a634b1124b58$export$f447a8ca794d62f1.DATA_TYPE_UINT8, 1),
    NORMAL_SPHEREMAPPED: $6917a634b1124b58$var$makePointAttribute($6917a634b1124b58$export$718faa7d6d01aabc.NORMAL_SPHEREMAPPED, $6917a634b1124b58$export$f447a8ca794d62f1.DATA_TYPE_UINT8, 2),
    NORMAL_OCT16: $6917a634b1124b58$var$makePointAttribute($6917a634b1124b58$export$718faa7d6d01aabc.NORMAL_OCT16, $6917a634b1124b58$export$f447a8ca794d62f1.DATA_TYPE_UINT8, 2),
    NORMAL: $6917a634b1124b58$var$makePointAttribute($6917a634b1124b58$export$718faa7d6d01aabc.NORMAL, $6917a634b1124b58$export$f447a8ca794d62f1.DATA_TYPE_FLOAT, 3)
};
class $6917a634b1124b58$export$33a55c29cc28473e {
    constructor(pointAttributeNames = []){
        this.attributes = [];
        this.byteSize = 0;
        this.size = 0;
        for(let i = 0; i < pointAttributeNames.length; i++){
            const pointAttributeName = pointAttributeNames[i];
            const pointAttribute = $6917a634b1124b58$export$c9c943992b7ca9cc[pointAttributeName];
            this.attributes.push(pointAttribute);
            this.byteSize += pointAttribute.byteSize;
            this.size++;
        }
    }
    add(pointAttribute) {
        this.attributes.push(pointAttribute);
        this.byteSize += pointAttribute.byteSize;
        this.size++;
    }
    hasColors() {
        return this.attributes.find($6917a634b1124b58$var$isColorAttribute) !== undefined;
    }
    hasNormals() {
        return this.attributes.find($6917a634b1124b58$var$isNormalAttribute) !== undefined;
    }
}
function $6917a634b1124b58$var$isColorAttribute({ name: name  }) {
    return name === $6917a634b1124b58$export$718faa7d6d01aabc.COLOR_PACKED;
}
function $6917a634b1124b58$var$isNormalAttribute({ name: name  }) {
    return name === $6917a634b1124b58$export$718faa7d6d01aabc.NORMAL_SPHEREMAPPED || name === $6917a634b1124b58$export$718faa7d6d01aabc.NORMAL_FLOATS || name === $6917a634b1124b58$export$718faa7d6d01aabc.NORMAL || name === $6917a634b1124b58$export$718faa7d6d01aabc.NORMAL_OCT16;
}


var $2c1acd357a20f870$exports = {};

$parcel$export($2c1acd357a20f870$exports, "PointCloudOctreeGeometryNode", () => $2c1acd357a20f870$export$fdc7d6e1ad096869);


function $a82247cbc40359bf$export$271c8c0f20afa0bd(box, transform) {
    return new $hgUW1$Box3().setFromPoints([
        new $hgUW1$Vector3(box.min.x, box.min.y, box.min.z).applyMatrix4(transform),
        new $hgUW1$Vector3(box.min.x, box.min.y, box.min.z).applyMatrix4(transform),
        new $hgUW1$Vector3(box.max.x, box.min.y, box.min.z).applyMatrix4(transform),
        new $hgUW1$Vector3(box.min.x, box.max.y, box.min.z).applyMatrix4(transform),
        new $hgUW1$Vector3(box.min.x, box.min.y, box.max.z).applyMatrix4(transform),
        new $hgUW1$Vector3(box.min.x, box.max.y, box.max.z).applyMatrix4(transform),
        new $hgUW1$Vector3(box.max.x, box.max.y, box.min.z).applyMatrix4(transform),
        new $hgUW1$Vector3(box.max.x, box.min.y, box.max.z).applyMatrix4(transform),
        new $hgUW1$Vector3(box.max.x, box.max.y, box.max.z).applyMatrix4(transform), 
    ]);
}
function $a82247cbc40359bf$export$4662b4e8868a3779(aabb, index) {
    const min = aabb.min.clone();
    const max = aabb.max.clone();
    const size = new $hgUW1$Vector3().subVectors(max, min);
    // tslint:disable-next-line:no-bitwise
    if ((index & 1) > 0) min.z += size.z / 2;
    else max.z -= size.z / 2;
    // tslint:disable-next-line:no-bitwise
    if ((index & 2) > 0) min.y += size.y / 2;
    else max.y -= size.y / 2;
    // tslint:disable-next-line:no-bitwise
    if ((index & 4) > 0) min.x += size.x / 2;
    else max.x -= size.x / 2;
    return new $hgUW1$Box3(min, max);
}



const $2c1acd357a20f870$var$NODE_STRIDE = 5;
class $2c1acd357a20f870$export$fdc7d6e1ad096869 extends $hgUW1$EventDispatcher {
    constructor(name, pcoGeometry, boundingBox){
        super();
        this.id = $2c1acd357a20f870$export$fdc7d6e1ad096869.idCount++;
        this.level = 0;
        this.spacing = 0;
        this.hasChildren = false;
        this.children = [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null, 
        ];
        this.mean = new $hgUW1$Vector3();
        this.numPoints = 0;
        this.loaded = false;
        this.loading = false;
        this.failed = false;
        this.parent = null;
        this.oneTimeDisposeHandlers = [];
        this.isLeafNode = true;
        this.isTreeNode = false;
        this.isGeometryNode = true;
        this.name = name;
        this.index = $5de7f1de3e851041$export$dd1fe7c4c1e496ce(name);
        this.pcoGeometry = pcoGeometry;
        this.boundingBox = boundingBox;
        this.tightBoundingBox = boundingBox.clone();
        this.boundingSphere = boundingBox.getBoundingSphere(new $hgUW1$Sphere());
    }
    dispose() {
        if (!this.geometry || !this.parent) return;
        this.geometry.dispose();
        this.geometry = undefined;
        this.loaded = false;
        this.oneTimeDisposeHandlers.forEach((handler)=>handler()
        );
        this.oneTimeDisposeHandlers = [];
    }
    /**
     * Gets the url of the binary file for this node.
     */ getUrl() {
        const geometry = this.pcoGeometry;
        const version = geometry.loader.version;
        const pathParts = [
            geometry.octreeDir
        ];
        if (geometry.loader && version.equalOrHigher('1.5')) {
            pathParts.push(this.getHierarchyBaseUrl());
            pathParts.push(this.name);
        } else if (version.equalOrHigher('1.4')) pathParts.push(this.name);
        else if (version.upTo('1.3')) pathParts.push(this.name);
        return pathParts.join('/');
    }
    /**
     * Gets the url of the hierarchy file for this node.
     */ getHierarchyUrl() {
        return `${this.pcoGeometry.octreeDir}/${this.getHierarchyBaseUrl()}/${this.name}.hrc`;
    }
    /**
     * Adds the specified node as a child of the current node.
     *
     * @param child
     *    The node which is to be added as a child.
     */ addChild(child) {
        this.children[child.index] = child;
        this.isLeafNode = false;
        child.parent = this;
    }
    /**
     * Calls the specified callback for the current node (if includeSelf is set to true) and all its
     * children.
     *
     * @param cb
     *    The function which is to be called for each node.
     */ traverse(cb, includeSelf = true) {
        const stack = includeSelf ? [
            this
        ] : [];
        let current;
        while((current = stack.pop()) !== undefined){
            cb(current);
            for (const child of current.children)if (child !== null) stack.push(child);
        }
    }
    load() {
        if (!this.canLoad()) return Promise.resolve();
        this.loading = true;
        this.pcoGeometry.numNodesLoading++;
        this.pcoGeometry.needsUpdate = true;
        let promise;
        if (this.pcoGeometry.loader.version.equalOrHigher('1.5') && this.level % this.pcoGeometry.hierarchyStepSize === 0 && this.hasChildren) promise = this.loadHierachyThenPoints();
        else promise = this.loadPoints();
        return promise.catch((reason)=>{
            this.loading = false;
            this.failed = true;
            this.pcoGeometry.numNodesLoading--;
            throw reason;
        });
    }
    canLoad() {
        return !this.loading && !this.loaded && !this.pcoGeometry.disposed && !this.pcoGeometry.loader.disposed && this.pcoGeometry.numNodesLoading < this.pcoGeometry.maxNumNodesLoading;
    }
    loadPoints() {
        this.pcoGeometry.needsUpdate = true;
        return this.pcoGeometry.loader.load(this);
    }
    loadHierachyThenPoints() {
        if (this.level % this.pcoGeometry.hierarchyStepSize !== 0) return Promise.resolve();
        return Promise.resolve(this.pcoGeometry.loader.getUrl(this.getHierarchyUrl())).then((url)=>this.pcoGeometry.xhrRequest(url, {
                mode: 'cors'
            })
        ).then((res)=>res.arrayBuffer()
        ).then((data)=>this.loadHierarchy(this, data)
        );
    }
    /**
     * Gets the url of the folder where the hierarchy is, relative to the octreeDir.
     */ getHierarchyBaseUrl() {
        const hierarchyStepSize = this.pcoGeometry.hierarchyStepSize;
        const indices = this.name.substr(1);
        const numParts = Math.floor(indices.length / hierarchyStepSize);
        let path = 'r/';
        for(let i = 0; i < numParts; i++)path += `${indices.substr(i * hierarchyStepSize, hierarchyStepSize)}/`;
        return path.slice(0, -1);
    }
    // tslint:disable:no-bitwise
    loadHierarchy(node, buffer) {
        const view = new DataView(buffer);
        const firstNodeData = this.getNodeData(node.name, 0, view);
        node.numPoints = firstNodeData.numPoints;
        // Nodes which need be visited.
        const stack = [
            firstNodeData
        ];
        // Nodes which have already been decoded. We will take nodes from the stack and place them here.
        const decoded = [];
        let offset = $2c1acd357a20f870$var$NODE_STRIDE;
        while(stack.length > 0){
            const stackNodeData = stack.shift();
            // From the last bit, all the way to the 8th one from the right.
            let mask = 1;
            for(let i = 0; i < 8 && offset + 1 < buffer.byteLength; i++){
                if ((stackNodeData.children & mask) !== 0) {
                    const nodeData = this.getNodeData(stackNodeData.name + i, offset, view);
                    decoded.push(nodeData); // Node is decoded.
                    stack.push(nodeData); // Need to check its children.
                    offset += $2c1acd357a20f870$var$NODE_STRIDE; // Move over to the next node in the buffer.
                }
                mask = mask * 2;
            }
        }
        node.pcoGeometry.needsUpdate = true;
        // Map containing all the nodes.
        const nodes = new Map();
        nodes.set(node.name, node);
        decoded.forEach((nodeData)=>this.addNode(nodeData, node.pcoGeometry, nodes)
        );
        node.loadPoints();
    }
    // tslint:enable:no-bitwise
    getNodeData(name, offset, view) {
        const children = view.getUint8(offset);
        const numPoints = view.getUint32(offset + 1, true);
        return {
            children: children,
            numPoints: numPoints,
            name: name
        };
    }
    addNode({ name: name , numPoints: numPoints , children: children  }, pco, nodes) {
        const index = $5de7f1de3e851041$export$dd1fe7c4c1e496ce(name);
        const parentName = name.substring(0, name.length - 1);
        const parentNode = nodes.get(parentName);
        const level = name.length - 1;
        const boundingBox = $a82247cbc40359bf$export$4662b4e8868a3779(parentNode.boundingBox, index);
        const node = new $2c1acd357a20f870$export$fdc7d6e1ad096869(name, pco, boundingBox);
        node.level = level;
        node.numPoints = numPoints;
        node.hasChildren = children > 0;
        node.spacing = pco.spacing / Math.pow(2, level);
        parentNode.addChild(node);
        nodes.set(name, node);
    }
}
$2c1acd357a20f870$export$fdc7d6e1ad096869.idCount = 0;


var $57aef60af449f0bf$exports = {};

$parcel$export($57aef60af449f0bf$exports, "PointCloudOctreeGeometry", () => $57aef60af449f0bf$export$bbcd90498494c738);

class $57aef60af449f0bf$export$bbcd90498494c738 {
    constructor(loader, boundingBox, tightBoundingBox, offset, xhrRequest){
        this.loader = loader;
        this.boundingBox = boundingBox;
        this.tightBoundingBox = tightBoundingBox;
        this.offset = offset;
        this.xhrRequest = xhrRequest;
        this.disposed = false;
        this.needsUpdate = true;
        this.octreeDir = '';
        this.hierarchyStepSize = -1;
        this.nodes = {
        };
        this.numNodesLoading = 0;
        this.maxNumNodesLoading = 3;
        this.spacing = 0;
        this.pointAttributes = new $6917a634b1124b58$export$33a55c29cc28473e([]);
        this.projection = null;
        this.url = null;
    }
    dispose() {
        this.loader.dispose();
        this.root.traverse((node)=>node.dispose()
        );
        this.disposed = true;
    }
    addNodeLoadedCallback(callback) {
        this.loader.callbacks.push(callback);
    }
    clearNodeLoadedCallbacks() {
        this.loader.callbacks = [];
    }
}


var $5b22ec763ed6bfa5$exports = {};

$parcel$export($5b22ec763ed6bfa5$exports, "PointCloudOctreeNode", () => $5b22ec763ed6bfa5$export$ac5505afea26905b);

class $5b22ec763ed6bfa5$export$ac5505afea26905b extends $hgUW1$EventDispatcher {
    constructor(geometryNode, sceneNode){
        super();
        this.pcIndex = undefined;
        this.boundingBoxNode = null;
        this.loaded = true;
        this.isTreeNode = true;
        this.isGeometryNode = false;
        this.geometryNode = geometryNode;
        this.sceneNode = sceneNode;
        this.children = geometryNode.children.slice();
    }
    dispose() {
        this.geometryNode.dispose();
    }
    disposeSceneNode() {
        const node = this.sceneNode;
        if (node.geometry instanceof $hgUW1$BufferGeometry) {
            const attributes = node.geometry.attributes;
            // tslint:disable-next-line:forin
            for(const key in attributes){
                if (key === 'position') delete attributes[key].array;
                delete attributes[key];
            }
            node.geometry.dispose();
            node.geometry = undefined;
        }
    }
    traverse(cb, includeSelf) {
        this.geometryNode.traverse(cb, includeSelf);
    }
    get id() {
        return this.geometryNode.id;
    }
    get name() {
        return this.geometryNode.name;
    }
    get level() {
        return this.geometryNode.level;
    }
    get isLeafNode() {
        return this.geometryNode.isLeafNode;
    }
    get numPoints() {
        return this.geometryNode.numPoints;
    }
    get index() {
        return this.geometryNode.index;
    }
    get boundingSphere() {
        return this.geometryNode.boundingSphere;
    }
    get boundingBox() {
        return this.geometryNode.boundingBox;
    }
    get spacing() {
        return this.geometryNode.spacing;
    }
}


var $deb88b7421585e89$exports = {};

$parcel$export($deb88b7421585e89$exports, "PointCloudOctreePicker", () => $deb88b7421585e89$export$852cc38ee6d1f105);



function $acf2b3da80e9dbb9$export$7d15b64cf5a3a4c4(value, min, max) {
    return Math.min(Math.max(min, value), max);
}


class $deb88b7421585e89$export$852cc38ee6d1f105 {
    dispose() {
        if (this.pickState) {
            this.pickState.material.dispose();
            this.pickState.renderTarget.dispose();
        }
    }
    pick(renderer, camera, ray, octrees, params = {
    }) {
        if (octrees.length === 0) return null;
        const pickState = this.pickState ? this.pickState : this.pickState = $deb88b7421585e89$export$852cc38ee6d1f105.getPickState();
        const pickMaterial = pickState.material;
        const pixelRatio = renderer.getPixelRatio();
        const width = Math.ceil(renderer.domElement.clientWidth * pixelRatio);
        const height = Math.ceil(renderer.domElement.clientHeight * pixelRatio);
        $deb88b7421585e89$export$852cc38ee6d1f105.updatePickRenderTarget(this.pickState, width, height);
        const pixelPosition = $deb88b7421585e89$export$852cc38ee6d1f105.helperVec3; // Use helper vector to prevent extra allocations.
        if (params.pixelPosition) pixelPosition.copy(params.pixelPosition);
        else {
            pixelPosition.addVectors(camera.position, ray.direction).project(camera);
            pixelPosition.x = (pixelPosition.x + 1) * width * 0.5;
            pixelPosition.y = (pixelPosition.y + 1) * height * 0.5;
        }
        const pickWndSize = Math.floor((params.pickWindowSize || $495369f3383d41e2$export$3afb6949e9e95986) * pixelRatio);
        const halfPickWndSize = (pickWndSize - 1) / 2;
        const x = Math.floor($acf2b3da80e9dbb9$export$7d15b64cf5a3a4c4(pixelPosition.x - halfPickWndSize, 0, width));
        const y = Math.floor($acf2b3da80e9dbb9$export$7d15b64cf5a3a4c4(pixelPosition.y - halfPickWndSize, 0, height));
        $deb88b7421585e89$export$852cc38ee6d1f105.prepareRender(renderer, x, y, pickWndSize, pickMaterial, pickState);
        const renderedNodes = $deb88b7421585e89$export$852cc38ee6d1f105.render(renderer, camera, pickMaterial, octrees, ray, pickState, params);
        // Cleanup
        pickMaterial.clearVisibleNodeTextureOffsets();
        // Read back image and decode hit point
        const pixels = $deb88b7421585e89$export$852cc38ee6d1f105.readPixels(renderer, x, y, pickWndSize);
        const hit = $deb88b7421585e89$export$852cc38ee6d1f105.findHit(pixels, pickWndSize);
        return $deb88b7421585e89$export$852cc38ee6d1f105.getPickPoint(hit, renderedNodes);
    }
    static prepareRender(renderer, x, y, pickWndSize, pickMaterial, pickState) {
        // Render the intersected nodes onto the pick render target, clipping to a small pick window.
        renderer.setScissor(x, y, pickWndSize, pickWndSize);
        renderer.setScissorTest(true);
        renderer.state.buffers.depth.setTest(pickMaterial.depthTest);
        renderer.state.buffers.depth.setMask(pickMaterial.depthWrite);
        renderer.state.setBlending($hgUW1$NoBlending);
        renderer.setRenderTarget(pickState.renderTarget);
        // Save the current clear color and clear the renderer with black color and alpha 0.
        renderer.getClearColor(this.clearColor);
        const oldClearAlpha = renderer.getClearAlpha();
        renderer.setClearColor($495369f3383d41e2$export$b20901887aa920fd, 0);
        renderer.clear(true, true, true);
        renderer.setClearColor(this.clearColor, oldClearAlpha);
    }
    static render(renderer, camera, pickMaterial, octrees, ray, pickState, params) {
        const renderedNodes = [];
        for (const octree of octrees){
            // Get all the octree nodes which intersect the picking ray. We only need to render those.
            const nodes = $deb88b7421585e89$export$852cc38ee6d1f105.nodesOnRay(octree, ray);
            if (!nodes.length) continue;
            $deb88b7421585e89$export$852cc38ee6d1f105.updatePickMaterial(pickMaterial, octree.material, params);
            pickMaterial.updateMaterial(octree, nodes, camera, renderer);
            if (params.onBeforePickRender) params.onBeforePickRender(pickMaterial, pickState.renderTarget);
            // Create copies of the nodes so we can render them differently than in the normal point cloud.
            pickState.scene.children = $deb88b7421585e89$export$852cc38ee6d1f105.createTempNodes(octree, nodes, pickMaterial, renderedNodes.length);
            renderer.render(pickState.scene, camera);
            nodes.forEach((node)=>renderedNodes.push({
                    node: node,
                    octree: octree
                })
            );
        }
        return renderedNodes;
    }
    static nodesOnRay(octree, ray) {
        const nodesOnRay = [];
        const rayClone = ray.clone();
        for (const node of octree.visibleNodes){
            const sphere = $deb88b7421585e89$export$852cc38ee6d1f105.helperSphere.copy(node.boundingSphere).applyMatrix4(octree.matrixWorld);
            if (rayClone.intersectsSphere(sphere)) nodesOnRay.push(node);
        }
        return nodesOnRay;
    }
    static readPixels(renderer, x, y, pickWndSize) {
        // Read the pixel from the pick render target.
        const pixels = new Uint8Array(4 * pickWndSize * pickWndSize);
        renderer.readRenderTargetPixels(renderer.getRenderTarget(), x, y, pickWndSize, pickWndSize, pixels);
        renderer.setScissorTest(false);
        renderer.setRenderTarget(null);
        return pixels;
    }
    static createTempNodes(octree, nodes, pickMaterial, nodeIndexOffset) {
        const tempNodes = [];
        for(let i = 0; i < nodes.length; i++){
            const node = nodes[i];
            const sceneNode = node.sceneNode;
            const tempNode = new $hgUW1$Points(sceneNode.geometry, pickMaterial);
            tempNode.matrix = sceneNode.matrix;
            tempNode.matrixWorld = sceneNode.matrixWorld;
            tempNode.matrixAutoUpdate = false;
            tempNode.frustumCulled = false;
            const nodeIndex = nodeIndexOffset + i + 1;
            if (nodeIndex > 255) console.error('More than 255 nodes for pick are not supported.');
            tempNode.onBeforeRender = $104fbfc219aa06c4$exports.PointCloudMaterial.makeOnBeforeRender(octree, node, nodeIndex);
            tempNodes.push(tempNode);
        }
        return tempNodes;
    }
    static updatePickMaterial(pickMaterial, nodeMaterial, params) {
        pickMaterial.pointSizeType = nodeMaterial.pointSizeType;
        pickMaterial.shape = nodeMaterial.shape;
        pickMaterial.size = nodeMaterial.size;
        pickMaterial.minSize = nodeMaterial.minSize;
        pickMaterial.maxSize = nodeMaterial.maxSize;
        pickMaterial.classification = nodeMaterial.classification;
        pickMaterial.useFilterByNormal = nodeMaterial.useFilterByNormal;
        pickMaterial.filterByNormalThreshold = nodeMaterial.filterByNormalThreshold;
        if (params.pickOutsideClipRegion) pickMaterial.clipMode = $7b3263892bf52898$export$e04e7431702ec10a.DISABLED;
        else {
            pickMaterial.clipMode = nodeMaterial.clipMode;
            pickMaterial.setClipBoxes(nodeMaterial.clipMode === $7b3263892bf52898$export$e04e7431702ec10a.CLIP_OUTSIDE ? nodeMaterial.clipBoxes : []);
        }
    }
    static updatePickRenderTarget(pickState, width, height) {
        if (pickState.renderTarget.width === width && pickState.renderTarget.height === height) return;
        pickState.renderTarget.dispose();
        pickState.renderTarget = $deb88b7421585e89$export$852cc38ee6d1f105.makePickRenderTarget();
        pickState.renderTarget.setSize(width, height);
    }
    static makePickRenderTarget() {
        return new $hgUW1$WebGLRenderTarget(1, 1, {
            minFilter: $hgUW1$LinearFilter,
            magFilter: $hgUW1$NearestFilter,
            format: $hgUW1$RGBAFormat
        });
    }
    static findHit(pixels, pickWndSize) {
        const ibuffer = new Uint32Array(pixels.buffer);
        // Find closest hit inside pixelWindow boundaries
        let min = Number.MAX_VALUE;
        let hit = null;
        for(let u = 0; u < pickWndSize; u++)for(let v = 0; v < pickWndSize; v++){
            const offset = u + v * pickWndSize;
            const distance = Math.pow(u - (pickWndSize - 1) / 2, 2) + Math.pow(v - (pickWndSize - 1) / 2, 2);
            const pcIndex = pixels[4 * offset + 3];
            pixels[4 * offset + 3] = 0;
            const pIndex = ibuffer[offset];
            if (pcIndex > 0 && distance < min) {
                hit = {
                    pIndex: pIndex,
                    pcIndex: pcIndex - 1
                };
                min = distance;
            }
        }
        return hit;
    }
    static getPickPoint(hit, nodes) {
        if (!hit) return null;
        const point = {
        };
        const points = nodes[hit.pcIndex] && nodes[hit.pcIndex].node.sceneNode;
        if (!points) return null;
        point.pointCloud = nodes[hit.pcIndex].octree;
        const attributes = points.geometry.attributes;
        for(const property in attributes){
            if (!attributes.hasOwnProperty(property)) continue;
            const values = attributes[property];
            // tslint:disable-next-line:prefer-switch
            if (property === 'position') $deb88b7421585e89$export$852cc38ee6d1f105.addPositionToPickPoint(point, hit, values, points);
            else if (property === 'normal') $deb88b7421585e89$export$852cc38ee6d1f105.addNormalToPickPoint(point, hit, values, points);
            else if (property === 'indices') ;
            else if (values.itemSize === 1) point[property] = values.array[hit.pIndex];
            else {
                const value = [];
                for(let j = 0; j < values.itemSize; j++)value.push(values.array[values.itemSize * hit.pIndex + j]);
                point[property] = value;
            }
        }
        return point;
    }
    static addPositionToPickPoint(point, hit, values, points) {
        point.position = new $hgUW1$Vector3().fromBufferAttribute(values, hit.pIndex).applyMatrix4(points.matrixWorld);
    }
    static addNormalToPickPoint(point, hit, values, points) {
        const normal = new $hgUW1$Vector3().fromBufferAttribute(values, hit.pIndex);
        const normal4 = new $hgUW1$Vector4(normal.x, normal.y, normal.z, 0).applyMatrix4(points.matrixWorld);
        normal.set(normal4.x, normal4.y, normal4.z);
        point.normal = normal;
    }
    static getPickState() {
        const scene = new $hgUW1$Scene();
        scene.autoUpdate = false;
        const material = new $104fbfc219aa06c4$exports.PointCloudMaterial();
        material.pointColorType = $5e4fff88bfda53ee$export$e95c0b95a8f50828.POINT_INDEX;
        return {
            renderTarget: $deb88b7421585e89$export$852cc38ee6d1f105.makePickRenderTarget(),
            material: material,
            scene: scene
        };
    }
}
$deb88b7421585e89$export$852cc38ee6d1f105.helperVec3 = new $hgUW1$Vector3();
$deb88b7421585e89$export$852cc38ee6d1f105.helperSphere = new $hgUW1$Sphere();
$deb88b7421585e89$export$852cc38ee6d1f105.clearColor = new $hgUW1$Color();


var $262d91a572d1a9aa$exports = {};

$parcel$export($262d91a572d1a9aa$exports, "PointCloudOctree", () => $262d91a572d1a9aa$export$9ad96d5c091c935a);

class $6a1ce7575451c169$export$6adf8357aea718ed {
    constructor(loader, boundingBox){
        this.loader = loader;
        this.boundingBox = boundingBox;
        this.url = null;
        this.pointAttributes = null;
        this.spacing = 0;
        this.numNodesLoading = 0;
        this.maxNumNodesLoading = 3; // I don't understand why this is also a property of IPotree then. Duplicate functionality?
        this.disposed = false;
        this.tightBoundingBox = this.boundingBox.clone();
        this.boundingSphere = this.boundingBox.getBoundingSphere(new $hgUW1$Sphere());
        this.tightBoundingSphere = this.boundingBox.getBoundingSphere(new $hgUW1$Sphere());
    }
    dispose() {
        // this.loader.dispose();
        this.root.traverse((node)=>node.dispose()
        );
        this.disposed = true;
    }
}







var $c5e6e5ed2f67ba3c$exports = {};

$parcel$export($c5e6e5ed2f67ba3c$exports, "PointCloudTree", () => $c5e6e5ed2f67ba3c$export$9dd4354534a21f56);

class $c5e6e5ed2f67ba3c$export$9dd4354534a21f56 extends $hgUW1$Object3D {
    constructor(){
        super(...arguments);
        this.root = null;
    }
    initialized() {
        return this.root !== null;
    }
}



class $262d91a572d1a9aa$export$9ad96d5c091c935a extends $c5e6e5ed2f67ba3c$export$9dd4354534a21f56 {
    constructor(potree, pcoGeometry, material){
        super();
        this.disposed = false;
        this.level = 0;
        this.maxLevel = Infinity;
        /**
         * The minimum radius of a node's bounding sphere on the screen in order to be displayed.
         */ this.minNodePixelSize = $495369f3383d41e2$export$3b9a069507d71e62;
        this.root = null;
        this.boundingBoxNodes = [];
        this.visibleNodes = [];
        this.visibleGeometry = [];
        this.numVisiblePoints = 0;
        this.showBoundingBox = false;
        this.visibleBounds = new $hgUW1$Box3();
        this.name = '';
        this.potree = potree;
        this.root = pcoGeometry.root;
        this.pcoGeometry = pcoGeometry;
        this.boundingBox = pcoGeometry.boundingBox;
        this.boundingSphere = this.boundingBox.getBoundingSphere(new $hgUW1$Sphere());
        this.position.copy(pcoGeometry.offset);
        this.updateMatrix();
        this.material = material || pcoGeometry instanceof $6a1ce7575451c169$export$6adf8357aea718ed ? new $104fbfc219aa06c4$exports.PointCloudMaterial({
            newFormat: true
        }) : new $104fbfc219aa06c4$exports.PointCloudMaterial();
        this.initMaterial(this.material);
    }
    initMaterial(material) {
        this.updateMatrixWorld(true);
        const { min: min , max: max  } = $a82247cbc40359bf$export$271c8c0f20afa0bd(this.pcoGeometry.tightBoundingBox || this.getBoundingBoxWorld(), this.matrixWorld);
        const bWidth = max.z - min.z;
        material.heightMin = min.z - 0.2 * bWidth;
        material.heightMax = max.z + 0.2 * bWidth;
    }
    dispose() {
        if (this.root) this.root.dispose();
        this.pcoGeometry.root.traverse((n)=>this.potree.lru.remove(n)
        );
        this.pcoGeometry.dispose();
        this.material.dispose();
        this.visibleNodes = [];
        this.visibleGeometry = [];
        if (this.picker) {
            this.picker.dispose();
            this.picker = undefined;
        }
        this.disposed = true;
    }
    get pointSizeType() {
        return this.material.pointSizeType;
    }
    set pointSizeType(value) {
        this.material.pointSizeType = value;
    }
    toTreeNode(geometryNode, parent) {
        const points = new $hgUW1$Points(geometryNode.geometry, this.material);
        const node = new $5b22ec763ed6bfa5$export$ac5505afea26905b(geometryNode, points);
        points.name = geometryNode.name;
        points.position.copy(geometryNode.boundingBox.min);
        points.frustumCulled = false;
        points.onBeforeRender = $104fbfc219aa06c4$exports.PointCloudMaterial.makeOnBeforeRender(this, node);
        if (parent) {
            parent.sceneNode.add(points);
            parent.children[geometryNode.index] = node;
            geometryNode.oneTimeDisposeHandlers.push(()=>{
                node.disposeSceneNode();
                parent.sceneNode.remove(node.sceneNode);
                // Replace the tree node (rendered and in the GPU) with the geometry node.
                parent.children[geometryNode.index] = geometryNode;
            });
        } else {
            this.root = node;
            this.add(points);
        }
        return node;
    }
    updateVisibleBounds() {
        const bounds = this.visibleBounds;
        bounds.min.set(Infinity, Infinity, Infinity);
        bounds.max.set(-Infinity, -Infinity, -Infinity);
        for (const node of this.visibleNodes)if (node.isLeafNode) {
            bounds.expandByPoint(node.boundingBox.min);
            bounds.expandByPoint(node.boundingBox.max);
        }
    }
    updateBoundingBoxes() {
        if (!this.showBoundingBox || !this.parent) return;
        // Above: If we're not showing the bounding box or we don't have a parent, we can't update it.
        let bbRoot = this.parent.getObjectByName('bbroot');
        if (!bbRoot) {
            bbRoot = new $hgUW1$Object3D();
            bbRoot.name = 'bbroot';
            this.parent.add(bbRoot);
        }
        // Above: If we don't have a root object, we need to create one.
        const visibleBoxes = [];
        for (const node of this.visibleNodes)if (node.boundingBoxNode !== undefined && node.isLeafNode) visibleBoxes.push(node.boundingBoxNode);
        bbRoot.children = visibleBoxes;
    }
    updateMatrixWorld(force) {
        if (this.matrixAutoUpdate === true) this.updateMatrix();
        if (this.matrixWorldNeedsUpdate === true || force === true) {
            if (!this.parent) this.matrixWorld.copy(this.matrix);
            else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix);
            this.matrixWorldNeedsUpdate = false;
            force = true;
        }
    }
    hideDescendants(object) {
        const toHide = [];
        addVisibleChildren(object);
        while(toHide.length > 0){
            const objToHide = toHide.shift();
            objToHide.visible = false;
            addVisibleChildren(objToHide);
        }
        function addVisibleChildren(obj) {
            for (const child of obj.children)if (child.visible) toHide.push(child);
        }
    }
    moveToOrigin() {
        this.position.set(0, 0, 0); // Reset, then the matrix will be updated in getBoundingBoxWorld()
        this.position.set(0, 0, 0).sub(this.getBoundingBoxWorld().getCenter(new $hgUW1$Vector3()));
    }
    moveToGroundPlane() {
        this.position.y += -this.getBoundingBoxWorld().min.y;
    }
    getBoundingBoxWorld() {
        this.updateMatrixWorld(true);
        return $a82247cbc40359bf$export$271c8c0f20afa0bd(this.boundingBox, this.matrixWorld);
    }
    getVisibleExtent() {
        return this.visibleBounds.applyMatrix4(this.matrixWorld);
    }
    pick(renderer, camera, ray, params = {
    }) {
        this.picker = this.picker || new $deb88b7421585e89$export$852cc38ee6d1f105();
        return this.picker.pick(renderer, camera, ray, [
            this
        ], params);
    }
    get progress() {
        return this.visibleGeometry.length === 0 ? 0 : this.visibleNodes.length / this.visibleGeometry.length;
    }
}



var $f7a27d90ab1a4cd4$exports = {};

$parcel$export($f7a27d90ab1a4cd4$exports, "QueueItem", () => $f7a27d90ab1a4cd4$export$1b63de307530e1bc, (v) => $f7a27d90ab1a4cd4$export$1b63de307530e1bc = v);
$parcel$export($f7a27d90ab1a4cd4$exports, "Potree", () => $f7a27d90ab1a4cd4$export$a7e9de55738dd76b, (v) => $f7a27d90ab1a4cd4$export$a7e9de55738dd76b = v);
var $7a74e3e8ae4314e4$exports = {};

$parcel$export($7a74e3e8ae4314e4$exports, "loadOctree", () => $7a74e3e8ae4314e4$export$783953539230458a, (v) => $7a74e3e8ae4314e4$export$783953539230458a = v);
var $9868d128bfedcb45$exports = {};

$parcel$export($9868d128bfedcb45$exports, "OctreeLoader", () => $9868d128bfedcb45$export$67f2c69805865032, (v) => $9868d128bfedcb45$export$67f2c69805865032 = v);

/**
 * Some types of possible point attribute data formats
 *
 * @class
 */ const $c70b9fcd830122a6$export$4a34a80e6342e491 = {
    DATA_TYPE_DOUBLE: {
        ordinal: 0,
        name: "double",
        size: 8
    },
    DATA_TYPE_FLOAT: {
        ordinal: 1,
        name: "float",
        size: 4
    },
    DATA_TYPE_INT8: {
        ordinal: 2,
        name: "int8",
        size: 1
    },
    DATA_TYPE_UINT8: {
        ordinal: 3,
        name: "uint8",
        size: 1
    },
    DATA_TYPE_INT16: {
        ordinal: 4,
        name: "int16",
        size: 2
    },
    DATA_TYPE_UINT16: {
        ordinal: 5,
        name: "uint16",
        size: 2
    },
    DATA_TYPE_INT32: {
        ordinal: 6,
        name: "int32",
        size: 4
    },
    DATA_TYPE_UINT32: {
        ordinal: 7,
        name: "uint32",
        size: 4
    },
    DATA_TYPE_INT64: {
        ordinal: 8,
        name: "int64",
        size: 8
    },
    DATA_TYPE_UINT64: {
        ordinal: 9,
        name: "uint64",
        size: 8
    }
};
let $c70b9fcd830122a6$var$i = 0;
for(let obj in $c70b9fcd830122a6$export$4a34a80e6342e491){
    $c70b9fcd830122a6$export$4a34a80e6342e491[$c70b9fcd830122a6$var$i] = $c70b9fcd830122a6$export$4a34a80e6342e491[obj];
    $c70b9fcd830122a6$var$i++;
}
// Class that represents a certain point attribute
class $c70b9fcd830122a6$export$4fe36b08757d7602 {
    constructor(name, type, numElements, range = [
        Infinity,
        -Infinity
    ]){
        this.name = name;
        this.type = type;
        this.numElements = numElements;
        this.range = range;
        this.byteSize = this.numElements * this.type.size;
        this.description = "";
    }
}
const $c70b9fcd830122a6$export$c9c943992b7ca9cc = {
    POSITION_CARTESIAN: new $c70b9fcd830122a6$export$4fe36b08757d7602("POSITION_CARTESIAN", $c70b9fcd830122a6$export$4a34a80e6342e491.DATA_TYPE_FLOAT, 3),
    RGBA_PACKED: new $c70b9fcd830122a6$export$4fe36b08757d7602("COLOR_PACKED", $c70b9fcd830122a6$export$4a34a80e6342e491.DATA_TYPE_INT8, 4),
    COLOR_PACKED: new $c70b9fcd830122a6$export$4fe36b08757d7602("COLOR_PACKED", $c70b9fcd830122a6$export$4a34a80e6342e491.DATA_TYPE_INT8, 4),
    RGB_PACKED: new $c70b9fcd830122a6$export$4fe36b08757d7602("COLOR_PACKED", $c70b9fcd830122a6$export$4a34a80e6342e491.DATA_TYPE_INT8, 3),
    NORMAL_FLOATS: new $c70b9fcd830122a6$export$4fe36b08757d7602("NORMAL_FLOATS", $c70b9fcd830122a6$export$4a34a80e6342e491.DATA_TYPE_FLOAT, 3),
    INTENSITY: new $c70b9fcd830122a6$export$4fe36b08757d7602("INTENSITY", $c70b9fcd830122a6$export$4a34a80e6342e491.DATA_TYPE_UINT16, 1),
    CLASSIFICATION: new $c70b9fcd830122a6$export$4fe36b08757d7602("CLASSIFICATION", $c70b9fcd830122a6$export$4a34a80e6342e491.DATA_TYPE_UINT8, 1),
    NORMAL_SPHEREMAPPED: new $c70b9fcd830122a6$export$4fe36b08757d7602("NORMAL_SPHEREMAPPED", $c70b9fcd830122a6$export$4a34a80e6342e491.DATA_TYPE_UINT8, 2),
    NORMAL_OCT16: new $c70b9fcd830122a6$export$4fe36b08757d7602("NORMAL_OCT16", $c70b9fcd830122a6$export$4a34a80e6342e491.DATA_TYPE_UINT8, 2),
    NORMAL: new $c70b9fcd830122a6$export$4fe36b08757d7602("NORMAL", $c70b9fcd830122a6$export$4a34a80e6342e491.DATA_TYPE_FLOAT, 3),
    RETURN_NUMBER: new $c70b9fcd830122a6$export$4fe36b08757d7602("RETURN_NUMBER", $c70b9fcd830122a6$export$4a34a80e6342e491.DATA_TYPE_UINT8, 1),
    NUMBER_OF_RETURNS: new $c70b9fcd830122a6$export$4fe36b08757d7602("NUMBER_OF_RETURNS", $c70b9fcd830122a6$export$4a34a80e6342e491.DATA_TYPE_UINT8, 1),
    SOURCE_ID: new $c70b9fcd830122a6$export$4fe36b08757d7602("SOURCE_ID", $c70b9fcd830122a6$export$4a34a80e6342e491.DATA_TYPE_UINT16, 1),
    INDICES: new $c70b9fcd830122a6$export$4fe36b08757d7602("INDICES", $c70b9fcd830122a6$export$4a34a80e6342e491.DATA_TYPE_UINT32, 1),
    SPACING: new $c70b9fcd830122a6$export$4fe36b08757d7602("SPACING", $c70b9fcd830122a6$export$4a34a80e6342e491.DATA_TYPE_FLOAT, 1),
    GPS_TIME: new $c70b9fcd830122a6$export$4fe36b08757d7602("GPS_TIME", $c70b9fcd830122a6$export$4a34a80e6342e491.DATA_TYPE_DOUBLE, 1)
};
class $c70b9fcd830122a6$export$33a55c29cc28473e {
    // pointAttributes will be a list of strings
    constructor(pointAttributes, attributes = [], byteSize = 0, size = 0, vectors = []){
        this.attributes = attributes;
        this.byteSize = byteSize;
        this.size = size;
        this.vectors = vectors;
        if (pointAttributes != null) for(let i = 0; i < pointAttributes.length; i++){
            let pointAttributeName = pointAttributes[i];
            let pointAttribute = $c70b9fcd830122a6$export$c9c943992b7ca9cc[pointAttributeName];
            this.attributes.push(pointAttribute);
            this.byteSize += pointAttribute.byteSize;
            this.size++;
        }
    }
    // I hate these argument names that are so similar to each other but have completely different types
    add(pointAttribute) {
        this.attributes.push(pointAttribute);
        this.byteSize += pointAttribute.byteSize;
        this.size++;
    }
    addVector(vector) {
        this.vectors.push(vector);
    }
    hasNormals() {
        for(let name in this.attributes){
            let pointAttribute = this.attributes[name];
            if (pointAttribute === $c70b9fcd830122a6$export$c9c943992b7ca9cc.NORMAL_SPHEREMAPPED || pointAttribute === $c70b9fcd830122a6$export$c9c943992b7ca9cc.NORMAL_FLOATS || pointAttribute === $c70b9fcd830122a6$export$c9c943992b7ca9cc.NORMAL || pointAttribute === $c70b9fcd830122a6$export$c9c943992b7ca9cc.NORMAL_OCT16) return true;
        }
        return false;
    }
}



var $46d1e842cf3bbf67$export$d4b568a022100543;
(function($46d1e842cf3bbf67$export$d4b568a022100543) {
    $46d1e842cf3bbf67$export$d4b568a022100543["DECODER_WORKER_BROTLI"] = "DECODER_WORKER_BROTLI";
    $46d1e842cf3bbf67$export$d4b568a022100543["DECODER_WORKER"] = "DECODER_WORKER";
})($46d1e842cf3bbf67$export$d4b568a022100543 || ($46d1e842cf3bbf67$export$d4b568a022100543 = {
}));
// Worker JS names: "BinaryDecoderWorker.js", "DEMWorker.js", "EptBinaryDecoderWorker.js", "EptLaszipDecoderWorker.js",
// EptZstandardDecoder_preamble.js", "EptZstandardDecoderWorker.js", "LASDecoderWorker.js", "LASLAZWorker.js", "LazLoaderWorker.js"
function $46d1e842cf3bbf67$var$createWorker(type) {
    console.log(type);
    switch(type){
        case $46d1e842cf3bbf67$export$d4b568a022100543.DECODER_WORKER_BROTLI:
            // const worker = require("./brotli-decoder.worker.js");
            // return new worker();
            return new Worker(new URL("brotli-decoder.worker.c1e936e0.js", import.meta.url));
        case $46d1e842cf3bbf67$export$d4b568a022100543.DECODER_WORKER:
            // let ctor = require("./decoder.worker.js");
            // return new ctor();
            return new Worker(new URL("decoder.worker.5c40dda9.js", import.meta.url));
        default:
            throw new Error("Unknown worker type");
    }
}
class $46d1e842cf3bbf67$export$ddf9e847a113aa9c {
    constructor(){
        // Workers will be an object that has a key for each worker type and the value is an array of Workers that can be empty
        this.workers = {
            DECODER_WORKER: [],
            DECODER_WORKER_BROTLI: []
        };
    }
    getWorker(workerType) {
        // Throw error if workerType is not recognized
        if (this.workers[workerType] === undefined) throw new Error("Unknown worker type");
        // Given a worker URL, if URL does not exist in the worker object, create a new array with the URL as a key
        if (this.workers[workerType].length === 0) {
            let worker = $46d1e842cf3bbf67$var$createWorker(workerType);
            this.workers[workerType].push(worker);
        }
        let worker = this.workers[workerType].pop();
        if (worker === undefined) throw new Error("No workers available");
        // Return the last worker in the array and remove it from the array
        return worker;
    }
    returnWorker(workerType, worker) {
        this.workers[workerType].push(worker);
    }
}



class $37ad753d75a74b7b$export$9b0842779fd89769 {
    constructor(name, octreeGeometry, boundingBox){
        this.name = name;
        this.octreeGeometry = octreeGeometry;
        this.boundingBox = boundingBox;
        this.loaded = false;
        this.loading = false;
        this.parent = null;
        this.geometry = null;
        this.hasChildren = false;
        this.isLeafNode = true;
        this.isTreeNode = false;
        this.isGeometryNode = true;
        this.children = [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null, 
        ];
        this.id = $37ad753d75a74b7b$export$9b0842779fd89769.IDCount++;
        this.index = parseInt(name.charAt(name.length - 1));
        this.boundingSphere = boundingBox.getBoundingSphere(new $hgUW1$Sphere());
        this.numPoints = 0;
        this.oneTimeDisposeHandlers = [];
    }
    // isGeometryNode(){
    // 	return true;
    // }
    getLevel() {
        return this.level;
    }
    // isTreeNode(){
    // 	return false;
    // } // Converted to property
    isLoaded() {
        return this.loaded;
    }
    getBoundingSphere() {
        return this.boundingSphere;
    }
    // getChildren(){
    // 	let children = [];
    // 	for (let i = 0; i < 8; i++) {
    // 		if (this.children[i]) {
    // 			children.push(this.children[i]);
    // 		}
    // 	}
    // 	return children;
    // }
    getBoundingBox() {
        return this.boundingBox;
    }
    load() {
        if (this.octreeGeometry.numNodesLoading >= this.octreeGeometry.maxNumNodesLoading) return;
        if (this.octreeGeometry.loader) this.octreeGeometry.loader.load(this);
    }
    getNumPoints() {
        return this.numPoints;
    }
    dispose() {
        if (this.geometry && this.parent != null) {
            this.geometry.dispose();
            this.geometry = null;
            this.loaded = false;
            // this.dispatchEvent( { type: 'dispose' } );
            for(let i = 0; i < this.oneTimeDisposeHandlers.length; i++){
                let handler = this.oneTimeDisposeHandlers[i];
                handler();
            }
            this.oneTimeDisposeHandlers = [];
        }
    }
    traverse(cb, includeSelf = true) {
        const stack = includeSelf ? [
            this
        ] : [];
        let current;
        while((current = stack.pop()) !== undefined){
            cb(current);
            for (const child of current.children)if (child !== null) stack.push(child);
        }
    }
}
// create static IDCount variable
$37ad753d75a74b7b$export$9b0842779fd89769.IDCount = 0;
$37ad753d75a74b7b$export$9b0842779fd89769.IDCount = 0;



var $9868d128bfedcb45$var$__awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class $9868d128bfedcb45$export$f768aec11625a454 {
    constructor(url, workerPool, metadata){
        this.url = url;
        this.workerPool = workerPool;
        this.metadata = metadata;
    }
    load(node) {
        return $9868d128bfedcb45$var$__awaiter(this, void 0, void 0, function*() {
            if (node.loaded || node.loading) return;
            node.loading = true;
            // TODO: Need to put the numNodesLoading to the pco
            node.octreeGeometry.numNodesLoading++;
            try {
                if (node.nodeType === 2) yield this.loadHierarchy(node);
                let { byteOffset: byteOffset , byteSize: byteSize  } = node;
                if (byteOffset === undefined || byteSize === undefined) throw new Error("byteOffset and byteSize are required");
                let urlOctree = `${this.url}/../octree.bin`;
                let first = byteOffset;
                let last = byteOffset + byteSize - BigInt(1);
                let buffer1;
                if (byteSize === BigInt(0)) {
                    buffer1 = new ArrayBuffer(0);
                    console.warn(`loaded node with 0 bytes: ${node.name}`);
                } else {
                    let response = yield fetch(urlOctree, {
                        headers: {
                            'content-type': 'multipart/byteranges',
                            'Range': `bytes=${first}-${last}`
                        }
                    });
                    buffer1 = yield response.arrayBuffer();
                }
                const workerType = this.metadata.encoding === "BROTLI" ? $46d1e842cf3bbf67$export$d4b568a022100543.DECODER_WORKER_BROTLI : $46d1e842cf3bbf67$export$d4b568a022100543.DECODER_WORKER;
                const worker = this.workerPool.getWorker(workerType);
                worker.onmessage = (e)=>{
                    let data = e.data;
                    let buffers = data.attributeBuffers;
                    this.workerPool.returnWorker(workerType, worker);
                    let geometry = new $hgUW1$BufferGeometry();
                    for(let property in buffers){
                        let buffer = buffers[property].buffer;
                        if (property === "position") geometry.setAttribute('position', new $hgUW1$BufferAttribute(new Float32Array(buffer), 3));
                        else if (property === "rgba") geometry.setAttribute('rgba', new $hgUW1$BufferAttribute(new Uint8Array(buffer), 4, true));
                        else if (property === "NORMAL") //geometry.setAttribute('rgba', new BufferAttribute(new Uint8Array(buffer), 4, true));
                        geometry.setAttribute('normal', new $hgUW1$BufferAttribute(new Float32Array(buffer), 3));
                        else if (property === "INDICES") {
                            let bufferAttribute = new $hgUW1$BufferAttribute(new Uint8Array(buffer), 4);
                            bufferAttribute.normalized = true;
                            geometry.setAttribute('indices', bufferAttribute);
                        } else {
                            const bufferAttribute = new $hgUW1$BufferAttribute(new Float32Array(buffer), 1);
                            let batchAttribute = buffers[property].attribute;
                            bufferAttribute.potree = {
                                offset: buffers[property].offset,
                                scale: buffers[property].scale,
                                preciseBuffer: buffers[property].preciseBuffer,
                                range: batchAttribute.range
                            };
                            geometry.setAttribute(property, bufferAttribute);
                        }
                    }
                    // indices ??
                    node.density = data.density;
                    node.geometry = geometry;
                    node.loaded = true;
                    node.loading = false;
                    // Potree.numNodesLoading--;
                    node.octreeGeometry.numNodesLoading--;
                };
                let pointAttributes = node.octreeGeometry.pointAttributes;
                let scale = node.octreeGeometry.scale;
                let box = node.boundingBox;
                let min = node.octreeGeometry.offset.clone().add(box.min);
                let size = box.max.clone().sub(box.min);
                let max = min.clone().add(size);
                let numPoints = node.numPoints;
                let offset = node.octreeGeometry.loader.offset;
                let message = {
                    name: node.name,
                    buffer: buffer1,
                    pointAttributes: pointAttributes,
                    scale: scale,
                    min: min,
                    max: max,
                    size: size,
                    offset: offset,
                    numPoints: numPoints
                };
                worker.postMessage(message, [
                    message.buffer
                ]);
            } catch (e) {
                node.loaded = false;
                node.loading = false;
                node.octreeGeometry.numNodesLoading--;
                console.log(`failed to load ${node.name}`);
                console.log(e);
                console.log(`trying again!`);
            }
        });
    }
    parseHierarchy(node, buffer) {
        let view = new DataView(buffer);
        let bytesPerNode = 22;
        let numNodes = buffer.byteLength / bytesPerNode;
        let octree = node.octreeGeometry;
        // let nodes = [node];
        let nodes = new Array(numNodes);
        nodes[0] = node;
        let nodePos = 1;
        for(let i = 0; i < numNodes; i++){
            let current = nodes[i];
            let type = view.getUint8(i * bytesPerNode + 0);
            let childMask = view.getUint8(i * bytesPerNode + 1);
            let numPoints = view.getUint32(i * bytesPerNode + 2, true);
            let byteOffset = view.getBigInt64(i * bytesPerNode + 6, true);
            let byteSize = view.getBigInt64(i * bytesPerNode + 14, true);
            // if(byteSize === 0n){
            // 	// debugger;
            // }
            if (current.nodeType === 2) {
                // replace proxy with real node
                current.byteOffset = byteOffset;
                current.byteSize = byteSize;
                current.numPoints = numPoints;
            } else if (type === 2) {
                // load proxy
                current.hierarchyByteOffset = byteOffset;
                current.hierarchyByteSize = byteSize;
                current.numPoints = numPoints;
            } else {
                // load real node 
                current.byteOffset = byteOffset;
                current.byteSize = byteSize;
                current.numPoints = numPoints;
            }
            current.nodeType = type;
            if (current.nodeType === 2) continue;
            for(let childIndex = 0; childIndex < 8; childIndex++){
                let childExists = (1 << childIndex & childMask) !== 0;
                if (!childExists) continue;
                let childName = current.name + childIndex;
                let childAABB = $9868d128bfedcb45$var$createChildAABB(current.boundingBox, childIndex);
                let child = new $37ad753d75a74b7b$export$9b0842779fd89769(childName, octree, childAABB);
                child.name = childName;
                child.spacing = current.spacing / 2;
                child.level = current.level + 1;
                current.children[childIndex] = child;
                child.parent = current;
                // nodes.push(child);
                nodes[nodePos] = child;
                nodePos++;
            }
        // if((i % 500) === 0){
        // 	yield;
        // }
        }
    // if(duration > 20){
    // 	let msg = `duration: ${duration}ms, numNodes: ${numNodes}`;
    // 	console.log(msg);
    // }
    }
    loadHierarchy(node) {
        return $9868d128bfedcb45$var$__awaiter(this, void 0, void 0, function*() {
            let { hierarchyByteOffset: hierarchyByteOffset , hierarchyByteSize: hierarchyByteSize  } = node;
            if (hierarchyByteOffset === undefined || hierarchyByteSize === undefined) throw new Error(`hierarchyByteOffset and hierarchyByteSize are undefined for node ${node.name}`);
            let hierarchyPath = `${this.url}/../hierarchy.bin`;
            let first = hierarchyByteOffset;
            let last = first + hierarchyByteSize - BigInt(1);
            let response = yield fetch(hierarchyPath, {
                headers: {
                    'content-type': 'multipart/byteranges',
                    'Range': `bytes=${first}-${last}`
                }
            });
            let buffer = yield response.arrayBuffer();
            this.parseHierarchy(node, buffer);
        });
    }
}
let $9868d128bfedcb45$var$tmpVec3 = new $hgUW1$Vector3();
function $9868d128bfedcb45$var$createChildAABB(aabb, index) {
    let min = aabb.min.clone();
    let max = aabb.max.clone();
    let size = $9868d128bfedcb45$var$tmpVec3.subVectors(max, min);
    if ((index & 1) > 0) min.z += size.z / 2;
    else max.z -= size.z / 2;
    if ((index & 2) > 0) min.y += size.y / 2;
    else max.y -= size.y / 2;
    if ((index & 4) > 0) min.x += size.x / 2;
    else max.x -= size.x / 2;
    return new $hgUW1$Box3(min, max);
}
let $9868d128bfedcb45$var$typenameTypeattributeMap = {
    "double": $c70b9fcd830122a6$export$4a34a80e6342e491.DATA_TYPE_DOUBLE,
    "float": $c70b9fcd830122a6$export$4a34a80e6342e491.DATA_TYPE_FLOAT,
    "int8": $c70b9fcd830122a6$export$4a34a80e6342e491.DATA_TYPE_INT8,
    "uint8": $c70b9fcd830122a6$export$4a34a80e6342e491.DATA_TYPE_UINT8,
    "int16": $c70b9fcd830122a6$export$4a34a80e6342e491.DATA_TYPE_INT16,
    "uint16": $c70b9fcd830122a6$export$4a34a80e6342e491.DATA_TYPE_UINT16,
    "int32": $c70b9fcd830122a6$export$4a34a80e6342e491.DATA_TYPE_INT32,
    "uint32": $c70b9fcd830122a6$export$4a34a80e6342e491.DATA_TYPE_UINT32,
    "int64": $c70b9fcd830122a6$export$4a34a80e6342e491.DATA_TYPE_INT64,
    "uint64": $c70b9fcd830122a6$export$4a34a80e6342e491.DATA_TYPE_UINT64
};
class $9868d128bfedcb45$export$67f2c69805865032 {
    constructor(){
        this.workerPool = new $46d1e842cf3bbf67$export$ddf9e847a113aa9c();
    }
    static parseAttributes(jsonAttributes) {
        let attributes = new $c70b9fcd830122a6$export$33a55c29cc28473e();
        // Replacements object for string to string
        let replacements = {
            "rgb": "rgba"
        };
        for (const jsonAttribute of jsonAttributes){
            let { name: name , numElements: numElements , min: min , max: max  } = jsonAttribute;
            let type = $9868d128bfedcb45$var$typenameTypeattributeMap[jsonAttribute.type]; // Fix the typing, currently jsonAttribute has type "never"
            let potreeAttributeName = replacements[name] ? replacements[name] : name;
            let attribute = new $c70b9fcd830122a6$export$4fe36b08757d7602(potreeAttributeName, type, numElements);
            if (numElements === 1) attribute.range = [
                min[0],
                max[0]
            ];
            else attribute.range = [
                min,
                max
            ];
            if (name === "gps-time") {
                if (typeof attribute.range[0] === "number" && attribute.range[0] === attribute.range[1]) attribute.range[1] += 1;
            }
            attribute.initialRange = attribute.range;
            attributes.add(attribute);
        }
        {
            // check if it has normals
            let hasNormals = attributes.attributes.find((a)=>a.name === "NormalX"
            ) !== undefined && attributes.attributes.find((a)=>a.name === "NormalY"
            ) !== undefined && attributes.attributes.find((a)=>a.name === "NormalZ"
            ) !== undefined;
            if (hasNormals) {
                let vector = {
                    name: "NORMAL",
                    attributes: [
                        "NormalX",
                        "NormalY",
                        "NormalZ"
                    ]
                };
                attributes.addVector(vector);
            }
        }
        return attributes;
    }
    load(url, xhrRequest) {
        return $9868d128bfedcb45$var$__awaiter(this, void 0, void 0, function*() {
            let response = yield xhrRequest(url);
            let metadata = yield response.json();
            let attributes = $9868d128bfedcb45$export$67f2c69805865032.parseAttributes(metadata.attributes);
            console.log(attributes);
            let loader = new $9868d128bfedcb45$export$f768aec11625a454(url, this.workerPool, metadata);
            loader.attributes = attributes;
            loader.scale = metadata.scale;
            loader.offset = metadata.offset;
            let octree = new $6a1ce7575451c169$export$6adf8357aea718ed(loader, new $hgUW1$Box3(new $hgUW1$Vector3(...metadata.boundingBox.min), new $hgUW1$Vector3(...metadata.boundingBox.max)));
            octree.url = url;
            octree.spacing = metadata.spacing;
            octree.scale = metadata.scale;
            let min = new $hgUW1$Vector3(...metadata.boundingBox.min);
            let max = new $hgUW1$Vector3(...metadata.boundingBox.max);
            let boundingBox = new $hgUW1$Box3(min, max);
            let offset = min.clone();
            boundingBox.min.sub(offset);
            boundingBox.max.sub(offset);
            octree.projection = metadata.projection;
            octree.boundingBox = boundingBox;
            octree.tightBoundingBox = boundingBox.clone();
            octree.boundingSphere = boundingBox.getBoundingSphere(new $hgUW1$Sphere());
            octree.tightBoundingSphere = boundingBox.getBoundingSphere(new $hgUW1$Sphere());
            octree.offset = offset;
            octree.pointAttributes = $9868d128bfedcb45$export$67f2c69805865032.parseAttributes(metadata.attributes);
            let root = new $37ad753d75a74b7b$export$9b0842779fd89769("r", octree, boundingBox);
            root.level = 0;
            root.nodeType = 2;
            root.hierarchyByteOffset = BigInt(0);
            root.hierarchyByteSize = BigInt(metadata.hierarchy.firstChunkSize);
            root.spacing = octree.spacing;
            root.byteOffset = BigInt(0); // Originally 0
            octree.root = root;
            loader.load(root);
            let result = {
                geometry: octree
            };
            return result;
        });
    }
}


var $7a74e3e8ae4314e4$var$__awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function $7a74e3e8ae4314e4$export$783953539230458a(url, getUrl, xhrRequest) {
    return $7a74e3e8ae4314e4$var$__awaiter(this, void 0, void 0, function*() {
        const trueUrl = yield getUrl(url);
        const loader = new $9868d128bfedcb45$exports.OctreeLoader();
        const { geometry: geometry  } = yield loader.load(trueUrl, xhrRequest);
        return geometry;
    });
}




const $b22aa1edc2b6463b$var$canvas = document.createElement('canvas');
const $b22aa1edc2b6463b$var$gl = $b22aa1edc2b6463b$var$canvas.getContext('webgl');
const $b22aa1edc2b6463b$export$d6a5c11f04f75862 = {
    SHADER_INTERPOLATION: $b22aa1edc2b6463b$var$hasExtension('EXT_frag_depth') && $b22aa1edc2b6463b$var$hasMinVaryingVectors(8),
    SHADER_SPLATS: $b22aa1edc2b6463b$var$hasExtension('EXT_frag_depth') && $b22aa1edc2b6463b$var$hasExtension('OES_texture_float') && $b22aa1edc2b6463b$var$hasMinVaryingVectors(8),
    SHADER_EDL: $b22aa1edc2b6463b$var$hasExtension('OES_texture_float') && $b22aa1edc2b6463b$var$hasMinVaryingVectors(8),
    precision: $b22aa1edc2b6463b$var$getPrecision()
};
function $b22aa1edc2b6463b$var$hasExtension(ext) {
    return $b22aa1edc2b6463b$var$gl !== null && Boolean($b22aa1edc2b6463b$var$gl.getExtension(ext));
}
function $b22aa1edc2b6463b$var$hasMinVaryingVectors(value) {
    return $b22aa1edc2b6463b$var$gl !== null && $b22aa1edc2b6463b$var$gl.getParameter($b22aa1edc2b6463b$var$gl.MAX_VARYING_VECTORS) >= value;
}
function $b22aa1edc2b6463b$var$getPrecision() {
    if ($b22aa1edc2b6463b$var$gl === null) return '';
    const vsHighpFloat = $b22aa1edc2b6463b$var$gl.getShaderPrecisionFormat($b22aa1edc2b6463b$var$gl.VERTEX_SHADER, $b22aa1edc2b6463b$var$gl.HIGH_FLOAT);
    const vsMediumpFloat = $b22aa1edc2b6463b$var$gl.getShaderPrecisionFormat($b22aa1edc2b6463b$var$gl.VERTEX_SHADER, $b22aa1edc2b6463b$var$gl.MEDIUM_FLOAT);
    const fsHighpFloat = $b22aa1edc2b6463b$var$gl.getShaderPrecisionFormat($b22aa1edc2b6463b$var$gl.FRAGMENT_SHADER, $b22aa1edc2b6463b$var$gl.HIGH_FLOAT);
    const fsMediumpFloat = $b22aa1edc2b6463b$var$gl.getShaderPrecisionFormat($b22aa1edc2b6463b$var$gl.FRAGMENT_SHADER, $b22aa1edc2b6463b$var$gl.MEDIUM_FLOAT);
    const highpAvailable = vsHighpFloat && fsHighpFloat && vsHighpFloat.precision > 0 && fsHighpFloat.precision > 0;
    const mediumpAvailable = vsMediumpFloat && fsMediumpFloat && vsMediumpFloat.precision > 0 && fsMediumpFloat.precision > 0;
    return highpAvailable ? 'highp' : mediumpAvailable ? 'mediump' : 'lowp';
}




var $b106f1b8d97b363d$exports = {};

$parcel$export($b106f1b8d97b363d$exports, "Version", () => $b106f1b8d97b363d$export$682c179f50ab847d);
class $b106f1b8d97b363d$export$682c179f50ab847d {
    constructor(version){
        this.versionMinor = 0;
        this.version = version;
        const vmLength = version.indexOf('.') === -1 ? version.length : version.indexOf('.');
        this.versionMajor = parseInt(version.substr(0, vmLength), 10);
        this.versionMinor = parseInt(version.substr(vmLength + 1), 10);
        if (isNaN(this.versionMinor)) this.versionMinor = 0;
    }
    newerThan(version) {
        const v = new $b106f1b8d97b363d$export$682c179f50ab847d(version);
        if (this.versionMajor > v.versionMajor) return true;
        else if (this.versionMajor === v.versionMajor && this.versionMinor > v.versionMinor) return true;
        else return false;
    }
    equalOrHigher(version) {
        const v = new $b106f1b8d97b363d$export$682c179f50ab847d(version);
        if (this.versionMajor > v.versionMajor) return true;
        else if (this.versionMajor === v.versionMajor && this.versionMinor >= v.versionMinor) return true;
        else return false;
    }
    upTo(version) {
        return !this.newerThan(version);
    }
}


class $ec0542d11ab1884c$export$53e052c61a1db49b {
    constructor({ getUrl: getUrl = (s)=>Promise.resolve(s)
     , version: version , boundingBox: boundingBox , scale: scale , xhrRequest: xhrRequest ,  }){
        this.disposed = false;
        this.workers = [];
        console.log([
            getUrl,
            version,
            boundingBox,
            scale,
            xhrRequest
        ]);
        if (typeof version === 'string') this.version = new $b106f1b8d97b363d$export$682c179f50ab847d(version);
        else this.version = version;
        this.xhrRequest = xhrRequest;
        this.getUrl = getUrl;
        this.boundingBox = boundingBox;
        this.scale = scale;
        this.callbacks = [];
    }
    dispose() {
        this.workers.forEach((worker)=>worker.terminate()
        );
        this.workers = [];
        this.disposed = true;
    }
    load(node) {
        if (node.loaded || this.disposed) return Promise.resolve();
        return Promise.resolve(this.getUrl(this.getNodeUrl(node))).then((url)=>this.xhrRequest(url, {
                mode: 'cors'
            })
        ).then((res)=>res.arrayBuffer()
        ).then((buffer)=>{
            return new Promise((resolve)=>this.parse(node, buffer, resolve)
            );
        });
    }
    getNodeUrl(node) {
        let url = node.getUrl();
        if (this.version.equalOrHigher('1.4')) url += '.bin';
        return url;
    }
    parse(node, buffer, resolve) {
        if (this.disposed) {
            resolve();
            return;
        }
        const worker = this.getWorker();
        const pointAttributes = node.pcoGeometry.pointAttributes;
        const numPoints = buffer.byteLength / pointAttributes.byteSize;
        if (this.version.upTo('1.5')) node.numPoints = numPoints;
        worker.onmessage = (e)=>{
            if (this.disposed) {
                resolve();
                return;
            }
            const data = e.data;
            const geometry = node.geometry = node.geometry || new $hgUW1$BufferGeometry();
            geometry.boundingBox = node.boundingBox;
            this.addBufferAttributes(geometry, data.attributeBuffers);
            this.addIndices(geometry, data.indices);
            this.addNormalAttribute(geometry, numPoints);
            node.mean = new $hgUW1$Vector3().fromArray(data.mean);
            node.tightBoundingBox = this.getTightBoundingBox(data.tightBoundingBox);
            node.loaded = true;
            node.loading = false;
            node.failed = false;
            node.pcoGeometry.numNodesLoading--;
            node.pcoGeometry.needsUpdate = true;
            this.releaseWorker(worker);
            this.callbacks.forEach((callback)=>callback(node)
            );
            resolve();
        };
        const message = {
            buffer: buffer,
            pointAttributes: pointAttributes,
            version: this.version.version,
            min: node.boundingBox.min.toArray(),
            offset: node.pcoGeometry.offset.toArray(),
            scale: this.scale,
            spacing: node.spacing,
            hasChildren: node.hasChildren
        };
        worker.postMessage(message, [
            message.buffer
        ]);
    }
    getWorker() {
        const worker = this.workers.pop();
        if (worker) return worker;
        return new Worker(new URL("binary-decoder.worker.ad594f7b.js", import.meta.url));
    }
    releaseWorker(worker) {
        this.workers.push(worker);
    }
    getTightBoundingBox({ min: min , max: max  }) {
        const box = new $hgUW1$Box3(new $hgUW1$Vector3().fromArray(min), new $hgUW1$Vector3().fromArray(max));
        box.max.sub(box.min);
        box.min.set(0, 0, 0);
        return box;
    }
    addBufferAttributes(geometry, buffers) {
        Object.keys(buffers).forEach((property)=>{
            const buffer = buffers[property].buffer;
            if (this.isAttribute(property, $6917a634b1124b58$export$718faa7d6d01aabc.POSITION_CARTESIAN)) geometry.setAttribute('position', new $hgUW1$BufferAttribute(new Float32Array(buffer), 3));
            else if (this.isAttribute(property, $6917a634b1124b58$export$718faa7d6d01aabc.COLOR_PACKED)) geometry.setAttribute('color', new $hgUW1$BufferAttribute(new Uint8Array(buffer), 3, true));
            else if (this.isAttribute(property, $6917a634b1124b58$export$718faa7d6d01aabc.INTENSITY)) geometry.setAttribute('intensity', new $hgUW1$BufferAttribute(new Float32Array(buffer), 1));
            else if (this.isAttribute(property, $6917a634b1124b58$export$718faa7d6d01aabc.CLASSIFICATION)) geometry.setAttribute('classification', new $hgUW1$BufferAttribute(new Uint8Array(buffer), 1));
            else if (this.isAttribute(property, $6917a634b1124b58$export$718faa7d6d01aabc.NORMAL_SPHEREMAPPED)) geometry.setAttribute('normal', new $hgUW1$BufferAttribute(new Float32Array(buffer), 3));
            else if (this.isAttribute(property, $6917a634b1124b58$export$718faa7d6d01aabc.NORMAL_OCT16)) geometry.setAttribute('normal', new $hgUW1$BufferAttribute(new Float32Array(buffer), 3));
            else if (this.isAttribute(property, $6917a634b1124b58$export$718faa7d6d01aabc.NORMAL)) geometry.setAttribute('normal', new $hgUW1$BufferAttribute(new Float32Array(buffer), 3));
        });
    }
    addIndices(geometry, indices) {
        const indicesAttribute = new $hgUW1$Uint8BufferAttribute(indices, 4);
        indicesAttribute.normalized = true;
        geometry.setAttribute('indices', indicesAttribute);
    }
    addNormalAttribute(geometry, numPoints) {
        if (!geometry.getAttribute('normal')) {
            const buffer = new Float32Array(numPoints * 3);
            geometry.setAttribute('normal', new $hgUW1$BufferAttribute(new Float32Array(buffer), 3));
        }
    }
    isAttribute(property, name) {
        return parseInt(property, 10) === name;
    }
}










function $8d359fa38d1e823c$export$df11162d0a7f75f7(url, getUrl, xhrRequest) {
    return Promise.resolve(getUrl(url)).then((transformedUrl)=>{
        return xhrRequest(transformedUrl, {
            mode: 'cors'
        }).then((res)=>res.json()
        ).then($8d359fa38d1e823c$var$parse(transformedUrl, getUrl, xhrRequest)); // 2. Parse the response
    });
}
function $8d359fa38d1e823c$var$parse(url, getUrl, xhrRequest) {
    return (data)=>{
        const { offset: offset , boundingBox: boundingBox , tightBoundingBox: tightBoundingBox  } = $8d359fa38d1e823c$var$getBoundingBoxes(data);
        const loader = new $ec0542d11ab1884c$export$53e052c61a1db49b({
            getUrl: getUrl,
            version: data.version,
            boundingBox: boundingBox,
            scale: data.scale,
            xhrRequest: xhrRequest
        }); // 3. Create a BinaryLoader with the bounding box and scale
        const pco = new $57aef60af449f0bf$export$bbcd90498494c738(loader, boundingBox, tightBoundingBox, offset, xhrRequest); // 4. Create a PointCloudOctreeGeometry
        // 5. Fill in Geometry with the data from the POCJson
        pco.url = url;
        pco.octreeDir = data.octreeDir;
        pco.needsUpdate = true;
        pco.spacing = data.spacing;
        pco.hierarchyStepSize = data.hierarchyStepSize;
        pco.projection = data.projection;
        pco.offset = offset;
        pco.pointAttributes = new $6917a634b1124b58$export$33a55c29cc28473e(data.pointAttributes);
        console.log(pco.pointAttributes);
        const nodes = {
        }; // HMM! Juicy! 6. Create a map of nodes
        const version = new $b106f1b8d97b363d$export$682c179f50ab847d(data.version);
        return $8d359fa38d1e823c$var$loadRoot(pco, data, nodes, version).then(()=>{
            if (version.upTo('1.4')) $8d359fa38d1e823c$var$loadRemainingHierarchy(pco, data, nodes);
            pco.nodes = nodes;
            return pco;
        });
    };
}
function $8d359fa38d1e823c$var$getBoundingBoxes(data) {
    const min = new $hgUW1$Vector3(data.boundingBox.lx, data.boundingBox.ly, data.boundingBox.lz);
    const max = new $hgUW1$Vector3(data.boundingBox.ux, data.boundingBox.uy, data.boundingBox.uz);
    const boundingBox = new $hgUW1$Box3(min, max);
    const tightBoundingBox = boundingBox.clone();
    const offset = min.clone();
    if (data.tightBoundingBox) {
        const { lx: lx , ly: ly , lz: lz , ux: ux , uy: uy , uz: uz  } = data.tightBoundingBox;
        tightBoundingBox.min.set(lx, ly, lz);
        tightBoundingBox.max.set(ux, uy, uz);
    }
    boundingBox.min.sub(offset);
    boundingBox.max.sub(offset);
    tightBoundingBox.min.sub(offset);
    tightBoundingBox.max.sub(offset);
    return {
        offset: offset,
        boundingBox: boundingBox,
        tightBoundingBox: tightBoundingBox
    };
}
function $8d359fa38d1e823c$var$loadRoot(pco, data, nodes, version) {
    const name = 'r';
    const root = new $2c1acd357a20f870$export$fdc7d6e1ad096869(name, pco, pco.boundingBox);
    root.hasChildren = true;
    root.spacing = pco.spacing; // Fill in root info from the POCJson
    if (version.upTo('1.5')) root.numPoints = data.hierarchy[0][1];
    else root.numPoints = 0;
    pco.root = root;
    nodes[name] = root;
    return pco.root.load();
}
function $8d359fa38d1e823c$var$loadRemainingHierarchy(pco, data, nodes) {
    for(let i = 1; i < data.hierarchy.length; i++){
        const [name, numPoints] = data.hierarchy[i];
        const { index: index , parentName: parentName , level: level  } = $8d359fa38d1e823c$var$parseName(name);
        const parentNode = nodes[parentName];
        const boundingBox = $a82247cbc40359bf$export$4662b4e8868a3779(parentNode.boundingBox, index);
        const node = new $2c1acd357a20f870$export$fdc7d6e1ad096869(name, pco, boundingBox);
        node.level = level;
        node.numPoints = numPoints;
        node.spacing = pco.spacing / Math.pow(2, node.level);
        nodes[name] = node;
        parentNode.addChild(node);
    }
}
function $8d359fa38d1e823c$var$parseName(name) {
    return {
        index: $5de7f1de3e851041$export$dd1fe7c4c1e496ce(name),
        parentName: name.substring(0, name.length - 1),
        level: name.length - 1
    };
}









function $9278bbcc8bc95054$export$c8c4274f5293804f(node) {
    return node !== undefined && node !== null && node.isGeometryNode;
}
function $9278bbcc8bc95054$export$1c189858aa1437d7(node) {
    return node !== undefined && node !== null && node.isTreeNode;
}


function $4b58d93c13807bb3$export$57b2ff8762b0a409(scoreFunction) {
    this.content = [];
    this.scoreFunction = scoreFunction;
}
$4b58d93c13807bb3$export$57b2ff8762b0a409.prototype = {
    push: function(element) {
        // Add the new element to the end of the array.
        this.content.push(element);
        // Allow it to bubble up.
        this.bubbleUp(this.content.length - 1);
    },
    pop: function() {
        // Store the first element so we can return it later.
        var result = this.content[0];
        // Get the element at the end of the array.
        var end = this.content.pop();
        // If there are any elements left, put the end element at the
        // start, and let it sink down.
        if (this.content.length > 0) {
            this.content[0] = end;
            this.sinkDown(0);
        }
        return result;
    },
    remove: function(node) {
        var length = this.content.length;
        // To remove a value, we must search through the array to find
        // it.
        for(var i = 0; i < length; i++){
            if (this.content[i] != node) continue;
            // When it is found, the process seen in 'pop' is repeated
            // to fill up the hole.
            var end = this.content.pop();
            // If the element we popped was the one we needed to remove,
            // we're done.
            if (i == length - 1) break;
            // Otherwise, we replace the removed element with the popped
            // one, and allow it to float up or sink down as appropriate.
            this.content[i] = end;
            this.bubbleUp(i);
            this.sinkDown(i);
            break;
        }
    },
    size: function() {
        return this.content.length;
    },
    bubbleUp: function(n) {
        // Fetch the element that has to be moved.
        var element = this.content[n], score = this.scoreFunction(element);
        // When at 0, an element can not go up any further.
        while(n > 0){
            // Compute the parent element's index, and fetch it.
            var parentN = Math.floor((n + 1) / 2) - 1, parent = this.content[parentN];
            // If the parent has a lesser score, things are in order and we
            // are done.
            if (score >= this.scoreFunction(parent)) break;
            // Otherwise, swap the parent with the current element and
            // continue.
            this.content[parentN] = element;
            this.content[n] = parent;
            n = parentN;
        }
    },
    sinkDown: function(n) {
        // Look up the target element and its score.
        var length = this.content.length, element = this.content[n], elemScore = this.scoreFunction(element);
        while(true){
            // Compute the indices of the child elements.
            var child2N = (n + 1) * 2, child1N = child2N - 1;
            // This is used to store the new position of the element,
            // if any.
            var swap = null;
            // If the first child exists (is inside the array)...
            if (child1N < length) {
                // Look it up and compute its score.
                var child1 = this.content[child1N], child1Score = this.scoreFunction(child1);
                // If the score is less than our element's, we need to swap.
                if (child1Score < elemScore) swap = child1N;
            }
            // Do the same checks for the other child.
            if (child2N < length) {
                var child2 = this.content[child2N], child2Score = this.scoreFunction(child2);
                if (child2Score < (swap == null ? elemScore : child1Score)) swap = child2N;
            }
            // No need to swap further, we are done.
            if (swap == null) break;
            // Otherwise, swap and continue.
            this.content[n] = this.content[swap];
            this.content[swap] = element;
            n = swap;
        }
    }
};



class $1fef7fee52d5524c$export$ce39f4bb96c9a290 extends $hgUW1$LineSegments {
    constructor(box, color = new $hgUW1$Color(16776960)){
        // prettier-ignore
        const indices = new Uint16Array([
            0,
            1,
            1,
            2,
            2,
            3,
            3,
            0,
            4,
            5,
            5,
            6,
            6,
            7,
            7,
            4,
            0,
            4,
            1,
            5,
            2,
            6,
            3,
            7
        ]);
        // prettier-ignore
        const positions = new Float32Array([
            box.min.x,
            box.min.y,
            box.min.z,
            box.max.x,
            box.min.y,
            box.min.z,
            box.max.x,
            box.min.y,
            box.max.z,
            box.min.x,
            box.min.y,
            box.max.z,
            box.min.x,
            box.max.y,
            box.min.z,
            box.max.x,
            box.max.y,
            box.min.z,
            box.max.x,
            box.max.y,
            box.max.z,
            box.min.x,
            box.max.y,
            box.max.z
        ]);
        const geometry = new $hgUW1$BufferGeometry();
        geometry.setIndex(new $hgUW1$BufferAttribute(indices, 1));
        geometry.setAttribute('position', new $hgUW1$BufferAttribute(positions, 3));
        const material = new $hgUW1$LineBasicMaterial({
            color: color
        });
        super(geometry, material);
    }
}


class $f921b156d60bd705$export$39414325572c40c0 {
    constructor(node){
        this.node = node;
        this.next = null;
        this.previous = null;
    }
}
class $f921b156d60bd705$export$ca3ab3d175dec122 {
    constructor(pointBudget = 1000000){
        this.pointBudget = pointBudget;
        // the least recently used item
        this.first = null;
        // the most recently used item
        this.last = null;
        this.numPoints = 0;
        this.items = new Map();
    }
    get size() {
        return this.items.size;
    }
    has(node) {
        return this.items.has(node.id);
    }
    /**
     * Makes the specified the most recently used item. if the list does not contain node, it will
     * be added.
     */ touch(node) {
        if (!node.loaded) return;
        const item = this.items.get(node.id);
        if (item) this.touchExisting(item);
        else this.addNew(node);
    }
    addNew(node) {
        const item = new $f921b156d60bd705$export$39414325572c40c0(node);
        item.previous = this.last;
        this.last = item;
        if (item.previous) item.previous.next = item;
        if (!this.first) this.first = item;
        this.items.set(node.id, item);
        this.numPoints += node.numPoints;
    }
    touchExisting(item) {
        if (!item.previous) // handle touch on first element
        {
            if (item.next) {
                this.first = item.next;
                this.first.previous = null;
                item.previous = this.last;
                item.next = null;
                this.last = item;
                if (item.previous) item.previous.next = item;
            }
        } else if (!item.next) ;
        else {
            // handle touch on any other element
            item.previous.next = item.next;
            item.next.previous = item.previous;
            item.previous = this.last;
            item.next = null;
            this.last = item;
            if (item.previous) item.previous.next = item;
        }
    }
    remove(node) {
        const item = this.items.get(node.id);
        if (!item) return;
        if (this.items.size === 1) {
            this.first = null;
            this.last = null;
        } else {
            if (!item.previous) {
                this.first = item.next;
                this.first.previous = null;
            }
            if (!item.next) {
                this.last = item.previous;
                this.last.next = null;
            }
            if (item.previous && item.next) {
                item.previous.next = item.next;
                item.next.previous = item.previous;
            }
        }
        this.items.delete(node.id);
        this.numPoints -= node.numPoints;
    }
    getLRUItem() {
        return this.first ? this.first.node : undefined;
    }
    freeMemory() {
        if (this.items.size <= 1) return;
        while(this.numPoints > this.pointBudget * 2){
            const node = this.getLRUItem();
            if (node) this.disposeSubtree(node);
        }
    }
    disposeSubtree(node) {
        // Collect all the nodes which are to be disposed and removed.
        const nodesToDispose = [
            node
        ];
        node.traverse((n)=>{
            if (n.loaded) nodesToDispose.push(n);
        });
        // Dispose of all the nodes in one go.
        for (const n1 of nodesToDispose){
            n1.dispose();
            this.remove(n1);
        }
    }
}


var $f7a27d90ab1a4cd4$var$__awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class $f7a27d90ab1a4cd4$export$1b63de307530e1bc {
    constructor(pointCloudIndex, weight, node, parent){
        this.pointCloudIndex = pointCloudIndex;
        this.weight = weight;
        this.node = node;
        this.parent = parent;
    }
}
class $f7a27d90ab1a4cd4$export$a7e9de55738dd76b {
    constructor(){
        this._pointBudget = $495369f3383d41e2$export$c8c6b7c1efe52f9c;
        this._rendererSize = new $hgUW1$Vector2();
        this.maxNumNodesLoading = $495369f3383d41e2$export$1cee45d320f06d39;
        this.features = $b22aa1edc2b6463b$export$d6a5c11f04f75862;
        this.lru = new $f921b156d60bd705$export$ca3ab3d175dec122(this._pointBudget);
        this.updateVisibilityStructures = (()=>{
            const frustumMatrix = new $hgUW1$Matrix4();
            const inverseWorldMatrix = new $hgUW1$Matrix4();
            const cameraMatrix = new $hgUW1$Matrix4();
            return (pointClouds, camera)=>{
                const frustums = [];
                const cameraPositions = [];
                const priorityQueue = new $4b58d93c13807bb3$export$57b2ff8762b0a409((x)=>1 / x.weight
                );
                for(let i = 0; i < pointClouds.length; i++){
                    const pointCloud = pointClouds[i];
                    if (!pointCloud.initialized()) continue;
                    pointCloud.numVisiblePoints = 0;
                    pointCloud.visibleNodes = [];
                    pointCloud.visibleGeometry = [];
                    camera.updateMatrixWorld(false);
                    // Furstum in object space.
                    const inverseViewMatrix = camera.matrixWorldInverse;
                    const worldMatrix = pointCloud.matrixWorld;
                    frustumMatrix.identity().multiply(camera.projectionMatrix).multiply(inverseViewMatrix).multiply(worldMatrix);
                    frustums.push(new $hgUW1$Frustum().setFromProjectionMatrix(frustumMatrix));
                    // Camera position in object space
                    inverseWorldMatrix.copy(worldMatrix).invert();
                    cameraMatrix.identity().multiply(inverseWorldMatrix).multiply(camera.matrixWorld);
                    cameraPositions.push(new $hgUW1$Vector3().setFromMatrixPosition(cameraMatrix));
                    if (pointCloud.visible && pointCloud.root !== null) {
                        const weight = Number.MAX_VALUE;
                        priorityQueue.push(new $f7a27d90ab1a4cd4$export$1b63de307530e1bc(i, weight, pointCloud.root));
                    }
                    // Hide any previously visible nodes. We will later show only the needed ones.
                    if ($9278bbcc8bc95054$export$1c189858aa1437d7(pointCloud.root)) pointCloud.hideDescendants(pointCloud.root.sceneNode);
                    for (const boundingBoxNode of pointCloud.boundingBoxNodes)boundingBoxNode.visible = false;
                }
                return {
                    frustums: frustums,
                    cameraPositions: cameraPositions,
                    priorityQueue: priorityQueue
                };
            };
        })();
    }
    loadPointCloud(url, getUrl, xhrRequest = (input, init)=>fetch(input, init)
    ) {
        return $f7a27d90ab1a4cd4$var$__awaiter(this, void 0, void 0, function*() {
            if (url === "cloud.js") return yield $8d359fa38d1e823c$export$df11162d0a7f75f7(url, getUrl, xhrRequest).then((geometry)=>new $262d91a572d1a9aa$export$9ad96d5c091c935a(this, geometry)
            );
            else if (url === "metadata.json") // throw new Error("Not implemented")
            return yield $7a74e3e8ae4314e4$exports.loadOctree(url, getUrl, xhrRequest).then((geometry)=>new $262d91a572d1a9aa$export$9ad96d5c091c935a(this, geometry)
            );
            throw new Error("Unsupported file type");
        });
    }
    updatePointClouds(pointClouds, camera, renderer) {
        const result = this.updateVisibility(pointClouds, camera, renderer);
        for(let i = 0; i < pointClouds.length; i++){
            const pointCloud = pointClouds[i];
            if (pointCloud.disposed) continue;
            pointCloud.material.updateMaterial(pointCloud, pointCloud.visibleNodes, camera, renderer);
            pointCloud.updateVisibleBounds();
            pointCloud.updateBoundingBoxes();
        }
        this.lru.freeMemory();
        return result;
    }
    static pick(pointClouds, renderer, camera, ray, params = {
    }) {
        $f7a27d90ab1a4cd4$export$a7e9de55738dd76b.picker = $f7a27d90ab1a4cd4$export$a7e9de55738dd76b.picker || new $deb88b7421585e89$export$852cc38ee6d1f105();
        return $f7a27d90ab1a4cd4$export$a7e9de55738dd76b.picker.pick(renderer, camera, ray, pointClouds, params);
    }
    get pointBudget() {
        return this._pointBudget;
    }
    set pointBudget(value) {
        if (value !== this._pointBudget) {
            this._pointBudget = value;
            this.lru.pointBudget = value;
            this.lru.freeMemory();
        }
    }
    updateVisibility(pointClouds, camera, renderer) {
        let numVisiblePoints = 0;
        const visibleNodes = [];
        const unloadedGeometry = [];
        // calculate object space frustum and cam pos and setup priority queue
        const { frustums: frustums , cameraPositions: cameraPositions , priorityQueue: priorityQueue  } = this.updateVisibilityStructures(pointClouds, camera);
        let loadedToGPUThisFrame = 0;
        let exceededMaxLoadsToGPU = false;
        let nodeLoadFailed = false;
        let queueItem;
        while((queueItem = priorityQueue.pop()) !== undefined){
            let node = queueItem.node;
            // If we will end up with too many points, we stop right away.
            if (numVisiblePoints + node.numPoints > this.pointBudget) break;
            const pointCloudIndex = queueItem.pointCloudIndex;
            const pointCloud = pointClouds[pointCloudIndex];
            const maxLevel = pointCloud.maxLevel !== undefined ? pointCloud.maxLevel : Infinity;
            if (node.level > maxLevel || !frustums[pointCloudIndex].intersectsBox(node.boundingBox) || this.shouldClip(pointCloud, node.boundingBox)) continue;
            numVisiblePoints += node.numPoints;
            pointCloud.numVisiblePoints += node.numPoints;
            const parentNode = queueItem.parent;
            if ($9278bbcc8bc95054$export$c8c4274f5293804f(node) && (!parentNode || $9278bbcc8bc95054$export$1c189858aa1437d7(parentNode))) {
                if (node.loaded && loadedToGPUThisFrame < $495369f3383d41e2$export$ab0b8debcb3d8b4b) {
                    node = pointCloud.toTreeNode(node, parentNode);
                    loadedToGPUThisFrame++;
                } else if (!node.failed) {
                    if (node.loaded && loadedToGPUThisFrame >= $495369f3383d41e2$export$ab0b8debcb3d8b4b) exceededMaxLoadsToGPU = true;
                    unloadedGeometry.push(node);
                    pointCloud.visibleGeometry.push(node);
                } else {
                    nodeLoadFailed = true;
                    continue;
                }
            }
            if ($9278bbcc8bc95054$export$1c189858aa1437d7(node)) {
                this.updateTreeNodeVisibility(pointCloud, node, visibleNodes);
                pointCloud.visibleGeometry.push(node.geometryNode);
            }
            const halfHeight = 0.5 * renderer.getSize(this._rendererSize).height * renderer.getPixelRatio();
            this.updateChildVisibility(queueItem, priorityQueue, pointCloud, node, cameraPositions[pointCloudIndex], camera, halfHeight);
        } // end priority queue loop
        const numNodesToLoad = Math.min(this.maxNumNodesLoading, unloadedGeometry.length);
        const nodeLoadPromises = [];
        for(let i = 0; i < numNodesToLoad; i++)nodeLoadPromises.push(unloadedGeometry[i].load());
        return {
            visibleNodes: visibleNodes,
            numVisiblePoints: numVisiblePoints,
            exceededMaxLoadsToGPU: exceededMaxLoadsToGPU,
            nodeLoadFailed: nodeLoadFailed,
            nodeLoadPromises: nodeLoadPromises
        };
    }
    updateTreeNodeVisibility(pointCloud, node, visibleNodes) {
        this.lru.touch(node.geometryNode);
        const sceneNode = node.sceneNode;
        sceneNode.visible = true;
        sceneNode.material = pointCloud.material;
        sceneNode.updateMatrix();
        sceneNode.matrixWorld.multiplyMatrices(pointCloud.matrixWorld, sceneNode.matrix);
        visibleNodes.push(node);
        pointCloud.visibleNodes.push(node);
        this.updateBoundingBoxVisibility(pointCloud, node);
    }
    updateChildVisibility(queueItem, priorityQueue, pointCloud, node, cameraPosition, camera, halfHeight) {
        const children = node.children;
        for(let i = 0; i < children.length; i++){
            const child = children[i];
            if (child === null) continue;
            const sphere = child.boundingSphere;
            const distance = sphere.center.distanceTo(cameraPosition);
            const radius = sphere.radius;
            let projectionFactor = 0;
            if (camera.type === $495369f3383d41e2$export$8900560817e7f3be) {
                const perspective = camera;
                const fov = perspective.fov * Math.PI / 180;
                const slope = Math.tan(fov / 2);
                projectionFactor = halfHeight / (slope * distance);
            } else {
                const orthographic = camera;
                projectionFactor = 2 * halfHeight / (orthographic.top - orthographic.bottom);
            }
            const screenPixelRadius = radius * projectionFactor;
            // Don't add the node if it'll be too small on the screen.
            if (screenPixelRadius < pointCloud.minNodePixelSize) continue;
            // Nodes which are larger will have priority in loading/displaying.
            const weight = distance < radius ? Number.MAX_VALUE : screenPixelRadius + 1 / distance;
            priorityQueue.push(new $f7a27d90ab1a4cd4$export$1b63de307530e1bc(queueItem.pointCloudIndex, weight, child, node));
        }
    }
    updateBoundingBoxVisibility(pointCloud, node) {
        if (pointCloud.showBoundingBox && !node.boundingBoxNode) {
            const boxHelper = new $1fef7fee52d5524c$export$ce39f4bb96c9a290(node.boundingBox);
            boxHelper.matrixAutoUpdate = false;
            pointCloud.boundingBoxNodes.push(boxHelper);
            node.boundingBoxNode = boxHelper;
            node.boundingBoxNode.matrix.copy(pointCloud.matrixWorld);
        } else if (pointCloud.showBoundingBox && node.boundingBoxNode) {
            node.boundingBoxNode.visible = true;
            node.boundingBoxNode.matrix.copy(pointCloud.matrixWorld);
        } else if (!pointCloud.showBoundingBox && node.boundingBoxNode) node.boundingBoxNode.visible = false;
    }
    shouldClip(pointCloud, boundingBox) {
        const material = pointCloud.material;
        if (material.numClipBoxes === 0 || material.clipMode !== $7b3263892bf52898$export$e04e7431702ec10a.CLIP_OUTSIDE) return false;
        const box2 = boundingBox.clone();
        pointCloud.updateMatrixWorld(true);
        box2.applyMatrix4(pointCloud.matrixWorld);
        const clipBoxes = material.clipBoxes;
        for(let i = 0; i < clipBoxes.length; i++){
            const clipMatrixWorld = clipBoxes[i].matrix;
            const clipBoxWorld = new $hgUW1$Box3(new $hgUW1$Vector3(-0.5, -0.5, -0.5), new $hgUW1$Vector3(0.5, 0.5, 0.5)).applyMatrix4(clipMatrixWorld);
            if (box2.intersectsBox(clipBoxWorld)) return false;
        }
        return true;
    }
}


var $633d133e959bcfd9$exports = {};





export {$886301ae952e8f57$export$ec8ead0ea9fedf30 as BlurMaterial, $7b3263892bf52898$export$e04e7431702ec10a as ClipMode, $5e4fff88bfda53ee$export$d1cbf822ea081fee as PointSizeType, $5e4fff88bfda53ee$export$5ffaab227f4e4906 as PointShape, $5e4fff88bfda53ee$export$eaf124a76310c668 as TreeType, $5e4fff88bfda53ee$export$b3da46a9b4c877b5 as PointOpacityType, $5e4fff88bfda53ee$export$e95c0b95a8f50828 as PointColorType, $104fbfc219aa06c4$export$29121d9ccd2f757a as PointCloudMaterial, $104fbfc219aa06c4$exports as default, $3fa0b589b7342ac5$export$1e96beb2edc20271 as generateDataTexture, $3fa0b589b7342ac5$export$fdceb370ef27f1c7 as generateGradientTexture, $3fa0b589b7342ac5$export$20a331fc7ad618b2 as generateClassificationTexture, $e9094b64304453a9$export$795f08762ba1b68c as GRAYSCALE, $de7fe8deb64de9a4$export$26ffe1805c7bf718 as INFERNO, $b45e8c3ed76e3d5b$export$6c89e34c5e9ab660 as PLASMA, $4982ed7e4b958d27$export$fc43e6ea480ea76f as RAINBOW, $855161ee86562854$export$8beb2468e5d7f653 as SPECTRAL, $874a1d158524c990$export$d793f114aad17738 as VIRIDIS, $2dd88a2a4c2e9932$export$c97e84e6a442ddd4 as YELLOW_GREEN, $6917a634b1124b58$export$718faa7d6d01aabc as PointAttributeName, $6917a634b1124b58$export$f447a8ca794d62f1 as POINT_ATTRIBUTE_TYPES, $6917a634b1124b58$export$c9c943992b7ca9cc as POINT_ATTRIBUTES, $6917a634b1124b58$export$33a55c29cc28473e as PointAttributes, $2c1acd357a20f870$export$fdc7d6e1ad096869 as PointCloudOctreeGeometryNode, $57aef60af449f0bf$export$bbcd90498494c738 as PointCloudOctreeGeometry, $5b22ec763ed6bfa5$export$ac5505afea26905b as PointCloudOctreeNode, $deb88b7421585e89$export$852cc38ee6d1f105 as PointCloudOctreePicker, $262d91a572d1a9aa$export$9ad96d5c091c935a as PointCloudOctree, $c5e6e5ed2f67ba3c$export$9dd4354534a21f56 as PointCloudTree, $f7a27d90ab1a4cd4$export$1b63de307530e1bc as QueueItem, $f7a27d90ab1a4cd4$export$a7e9de55738dd76b as Potree, $f7a27d90ab1a4cd4$exports as default, $b106f1b8d97b363d$export$682c179f50ab847d as Version};
//# sourceMappingURL=module.js.map