import { OctreeGeometry as d } from "./potree-loader.es5.js";
import { Box3 as h, Sphere as l, Points as a, Object3D as p, Vector3 as u } from "./potree-loader.es6.js";
import { DEFAULT_MIN_NODE_PIXEL_SIZE as m } from "./potree-loader.es7.js";
import { PointCloudMaterial as s } from "./potree-loader.es8.js";
import "./potree-loader.es9.js";
import "./potree-loader.es10.js";
import "./potree-loader.es11.js";
import "./potree-loader.es12.js";
import "./potree-loader.es13.js";
import "./potree-loader.es14.js";
import "./potree-loader.es15.js";
import { PointCloudOctreeNode as x } from "./potree-loader.es16.js";
import { PointCloudOctreePicker as f } from "./potree-loader.es17.js";
import { PointCloudTree as c } from "./potree-loader.es18.js";
import { computeTransformedBoundingBox as r } from "./potree-loader.es19.js";
class C extends c {
  constructor(i, t, e) {
    super(), this.disposed = !1, this.level = 0, this.maxLevel = 1 / 0, this.minNodePixelSize = m, this.root = null, this.boundingBoxNodes = [], this.visibleNodes = [], this.visibleGeometry = [], this.numVisiblePoints = 0, this.showBoundingBox = !1, this.visibleBounds = new h(), this.name = "", this.potree = i, this.root = t.root, this.pcoGeometry = t, this.boundingBox = t.boundingBox, this.boundingSphere = this.boundingBox.getBoundingSphere(new l()), this.position.copy(t.offset), this.updateMatrix(), this.material = e || t instanceof d ? new s({ newFormat: !0 }) : new s(), this.initMaterial(this.material);
  }
  initMaterial(i) {
    this.updateMatrixWorld(!0);
    const { min: t, max: e } = r(
      this.pcoGeometry.tightBoundingBox || this.getBoundingBoxWorld(),
      this.matrixWorld
    ), o = e.z - t.z;
    i.heightMin = t.z - 0.2 * o, i.heightMax = e.z + 0.2 * o;
  }
  dispose() {
    this.root && this.root.dispose(), this.pcoGeometry.root.traverse((i) => this.potree.lru.remove(i)), this.pcoGeometry.dispose(), this.material.dispose(), this.visibleNodes = [], this.visibleGeometry = [], this.picker && (this.picker.dispose(), this.picker = void 0), this.disposed = !0;
  }
  get pointSizeType() {
    return this.material.pointSizeType;
  }
  set pointSizeType(i) {
    this.material.pointSizeType = i;
  }
  toTreeNode(i, t) {
    const e = new a(i.geometry, this.material), o = new x(i, e);
    return e.name = i.name, e.position.copy(i.boundingBox.min), e.frustumCulled = !1, e.onBeforeRender = s.makeOnBeforeRender(this, o), t ? (t.sceneNode.add(e), t.children[i.index] = o, i.oneTimeDisposeHandlers.push(() => {
      o.disposeSceneNode(), t.sceneNode.remove(o.sceneNode), t.children[i.index] = i;
    })) : (this.root = o, this.add(e)), o;
  }
  updateVisibleBounds() {
    const i = this.visibleBounds;
    i.min.set(1 / 0, 1 / 0, 1 / 0), i.max.set(-1 / 0, -1 / 0, -1 / 0);
    for (const t of this.visibleNodes)
      t.isLeafNode && (i.expandByPoint(t.boundingBox.min), i.expandByPoint(t.boundingBox.max));
  }
  updateBoundingBoxes() {
    if (!this.showBoundingBox || !this.parent)
      return;
    let i = this.parent.getObjectByName("bbroot");
    i || (i = new p(), i.name = "bbroot", this.parent.add(i));
    const t = [];
    for (const e of this.visibleNodes)
      e.boundingBoxNode !== void 0 && e.isLeafNode && t.push(e.boundingBoxNode);
    i.children = t;
  }
  updateMatrixWorld(i) {
    this.matrixAutoUpdate === !0 && this.updateMatrix(), (this.matrixWorldNeedsUpdate === !0 || i === !0) && (this.parent ? this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix) : this.matrixWorld.copy(this.matrix), this.matrixWorldNeedsUpdate = !1, i = !0);
  }
  hideDescendants(i) {
    const t = [];
    for (e(i); t.length > 0; ) {
      const o = t.shift();
      o.visible = !1, e(o);
    }
    function e(o) {
      for (const n of o.children)
        n.visible && t.push(n);
    }
  }
  moveToOrigin() {
    this.position.set(0, 0, 0), this.position.set(0, 0, 0).sub(this.getBoundingBoxWorld().getCenter(new u()));
  }
  moveToGroundPlane() {
    this.position.y += -this.getBoundingBoxWorld().min.y;
  }
  getBoundingBoxWorld() {
    return this.updateMatrixWorld(!0), r(this.boundingBox, this.matrixWorld);
  }
  getVisibleExtent() {
    return this.visibleBounds.applyMatrix4(this.matrixWorld);
  }
  pick(i, t, e, o = {}) {
    return this.picker = this.picker || new f(), this.picker.pick(i, t, e, [this], o);
  }
  get progress() {
    return this.visibleGeometry.length === 0 ? 0 : this.visibleNodes.length / this.visibleGeometry.length;
  }
}
export {
  C as PointCloudOctree
};
//# sourceMappingURL=potree-loader.es2.js.map
