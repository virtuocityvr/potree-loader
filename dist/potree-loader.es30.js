import { Vector3 as x, Box3 as I, Sphere as D, BufferGeometry as v, BufferAttribute as P } from "./potree-loader.es6.js";
import { PointAttributeTypes as m, PointAttributes as Y, PointAttribute as G } from "./potree-loader.es33.js";
import { WorkerPool as L, WorkerType as S } from "./potree-loader.es34.js";
import { OctreeGeometryNode as k } from "./potree-loader.es35.js";
import { OctreeGeometry as U } from "./potree-loader.es5.js";
class $ {
  constructor(e, i, o) {
    this.url = e, this.workerPool = i, this.metadata = o;
  }
  async load(e) {
    if (!(e.loaded || e.loading)) {
      e.loading = !0, e.octreeGeometry.numNodesLoading++;
      try {
        e.nodeType === 2 && await this.loadHierarchy(e);
        let { byteOffset: i, byteSize: o } = e;
        if (i === void 0 || o === void 0)
          throw new Error("byteOffset and byteSize are required");
        let t = `${this.url}/../octree.bin`, a = i, f = i + o - BigInt(1), n;
        o === BigInt(0) ? (n = new ArrayBuffer(0), console.warn(`loaded node with 0 bytes: ${e.name}`)) : n = await (await fetch(t, {
          headers: {
            "content-type": "multipart/byteranges",
            Range: `bytes=${a}-${f}`
          }
        })).arrayBuffer();
        const c = this.metadata.encoding === "BROTLI" ? S.DECODER_WORKER_BROTLI : S.DECODER_WORKER, l = this.workerPool.getWorker(c);
        l.onmessage = (E) => {
          let b = E.data, p = b.attributeBuffers;
          this.workerPool.returnWorker(c, l);
          let A = new v();
          for (let y in p) {
            let T = p[y].buffer;
            if (y === "position")
              A.setAttribute("position", new P(new Float32Array(T), 3));
            else if (y === "rgba")
              A.setAttribute("rgba", new P(new Uint8Array(T), 4, !0));
            else if (y === "NORMAL")
              A.setAttribute("normal", new P(new Float32Array(T), 3));
            else if (y === "INDICES") {
              let N = new P(new Uint8Array(T), 4);
              N.normalized = !0, A.setAttribute("indices", N);
            } else {
              const N = new P(new Float32Array(T), 1);
              let R = p[y].attribute;
              N.potree = {
                offset: p[y].offset,
                scale: p[y].scale,
                preciseBuffer: p[y].preciseBuffer,
                range: R.range
              }, A.setAttribute(y, N);
            }
          }
          e.density = b.density, e.geometry = A, e.loaded = !0, e.loading = !1, e.octreeGeometry.numNodesLoading--;
        };
        let r = e.octreeGeometry.pointAttributes, s = e.octreeGeometry.scale, u = e.boundingBox, d = e.octreeGeometry.offset.clone().add(u.min), h = u.max.clone().sub(u.min), w = d.clone().add(h), g = e.numPoints, z = e.octreeGeometry.loader.offset, B = {
          name: e.name,
          buffer: n,
          pointAttributes: r,
          scale: s,
          min: d,
          max: w,
          size: h,
          offset: z,
          numPoints: g
        };
        l.postMessage(B, [B.buffer]);
      } catch {
        e.loaded = !1, e.loading = !1, e.octreeGeometry.numNodesLoading--;
      }
    }
  }
  parseHierarchy(e, i) {
    let o = new DataView(i), t = 22, a = i.byteLength / t, f = e.octreeGeometry, n = new Array(a);
    n[0] = e;
    let c = 1;
    for (let l = 0; l < a; l++) {
      let r = n[l], s = o.getUint8(l * t + 0), u = o.getUint8(l * t + 1), d = o.getUint32(l * t + 2, !0), h = o.getBigInt64(l * t + 6, !0), w = o.getBigInt64(l * t + 14, !0);
      if (r.nodeType === 2 ? (r.byteOffset = h, r.byteSize = w, r.numPoints = d) : s === 2 ? (r.hierarchyByteOffset = h, r.hierarchyByteSize = w, r.numPoints = d) : (r.byteOffset = h, r.byteSize = w, r.numPoints = d), r.nodeType = s, r.nodeType !== 2)
        for (let g = 0; g < 8; g++) {
          if (!((1 << g & u) !== 0))
            continue;
          let B = r.name + g, E = C(r.boundingBox, g), b = new k(B, f, E);
          b.name = B, b.spacing = r.spacing / 2, b.level = r.level + 1, r.children[g] = b, b.parent = r, n[c] = b, c++;
        }
    }
  }
  async loadHierarchy(e) {
    let { hierarchyByteOffset: i, hierarchyByteSize: o } = e;
    if (i === void 0 || o === void 0)
      throw new Error(`hierarchyByteOffset and hierarchyByteSize are undefined for node ${e.name}`);
    let t = `${this.url}/../hierarchy.bin`, a = i, f = a + o - BigInt(1), c = await (await fetch(t, {
      headers: {
        "content-type": "multipart/byteranges",
        Range: `bytes=${a}-${f}`
      }
    })).arrayBuffer();
    this.parseHierarchy(e, c);
  }
}
let W = new x();
function C(O, e) {
  let i = O.min.clone(), o = O.max.clone(), t = W.subVectors(o, i);
  return (e & 1) > 0 ? i.z += t.z / 2 : o.z -= t.z / 2, (e & 2) > 0 ? i.y += t.y / 2 : o.y -= t.y / 2, (e & 4) > 0 ? i.x += t.x / 2 : o.x -= t.x / 2, new I(i, o);
}
let M = {
  double: m.DATA_TYPE_DOUBLE,
  float: m.DATA_TYPE_FLOAT,
  int8: m.DATA_TYPE_INT8,
  uint8: m.DATA_TYPE_UINT8,
  int16: m.DATA_TYPE_INT16,
  uint16: m.DATA_TYPE_UINT16,
  int32: m.DATA_TYPE_INT32,
  uint32: m.DATA_TYPE_UINT32,
  int64: m.DATA_TYPE_INT64,
  uint64: m.DATA_TYPE_UINT64
};
class _ {
  constructor() {
    this.workerPool = new L();
  }
  static parseAttributes(e) {
    let i = new Y(), o = {
      rgb: "rgba"
    };
    for (const t of e) {
      let { name: a, numElements: f, min: n, max: c } = t, l = M[t.type], r = o[a] ? o[a] : a, s = new G(r, l, f);
      f === 1 ? s.range = [n[0], c[0]] : s.range = [n, c], a === "gps-time" && typeof s.range[0] == "number" && s.range[0] === s.range[1] && (s.range[1] += 1), s.initialRange = s.range, i.add(s);
    }
    if (i.attributes.find((a) => a.name === "NormalX") !== void 0 && i.attributes.find((a) => a.name === "NormalY") !== void 0 && i.attributes.find((a) => a.name === "NormalZ") !== void 0) {
      let a = {
        name: "NORMAL",
        attributes: ["NormalX", "NormalY", "NormalZ"]
      };
      i.addVector(a);
    }
    return i;
  }
  async load(e, i) {
    let t = await (await i(e)).json(), a = _.parseAttributes(t.attributes), f = new $(e, this.workerPool, t);
    f.attributes = a, f.scale = t.scale, f.offset = t.offset;
    let n = new U(f, new I(new x(...t.boundingBox.min), new x(...t.boundingBox.max)));
    n.url = e, n.spacing = t.spacing, n.scale = t.scale;
    let c = new x(...t.boundingBox.min), l = new x(...t.boundingBox.max), r = new I(c, l), s = c.clone();
    r.min.sub(s), r.max.sub(s), n.projection = t.projection, n.boundingBox = r, n.tightBoundingBox = r.clone(), n.boundingSphere = r.getBoundingSphere(new D()), n.tightBoundingSphere = r.getBoundingSphere(new D()), n.offset = s, n.pointAttributes = _.parseAttributes(t.attributes);
    let u = new k("r", n, r);
    return u.level = 0, u.nodeType = 2, u.hierarchyByteOffset = BigInt(0), u.hierarchyByteSize = BigInt(t.hierarchy.firstChunkSize), u.spacing = n.spacing, u.byteOffset = BigInt(0), n.root = u, f.load(u), {
      geometry: n
    };
  }
}
export {
  $ as NodeLoader,
  _ as OctreeLoader
};
//# sourceMappingURL=potree-loader.es30.js.map
