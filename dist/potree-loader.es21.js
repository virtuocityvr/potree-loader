const E = document.createElement("canvas"), e = E.getContext("webgl"), _ = {
  SHADER_INTERPOLATION: n("EXT_frag_depth") && o(8),
  SHADER_SPLATS: n("EXT_frag_depth") && n("OES_texture_float") && o(8),
  SHADER_EDL: n("OES_texture_float") && o(8),
  precision: l()
};
function n(t) {
  return e !== null && !!e.getExtension(t);
}
function o(t) {
  return e !== null && e.getParameter(e.MAX_VARYING_VECTORS) >= t;
}
function l() {
  if (e === null)
    return "";
  const t = e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT), i = e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT), r = e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT), a = e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT), s = t && r && t.precision > 0 && r.precision > 0, c = i && a && i.precision > 0 && a.precision > 0;
  return s ? "highp" : c ? "mediump" : "lowp";
}
export {
  _ as FEATURES
};
//# sourceMappingURL=potree-loader.es21.js.map
