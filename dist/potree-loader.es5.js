import { Sphere as t } from "./potree-loader.es6.js";
class n {
  constructor(i, o) {
    this.loader = i, this.boundingBox = o, this.url = null, this.pointAttributes = null, this.spacing = 0, this.numNodesLoading = 0, this.maxNumNodesLoading = 3, this.disposed = !1, this.tightBoundingBox = this.boundingBox.clone(), this.boundingSphere = this.boundingBox.getBoundingSphere(new t()), this.tightBoundingSphere = this.boundingBox.getBoundingSphere(new t());
  }
  dispose() {
    this.root.traverse((i) => i.dispose()), this.disposed = !0;
  }
}
export {
  n as OctreeGeometry
};
//# sourceMappingURL=potree-loader.es5.js.map
