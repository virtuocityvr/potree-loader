import { EventDispatcher as g, Vector3 as y, Sphere as f } from "./potree-loader.es6.js";
import { createChildAABB as G } from "./potree-loader.es19.js";
import { getIndexFromName as p } from "./potree-loader.es39.js";
const m = 5, c = class extends g {
  constructor(e, s, t) {
    super(), this.id = c.idCount++, this.level = 0, this.spacing = 0, this.hasChildren = !1, this.children = [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null
    ], this.mean = new y(), this.numPoints = 0, this.loaded = !1, this.loading = !1, this.failed = !1, this.parent = null, this.oneTimeDisposeHandlers = [], this.isLeafNode = !0, this.isTreeNode = !1, this.isGeometryNode = !0, this.name = e, this.index = p(e), this.pcoGeometry = s, this.boundingBox = t, this.tightBoundingBox = t.clone(), this.boundingSphere = t.getBoundingSphere(new f());
  }
  dispose() {
    !this.geometry || !this.parent || (this.geometry.dispose(), this.geometry = void 0, this.loaded = !1, this.oneTimeDisposeHandlers.forEach((e) => e()), this.oneTimeDisposeHandlers = []);
  }
  /**
   * Gets the url of the binary file for this node.
   */
  getUrl() {
    const e = this.pcoGeometry, s = e.loader.version, t = [e.octreeDir];
    return e.loader && s.equalOrHigher("1.5") ? (t.push(this.getHierarchyBaseUrl()), t.push(this.name)) : s.equalOrHigher("1.4") ? t.push(this.name) : s.upTo("1.3") && t.push(this.name), t.join("/");
  }
  /**
   * Gets the url of the hierarchy file for this node.
   */
  getHierarchyUrl() {
    return `${this.pcoGeometry.octreeDir}/${this.getHierarchyBaseUrl()}/${this.name}.hrc`;
  }
  /**
   * Adds the specified node as a child of the current node.
   *
   * @param child
   *    The node which is to be added as a child.
   */
  addChild(e) {
    this.children[e.index] = e, this.isLeafNode = !1, e.parent = this;
  }
  /**
   * Calls the specified callback for the current node (if includeSelf is set to true) and all its
   * children.
   *
   * @param cb
   *    The function which is to be called for each node.
   */
  traverse(e, s = !0) {
    const t = s ? [this] : [];
    let o;
    for (; (o = t.pop()) !== void 0; ) {
      e(o);
      for (const i of o.children)
        i !== null && t.push(i);
    }
  }
  load() {
    if (!this.canLoad())
      return Promise.resolve();
    this.loading = !0, this.pcoGeometry.numNodesLoading++, this.pcoGeometry.needsUpdate = !0;
    let e;
    return this.pcoGeometry.loader.version.equalOrHigher("1.5") && this.level % this.pcoGeometry.hierarchyStepSize === 0 && this.hasChildren ? e = this.loadHierachyThenPoints() : e = this.loadPoints(), e.catch((s) => {
      throw this.loading = !1, this.failed = !0, this.pcoGeometry.numNodesLoading--, s;
    });
  }
  canLoad() {
    return !this.loading && !this.loaded && !this.pcoGeometry.disposed && !this.pcoGeometry.loader.disposed && this.pcoGeometry.numNodesLoading < this.pcoGeometry.maxNumNodesLoading;
  }
  loadPoints() {
    return this.pcoGeometry.needsUpdate = !0, this.pcoGeometry.loader.load(this);
  }
  loadHierachyThenPoints() {
    return this.level % this.pcoGeometry.hierarchyStepSize !== 0 ? Promise.resolve() : Promise.resolve(this.pcoGeometry.loader.getUrl(this.getHierarchyUrl())).then((e) => this.pcoGeometry.xhrRequest(e, { mode: "cors" })).then((e) => e.arrayBuffer()).then((e) => this.loadHierarchy(this, e));
  }
  /**
   * Gets the url of the folder where the hierarchy is, relative to the octreeDir.
   */
  getHierarchyBaseUrl() {
    const e = this.pcoGeometry.hierarchyStepSize, s = this.name.substr(1), t = Math.floor(s.length / e);
    let o = "r/";
    for (let i = 0; i < t; i++)
      o += `${s.substr(i * e, e)}/`;
    return o.slice(0, -1);
  }
  // tslint:disable:no-bitwise
  loadHierarchy(e, s) {
    const t = new DataView(s), o = this.getNodeData(e.name, 0, t);
    e.numPoints = o.numPoints;
    const i = [o], d = [];
    let h = m;
    for (; i.length > 0; ) {
      const n = i.shift();
      let l = 1;
      for (let r = 0; r < 8 && h + 1 < s.byteLength; r++) {
        if (n.children & l) {
          const u = this.getNodeData(n.name + r, h, t);
          d.push(u), i.push(u), h += m;
        }
        l = l * 2;
      }
    }
    e.pcoGeometry.needsUpdate = !0;
    const a = /* @__PURE__ */ new Map();
    a.set(e.name, e), d.forEach((n) => this.addNode(n, e.pcoGeometry, a)), e.loadPoints();
  }
  // tslint:enable:no-bitwise
  getNodeData(e, s, t) {
    const o = t.getUint8(s), i = t.getUint32(s + 1, !0);
    return { children: o, numPoints: i, name: e };
  }
  addNode({ name: e, numPoints: s, children: t }, o, i) {
    const d = p(e), h = e.substring(0, e.length - 1), a = i.get(h), n = e.length - 1, l = G(a.boundingBox, d), r = new c(e, o, l);
    r.level = n, r.numPoints = s, r.hasChildren = t > 0, r.spacing = o.spacing / Math.pow(2, n), a.addChild(r), i.set(e, r);
  }
};
let N = c;
N.idCount = 0;
export {
  N as PointCloudOctreeGeometryNode
};
//# sourceMappingURL=potree-loader.es38.js.map
