import { Box3 as p, Vector3 as e } from "./potree-loader.es6.js";
function l(i, n) {
  return new p().setFromPoints([
    new e(i.min.x, i.min.y, i.min.z).applyMatrix4(n),
    new e(i.min.x, i.min.y, i.min.z).applyMatrix4(n),
    new e(i.max.x, i.min.y, i.min.z).applyMatrix4(n),
    new e(i.min.x, i.max.y, i.min.z).applyMatrix4(n),
    new e(i.min.x, i.min.y, i.max.z).applyMatrix4(n),
    new e(i.min.x, i.max.y, i.max.z).applyMatrix4(n),
    new e(i.max.x, i.max.y, i.min.z).applyMatrix4(n),
    new e(i.max.x, i.min.y, i.max.z).applyMatrix4(n),
    new e(i.max.x, i.max.y, i.max.z).applyMatrix4(n)
  ]);
}
function z(i, n) {
  const a = i.min.clone(), y = i.max.clone(), m = new e().subVectors(y, a);
  return (n & 1) > 0 ? a.z += m.z / 2 : y.z -= m.z / 2, (n & 2) > 0 ? a.y += m.y / 2 : y.y -= m.y / 2, (n & 4) > 0 ? a.x += m.x / 2 : y.x -= m.x / 2, new p(a, y);
}
export {
  l as computeTransformedBoundingBox,
  z as createChildAABB
};
//# sourceMappingURL=potree-loader.es19.js.map
