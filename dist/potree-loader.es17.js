import { Color as S, Vector3 as m, Sphere as I, NoBlending as w, Points as B, WebGLRenderTarget as O, LinearFilter as b, NearestFilter as A, RGBAFormat as k, Vector4 as z, Scene as E } from "./potree-loader.es6.js";
import { DEFAULT_PICK_WINDOW_SIZE as F, COLOR_BLACK as L } from "./potree-loader.es7.js";
import { ClipMode as g } from "./potree-loader.es25.js";
import { PointColorType as _ } from "./potree-loader.es31.js";
import { PointCloudMaterial as T } from "./potree-loader.es8.js";
import "./potree-loader.es9.js";
import "./potree-loader.es10.js";
import "./potree-loader.es11.js";
import "./potree-loader.es12.js";
import "./potree-loader.es13.js";
import "./potree-loader.es14.js";
import "./potree-loader.es15.js";
import { clamp as y } from "./potree-loader.es32.js";
const a = class {
  dispose() {
    this.pickState && (this.pickState.material.dispose(), this.pickState.renderTarget.dispose());
  }
  pick(e, t, o, s, r = {}) {
    if (s.length === 0)
      return null;
    const i = this.pickState ? this.pickState : this.pickState = a.getPickState(), n = i.material, l = e.getPixelRatio(), c = Math.ceil(e.domElement.clientWidth * l), p = Math.ceil(e.domElement.clientHeight * l);
    a.updatePickRenderTarget(this.pickState, c, p);
    const d = a.helperVec3;
    r.pixelPosition ? d.copy(r.pixelPosition) : (d.addVectors(t.position, o.direction).project(t), d.x = (d.x + 1) * c * 0.5, d.y = (d.y + 1) * p * 0.5);
    const f = Math.floor(
      (r.pickWindowSize || F) * l
    ), h = (f - 1) / 2, P = Math.floor(y(d.x - h, 0, c)), x = Math.floor(y(d.y - h, 0, p));
    a.prepareRender(e, P, x, f, n, i);
    const C = a.render(
      e,
      t,
      n,
      s,
      o,
      i,
      r
    );
    n.clearVisibleNodeTextureOffsets();
    const R = a.readPixels(e, P, x, f), N = a.findHit(R, f);
    return a.getPickPoint(N, C);
  }
  static prepareRender(e, t, o, s, r, i) {
    e.setScissor(t, o, s, s), e.setScissorTest(!0), e.state.buffers.depth.setTest(r.depthTest), e.state.buffers.depth.setMask(r.depthWrite), e.state.setBlending(w), e.setRenderTarget(i.renderTarget), e.getClearColor(this.clearColor);
    const n = e.getClearAlpha();
    e.setClearColor(L, 0), e.clear(!0, !0, !0), e.setClearColor(this.clearColor, n);
  }
  static render(e, t, o, s, r, i, n) {
    const l = [];
    for (const c of s) {
      const p = a.nodesOnRay(c, r);
      p.length && (a.updatePickMaterial(o, c.material, n), o.updateMaterial(c, p, t, e), n.onBeforePickRender && n.onBeforePickRender(o, i.renderTarget), i.scene.children = a.createTempNodes(
        c,
        p,
        o,
        l.length
      ), e.render(i.scene, t), p.forEach((d) => l.push({ node: d, octree: c })));
    }
    return l;
  }
  static nodesOnRay(e, t) {
    const o = [], s = t.clone();
    for (const r of e.visibleNodes) {
      const i = a.helperSphere.copy(r.boundingSphere).applyMatrix4(e.matrixWorld);
      s.intersectsSphere(i) && o.push(r);
    }
    return o;
  }
  static readPixels(e, t, o, s) {
    const r = new Uint8Array(4 * s * s);
    return e.readRenderTargetPixels(
      e.getRenderTarget(),
      t,
      o,
      s,
      s,
      r
    ), e.setScissorTest(!1), e.setRenderTarget(null), r;
  }
  static createTempNodes(e, t, o, s) {
    const r = [];
    for (let i = 0; i < t.length; i++) {
      const n = t[i], l = n.sceneNode, c = new B(l.geometry, o);
      c.matrix = l.matrix, c.matrixWorld = l.matrixWorld, c.matrixAutoUpdate = !1, c.frustumCulled = !1;
      const p = s + i + 1;
      p > 255 && console.error("More than 255 nodes for pick are not supported."), c.onBeforeRender = T.makeOnBeforeRender(e, n, p), r.push(c);
    }
    return r;
  }
  static updatePickMaterial(e, t, o) {
    e.pointSizeType = t.pointSizeType, e.shape = t.shape, e.size = t.size, e.minSize = t.minSize, e.maxSize = t.maxSize, e.classification = t.classification, e.useFilterByNormal = t.useFilterByNormal, e.filterByNormalThreshold = t.filterByNormalThreshold, o.pickOutsideClipRegion ? e.clipMode = g.DISABLED : (e.clipMode = t.clipMode, e.setClipBoxes(
      t.clipMode === g.CLIP_OUTSIDE ? t.clipBoxes : []
    ));
  }
  static updatePickRenderTarget(e, t, o) {
    e.renderTarget.width === t && e.renderTarget.height === o || (e.renderTarget.dispose(), e.renderTarget = a.makePickRenderTarget(), e.renderTarget.setSize(t, o));
  }
  static makePickRenderTarget() {
    return new O(1, 1, {
      minFilter: b,
      magFilter: A,
      format: k
    });
  }
  static findHit(e, t) {
    const o = new Uint32Array(e.buffer);
    let s = Number.MAX_VALUE, r = null;
    for (let i = 0; i < t; i++)
      for (let n = 0; n < t; n++) {
        const l = i + n * t, c = Math.pow(i - (t - 1) / 2, 2) + Math.pow(n - (t - 1) / 2, 2), p = e[4 * l + 3];
        e[4 * l + 3] = 0;
        const d = o[l];
        p > 0 && c < s && (r = {
          pIndex: d,
          pcIndex: p - 1
        }, s = c);
      }
    return r;
  }
  static getPickPoint(e, t) {
    if (!e)
      return null;
    const o = {}, s = t[e.pcIndex] && t[e.pcIndex].node.sceneNode;
    if (!s)
      return null;
    o.pointCloud = t[e.pcIndex].octree;
    const r = s.geometry.attributes;
    for (const i in r) {
      if (!r.hasOwnProperty(i))
        continue;
      const n = r[i];
      if (i === "position")
        a.addPositionToPickPoint(o, e, n, s);
      else if (i === "normal")
        a.addNormalToPickPoint(o, e, n, s);
      else if (i !== "indices")
        if (n.itemSize === 1)
          o[i] = n.array[e.pIndex];
        else {
          const l = [];
          for (let c = 0; c < n.itemSize; c++)
            l.push(n.array[n.itemSize * e.pIndex + c]);
          o[i] = l;
        }
    }
    return o;
  }
  static addPositionToPickPoint(e, t, o, s) {
    e.position = new m().fromBufferAttribute(o, t.pIndex).applyMatrix4(s.matrixWorld);
  }
  static addNormalToPickPoint(e, t, o, s) {
    const r = new m().fromBufferAttribute(o, t.pIndex), i = new z(r.x, r.y, r.z, 0).applyMatrix4(s.matrixWorld);
    r.set(i.x, i.y, i.z), e.normal = r;
  }
  static getPickState() {
    const e = new E();
    e.autoUpdate = !1;
    const t = new T();
    return t.pointColorType = _.POINT_INDEX, {
      renderTarget: a.makePickRenderTarget(),
      material: t,
      scene: e
    };
  }
};
let u = a;
u.helperVec3 = new m();
u.helperSphere = new I();
u.clearColor = new S();
export {
  u as PointCloudOctreePicker
};
//# sourceMappingURL=potree-loader.es17.js.map
