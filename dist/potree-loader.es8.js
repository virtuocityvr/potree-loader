import { Vector3 as M, RawShaderMaterial as G, Texture as x, Color as v, NearestFilter as I, NoBlending as U, LessEqualDepth as N, AdditiveBlending as O, WebGLRenderTarget as z } from "./potree-loader.es6.js";
import F from "./potree-loader.es40.js";
import H from "./potree-loader.es41.js";
import { DEFAULT_HIGHLIGHT_COLOR as V, DEFAULT_RGB_GAMMA as R, DEFAULT_RGB_BRIGHTNESS as D, DEFAULT_RGB_CONTRAST as A, PERSPECTIVE_CAMERA as j, DEFAULT_MAX_POINT_SIZE as W, DEFAULT_MIN_POINT_SIZE as X } from "./potree-loader.es7.js";
import { byLevelAndIndex as q } from "./potree-loader.es39.js";
import { DEFAULT_CLASSIFICATION as P } from "./potree-loader.es42.js";
import { ClipMode as T } from "./potree-loader.es25.js";
import { TreeType as S, PointSizeType as y, PointOpacityType as C, PointShape as E, PointColorType as p } from "./potree-loader.es31.js";
import "./potree-loader.es9.js";
import "./potree-loader.es10.js";
import "./potree-loader.es11.js";
import "./potree-loader.es12.js";
import { SPECTRAL as Y } from "./potree-loader.es13.js";
import "./potree-loader.es14.js";
import "./potree-loader.es15.js";
import { generateGradientTexture as B, generateClassificationTexture as L, generateDataTexture as k } from "./potree-loader.es43.js";
import { ColorEncoding as g } from "./potree-loader.es44.js";
var Z = Object.defineProperty, $ = Object.getOwnPropertyDescriptor, n = (t, i, e, r) => {
  for (var a = r > 1 ? void 0 : r ? $(i, e) : i, l = t.length - 1, d; l >= 0; l--)
    (d = t[l]) && (a = (r ? d(i, e, a) : d(a)) || a);
  return r && a && Z(i, e, a), a;
};
const Q = {
  [S.OCTREE]: "tree_type_octree",
  [S.KDTREE]: "tree_type_kdtree"
}, J = {
  [y.FIXED]: "fixed_point_size",
  [y.ATTENUATED]: "attenuated_point_size",
  [y.ADAPTIVE]: "adaptive_point_size"
}, K = {
  [C.ATTENUATED]: "attenuated_opacity",
  [C.FIXED]: "fixed_opacity"
}, tt = {
  [E.SQUARE]: "square_point_shape",
  [E.CIRCLE]: "circle_point_shape",
  [E.PARABOLOID]: "paraboloid_point_shape"
}, et = {
  [p.RGB]: "color_type_rgb",
  [p.COLOR]: "color_type_color",
  [p.DEPTH]: "color_type_depth",
  [p.HEIGHT]: "color_type_height",
  [p.INTENSITY]: "color_type_intensity",
  [p.INTENSITY_GRADIENT]: "color_type_intensity_gradient",
  [p.LOD]: "color_type_lod",
  [p.POINT_INDEX]: "color_type_point_index",
  [p.CLASSIFICATION]: "color_type_classification",
  [p.RETURN_NUMBER]: "color_type_return_number",
  [p.SOURCE]: "color_type_source",
  [p.NORMAL]: "color_type_normal",
  [p.PHONG]: "color_type_phong",
  [p.RGB_HEIGHT]: "color_type_rgb_height",
  [p.COMPOSITE]: "color_type_composite"
}, it = {
  [T.DISABLED]: "clip_disabled",
  [T.CLIP_OUTSIDE]: "clip_outside",
  [T.HIGHLIGHT_INSIDE]: "clip_highlight_inside"
}, ot = {
  [g.LINEAR]: "input_color_encoding_linear",
  [g.SRGB]: "input_color_encoding_sRGB"
}, st = {
  [g.LINEAR]: "output_color_encoding_linear",
  [g.SRGB]: "output_color_encoding_sRGB"
}, w = class extends G {
  constructor(t = {}) {
    super(), this.lights = !1, this.fog = !1, this.numClipBoxes = 0, this.clipBoxes = [], this.visibleNodeTextureOffsets = /* @__PURE__ */ new Map(), this._gradient = Y, this.gradientTexture = B(this._gradient), this._classification = P, this.classificationTexture = L(
      this._classification
    ), this.uniforms = {
      bbSize: s("fv", [0, 0, 0]),
      blendDepthSupplement: s("f", 0),
      blendHardness: s("f", 2),
      classificationLUT: s("t", this.classificationTexture || new x()),
      clipBoxCount: s("f", 0),
      clipBoxes: s("Matrix4fv", []),
      depthMap: s("t", null),
      diffuse: s("fv", [1, 1, 1]),
      fov: s("f", 1),
      gradient: s("t", this.gradientTexture || new x()),
      heightMax: s("f", 1),
      heightMin: s("f", 0),
      intensityBrightness: s("f", 0),
      intensityContrast: s("f", 0),
      intensityGamma: s("f", 1),
      intensityRange: s("fv", [0, 65e3]),
      isLeafNode: s("b", 0),
      level: s("f", 0),
      maxSize: s("f", W),
      minSize: s("f", X),
      octreeSize: s("f", 0),
      opacity: s("f", 1),
      pcIndex: s("f", 0),
      rgbBrightness: s("f", D),
      rgbContrast: s("f", A),
      rgbGamma: s("f", R),
      screenHeight: s("f", 1),
      screenWidth: s("f", 1),
      size: s("f", 1),
      spacing: s("f", 1),
      toModel: s("Matrix4f", []),
      transition: s("f", 0.5),
      uColor: s("c", new v(16777215)),
      // @ts-ignore
      visibleNodes: s("t", this.visibleNodesTexture || new x()),
      vnStart: s("f", 0),
      wClassification: s("f", 0),
      wElevation: s("f", 0),
      wIntensity: s("f", 0),
      wReturnNumber: s("f", 0),
      wRGB: s("f", 1),
      wSourceID: s("f", 0),
      opacityAttenuation: s("f", 1),
      filterByNormalThreshold: s("f", 0),
      highlightedPointCoordinate: s("fv", new M()),
      highlightedPointColor: s("fv", V.clone()),
      enablePointHighlighting: s("b", !0),
      highlightedPointScale: s("f", 2)
    }, this.useClipBox = !1, this.weighted = !1, this.pointColorType = p.RGB, this.pointSizeType = y.ADAPTIVE, this.clipMode = T.DISABLED, this.useEDL = !1, this.shape = E.SQUARE, this.treeType = S.OCTREE, this.pointOpacityType = C.FIXED, this.useFilterByNormal = !1, this.highlightPoint = !1, this.inputColorEncoding = g.SRGB, this.outputColorEncoding = g.LINEAR, this.attributes = {
      position: { type: "fv", value: [] },
      color: { type: "fv", value: [] },
      normal: { type: "fv", value: [] },
      intensity: { type: "f", value: [] },
      classification: { type: "f", value: [] },
      returnNumber: { type: "f", value: [] },
      numberOfReturns: { type: "f", value: [] },
      pointSourceID: { type: "f", value: [] },
      indices: { type: "fv", value: [] }
    };
    const i = this.visibleNodesTexture = k(2048, 1, new v(16777215));
    i.minFilter = I, i.magFilter = I, this.setUniform("visibleNodes", i), this.treeType = m(t.treeType, S.OCTREE), this.size = m(t.size, 1), this.minSize = m(t.minSize, 2), this.maxSize = m(t.maxSize, 50), this.newFormat = !!t.newFormat, this.classification = P, this.defaultAttributeValues.normal = [0, 0, 0], this.defaultAttributeValues.classification = [0, 0, 0], this.defaultAttributeValues.indices = [0, 0, 0, 0], this.vertexColors = !0, this.updateShaderSource();
  }
  dispose() {
    super.dispose(), this.gradientTexture && (this.gradientTexture.dispose(), this.gradientTexture = void 0), this.visibleNodesTexture && (this.visibleNodesTexture.dispose(), this.visibleNodesTexture = void 0), this.clearVisibleNodeTextureOffsets(), this.classificationTexture && (this.classificationTexture.dispose(), this.classificationTexture = void 0), this.depthMap && (this.depthMap.dispose(), this.depthMap = void 0);
  }
  clearVisibleNodeTextureOffsets() {
    this.visibleNodeTextureOffsets.clear();
  }
  updateShaderSource() {
    this.vertexShader = this.applyDefines(F), this.fragmentShader = this.applyDefines(H), this.opacity === 1 ? (this.blending = U, this.transparent = !1, this.depthTest = !0, this.depthWrite = !0, this.depthFunc = N) : this.opacity < 1 && !this.useEDL && (this.blending = O, this.transparent = !0, this.depthTest = !1, this.depthWrite = !0), this.weighted && (this.blending = O, this.transparent = !0, this.depthTest = !0, this.depthWrite = !1, this.depthFunc = N), this.needsUpdate = !0;
  }
  applyDefines(t) {
    const i = [];
    function e(a) {
      a && i.push(`#define ${a}`);
    }
    e(Q[this.treeType]), e(J[this.pointSizeType]), e(tt[this.shape]), e(et[this.pointColorType]), e(it[this.clipMode]), e(K[this.pointOpacityType]), e(st[this.outputColorEncoding]), e(ot[this.inputColorEncoding]), (this.rgbGamma !== R || this.rgbBrightness !== D || this.rgbContrast !== A) && e("use_rgb_gamma_contrast_brightness"), this.useFilterByNormal && e("use_filter_by_normal"), this.useEDL && e("use_edl"), this.weighted && e("weighted_splats"), this.numClipBoxes > 0 && e("use_clip_box"), this.highlightPoint && e("highlight_point"), e("MAX_POINT_LIGHTS 0"), e("MAX_DIR_LIGHTS 0"), this.newFormat && e("new_format");
    const r = t.match(/^\s*#version\s+300\s+es\s*\n/);
    return r && (i.unshift(r[0]), t = t.replace(r[0], "")), i.push(t), i.join(`
`);
  }
  setClipBoxes(t) {
    if (!t)
      return;
    this.clipBoxes = t;
    const i = this.numClipBoxes !== t.length && (t.length === 0 || this.numClipBoxes === 0);
    this.numClipBoxes = t.length, this.setUniform("clipBoxCount", this.numClipBoxes), i && this.updateShaderSource();
    const e = this.numClipBoxes * 16, r = new Float32Array(e);
    for (let a = 0; a < this.numClipBoxes; a++)
      r.set(t[a].inverse.elements, 16 * a);
    for (let a = 0; a < e; a++)
      isNaN(r[a]) && (r[a] = 1 / 0);
    this.setUniform("clipBoxes", r);
  }
  get gradient() {
    return this._gradient;
  }
  set gradient(t) {
    this._gradient !== t && (this._gradient = t, this.gradientTexture = B(this._gradient), this.setUniform("gradient", this.gradientTexture));
  }
  get classification() {
    return this._classification;
  }
  set classification(t) {
    const i = {};
    for (const r of Object.keys(t))
      i[r] = t[r].clone();
    let e = !1;
    if (this._classification === void 0)
      e = !1;
    else {
      e = Object.keys(i).length === Object.keys(this._classification).length;
      for (const r of Object.keys(i))
        e = e && this._classification[r] !== void 0, e = e && i[r].equals(this._classification[r]);
    }
    e || (this._classification = i, this.recomputeClassification());
  }
  recomputeClassification() {
    this.classificationTexture = L(this._classification), this.setUniform("classificationLUT", this.classificationTexture);
  }
  get elevationRange() {
    return [this.heightMin, this.heightMax];
  }
  set elevationRange(t) {
    this.heightMin = t[0], this.heightMax = t[1];
  }
  getUniform(t) {
    return this.uniforms === void 0 ? void 0 : this.uniforms[t].value;
  }
  setUniform(t, i) {
    if (this.uniforms === void 0)
      return;
    const e = this.uniforms[t];
    e.type === "c" ? e.value.copy(i) : i !== e.value && (e.value = i);
  }
  updateMaterial(t, i, e, r) {
    const a = r.getPixelRatio();
    e.type === j ? this.fov = e.fov * (Math.PI / 180) : this.fov = Math.PI / 2;
    const l = r.getRenderTarget();
    l !== null && l instanceof z ? (this.screenWidth = l.width, this.screenHeight = l.height) : (this.screenWidth = r.domElement.clientWidth * a, this.screenHeight = r.domElement.clientHeight * a);
    const d = Math.max(t.scale.x, t.scale.y, t.scale.z);
    this.spacing = t.pcoGeometry.spacing * d, this.octreeSize = t.pcoGeometry.boundingBox.getSize(w.helperVec3).x, (this.pointSizeType === y.ADAPTIVE || this.pointColorType === p.LOD) && this.updateVisibilityTextureData(i);
  }
  updateVisibilityTextureData(t) {
    t.sort(q);
    const i = new Uint8Array(t.length * 4), e = new Array(t.length).fill(1 / 0);
    this.visibleNodeTextureOffsets.clear();
    for (let a = 0; a < t.length; a++) {
      const l = t[a];
      if (this.visibleNodeTextureOffsets.set(l.name, a), a > 0) {
        const d = l.name.slice(0, -1), c = this.visibleNodeTextureOffsets.get(d), _ = a - c;
        e[c] = Math.min(e[c], _);
        const u = c * 4;
        i[u] = i[u] | 1 << l.index, i[u + 1] = e[c] >> 8, i[u + 2] = e[c] % 256;
      }
      i[a * 4 + 3] = l.name.length;
    }
    const r = this.visibleNodesTexture;
    r && (r.image.data.set(i), r.needsUpdate = !0);
  }
  static makeOnBeforeRender(t, i, e) {
    return (r, a, l, d, c) => {
      const _ = c, u = _.uniforms;
      u.level.value = i.level, u.isLeafNode.value = i.isLeafNode;
      const b = _.visibleNodeTextureOffsets.get(i.name);
      b !== void 0 && (u.vnStart.value = b), u.pcIndex.value = e !== void 0 ? e : t.visibleNodes.indexOf(i), c.uniformsNeedUpdate = !0;
    };
  }
};
let o = w;
o.helperVec3 = new M();
n([
  h("bbSize")
], o.prototype, "bbSize", 2);
n([
  h("depthMap")
], o.prototype, "depthMap", 2);
n([
  h("fov")
], o.prototype, "fov", 2);
n([
  h("heightMax")
], o.prototype, "heightMax", 2);
n([
  h("heightMin")
], o.prototype, "heightMin", 2);
n([
  h("intensityBrightness")
], o.prototype, "intensityBrightness", 2);
n([
  h("intensityContrast")
], o.prototype, "intensityContrast", 2);
n([
  h("intensityGamma")
], o.prototype, "intensityGamma", 2);
n([
  h("intensityRange")
], o.prototype, "intensityRange", 2);
n([
  h("maxSize")
], o.prototype, "maxSize", 2);
n([
  h("minSize")
], o.prototype, "minSize", 2);
n([
  h("octreeSize")
], o.prototype, "octreeSize", 2);
n([
  h("opacity", !0)
], o.prototype, "opacity", 2);
n([
  h("rgbBrightness", !0)
], o.prototype, "rgbBrightness", 2);
n([
  h("rgbContrast", !0)
], o.prototype, "rgbContrast", 2);
n([
  h("rgbGamma", !0)
], o.prototype, "rgbGamma", 2);
n([
  h("screenHeight")
], o.prototype, "screenHeight", 2);
n([
  h("screenWidth")
], o.prototype, "screenWidth", 2);
n([
  h("size")
], o.prototype, "size", 2);
n([
  h("spacing")
], o.prototype, "spacing", 2);
n([
  h("transition")
], o.prototype, "transition", 2);
n([
  h("uColor")
], o.prototype, "color", 2);
n([
  h("wClassification")
], o.prototype, "weightClassification", 2);
n([
  h("wElevation")
], o.prototype, "weightElevation", 2);
n([
  h("wIntensity")
], o.prototype, "weightIntensity", 2);
n([
  h("wReturnNumber")
], o.prototype, "weightReturnNumber", 2);
n([
  h("wRGB")
], o.prototype, "weightRGB", 2);
n([
  h("wSourceID")
], o.prototype, "weightSourceID", 2);
n([
  h("opacityAttenuation")
], o.prototype, "opacityAttenuation", 2);
n([
  h("filterByNormalThreshold")
], o.prototype, "filterByNormalThreshold", 2);
n([
  h("highlightedPointCoordinate")
], o.prototype, "highlightedPointCoordinate", 2);
n([
  h("highlightedPointColor")
], o.prototype, "highlightedPointColor", 2);
n([
  h("enablePointHighlighting")
], o.prototype, "enablePointHighlighting", 2);
n([
  h("highlightedPointScale")
], o.prototype, "highlightedPointScale", 2);
n([
  f()
], o.prototype, "useClipBox", 2);
n([
  f()
], o.prototype, "weighted", 2);
n([
  f()
], o.prototype, "pointColorType", 2);
n([
  f()
], o.prototype, "pointSizeType", 2);
n([
  f()
], o.prototype, "clipMode", 2);
n([
  f()
], o.prototype, "useEDL", 2);
n([
  f()
], o.prototype, "shape", 2);
n([
  f()
], o.prototype, "treeType", 2);
n([
  f()
], o.prototype, "pointOpacityType", 2);
n([
  f()
], o.prototype, "useFilterByNormal", 2);
n([
  f()
], o.prototype, "highlightPoint", 2);
n([
  f()
], o.prototype, "inputColorEncoding", 2);
n([
  f()
], o.prototype, "outputColorEncoding", 2);
function s(t, i) {
  return { type: t, value: i };
}
function m(t, i) {
  return t === void 0 ? i : t;
}
function h(t, i = !1) {
  return (e, r) => {
    Object.defineProperty(e, r, {
      get() {
        return this.getUniform(t);
      },
      set(a) {
        a !== this.getUniform(t) && (this.setUniform(t, a), i && this.updateShaderSource());
      }
    });
  };
}
function f() {
  return (t, i) => {
    const e = `_${i.toString()}`;
    Object.defineProperty(t, i, {
      get() {
        return this[e];
      },
      set(r) {
        r !== this[e] && (this[e] = r, this.updateShaderSource());
      }
    });
  };
}
export {
  o as PointCloudMaterial
};
//# sourceMappingURL=potree-loader.es8.js.map
