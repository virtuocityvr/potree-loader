import { BufferGeometry as c, Vector3 as f, Box3 as m, BufferAttribute as s, Uint8BufferAttribute as d } from "./potree-loader.es6.js";
import { PointAttributeName as o } from "./potree-loader.es22.js";
import { Version as w } from "./potree-loader.es4.js";
import g from "./potree-loader.es23.js";
class x {
  constructor({
    getUrl: t = (a) => Promise.resolve(a),
    version: e,
    boundingBox: r,
    scale: i,
    xhrRequest: n
  }) {
    this.disposed = !1, this.workers = [], console.log([t, e, r, i, n]), typeof e == "string" ? this.version = new w(e) : this.version = e, this.xhrRequest = n, this.getUrl = t, this.boundingBox = r, this.scale = i, this.callbacks = [];
  }
  dispose() {
    this.workers.forEach((t) => t.terminate()), this.workers = [], this.disposed = !0;
  }
  load(t) {
    return t.loaded || this.disposed ? Promise.resolve() : Promise.resolve(this.getUrl(this.getNodeUrl(t))).then((e) => this.xhrRequest(e, { mode: "cors" })).then((e) => e.arrayBuffer()).then((e) => new Promise((r) => this.parse(t, e, r)));
  }
  getNodeUrl(t) {
    let e = t.getUrl();
    return this.version.equalOrHigher("1.4") && (e += ".bin"), e;
  }
  parse(t, e, r) {
    if (this.disposed) {
      r();
      return;
    }
    const i = this.getWorker(), n = t.pcoGeometry.pointAttributes, a = e.byteLength / n.byteSize;
    this.version.upTo("1.5") && (t.numPoints = a), i.onmessage = (A) => {
      if (this.disposed) {
        r();
        return;
      }
      const u = A.data, h = t.geometry = t.geometry || new c();
      h.boundingBox = t.boundingBox, this.addBufferAttributes(h, u.attributeBuffers), this.addIndices(h, u.indices), this.addNormalAttribute(h, a), t.mean = new f().fromArray(u.mean), t.tightBoundingBox = this.getTightBoundingBox(u.tightBoundingBox), t.loaded = !0, t.loading = !1, t.failed = !1, t.pcoGeometry.numNodesLoading--, t.pcoGeometry.needsUpdate = !0, this.releaseWorker(i), this.callbacks.forEach((b) => b(t)), r();
    };
    const l = {
      buffer: e,
      pointAttributes: n,
      version: this.version.version,
      min: t.boundingBox.min.toArray(),
      offset: t.pcoGeometry.offset.toArray(),
      scale: this.scale,
      spacing: t.spacing,
      hasChildren: t.hasChildren
    };
    i.postMessage(l, [l.buffer]);
  }
  getWorker() {
    const t = this.workers.pop();
    return t || new g();
  }
  releaseWorker(t) {
    this.workers.push(t);
  }
  getTightBoundingBox({ min: t, max: e }) {
    const r = new m(new f().fromArray(t), new f().fromArray(e));
    return r.max.sub(r.min), r.min.set(0, 0, 0), r;
  }
  addBufferAttributes(t, e) {
    Object.keys(e).forEach((r) => {
      const i = e[r].buffer;
      this.isAttribute(r, o.POSITION_CARTESIAN) ? t.setAttribute("position", new s(new Float32Array(i), 3)) : this.isAttribute(r, o.COLOR_PACKED) ? t.setAttribute("color", new s(new Uint8Array(i), 3, !0)) : this.isAttribute(r, o.INTENSITY) ? t.setAttribute("intensity", new s(new Float32Array(i), 1)) : this.isAttribute(r, o.CLASSIFICATION) ? t.setAttribute("classification", new s(new Uint8Array(i), 1)) : this.isAttribute(r, o.NORMAL_SPHEREMAPPED) ? t.setAttribute("normal", new s(new Float32Array(i), 3)) : this.isAttribute(r, o.NORMAL_OCT16) ? t.setAttribute("normal", new s(new Float32Array(i), 3)) : this.isAttribute(r, o.NORMAL) && t.setAttribute("normal", new s(new Float32Array(i), 3));
    });
  }
  addIndices(t, e) {
    const r = new d(e, 4);
    r.normalized = !0, t.setAttribute("indices", r);
  }
  addNormalAttribute(t, e) {
    if (!t.getAttribute("normal")) {
      const r = new Float32Array(e * 3);
      t.setAttribute("normal", new s(new Float32Array(r), 3));
    }
  }
  isAttribute(t, e) {
    return parseInt(t, 10) === e;
  }
}
export {
  x as BinaryLoader
};
//# sourceMappingURL=potree-loader.es36.js.map
