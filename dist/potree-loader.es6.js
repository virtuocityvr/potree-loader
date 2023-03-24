/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const Di = "149", le = 0, ue = 0, ce = 1, de = 2, me = 100, pe = 204, fe = 205, ye = 3, xe = 300, ge = 1e3, Me = 1001, be = 1002, we = 1003, ze = 1006, _e = 1008, Se = 1009, Ae = 1023, Fe = 3e3, J = "srgb", di = "srgb-linear", Te = 7680, Be = 519, Ce = 35044;
class _t {
  addEventListener(t, i) {
    this._listeners === void 0 && (this._listeners = {});
    const e = this._listeners;
    e[t] === void 0 && (e[t] = []), e[t].indexOf(i) === -1 && e[t].push(i);
  }
  hasEventListener(t, i) {
    if (this._listeners === void 0)
      return !1;
    const e = this._listeners;
    return e[t] !== void 0 && e[t].indexOf(i) !== -1;
  }
  removeEventListener(t, i) {
    if (this._listeners === void 0)
      return;
    const s = this._listeners[t];
    if (s !== void 0) {
      const n = s.indexOf(i);
      n !== -1 && s.splice(n, 1);
    }
  }
  dispatchEvent(t) {
    if (this._listeners === void 0)
      return;
    const e = this._listeners[t.type];
    if (e !== void 0) {
      t.target = this;
      const s = e.slice(0);
      for (let n = 0, r = s.length; n < r; n++)
        s[n].call(this, t);
      t.target = null;
    }
  }
}
const D = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
function St() {
  const p = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, i = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0;
  return (D[p & 255] + D[p >> 8 & 255] + D[p >> 16 & 255] + D[p >> 24 & 255] + "-" + D[t & 255] + D[t >> 8 & 255] + "-" + D[t >> 16 & 15 | 64] + D[t >> 24 & 255] + "-" + D[i & 63 | 128] + D[i >> 8 & 255] + "-" + D[i >> 16 & 255] + D[i >> 24 & 255] + D[e & 255] + D[e >> 8 & 255] + D[e >> 16 & 255] + D[e >> 24 & 255]).toLowerCase();
}
function W(p, t, i) {
  return Math.max(t, Math.min(i, p));
}
function Ni(p, t) {
  return (p % t + t) % t;
}
function $t(p, t, i) {
  return (1 - i) * p + i * t;
}
function Rt(p, t) {
  switch (t.constructor) {
    case Float32Array:
      return p;
    case Uint16Array:
      return p / 65535;
    case Uint8Array:
      return p / 255;
    case Int16Array:
      return Math.max(p / 32767, -1);
    case Int8Array:
      return Math.max(p / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function P(p, t) {
  switch (t.constructor) {
    case Float32Array:
      return p;
    case Uint16Array:
      return Math.round(p * 65535);
    case Uint8Array:
      return Math.round(p * 255);
    case Int16Array:
      return Math.round(p * 32767);
    case Int8Array:
      return Math.round(p * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
class G {
  constructor(t = 0, i = 0) {
    G.prototype.isVector2 = !0, this.x = t, this.y = i;
  }
  get width() {
    return this.x;
  }
  set width(t) {
    this.x = t;
  }
  get height() {
    return this.y;
  }
  set height(t) {
    this.y = t;
  }
  set(t, i) {
    return this.x = t, this.y = i, this;
  }
  setScalar(t) {
    return this.x = t, this.y = t, this;
  }
  setX(t) {
    return this.x = t, this;
  }
  setY(t) {
    return this.y = t, this;
  }
  setComponent(t, i) {
    switch (t) {
      case 0:
        this.x = i;
        break;
      case 1:
        this.y = i;
        break;
      default:
        throw new Error("index is out of range: " + t);
    }
    return this;
  }
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + t);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(t) {
    return this.x = t.x, this.y = t.y, this;
  }
  add(t) {
    return this.x += t.x, this.y += t.y, this;
  }
  addScalar(t) {
    return this.x += t, this.y += t, this;
  }
  addVectors(t, i) {
    return this.x = t.x + i.x, this.y = t.y + i.y, this;
  }
  addScaledVector(t, i) {
    return this.x += t.x * i, this.y += t.y * i, this;
  }
  sub(t) {
    return this.x -= t.x, this.y -= t.y, this;
  }
  subScalar(t) {
    return this.x -= t, this.y -= t, this;
  }
  subVectors(t, i) {
    return this.x = t.x - i.x, this.y = t.y - i.y, this;
  }
  multiply(t) {
    return this.x *= t.x, this.y *= t.y, this;
  }
  multiplyScalar(t) {
    return this.x *= t, this.y *= t, this;
  }
  divide(t) {
    return this.x /= t.x, this.y /= t.y, this;
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  applyMatrix3(t) {
    const i = this.x, e = this.y, s = t.elements;
    return this.x = s[0] * i + s[3] * e + s[6], this.y = s[1] * i + s[4] * e + s[7], this;
  }
  min(t) {
    return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this;
  }
  max(t) {
    return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this;
  }
  clamp(t, i) {
    return this.x = Math.max(t.x, Math.min(i.x, this.x)), this.y = Math.max(t.y, Math.min(i.y, this.y)), this;
  }
  clampScalar(t, i) {
    return this.x = Math.max(t, Math.min(i, this.x)), this.y = Math.max(t, Math.min(i, this.y)), this;
  }
  clampLength(t, i) {
    const e = this.length();
    return this.divideScalar(e || 1).multiplyScalar(Math.max(t, Math.min(i, e)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  roundToZero() {
    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  dot(t) {
    return this.x * t.x + this.y * t.y;
  }
  cross(t) {
    return this.x * t.y - this.y * t.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  distanceTo(t) {
    return Math.sqrt(this.distanceToSquared(t));
  }
  distanceToSquared(t) {
    const i = this.x - t.x, e = this.y - t.y;
    return i * i + e * e;
  }
  manhattanDistanceTo(t) {
    return Math.abs(this.x - t.x) + Math.abs(this.y - t.y);
  }
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, i) {
    return this.x += (t.x - this.x) * i, this.y += (t.y - this.y) * i, this;
  }
  lerpVectors(t, i, e) {
    return this.x = t.x + (i.x - t.x) * e, this.y = t.y + (i.y - t.y) * e, this;
  }
  equals(t) {
    return t.x === this.x && t.y === this.y;
  }
  fromArray(t, i = 0) {
    return this.x = t[i], this.y = t[i + 1], this;
  }
  toArray(t = [], i = 0) {
    return t[i] = this.x, t[i + 1] = this.y, t;
  }
  fromBufferAttribute(t, i) {
    return this.x = t.getX(i), this.y = t.getY(i), this;
  }
  rotateAround(t, i) {
    const e = Math.cos(i), s = Math.sin(i), n = this.x - t.x, r = this.y - t.y;
    return this.x = n * e - r * s + t.x, this.y = n * s + r * e + t.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class lt {
  constructor() {
    lt.prototype.isMatrix3 = !0, this.elements = [
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ];
  }
  set(t, i, e, s, n, r, h, a, o) {
    const l = this.elements;
    return l[0] = t, l[1] = s, l[2] = h, l[3] = i, l[4] = n, l[5] = a, l[6] = e, l[7] = r, l[8] = o, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ), this;
  }
  copy(t) {
    const i = this.elements, e = t.elements;
    return i[0] = e[0], i[1] = e[1], i[2] = e[2], i[3] = e[3], i[4] = e[4], i[5] = e[5], i[6] = e[6], i[7] = e[7], i[8] = e[8], this;
  }
  extractBasis(t, i, e) {
    return t.setFromMatrix3Column(this, 0), i.setFromMatrix3Column(this, 1), e.setFromMatrix3Column(this, 2), this;
  }
  setFromMatrix4(t) {
    const i = t.elements;
    return this.set(
      i[0],
      i[4],
      i[8],
      i[1],
      i[5],
      i[9],
      i[2],
      i[6],
      i[10]
    ), this;
  }
  multiply(t) {
    return this.multiplyMatrices(this, t);
  }
  premultiply(t) {
    return this.multiplyMatrices(t, this);
  }
  multiplyMatrices(t, i) {
    const e = t.elements, s = i.elements, n = this.elements, r = e[0], h = e[3], a = e[6], o = e[1], l = e[4], u = e[7], c = e[2], d = e[5], m = e[8], f = s[0], x = s[3], g = s[6], z = s[1], M = s[4], _ = s[7], b = s[2], S = s[5], w = s[8];
    return n[0] = r * f + h * z + a * b, n[3] = r * x + h * M + a * S, n[6] = r * g + h * _ + a * w, n[1] = o * f + l * z + u * b, n[4] = o * x + l * M + u * S, n[7] = o * g + l * _ + u * w, n[2] = c * f + d * z + m * b, n[5] = c * x + d * M + m * S, n[8] = c * g + d * _ + m * w, this;
  }
  multiplyScalar(t) {
    const i = this.elements;
    return i[0] *= t, i[3] *= t, i[6] *= t, i[1] *= t, i[4] *= t, i[7] *= t, i[2] *= t, i[5] *= t, i[8] *= t, this;
  }
  determinant() {
    const t = this.elements, i = t[0], e = t[1], s = t[2], n = t[3], r = t[4], h = t[5], a = t[6], o = t[7], l = t[8];
    return i * r * l - i * h * o - e * n * l + e * h * a + s * n * o - s * r * a;
  }
  invert() {
    const t = this.elements, i = t[0], e = t[1], s = t[2], n = t[3], r = t[4], h = t[5], a = t[6], o = t[7], l = t[8], u = l * r - h * o, c = h * a - l * n, d = o * n - r * a, m = i * u + e * c + s * d;
    if (m === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const f = 1 / m;
    return t[0] = u * f, t[1] = (s * o - l * e) * f, t[2] = (h * e - s * r) * f, t[3] = c * f, t[4] = (l * i - s * a) * f, t[5] = (s * n - h * i) * f, t[6] = d * f, t[7] = (e * a - o * i) * f, t[8] = (r * i - e * n) * f, this;
  }
  transpose() {
    let t;
    const i = this.elements;
    return t = i[1], i[1] = i[3], i[3] = t, t = i[2], i[2] = i[6], i[6] = t, t = i[5], i[5] = i[7], i[7] = t, this;
  }
  getNormalMatrix(t) {
    return this.setFromMatrix4(t).invert().transpose();
  }
  transposeIntoArray(t) {
    const i = this.elements;
    return t[0] = i[0], t[1] = i[3], t[2] = i[6], t[3] = i[1], t[4] = i[4], t[5] = i[7], t[6] = i[2], t[7] = i[5], t[8] = i[8], this;
  }
  setUvTransform(t, i, e, s, n, r, h) {
    const a = Math.cos(n), o = Math.sin(n);
    return this.set(
      e * a,
      e * o,
      -e * (a * r + o * h) + r + t,
      -s * o,
      s * a,
      -s * (-o * r + a * h) + h + i,
      0,
      0,
      1
    ), this;
  }
  //
  scale(t, i) {
    return this.premultiply(Qt.makeScale(t, i)), this;
  }
  rotate(t) {
    return this.premultiply(Qt.makeRotation(-t)), this;
  }
  translate(t, i) {
    return this.premultiply(Qt.makeTranslation(t, i)), this;
  }
  // for 2D Transforms
  makeTranslation(t, i) {
    return this.set(
      1,
      0,
      t,
      0,
      1,
      i,
      0,
      0,
      1
    ), this;
  }
  makeRotation(t) {
    const i = Math.cos(t), e = Math.sin(t);
    return this.set(
      i,
      -e,
      0,
      e,
      i,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(t, i) {
    return this.set(
      t,
      0,
      0,
      0,
      i,
      0,
      0,
      0,
      1
    ), this;
  }
  //
  equals(t) {
    const i = this.elements, e = t.elements;
    for (let s = 0; s < 9; s++)
      if (i[s] !== e[s])
        return !1;
    return !0;
  }
  fromArray(t, i = 0) {
    for (let e = 0; e < 9; e++)
      this.elements[e] = t[e + i];
    return this;
  }
  toArray(t = [], i = 0) {
    const e = this.elements;
    return t[i] = e[0], t[i + 1] = e[1], t[i + 2] = e[2], t[i + 3] = e[3], t[i + 4] = e[4], t[i + 5] = e[5], t[i + 6] = e[6], t[i + 7] = e[7], t[i + 8] = e[8], t;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const Qt = /* @__PURE__ */ new lt();
function Li(p) {
  for (let t = p.length - 1; t >= 0; --t)
    if (p[t] >= 65535)
      return !0;
  return !1;
}
function xi(p) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", p);
}
function at(p) {
  return p < 0.04045 ? p * 0.0773993808 : Math.pow(p * 0.9478672986 + 0.0521327014, 2.4);
}
function Yt(p) {
  return p < 31308e-7 ? p * 12.92 : 1.055 * Math.pow(p, 0.41666) - 0.055;
}
const Kt = {
  [J]: { [di]: at },
  [di]: { [J]: Yt }
}, O = {
  legacyMode: !0,
  get workingColorSpace() {
    return di;
  },
  set workingColorSpace(p) {
    console.warn("THREE.ColorManagement: .workingColorSpace is readonly.");
  },
  convert: function(p, t, i) {
    if (this.legacyMode || t === i || !t || !i)
      return p;
    if (Kt[t] && Kt[t][i] !== void 0) {
      const e = Kt[t][i];
      return p.r = e(p.r), p.g = e(p.g), p.b = e(p.b), p;
    }
    throw new Error("Unsupported color space conversion.");
  },
  fromWorkingColorSpace: function(p, t) {
    return this.convert(p, this.workingColorSpace, t);
  },
  toWorkingColorSpace: function(p, t) {
    return this.convert(p, t, this.workingColorSpace);
  }
}, Oi = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
}, T = { r: 0, g: 0, b: 0 }, v = { h: 0, s: 0, l: 0 }, Dt = { h: 0, s: 0, l: 0 };
function ti(p, t, i) {
  return i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6 ? p + (t - p) * 6 * i : i < 1 / 2 ? t : i < 2 / 3 ? p + (t - p) * 6 * (2 / 3 - i) : p;
}
function Ot(p, t) {
  return t.r = p.r, t.g = p.g, t.b = p.b, t;
}
class pi {
  constructor(t, i, e) {
    return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, i === void 0 && e === void 0 ? this.set(t) : this.setRGB(t, i, e);
  }
  set(t) {
    return t && t.isColor ? this.copy(t) : typeof t == "number" ? this.setHex(t) : typeof t == "string" && this.setStyle(t), this;
  }
  setScalar(t) {
    return this.r = t, this.g = t, this.b = t, this;
  }
  setHex(t, i = J) {
    return t = Math.floor(t), this.r = (t >> 16 & 255) / 255, this.g = (t >> 8 & 255) / 255, this.b = (t & 255) / 255, O.toWorkingColorSpace(this, i), this;
  }
  setRGB(t, i, e, s = O.workingColorSpace) {
    return this.r = t, this.g = i, this.b = e, O.toWorkingColorSpace(this, s), this;
  }
  setHSL(t, i, e, s = O.workingColorSpace) {
    if (t = Ni(t, 1), i = W(i, 0, 1), e = W(e, 0, 1), i === 0)
      this.r = this.g = this.b = e;
    else {
      const n = e <= 0.5 ? e * (1 + i) : e + i - e * i, r = 2 * e - n;
      this.r = ti(r, n, t + 1 / 3), this.g = ti(r, n, t), this.b = ti(r, n, t - 1 / 3);
    }
    return O.toWorkingColorSpace(this, s), this;
  }
  setStyle(t, i = J) {
    function e(n) {
      n !== void 0 && parseFloat(n) < 1 && console.warn("THREE.Color: Alpha component of " + t + " will be ignored.");
    }
    let s;
    if (s = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)) {
      let n;
      const r = s[1], h = s[2];
      switch (r) {
        case "rgb":
        case "rgba":
          if (n = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))
            return this.r = Math.min(255, parseInt(n[1], 10)) / 255, this.g = Math.min(255, parseInt(n[2], 10)) / 255, this.b = Math.min(255, parseInt(n[3], 10)) / 255, O.toWorkingColorSpace(this, i), e(n[4]), this;
          if (n = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))
            return this.r = Math.min(100, parseInt(n[1], 10)) / 100, this.g = Math.min(100, parseInt(n[2], 10)) / 100, this.b = Math.min(100, parseInt(n[3], 10)) / 100, O.toWorkingColorSpace(this, i), e(n[4]), this;
          break;
        case "hsl":
        case "hsla":
          if (n = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h)) {
            const a = parseFloat(n[1]) / 360, o = parseFloat(n[2]) / 100, l = parseFloat(n[3]) / 100;
            return e(n[4]), this.setHSL(a, o, l, i);
          }
          break;
      }
    } else if (s = /^\#([A-Fa-f\d]+)$/.exec(t)) {
      const n = s[1], r = n.length;
      if (r === 3)
        return this.r = parseInt(n.charAt(0) + n.charAt(0), 16) / 255, this.g = parseInt(n.charAt(1) + n.charAt(1), 16) / 255, this.b = parseInt(n.charAt(2) + n.charAt(2), 16) / 255, O.toWorkingColorSpace(this, i), this;
      if (r === 6)
        return this.r = parseInt(n.charAt(0) + n.charAt(1), 16) / 255, this.g = parseInt(n.charAt(2) + n.charAt(3), 16) / 255, this.b = parseInt(n.charAt(4) + n.charAt(5), 16) / 255, O.toWorkingColorSpace(this, i), this;
    }
    return t && t.length > 0 ? this.setColorName(t, i) : this;
  }
  setColorName(t, i = J) {
    const e = Oi[t.toLowerCase()];
    return e !== void 0 ? this.setHex(e, i) : console.warn("THREE.Color: Unknown color " + t), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(t) {
    return this.r = t.r, this.g = t.g, this.b = t.b, this;
  }
  copySRGBToLinear(t) {
    return this.r = at(t.r), this.g = at(t.g), this.b = at(t.b), this;
  }
  copyLinearToSRGB(t) {
    return this.r = Yt(t.r), this.g = Yt(t.g), this.b = Yt(t.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(t = J) {
    return O.fromWorkingColorSpace(Ot(this, T), t), W(T.r * 255, 0, 255) << 16 ^ W(T.g * 255, 0, 255) << 8 ^ W(T.b * 255, 0, 255) << 0;
  }
  getHexString(t = J) {
    return ("000000" + this.getHex(t).toString(16)).slice(-6);
  }
  getHSL(t, i = O.workingColorSpace) {
    O.fromWorkingColorSpace(Ot(this, T), i);
    const e = T.r, s = T.g, n = T.b, r = Math.max(e, s, n), h = Math.min(e, s, n);
    let a, o;
    const l = (h + r) / 2;
    if (h === r)
      a = 0, o = 0;
    else {
      const u = r - h;
      switch (o = l <= 0.5 ? u / (r + h) : u / (2 - r - h), r) {
        case e:
          a = (s - n) / u + (s < n ? 6 : 0);
          break;
        case s:
          a = (n - e) / u + 2;
          break;
        case n:
          a = (e - s) / u + 4;
          break;
      }
      a /= 6;
    }
    return t.h = a, t.s = o, t.l = l, t;
  }
  getRGB(t, i = O.workingColorSpace) {
    return O.fromWorkingColorSpace(Ot(this, T), i), t.r = T.r, t.g = T.g, t.b = T.b, t;
  }
  getStyle(t = J) {
    return O.fromWorkingColorSpace(Ot(this, T), t), t !== J ? `color(${t} ${T.r} ${T.g} ${T.b})` : `rgb(${T.r * 255 | 0},${T.g * 255 | 0},${T.b * 255 | 0})`;
  }
  offsetHSL(t, i, e) {
    return this.getHSL(v), v.h += t, v.s += i, v.l += e, this.setHSL(v.h, v.s, v.l), this;
  }
  add(t) {
    return this.r += t.r, this.g += t.g, this.b += t.b, this;
  }
  addColors(t, i) {
    return this.r = t.r + i.r, this.g = t.g + i.g, this.b = t.b + i.b, this;
  }
  addScalar(t) {
    return this.r += t, this.g += t, this.b += t, this;
  }
  sub(t) {
    return this.r = Math.max(0, this.r - t.r), this.g = Math.max(0, this.g - t.g), this.b = Math.max(0, this.b - t.b), this;
  }
  multiply(t) {
    return this.r *= t.r, this.g *= t.g, this.b *= t.b, this;
  }
  multiplyScalar(t) {
    return this.r *= t, this.g *= t, this.b *= t, this;
  }
  lerp(t, i) {
    return this.r += (t.r - this.r) * i, this.g += (t.g - this.g) * i, this.b += (t.b - this.b) * i, this;
  }
  lerpColors(t, i, e) {
    return this.r = t.r + (i.r - t.r) * e, this.g = t.g + (i.g - t.g) * e, this.b = t.b + (i.b - t.b) * e, this;
  }
  lerpHSL(t, i) {
    this.getHSL(v), t.getHSL(Dt);
    const e = $t(v.h, Dt.h, i), s = $t(v.s, Dt.s, i), n = $t(v.l, Dt.l, i);
    return this.setHSL(e, s, n), this;
  }
  equals(t) {
    return t.r === this.r && t.g === this.g && t.b === this.b;
  }
  fromArray(t, i = 0) {
    return this.r = t[i], this.g = t[i + 1], this.b = t[i + 2], this;
  }
  toArray(t = [], i = 0) {
    return t[i] = this.r, t[i + 1] = this.g, t[i + 2] = this.b, t;
  }
  fromBufferAttribute(t, i) {
    return this.r = t.getX(i), this.g = t.getY(i), this.b = t.getZ(i), this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
pi.NAMES = Oi;
let ut;
class Wi {
  static getDataURL(t) {
    if (/^data:/i.test(t.src) || typeof HTMLCanvasElement > "u")
      return t.src;
    let i;
    if (t instanceof HTMLCanvasElement)
      i = t;
    else {
      ut === void 0 && (ut = xi("canvas")), ut.width = t.width, ut.height = t.height;
      const e = ut.getContext("2d");
      t instanceof ImageData ? e.putImageData(t, 0, 0) : e.drawImage(t, 0, 0, t.width, t.height), i = ut;
    }
    return i.width > 2048 || i.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", t), i.toDataURL("image/jpeg", 0.6)) : i.toDataURL("image/png");
  }
  static sRGBToLinear(t) {
    if (typeof HTMLImageElement < "u" && t instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && t instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && t instanceof ImageBitmap) {
      const i = xi("canvas");
      i.width = t.width, i.height = t.height;
      const e = i.getContext("2d");
      e.drawImage(t, 0, 0, t.width, t.height);
      const s = e.getImageData(0, 0, t.width, t.height), n = s.data;
      for (let r = 0; r < n.length; r++)
        n[r] = at(n[r] / 255) * 255;
      return e.putImageData(s, 0, 0), i;
    } else if (t.data) {
      const i = t.data.slice(0);
      for (let e = 0; e < i.length; e++)
        i instanceof Uint8Array || i instanceof Uint8ClampedArray ? i[e] = Math.floor(at(i[e] / 255) * 255) : i[e] = at(i[e]);
      return {
        data: i,
        width: t.width,
        height: t.height
      };
    } else
      return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), t;
  }
}
class Ii {
  constructor(t = null) {
    this.isSource = !0, this.uuid = St(), this.data = t, this.version = 0;
  }
  set needsUpdate(t) {
    t === !0 && this.version++;
  }
  toJSON(t) {
    const i = t === void 0 || typeof t == "string";
    if (!i && t.images[this.uuid] !== void 0)
      return t.images[this.uuid];
    const e = {
      uuid: this.uuid,
      url: ""
    }, s = this.data;
    if (s !== null) {
      let n;
      if (Array.isArray(s)) {
        n = [];
        for (let r = 0, h = s.length; r < h; r++)
          s[r].isDataTexture ? n.push(ii(s[r].image)) : n.push(ii(s[r]));
      } else
        n = ii(s);
      e.url = n;
    }
    return i || (t.images[this.uuid] = e), e;
  }
}
function ii(p) {
  return typeof HTMLImageElement < "u" && p instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && p instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && p instanceof ImageBitmap ? Wi.getDataURL(p) : p.data ? {
    data: Array.from(p.data),
    width: p.width,
    height: p.height,
    type: p.data.constructor.name
  } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let qi = 0;
class X extends _t {
  constructor(t = X.DEFAULT_IMAGE, i = X.DEFAULT_MAPPING, e = 1001, s = 1001, n = 1006, r = 1008, h = 1023, a = 1009, o = X.DEFAULT_ANISOTROPY, l = 3e3) {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: qi++ }), this.uuid = St(), this.name = "", this.source = new Ii(t), this.mipmaps = [], this.mapping = i, this.wrapS = e, this.wrapT = s, this.magFilter = n, this.minFilter = r, this.anisotropy = o, this.format = h, this.internalFormat = null, this.type = a, this.offset = new G(0, 0), this.repeat = new G(1, 1), this.center = new G(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new lt(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = l, this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.needsPMREMUpdate = !1;
  }
  get image() {
    return this.source.data;
  }
  set image(t) {
    this.source.data = t;
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return this.name = t.name, this.source = t.source, this.mipmaps = t.mipmaps.slice(0), this.mapping = t.mapping, this.wrapS = t.wrapS, this.wrapT = t.wrapT, this.magFilter = t.magFilter, this.minFilter = t.minFilter, this.anisotropy = t.anisotropy, this.format = t.format, this.internalFormat = t.internalFormat, this.type = t.type, this.offset.copy(t.offset), this.repeat.copy(t.repeat), this.center.copy(t.center), this.rotation = t.rotation, this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrix.copy(t.matrix), this.generateMipmaps = t.generateMipmaps, this.premultiplyAlpha = t.premultiplyAlpha, this.flipY = t.flipY, this.unpackAlignment = t.unpackAlignment, this.encoding = t.encoding, this.userData = JSON.parse(JSON.stringify(t.userData)), this.needsUpdate = !0, this;
  }
  toJSON(t) {
    const i = t === void 0 || typeof t == "string";
    if (!i && t.textures[this.uuid] !== void 0)
      return t.textures[this.uuid];
    const e = {
      metadata: {
        version: 4.5,
        type: "Texture",
        generator: "Texture.toJSON"
      },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(t).uuid,
      mapping: this.mapping,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      type: this.type,
      encoding: this.encoding,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment
    };
    return Object.keys(this.userData).length > 0 && (e.userData = this.userData), i || (t.textures[this.uuid] = e), e;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(t) {
    if (this.mapping !== 300)
      return t;
    if (t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1)
      switch (this.wrapS) {
        case 1e3:
          t.x = t.x - Math.floor(t.x);
          break;
        case 1001:
          t.x = t.x < 0 ? 0 : 1;
          break;
        case 1002:
          Math.abs(Math.floor(t.x) % 2) === 1 ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x);
          break;
      }
    if (t.y < 0 || t.y > 1)
      switch (this.wrapT) {
        case 1e3:
          t.y = t.y - Math.floor(t.y);
          break;
        case 1001:
          t.y = t.y < 0 ? 0 : 1;
          break;
        case 1002:
          Math.abs(Math.floor(t.y) % 2) === 1 ? t.y = Math.ceil(t.y) - t.y : t.y = t.y - Math.floor(t.y);
          break;
      }
    return this.flipY && (t.y = 1 - t.y), t;
  }
  set needsUpdate(t) {
    t === !0 && (this.version++, this.source.needsUpdate = !0);
  }
}
X.DEFAULT_IMAGE = null;
X.DEFAULT_MAPPING = 300;
X.DEFAULT_ANISOTROPY = 1;
class Zt {
  constructor(t = 0, i = 0, e = 0, s = 1) {
    Zt.prototype.isVector4 = !0, this.x = t, this.y = i, this.z = e, this.w = s;
  }
  get width() {
    return this.z;
  }
  set width(t) {
    this.z = t;
  }
  get height() {
    return this.w;
  }
  set height(t) {
    this.w = t;
  }
  set(t, i, e, s) {
    return this.x = t, this.y = i, this.z = e, this.w = s, this;
  }
  setScalar(t) {
    return this.x = t, this.y = t, this.z = t, this.w = t, this;
  }
  setX(t) {
    return this.x = t, this;
  }
  setY(t) {
    return this.y = t, this;
  }
  setZ(t) {
    return this.z = t, this;
  }
  setW(t) {
    return this.w = t, this;
  }
  setComponent(t, i) {
    switch (t) {
      case 0:
        this.x = i;
        break;
      case 1:
        this.y = i;
        break;
      case 2:
        this.z = i;
        break;
      case 3:
        this.w = i;
        break;
      default:
        throw new Error("index is out of range: " + t);
    }
    return this;
  }
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + t);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(t) {
    return this.x = t.x, this.y = t.y, this.z = t.z, this.w = t.w !== void 0 ? t.w : 1, this;
  }
  add(t) {
    return this.x += t.x, this.y += t.y, this.z += t.z, this.w += t.w, this;
  }
  addScalar(t) {
    return this.x += t, this.y += t, this.z += t, this.w += t, this;
  }
  addVectors(t, i) {
    return this.x = t.x + i.x, this.y = t.y + i.y, this.z = t.z + i.z, this.w = t.w + i.w, this;
  }
  addScaledVector(t, i) {
    return this.x += t.x * i, this.y += t.y * i, this.z += t.z * i, this.w += t.w * i, this;
  }
  sub(t) {
    return this.x -= t.x, this.y -= t.y, this.z -= t.z, this.w -= t.w, this;
  }
  subScalar(t) {
    return this.x -= t, this.y -= t, this.z -= t, this.w -= t, this;
  }
  subVectors(t, i) {
    return this.x = t.x - i.x, this.y = t.y - i.y, this.z = t.z - i.z, this.w = t.w - i.w, this;
  }
  multiply(t) {
    return this.x *= t.x, this.y *= t.y, this.z *= t.z, this.w *= t.w, this;
  }
  multiplyScalar(t) {
    return this.x *= t, this.y *= t, this.z *= t, this.w *= t, this;
  }
  applyMatrix4(t) {
    const i = this.x, e = this.y, s = this.z, n = this.w, r = t.elements;
    return this.x = r[0] * i + r[4] * e + r[8] * s + r[12] * n, this.y = r[1] * i + r[5] * e + r[9] * s + r[13] * n, this.z = r[2] * i + r[6] * e + r[10] * s + r[14] * n, this.w = r[3] * i + r[7] * e + r[11] * s + r[15] * n, this;
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  setAxisAngleFromQuaternion(t) {
    this.w = 2 * Math.acos(t.w);
    const i = Math.sqrt(1 - t.w * t.w);
    return i < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = t.x / i, this.y = t.y / i, this.z = t.z / i), this;
  }
  setAxisAngleFromRotationMatrix(t) {
    let i, e, s, n;
    const a = t.elements, o = a[0], l = a[4], u = a[8], c = a[1], d = a[5], m = a[9], f = a[2], x = a[6], g = a[10];
    if (Math.abs(l - c) < 0.01 && Math.abs(u - f) < 0.01 && Math.abs(m - x) < 0.01) {
      if (Math.abs(l + c) < 0.1 && Math.abs(u + f) < 0.1 && Math.abs(m + x) < 0.1 && Math.abs(o + d + g - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      i = Math.PI;
      const M = (o + 1) / 2, _ = (d + 1) / 2, b = (g + 1) / 2, S = (l + c) / 4, w = (u + f) / 4, I = (m + x) / 4;
      return M > _ && M > b ? M < 0.01 ? (e = 0, s = 0.707106781, n = 0.707106781) : (e = Math.sqrt(M), s = S / e, n = w / e) : _ > b ? _ < 0.01 ? (e = 0.707106781, s = 0, n = 0.707106781) : (s = Math.sqrt(_), e = S / s, n = I / s) : b < 0.01 ? (e = 0.707106781, s = 0.707106781, n = 0) : (n = Math.sqrt(b), e = w / n, s = I / n), this.set(e, s, n, i), this;
    }
    let z = Math.sqrt((x - m) * (x - m) + (u - f) * (u - f) + (c - l) * (c - l));
    return Math.abs(z) < 1e-3 && (z = 1), this.x = (x - m) / z, this.y = (u - f) / z, this.z = (c - l) / z, this.w = Math.acos((o + d + g - 1) / 2), this;
  }
  min(t) {
    return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this.w = Math.min(this.w, t.w), this;
  }
  max(t) {
    return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this.w = Math.max(this.w, t.w), this;
  }
  clamp(t, i) {
    return this.x = Math.max(t.x, Math.min(i.x, this.x)), this.y = Math.max(t.y, Math.min(i.y, this.y)), this.z = Math.max(t.z, Math.min(i.z, this.z)), this.w = Math.max(t.w, Math.min(i.w, this.w)), this;
  }
  clampScalar(t, i) {
    return this.x = Math.max(t, Math.min(i, this.x)), this.y = Math.max(t, Math.min(i, this.y)), this.z = Math.max(t, Math.min(i, this.z)), this.w = Math.max(t, Math.min(i, this.w)), this;
  }
  clampLength(t, i) {
    const e = this.length();
    return this.divideScalar(e || 1).multiplyScalar(Math.max(t, Math.min(i, e)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
  }
  roundToZero() {
    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
  }
  dot(t) {
    return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, i) {
    return this.x += (t.x - this.x) * i, this.y += (t.y - this.y) * i, this.z += (t.z - this.z) * i, this.w += (t.w - this.w) * i, this;
  }
  lerpVectors(t, i, e) {
    return this.x = t.x + (i.x - t.x) * e, this.y = t.y + (i.y - t.y) * e, this.z = t.z + (i.z - t.z) * e, this.w = t.w + (i.w - t.w) * e, this;
  }
  equals(t) {
    return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w;
  }
  fromArray(t, i = 0) {
    return this.x = t[i], this.y = t[i + 1], this.z = t[i + 2], this.w = t[i + 3], this;
  }
  toArray(t = [], i = 0) {
    return t[i] = this.x, t[i + 1] = this.y, t[i + 2] = this.z, t[i + 3] = this.w, t;
  }
  fromBufferAttribute(t, i) {
    return this.x = t.getX(i), this.y = t.getY(i), this.z = t.getZ(i), this.w = t.getW(i), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class ke extends _t {
  constructor(t = 1, i = 1, e = {}) {
    super(), this.isWebGLRenderTarget = !0, this.width = t, this.height = i, this.depth = 1, this.scissor = new Zt(0, 0, t, i), this.scissorTest = !1, this.viewport = new Zt(0, 0, t, i);
    const s = { width: t, height: i, depth: 1 };
    this.texture = new X(s, e.mapping, e.wrapS, e.wrapT, e.magFilter, e.minFilter, e.format, e.type, e.anisotropy, e.encoding), this.texture.isRenderTargetTexture = !0, this.texture.flipY = !1, this.texture.generateMipmaps = e.generateMipmaps !== void 0 ? e.generateMipmaps : !1, this.texture.internalFormat = e.internalFormat !== void 0 ? e.internalFormat : null, this.texture.minFilter = e.minFilter !== void 0 ? e.minFilter : 1006, this.depthBuffer = e.depthBuffer !== void 0 ? e.depthBuffer : !0, this.stencilBuffer = e.stencilBuffer !== void 0 ? e.stencilBuffer : !1, this.depthTexture = e.depthTexture !== void 0 ? e.depthTexture : null, this.samples = e.samples !== void 0 ? e.samples : 0;
  }
  setSize(t, i, e = 1) {
    (this.width !== t || this.height !== i || this.depth !== e) && (this.width = t, this.height = i, this.depth = e, this.texture.image.width = t, this.texture.image.height = i, this.texture.image.depth = e, this.dispose()), this.viewport.set(0, 0, t, i), this.scissor.set(0, 0, t, i);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    this.width = t.width, this.height = t.height, this.depth = t.depth, this.viewport.copy(t.viewport), this.texture = t.texture.clone(), this.texture.isRenderTargetTexture = !0;
    const i = Object.assign({}, t.texture.image);
    return this.texture.source = new Ii(i), this.depthBuffer = t.depthBuffer, this.stencilBuffer = t.stencilBuffer, t.depthTexture !== null && (this.depthTexture = t.depthTexture.clone()), this.samples = t.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class At {
  constructor(t = 0, i = 0, e = 0, s = 1) {
    this.isQuaternion = !0, this._x = t, this._y = i, this._z = e, this._w = s;
  }
  static slerpFlat(t, i, e, s, n, r, h) {
    let a = e[s + 0], o = e[s + 1], l = e[s + 2], u = e[s + 3];
    const c = n[r + 0], d = n[r + 1], m = n[r + 2], f = n[r + 3];
    if (h === 0) {
      t[i + 0] = a, t[i + 1] = o, t[i + 2] = l, t[i + 3] = u;
      return;
    }
    if (h === 1) {
      t[i + 0] = c, t[i + 1] = d, t[i + 2] = m, t[i + 3] = f;
      return;
    }
    if (u !== f || a !== c || o !== d || l !== m) {
      let x = 1 - h;
      const g = a * c + o * d + l * m + u * f, z = g >= 0 ? 1 : -1, M = 1 - g * g;
      if (M > Number.EPSILON) {
        const b = Math.sqrt(M), S = Math.atan2(b, g * z);
        x = Math.sin(x * S) / b, h = Math.sin(h * S) / b;
      }
      const _ = h * z;
      if (a = a * x + c * _, o = o * x + d * _, l = l * x + m * _, u = u * x + f * _, x === 1 - h) {
        const b = 1 / Math.sqrt(a * a + o * o + l * l + u * u);
        a *= b, o *= b, l *= b, u *= b;
      }
    }
    t[i] = a, t[i + 1] = o, t[i + 2] = l, t[i + 3] = u;
  }
  static multiplyQuaternionsFlat(t, i, e, s, n, r) {
    const h = e[s], a = e[s + 1], o = e[s + 2], l = e[s + 3], u = n[r], c = n[r + 1], d = n[r + 2], m = n[r + 3];
    return t[i] = h * m + l * u + a * d - o * c, t[i + 1] = a * m + l * c + o * u - h * d, t[i + 2] = o * m + l * d + h * c - a * u, t[i + 3] = l * m - h * u - a * c - o * d, t;
  }
  get x() {
    return this._x;
  }
  set x(t) {
    this._x = t, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(t) {
    this._y = t, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(t) {
    this._z = t, this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(t) {
    this._w = t, this._onChangeCallback();
  }
  set(t, i, e, s) {
    return this._x = t, this._y = i, this._z = e, this._w = s, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(t) {
    return this._x = t.x, this._y = t.y, this._z = t.z, this._w = t.w, this._onChangeCallback(), this;
  }
  setFromEuler(t, i) {
    const e = t._x, s = t._y, n = t._z, r = t._order, h = Math.cos, a = Math.sin, o = h(e / 2), l = h(s / 2), u = h(n / 2), c = a(e / 2), d = a(s / 2), m = a(n / 2);
    switch (r) {
      case "XYZ":
        this._x = c * l * u + o * d * m, this._y = o * d * u - c * l * m, this._z = o * l * m + c * d * u, this._w = o * l * u - c * d * m;
        break;
      case "YXZ":
        this._x = c * l * u + o * d * m, this._y = o * d * u - c * l * m, this._z = o * l * m - c * d * u, this._w = o * l * u + c * d * m;
        break;
      case "ZXY":
        this._x = c * l * u - o * d * m, this._y = o * d * u + c * l * m, this._z = o * l * m + c * d * u, this._w = o * l * u - c * d * m;
        break;
      case "ZYX":
        this._x = c * l * u - o * d * m, this._y = o * d * u + c * l * m, this._z = o * l * m - c * d * u, this._w = o * l * u + c * d * m;
        break;
      case "YZX":
        this._x = c * l * u + o * d * m, this._y = o * d * u + c * l * m, this._z = o * l * m - c * d * u, this._w = o * l * u - c * d * m;
        break;
      case "XZY":
        this._x = c * l * u - o * d * m, this._y = o * d * u - c * l * m, this._z = o * l * m + c * d * u, this._w = o * l * u + c * d * m;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + r);
    }
    return i !== !1 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(t, i) {
    const e = i / 2, s = Math.sin(e);
    return this._x = t.x * s, this._y = t.y * s, this._z = t.z * s, this._w = Math.cos(e), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(t) {
    const i = t.elements, e = i[0], s = i[4], n = i[8], r = i[1], h = i[5], a = i[9], o = i[2], l = i[6], u = i[10], c = e + h + u;
    if (c > 0) {
      const d = 0.5 / Math.sqrt(c + 1);
      this._w = 0.25 / d, this._x = (l - a) * d, this._y = (n - o) * d, this._z = (r - s) * d;
    } else if (e > h && e > u) {
      const d = 2 * Math.sqrt(1 + e - h - u);
      this._w = (l - a) / d, this._x = 0.25 * d, this._y = (s + r) / d, this._z = (n + o) / d;
    } else if (h > u) {
      const d = 2 * Math.sqrt(1 + h - e - u);
      this._w = (n - o) / d, this._x = (s + r) / d, this._y = 0.25 * d, this._z = (a + l) / d;
    } else {
      const d = 2 * Math.sqrt(1 + u - e - h);
      this._w = (r - s) / d, this._x = (n + o) / d, this._y = (a + l) / d, this._z = 0.25 * d;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(t, i) {
    let e = t.dot(i) + 1;
    return e < Number.EPSILON ? (e = 0, Math.abs(t.x) > Math.abs(t.z) ? (this._x = -t.y, this._y = t.x, this._z = 0, this._w = e) : (this._x = 0, this._y = -t.z, this._z = t.y, this._w = e)) : (this._x = t.y * i.z - t.z * i.y, this._y = t.z * i.x - t.x * i.z, this._z = t.x * i.y - t.y * i.x, this._w = e), this.normalize();
  }
  angleTo(t) {
    return 2 * Math.acos(Math.abs(W(this.dot(t), -1, 1)));
  }
  rotateTowards(t, i) {
    const e = this.angleTo(t);
    if (e === 0)
      return this;
    const s = Math.min(1, i / e);
    return this.slerp(t, s), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  }
  dot(t) {
    return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let t = this.length();
    return t === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (t = 1 / t, this._x = this._x * t, this._y = this._y * t, this._z = this._z * t, this._w = this._w * t), this._onChangeCallback(), this;
  }
  multiply(t) {
    return this.multiplyQuaternions(this, t);
  }
  premultiply(t) {
    return this.multiplyQuaternions(t, this);
  }
  multiplyQuaternions(t, i) {
    const e = t._x, s = t._y, n = t._z, r = t._w, h = i._x, a = i._y, o = i._z, l = i._w;
    return this._x = e * l + r * h + s * o - n * a, this._y = s * l + r * a + n * h - e * o, this._z = n * l + r * o + e * a - s * h, this._w = r * l - e * h - s * a - n * o, this._onChangeCallback(), this;
  }
  slerp(t, i) {
    if (i === 0)
      return this;
    if (i === 1)
      return this.copy(t);
    const e = this._x, s = this._y, n = this._z, r = this._w;
    let h = r * t._w + e * t._x + s * t._y + n * t._z;
    if (h < 0 ? (this._w = -t._w, this._x = -t._x, this._y = -t._y, this._z = -t._z, h = -h) : this.copy(t), h >= 1)
      return this._w = r, this._x = e, this._y = s, this._z = n, this;
    const a = 1 - h * h;
    if (a <= Number.EPSILON) {
      const d = 1 - i;
      return this._w = d * r + i * this._w, this._x = d * e + i * this._x, this._y = d * s + i * this._y, this._z = d * n + i * this._z, this.normalize(), this._onChangeCallback(), this;
    }
    const o = Math.sqrt(a), l = Math.atan2(o, h), u = Math.sin((1 - i) * l) / o, c = Math.sin(i * l) / o;
    return this._w = r * u + this._w * c, this._x = e * u + this._x * c, this._y = s * u + this._y * c, this._z = n * u + this._z * c, this._onChangeCallback(), this;
  }
  slerpQuaternions(t, i, e) {
    return this.copy(t).slerp(i, e);
  }
  random() {
    const t = Math.random(), i = Math.sqrt(1 - t), e = Math.sqrt(t), s = 2 * Math.PI * Math.random(), n = 2 * Math.PI * Math.random();
    return this.set(
      i * Math.cos(s),
      e * Math.sin(n),
      e * Math.cos(n),
      i * Math.sin(s)
    );
  }
  equals(t) {
    return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w;
  }
  fromArray(t, i = 0) {
    return this._x = t[i], this._y = t[i + 1], this._z = t[i + 2], this._w = t[i + 3], this._onChangeCallback(), this;
  }
  toArray(t = [], i = 0) {
    return t[i] = this._x, t[i + 1] = this._y, t[i + 2] = this._z, t[i + 3] = this._w, t;
  }
  fromBufferAttribute(t, i) {
    return this._x = t.getX(i), this._y = t.getY(i), this._z = t.getZ(i), this._w = t.getW(i), this;
  }
  _onChange(t) {
    return this._onChangeCallback = t, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class y {
  constructor(t = 0, i = 0, e = 0) {
    y.prototype.isVector3 = !0, this.x = t, this.y = i, this.z = e;
  }
  set(t, i, e) {
    return e === void 0 && (e = this.z), this.x = t, this.y = i, this.z = e, this;
  }
  setScalar(t) {
    return this.x = t, this.y = t, this.z = t, this;
  }
  setX(t) {
    return this.x = t, this;
  }
  setY(t) {
    return this.y = t, this;
  }
  setZ(t) {
    return this.z = t, this;
  }
  setComponent(t, i) {
    switch (t) {
      case 0:
        this.x = i;
        break;
      case 1:
        this.y = i;
        break;
      case 2:
        this.z = i;
        break;
      default:
        throw new Error("index is out of range: " + t);
    }
    return this;
  }
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + t);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(t) {
    return this.x = t.x, this.y = t.y, this.z = t.z, this;
  }
  add(t) {
    return this.x += t.x, this.y += t.y, this.z += t.z, this;
  }
  addScalar(t) {
    return this.x += t, this.y += t, this.z += t, this;
  }
  addVectors(t, i) {
    return this.x = t.x + i.x, this.y = t.y + i.y, this.z = t.z + i.z, this;
  }
  addScaledVector(t, i) {
    return this.x += t.x * i, this.y += t.y * i, this.z += t.z * i, this;
  }
  sub(t) {
    return this.x -= t.x, this.y -= t.y, this.z -= t.z, this;
  }
  subScalar(t) {
    return this.x -= t, this.y -= t, this.z -= t, this;
  }
  subVectors(t, i) {
    return this.x = t.x - i.x, this.y = t.y - i.y, this.z = t.z - i.z, this;
  }
  multiply(t) {
    return this.x *= t.x, this.y *= t.y, this.z *= t.z, this;
  }
  multiplyScalar(t) {
    return this.x *= t, this.y *= t, this.z *= t, this;
  }
  multiplyVectors(t, i) {
    return this.x = t.x * i.x, this.y = t.y * i.y, this.z = t.z * i.z, this;
  }
  applyEuler(t) {
    return this.applyQuaternion(gi.setFromEuler(t));
  }
  applyAxisAngle(t, i) {
    return this.applyQuaternion(gi.setFromAxisAngle(t, i));
  }
  applyMatrix3(t) {
    const i = this.x, e = this.y, s = this.z, n = t.elements;
    return this.x = n[0] * i + n[3] * e + n[6] * s, this.y = n[1] * i + n[4] * e + n[7] * s, this.z = n[2] * i + n[5] * e + n[8] * s, this;
  }
  applyNormalMatrix(t) {
    return this.applyMatrix3(t).normalize();
  }
  applyMatrix4(t) {
    const i = this.x, e = this.y, s = this.z, n = t.elements, r = 1 / (n[3] * i + n[7] * e + n[11] * s + n[15]);
    return this.x = (n[0] * i + n[4] * e + n[8] * s + n[12]) * r, this.y = (n[1] * i + n[5] * e + n[9] * s + n[13]) * r, this.z = (n[2] * i + n[6] * e + n[10] * s + n[14]) * r, this;
  }
  applyQuaternion(t) {
    const i = this.x, e = this.y, s = this.z, n = t.x, r = t.y, h = t.z, a = t.w, o = a * i + r * s - h * e, l = a * e + h * i - n * s, u = a * s + n * e - r * i, c = -n * i - r * e - h * s;
    return this.x = o * a + c * -n + l * -h - u * -r, this.y = l * a + c * -r + u * -n - o * -h, this.z = u * a + c * -h + o * -r - l * -n, this;
  }
  project(t) {
    return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix);
  }
  unproject(t) {
    return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld);
  }
  transformDirection(t) {
    const i = this.x, e = this.y, s = this.z, n = t.elements;
    return this.x = n[0] * i + n[4] * e + n[8] * s, this.y = n[1] * i + n[5] * e + n[9] * s, this.z = n[2] * i + n[6] * e + n[10] * s, this.normalize();
  }
  divide(t) {
    return this.x /= t.x, this.y /= t.y, this.z /= t.z, this;
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  min(t) {
    return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this;
  }
  max(t) {
    return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this;
  }
  clamp(t, i) {
    return this.x = Math.max(t.x, Math.min(i.x, this.x)), this.y = Math.max(t.y, Math.min(i.y, this.y)), this.z = Math.max(t.z, Math.min(i.z, this.z)), this;
  }
  clampScalar(t, i) {
    return this.x = Math.max(t, Math.min(i, this.x)), this.y = Math.max(t, Math.min(i, this.y)), this.z = Math.max(t, Math.min(i, this.z)), this;
  }
  clampLength(t, i) {
    const e = this.length();
    return this.divideScalar(e || 1).multiplyScalar(Math.max(t, Math.min(i, e)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  }
  roundToZero() {
    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  dot(t) {
    return this.x * t.x + this.y * t.y + this.z * t.z;
  }
  // TODO lengthSquared?
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, i) {
    return this.x += (t.x - this.x) * i, this.y += (t.y - this.y) * i, this.z += (t.z - this.z) * i, this;
  }
  lerpVectors(t, i, e) {
    return this.x = t.x + (i.x - t.x) * e, this.y = t.y + (i.y - t.y) * e, this.z = t.z + (i.z - t.z) * e, this;
  }
  cross(t) {
    return this.crossVectors(this, t);
  }
  crossVectors(t, i) {
    const e = t.x, s = t.y, n = t.z, r = i.x, h = i.y, a = i.z;
    return this.x = s * a - n * h, this.y = n * r - e * a, this.z = e * h - s * r, this;
  }
  projectOnVector(t) {
    const i = t.lengthSq();
    if (i === 0)
      return this.set(0, 0, 0);
    const e = t.dot(this) / i;
    return this.copy(t).multiplyScalar(e);
  }
  projectOnPlane(t) {
    return ei.copy(this).projectOnVector(t), this.sub(ei);
  }
  reflect(t) {
    return this.sub(ei.copy(t).multiplyScalar(2 * this.dot(t)));
  }
  angleTo(t) {
    const i = Math.sqrt(this.lengthSq() * t.lengthSq());
    if (i === 0)
      return Math.PI / 2;
    const e = this.dot(t) / i;
    return Math.acos(W(e, -1, 1));
  }
  distanceTo(t) {
    return Math.sqrt(this.distanceToSquared(t));
  }
  distanceToSquared(t) {
    const i = this.x - t.x, e = this.y - t.y, s = this.z - t.z;
    return i * i + e * e + s * s;
  }
  manhattanDistanceTo(t) {
    return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z);
  }
  setFromSpherical(t) {
    return this.setFromSphericalCoords(t.radius, t.phi, t.theta);
  }
  setFromSphericalCoords(t, i, e) {
    const s = Math.sin(i) * t;
    return this.x = s * Math.sin(e), this.y = Math.cos(i) * t, this.z = s * Math.cos(e), this;
  }
  setFromCylindrical(t) {
    return this.setFromCylindricalCoords(t.radius, t.theta, t.y);
  }
  setFromCylindricalCoords(t, i, e) {
    return this.x = t * Math.sin(i), this.y = e, this.z = t * Math.cos(i), this;
  }
  setFromMatrixPosition(t) {
    const i = t.elements;
    return this.x = i[12], this.y = i[13], this.z = i[14], this;
  }
  setFromMatrixScale(t) {
    const i = this.setFromMatrixColumn(t, 0).length(), e = this.setFromMatrixColumn(t, 1).length(), s = this.setFromMatrixColumn(t, 2).length();
    return this.x = i, this.y = e, this.z = s, this;
  }
  setFromMatrixColumn(t, i) {
    return this.fromArray(t.elements, i * 4);
  }
  setFromMatrix3Column(t, i) {
    return this.fromArray(t.elements, i * 3);
  }
  setFromEuler(t) {
    return this.x = t._x, this.y = t._y, this.z = t._z, this;
  }
  equals(t) {
    return t.x === this.x && t.y === this.y && t.z === this.z;
  }
  fromArray(t, i = 0) {
    return this.x = t[i], this.y = t[i + 1], this.z = t[i + 2], this;
  }
  toArray(t = [], i = 0) {
    return t[i] = this.x, t[i + 1] = this.y, t[i + 2] = this.z, t;
  }
  fromBufferAttribute(t, i) {
    return this.x = t.getX(i), this.y = t.getY(i), this.z = t.getZ(i), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  randomDirection() {
    const t = (Math.random() - 0.5) * 2, i = Math.random() * Math.PI * 2, e = Math.sqrt(1 - t ** 2);
    return this.x = e * Math.cos(i), this.y = e * Math.sin(i), this.z = t, this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const ei = /* @__PURE__ */ new y(), gi = /* @__PURE__ */ new At();
class Ft {
  constructor(t = new y(1 / 0, 1 / 0, 1 / 0), i = new y(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = !0, this.min = t, this.max = i;
  }
  set(t, i) {
    return this.min.copy(t), this.max.copy(i), this;
  }
  setFromArray(t) {
    let i = 1 / 0, e = 1 / 0, s = 1 / 0, n = -1 / 0, r = -1 / 0, h = -1 / 0;
    for (let a = 0, o = t.length; a < o; a += 3) {
      const l = t[a], u = t[a + 1], c = t[a + 2];
      l < i && (i = l), u < e && (e = u), c < s && (s = c), l > n && (n = l), u > r && (r = u), c > h && (h = c);
    }
    return this.min.set(i, e, s), this.max.set(n, r, h), this;
  }
  setFromBufferAttribute(t) {
    let i = 1 / 0, e = 1 / 0, s = 1 / 0, n = -1 / 0, r = -1 / 0, h = -1 / 0;
    for (let a = 0, o = t.count; a < o; a++) {
      const l = t.getX(a), u = t.getY(a), c = t.getZ(a);
      l < i && (i = l), u < e && (e = u), c < s && (s = c), l > n && (n = l), u > r && (r = u), c > h && (h = c);
    }
    return this.min.set(i, e, s), this.max.set(n, r, h), this;
  }
  setFromPoints(t) {
    this.makeEmpty();
    for (let i = 0, e = t.length; i < e; i++)
      this.expandByPoint(t[i]);
    return this;
  }
  setFromCenterAndSize(t, i) {
    const e = nt.copy(i).multiplyScalar(0.5);
    return this.min.copy(t).sub(e), this.max.copy(t).add(e), this;
  }
  setFromObject(t, i = !1) {
    return this.makeEmpty(), this.expandByObject(t, i);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return this.min.copy(t.min), this.max.copy(t.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(t) {
    return this.isEmpty() ? t.set(0, 0, 0) : t.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(t) {
    return this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min);
  }
  expandByPoint(t) {
    return this.min.min(t), this.max.max(t), this;
  }
  expandByVector(t) {
    return this.min.sub(t), this.max.add(t), this;
  }
  expandByScalar(t) {
    return this.min.addScalar(-t), this.max.addScalar(t), this;
  }
  expandByObject(t, i = !1) {
    t.updateWorldMatrix(!1, !1);
    const e = t.geometry;
    if (e !== void 0)
      if (i && e.attributes != null && e.attributes.position !== void 0) {
        const n = e.attributes.position;
        for (let r = 0, h = n.count; r < h; r++)
          nt.fromBufferAttribute(n, r).applyMatrix4(t.matrixWorld), this.expandByPoint(nt);
      } else
        e.boundingBox === null && e.computeBoundingBox(), si.copy(e.boundingBox), si.applyMatrix4(t.matrixWorld), this.union(si);
    const s = t.children;
    for (let n = 0, r = s.length; n < r; n++)
      this.expandByObject(s[n], i);
    return this;
  }
  containsPoint(t) {
    return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y || t.z < this.min.z || t.z > this.max.z);
  }
  containsBox(t) {
    return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z;
  }
  getParameter(t, i) {
    return i.set(
      (t.x - this.min.x) / (this.max.x - this.min.x),
      (t.y - this.min.y) / (this.max.y - this.min.y),
      (t.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  intersectsBox(t) {
    return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y || t.max.z < this.min.z || t.min.z > this.max.z);
  }
  intersectsSphere(t) {
    return this.clampPoint(t.center, nt), nt.distanceToSquared(t.center) <= t.radius * t.radius;
  }
  intersectsPlane(t) {
    let i, e;
    return t.normal.x > 0 ? (i = t.normal.x * this.min.x, e = t.normal.x * this.max.x) : (i = t.normal.x * this.max.x, e = t.normal.x * this.min.x), t.normal.y > 0 ? (i += t.normal.y * this.min.y, e += t.normal.y * this.max.y) : (i += t.normal.y * this.max.y, e += t.normal.y * this.min.y), t.normal.z > 0 ? (i += t.normal.z * this.min.z, e += t.normal.z * this.max.z) : (i += t.normal.z * this.max.z, e += t.normal.z * this.min.z), i <= -t.constant && e >= -t.constant;
  }
  intersectsTriangle(t) {
    if (this.isEmpty())
      return !1;
    this.getCenter(Mt), It.subVectors(this.max, Mt), ct.subVectors(t.a, Mt), dt.subVectors(t.b, Mt), mt.subVectors(t.c, Mt), tt.subVectors(dt, ct), it.subVectors(mt, dt), rt.subVectors(ct, mt);
    let i = [
      0,
      -tt.z,
      tt.y,
      0,
      -it.z,
      it.y,
      0,
      -rt.z,
      rt.y,
      tt.z,
      0,
      -tt.x,
      it.z,
      0,
      -it.x,
      rt.z,
      0,
      -rt.x,
      -tt.y,
      tt.x,
      0,
      -it.y,
      it.x,
      0,
      -rt.y,
      rt.x,
      0
    ];
    return !ni(i, ct, dt, mt, It) || (i = [1, 0, 0, 0, 1, 0, 0, 0, 1], !ni(i, ct, dt, mt, It)) ? !1 : (Pt.crossVectors(tt, it), i = [Pt.x, Pt.y, Pt.z], ni(i, ct, dt, mt, It));
  }
  clampPoint(t, i) {
    return i.copy(t).clamp(this.min, this.max);
  }
  distanceToPoint(t) {
    return nt.copy(t).clamp(this.min, this.max).sub(t).length();
  }
  getBoundingSphere(t) {
    return this.getCenter(t.center), t.radius = this.getSize(nt).length() * 0.5, t;
  }
  intersect(t) {
    return this.min.max(t.min), this.max.min(t.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(t) {
    return this.min.min(t.min), this.max.max(t.max), this;
  }
  applyMatrix4(t) {
    return this.isEmpty() ? this : (Y[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t), Y[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t), Y[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t), Y[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t), Y[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t), Y[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t), Y[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t), Y[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t), this.setFromPoints(Y), this);
  }
  translate(t) {
    return this.min.add(t), this.max.add(t), this;
  }
  equals(t) {
    return t.min.equals(this.min) && t.max.equals(this.max);
  }
}
const Y = [
  /* @__PURE__ */ new y(),
  /* @__PURE__ */ new y(),
  /* @__PURE__ */ new y(),
  /* @__PURE__ */ new y(),
  /* @__PURE__ */ new y(),
  /* @__PURE__ */ new y(),
  /* @__PURE__ */ new y(),
  /* @__PURE__ */ new y()
], nt = /* @__PURE__ */ new y(), si = /* @__PURE__ */ new Ft(), ct = /* @__PURE__ */ new y(), dt = /* @__PURE__ */ new y(), mt = /* @__PURE__ */ new y(), tt = /* @__PURE__ */ new y(), it = /* @__PURE__ */ new y(), rt = /* @__PURE__ */ new y(), Mt = /* @__PURE__ */ new y(), It = /* @__PURE__ */ new y(), Pt = /* @__PURE__ */ new y(), ht = /* @__PURE__ */ new y();
function ni(p, t, i, e, s) {
  for (let n = 0, r = p.length - 3; n <= r; n += 3) {
    ht.fromArray(p, n);
    const h = s.x * Math.abs(ht.x) + s.y * Math.abs(ht.y) + s.z * Math.abs(ht.z), a = t.dot(ht), o = i.dot(ht), l = e.dot(ht);
    if (Math.max(-Math.max(a, o, l), Math.min(a, o, l)) > h)
      return !1;
  }
  return !0;
}
const Ui = /* @__PURE__ */ new Ft(), bt = /* @__PURE__ */ new y(), ri = /* @__PURE__ */ new y();
class jt {
  constructor(t = new y(), i = -1) {
    this.center = t, this.radius = i;
  }
  set(t, i) {
    return this.center.copy(t), this.radius = i, this;
  }
  setFromPoints(t, i) {
    const e = this.center;
    i !== void 0 ? e.copy(i) : Ui.setFromPoints(t).getCenter(e);
    let s = 0;
    for (let n = 0, r = t.length; n < r; n++)
      s = Math.max(s, e.distanceToSquared(t[n]));
    return this.radius = Math.sqrt(s), this;
  }
  copy(t) {
    return this.center.copy(t.center), this.radius = t.radius, this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  containsPoint(t) {
    return t.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(t) {
    return t.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(t) {
    const i = this.radius + t.radius;
    return t.center.distanceToSquared(this.center) <= i * i;
  }
  intersectsBox(t) {
    return t.intersectsSphere(this);
  }
  intersectsPlane(t) {
    return Math.abs(t.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(t, i) {
    const e = this.center.distanceToSquared(t);
    return i.copy(t), e > this.radius * this.radius && (i.sub(this.center).normalize(), i.multiplyScalar(this.radius).add(this.center)), i;
  }
  getBoundingBox(t) {
    return this.isEmpty() ? (t.makeEmpty(), t) : (t.set(this.center, this.center), t.expandByScalar(this.radius), t);
  }
  applyMatrix4(t) {
    return this.center.applyMatrix4(t), this.radius = this.radius * t.getMaxScaleOnAxis(), this;
  }
  translate(t) {
    return this.center.add(t), this;
  }
  expandByPoint(t) {
    if (this.isEmpty())
      return this.center.copy(t), this.radius = 0, this;
    bt.subVectors(t, this.center);
    const i = bt.lengthSq();
    if (i > this.radius * this.radius) {
      const e = Math.sqrt(i), s = (e - this.radius) * 0.5;
      this.center.addScaledVector(bt, s / e), this.radius += s;
    }
    return this;
  }
  union(t) {
    return t.isEmpty() ? this : this.isEmpty() ? (this.copy(t), this) : (this.center.equals(t.center) === !0 ? this.radius = Math.max(this.radius, t.radius) : (ri.subVectors(t.center, this.center).setLength(t.radius), this.expandByPoint(bt.copy(t.center).add(ri)), this.expandByPoint(bt.copy(t.center).sub(ri))), this);
  }
  equals(t) {
    return t.center.equals(this.center) && t.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Z = /* @__PURE__ */ new y(), hi = /* @__PURE__ */ new y(), Nt = /* @__PURE__ */ new y(), et = /* @__PURE__ */ new y(), ai = /* @__PURE__ */ new y(), Lt = /* @__PURE__ */ new y(), oi = /* @__PURE__ */ new y();
class Pi {
  constructor(t = new y(), i = new y(0, 0, -1)) {
    this.origin = t, this.direction = i;
  }
  set(t, i) {
    return this.origin.copy(t), this.direction.copy(i), this;
  }
  copy(t) {
    return this.origin.copy(t.origin), this.direction.copy(t.direction), this;
  }
  at(t, i) {
    return i.copy(this.direction).multiplyScalar(t).add(this.origin);
  }
  lookAt(t) {
    return this.direction.copy(t).sub(this.origin).normalize(), this;
  }
  recast(t) {
    return this.origin.copy(this.at(t, Z)), this;
  }
  closestPointToPoint(t, i) {
    i.subVectors(t, this.origin);
    const e = i.dot(this.direction);
    return e < 0 ? i.copy(this.origin) : i.copy(this.direction).multiplyScalar(e).add(this.origin);
  }
  distanceToPoint(t) {
    return Math.sqrt(this.distanceSqToPoint(t));
  }
  distanceSqToPoint(t) {
    const i = Z.subVectors(t, this.origin).dot(this.direction);
    return i < 0 ? this.origin.distanceToSquared(t) : (Z.copy(this.direction).multiplyScalar(i).add(this.origin), Z.distanceToSquared(t));
  }
  distanceSqToSegment(t, i, e, s) {
    hi.copy(t).add(i).multiplyScalar(0.5), Nt.copy(i).sub(t).normalize(), et.copy(this.origin).sub(hi);
    const n = t.distanceTo(i) * 0.5, r = -this.direction.dot(Nt), h = et.dot(this.direction), a = -et.dot(Nt), o = et.lengthSq(), l = Math.abs(1 - r * r);
    let u, c, d, m;
    if (l > 0)
      if (u = r * a - h, c = r * h - a, m = n * l, u >= 0)
        if (c >= -m)
          if (c <= m) {
            const f = 1 / l;
            u *= f, c *= f, d = u * (u + r * c + 2 * h) + c * (r * u + c + 2 * a) + o;
          } else
            c = n, u = Math.max(0, -(r * c + h)), d = -u * u + c * (c + 2 * a) + o;
        else
          c = -n, u = Math.max(0, -(r * c + h)), d = -u * u + c * (c + 2 * a) + o;
      else
        c <= -m ? (u = Math.max(0, -(-r * n + h)), c = u > 0 ? -n : Math.min(Math.max(-n, -a), n), d = -u * u + c * (c + 2 * a) + o) : c <= m ? (u = 0, c = Math.min(Math.max(-n, -a), n), d = c * (c + 2 * a) + o) : (u = Math.max(0, -(r * n + h)), c = u > 0 ? n : Math.min(Math.max(-n, -a), n), d = -u * u + c * (c + 2 * a) + o);
    else
      c = r > 0 ? -n : n, u = Math.max(0, -(r * c + h)), d = -u * u + c * (c + 2 * a) + o;
    return e && e.copy(this.direction).multiplyScalar(u).add(this.origin), s && s.copy(Nt).multiplyScalar(c).add(hi), d;
  }
  intersectSphere(t, i) {
    Z.subVectors(t.center, this.origin);
    const e = Z.dot(this.direction), s = Z.dot(Z) - e * e, n = t.radius * t.radius;
    if (s > n)
      return null;
    const r = Math.sqrt(n - s), h = e - r, a = e + r;
    return h < 0 && a < 0 ? null : h < 0 ? this.at(a, i) : this.at(h, i);
  }
  intersectsSphere(t) {
    return this.distanceSqToPoint(t.center) <= t.radius * t.radius;
  }
  distanceToPlane(t) {
    const i = t.normal.dot(this.direction);
    if (i === 0)
      return t.distanceToPoint(this.origin) === 0 ? 0 : null;
    const e = -(this.origin.dot(t.normal) + t.constant) / i;
    return e >= 0 ? e : null;
  }
  intersectPlane(t, i) {
    const e = this.distanceToPlane(t);
    return e === null ? null : this.at(e, i);
  }
  intersectsPlane(t) {
    const i = t.distanceToPoint(this.origin);
    return i === 0 || t.normal.dot(this.direction) * i < 0;
  }
  intersectBox(t, i) {
    let e, s, n, r, h, a;
    const o = 1 / this.direction.x, l = 1 / this.direction.y, u = 1 / this.direction.z, c = this.origin;
    return o >= 0 ? (e = (t.min.x - c.x) * o, s = (t.max.x - c.x) * o) : (e = (t.max.x - c.x) * o, s = (t.min.x - c.x) * o), l >= 0 ? (n = (t.min.y - c.y) * l, r = (t.max.y - c.y) * l) : (n = (t.max.y - c.y) * l, r = (t.min.y - c.y) * l), e > r || n > s || ((n > e || isNaN(e)) && (e = n), (r < s || isNaN(s)) && (s = r), u >= 0 ? (h = (t.min.z - c.z) * u, a = (t.max.z - c.z) * u) : (h = (t.max.z - c.z) * u, a = (t.min.z - c.z) * u), e > a || h > s) || ((h > e || e !== e) && (e = h), (a < s || s !== s) && (s = a), s < 0) ? null : this.at(e >= 0 ? e : s, i);
  }
  intersectsBox(t) {
    return this.intersectBox(t, Z) !== null;
  }
  intersectTriangle(t, i, e, s, n) {
    ai.subVectors(i, t), Lt.subVectors(e, t), oi.crossVectors(ai, Lt);
    let r = this.direction.dot(oi), h;
    if (r > 0) {
      if (s)
        return null;
      h = 1;
    } else if (r < 0)
      h = -1, r = -r;
    else
      return null;
    et.subVectors(this.origin, t);
    const a = h * this.direction.dot(Lt.crossVectors(et, Lt));
    if (a < 0)
      return null;
    const o = h * this.direction.dot(ai.cross(et));
    if (o < 0 || a + o > r)
      return null;
    const l = -h * et.dot(oi);
    return l < 0 ? null : this.at(l / r, n);
  }
  applyMatrix4(t) {
    return this.origin.applyMatrix4(t), this.direction.transformDirection(t), this;
  }
  equals(t) {
    return t.origin.equals(this.origin) && t.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class U {
  constructor() {
    U.prototype.isMatrix4 = !0, this.elements = [
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ];
  }
  set(t, i, e, s, n, r, h, a, o, l, u, c, d, m, f, x) {
    const g = this.elements;
    return g[0] = t, g[4] = i, g[8] = e, g[12] = s, g[1] = n, g[5] = r, g[9] = h, g[13] = a, g[2] = o, g[6] = l, g[10] = u, g[14] = c, g[3] = d, g[7] = m, g[11] = f, g[15] = x, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  clone() {
    return new U().fromArray(this.elements);
  }
  copy(t) {
    const i = this.elements, e = t.elements;
    return i[0] = e[0], i[1] = e[1], i[2] = e[2], i[3] = e[3], i[4] = e[4], i[5] = e[5], i[6] = e[6], i[7] = e[7], i[8] = e[8], i[9] = e[9], i[10] = e[10], i[11] = e[11], i[12] = e[12], i[13] = e[13], i[14] = e[14], i[15] = e[15], this;
  }
  copyPosition(t) {
    const i = this.elements, e = t.elements;
    return i[12] = e[12], i[13] = e[13], i[14] = e[14], this;
  }
  setFromMatrix3(t) {
    const i = t.elements;
    return this.set(
      i[0],
      i[3],
      i[6],
      0,
      i[1],
      i[4],
      i[7],
      0,
      i[2],
      i[5],
      i[8],
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractBasis(t, i, e) {
    return t.setFromMatrixColumn(this, 0), i.setFromMatrixColumn(this, 1), e.setFromMatrixColumn(this, 2), this;
  }
  makeBasis(t, i, e) {
    return this.set(
      t.x,
      i.x,
      e.x,
      0,
      t.y,
      i.y,
      e.y,
      0,
      t.z,
      i.z,
      e.z,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractRotation(t) {
    const i = this.elements, e = t.elements, s = 1 / pt.setFromMatrixColumn(t, 0).length(), n = 1 / pt.setFromMatrixColumn(t, 1).length(), r = 1 / pt.setFromMatrixColumn(t, 2).length();
    return i[0] = e[0] * s, i[1] = e[1] * s, i[2] = e[2] * s, i[3] = 0, i[4] = e[4] * n, i[5] = e[5] * n, i[6] = e[6] * n, i[7] = 0, i[8] = e[8] * r, i[9] = e[9] * r, i[10] = e[10] * r, i[11] = 0, i[12] = 0, i[13] = 0, i[14] = 0, i[15] = 1, this;
  }
  makeRotationFromEuler(t) {
    const i = this.elements, e = t.x, s = t.y, n = t.z, r = Math.cos(e), h = Math.sin(e), a = Math.cos(s), o = Math.sin(s), l = Math.cos(n), u = Math.sin(n);
    if (t.order === "XYZ") {
      const c = r * l, d = r * u, m = h * l, f = h * u;
      i[0] = a * l, i[4] = -a * u, i[8] = o, i[1] = d + m * o, i[5] = c - f * o, i[9] = -h * a, i[2] = f - c * o, i[6] = m + d * o, i[10] = r * a;
    } else if (t.order === "YXZ") {
      const c = a * l, d = a * u, m = o * l, f = o * u;
      i[0] = c + f * h, i[4] = m * h - d, i[8] = r * o, i[1] = r * u, i[5] = r * l, i[9] = -h, i[2] = d * h - m, i[6] = f + c * h, i[10] = r * a;
    } else if (t.order === "ZXY") {
      const c = a * l, d = a * u, m = o * l, f = o * u;
      i[0] = c - f * h, i[4] = -r * u, i[8] = m + d * h, i[1] = d + m * h, i[5] = r * l, i[9] = f - c * h, i[2] = -r * o, i[6] = h, i[10] = r * a;
    } else if (t.order === "ZYX") {
      const c = r * l, d = r * u, m = h * l, f = h * u;
      i[0] = a * l, i[4] = m * o - d, i[8] = c * o + f, i[1] = a * u, i[5] = f * o + c, i[9] = d * o - m, i[2] = -o, i[6] = h * a, i[10] = r * a;
    } else if (t.order === "YZX") {
      const c = r * a, d = r * o, m = h * a, f = h * o;
      i[0] = a * l, i[4] = f - c * u, i[8] = m * u + d, i[1] = u, i[5] = r * l, i[9] = -h * l, i[2] = -o * l, i[6] = d * u + m, i[10] = c - f * u;
    } else if (t.order === "XZY") {
      const c = r * a, d = r * o, m = h * a, f = h * o;
      i[0] = a * l, i[4] = -u, i[8] = o * l, i[1] = c * u + f, i[5] = r * l, i[9] = d * u - m, i[2] = m * u - d, i[6] = h * l, i[10] = f * u + c;
    }
    return i[3] = 0, i[7] = 0, i[11] = 0, i[12] = 0, i[13] = 0, i[14] = 0, i[15] = 1, this;
  }
  makeRotationFromQuaternion(t) {
    return this.compose(vi, t, Vi);
  }
  lookAt(t, i, e) {
    const s = this.elements;
    return N.subVectors(t, i), N.lengthSq() === 0 && (N.z = 1), N.normalize(), st.crossVectors(e, N), st.lengthSq() === 0 && (Math.abs(e.z) === 1 ? N.x += 1e-4 : N.z += 1e-4, N.normalize(), st.crossVectors(e, N)), st.normalize(), Wt.crossVectors(N, st), s[0] = st.x, s[4] = Wt.x, s[8] = N.x, s[1] = st.y, s[5] = Wt.y, s[9] = N.y, s[2] = st.z, s[6] = Wt.z, s[10] = N.z, this;
  }
  multiply(t) {
    return this.multiplyMatrices(this, t);
  }
  premultiply(t) {
    return this.multiplyMatrices(t, this);
  }
  multiplyMatrices(t, i) {
    const e = t.elements, s = i.elements, n = this.elements, r = e[0], h = e[4], a = e[8], o = e[12], l = e[1], u = e[5], c = e[9], d = e[13], m = e[2], f = e[6], x = e[10], g = e[14], z = e[3], M = e[7], _ = e[11], b = e[15], S = s[0], w = s[4], I = s[8], $ = s[12], A = s[1], C = s[5], k = s[9], E = s[13], Q = s[2], R = s[6], K = s[10], Tt = s[14], Bt = s[3], Ct = s[7], kt = s[11], Et = s[15];
    return n[0] = r * S + h * A + a * Q + o * Bt, n[4] = r * w + h * C + a * R + o * Ct, n[8] = r * I + h * k + a * K + o * kt, n[12] = r * $ + h * E + a * Tt + o * Et, n[1] = l * S + u * A + c * Q + d * Bt, n[5] = l * w + u * C + c * R + d * Ct, n[9] = l * I + u * k + c * K + d * kt, n[13] = l * $ + u * E + c * Tt + d * Et, n[2] = m * S + f * A + x * Q + g * Bt, n[6] = m * w + f * C + x * R + g * Ct, n[10] = m * I + f * k + x * K + g * kt, n[14] = m * $ + f * E + x * Tt + g * Et, n[3] = z * S + M * A + _ * Q + b * Bt, n[7] = z * w + M * C + _ * R + b * Ct, n[11] = z * I + M * k + _ * K + b * kt, n[15] = z * $ + M * E + _ * Tt + b * Et, this;
  }
  multiplyScalar(t) {
    const i = this.elements;
    return i[0] *= t, i[4] *= t, i[8] *= t, i[12] *= t, i[1] *= t, i[5] *= t, i[9] *= t, i[13] *= t, i[2] *= t, i[6] *= t, i[10] *= t, i[14] *= t, i[3] *= t, i[7] *= t, i[11] *= t, i[15] *= t, this;
  }
  determinant() {
    const t = this.elements, i = t[0], e = t[4], s = t[8], n = t[12], r = t[1], h = t[5], a = t[9], o = t[13], l = t[2], u = t[6], c = t[10], d = t[14], m = t[3], f = t[7], x = t[11], g = t[15];
    return m * (+n * a * u - s * o * u - n * h * c + e * o * c + s * h * d - e * a * d) + f * (+i * a * d - i * o * c + n * r * c - s * r * d + s * o * l - n * a * l) + x * (+i * o * u - i * h * d - n * r * u + e * r * d + n * h * l - e * o * l) + g * (-s * h * l - i * a * u + i * h * c + s * r * u - e * r * c + e * a * l);
  }
  transpose() {
    const t = this.elements;
    let i;
    return i = t[1], t[1] = t[4], t[4] = i, i = t[2], t[2] = t[8], t[8] = i, i = t[6], t[6] = t[9], t[9] = i, i = t[3], t[3] = t[12], t[12] = i, i = t[7], t[7] = t[13], t[13] = i, i = t[11], t[11] = t[14], t[14] = i, this;
  }
  setPosition(t, i, e) {
    const s = this.elements;
    return t.isVector3 ? (s[12] = t.x, s[13] = t.y, s[14] = t.z) : (s[12] = t, s[13] = i, s[14] = e), this;
  }
  invert() {
    const t = this.elements, i = t[0], e = t[1], s = t[2], n = t[3], r = t[4], h = t[5], a = t[6], o = t[7], l = t[8], u = t[9], c = t[10], d = t[11], m = t[12], f = t[13], x = t[14], g = t[15], z = u * x * o - f * c * o + f * a * d - h * x * d - u * a * g + h * c * g, M = m * c * o - l * x * o - m * a * d + r * x * d + l * a * g - r * c * g, _ = l * f * o - m * u * o + m * h * d - r * f * d - l * h * g + r * u * g, b = m * u * a - l * f * a - m * h * c + r * f * c + l * h * x - r * u * x, S = i * z + e * M + s * _ + n * b;
    if (S === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const w = 1 / S;
    return t[0] = z * w, t[1] = (f * c * n - u * x * n - f * s * d + e * x * d + u * s * g - e * c * g) * w, t[2] = (h * x * n - f * a * n + f * s * o - e * x * o - h * s * g + e * a * g) * w, t[3] = (u * a * n - h * c * n - u * s * o + e * c * o + h * s * d - e * a * d) * w, t[4] = M * w, t[5] = (l * x * n - m * c * n + m * s * d - i * x * d - l * s * g + i * c * g) * w, t[6] = (m * a * n - r * x * n - m * s * o + i * x * o + r * s * g - i * a * g) * w, t[7] = (r * c * n - l * a * n + l * s * o - i * c * o - r * s * d + i * a * d) * w, t[8] = _ * w, t[9] = (m * u * n - l * f * n - m * e * d + i * f * d + l * e * g - i * u * g) * w, t[10] = (r * f * n - m * h * n + m * e * o - i * f * o - r * e * g + i * h * g) * w, t[11] = (l * h * n - r * u * n - l * e * o + i * u * o + r * e * d - i * h * d) * w, t[12] = b * w, t[13] = (l * f * s - m * u * s + m * e * c - i * f * c - l * e * x + i * u * x) * w, t[14] = (m * h * s - r * f * s - m * e * a + i * f * a + r * e * x - i * h * x) * w, t[15] = (r * u * s - l * h * s + l * e * a - i * u * a - r * e * c + i * h * c) * w, this;
  }
  scale(t) {
    const i = this.elements, e = t.x, s = t.y, n = t.z;
    return i[0] *= e, i[4] *= s, i[8] *= n, i[1] *= e, i[5] *= s, i[9] *= n, i[2] *= e, i[6] *= s, i[10] *= n, i[3] *= e, i[7] *= s, i[11] *= n, this;
  }
  getMaxScaleOnAxis() {
    const t = this.elements, i = t[0] * t[0] + t[1] * t[1] + t[2] * t[2], e = t[4] * t[4] + t[5] * t[5] + t[6] * t[6], s = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
    return Math.sqrt(Math.max(i, e, s));
  }
  makeTranslation(t, i, e) {
    return this.set(
      1,
      0,
      0,
      t,
      0,
      1,
      0,
      i,
      0,
      0,
      1,
      e,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationX(t) {
    const i = Math.cos(t), e = Math.sin(t);
    return this.set(
      1,
      0,
      0,
      0,
      0,
      i,
      -e,
      0,
      0,
      e,
      i,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationY(t) {
    const i = Math.cos(t), e = Math.sin(t);
    return this.set(
      i,
      0,
      e,
      0,
      0,
      1,
      0,
      0,
      -e,
      0,
      i,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationZ(t) {
    const i = Math.cos(t), e = Math.sin(t);
    return this.set(
      i,
      -e,
      0,
      0,
      e,
      i,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationAxis(t, i) {
    const e = Math.cos(i), s = Math.sin(i), n = 1 - e, r = t.x, h = t.y, a = t.z, o = n * r, l = n * h;
    return this.set(
      o * r + e,
      o * h - s * a,
      o * a + s * h,
      0,
      o * h + s * a,
      l * h + e,
      l * a - s * r,
      0,
      o * a - s * h,
      l * a + s * r,
      n * a * a + e,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(t, i, e) {
    return this.set(
      t,
      0,
      0,
      0,
      0,
      i,
      0,
      0,
      0,
      0,
      e,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeShear(t, i, e, s, n, r) {
    return this.set(
      1,
      e,
      n,
      0,
      t,
      1,
      r,
      0,
      i,
      s,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  compose(t, i, e) {
    const s = this.elements, n = i._x, r = i._y, h = i._z, a = i._w, o = n + n, l = r + r, u = h + h, c = n * o, d = n * l, m = n * u, f = r * l, x = r * u, g = h * u, z = a * o, M = a * l, _ = a * u, b = e.x, S = e.y, w = e.z;
    return s[0] = (1 - (f + g)) * b, s[1] = (d + _) * b, s[2] = (m - M) * b, s[3] = 0, s[4] = (d - _) * S, s[5] = (1 - (c + g)) * S, s[6] = (x + z) * S, s[7] = 0, s[8] = (m + M) * w, s[9] = (x - z) * w, s[10] = (1 - (c + f)) * w, s[11] = 0, s[12] = t.x, s[13] = t.y, s[14] = t.z, s[15] = 1, this;
  }
  decompose(t, i, e) {
    const s = this.elements;
    let n = pt.set(s[0], s[1], s[2]).length();
    const r = pt.set(s[4], s[5], s[6]).length(), h = pt.set(s[8], s[9], s[10]).length();
    this.determinant() < 0 && (n = -n), t.x = s[12], t.y = s[13], t.z = s[14], V.copy(this);
    const o = 1 / n, l = 1 / r, u = 1 / h;
    return V.elements[0] *= o, V.elements[1] *= o, V.elements[2] *= o, V.elements[4] *= l, V.elements[5] *= l, V.elements[6] *= l, V.elements[8] *= u, V.elements[9] *= u, V.elements[10] *= u, i.setFromRotationMatrix(V), e.x = n, e.y = r, e.z = h, this;
  }
  makePerspective(t, i, e, s, n, r) {
    const h = this.elements, a = 2 * n / (i - t), o = 2 * n / (e - s), l = (i + t) / (i - t), u = (e + s) / (e - s), c = -(r + n) / (r - n), d = -2 * r * n / (r - n);
    return h[0] = a, h[4] = 0, h[8] = l, h[12] = 0, h[1] = 0, h[5] = o, h[9] = u, h[13] = 0, h[2] = 0, h[6] = 0, h[10] = c, h[14] = d, h[3] = 0, h[7] = 0, h[11] = -1, h[15] = 0, this;
  }
  makeOrthographic(t, i, e, s, n, r) {
    const h = this.elements, a = 1 / (i - t), o = 1 / (e - s), l = 1 / (r - n), u = (i + t) * a, c = (e + s) * o, d = (r + n) * l;
    return h[0] = 2 * a, h[4] = 0, h[8] = 0, h[12] = -u, h[1] = 0, h[5] = 2 * o, h[9] = 0, h[13] = -c, h[2] = 0, h[6] = 0, h[10] = -2 * l, h[14] = -d, h[3] = 0, h[7] = 0, h[11] = 0, h[15] = 1, this;
  }
  equals(t) {
    const i = this.elements, e = t.elements;
    for (let s = 0; s < 16; s++)
      if (i[s] !== e[s])
        return !1;
    return !0;
  }
  fromArray(t, i = 0) {
    for (let e = 0; e < 16; e++)
      this.elements[e] = t[e + i];
    return this;
  }
  toArray(t = [], i = 0) {
    const e = this.elements;
    return t[i] = e[0], t[i + 1] = e[1], t[i + 2] = e[2], t[i + 3] = e[3], t[i + 4] = e[4], t[i + 5] = e[5], t[i + 6] = e[6], t[i + 7] = e[7], t[i + 8] = e[8], t[i + 9] = e[9], t[i + 10] = e[10], t[i + 11] = e[11], t[i + 12] = e[12], t[i + 13] = e[13], t[i + 14] = e[14], t[i + 15] = e[15], t;
  }
}
const pt = /* @__PURE__ */ new y(), V = /* @__PURE__ */ new U(), vi = /* @__PURE__ */ new y(0, 0, 0), Vi = /* @__PURE__ */ new y(1, 1, 1), st = /* @__PURE__ */ new y(), Wt = /* @__PURE__ */ new y(), N = /* @__PURE__ */ new y(), Mi = /* @__PURE__ */ new U(), bi = /* @__PURE__ */ new At();
class Jt {
  constructor(t = 0, i = 0, e = 0, s = Jt.DEFAULT_ORDER) {
    this.isEuler = !0, this._x = t, this._y = i, this._z = e, this._order = s;
  }
  get x() {
    return this._x;
  }
  set x(t) {
    this._x = t, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(t) {
    this._y = t, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(t) {
    this._z = t, this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(t) {
    this._order = t, this._onChangeCallback();
  }
  set(t, i, e, s = this._order) {
    return this._x = t, this._y = i, this._z = e, this._order = s, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(t) {
    return this._x = t._x, this._y = t._y, this._z = t._z, this._order = t._order, this._onChangeCallback(), this;
  }
  setFromRotationMatrix(t, i = this._order, e = !0) {
    const s = t.elements, n = s[0], r = s[4], h = s[8], a = s[1], o = s[5], l = s[9], u = s[2], c = s[6], d = s[10];
    switch (i) {
      case "XYZ":
        this._y = Math.asin(W(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._x = Math.atan2(-l, d), this._z = Math.atan2(-r, n)) : (this._x = Math.atan2(c, o), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-W(l, -1, 1)), Math.abs(l) < 0.9999999 ? (this._y = Math.atan2(h, d), this._z = Math.atan2(a, o)) : (this._y = Math.atan2(-u, n), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(W(c, -1, 1)), Math.abs(c) < 0.9999999 ? (this._y = Math.atan2(-u, d), this._z = Math.atan2(-r, o)) : (this._y = 0, this._z = Math.atan2(a, n));
        break;
      case "ZYX":
        this._y = Math.asin(-W(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._x = Math.atan2(c, d), this._z = Math.atan2(a, n)) : (this._x = 0, this._z = Math.atan2(-r, o));
        break;
      case "YZX":
        this._z = Math.asin(W(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(-l, o), this._y = Math.atan2(-u, n)) : (this._x = 0, this._y = Math.atan2(h, d));
        break;
      case "XZY":
        this._z = Math.asin(-W(r, -1, 1)), Math.abs(r) < 0.9999999 ? (this._x = Math.atan2(c, o), this._y = Math.atan2(h, n)) : (this._x = Math.atan2(-l, d), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + i);
    }
    return this._order = i, e === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(t, i, e) {
    return Mi.makeRotationFromQuaternion(t), this.setFromRotationMatrix(Mi, i, e);
  }
  setFromVector3(t, i = this._order) {
    return this.set(t.x, t.y, t.z, i);
  }
  reorder(t) {
    return bi.setFromEuler(this), this.setFromQuaternion(bi, t);
  }
  equals(t) {
    return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order;
  }
  fromArray(t) {
    return this._x = t[0], this._y = t[1], this._z = t[2], t[3] !== void 0 && (this._order = t[3]), this._onChangeCallback(), this;
  }
  toArray(t = [], i = 0) {
    return t[i] = this._x, t[i + 1] = this._y, t[i + 2] = this._z, t[i + 3] = this._order, t;
  }
  _onChange(t) {
    return this._onChangeCallback = t, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
Jt.DEFAULT_ORDER = "XYZ";
class Hi {
  constructor() {
    this.mask = 1;
  }
  set(t) {
    this.mask = (1 << t | 0) >>> 0;
  }
  enable(t) {
    this.mask |= 1 << t | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(t) {
    this.mask ^= 1 << t | 0;
  }
  disable(t) {
    this.mask &= ~(1 << t | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(t) {
    return (this.mask & t.mask) !== 0;
  }
  isEnabled(t) {
    return (this.mask & (1 << t | 0)) !== 0;
  }
}
let Xi = 0;
const wi = /* @__PURE__ */ new y(), ft = /* @__PURE__ */ new At(), j = /* @__PURE__ */ new U(), qt = /* @__PURE__ */ new y(), wt = /* @__PURE__ */ new y(), Yi = /* @__PURE__ */ new y(), Zi = /* @__PURE__ */ new At(), zi = /* @__PURE__ */ new y(1, 0, 0), _i = /* @__PURE__ */ new y(0, 1, 0), Si = /* @__PURE__ */ new y(0, 0, 1), ji = { type: "added" }, Ai = { type: "removed" };
class H extends _t {
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: Xi++ }), this.uuid = St(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = H.DEFAULT_UP.clone();
    const t = new y(), i = new Jt(), e = new At(), s = new y(1, 1, 1);
    function n() {
      e.setFromEuler(i, !1);
    }
    function r() {
      i.setFromQuaternion(e, void 0, !1);
    }
    i._onChange(n), e._onChange(r), Object.defineProperties(this, {
      position: {
        configurable: !0,
        enumerable: !0,
        value: t
      },
      rotation: {
        configurable: !0,
        enumerable: !0,
        value: i
      },
      quaternion: {
        configurable: !0,
        enumerable: !0,
        value: e
      },
      scale: {
        configurable: !0,
        enumerable: !0,
        value: s
      },
      modelViewMatrix: {
        value: new U()
      },
      normalMatrix: {
        value: new lt()
      }
    }), this.matrix = new U(), this.matrixWorld = new U(), this.matrixAutoUpdate = H.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.matrixWorldAutoUpdate = H.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.layers = new Hi(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
  }
  onBeforeRender() {
  }
  onAfterRender() {
  }
  applyMatrix4(t) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(t), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(t) {
    return this.quaternion.premultiply(t), this;
  }
  setRotationFromAxisAngle(t, i) {
    this.quaternion.setFromAxisAngle(t, i);
  }
  setRotationFromEuler(t) {
    this.quaternion.setFromEuler(t, !0);
  }
  setRotationFromMatrix(t) {
    this.quaternion.setFromRotationMatrix(t);
  }
  setRotationFromQuaternion(t) {
    this.quaternion.copy(t);
  }
  rotateOnAxis(t, i) {
    return ft.setFromAxisAngle(t, i), this.quaternion.multiply(ft), this;
  }
  rotateOnWorldAxis(t, i) {
    return ft.setFromAxisAngle(t, i), this.quaternion.premultiply(ft), this;
  }
  rotateX(t) {
    return this.rotateOnAxis(zi, t);
  }
  rotateY(t) {
    return this.rotateOnAxis(_i, t);
  }
  rotateZ(t) {
    return this.rotateOnAxis(Si, t);
  }
  translateOnAxis(t, i) {
    return wi.copy(t).applyQuaternion(this.quaternion), this.position.add(wi.multiplyScalar(i)), this;
  }
  translateX(t) {
    return this.translateOnAxis(zi, t);
  }
  translateY(t) {
    return this.translateOnAxis(_i, t);
  }
  translateZ(t) {
    return this.translateOnAxis(Si, t);
  }
  localToWorld(t) {
    return this.updateWorldMatrix(!0, !1), t.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(t) {
    return this.updateWorldMatrix(!0, !1), t.applyMatrix4(j.copy(this.matrixWorld).invert());
  }
  lookAt(t, i, e) {
    t.isVector3 ? qt.copy(t) : qt.set(t, i, e);
    const s = this.parent;
    this.updateWorldMatrix(!0, !1), wt.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? j.lookAt(wt, qt, this.up) : j.lookAt(qt, wt, this.up), this.quaternion.setFromRotationMatrix(j), s && (j.extractRotation(s.matrixWorld), ft.setFromRotationMatrix(j), this.quaternion.premultiply(ft.invert()));
  }
  add(t) {
    if (arguments.length > 1) {
      for (let i = 0; i < arguments.length; i++)
        this.add(arguments[i]);
      return this;
    }
    return t === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t), this) : (t && t.isObject3D ? (t.parent !== null && t.parent.remove(t), t.parent = this, this.children.push(t), t.dispatchEvent(ji)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t), this);
  }
  remove(t) {
    if (arguments.length > 1) {
      for (let e = 0; e < arguments.length; e++)
        this.remove(arguments[e]);
      return this;
    }
    const i = this.children.indexOf(t);
    return i !== -1 && (t.parent = null, this.children.splice(i, 1), t.dispatchEvent(Ai)), this;
  }
  removeFromParent() {
    const t = this.parent;
    return t !== null && t.remove(this), this;
  }
  clear() {
    for (let t = 0; t < this.children.length; t++) {
      const i = this.children[t];
      i.parent = null, i.dispatchEvent(Ai);
    }
    return this.children.length = 0, this;
  }
  attach(t) {
    return this.updateWorldMatrix(!0, !1), j.copy(this.matrixWorld).invert(), t.parent !== null && (t.parent.updateWorldMatrix(!0, !1), j.multiply(t.parent.matrixWorld)), t.applyMatrix4(j), this.add(t), t.updateWorldMatrix(!1, !0), this;
  }
  getObjectById(t) {
    return this.getObjectByProperty("id", t);
  }
  getObjectByName(t) {
    return this.getObjectByProperty("name", t);
  }
  getObjectByProperty(t, i) {
    if (this[t] === i)
      return this;
    for (let e = 0, s = this.children.length; e < s; e++) {
      const r = this.children[e].getObjectByProperty(t, i);
      if (r !== void 0)
        return r;
    }
  }
  getObjectsByProperty(t, i) {
    let e = [];
    this[t] === i && e.push(this);
    for (let s = 0, n = this.children.length; s < n; s++) {
      const r = this.children[s].getObjectsByProperty(t, i);
      r.length > 0 && (e = e.concat(r));
    }
    return e;
  }
  getWorldPosition(t) {
    return this.updateWorldMatrix(!0, !1), t.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(t) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(wt, t, Yi), t;
  }
  getWorldScale(t) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(wt, Zi, t), t;
  }
  getWorldDirection(t) {
    this.updateWorldMatrix(!0, !1);
    const i = this.matrixWorld.elements;
    return t.set(i[8], i[9], i[10]).normalize();
  }
  raycast() {
  }
  traverse(t) {
    t(this);
    const i = this.children;
    for (let e = 0, s = i.length; e < s; e++)
      i[e].traverse(t);
  }
  traverseVisible(t) {
    if (this.visible === !1)
      return;
    t(this);
    const i = this.children;
    for (let e = 0, s = i.length; e < s; e++)
      i[e].traverseVisible(t);
  }
  traverseAncestors(t) {
    const i = this.parent;
    i !== null && (t(i), i.traverseAncestors(t));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0;
  }
  updateMatrixWorld(t) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t) && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, t = !0);
    const i = this.children;
    for (let e = 0, s = i.length; e < s; e++) {
      const n = i[e];
      (n.matrixWorldAutoUpdate === !0 || t === !0) && n.updateMatrixWorld(t);
    }
  }
  updateWorldMatrix(t, i) {
    const e = this.parent;
    if (t === !0 && e !== null && e.matrixWorldAutoUpdate === !0 && e.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), i === !0) {
      const s = this.children;
      for (let n = 0, r = s.length; n < r; n++) {
        const h = s[n];
        h.matrixWorldAutoUpdate === !0 && h.updateWorldMatrix(!1, !0);
      }
    }
  }
  toJSON(t) {
    const i = t === void 0 || typeof t == "string", e = {};
    i && (t = {
      geometries: {},
      materials: {},
      textures: {},
      images: {},
      shapes: {},
      skeletons: {},
      animations: {},
      nodes: {}
    }, e.metadata = {
      version: 4.5,
      type: "Object",
      generator: "Object3D.toJSON"
    });
    const s = {};
    s.uuid = this.uuid, s.type = this.type, this.name !== "" && (s.name = this.name), this.castShadow === !0 && (s.castShadow = !0), this.receiveShadow === !0 && (s.receiveShadow = !0), this.visible === !1 && (s.visible = !1), this.frustumCulled === !1 && (s.frustumCulled = !1), this.renderOrder !== 0 && (s.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (s.userData = this.userData), s.layers = this.layers.mask, s.matrix = this.matrix.toArray(), this.matrixAutoUpdate === !1 && (s.matrixAutoUpdate = !1), this.isInstancedMesh && (s.type = "InstancedMesh", s.count = this.count, s.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (s.instanceColor = this.instanceColor.toJSON()));
    function n(h, a) {
      return h[a.uuid] === void 0 && (h[a.uuid] = a.toJSON(t)), a.uuid;
    }
    if (this.isScene)
      this.background && (this.background.isColor ? s.background = this.background.toJSON() : this.background.isTexture && (s.background = this.background.toJSON(t).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (s.environment = this.environment.toJSON(t).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      s.geometry = n(t.geometries, this.geometry);
      const h = this.geometry.parameters;
      if (h !== void 0 && h.shapes !== void 0) {
        const a = h.shapes;
        if (Array.isArray(a))
          for (let o = 0, l = a.length; o < l; o++) {
            const u = a[o];
            n(t.shapes, u);
          }
        else
          n(t.shapes, a);
      }
    }
    if (this.isSkinnedMesh && (s.bindMode = this.bindMode, s.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (n(t.skeletons, this.skeleton), s.skeleton = this.skeleton.uuid)), this.material !== void 0)
      if (Array.isArray(this.material)) {
        const h = [];
        for (let a = 0, o = this.material.length; a < o; a++)
          h.push(n(t.materials, this.material[a]));
        s.material = h;
      } else
        s.material = n(t.materials, this.material);
    if (this.children.length > 0) {
      s.children = [];
      for (let h = 0; h < this.children.length; h++)
        s.children.push(this.children[h].toJSON(t).object);
    }
    if (this.animations.length > 0) {
      s.animations = [];
      for (let h = 0; h < this.animations.length; h++) {
        const a = this.animations[h];
        s.animations.push(n(t.animations, a));
      }
    }
    if (i) {
      const h = r(t.geometries), a = r(t.materials), o = r(t.textures), l = r(t.images), u = r(t.shapes), c = r(t.skeletons), d = r(t.animations), m = r(t.nodes);
      h.length > 0 && (e.geometries = h), a.length > 0 && (e.materials = a), o.length > 0 && (e.textures = o), l.length > 0 && (e.images = l), u.length > 0 && (e.shapes = u), c.length > 0 && (e.skeletons = c), d.length > 0 && (e.animations = d), m.length > 0 && (e.nodes = m);
    }
    return e.object = s, e;
    function r(h) {
      const a = [];
      for (const o in h) {
        const l = h[o];
        delete l.metadata, a.push(l);
      }
      return a;
    }
  }
  clone(t) {
    return new this.constructor().copy(this, t);
  }
  copy(t, i = !0) {
    if (this.name = t.name, this.up.copy(t.up), this.position.copy(t.position), this.rotation.order = t.rotation.order, this.quaternion.copy(t.quaternion), this.scale.copy(t.scale), this.matrix.copy(t.matrix), this.matrixWorld.copy(t.matrixWorld), this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate, this.matrixWorldAutoUpdate = t.matrixWorldAutoUpdate, this.layers.mask = t.layers.mask, this.visible = t.visible, this.castShadow = t.castShadow, this.receiveShadow = t.receiveShadow, this.frustumCulled = t.frustumCulled, this.renderOrder = t.renderOrder, this.userData = JSON.parse(JSON.stringify(t.userData)), i === !0)
      for (let e = 0; e < t.children.length; e++) {
        const s = t.children[e];
        this.add(s.clone());
      }
    return this;
  }
}
H.DEFAULT_UP = /* @__PURE__ */ new y(0, 1, 0);
H.DEFAULT_MATRIX_AUTO_UPDATE = !0;
H.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
let Ji = 0;
class fi extends _t {
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: Ji++ }), this.uuid = St(), this.name = "", this.type = "Material", this.blending = 1, this.side = 0, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = 100, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = 3, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = 7680, this.stencilZFail = 7680, this.stencilZPass = 7680, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(t) {
    this._alphaTest > 0 != t > 0 && this.version++, this._alphaTest = t;
  }
  onBuild() {
  }
  onBeforeRender() {
  }
  onBeforeCompile() {
  }
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(t) {
    if (t !== void 0)
      for (const i in t) {
        const e = t[i];
        if (e === void 0) {
          console.warn("THREE.Material: '" + i + "' parameter is undefined.");
          continue;
        }
        const s = this[i];
        if (s === void 0) {
          console.warn("THREE." + this.type + ": '" + i + "' is not a property of this material.");
          continue;
        }
        s && s.isColor ? s.set(e) : s && s.isVector3 && e && e.isVector3 ? s.copy(e) : this[i] = e;
      }
  }
  toJSON(t) {
    const i = t === void 0 || typeof t == "string";
    i && (t = {
      textures: {},
      images: {}
    });
    const e = {
      metadata: {
        version: 4.5,
        type: "Material",
        generator: "Material.toJSON"
      }
    };
    e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), this.color && this.color.isColor && (e.color = this.color.getHex()), this.roughness !== void 0 && (e.roughness = this.roughness), this.metalness !== void 0 && (e.metalness = this.metalness), this.sheen !== void 0 && (e.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (e.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (e.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (e.emissive = this.emissive.getHex()), this.emissiveIntensity && this.emissiveIntensity !== 1 && (e.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (e.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (e.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (e.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (e.shininess = this.shininess), this.clearcoat !== void 0 && (e.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (e.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (e.clearcoatMap = this.clearcoatMap.toJSON(t).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (e.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (e.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid, e.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.iridescence !== void 0 && (e.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (e.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (e.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (e.iridescenceMap = this.iridescenceMap.toJSON(t).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (e.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(t).uuid), this.map && this.map.isTexture && (e.map = this.map.toJSON(t).uuid), this.matcap && this.matcap.isTexture && (e.matcap = this.matcap.toJSON(t).uuid), this.alphaMap && this.alphaMap.isTexture && (e.alphaMap = this.alphaMap.toJSON(t).uuid), this.lightMap && this.lightMap.isTexture && (e.lightMap = this.lightMap.toJSON(t).uuid, e.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (e.aoMap = this.aoMap.toJSON(t).uuid, e.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (e.bumpMap = this.bumpMap.toJSON(t).uuid, e.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (e.normalMap = this.normalMap.toJSON(t).uuid, e.normalMapType = this.normalMapType, e.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (e.displacementMap = this.displacementMap.toJSON(t).uuid, e.displacementScale = this.displacementScale, e.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (e.roughnessMap = this.roughnessMap.toJSON(t).uuid), this.metalnessMap && this.metalnessMap.isTexture && (e.metalnessMap = this.metalnessMap.toJSON(t).uuid), this.emissiveMap && this.emissiveMap.isTexture && (e.emissiveMap = this.emissiveMap.toJSON(t).uuid), this.specularMap && this.specularMap.isTexture && (e.specularMap = this.specularMap.toJSON(t).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (e.specularIntensityMap = this.specularIntensityMap.toJSON(t).uuid), this.specularColorMap && this.specularColorMap.isTexture && (e.specularColorMap = this.specularColorMap.toJSON(t).uuid), this.envMap && this.envMap.isTexture && (e.envMap = this.envMap.toJSON(t).uuid, this.combine !== void 0 && (e.combine = this.combine)), this.envMapIntensity !== void 0 && (e.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (e.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (e.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (e.gradientMap = this.gradientMap.toJSON(t).uuid), this.transmission !== void 0 && (e.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (e.transmissionMap = this.transmissionMap.toJSON(t).uuid), this.thickness !== void 0 && (e.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (e.thicknessMap = this.thicknessMap.toJSON(t).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (e.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (e.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (e.size = this.size), this.shadowSide !== null && (e.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (e.sizeAttenuation = this.sizeAttenuation), this.blending !== 1 && (e.blending = this.blending), this.side !== 0 && (e.side = this.side), this.vertexColors && (e.vertexColors = !0), this.opacity < 1 && (e.opacity = this.opacity), this.transparent === !0 && (e.transparent = this.transparent), e.depthFunc = this.depthFunc, e.depthTest = this.depthTest, e.depthWrite = this.depthWrite, e.colorWrite = this.colorWrite, e.stencilWrite = this.stencilWrite, e.stencilWriteMask = this.stencilWriteMask, e.stencilFunc = this.stencilFunc, e.stencilRef = this.stencilRef, e.stencilFuncMask = this.stencilFuncMask, e.stencilFail = this.stencilFail, e.stencilZFail = this.stencilZFail, e.stencilZPass = this.stencilZPass, this.rotation !== void 0 && this.rotation !== 0 && (e.rotation = this.rotation), this.polygonOffset === !0 && (e.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (e.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (e.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (e.linewidth = this.linewidth), this.dashSize !== void 0 && (e.dashSize = this.dashSize), this.gapSize !== void 0 && (e.gapSize = this.gapSize), this.scale !== void 0 && (e.scale = this.scale), this.dithering === !0 && (e.dithering = !0), this.alphaTest > 0 && (e.alphaTest = this.alphaTest), this.alphaToCoverage === !0 && (e.alphaToCoverage = this.alphaToCoverage), this.premultipliedAlpha === !0 && (e.premultipliedAlpha = this.premultipliedAlpha), this.forceSinglePass === !0 && (e.forceSinglePass = this.forceSinglePass), this.wireframe === !0 && (e.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (e.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (e.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (e.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (e.flatShading = this.flatShading), this.visible === !1 && (e.visible = !1), this.toneMapped === !1 && (e.toneMapped = !1), this.fog === !1 && (e.fog = !1), Object.keys(this.userData).length > 0 && (e.userData = this.userData);
    function s(n) {
      const r = [];
      for (const h in n) {
        const a = n[h];
        delete a.metadata, r.push(a);
      }
      return r;
    }
    if (i) {
      const n = s(t.textures), r = s(t.images);
      n.length > 0 && (e.textures = n), r.length > 0 && (e.images = r);
    }
    return e;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    this.name = t.name, this.blending = t.blending, this.side = t.side, this.vertexColors = t.vertexColors, this.opacity = t.opacity, this.transparent = t.transparent, this.blendSrc = t.blendSrc, this.blendDst = t.blendDst, this.blendEquation = t.blendEquation, this.blendSrcAlpha = t.blendSrcAlpha, this.blendDstAlpha = t.blendDstAlpha, this.blendEquationAlpha = t.blendEquationAlpha, this.depthFunc = t.depthFunc, this.depthTest = t.depthTest, this.depthWrite = t.depthWrite, this.stencilWriteMask = t.stencilWriteMask, this.stencilFunc = t.stencilFunc, this.stencilRef = t.stencilRef, this.stencilFuncMask = t.stencilFuncMask, this.stencilFail = t.stencilFail, this.stencilZFail = t.stencilZFail, this.stencilZPass = t.stencilZPass, this.stencilWrite = t.stencilWrite;
    const i = t.clippingPlanes;
    let e = null;
    if (i !== null) {
      const s = i.length;
      e = new Array(s);
      for (let n = 0; n !== s; ++n)
        e[n] = i[n].clone();
    }
    return this.clippingPlanes = e, this.clipIntersection = t.clipIntersection, this.clipShadows = t.clipShadows, this.shadowSide = t.shadowSide, this.colorWrite = t.colorWrite, this.precision = t.precision, this.polygonOffset = t.polygonOffset, this.polygonOffsetFactor = t.polygonOffsetFactor, this.polygonOffsetUnits = t.polygonOffsetUnits, this.dithering = t.dithering, this.alphaTest = t.alphaTest, this.alphaToCoverage = t.alphaToCoverage, this.premultipliedAlpha = t.premultipliedAlpha, this.forceSinglePass = t.forceSinglePass, this.visible = t.visible, this.toneMapped = t.toneMapped, this.userData = JSON.parse(JSON.stringify(t.userData)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(t) {
    t === !0 && this.version++;
  }
}
const F = /* @__PURE__ */ new y(), Ut = /* @__PURE__ */ new G();
class ot {
  constructor(t, i, e = !1) {
    if (Array.isArray(t))
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = !0, this.name = "", this.array = t, this.itemSize = i, this.count = t !== void 0 ? t.length / i : 0, this.normalized = e, this.usage = 35044, this.updateRange = { offset: 0, count: -1 }, this.version = 0;
  }
  onUploadCallback() {
  }
  set needsUpdate(t) {
    t === !0 && this.version++;
  }
  setUsage(t) {
    return this.usage = t, this;
  }
  copy(t) {
    return this.name = t.name, this.array = new t.array.constructor(t.array), this.itemSize = t.itemSize, this.count = t.count, this.normalized = t.normalized, this.usage = t.usage, this;
  }
  copyAt(t, i, e) {
    t *= this.itemSize, e *= i.itemSize;
    for (let s = 0, n = this.itemSize; s < n; s++)
      this.array[t + s] = i.array[e + s];
    return this;
  }
  copyArray(t) {
    return this.array.set(t), this;
  }
  applyMatrix3(t) {
    if (this.itemSize === 2)
      for (let i = 0, e = this.count; i < e; i++)
        Ut.fromBufferAttribute(this, i), Ut.applyMatrix3(t), this.setXY(i, Ut.x, Ut.y);
    else if (this.itemSize === 3)
      for (let i = 0, e = this.count; i < e; i++)
        F.fromBufferAttribute(this, i), F.applyMatrix3(t), this.setXYZ(i, F.x, F.y, F.z);
    return this;
  }
  applyMatrix4(t) {
    for (let i = 0, e = this.count; i < e; i++)
      F.fromBufferAttribute(this, i), F.applyMatrix4(t), this.setXYZ(i, F.x, F.y, F.z);
    return this;
  }
  applyNormalMatrix(t) {
    for (let i = 0, e = this.count; i < e; i++)
      F.fromBufferAttribute(this, i), F.applyNormalMatrix(t), this.setXYZ(i, F.x, F.y, F.z);
    return this;
  }
  transformDirection(t) {
    for (let i = 0, e = this.count; i < e; i++)
      F.fromBufferAttribute(this, i), F.transformDirection(t), this.setXYZ(i, F.x, F.y, F.z);
    return this;
  }
  set(t, i = 0) {
    return this.array.set(t, i), this;
  }
  getX(t) {
    let i = this.array[t * this.itemSize];
    return this.normalized && (i = Rt(i, this.array)), i;
  }
  setX(t, i) {
    return this.normalized && (i = P(i, this.array)), this.array[t * this.itemSize] = i, this;
  }
  getY(t) {
    let i = this.array[t * this.itemSize + 1];
    return this.normalized && (i = Rt(i, this.array)), i;
  }
  setY(t, i) {
    return this.normalized && (i = P(i, this.array)), this.array[t * this.itemSize + 1] = i, this;
  }
  getZ(t) {
    let i = this.array[t * this.itemSize + 2];
    return this.normalized && (i = Rt(i, this.array)), i;
  }
  setZ(t, i) {
    return this.normalized && (i = P(i, this.array)), this.array[t * this.itemSize + 2] = i, this;
  }
  getW(t) {
    let i = this.array[t * this.itemSize + 3];
    return this.normalized && (i = Rt(i, this.array)), i;
  }
  setW(t, i) {
    return this.normalized && (i = P(i, this.array)), this.array[t * this.itemSize + 3] = i, this;
  }
  setXY(t, i, e) {
    return t *= this.itemSize, this.normalized && (i = P(i, this.array), e = P(e, this.array)), this.array[t + 0] = i, this.array[t + 1] = e, this;
  }
  setXYZ(t, i, e, s) {
    return t *= this.itemSize, this.normalized && (i = P(i, this.array), e = P(e, this.array), s = P(s, this.array)), this.array[t + 0] = i, this.array[t + 1] = e, this.array[t + 2] = s, this;
  }
  setXYZW(t, i, e, s, n) {
    return t *= this.itemSize, this.normalized && (i = P(i, this.array), e = P(e, this.array), s = P(s, this.array), n = P(n, this.array)), this.array[t + 0] = i, this.array[t + 1] = e, this.array[t + 2] = s, this.array[t + 3] = n, this;
  }
  onUpload(t) {
    return this.onUploadCallback = t, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const t = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized
    };
    return this.name !== "" && (t.name = this.name), this.usage !== 35044 && (t.usage = this.usage), (this.updateRange.offset !== 0 || this.updateRange.count !== -1) && (t.updateRange = this.updateRange), t;
  }
  // @deprecated
  copyColorsArray() {
    console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.");
  }
  copyVector2sArray() {
    console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.");
  }
  copyVector3sArray() {
    console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.");
  }
  copyVector4sArray() {
    console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.");
  }
}
class Ee extends ot {
  constructor(t, i, e) {
    super(new Uint8Array(t), i, e);
  }
}
class Gi extends ot {
  constructor(t, i, e) {
    super(new Uint16Array(t), i, e);
  }
}
class $i extends ot {
  constructor(t, i, e) {
    super(new Uint32Array(t), i, e);
  }
}
class yi extends ot {
  constructor(t, i, e) {
    super(new Float32Array(t), i, e);
  }
}
let Qi = 0;
const q = /* @__PURE__ */ new U(), li = /* @__PURE__ */ new H(), yt = /* @__PURE__ */ new y(), L = /* @__PURE__ */ new Ft(), zt = /* @__PURE__ */ new Ft(), B = /* @__PURE__ */ new y();
class Gt extends _t {
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: Qi++ }), this.uuid = St(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(t) {
    return Array.isArray(t) ? this.index = new (Li(t) ? $i : Gi)(t, 1) : this.index = t, this;
  }
  getAttribute(t) {
    return this.attributes[t];
  }
  setAttribute(t, i) {
    return this.attributes[t] = i, this;
  }
  deleteAttribute(t) {
    return delete this.attributes[t], this;
  }
  hasAttribute(t) {
    return this.attributes[t] !== void 0;
  }
  addGroup(t, i, e = 0) {
    this.groups.push({
      start: t,
      count: i,
      materialIndex: e
    });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(t, i) {
    this.drawRange.start = t, this.drawRange.count = i;
  }
  applyMatrix4(t) {
    const i = this.attributes.position;
    i !== void 0 && (i.applyMatrix4(t), i.needsUpdate = !0);
    const e = this.attributes.normal;
    if (e !== void 0) {
      const n = new lt().getNormalMatrix(t);
      e.applyNormalMatrix(n), e.needsUpdate = !0;
    }
    const s = this.attributes.tangent;
    return s !== void 0 && (s.transformDirection(t), s.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(t) {
    return q.makeRotationFromQuaternion(t), this.applyMatrix4(q), this;
  }
  rotateX(t) {
    return q.makeRotationX(t), this.applyMatrix4(q), this;
  }
  rotateY(t) {
    return q.makeRotationY(t), this.applyMatrix4(q), this;
  }
  rotateZ(t) {
    return q.makeRotationZ(t), this.applyMatrix4(q), this;
  }
  translate(t, i, e) {
    return q.makeTranslation(t, i, e), this.applyMatrix4(q), this;
  }
  scale(t, i, e) {
    return q.makeScale(t, i, e), this.applyMatrix4(q), this;
  }
  lookAt(t) {
    return li.lookAt(t), li.updateMatrix(), this.applyMatrix4(li.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(yt).negate(), this.translate(yt.x, yt.y, yt.z), this;
  }
  setFromPoints(t) {
    const i = [];
    for (let e = 0, s = t.length; e < s; e++) {
      const n = t[e];
      i.push(n.x, n.y, n.z || 0);
    }
    return this.setAttribute("position", new yi(i, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new Ft());
    const t = this.attributes.position, i = this.morphAttributes.position;
    if (t && t.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingBox.set(
        new y(-1 / 0, -1 / 0, -1 / 0),
        new y(1 / 0, 1 / 0, 1 / 0)
      );
      return;
    }
    if (t !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(t), i)
        for (let e = 0, s = i.length; e < s; e++) {
          const n = i[e];
          L.setFromBufferAttribute(n), this.morphTargetsRelative ? (B.addVectors(this.boundingBox.min, L.min), this.boundingBox.expandByPoint(B), B.addVectors(this.boundingBox.max, L.max), this.boundingBox.expandByPoint(B)) : (this.boundingBox.expandByPoint(L.min), this.boundingBox.expandByPoint(L.max));
        }
    } else
      this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new jt());
    const t = this.attributes.position, i = this.morphAttributes.position;
    if (t && t.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingSphere.set(new y(), 1 / 0);
      return;
    }
    if (t) {
      const e = this.boundingSphere.center;
      if (L.setFromBufferAttribute(t), i)
        for (let n = 0, r = i.length; n < r; n++) {
          const h = i[n];
          zt.setFromBufferAttribute(h), this.morphTargetsRelative ? (B.addVectors(L.min, zt.min), L.expandByPoint(B), B.addVectors(L.max, zt.max), L.expandByPoint(B)) : (L.expandByPoint(zt.min), L.expandByPoint(zt.max));
        }
      L.getCenter(e);
      let s = 0;
      for (let n = 0, r = t.count; n < r; n++)
        B.fromBufferAttribute(t, n), s = Math.max(s, e.distanceToSquared(B));
      if (i)
        for (let n = 0, r = i.length; n < r; n++) {
          const h = i[n], a = this.morphTargetsRelative;
          for (let o = 0, l = h.count; o < l; o++)
            B.fromBufferAttribute(h, o), a && (yt.fromBufferAttribute(t, o), B.add(yt)), s = Math.max(s, e.distanceToSquared(B));
        }
      this.boundingSphere.radius = Math.sqrt(s), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeTangents() {
    const t = this.index, i = this.attributes;
    if (t === null || i.position === void 0 || i.normal === void 0 || i.uv === void 0) {
      console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const e = t.array, s = i.position.array, n = i.normal.array, r = i.uv.array, h = s.length / 3;
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new ot(new Float32Array(4 * h), 4));
    const a = this.getAttribute("tangent").array, o = [], l = [];
    for (let A = 0; A < h; A++)
      o[A] = new y(), l[A] = new y();
    const u = new y(), c = new y(), d = new y(), m = new G(), f = new G(), x = new G(), g = new y(), z = new y();
    function M(A, C, k) {
      u.fromArray(s, A * 3), c.fromArray(s, C * 3), d.fromArray(s, k * 3), m.fromArray(r, A * 2), f.fromArray(r, C * 2), x.fromArray(r, k * 2), c.sub(u), d.sub(u), f.sub(m), x.sub(m);
      const E = 1 / (f.x * x.y - x.x * f.y);
      isFinite(E) && (g.copy(c).multiplyScalar(x.y).addScaledVector(d, -f.y).multiplyScalar(E), z.copy(d).multiplyScalar(f.x).addScaledVector(c, -x.x).multiplyScalar(E), o[A].add(g), o[C].add(g), o[k].add(g), l[A].add(z), l[C].add(z), l[k].add(z));
    }
    let _ = this.groups;
    _.length === 0 && (_ = [{
      start: 0,
      count: e.length
    }]);
    for (let A = 0, C = _.length; A < C; ++A) {
      const k = _[A], E = k.start, Q = k.count;
      for (let R = E, K = E + Q; R < K; R += 3)
        M(
          e[R + 0],
          e[R + 1],
          e[R + 2]
        );
    }
    const b = new y(), S = new y(), w = new y(), I = new y();
    function $(A) {
      w.fromArray(n, A * 3), I.copy(w);
      const C = o[A];
      b.copy(C), b.sub(w.multiplyScalar(w.dot(C))).normalize(), S.crossVectors(I, C);
      const E = S.dot(l[A]) < 0 ? -1 : 1;
      a[A * 4] = b.x, a[A * 4 + 1] = b.y, a[A * 4 + 2] = b.z, a[A * 4 + 3] = E;
    }
    for (let A = 0, C = _.length; A < C; ++A) {
      const k = _[A], E = k.start, Q = k.count;
      for (let R = E, K = E + Q; R < K; R += 3)
        $(e[R + 0]), $(e[R + 1]), $(e[R + 2]);
    }
  }
  computeVertexNormals() {
    const t = this.index, i = this.getAttribute("position");
    if (i !== void 0) {
      let e = this.getAttribute("normal");
      if (e === void 0)
        e = new ot(new Float32Array(i.count * 3), 3), this.setAttribute("normal", e);
      else
        for (let c = 0, d = e.count; c < d; c++)
          e.setXYZ(c, 0, 0, 0);
      const s = new y(), n = new y(), r = new y(), h = new y(), a = new y(), o = new y(), l = new y(), u = new y();
      if (t)
        for (let c = 0, d = t.count; c < d; c += 3) {
          const m = t.getX(c + 0), f = t.getX(c + 1), x = t.getX(c + 2);
          s.fromBufferAttribute(i, m), n.fromBufferAttribute(i, f), r.fromBufferAttribute(i, x), l.subVectors(r, n), u.subVectors(s, n), l.cross(u), h.fromBufferAttribute(e, m), a.fromBufferAttribute(e, f), o.fromBufferAttribute(e, x), h.add(l), a.add(l), o.add(l), e.setXYZ(m, h.x, h.y, h.z), e.setXYZ(f, a.x, a.y, a.z), e.setXYZ(x, o.x, o.y, o.z);
        }
      else
        for (let c = 0, d = i.count; c < d; c += 3)
          s.fromBufferAttribute(i, c + 0), n.fromBufferAttribute(i, c + 1), r.fromBufferAttribute(i, c + 2), l.subVectors(r, n), u.subVectors(s, n), l.cross(u), e.setXYZ(c + 0, l.x, l.y, l.z), e.setXYZ(c + 1, l.x, l.y, l.z), e.setXYZ(c + 2, l.x, l.y, l.z);
      this.normalizeNormals(), e.needsUpdate = !0;
    }
  }
  // @deprecated since r144
  merge() {
    return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."), this;
  }
  normalizeNormals() {
    const t = this.attributes.normal;
    for (let i = 0, e = t.count; i < e; i++)
      B.fromBufferAttribute(t, i), B.normalize(), t.setXYZ(i, B.x, B.y, B.z);
  }
  toNonIndexed() {
    function t(h, a) {
      const o = h.array, l = h.itemSize, u = h.normalized, c = new o.constructor(a.length * l);
      let d = 0, m = 0;
      for (let f = 0, x = a.length; f < x; f++) {
        h.isInterleavedBufferAttribute ? d = a[f] * h.data.stride + h.offset : d = a[f] * l;
        for (let g = 0; g < l; g++)
          c[m++] = o[d++];
      }
      return new ot(c, l, u);
    }
    if (this.index === null)
      return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const i = new Gt(), e = this.index.array, s = this.attributes;
    for (const h in s) {
      const a = s[h], o = t(a, e);
      i.setAttribute(h, o);
    }
    const n = this.morphAttributes;
    for (const h in n) {
      const a = [], o = n[h];
      for (let l = 0, u = o.length; l < u; l++) {
        const c = o[l], d = t(c, e);
        a.push(d);
      }
      i.morphAttributes[h] = a;
    }
    i.morphTargetsRelative = this.morphTargetsRelative;
    const r = this.groups;
    for (let h = 0, a = r.length; h < a; h++) {
      const o = r[h];
      i.addGroup(o.start, o.count, o.materialIndex);
    }
    return i;
  }
  toJSON() {
    const t = {
      metadata: {
        version: 4.5,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON"
      }
    };
    if (t.uuid = this.uuid, t.type = this.type, this.name !== "" && (t.name = this.name), Object.keys(this.userData).length > 0 && (t.userData = this.userData), this.parameters !== void 0) {
      const a = this.parameters;
      for (const o in a)
        a[o] !== void 0 && (t[o] = a[o]);
      return t;
    }
    t.data = { attributes: {} };
    const i = this.index;
    i !== null && (t.data.index = {
      type: i.array.constructor.name,
      array: Array.prototype.slice.call(i.array)
    });
    const e = this.attributes;
    for (const a in e) {
      const o = e[a];
      t.data.attributes[a] = o.toJSON(t.data);
    }
    const s = {};
    let n = !1;
    for (const a in this.morphAttributes) {
      const o = this.morphAttributes[a], l = [];
      for (let u = 0, c = o.length; u < c; u++) {
        const d = o[u];
        l.push(d.toJSON(t.data));
      }
      l.length > 0 && (s[a] = l, n = !0);
    }
    n && (t.data.morphAttributes = s, t.data.morphTargetsRelative = this.morphTargetsRelative);
    const r = this.groups;
    r.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(r)));
    const h = this.boundingSphere;
    return h !== null && (t.data.boundingSphere = {
      center: h.center.toArray(),
      radius: h.radius
    }), t;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const i = {};
    this.name = t.name;
    const e = t.index;
    e !== null && this.setIndex(e.clone(i));
    const s = t.attributes;
    for (const o in s) {
      const l = s[o];
      this.setAttribute(o, l.clone(i));
    }
    const n = t.morphAttributes;
    for (const o in n) {
      const l = [], u = n[o];
      for (let c = 0, d = u.length; c < d; c++)
        l.push(u[c].clone(i));
      this.morphAttributes[o] = l;
    }
    this.morphTargetsRelative = t.morphTargetsRelative;
    const r = t.groups;
    for (let o = 0, l = r.length; o < l; o++) {
      const u = r[o];
      this.addGroup(u.start, u.count, u.materialIndex);
    }
    const h = t.boundingBox;
    h !== null && (this.boundingBox = h.clone());
    const a = t.boundingSphere;
    return a !== null && (this.boundingSphere = a.clone()), this.drawRange.start = t.drawRange.start, this.drawRange.count = t.drawRange.count, this.userData = t.userData, t.parameters !== void 0 && (this.parameters = Object.assign({}, t.parameters)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
function Ki(p) {
  const t = {};
  for (const i in p) {
    t[i] = {};
    for (const e in p[i]) {
      const s = p[i][e];
      s && (s.isColor || s.isMatrix3 || s.isMatrix4 || s.isVector2 || s.isVector3 || s.isVector4 || s.isTexture || s.isQuaternion) ? t[i][e] = s.clone() : Array.isArray(s) ? t[i][e] = s.slice() : t[i][e] = s;
    }
  }
  return t;
}
function te(p) {
  const t = [];
  for (let i = 0; i < p.length; i++)
    t.push(p[i].clone());
  return t;
}
var ie = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, ee = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class se extends fi {
  constructor(t) {
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = ie, this.fragmentShader = ee, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.extensions = {
      derivatives: !1,
      // set to use derivatives
      fragDepth: !1,
      // set to use fragment depth values
      drawBuffers: !1,
      // set to use draw buffers
      shaderTextureLOD: !1
      // set to use shader texture LOD
    }, this.defaultAttributeValues = {
      color: [1, 1, 1],
      uv: [0, 0],
      uv2: [0, 0]
    }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, t !== void 0 && this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.fragmentShader = t.fragmentShader, this.vertexShader = t.vertexShader, this.uniforms = Ki(t.uniforms), this.uniformsGroups = te(t.uniformsGroups), this.defines = Object.assign({}, t.defines), this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.fog = t.fog, this.lights = t.lights, this.clipping = t.clipping, this.extensions = Object.assign({}, t.extensions), this.glslVersion = t.glslVersion, this;
  }
  toJSON(t) {
    const i = super.toJSON(t);
    i.glslVersion = this.glslVersion, i.uniforms = {};
    for (const s in this.uniforms) {
      const r = this.uniforms[s].value;
      r && r.isTexture ? i.uniforms[s] = {
        type: "t",
        value: r.toJSON(t).uuid
      } : r && r.isColor ? i.uniforms[s] = {
        type: "c",
        value: r.getHex()
      } : r && r.isVector2 ? i.uniforms[s] = {
        type: "v2",
        value: r.toArray()
      } : r && r.isVector3 ? i.uniforms[s] = {
        type: "v3",
        value: r.toArray()
      } : r && r.isVector4 ? i.uniforms[s] = {
        type: "v4",
        value: r.toArray()
      } : r && r.isMatrix3 ? i.uniforms[s] = {
        type: "m3",
        value: r.toArray()
      } : r && r.isMatrix4 ? i.uniforms[s] = {
        type: "m4",
        value: r.toArray()
      } : i.uniforms[s] = {
        value: r
      };
    }
    Object.keys(this.defines).length > 0 && (i.defines = this.defines), i.vertexShader = this.vertexShader, i.fragmentShader = this.fragmentShader;
    const e = {};
    for (const s in this.extensions)
      this.extensions[s] === !0 && (e[s] = !0);
    return Object.keys(e).length > 0 && (i.extensions = e), i;
  }
}
const ui = /* @__PURE__ */ new y(), ne = /* @__PURE__ */ new y(), re = /* @__PURE__ */ new lt();
class xt {
  constructor(t = new y(1, 0, 0), i = 0) {
    this.isPlane = !0, this.normal = t, this.constant = i;
  }
  set(t, i) {
    return this.normal.copy(t), this.constant = i, this;
  }
  setComponents(t, i, e, s) {
    return this.normal.set(t, i, e), this.constant = s, this;
  }
  setFromNormalAndCoplanarPoint(t, i) {
    return this.normal.copy(t), this.constant = -i.dot(this.normal), this;
  }
  setFromCoplanarPoints(t, i, e) {
    const s = ui.subVectors(e, i).cross(ne.subVectors(t, i)).normalize();
    return this.setFromNormalAndCoplanarPoint(s, t), this;
  }
  copy(t) {
    return this.normal.copy(t.normal), this.constant = t.constant, this;
  }
  normalize() {
    const t = 1 / this.normal.length();
    return this.normal.multiplyScalar(t), this.constant *= t, this;
  }
  negate() {
    return this.constant *= -1, this.normal.negate(), this;
  }
  distanceToPoint(t) {
    return this.normal.dot(t) + this.constant;
  }
  distanceToSphere(t) {
    return this.distanceToPoint(t.center) - t.radius;
  }
  projectPoint(t, i) {
    return i.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t);
  }
  intersectLine(t, i) {
    const e = t.delta(ui), s = this.normal.dot(e);
    if (s === 0)
      return this.distanceToPoint(t.start) === 0 ? i.copy(t.start) : null;
    const n = -(t.start.dot(this.normal) + this.constant) / s;
    return n < 0 || n > 1 ? null : i.copy(e).multiplyScalar(n).add(t.start);
  }
  intersectsLine(t) {
    const i = this.distanceToPoint(t.start), e = this.distanceToPoint(t.end);
    return i < 0 && e > 0 || e < 0 && i > 0;
  }
  intersectsBox(t) {
    return t.intersectsPlane(this);
  }
  intersectsSphere(t) {
    return t.intersectsPlane(this);
  }
  coplanarPoint(t) {
    return t.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(t, i) {
    const e = i || re.getNormalMatrix(t), s = this.coplanarPoint(ui).applyMatrix4(t), n = this.normal.applyMatrix3(e).normalize();
    return this.constant = -s.dot(n), this;
  }
  translate(t) {
    return this.constant -= t.dot(this.normal), this;
  }
  equals(t) {
    return t.normal.equals(this.normal) && t.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const gt = /* @__PURE__ */ new jt(), vt = /* @__PURE__ */ new y();
class Re {
  constructor(t = new xt(), i = new xt(), e = new xt(), s = new xt(), n = new xt(), r = new xt()) {
    this.planes = [t, i, e, s, n, r];
  }
  set(t, i, e, s, n, r) {
    const h = this.planes;
    return h[0].copy(t), h[1].copy(i), h[2].copy(e), h[3].copy(s), h[4].copy(n), h[5].copy(r), this;
  }
  copy(t) {
    const i = this.planes;
    for (let e = 0; e < 6; e++)
      i[e].copy(t.planes[e]);
    return this;
  }
  setFromProjectionMatrix(t) {
    const i = this.planes, e = t.elements, s = e[0], n = e[1], r = e[2], h = e[3], a = e[4], o = e[5], l = e[6], u = e[7], c = e[8], d = e[9], m = e[10], f = e[11], x = e[12], g = e[13], z = e[14], M = e[15];
    return i[0].setComponents(h - s, u - a, f - c, M - x).normalize(), i[1].setComponents(h + s, u + a, f + c, M + x).normalize(), i[2].setComponents(h + n, u + o, f + d, M + g).normalize(), i[3].setComponents(h - n, u - o, f - d, M - g).normalize(), i[4].setComponents(h - r, u - l, f - m, M - z).normalize(), i[5].setComponents(h + r, u + l, f + m, M + z).normalize(), this;
  }
  intersectsObject(t) {
    const i = t.geometry;
    return i.boundingSphere === null && i.computeBoundingSphere(), gt.copy(i.boundingSphere).applyMatrix4(t.matrixWorld), this.intersectsSphere(gt);
  }
  intersectsSprite(t) {
    return gt.center.set(0, 0, 0), gt.radius = 0.7071067811865476, gt.applyMatrix4(t.matrixWorld), this.intersectsSphere(gt);
  }
  intersectsSphere(t) {
    const i = this.planes, e = t.center, s = -t.radius;
    for (let n = 0; n < 6; n++)
      if (i[n].distanceToPoint(e) < s)
        return !1;
    return !0;
  }
  intersectsBox(t) {
    const i = this.planes;
    for (let e = 0; e < 6; e++) {
      const s = i[e];
      if (vt.x = s.normal.x > 0 ? t.max.x : t.min.x, vt.y = s.normal.y > 0 ? t.max.y : t.min.y, vt.z = s.normal.z > 0 ? t.max.z : t.min.z, s.distanceToPoint(vt) < 0)
        return !1;
    }
    return !0;
  }
  containsPoint(t) {
    const i = this.planes;
    for (let e = 0; e < 6; e++)
      if (i[e].distanceToPoint(t) < 0)
        return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class De extends H {
  constructor() {
    super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(t, i) {
    return super.copy(t, i), t.background !== null && (this.background = t.background.clone()), t.environment !== null && (this.environment = t.environment.clone()), t.fog !== null && (this.fog = t.fog.clone()), this.backgroundBlurriness = t.backgroundBlurriness, this.backgroundIntensity = t.backgroundIntensity, t.overrideMaterial !== null && (this.overrideMaterial = t.overrideMaterial.clone()), this.matrixAutoUpdate = t.matrixAutoUpdate, this;
  }
  toJSON(t) {
    const i = super.toJSON(t);
    return this.fog !== null && (i.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (i.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (i.object.backgroundIntensity = this.backgroundIntensity), i;
  }
  // @deprecated
  get autoUpdate() {
    return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."), this.matrixWorldAutoUpdate;
  }
  set autoUpdate(t) {
    console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."), this.matrixWorldAutoUpdate = t;
  }
}
class Oe extends X {
  constructor(t = null, i = 1, e = 1, s, n, r, h, a, o = 1003, l = 1003, u, c) {
    super(null, r, h, a, o, l, s, n, u, c), this.isDataTexture = !0, this.image = { data: t, width: i, height: e }, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class he extends fi {
  constructor(t) {
    super(), this.isLineBasicMaterial = !0, this.type = "LineBasicMaterial", this.color = new pi(16777215), this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.linewidth = t.linewidth, this.linecap = t.linecap, this.linejoin = t.linejoin, this.fog = t.fog, this;
  }
}
const Fi = /* @__PURE__ */ new y(), Ti = /* @__PURE__ */ new y(), Bi = /* @__PURE__ */ new U(), ci = /* @__PURE__ */ new Pi(), Vt = /* @__PURE__ */ new jt();
class ae extends H {
  constructor(t = new Gt(), i = new he()) {
    super(), this.isLine = !0, this.type = "Line", this.geometry = t, this.material = i, this.updateMorphTargets();
  }
  copy(t, i) {
    return super.copy(t, i), this.material = t.material, this.geometry = t.geometry, this;
  }
  computeLineDistances() {
    const t = this.geometry;
    if (t.index === null) {
      const i = t.attributes.position, e = [0];
      for (let s = 1, n = i.count; s < n; s++)
        Fi.fromBufferAttribute(i, s - 1), Ti.fromBufferAttribute(i, s), e[s] = e[s - 1], e[s] += Fi.distanceTo(Ti);
      t.setAttribute("lineDistance", new yi(e, 1));
    } else
      console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
  raycast(t, i) {
    const e = this.geometry, s = this.matrixWorld, n = t.params.Line.threshold, r = e.drawRange;
    if (e.boundingSphere === null && e.computeBoundingSphere(), Vt.copy(e.boundingSphere), Vt.applyMatrix4(s), Vt.radius += n, t.ray.intersectsSphere(Vt) === !1)
      return;
    Bi.copy(s).invert(), ci.copy(t.ray).applyMatrix4(Bi);
    const h = n / ((this.scale.x + this.scale.y + this.scale.z) / 3), a = h * h, o = new y(), l = new y(), u = new y(), c = new y(), d = this.isLineSegments ? 2 : 1, m = e.index, x = e.attributes.position;
    if (m !== null) {
      const g = Math.max(0, r.start), z = Math.min(m.count, r.start + r.count);
      for (let M = g, _ = z - 1; M < _; M += d) {
        const b = m.getX(M), S = m.getX(M + 1);
        if (o.fromBufferAttribute(x, b), l.fromBufferAttribute(x, S), ci.distanceSqToSegment(o, l, c, u) > a)
          continue;
        c.applyMatrix4(this.matrixWorld);
        const I = t.ray.origin.distanceTo(c);
        I < t.near || I > t.far || i.push({
          distance: I,
          // What do we want? intersection point on the ray or on the segment??
          // point: raycaster.ray.at( distance ),
          point: u.clone().applyMatrix4(this.matrixWorld),
          index: M,
          face: null,
          faceIndex: null,
          object: this
        });
      }
    } else {
      const g = Math.max(0, r.start), z = Math.min(x.count, r.start + r.count);
      for (let M = g, _ = z - 1; M < _; M += d) {
        if (o.fromBufferAttribute(x, M), l.fromBufferAttribute(x, M + 1), ci.distanceSqToSegment(o, l, c, u) > a)
          continue;
        c.applyMatrix4(this.matrixWorld);
        const S = t.ray.origin.distanceTo(c);
        S < t.near || S > t.far || i.push({
          distance: S,
          // What do we want? intersection point on the ray or on the segment??
          // point: raycaster.ray.at( distance ),
          point: u.clone().applyMatrix4(this.matrixWorld),
          index: M,
          face: null,
          faceIndex: null,
          object: this
        });
      }
    }
  }
  updateMorphTargets() {
    const i = this.geometry.morphAttributes, e = Object.keys(i);
    if (e.length > 0) {
      const s = i[e[0]];
      if (s !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let n = 0, r = s.length; n < r; n++) {
          const h = s[n].name || String(n);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[h] = n;
        }
      }
    }
  }
}
const Ci = /* @__PURE__ */ new y(), ki = /* @__PURE__ */ new y();
class Ie extends ae {
  constructor(t, i) {
    super(t, i), this.isLineSegments = !0, this.type = "LineSegments";
  }
  computeLineDistances() {
    const t = this.geometry;
    if (t.index === null) {
      const i = t.attributes.position, e = [];
      for (let s = 0, n = i.count; s < n; s += 2)
        Ci.fromBufferAttribute(i, s), ki.fromBufferAttribute(i, s + 1), e[s] = s === 0 ? 0 : e[s - 1], e[s + 1] = e[s] + Ci.distanceTo(ki);
      t.setAttribute("lineDistance", new yi(e, 1));
    } else
      console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
}
class oe extends fi {
  constructor(t) {
    super(), this.isPointsMaterial = !0, this.type = "PointsMaterial", this.color = new pi(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.fog = !0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.map = t.map, this.alphaMap = t.alphaMap, this.size = t.size, this.sizeAttenuation = t.sizeAttenuation, this.fog = t.fog, this;
  }
}
const Ei = /* @__PURE__ */ new U(), mi = /* @__PURE__ */ new Pi(), Ht = /* @__PURE__ */ new jt(), Xt = /* @__PURE__ */ new y();
class Pe extends H {
  constructor(t = new Gt(), i = new oe()) {
    super(), this.isPoints = !0, this.type = "Points", this.geometry = t, this.material = i, this.updateMorphTargets();
  }
  copy(t, i) {
    return super.copy(t, i), this.material = t.material, this.geometry = t.geometry, this;
  }
  raycast(t, i) {
    const e = this.geometry, s = this.matrixWorld, n = t.params.Points.threshold, r = e.drawRange;
    if (e.boundingSphere === null && e.computeBoundingSphere(), Ht.copy(e.boundingSphere), Ht.applyMatrix4(s), Ht.radius += n, t.ray.intersectsSphere(Ht) === !1)
      return;
    Ei.copy(s).invert(), mi.copy(t.ray).applyMatrix4(Ei);
    const h = n / ((this.scale.x + this.scale.y + this.scale.z) / 3), a = h * h, o = e.index, u = e.attributes.position;
    if (o !== null) {
      const c = Math.max(0, r.start), d = Math.min(o.count, r.start + r.count);
      for (let m = c, f = d; m < f; m++) {
        const x = o.getX(m);
        Xt.fromBufferAttribute(u, x), Ri(Xt, x, a, s, t, i, this);
      }
    } else {
      const c = Math.max(0, r.start), d = Math.min(u.count, r.start + r.count);
      for (let m = c, f = d; m < f; m++)
        Xt.fromBufferAttribute(u, m), Ri(Xt, m, a, s, t, i, this);
    }
  }
  updateMorphTargets() {
    const i = this.geometry.morphAttributes, e = Object.keys(i);
    if (e.length > 0) {
      const s = i[e[0]];
      if (s !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let n = 0, r = s.length; n < r; n++) {
          const h = s[n].name || String(n);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[h] = n;
        }
      }
    }
  }
}
function Ri(p, t, i, e, s, n, r) {
  const h = mi.distanceSqToPoint(p);
  if (h < i) {
    const a = new y();
    mi.closestPointToPoint(p, a), a.applyMatrix4(e);
    const o = s.ray.origin.distanceTo(a);
    if (o < s.near || o > s.far)
      return;
    n.push({
      distance: o,
      distanceToRay: Math.sqrt(h),
      point: a,
      index: t,
      face: null,
      object: r
    });
  }
}
class Ne extends X {
  constructor(t, i, e, s, n, r, h, a, o) {
    super(t, i, e, s, n, r, h, a, o), this.isCanvasTexture = !0, this.needsUpdate = !0;
  }
}
class Le extends se {
  constructor(t) {
    super(t), this.isRawShaderMaterial = !0, this.type = "RawShaderMaterial";
  }
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
  revision: Di
} }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = Di);
export {
  me as AddEquation,
  de as AdditiveBlending,
  Be as AlwaysStencilFunc,
  Ft as Box3,
  ot as BufferAttribute,
  Gt as BufferGeometry,
  Ne as CanvasTexture,
  Me as ClampToEdgeWrapping,
  pi as Color,
  O as ColorManagement,
  Oe as DataTexture,
  Jt as Euler,
  _t as EventDispatcher,
  yi as Float32BufferAttribute,
  le as FrontSide,
  Re as Frustum,
  Wi as ImageUtils,
  Te as KeepStencilOp,
  Hi as Layers,
  ye as LessEqualDepth,
  ae as Line,
  he as LineBasicMaterial,
  Ie as LineSegments,
  Fe as LinearEncoding,
  ze as LinearFilter,
  _e as LinearMipmapLinearFilter,
  di as LinearSRGBColorSpace,
  fi as Material,
  lt as Matrix3,
  U as Matrix4,
  be as MirroredRepeatWrapping,
  we as NearestFilter,
  ue as NoBlending,
  ce as NormalBlending,
  H as Object3D,
  fe as OneMinusSrcAlphaFactor,
  xt as Plane,
  Pe as Points,
  oe as PointsMaterial,
  At as Quaternion,
  Di as REVISION,
  Ae as RGBAFormat,
  Le as RawShaderMaterial,
  Pi as Ray,
  ge as RepeatWrapping,
  J as SRGBColorSpace,
  De as Scene,
  se as ShaderMaterial,
  Ii as Source,
  jt as Sphere,
  pe as SrcAlphaFactor,
  Ce as StaticDrawUsage,
  X as Texture,
  xe as UVMapping,
  Gi as Uint16BufferAttribute,
  $i as Uint32BufferAttribute,
  Ee as Uint8BufferAttribute,
  Se as UnsignedByteType,
  G as Vector2,
  y as Vector3,
  Zt as Vector4,
  ke as WebGLRenderTarget
};
//# sourceMappingURL=potree-loader.es6.js.map
