import R from "./potree-loader.es45.js";
import E from "./potree-loader.es46.js";
var s = /* @__PURE__ */ ((o) => (o.DECODER_WORKER_BROTLI = "DECODER_WORKER_BROTLI", o.DECODER_WORKER = "DECODER_WORKER", o))(s || {});
function n(o) {
  switch (o) {
    case "DECODER_WORKER_BROTLI":
      return new R();
    case "DECODER_WORKER":
      return new E();
    default:
      throw new Error("Unknown worker type");
  }
}
class i {
  constructor() {
    this.workers = { DECODER_WORKER: [], DECODER_WORKER_BROTLI: [] };
  }
  getWorker(r) {
    if (this.workers[r] === void 0)
      throw new Error("Unknown worker type");
    if (this.workers[r].length === 0) {
      let t = n(r);
      this.workers[r].push(t);
    }
    let e = this.workers[r].pop();
    if (e === void 0)
      throw new Error("No workers available");
    return e;
  }
  returnWorker(r, e) {
    this.workers[r].push(e);
  }
}
export {
  i as WorkerPool,
  s as WorkerType
};
//# sourceMappingURL=potree-loader.es34.js.map
