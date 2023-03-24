class s {
  constructor(r) {
    this.versionMinor = 0, this.version = r;
    const e = r.indexOf(".") === -1 ? r.length : r.indexOf(".");
    this.versionMajor = parseInt(r.substr(0, e), 10), this.versionMinor = parseInt(r.substr(e + 1), 10), isNaN(this.versionMinor) && (this.versionMinor = 0);
  }
  newerThan(r) {
    const e = new s(r);
    return this.versionMajor > e.versionMajor ? !0 : this.versionMajor === e.versionMajor && this.versionMinor > e.versionMinor;
  }
  equalOrHigher(r) {
    const e = new s(r);
    return this.versionMajor > e.versionMajor ? !0 : this.versionMajor === e.versionMajor && this.versionMinor >= e.versionMinor;
  }
  upTo(r) {
    return !this.newerThan(r);
  }
}
export {
  s as Version
};
//# sourceMappingURL=potree-loader.es4.js.map
