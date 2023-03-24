function l(e) {
  return parseInt(e.charAt(e.length - 1), 10);
}
function u(e, r) {
  const n = e.name, t = r.name;
  return n.length !== t.length ? n.length - t.length : n < t ? -1 : n > t ? 1 : 0;
}
export {
  u as byLevelAndIndex,
  l as getIndexFromName
};
//# sourceMappingURL=potree-loader.es39.js.map
