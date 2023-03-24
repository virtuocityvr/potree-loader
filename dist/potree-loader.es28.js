import { LineSegments as s, BufferGeometry as y, BufferAttribute as m, LineBasicMaterial as c, Color as z } from "./potree-loader.es6.js";
class p extends s {
  constructor(n, i = new z(16776960)) {
    const t = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]), a = new Float32Array([
      n.min.x,
      n.min.y,
      n.min.z,
      n.max.x,
      n.min.y,
      n.min.z,
      n.max.x,
      n.min.y,
      n.max.z,
      n.min.x,
      n.min.y,
      n.max.z,
      n.min.x,
      n.max.y,
      n.min.z,
      n.max.x,
      n.max.y,
      n.min.z,
      n.max.x,
      n.max.y,
      n.max.z,
      n.min.x,
      n.max.y,
      n.max.z
    ]), e = new y();
    e.setIndex(new m(t, 1)), e.setAttribute("position", new m(a, 3));
    const r = new c({ color: i });
    super(e, r);
  }
}
export {
  p as Box3Helper
};
//# sourceMappingURL=potree-loader.es28.js.map
