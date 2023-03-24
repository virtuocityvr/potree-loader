import { Sphere as l } from "./potree-loader.es6.js";
const n = class {
  constructor(e, t, s) {
    this.name = e, this.octreeGeometry = t, this.boundingBox = s, this.loaded = !1, this.loading = !1, this.parent = null, this.geometry = null, this.hasChildren = !1, this.isLeafNode = !0, this.isTreeNode = !1, this.isGeometryNode = !0, this.children = [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null
    ], this.id = n.IDCount++, this.index = parseInt(e.charAt(e.length - 1)), this.boundingSphere = s.getBoundingSphere(new l()), this.numPoints = 0, this.oneTimeDisposeHandlers = [];
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
    this.octreeGeometry.numNodesLoading >= this.octreeGeometry.maxNumNodesLoading || this.octreeGeometry.loader && this.octreeGeometry.loader.load(this);
  }
  getNumPoints() {
    return this.numPoints;
  }
  dispose() {
    if (this.geometry && this.parent != null) {
      this.geometry.dispose(), this.geometry = null, this.loaded = !1;
      for (let e = 0; e < this.oneTimeDisposeHandlers.length; e++) {
        let t = this.oneTimeDisposeHandlers[e];
        t();
      }
      this.oneTimeDisposeHandlers = [];
    }
  }
  traverse(e, t = !0) {
    const s = t ? [this] : [];
    let i;
    for (; (i = s.pop()) !== void 0; ) {
      e(i);
      for (const o of i.children)
        o !== null && s.push(o);
    }
  }
};
let r = n;
r.IDCount = 0;
r.IDCount = 0;
export {
  r as OctreeGeometryNode
};
//# sourceMappingURL=potree-loader.es35.js.map
