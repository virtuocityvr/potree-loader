import { PointAttributes as d } from "./potree-loader.es22.js";
class a {
  constructor(s, t, e, i, o) {
    this.loader = s, this.boundingBox = t, this.tightBoundingBox = e, this.offset = i, this.xhrRequest = o, this.disposed = !1, this.needsUpdate = !0, this.octreeDir = "", this.hierarchyStepSize = -1, this.nodes = {}, this.numNodesLoading = 0, this.maxNumNodesLoading = 3, this.spacing = 0, this.pointAttributes = new d([]), this.projection = null, this.url = null;
  }
  dispose() {
    this.loader.dispose(), this.root.traverse((s) => s.dispose()), this.disposed = !0;
  }
  addNodeLoadedCallback(s) {
    this.loader.callbacks.push(s);
  }
  clearNodeLoadedCallbacks() {
    this.loader.callbacks = [];
  }
}
export {
  a as PointCloudOctreeGeometry
};
//# sourceMappingURL=potree-loader.es37.js.map
