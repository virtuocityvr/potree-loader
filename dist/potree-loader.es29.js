class n {
  constructor(s) {
    this.node = s, this.next = null, this.previous = null;
  }
}
class r {
  constructor(s = 1e6) {
    this.pointBudget = s, this.first = null, this.last = null, this.numPoints = 0, this.items = /* @__PURE__ */ new Map();
  }
  get size() {
    return this.items.size;
  }
  has(s) {
    return this.items.has(s.id);
  }
  /**
   * Makes the specified the most recently used item. if the list does not contain node, it will
   * be added.
   */
  touch(s) {
    if (!s.loaded)
      return;
    const t = this.items.get(s.id);
    t ? this.touchExisting(t) : this.addNew(s);
  }
  addNew(s) {
    const t = new n(s);
    t.previous = this.last, this.last = t, t.previous && (t.previous.next = t), this.first || (this.first = t), this.items.set(s.id, t), this.numPoints += s.numPoints;
  }
  touchExisting(s) {
    s.previous ? s.next && (s.previous.next = s.next, s.next.previous = s.previous, s.previous = this.last, s.next = null, this.last = s, s.previous && (s.previous.next = s)) : s.next && (this.first = s.next, this.first.previous = null, s.previous = this.last, s.next = null, this.last = s, s.previous && (s.previous.next = s));
  }
  remove(s) {
    const t = this.items.get(s.id);
    t && (this.items.size === 1 ? (this.first = null, this.last = null) : (t.previous || (this.first = t.next, this.first.previous = null), t.next || (this.last = t.previous, this.last.next = null), t.previous && t.next && (t.previous.next = t.next, t.next.previous = t.previous)), this.items.delete(s.id), this.numPoints -= s.numPoints);
  }
  getLRUItem() {
    return this.first ? this.first.node : void 0;
  }
  freeMemory() {
    if (!(this.items.size <= 1))
      for (; this.numPoints > this.pointBudget * 2; ) {
        const s = this.getLRUItem();
        s && this.disposeSubtree(s);
      }
  }
  disposeSubtree(s) {
    const t = [s];
    s.traverse((i) => {
      i.loaded && t.push(i);
    });
    for (const i of t)
      i.dispose(), this.remove(i);
  }
}
export {
  r as LRU,
  n as LRUItem
};
//# sourceMappingURL=potree-loader.es29.js.map
