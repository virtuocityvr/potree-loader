import { Vector3 as p, Box3 as h } from "./potree-loader.es6.js";
import { PointAttributes as B } from "./potree-loader.es22.js";
import { PointCloudOctreeGeometry as f } from "./potree-loader.es37.js";
import { PointCloudOctreeGeometryNode as x } from "./potree-loader.es38.js";
import { createChildAABB as b } from "./potree-loader.es19.js";
import { getIndexFromName as d } from "./potree-loader.es39.js";
import { Version as y } from "./potree-loader.es4.js";
import { BinaryLoader as w } from "./potree-loader.es36.js";
function V(n, r, s) {
  return Promise.resolve(r(n)).then((o) => s(o, { mode: "cors" }).then((e) => e.json()).then(v(o, r, s)));
}
function v(n, r, s) {
  return (o) => {
    const { offset: e, boundingBox: i, tightBoundingBox: l } = P(o), g = new w({
      getUrl: r,
      version: o.version,
      boundingBox: i,
      scale: o.scale,
      xhrRequest: s
    }), t = new f(
      g,
      i,
      l,
      e,
      s
    );
    t.url = n, t.octreeDir = o.octreeDir, t.needsUpdate = !0, t.spacing = o.spacing, t.hierarchyStepSize = o.hierarchyStepSize, t.projection = o.projection, t.offset = e, t.pointAttributes = new B(o.pointAttributes), console.log(t.pointAttributes);
    const u = {}, m = new y(o.version);
    return z(t, o, u, m).then(() => (m.upTo("1.4") && A(t, o, u), t.nodes = u, t));
  };
}
function P(n) {
  const r = new p(n.boundingBox.lx, n.boundingBox.ly, n.boundingBox.lz), s = new p(n.boundingBox.ux, n.boundingBox.uy, n.boundingBox.uz), o = new h(r, s), e = o.clone(), i = r.clone();
  if (n.tightBoundingBox) {
    const { lx: l, ly: g, lz: t, ux: u, uy: m, uz: c } = n.tightBoundingBox;
    e.min.set(l, g, t), e.max.set(u, m, c);
  }
  return o.min.sub(i), o.max.sub(i), e.min.sub(i), e.max.sub(i), { offset: i, boundingBox: o, tightBoundingBox: e };
}
function z(n, r, s, o) {
  const e = "r", i = new x(e, n, n.boundingBox);
  return i.hasChildren = !0, i.spacing = n.spacing, o.upTo("1.5") ? i.numPoints = r.hierarchy[0][1] : i.numPoints = 0, n.root = i, s[e] = i, n.root.load();
}
function A(n, r, s) {
  for (let o = 1; o < r.hierarchy.length; o++) {
    const [e, i] = r.hierarchy[o], { index: l, parentName: g, level: t } = C(e), u = s[g], m = b(u.boundingBox, l), c = new x(e, n, m);
    c.level = t, c.numPoints = i, c.spacing = n.spacing / Math.pow(2, c.level), s[e] = c, u.addChild(c);
  }
}
function C(n) {
  return {
    index: d(n),
    parentName: n.substring(0, n.length - 1),
    level: n.length - 1
  };
}
export {
  V as loadPOC
};
//# sourceMappingURL=potree-loader.es24.js.map
