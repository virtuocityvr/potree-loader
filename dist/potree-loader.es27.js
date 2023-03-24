function l(t) {
  this.content = [], this.scoreFunction = t;
}
l.prototype = {
  push: function(t) {
    this.content.push(t), this.bubbleUp(this.content.length - 1);
  },
  pop: function() {
    var t = this.content[0], e = this.content.pop();
    return this.content.length > 0 && (this.content[0] = e, this.sinkDown(0)), t;
  },
  remove: function(t) {
    for (var e = this.content.length, n = 0; n < e; n++)
      if (this.content[n] == t) {
        var o = this.content.pop();
        if (n == e - 1)
          break;
        this.content[n] = o, this.bubbleUp(n), this.sinkDown(n);
        break;
      }
  },
  size: function() {
    return this.content.length;
  },
  bubbleUp: function(t) {
    for (var e = this.content[t], n = this.scoreFunction(e); t > 0; ) {
      var o = Math.floor((t + 1) / 2) - 1, i = this.content[o];
      if (n >= this.scoreFunction(i))
        break;
      this.content[o] = e, this.content[t] = i, t = o;
    }
  },
  sinkDown: function(t) {
    for (var e = this.content.length, n = this.content[t], o = this.scoreFunction(n); ; ) {
      var i = (t + 1) * 2, h = i - 1, s = null;
      if (h < e) {
        var r = this.content[h], c = this.scoreFunction(r);
        c < o && (s = h);
      }
      if (i < e) {
        var u = this.content[i], f = this.scoreFunction(u);
        f < (s == null ? o : c) && (s = i);
      }
      if (s == null)
        break;
      this.content[t] = this.content[s], this.content[s] = n, t = s;
    }
  }
};
export {
  l as BinaryHeap
};
//# sourceMappingURL=potree-loader.es27.js.map
