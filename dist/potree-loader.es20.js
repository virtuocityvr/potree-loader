import { OctreeLoader as c } from "./potree-loader.es30.js";
async function i(t, e, o) {
  const r = await e(t), a = new c(), { geometry: n } = await a.load(r, o);
  return n;
}
export {
  i as loadOctree
};
//# sourceMappingURL=potree-loader.es20.js.map
