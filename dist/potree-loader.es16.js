import { EventDispatcher as r, BufferGeometry as i } from "./potree-loader.es6.js";
class d extends r {
  constructor(e, t) {
    super(), this.pcIndex = void 0, this.boundingBoxNode = null, this.loaded = !0, this.isTreeNode = !0, this.isGeometryNode = !1, this.geometryNode = e, this.sceneNode = t, this.children = e.children.slice();
  }
  dispose() {
    this.geometryNode.dispose();
  }
  disposeSceneNode() {
    const e = this.sceneNode;
    if (e.geometry instanceof i) {
      const t = e.geometry.attributes;
      for (const o in t)
        o === "position" && delete t[o].array, delete t[o];
      e.geometry.dispose(), e.geometry = void 0;
    }
  }
  traverse(e, t) {
    this.geometryNode.traverse(e, t);
  }
  get id() {
    return this.geometryNode.id;
  }
  get name() {
    return this.geometryNode.name;
  }
  get level() {
    return this.geometryNode.level;
  }
  get isLeafNode() {
    return this.geometryNode.isLeafNode;
  }
  get numPoints() {
    return this.geometryNode.numPoints;
  }
  get index() {
    return this.geometryNode.index;
  }
  get boundingSphere() {
    return this.geometryNode.boundingSphere;
  }
  get boundingBox() {
    return this.geometryNode.boundingBox;
  }
  get spacing() {
    return this.geometryNode.spacing;
  }
}
export {
  d as PointCloudOctreeNode
};
//# sourceMappingURL=potree-loader.es16.js.map
