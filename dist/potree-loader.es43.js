import { DataTexture as l, RGBAFormat as u, NearestFilter as h, CanvasTexture as x, LinearFilter as g } from "./potree-loader.es6.js";
function w(r, d, o) {
  const s = r * d, e = new Uint8Array(4 * s), i = Math.floor(o.r * 255), t = Math.floor(o.g * 255), a = Math.floor(o.b * 255);
  for (let n = 0; n < s; n++)
    e[n * 3] = i, e[n * 3 + 1] = t, e[n * 3 + 2] = a;
  const c = new l(e, r, d, u);
  return c.needsUpdate = !0, c.magFilter = h, c;
}
function z(r) {
  const o = document.createElement("canvas");
  o.width = 64, o.height = 64;
  const s = o.getContext("2d");
  s.rect(0, 0, 64, 64);
  const e = s.createLinearGradient(0, 0, 64, 64);
  for (let t = 0; t < r.length; t++) {
    const a = r[t];
    e.addColorStop(a[0], `#${a[1].getHexString()}`);
  }
  s.fillStyle = e, s.fill();
  const i = new x(o);
  return i.needsUpdate = !0, i.minFilter = g, i;
}
function m(r) {
  const e = new Uint8Array(262144);
  for (let t = 0; t < 256; t++)
    for (let a = 0; a < 256; a++) {
      const c = t + 256 * a;
      let n;
      r[t] ? n = r[t] : r[t % 32] ? n = r[t % 32] : n = r.DEFAULT, e[4 * c + 0] = 255 * n.x, e[4 * c + 1] = 255 * n.y, e[4 * c + 2] = 255 * n.z, e[4 * c + 3] = 255 * n.w;
    }
  const i = new l(e, 256, 256, u);
  return i.magFilter = h, i.needsUpdate = !0, i;
}
export {
  m as generateClassificationTexture,
  w as generateDataTexture,
  z as generateGradientTexture
};
//# sourceMappingURL=potree-loader.es43.js.map
