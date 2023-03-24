import { loadOctree as T } from "./potree-loader.es20.js";
import { Vector2 as _, Frustum as I, Vector3 as N, Box3 as A, Matrix4 as w } from "./potree-loader.es6.js";
import { DEFAULT_POINT_BUDGET as E, MAX_NUM_NODES_LOADING as W, MAX_LOADS_TO_GPU as P, PERSPECTIVE_CAMERA as S } from "./potree-loader.es7.js";
import { FEATURES as U } from "./potree-loader.es21.js";
import "./potree-loader.es22.js";
import "./potree-loader.es23.js";
import { loadPOC as G } from "./potree-loader.es24.js";
import { ClipMode as O } from "./potree-loader.es25.js";
import "./potree-loader.es8.js";
import "./potree-loader.es9.js";
import "./potree-loader.es10.js";
import "./potree-loader.es11.js";
import "./potree-loader.es12.js";
import "./potree-loader.es13.js";
import "./potree-loader.es14.js";
import "./potree-loader.es15.js";
import { PointCloudOctree as v } from "./potree-loader.es2.js";
import { PointCloudOctreePicker as F } from "./potree-loader.es17.js";
import { isTreeNode as M, isGeometryNode as k } from "./potree-loader.es26.js";
import { BinaryHeap as D } from "./potree-loader.es27.js";
import { Box3Helper as j } from "./potree-loader.es28.js";
import { LRU as z } from "./potree-loader.es29.js";
class V {
  constructor(i, t, o, e) {
    this.pointCloudIndex = i, this.weight = t, this.node = o, this.parent = e;
  }
}
class g {
  constructor() {
    this._pointBudget = E, this._rendererSize = new _(), this.maxNumNodesLoading = W, this.features = U, this.lru = new z(this._pointBudget), this.updateVisibilityStructures = (() => {
      const i = new w(), t = new w(), o = new w();
      return (e, n) => {
        var m;
        const r = [], p = [], c = new D((d) => 1 / d.weight);
        for (let d = 0; d < e.length; d++) {
          const l = e[d];
          if (!l.initialized())
            continue;
          l.numVisiblePoints = 0, l.visibleNodes = [], l.visibleGeometry = [], n.updateMatrixWorld(!1);
          const x = n.matrixWorldInverse, u = l.matrixWorld;
          if (i.identity().multiply(n.projectionMatrix).multiply(x).multiply(u), r.push(new I().setFromProjectionMatrix(i)), t.copy(u).invert(), o.identity().multiply(t).multiply(n.matrixWorld), p.push(new N().setFromMatrixPosition(o)), l.visible && l.root !== null) {
            const h = Number.MAX_VALUE;
            c.push(new V(d, h, l.root));
          }
          M(l.root) && l.hideDescendants((m = l == null ? void 0 : l.root) == null ? void 0 : m.sceneNode);
          for (const h of l.boundingBoxNodes)
            h.visible = !1;
        }
        return { frustums: r, cameraPositions: p, priorityQueue: c };
      };
    })();
  }
  async loadPointCloud(i, t, o = (e, n) => fetch(e, n)) {
    if (i === "cloud.js")
      return await G(i, t, o).then((e) => new v(this, e));
    if (i === "metadata.json")
      return await T(i, t, o).then((e) => new v(this, e));
    throw new Error("Unsupported file type");
  }
  updatePointClouds(i, t, o) {
    const e = this.updateVisibility(i, t, o);
    for (let n = 0; n < i.length; n++) {
      const r = i[n];
      r.disposed || (r.material.updateMaterial(r, r.visibleNodes, t, o), r.updateVisibleBounds(), r.updateBoundingBoxes());
    }
    return this.lru.freeMemory(), e;
  }
  static pick(i, t, o, e, n = {}) {
    return g.picker = g.picker || new F(), g.picker.pick(t, o, e, i, n);
  }
  get pointBudget() {
    return this._pointBudget;
  }
  set pointBudget(i) {
    i !== this._pointBudget && (this._pointBudget = i, this.lru.pointBudget = i, this.lru.freeMemory());
  }
  updateVisibility(i, t, o) {
    let e = 0;
    const n = [], r = [], { frustums: p, cameraPositions: c, priorityQueue: m } = this.updateVisibilityStructures(
      i,
      t
    );
    let d = 0, l = !1, x = !1, u;
    for (; (u = m.pop()) !== void 0; ) {
      let s = u.node;
      if (e + s.numPoints > this.pointBudget)
        break;
      const f = u.pointCloudIndex, a = i[f], B = a.maxLevel !== void 0 ? a.maxLevel : 1 / 0;
      if (s.level > B || !p[f].intersectsBox(s.boundingBox) || this.shouldClip(a, s.boundingBox))
        continue;
      e += s.numPoints, a.numVisiblePoints += s.numPoints;
      const y = u.parent;
      if (k(s) && (!y || M(y)))
        if (s.loaded && d < P)
          s = a.toTreeNode(s, y), d++;
        else if (!s.failed)
          s.loaded && d >= P && (l = !0), r.push(s), a.visibleGeometry.push(s);
        else {
          x = !0;
          continue;
        }
      M(s) && (this.updateTreeNodeVisibility(a, s, n), a.visibleGeometry.push(s.geometryNode));
      const L = 0.5 * o.getSize(this._rendererSize).height * o.getPixelRatio();
      this.updateChildVisibility(
        u,
        m,
        a,
        s,
        c[f],
        t,
        L
      );
    }
    const h = Math.min(this.maxNumNodesLoading, r.length), b = [];
    for (let s = 0; s < h; s++)
      b.push(r[s].load());
    return {
      visibleNodes: n,
      numVisiblePoints: e,
      exceededMaxLoadsToGPU: l,
      nodeLoadFailed: x,
      nodeLoadPromises: b
    };
  }
  updateTreeNodeVisibility(i, t, o) {
    this.lru.touch(t.geometryNode);
    const e = t.sceneNode;
    e.visible = !0, e.material = i.material, e.updateMatrix(), e.matrixWorld.multiplyMatrices(i.matrixWorld, e.matrix), o.push(t), i.visibleNodes.push(t), this.updateBoundingBoxVisibility(i, t);
  }
  updateChildVisibility(i, t, o, e, n, r, p) {
    const c = e.children;
    for (let m = 0; m < c.length; m++) {
      const d = c[m];
      if (d === null)
        continue;
      const l = d.boundingSphere, x = l.center.distanceTo(n), u = l.radius;
      let h = 0;
      if (r.type === S) {
        const a = r.fov * Math.PI / 180, B = Math.tan(a / 2);
        h = p / (B * x);
      } else {
        const f = r;
        h = 2 * p / (f.top - f.bottom);
      }
      const b = u * h;
      if (b < o.minNodePixelSize)
        continue;
      const s = x < u ? Number.MAX_VALUE : b + 1 / x;
      t.push(new V(i.pointCloudIndex, s, d, e));
    }
  }
  updateBoundingBoxVisibility(i, t) {
    if (i.showBoundingBox && !t.boundingBoxNode) {
      const o = new j(t.boundingBox);
      o.matrixAutoUpdate = !1, i.boundingBoxNodes.push(o), t.boundingBoxNode = o, t.boundingBoxNode.matrix.copy(i.matrixWorld);
    } else
      i.showBoundingBox && t.boundingBoxNode ? (t.boundingBoxNode.visible = !0, t.boundingBoxNode.matrix.copy(i.matrixWorld)) : !i.showBoundingBox && t.boundingBoxNode && (t.boundingBoxNode.visible = !1);
  }
  shouldClip(i, t) {
    const o = i.material;
    if (o.numClipBoxes === 0 || o.clipMode !== O.CLIP_OUTSIDE)
      return !1;
    const e = t.clone();
    i.updateMatrixWorld(!0), e.applyMatrix4(i.matrixWorld);
    const n = o.clipBoxes;
    for (let r = 0; r < n.length; r++) {
      const p = n[r].matrix, c = new A(
        new N(-0.5, -0.5, -0.5),
        new N(0.5, 0.5, 0.5)
      ).applyMatrix4(p);
      if (e.intersectsBox(c))
        return !1;
    }
    return !0;
  }
}
export {
  g as Potree,
  V as QueueItem
};
//# sourceMappingURL=potree-loader.es3.js.map
