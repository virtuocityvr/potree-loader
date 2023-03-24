/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const Bi = "149";
const rt = "srgb", fl = "srgb-linear";
class Bt {
  addEventListener(t, l) {
    this._listeners === void 0 && (this._listeners = {});
    const i = this._listeners;
    i[t] === void 0 && (i[t] = []), i[t].indexOf(l) === -1 && i[t].push(l);
  }
  hasEventListener(t, l) {
    if (this._listeners === void 0)
      return !1;
    const i = this._listeners;
    return i[t] !== void 0 && i[t].indexOf(l) !== -1;
  }
  removeEventListener(t, l) {
    if (this._listeners === void 0)
      return;
    const e = this._listeners[t];
    if (e !== void 0) {
      const n = e.indexOf(l);
      n !== -1 && e.splice(n, 1);
    }
  }
  dispatchEvent(t) {
    if (this._listeners === void 0)
      return;
    const i = this._listeners[t.type];
    if (i !== void 0) {
      t.target = this;
      const e = i.slice(0);
      for (let n = 0, c = e.length; n < c; n++)
        e[n].call(this, t);
      t.target = null;
    }
  }
}
const T = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
function Ot() {
  const s = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, l = Math.random() * 4294967295 | 0, i = Math.random() * 4294967295 | 0;
  return (T[s & 255] + T[s >> 8 & 255] + T[s >> 16 & 255] + T[s >> 24 & 255] + "-" + T[t & 255] + T[t >> 8 & 255] + "-" + T[t >> 16 & 15 | 64] + T[t >> 24 & 255] + "-" + T[l & 63 | 128] + T[l >> 8 & 255] + "-" + T[l >> 16 & 255] + T[l >> 24 & 255] + T[i & 255] + T[i >> 8 & 255] + T[i >> 16 & 255] + T[i >> 24 & 255]).toLowerCase();
}
function tt(s, t, l) {
  return Math.max(t, Math.min(l, s));
}
function Ei(s, t) {
  return (s % t + t) % t;
}
function xl(s, t, l) {
  return (1 - l) * s + l * t;
}
function el(s, t) {
  switch (t.constructor) {
    case Float32Array:
      return s;
    case Uint16Array:
      return s / 65535;
    case Uint8Array:
      return s / 255;
    case Int16Array:
      return Math.max(s / 32767, -1);
    case Int8Array:
      return Math.max(s / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function _(s, t) {
  switch (t.constructor) {
    case Float32Array:
      return s;
    case Uint16Array:
      return Math.round(s * 65535);
    case Uint8Array:
      return Math.round(s * 255);
    case Int16Array:
      return Math.round(s * 32767);
    case Int8Array:
      return Math.round(s * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
class dt {
  constructor(t = 0, l = 0) {
    dt.prototype.isVector2 = !0, this.x = t, this.y = l;
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
  set(t, l) {
    return this.x = t, this.y = l, this;
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
  setComponent(t, l) {
    switch (t) {
      case 0:
        this.x = l;
        break;
      case 1:
        this.y = l;
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
  addVectors(t, l) {
    return this.x = t.x + l.x, this.y = t.y + l.y, this;
  }
  addScaledVector(t, l) {
    return this.x += t.x * l, this.y += t.y * l, this;
  }
  sub(t) {
    return this.x -= t.x, this.y -= t.y, this;
  }
  subScalar(t) {
    return this.x -= t, this.y -= t, this;
  }
  subVectors(t, l) {
    return this.x = t.x - l.x, this.y = t.y - l.y, this;
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
    const l = this.x, i = this.y, e = t.elements;
    return this.x = e[0] * l + e[3] * i + e[6], this.y = e[1] * l + e[4] * i + e[7], this;
  }
  min(t) {
    return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this;
  }
  max(t) {
    return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this;
  }
  clamp(t, l) {
    return this.x = Math.max(t.x, Math.min(l.x, this.x)), this.y = Math.max(t.y, Math.min(l.y, this.y)), this;
  }
  clampScalar(t, l) {
    return this.x = Math.max(t, Math.min(l, this.x)), this.y = Math.max(t, Math.min(l, this.y)), this;
  }
  clampLength(t, l) {
    const i = this.length();
    return this.divideScalar(i || 1).multiplyScalar(Math.max(t, Math.min(l, i)));
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
    const l = this.x - t.x, i = this.y - t.y;
    return l * l + i * i;
  }
  manhattanDistanceTo(t) {
    return Math.abs(this.x - t.x) + Math.abs(this.y - t.y);
  }
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, l) {
    return this.x += (t.x - this.x) * l, this.y += (t.y - this.y) * l, this;
  }
  lerpVectors(t, l, i) {
    return this.x = t.x + (l.x - t.x) * i, this.y = t.y + (l.y - t.y) * i, this;
  }
  equals(t) {
    return t.x === this.x && t.y === this.y;
  }
  fromArray(t, l = 0) {
    return this.x = t[l], this.y = t[l + 1], this;
  }
  toArray(t = [], l = 0) {
    return t[l] = this.x, t[l + 1] = this.y, t;
  }
  fromBufferAttribute(t, l) {
    return this.x = t.getX(l), this.y = t.getY(l), this;
  }
  rotateAround(t, l) {
    const i = Math.cos(l), e = Math.sin(l), n = this.x - t.x, c = this.y - t.y;
    return this.x = n * i - c * e + t.x, this.y = n * e + c * i + t.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class It {
  constructor() {
    It.prototype.isMatrix3 = !0, this.elements = [
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
  set(t, l, i, e, n, c, Z, h, a) {
    const d = this.elements;
    return d[0] = t, d[1] = e, d[2] = Z, d[3] = l, d[4] = n, d[5] = h, d[6] = i, d[7] = c, d[8] = a, this;
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
    const l = this.elements, i = t.elements;
    return l[0] = i[0], l[1] = i[1], l[2] = i[2], l[3] = i[3], l[4] = i[4], l[5] = i[5], l[6] = i[6], l[7] = i[7], l[8] = i[8], this;
  }
  extractBasis(t, l, i) {
    return t.setFromMatrix3Column(this, 0), l.setFromMatrix3Column(this, 1), i.setFromMatrix3Column(this, 2), this;
  }
  setFromMatrix4(t) {
    const l = t.elements;
    return this.set(
      l[0],
      l[4],
      l[8],
      l[1],
      l[5],
      l[9],
      l[2],
      l[6],
      l[10]
    ), this;
  }
  multiply(t) {
    return this.multiplyMatrices(this, t);
  }
  premultiply(t) {
    return this.multiplyMatrices(t, this);
  }
  multiplyMatrices(t, l) {
    const i = t.elements, e = l.elements, n = this.elements, c = i[0], Z = i[3], h = i[6], a = i[1], d = i[4], m = i[7], b = i[2], o = i[5], r = i[8], G = e[0], u = e[3], Y = e[6], p = e[1], g = e[4], y = e[7], x = e[2], J = e[5], R = e[8];
    return n[0] = c * G + Z * p + h * x, n[3] = c * u + Z * g + h * J, n[6] = c * Y + Z * y + h * R, n[1] = a * G + d * p + m * x, n[4] = a * u + d * g + m * J, n[7] = a * Y + d * y + m * R, n[2] = b * G + o * p + r * x, n[5] = b * u + o * g + r * J, n[8] = b * Y + o * y + r * R, this;
  }
  multiplyScalar(t) {
    const l = this.elements;
    return l[0] *= t, l[3] *= t, l[6] *= t, l[1] *= t, l[4] *= t, l[7] *= t, l[2] *= t, l[5] *= t, l[8] *= t, this;
  }
  determinant() {
    const t = this.elements, l = t[0], i = t[1], e = t[2], n = t[3], c = t[4], Z = t[5], h = t[6], a = t[7], d = t[8];
    return l * c * d - l * Z * a - i * n * d + i * Z * h + e * n * a - e * c * h;
  }
  invert() {
    const t = this.elements, l = t[0], i = t[1], e = t[2], n = t[3], c = t[4], Z = t[5], h = t[6], a = t[7], d = t[8], m = d * c - Z * a, b = Z * h - d * n, o = a * n - c * h, r = l * m + i * b + e * o;
    if (r === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const G = 1 / r;
    return t[0] = m * G, t[1] = (e * a - d * i) * G, t[2] = (Z * i - e * c) * G, t[3] = b * G, t[4] = (d * l - e * h) * G, t[5] = (e * n - Z * l) * G, t[6] = o * G, t[7] = (i * h - a * l) * G, t[8] = (c * l - i * n) * G, this;
  }
  transpose() {
    let t;
    const l = this.elements;
    return t = l[1], l[1] = l[3], l[3] = t, t = l[2], l[2] = l[6], l[6] = t, t = l[5], l[5] = l[7], l[7] = t, this;
  }
  getNormalMatrix(t) {
    return this.setFromMatrix4(t).invert().transpose();
  }
  transposeIntoArray(t) {
    const l = this.elements;
    return t[0] = l[0], t[1] = l[3], t[2] = l[6], t[3] = l[1], t[4] = l[4], t[5] = l[7], t[6] = l[2], t[7] = l[5], t[8] = l[8], this;
  }
  setUvTransform(t, l, i, e, n, c, Z) {
    const h = Math.cos(n), a = Math.sin(n);
    return this.set(
      i * h,
      i * a,
      -i * (h * c + a * Z) + c + t,
      -e * a,
      e * h,
      -e * (-a * c + h * Z) + Z + l,
      0,
      0,
      1
    ), this;
  }
  //
  scale(t, l) {
    return this.premultiply(Nl.makeScale(t, l)), this;
  }
  rotate(t) {
    return this.premultiply(Nl.makeRotation(-t)), this;
  }
  translate(t, l) {
    return this.premultiply(Nl.makeTranslation(t, l)), this;
  }
  // for 2D Transforms
  makeTranslation(t, l) {
    return this.set(
      1,
      0,
      t,
      0,
      1,
      l,
      0,
      0,
      1
    ), this;
  }
  makeRotation(t) {
    const l = Math.cos(t), i = Math.sin(t);
    return this.set(
      l,
      -i,
      0,
      i,
      l,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(t, l) {
    return this.set(
      t,
      0,
      0,
      0,
      l,
      0,
      0,
      0,
      1
    ), this;
  }
  //
  equals(t) {
    const l = this.elements, i = t.elements;
    for (let e = 0; e < 9; e++)
      if (l[e] !== i[e])
        return !1;
    return !0;
  }
  fromArray(t, l = 0) {
    for (let i = 0; i < 9; i++)
      this.elements[i] = t[i + l];
    return this;
  }
  toArray(t = [], l = 0) {
    const i = this.elements;
    return t[l] = i[0], t[l + 1] = i[1], t[l + 2] = i[2], t[l + 3] = i[3], t[l + 4] = i[4], t[l + 5] = i[5], t[l + 6] = i[6], t[l + 7] = i[7], t[l + 8] = i[8], t;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const Nl = /* @__PURE__ */ new It();
function Oi(s) {
  for (let t = s.length - 1; t >= 0; --t)
    if (s[t] >= 65535)
      return !0;
  return !1;
}
function Kl(s) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", s);
}
function Ft(s) {
  return s < 0.04045 ? s * 0.0773993808 : Math.pow(s * 0.9478672986 + 0.0521327014, 2.4);
}
function Vl(s) {
  return s < 31308e-7 ? s * 12.92 : 1.055 * Math.pow(s, 0.41666) - 0.055;
}
const Fl = {
  [rt]: { [fl]: Ft },
  [fl]: { [rt]: Vl }
}, L = {
  legacyMode: !0,
  get workingColorSpace() {
    return fl;
  },
  set workingColorSpace(s) {
    console.warn("THREE.ColorManagement: .workingColorSpace is readonly.");
  },
  convert: function(s, t, l) {
    if (this.legacyMode || t === l || !t || !l)
      return s;
    if (Fl[t] && Fl[t][l] !== void 0) {
      const i = Fl[t][l];
      return s.r = i(s.r), s.g = i(s.g), s.b = i(s.b), s;
    }
    throw new Error("Unsupported color space conversion.");
  },
  fromWorkingColorSpace: function(s, t) {
    return this.convert(s, this.workingColorSpace, t);
  },
  toWorkingColorSpace: function(s, t) {
    return this.convert(s, t, this.workingColorSpace);
  }
}, Ii = {
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
}, v = { r: 0, g: 0, b: 0 }, ct = { h: 0, s: 0, l: 0 }, nl = { h: 0, s: 0, l: 0 };
function Jl(s, t, l) {
  return l < 0 && (l += 1), l > 1 && (l -= 1), l < 1 / 6 ? s + (t - s) * 6 * l : l < 1 / 2 ? t : l < 2 / 3 ? s + (t - s) * 6 * (2 / 3 - l) : s;
}
function sl(s, t) {
  return t.r = s.r, t.g = s.g, t.b = s.b, t;
}
class V {
  constructor(t, l, i) {
    return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, l === void 0 && i === void 0 ? this.set(t) : this.setRGB(t, l, i);
  }
  set(t) {
    return t && t.isColor ? this.copy(t) : typeof t == "number" ? this.setHex(t) : typeof t == "string" && this.setStyle(t), this;
  }
  setScalar(t) {
    return this.r = t, this.g = t, this.b = t, this;
  }
  setHex(t, l = rt) {
    return t = Math.floor(t), this.r = (t >> 16 & 255) / 255, this.g = (t >> 8 & 255) / 255, this.b = (t & 255) / 255, L.toWorkingColorSpace(this, l), this;
  }
  setRGB(t, l, i, e = L.workingColorSpace) {
    return this.r = t, this.g = l, this.b = i, L.toWorkingColorSpace(this, e), this;
  }
  setHSL(t, l, i, e = L.workingColorSpace) {
    if (t = Ei(t, 1), l = tt(l, 0, 1), i = tt(i, 0, 1), l === 0)
      this.r = this.g = this.b = i;
    else {
      const n = i <= 0.5 ? i * (1 + l) : i + l - i * l, c = 2 * i - n;
      this.r = Jl(c, n, t + 1 / 3), this.g = Jl(c, n, t), this.b = Jl(c, n, t - 1 / 3);
    }
    return L.toWorkingColorSpace(this, e), this;
  }
  setStyle(t, l = rt) {
    function i(n) {
      n !== void 0 && parseFloat(n) < 1 && console.warn("THREE.Color: Alpha component of " + t + " will be ignored.");
    }
    let e;
    if (e = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)) {
      let n;
      const c = e[1], Z = e[2];
      switch (c) {
        case "rgb":
        case "rgba":
          if (n = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(Z))
            return this.r = Math.min(255, parseInt(n[1], 10)) / 255, this.g = Math.min(255, parseInt(n[2], 10)) / 255, this.b = Math.min(255, parseInt(n[3], 10)) / 255, L.toWorkingColorSpace(this, l), i(n[4]), this;
          if (n = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(Z))
            return this.r = Math.min(100, parseInt(n[1], 10)) / 100, this.g = Math.min(100, parseInt(n[2], 10)) / 100, this.b = Math.min(100, parseInt(n[3], 10)) / 100, L.toWorkingColorSpace(this, l), i(n[4]), this;
          break;
        case "hsl":
        case "hsla":
          if (n = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(Z)) {
            const h = parseFloat(n[1]) / 360, a = parseFloat(n[2]) / 100, d = parseFloat(n[3]) / 100;
            return i(n[4]), this.setHSL(h, a, d, l);
          }
          break;
      }
    } else if (e = /^\#([A-Fa-f\d]+)$/.exec(t)) {
      const n = e[1], c = n.length;
      if (c === 3)
        return this.r = parseInt(n.charAt(0) + n.charAt(0), 16) / 255, this.g = parseInt(n.charAt(1) + n.charAt(1), 16) / 255, this.b = parseInt(n.charAt(2) + n.charAt(2), 16) / 255, L.toWorkingColorSpace(this, l), this;
      if (c === 6)
        return this.r = parseInt(n.charAt(0) + n.charAt(1), 16) / 255, this.g = parseInt(n.charAt(2) + n.charAt(3), 16) / 255, this.b = parseInt(n.charAt(4) + n.charAt(5), 16) / 255, L.toWorkingColorSpace(this, l), this;
    }
    return t && t.length > 0 ? this.setColorName(t, l) : this;
  }
  setColorName(t, l = rt) {
    const i = Ii[t.toLowerCase()];
    return i !== void 0 ? this.setHex(i, l) : console.warn("THREE.Color: Unknown color " + t), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(t) {
    return this.r = t.r, this.g = t.g, this.b = t.b, this;
  }
  copySRGBToLinear(t) {
    return this.r = Ft(t.r), this.g = Ft(t.g), this.b = Ft(t.b), this;
  }
  copyLinearToSRGB(t) {
    return this.r = Vl(t.r), this.g = Vl(t.g), this.b = Vl(t.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(t = rt) {
    return L.fromWorkingColorSpace(sl(this, v), t), tt(v.r * 255, 0, 255) << 16 ^ tt(v.g * 255, 0, 255) << 8 ^ tt(v.b * 255, 0, 255) << 0;
  }
  getHexString(t = rt) {
    return ("000000" + this.getHex(t).toString(16)).slice(-6);
  }
  getHSL(t, l = L.workingColorSpace) {
    L.fromWorkingColorSpace(sl(this, v), l);
    const i = v.r, e = v.g, n = v.b, c = Math.max(i, e, n), Z = Math.min(i, e, n);
    let h, a;
    const d = (Z + c) / 2;
    if (Z === c)
      h = 0, a = 0;
    else {
      const m = c - Z;
      switch (a = d <= 0.5 ? m / (c + Z) : m / (2 - c - Z), c) {
        case i:
          h = (e - n) / m + (e < n ? 6 : 0);
          break;
        case e:
          h = (n - i) / m + 2;
          break;
        case n:
          h = (i - e) / m + 4;
          break;
      }
      h /= 6;
    }
    return t.h = h, t.s = a, t.l = d, t;
  }
  getRGB(t, l = L.workingColorSpace) {
    return L.fromWorkingColorSpace(sl(this, v), l), t.r = v.r, t.g = v.g, t.b = v.b, t;
  }
  getStyle(t = rt) {
    return L.fromWorkingColorSpace(sl(this, v), t), t !== rt ? `color(${t} ${v.r} ${v.g} ${v.b})` : `rgb(${v.r * 255 | 0},${v.g * 255 | 0},${v.b * 255 | 0})`;
  }
  offsetHSL(t, l, i) {
    return this.getHSL(ct), ct.h += t, ct.s += l, ct.l += i, this.setHSL(ct.h, ct.s, ct.l), this;
  }
  add(t) {
    return this.r += t.r, this.g += t.g, this.b += t.b, this;
  }
  addColors(t, l) {
    return this.r = t.r + l.r, this.g = t.g + l.g, this.b = t.b + l.b, this;
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
  lerp(t, l) {
    return this.r += (t.r - this.r) * l, this.g += (t.g - this.g) * l, this.b += (t.b - this.b) * l, this;
  }
  lerpColors(t, l, i) {
    return this.r = t.r + (l.r - t.r) * i, this.g = t.g + (l.g - t.g) * i, this.b = t.b + (l.b - t.b) * i, this;
  }
  lerpHSL(t, l) {
    this.getHSL(ct), t.getHSL(nl);
    const i = xl(ct.h, nl.h, l), e = xl(ct.s, nl.s, l), n = xl(ct.l, nl.l, l);
    return this.setHSL(i, e, n), this;
  }
  equals(t) {
    return t.r === this.r && t.g === this.g && t.b === this.b;
  }
  fromArray(t, l = 0) {
    return this.r = t[l], this.g = t[l + 1], this.b = t[l + 2], this;
  }
  toArray(t = [], l = 0) {
    return t[l] = this.r, t[l + 1] = this.g, t[l + 2] = this.b, t;
  }
  fromBufferAttribute(t, l) {
    return this.r = t.getX(l), this.g = t.getY(l), this.b = t.getZ(l), this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
V.NAMES = Ii;
let Ct;
class Ki {
  static getDataURL(t) {
    if (/^data:/i.test(t.src) || typeof HTMLCanvasElement > "u")
      return t.src;
    let l;
    if (t instanceof HTMLCanvasElement)
      l = t;
    else {
      Ct === void 0 && (Ct = Kl("canvas")), Ct.width = t.width, Ct.height = t.height;
      const i = Ct.getContext("2d");
      t instanceof ImageData ? i.putImageData(t, 0, 0) : i.drawImage(t, 0, 0, t.width, t.height), l = Ct;
    }
    return l.width > 2048 || l.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", t), l.toDataURL("image/jpeg", 0.6)) : l.toDataURL("image/png");
  }
  static sRGBToLinear(t) {
    if (typeof HTMLImageElement < "u" && t instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && t instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && t instanceof ImageBitmap) {
      const l = Kl("canvas");
      l.width = t.width, l.height = t.height;
      const i = l.getContext("2d");
      i.drawImage(t, 0, 0, t.width, t.height);
      const e = i.getImageData(0, 0, t.width, t.height), n = e.data;
      for (let c = 0; c < n.length; c++)
        n[c] = Ft(n[c] / 255) * 255;
      return i.putImageData(e, 0, 0), l;
    } else if (t.data) {
      const l = t.data.slice(0);
      for (let i = 0; i < l.length; i++)
        l instanceof Uint8Array || l instanceof Uint8ClampedArray ? l[i] = Math.floor(Ft(l[i] / 255) * 255) : l[i] = Ft(l[i]);
      return {
        data: l,
        width: t.width,
        height: t.height
      };
    } else
      return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), t;
  }
}
class Ci {
  constructor(t = null) {
    this.isSource = !0, this.uuid = Ot(), this.data = t, this.version = 0;
  }
  set needsUpdate(t) {
    t === !0 && this.version++;
  }
  toJSON(t) {
    const l = t === void 0 || typeof t == "string";
    if (!l && t.images[this.uuid] !== void 0)
      return t.images[this.uuid];
    const i = {
      uuid: this.uuid,
      url: ""
    }, e = this.data;
    if (e !== null) {
      let n;
      if (Array.isArray(e)) {
        n = [];
        for (let c = 0, Z = e.length; c < Z; c++)
          e[c].isDataTexture ? n.push(Bl(e[c].image)) : n.push(Bl(e[c]));
      } else
        n = Bl(e);
      i.url = n;
    }
    return l || (t.images[this.uuid] = i), i;
  }
}
function Bl(s) {
  return typeof HTMLImageElement < "u" && s instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && s instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && s instanceof ImageBitmap ? Ki.getDataURL(s) : s.data ? {
    data: Array.from(s.data),
    width: s.width,
    height: s.height,
    type: s.data.constructor.name
  } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let _i = 0;
class lt extends Bt {
  constructor(t = lt.DEFAULT_IMAGE, l = lt.DEFAULT_MAPPING, i = 1001, e = 1001, n = 1006, c = 1008, Z = 1023, h = 1009, a = lt.DEFAULT_ANISOTROPY, d = 3e3) {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: _i++ }), this.uuid = Ot(), this.name = "", this.source = new Ci(t), this.mipmaps = [], this.mapping = l, this.wrapS = i, this.wrapT = e, this.magFilter = n, this.minFilter = c, this.anisotropy = a, this.format = Z, this.internalFormat = null, this.type = h, this.offset = new dt(0, 0), this.repeat = new dt(1, 1), this.center = new dt(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new It(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = d, this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.needsPMREMUpdate = !1;
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
    const l = t === void 0 || typeof t == "string";
    if (!l && t.textures[this.uuid] !== void 0)
      return t.textures[this.uuid];
    const i = {
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
    return Object.keys(this.userData).length > 0 && (i.userData = this.userData), l || (t.textures[this.uuid] = i), i;
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
lt.DEFAULT_IMAGE = null;
lt.DEFAULT_MAPPING = 300;
lt.DEFAULT_ANISOTROPY = 1;
class M {
  constructor(t = 0, l = 0, i = 0, e = 1) {
    M.prototype.isVector4 = !0, this.x = t, this.y = l, this.z = i, this.w = e;
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
  set(t, l, i, e) {
    return this.x = t, this.y = l, this.z = i, this.w = e, this;
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
  setComponent(t, l) {
    switch (t) {
      case 0:
        this.x = l;
        break;
      case 1:
        this.y = l;
        break;
      case 2:
        this.z = l;
        break;
      case 3:
        this.w = l;
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
  addVectors(t, l) {
    return this.x = t.x + l.x, this.y = t.y + l.y, this.z = t.z + l.z, this.w = t.w + l.w, this;
  }
  addScaledVector(t, l) {
    return this.x += t.x * l, this.y += t.y * l, this.z += t.z * l, this.w += t.w * l, this;
  }
  sub(t) {
    return this.x -= t.x, this.y -= t.y, this.z -= t.z, this.w -= t.w, this;
  }
  subScalar(t) {
    return this.x -= t, this.y -= t, this.z -= t, this.w -= t, this;
  }
  subVectors(t, l) {
    return this.x = t.x - l.x, this.y = t.y - l.y, this.z = t.z - l.z, this.w = t.w - l.w, this;
  }
  multiply(t) {
    return this.x *= t.x, this.y *= t.y, this.z *= t.z, this.w *= t.w, this;
  }
  multiplyScalar(t) {
    return this.x *= t, this.y *= t, this.z *= t, this.w *= t, this;
  }
  applyMatrix4(t) {
    const l = this.x, i = this.y, e = this.z, n = this.w, c = t.elements;
    return this.x = c[0] * l + c[4] * i + c[8] * e + c[12] * n, this.y = c[1] * l + c[5] * i + c[9] * e + c[13] * n, this.z = c[2] * l + c[6] * i + c[10] * e + c[14] * n, this.w = c[3] * l + c[7] * i + c[11] * e + c[15] * n, this;
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  setAxisAngleFromQuaternion(t) {
    this.w = 2 * Math.acos(t.w);
    const l = Math.sqrt(1 - t.w * t.w);
    return l < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = t.x / l, this.y = t.y / l, this.z = t.z / l), this;
  }
  setAxisAngleFromRotationMatrix(t) {
    let l, i, e, n;
    const h = t.elements, a = h[0], d = h[4], m = h[8], b = h[1], o = h[5], r = h[9], G = h[2], u = h[6], Y = h[10];
    if (Math.abs(d - b) < 0.01 && Math.abs(m - G) < 0.01 && Math.abs(r - u) < 0.01) {
      if (Math.abs(d + b) < 0.1 && Math.abs(m + G) < 0.1 && Math.abs(r + u) < 0.1 && Math.abs(a + o + Y - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      l = Math.PI;
      const g = (a + 1) / 2, y = (o + 1) / 2, x = (Y + 1) / 2, J = (d + b) / 4, R = (m + G) / 4, w = (r + u) / 4;
      return g > y && g > x ? g < 0.01 ? (i = 0, e = 0.707106781, n = 0.707106781) : (i = Math.sqrt(g), e = J / i, n = R / i) : y > x ? y < 0.01 ? (i = 0.707106781, e = 0, n = 0.707106781) : (e = Math.sqrt(y), i = J / e, n = w / e) : x < 0.01 ? (i = 0.707106781, e = 0.707106781, n = 0) : (n = Math.sqrt(x), i = R / n, e = w / n), this.set(i, e, n, l), this;
    }
    let p = Math.sqrt((u - r) * (u - r) + (m - G) * (m - G) + (b - d) * (b - d));
    return Math.abs(p) < 1e-3 && (p = 1), this.x = (u - r) / p, this.y = (m - G) / p, this.z = (b - d) / p, this.w = Math.acos((a + o + Y - 1) / 2), this;
  }
  min(t) {
    return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this.w = Math.min(this.w, t.w), this;
  }
  max(t) {
    return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this.w = Math.max(this.w, t.w), this;
  }
  clamp(t, l) {
    return this.x = Math.max(t.x, Math.min(l.x, this.x)), this.y = Math.max(t.y, Math.min(l.y, this.y)), this.z = Math.max(t.z, Math.min(l.z, this.z)), this.w = Math.max(t.w, Math.min(l.w, this.w)), this;
  }
  clampScalar(t, l) {
    return this.x = Math.max(t, Math.min(l, this.x)), this.y = Math.max(t, Math.min(l, this.y)), this.z = Math.max(t, Math.min(l, this.z)), this.w = Math.max(t, Math.min(l, this.w)), this;
  }
  clampLength(t, l) {
    const i = this.length();
    return this.divideScalar(i || 1).multiplyScalar(Math.max(t, Math.min(l, i)));
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
  lerp(t, l) {
    return this.x += (t.x - this.x) * l, this.y += (t.y - this.y) * l, this.z += (t.z - this.z) * l, this.w += (t.w - this.w) * l, this;
  }
  lerpVectors(t, l, i) {
    return this.x = t.x + (l.x - t.x) * i, this.y = t.y + (l.y - t.y) * i, this.z = t.z + (l.z - t.z) * i, this.w = t.w + (l.w - t.w) * i, this;
  }
  equals(t) {
    return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w;
  }
  fromArray(t, l = 0) {
    return this.x = t[l], this.y = t[l + 1], this.z = t[l + 2], this.w = t[l + 3], this;
  }
  toArray(t = [], l = 0) {
    return t[l] = this.x, t[l + 1] = this.y, t[l + 2] = this.z, t[l + 3] = this.w, t;
  }
  fromBufferAttribute(t, l) {
    return this.x = t.getX(l), this.y = t.getY(l), this.z = t.getZ(l), this.w = t.getW(l), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class zi extends Bt {
  constructor(t = 1, l = 1, i = {}) {
    super(), this.isWebGLRenderTarget = !0, this.width = t, this.height = l, this.depth = 1, this.scissor = new M(0, 0, t, l), this.scissorTest = !1, this.viewport = new M(0, 0, t, l);
    const e = { width: t, height: l, depth: 1 };
    this.texture = new lt(e, i.mapping, i.wrapS, i.wrapT, i.magFilter, i.minFilter, i.format, i.type, i.anisotropy, i.encoding), this.texture.isRenderTargetTexture = !0, this.texture.flipY = !1, this.texture.generateMipmaps = i.generateMipmaps !== void 0 ? i.generateMipmaps : !1, this.texture.internalFormat = i.internalFormat !== void 0 ? i.internalFormat : null, this.texture.minFilter = i.minFilter !== void 0 ? i.minFilter : 1006, this.depthBuffer = i.depthBuffer !== void 0 ? i.depthBuffer : !0, this.stencilBuffer = i.stencilBuffer !== void 0 ? i.stencilBuffer : !1, this.depthTexture = i.depthTexture !== void 0 ? i.depthTexture : null, this.samples = i.samples !== void 0 ? i.samples : 0;
  }
  setSize(t, l, i = 1) {
    (this.width !== t || this.height !== l || this.depth !== i) && (this.width = t, this.height = l, this.depth = i, this.texture.image.width = t, this.texture.image.height = l, this.texture.image.depth = i, this.dispose()), this.viewport.set(0, 0, t, l), this.scissor.set(0, 0, t, l);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    this.width = t.width, this.height = t.height, this.depth = t.depth, this.viewport.copy(t.viewport), this.texture = t.texture.clone(), this.texture.isRenderTargetTexture = !0;
    const l = Object.assign({}, t.texture.image);
    return this.texture.source = new Ci(l), this.depthBuffer = t.depthBuffer, this.stencilBuffer = t.stencilBuffer, t.depthTexture !== null && (this.depthTexture = t.depthTexture.clone()), this.samples = t.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class Kt {
  constructor(t = 0, l = 0, i = 0, e = 1) {
    this.isQuaternion = !0, this._x = t, this._y = l, this._z = i, this._w = e;
  }
  static slerpFlat(t, l, i, e, n, c, Z) {
    let h = i[e + 0], a = i[e + 1], d = i[e + 2], m = i[e + 3];
    const b = n[c + 0], o = n[c + 1], r = n[c + 2], G = n[c + 3];
    if (Z === 0) {
      t[l + 0] = h, t[l + 1] = a, t[l + 2] = d, t[l + 3] = m;
      return;
    }
    if (Z === 1) {
      t[l + 0] = b, t[l + 1] = o, t[l + 2] = r, t[l + 3] = G;
      return;
    }
    if (m !== G || h !== b || a !== o || d !== r) {
      let u = 1 - Z;
      const Y = h * b + a * o + d * r + m * G, p = Y >= 0 ? 1 : -1, g = 1 - Y * Y;
      if (g > Number.EPSILON) {
        const x = Math.sqrt(g), J = Math.atan2(x, Y * p);
        u = Math.sin(u * J) / x, Z = Math.sin(Z * J) / x;
      }
      const y = Z * p;
      if (h = h * u + b * y, a = a * u + o * y, d = d * u + r * y, m = m * u + G * y, u === 1 - Z) {
        const x = 1 / Math.sqrt(h * h + a * a + d * d + m * m);
        h *= x, a *= x, d *= x, m *= x;
      }
    }
    t[l] = h, t[l + 1] = a, t[l + 2] = d, t[l + 3] = m;
  }
  static multiplyQuaternionsFlat(t, l, i, e, n, c) {
    const Z = i[e], h = i[e + 1], a = i[e + 2], d = i[e + 3], m = n[c], b = n[c + 1], o = n[c + 2], r = n[c + 3];
    return t[l] = Z * r + d * m + h * o - a * b, t[l + 1] = h * r + d * b + a * m - Z * o, t[l + 2] = a * r + d * o + Z * b - h * m, t[l + 3] = d * r - Z * m - h * b - a * o, t;
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
  set(t, l, i, e) {
    return this._x = t, this._y = l, this._z = i, this._w = e, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(t) {
    return this._x = t.x, this._y = t.y, this._z = t.z, this._w = t.w, this._onChangeCallback(), this;
  }
  setFromEuler(t, l) {
    const i = t._x, e = t._y, n = t._z, c = t._order, Z = Math.cos, h = Math.sin, a = Z(i / 2), d = Z(e / 2), m = Z(n / 2), b = h(i / 2), o = h(e / 2), r = h(n / 2);
    switch (c) {
      case "XYZ":
        this._x = b * d * m + a * o * r, this._y = a * o * m - b * d * r, this._z = a * d * r + b * o * m, this._w = a * d * m - b * o * r;
        break;
      case "YXZ":
        this._x = b * d * m + a * o * r, this._y = a * o * m - b * d * r, this._z = a * d * r - b * o * m, this._w = a * d * m + b * o * r;
        break;
      case "ZXY":
        this._x = b * d * m - a * o * r, this._y = a * o * m + b * d * r, this._z = a * d * r + b * o * m, this._w = a * d * m - b * o * r;
        break;
      case "ZYX":
        this._x = b * d * m - a * o * r, this._y = a * o * m + b * d * r, this._z = a * d * r - b * o * m, this._w = a * d * m + b * o * r;
        break;
      case "YZX":
        this._x = b * d * m + a * o * r, this._y = a * o * m + b * d * r, this._z = a * d * r - b * o * m, this._w = a * d * m - b * o * r;
        break;
      case "XZY":
        this._x = b * d * m - a * o * r, this._y = a * o * m - b * d * r, this._z = a * d * r + b * o * m, this._w = a * d * m + b * o * r;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + c);
    }
    return l !== !1 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(t, l) {
    const i = l / 2, e = Math.sin(i);
    return this._x = t.x * e, this._y = t.y * e, this._z = t.z * e, this._w = Math.cos(i), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(t) {
    const l = t.elements, i = l[0], e = l[4], n = l[8], c = l[1], Z = l[5], h = l[9], a = l[2], d = l[6], m = l[10], b = i + Z + m;
    if (b > 0) {
      const o = 0.5 / Math.sqrt(b + 1);
      this._w = 0.25 / o, this._x = (d - h) * o, this._y = (n - a) * o, this._z = (c - e) * o;
    } else if (i > Z && i > m) {
      const o = 2 * Math.sqrt(1 + i - Z - m);
      this._w = (d - h) / o, this._x = 0.25 * o, this._y = (e + c) / o, this._z = (n + a) / o;
    } else if (Z > m) {
      const o = 2 * Math.sqrt(1 + Z - i - m);
      this._w = (n - a) / o, this._x = (e + c) / o, this._y = 0.25 * o, this._z = (h + d) / o;
    } else {
      const o = 2 * Math.sqrt(1 + m - i - Z);
      this._w = (c - e) / o, this._x = (n + a) / o, this._y = (h + d) / o, this._z = 0.25 * o;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(t, l) {
    let i = t.dot(l) + 1;
    return i < Number.EPSILON ? (i = 0, Math.abs(t.x) > Math.abs(t.z) ? (this._x = -t.y, this._y = t.x, this._z = 0, this._w = i) : (this._x = 0, this._y = -t.z, this._z = t.y, this._w = i)) : (this._x = t.y * l.z - t.z * l.y, this._y = t.z * l.x - t.x * l.z, this._z = t.x * l.y - t.y * l.x, this._w = i), this.normalize();
  }
  angleTo(t) {
    return 2 * Math.acos(Math.abs(tt(this.dot(t), -1, 1)));
  }
  rotateTowards(t, l) {
    const i = this.angleTo(t);
    if (i === 0)
      return this;
    const e = Math.min(1, l / i);
    return this.slerp(t, e), this;
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
  multiplyQuaternions(t, l) {
    const i = t._x, e = t._y, n = t._z, c = t._w, Z = l._x, h = l._y, a = l._z, d = l._w;
    return this._x = i * d + c * Z + e * a - n * h, this._y = e * d + c * h + n * Z - i * a, this._z = n * d + c * a + i * h - e * Z, this._w = c * d - i * Z - e * h - n * a, this._onChangeCallback(), this;
  }
  slerp(t, l) {
    if (l === 0)
      return this;
    if (l === 1)
      return this.copy(t);
    const i = this._x, e = this._y, n = this._z, c = this._w;
    let Z = c * t._w + i * t._x + e * t._y + n * t._z;
    if (Z < 0 ? (this._w = -t._w, this._x = -t._x, this._y = -t._y, this._z = -t._z, Z = -Z) : this.copy(t), Z >= 1)
      return this._w = c, this._x = i, this._y = e, this._z = n, this;
    const h = 1 - Z * Z;
    if (h <= Number.EPSILON) {
      const o = 1 - l;
      return this._w = o * c + l * this._w, this._x = o * i + l * this._x, this._y = o * e + l * this._y, this._z = o * n + l * this._z, this.normalize(), this._onChangeCallback(), this;
    }
    const a = Math.sqrt(h), d = Math.atan2(a, Z), m = Math.sin((1 - l) * d) / a, b = Math.sin(l * d) / a;
    return this._w = c * m + this._w * b, this._x = i * m + this._x * b, this._y = e * m + this._y * b, this._z = n * m + this._z * b, this._onChangeCallback(), this;
  }
  slerpQuaternions(t, l, i) {
    return this.copy(t).slerp(l, i);
  }
  random() {
    const t = Math.random(), l = Math.sqrt(1 - t), i = Math.sqrt(t), e = 2 * Math.PI * Math.random(), n = 2 * Math.PI * Math.random();
    return this.set(
      l * Math.cos(e),
      i * Math.sin(n),
      i * Math.cos(n),
      l * Math.sin(e)
    );
  }
  equals(t) {
    return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w;
  }
  fromArray(t, l = 0) {
    return this._x = t[l], this._y = t[l + 1], this._z = t[l + 2], this._w = t[l + 3], this._onChangeCallback(), this;
  }
  toArray(t = [], l = 0) {
    return t[l] = this._x, t[l + 1] = this._y, t[l + 2] = this._z, t[l + 3] = this._w, t;
  }
  fromBufferAttribute(t, l) {
    return this._x = t.getX(l), this._y = t.getY(l), this._z = t.getZ(l), this._w = t.getW(l), this;
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
class W {
  constructor(t = 0, l = 0, i = 0) {
    W.prototype.isVector3 = !0, this.x = t, this.y = l, this.z = i;
  }
  set(t, l, i) {
    return i === void 0 && (i = this.z), this.x = t, this.y = l, this.z = i, this;
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
  setComponent(t, l) {
    switch (t) {
      case 0:
        this.x = l;
        break;
      case 1:
        this.y = l;
        break;
      case 2:
        this.z = l;
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
  addVectors(t, l) {
    return this.x = t.x + l.x, this.y = t.y + l.y, this.z = t.z + l.z, this;
  }
  addScaledVector(t, l) {
    return this.x += t.x * l, this.y += t.y * l, this.z += t.z * l, this;
  }
  sub(t) {
    return this.x -= t.x, this.y -= t.y, this.z -= t.z, this;
  }
  subScalar(t) {
    return this.x -= t, this.y -= t, this.z -= t, this;
  }
  subVectors(t, l) {
    return this.x = t.x - l.x, this.y = t.y - l.y, this.z = t.z - l.z, this;
  }
  multiply(t) {
    return this.x *= t.x, this.y *= t.y, this.z *= t.z, this;
  }
  multiplyScalar(t) {
    return this.x *= t, this.y *= t, this.z *= t, this;
  }
  multiplyVectors(t, l) {
    return this.x = t.x * l.x, this.y = t.y * l.y, this.z = t.z * l.z, this;
  }
  applyEuler(t) {
    return this.applyQuaternion(_l.setFromEuler(t));
  }
  applyAxisAngle(t, l) {
    return this.applyQuaternion(_l.setFromAxisAngle(t, l));
  }
  applyMatrix3(t) {
    const l = this.x, i = this.y, e = this.z, n = t.elements;
    return this.x = n[0] * l + n[3] * i + n[6] * e, this.y = n[1] * l + n[4] * i + n[7] * e, this.z = n[2] * l + n[5] * i + n[8] * e, this;
  }
  applyNormalMatrix(t) {
    return this.applyMatrix3(t).normalize();
  }
  applyMatrix4(t) {
    const l = this.x, i = this.y, e = this.z, n = t.elements, c = 1 / (n[3] * l + n[7] * i + n[11] * e + n[15]);
    return this.x = (n[0] * l + n[4] * i + n[8] * e + n[12]) * c, this.y = (n[1] * l + n[5] * i + n[9] * e + n[13]) * c, this.z = (n[2] * l + n[6] * i + n[10] * e + n[14]) * c, this;
  }
  applyQuaternion(t) {
    const l = this.x, i = this.y, e = this.z, n = t.x, c = t.y, Z = t.z, h = t.w, a = h * l + c * e - Z * i, d = h * i + Z * l - n * e, m = h * e + n * i - c * l, b = -n * l - c * i - Z * e;
    return this.x = a * h + b * -n + d * -Z - m * -c, this.y = d * h + b * -c + m * -n - a * -Z, this.z = m * h + b * -Z + a * -c - d * -n, this;
  }
  project(t) {
    return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix);
  }
  unproject(t) {
    return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld);
  }
  transformDirection(t) {
    const l = this.x, i = this.y, e = this.z, n = t.elements;
    return this.x = n[0] * l + n[4] * i + n[8] * e, this.y = n[1] * l + n[5] * i + n[9] * e, this.z = n[2] * l + n[6] * i + n[10] * e, this.normalize();
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
  clamp(t, l) {
    return this.x = Math.max(t.x, Math.min(l.x, this.x)), this.y = Math.max(t.y, Math.min(l.y, this.y)), this.z = Math.max(t.z, Math.min(l.z, this.z)), this;
  }
  clampScalar(t, l) {
    return this.x = Math.max(t, Math.min(l, this.x)), this.y = Math.max(t, Math.min(l, this.y)), this.z = Math.max(t, Math.min(l, this.z)), this;
  }
  clampLength(t, l) {
    const i = this.length();
    return this.divideScalar(i || 1).multiplyScalar(Math.max(t, Math.min(l, i)));
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
  lerp(t, l) {
    return this.x += (t.x - this.x) * l, this.y += (t.y - this.y) * l, this.z += (t.z - this.z) * l, this;
  }
  lerpVectors(t, l, i) {
    return this.x = t.x + (l.x - t.x) * i, this.y = t.y + (l.y - t.y) * i, this.z = t.z + (l.z - t.z) * i, this;
  }
  cross(t) {
    return this.crossVectors(this, t);
  }
  crossVectors(t, l) {
    const i = t.x, e = t.y, n = t.z, c = l.x, Z = l.y, h = l.z;
    return this.x = e * h - n * Z, this.y = n * c - i * h, this.z = i * Z - e * c, this;
  }
  projectOnVector(t) {
    const l = t.lengthSq();
    if (l === 0)
      return this.set(0, 0, 0);
    const i = t.dot(this) / l;
    return this.copy(t).multiplyScalar(i);
  }
  projectOnPlane(t) {
    return Il.copy(this).projectOnVector(t), this.sub(Il);
  }
  reflect(t) {
    return this.sub(Il.copy(t).multiplyScalar(2 * this.dot(t)));
  }
  angleTo(t) {
    const l = Math.sqrt(this.lengthSq() * t.lengthSq());
    if (l === 0)
      return Math.PI / 2;
    const i = this.dot(t) / l;
    return Math.acos(tt(i, -1, 1));
  }
  distanceTo(t) {
    return Math.sqrt(this.distanceToSquared(t));
  }
  distanceToSquared(t) {
    const l = this.x - t.x, i = this.y - t.y, e = this.z - t.z;
    return l * l + i * i + e * e;
  }
  manhattanDistanceTo(t) {
    return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z);
  }
  setFromSpherical(t) {
    return this.setFromSphericalCoords(t.radius, t.phi, t.theta);
  }
  setFromSphericalCoords(t, l, i) {
    const e = Math.sin(l) * t;
    return this.x = e * Math.sin(i), this.y = Math.cos(l) * t, this.z = e * Math.cos(i), this;
  }
  setFromCylindrical(t) {
    return this.setFromCylindricalCoords(t.radius, t.theta, t.y);
  }
  setFromCylindricalCoords(t, l, i) {
    return this.x = t * Math.sin(l), this.y = i, this.z = t * Math.cos(l), this;
  }
  setFromMatrixPosition(t) {
    const l = t.elements;
    return this.x = l[12], this.y = l[13], this.z = l[14], this;
  }
  setFromMatrixScale(t) {
    const l = this.setFromMatrixColumn(t, 0).length(), i = this.setFromMatrixColumn(t, 1).length(), e = this.setFromMatrixColumn(t, 2).length();
    return this.x = l, this.y = i, this.z = e, this;
  }
  setFromMatrixColumn(t, l) {
    return this.fromArray(t.elements, l * 4);
  }
  setFromMatrix3Column(t, l) {
    return this.fromArray(t.elements, l * 3);
  }
  setFromEuler(t) {
    return this.x = t._x, this.y = t._y, this.z = t._z, this;
  }
  equals(t) {
    return t.x === this.x && t.y === this.y && t.z === this.z;
  }
  fromArray(t, l = 0) {
    return this.x = t[l], this.y = t[l + 1], this.z = t[l + 2], this;
  }
  toArray(t = [], l = 0) {
    return t[l] = this.x, t[l + 1] = this.y, t[l + 2] = this.z, t;
  }
  fromBufferAttribute(t, l) {
    return this.x = t.getX(l), this.y = t.getY(l), this.z = t.getZ(l), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  randomDirection() {
    const t = (Math.random() - 0.5) * 2, l = Math.random() * Math.PI * 2, i = Math.sqrt(1 - t ** 2);
    return this.x = i * Math.cos(l), this.y = i * Math.sin(l), this.z = t, this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const Il = /* @__PURE__ */ new W(), _l = /* @__PURE__ */ new Kt();
class K {
  constructor(t = new W(1 / 0, 1 / 0, 1 / 0), l = new W(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = !0, this.min = t, this.max = l;
  }
  set(t, l) {
    return this.min.copy(t), this.max.copy(l), this;
  }
  setFromArray(t) {
    let l = 1 / 0, i = 1 / 0, e = 1 / 0, n = -1 / 0, c = -1 / 0, Z = -1 / 0;
    for (let h = 0, a = t.length; h < a; h += 3) {
      const d = t[h], m = t[h + 1], b = t[h + 2];
      d < l && (l = d), m < i && (i = m), b < e && (e = b), d > n && (n = d), m > c && (c = m), b > Z && (Z = b);
    }
    return this.min.set(l, i, e), this.max.set(n, c, Z), this;
  }
  setFromBufferAttribute(t) {
    let l = 1 / 0, i = 1 / 0, e = 1 / 0, n = -1 / 0, c = -1 / 0, Z = -1 / 0;
    for (let h = 0, a = t.count; h < a; h++) {
      const d = t.getX(h), m = t.getY(h), b = t.getZ(h);
      d < l && (l = d), m < i && (i = m), b < e && (e = b), d > n && (n = d), m > c && (c = m), b > Z && (Z = b);
    }
    return this.min.set(l, i, e), this.max.set(n, c, Z), this;
  }
  setFromPoints(t) {
    this.makeEmpty();
    for (let l = 0, i = t.length; l < i; l++)
      this.expandByPoint(t[l]);
    return this;
  }
  setFromCenterAndSize(t, l) {
    const i = Rt.copy(l).multiplyScalar(0.5);
    return this.min.copy(t).sub(i), this.max.copy(t).add(i), this;
  }
  setFromObject(t, l = !1) {
    return this.makeEmpty(), this.expandByObject(t, l);
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
  expandByObject(t, l = !1) {
    t.updateWorldMatrix(!1, !1);
    const i = t.geometry;
    if (i !== void 0)
      if (l && i.attributes != null && i.attributes.position !== void 0) {
        const n = i.attributes.position;
        for (let c = 0, Z = n.count; c < Z; c++)
          Rt.fromBufferAttribute(n, c).applyMatrix4(t.matrixWorld), this.expandByPoint(Rt);
      } else
        i.boundingBox === null && i.computeBoundingBox(), Cl.copy(i.boundingBox), Cl.applyMatrix4(t.matrixWorld), this.union(Cl);
    const e = t.children;
    for (let n = 0, c = e.length; n < c; n++)
      this.expandByObject(e[n], l);
    return this;
  }
  containsPoint(t) {
    return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y || t.z < this.min.z || t.z > this.max.z);
  }
  containsBox(t) {
    return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z;
  }
  getParameter(t, l) {
    return l.set(
      (t.x - this.min.x) / (this.max.x - this.min.x),
      (t.y - this.min.y) / (this.max.y - this.min.y),
      (t.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  intersectsBox(t) {
    return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y || t.max.z < this.min.z || t.min.z > this.max.z);
  }
  intersectsSphere(t) {
    return this.clampPoint(t.center, Rt), Rt.distanceToSquared(t.center) <= t.radius * t.radius;
  }
  intersectsPlane(t) {
    let l, i;
    return t.normal.x > 0 ? (l = t.normal.x * this.min.x, i = t.normal.x * this.max.x) : (l = t.normal.x * this.max.x, i = t.normal.x * this.min.x), t.normal.y > 0 ? (l += t.normal.y * this.min.y, i += t.normal.y * this.max.y) : (l += t.normal.y * this.max.y, i += t.normal.y * this.min.y), t.normal.z > 0 ? (l += t.normal.z * this.min.z, i += t.normal.z * this.max.z) : (l += t.normal.z * this.max.z, i += t.normal.z * this.min.z), l <= -t.constant && i >= -t.constant;
  }
  intersectsTriangle(t) {
    if (this.isEmpty())
      return !1;
    this.getCenter(At), cl.subVectors(this.max, At), zt.subVectors(t.a, At), wt.subVectors(t.b, At), Qt.subVectors(t.c, At), ut.subVectors(wt, zt), Yt.subVectors(Qt, wt), xt.subVectors(zt, Qt);
    let l = [
      0,
      -ut.z,
      ut.y,
      0,
      -Yt.z,
      Yt.y,
      0,
      -xt.z,
      xt.y,
      ut.z,
      0,
      -ut.x,
      Yt.z,
      0,
      -Yt.x,
      xt.z,
      0,
      -xt.x,
      -ut.y,
      ut.x,
      0,
      -Yt.y,
      Yt.x,
      0,
      -xt.y,
      xt.x,
      0
    ];
    return !zl(l, zt, wt, Qt, cl) || (l = [1, 0, 0, 0, 1, 0, 0, 0, 1], !zl(l, zt, wt, Qt, cl)) ? !1 : (Zl.crossVectors(ut, Yt), l = [Zl.x, Zl.y, Zl.z], zl(l, zt, wt, Qt, cl));
  }
  clampPoint(t, l) {
    return l.copy(t).clamp(this.min, this.max);
  }
  distanceToPoint(t) {
    return Rt.copy(t).clamp(this.min, this.max).sub(t).length();
  }
  getBoundingSphere(t) {
    return this.getCenter(t.center), t.radius = this.getSize(Rt).length() * 0.5, t;
  }
  intersect(t) {
    return this.min.max(t.min), this.max.min(t.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(t) {
    return this.min.min(t.min), this.max.max(t.max), this;
  }
  applyMatrix4(t) {
    return this.isEmpty() ? this : (mt[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t), mt[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t), mt[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t), mt[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t), mt[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t), mt[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t), mt[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t), mt[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t), this.setFromPoints(mt), this);
  }
  translate(t) {
    return this.min.add(t), this.max.add(t), this;
  }
  equals(t) {
    return t.min.equals(this.min) && t.max.equals(this.max);
  }
}
const mt = [
  /* @__PURE__ */ new W(),
  /* @__PURE__ */ new W(),
  /* @__PURE__ */ new W(),
  /* @__PURE__ */ new W(),
  /* @__PURE__ */ new W(),
  /* @__PURE__ */ new W(),
  /* @__PURE__ */ new W(),
  /* @__PURE__ */ new W()
], Rt = /* @__PURE__ */ new W(), Cl = /* @__PURE__ */ new K(), zt = /* @__PURE__ */ new W(), wt = /* @__PURE__ */ new W(), Qt = /* @__PURE__ */ new W(), ut = /* @__PURE__ */ new W(), Yt = /* @__PURE__ */ new W(), xt = /* @__PURE__ */ new W(), At = /* @__PURE__ */ new W(), cl = /* @__PURE__ */ new W(), Zl = /* @__PURE__ */ new W(), Nt = /* @__PURE__ */ new W();
function zl(s, t, l, i, e) {
  for (let n = 0, c = s.length - 3; n <= c; n += 3) {
    Nt.fromArray(s, n);
    const Z = e.x * Math.abs(Nt.x) + e.y * Math.abs(Nt.y) + e.z * Math.abs(Nt.z), h = t.dot(Nt), a = l.dot(Nt), d = i.dot(Nt);
    if (Math.max(-Math.max(h, a, d), Math.min(h, a, d)) > Z)
      return !1;
  }
  return !0;
}
const qi = /* @__PURE__ */ new K(), ft = /* @__PURE__ */ new W(), wl = /* @__PURE__ */ new W();
class st {
  constructor(t = new W(), l = -1) {
    this.center = t, this.radius = l;
  }
  set(t, l) {
    return this.center.copy(t), this.radius = l, this;
  }
  setFromPoints(t, l) {
    const i = this.center;
    l !== void 0 ? i.copy(l) : qi.setFromPoints(t).getCenter(i);
    let e = 0;
    for (let n = 0, c = t.length; n < c; n++)
      e = Math.max(e, i.distanceToSquared(t[n]));
    return this.radius = Math.sqrt(e), this;
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
    const l = this.radius + t.radius;
    return t.center.distanceToSquared(this.center) <= l * l;
  }
  intersectsBox(t) {
    return t.intersectsSphere(this);
  }
  intersectsPlane(t) {
    return Math.abs(t.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(t, l) {
    const i = this.center.distanceToSquared(t);
    return l.copy(t), i > this.radius * this.radius && (l.sub(this.center).normalize(), l.multiplyScalar(this.radius).add(this.center)), l;
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
    ft.subVectors(t, this.center);
    const l = ft.lengthSq();
    if (l > this.radius * this.radius) {
      const i = Math.sqrt(l), e = (i - this.radius) * 0.5;
      this.center.addScaledVector(ft, e / i), this.radius += e;
    }
    return this;
  }
  union(t) {
    return t.isEmpty() ? this : this.isEmpty() ? (this.copy(t), this) : (this.center.equals(t.center) === !0 ? this.radius = Math.max(this.radius, t.radius) : (wl.subVectors(t.center, this.center).setLength(t.radius), this.expandByPoint(ft.copy(t.center).add(wl)), this.expandByPoint(ft.copy(t.center).sub(wl))), this);
  }
  equals(t) {
    return t.center.equals(this.center) && t.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const bt = /* @__PURE__ */ new W(), Ql = /* @__PURE__ */ new W(), hl = /* @__PURE__ */ new W(), Vt = /* @__PURE__ */ new W(), vl = /* @__PURE__ */ new W(), al = /* @__PURE__ */ new W(), kl = /* @__PURE__ */ new W();
class wi {
  constructor(t = new W(), l = new W(0, 0, -1)) {
    this.origin = t, this.direction = l;
  }
  set(t, l) {
    return this.origin.copy(t), this.direction.copy(l), this;
  }
  copy(t) {
    return this.origin.copy(t.origin), this.direction.copy(t.direction), this;
  }
  at(t, l) {
    return l.copy(this.direction).multiplyScalar(t).add(this.origin);
  }
  lookAt(t) {
    return this.direction.copy(t).sub(this.origin).normalize(), this;
  }
  recast(t) {
    return this.origin.copy(this.at(t, bt)), this;
  }
  closestPointToPoint(t, l) {
    l.subVectors(t, this.origin);
    const i = l.dot(this.direction);
    return i < 0 ? l.copy(this.origin) : l.copy(this.direction).multiplyScalar(i).add(this.origin);
  }
  distanceToPoint(t) {
    return Math.sqrt(this.distanceSqToPoint(t));
  }
  distanceSqToPoint(t) {
    const l = bt.subVectors(t, this.origin).dot(this.direction);
    return l < 0 ? this.origin.distanceToSquared(t) : (bt.copy(this.direction).multiplyScalar(l).add(this.origin), bt.distanceToSquared(t));
  }
  distanceSqToSegment(t, l, i, e) {
    Ql.copy(t).add(l).multiplyScalar(0.5), hl.copy(l).sub(t).normalize(), Vt.copy(this.origin).sub(Ql);
    const n = t.distanceTo(l) * 0.5, c = -this.direction.dot(hl), Z = Vt.dot(this.direction), h = -Vt.dot(hl), a = Vt.lengthSq(), d = Math.abs(1 - c * c);
    let m, b, o, r;
    if (d > 0)
      if (m = c * h - Z, b = c * Z - h, r = n * d, m >= 0)
        if (b >= -r)
          if (b <= r) {
            const G = 1 / d;
            m *= G, b *= G, o = m * (m + c * b + 2 * Z) + b * (c * m + b + 2 * h) + a;
          } else
            b = n, m = Math.max(0, -(c * b + Z)), o = -m * m + b * (b + 2 * h) + a;
        else
          b = -n, m = Math.max(0, -(c * b + Z)), o = -m * m + b * (b + 2 * h) + a;
      else
        b <= -r ? (m = Math.max(0, -(-c * n + Z)), b = m > 0 ? -n : Math.min(Math.max(-n, -h), n), o = -m * m + b * (b + 2 * h) + a) : b <= r ? (m = 0, b = Math.min(Math.max(-n, -h), n), o = b * (b + 2 * h) + a) : (m = Math.max(0, -(c * n + Z)), b = m > 0 ? n : Math.min(Math.max(-n, -h), n), o = -m * m + b * (b + 2 * h) + a);
    else
      b = c > 0 ? -n : n, m = Math.max(0, -(c * b + Z)), o = -m * m + b * (b + 2 * h) + a;
    return i && i.copy(this.direction).multiplyScalar(m).add(this.origin), e && e.copy(hl).multiplyScalar(b).add(Ql), o;
  }
  intersectSphere(t, l) {
    bt.subVectors(t.center, this.origin);
    const i = bt.dot(this.direction), e = bt.dot(bt) - i * i, n = t.radius * t.radius;
    if (e > n)
      return null;
    const c = Math.sqrt(n - e), Z = i - c, h = i + c;
    return Z < 0 && h < 0 ? null : Z < 0 ? this.at(h, l) : this.at(Z, l);
  }
  intersectsSphere(t) {
    return this.distanceSqToPoint(t.center) <= t.radius * t.radius;
  }
  distanceToPlane(t) {
    const l = t.normal.dot(this.direction);
    if (l === 0)
      return t.distanceToPoint(this.origin) === 0 ? 0 : null;
    const i = -(this.origin.dot(t.normal) + t.constant) / l;
    return i >= 0 ? i : null;
  }
  intersectPlane(t, l) {
    const i = this.distanceToPlane(t);
    return i === null ? null : this.at(i, l);
  }
  intersectsPlane(t) {
    const l = t.distanceToPoint(this.origin);
    return l === 0 || t.normal.dot(this.direction) * l < 0;
  }
  intersectBox(t, l) {
    let i, e, n, c, Z, h;
    const a = 1 / this.direction.x, d = 1 / this.direction.y, m = 1 / this.direction.z, b = this.origin;
    return a >= 0 ? (i = (t.min.x - b.x) * a, e = (t.max.x - b.x) * a) : (i = (t.max.x - b.x) * a, e = (t.min.x - b.x) * a), d >= 0 ? (n = (t.min.y - b.y) * d, c = (t.max.y - b.y) * d) : (n = (t.max.y - b.y) * d, c = (t.min.y - b.y) * d), i > c || n > e || ((n > i || isNaN(i)) && (i = n), (c < e || isNaN(e)) && (e = c), m >= 0 ? (Z = (t.min.z - b.z) * m, h = (t.max.z - b.z) * m) : (Z = (t.max.z - b.z) * m, h = (t.min.z - b.z) * m), i > h || Z > e) || ((Z > i || i !== i) && (i = Z), (h < e || e !== e) && (e = h), e < 0) ? null : this.at(i >= 0 ? i : e, l);
  }
  intersectsBox(t) {
    return this.intersectBox(t, bt) !== null;
  }
  intersectTriangle(t, l, i, e, n) {
    vl.subVectors(l, t), al.subVectors(i, t), kl.crossVectors(vl, al);
    let c = this.direction.dot(kl), Z;
    if (c > 0) {
      if (e)
        return null;
      Z = 1;
    } else if (c < 0)
      Z = -1, c = -c;
    else
      return null;
    Vt.subVectors(this.origin, t);
    const h = Z * this.direction.dot(al.crossVectors(Vt, al));
    if (h < 0)
      return null;
    const a = Z * this.direction.dot(vl.cross(Vt));
    if (a < 0 || h + a > c)
      return null;
    const d = -Z * Vt.dot(kl);
    return d < 0 ? null : this.at(d / c, n);
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
class E {
  constructor() {
    E.prototype.isMatrix4 = !0, this.elements = [
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
  set(t, l, i, e, n, c, Z, h, a, d, m, b, o, r, G, u) {
    const Y = this.elements;
    return Y[0] = t, Y[4] = l, Y[8] = i, Y[12] = e, Y[1] = n, Y[5] = c, Y[9] = Z, Y[13] = h, Y[2] = a, Y[6] = d, Y[10] = m, Y[14] = b, Y[3] = o, Y[7] = r, Y[11] = G, Y[15] = u, this;
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
    return new E().fromArray(this.elements);
  }
  copy(t) {
    const l = this.elements, i = t.elements;
    return l[0] = i[0], l[1] = i[1], l[2] = i[2], l[3] = i[3], l[4] = i[4], l[5] = i[5], l[6] = i[6], l[7] = i[7], l[8] = i[8], l[9] = i[9], l[10] = i[10], l[11] = i[11], l[12] = i[12], l[13] = i[13], l[14] = i[14], l[15] = i[15], this;
  }
  copyPosition(t) {
    const l = this.elements, i = t.elements;
    return l[12] = i[12], l[13] = i[13], l[14] = i[14], this;
  }
  setFromMatrix3(t) {
    const l = t.elements;
    return this.set(
      l[0],
      l[3],
      l[6],
      0,
      l[1],
      l[4],
      l[7],
      0,
      l[2],
      l[5],
      l[8],
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractBasis(t, l, i) {
    return t.setFromMatrixColumn(this, 0), l.setFromMatrixColumn(this, 1), i.setFromMatrixColumn(this, 2), this;
  }
  makeBasis(t, l, i) {
    return this.set(
      t.x,
      l.x,
      i.x,
      0,
      t.y,
      l.y,
      i.y,
      0,
      t.z,
      l.z,
      i.z,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractRotation(t) {
    const l = this.elements, i = t.elements, e = 1 / vt.setFromMatrixColumn(t, 0).length(), n = 1 / vt.setFromMatrixColumn(t, 1).length(), c = 1 / vt.setFromMatrixColumn(t, 2).length();
    return l[0] = i[0] * e, l[1] = i[1] * e, l[2] = i[2] * e, l[3] = 0, l[4] = i[4] * n, l[5] = i[5] * n, l[6] = i[6] * n, l[7] = 0, l[8] = i[8] * c, l[9] = i[9] * c, l[10] = i[10] * c, l[11] = 0, l[12] = 0, l[13] = 0, l[14] = 0, l[15] = 1, this;
  }
  makeRotationFromEuler(t) {
    const l = this.elements, i = t.x, e = t.y, n = t.z, c = Math.cos(i), Z = Math.sin(i), h = Math.cos(e), a = Math.sin(e), d = Math.cos(n), m = Math.sin(n);
    if (t.order === "XYZ") {
      const b = c * d, o = c * m, r = Z * d, G = Z * m;
      l[0] = h * d, l[4] = -h * m, l[8] = a, l[1] = o + r * a, l[5] = b - G * a, l[9] = -Z * h, l[2] = G - b * a, l[6] = r + o * a, l[10] = c * h;
    } else if (t.order === "YXZ") {
      const b = h * d, o = h * m, r = a * d, G = a * m;
      l[0] = b + G * Z, l[4] = r * Z - o, l[8] = c * a, l[1] = c * m, l[5] = c * d, l[9] = -Z, l[2] = o * Z - r, l[6] = G + b * Z, l[10] = c * h;
    } else if (t.order === "ZXY") {
      const b = h * d, o = h * m, r = a * d, G = a * m;
      l[0] = b - G * Z, l[4] = -c * m, l[8] = r + o * Z, l[1] = o + r * Z, l[5] = c * d, l[9] = G - b * Z, l[2] = -c * a, l[6] = Z, l[10] = c * h;
    } else if (t.order === "ZYX") {
      const b = c * d, o = c * m, r = Z * d, G = Z * m;
      l[0] = h * d, l[4] = r * a - o, l[8] = b * a + G, l[1] = h * m, l[5] = G * a + b, l[9] = o * a - r, l[2] = -a, l[6] = Z * h, l[10] = c * h;
    } else if (t.order === "YZX") {
      const b = c * h, o = c * a, r = Z * h, G = Z * a;
      l[0] = h * d, l[4] = G - b * m, l[8] = r * m + o, l[1] = m, l[5] = c * d, l[9] = -Z * d, l[2] = -a * d, l[6] = o * m + r, l[10] = b - G * m;
    } else if (t.order === "XZY") {
      const b = c * h, o = c * a, r = Z * h, G = Z * a;
      l[0] = h * d, l[4] = -m, l[8] = a * d, l[1] = b * m + G, l[5] = c * d, l[9] = o * m - r, l[2] = r * m - o, l[6] = Z * d, l[10] = G * m + b;
    }
    return l[3] = 0, l[7] = 0, l[11] = 0, l[12] = 0, l[13] = 0, l[14] = 0, l[15] = 1, this;
  }
  makeRotationFromQuaternion(t) {
    return this.compose($i, t, te);
  }
  lookAt(t, l, i) {
    const e = this.elements;
    return q.subVectors(t, l), q.lengthSq() === 0 && (q.z = 1), q.normalize(), pt.crossVectors(i, q), pt.lengthSq() === 0 && (Math.abs(i.z) === 1 ? q.x += 1e-4 : q.z += 1e-4, q.normalize(), pt.crossVectors(i, q)), pt.normalize(), dl.crossVectors(q, pt), e[0] = pt.x, e[4] = dl.x, e[8] = q.x, e[1] = pt.y, e[5] = dl.y, e[9] = q.y, e[2] = pt.z, e[6] = dl.z, e[10] = q.z, this;
  }
  multiply(t) {
    return this.multiplyMatrices(this, t);
  }
  premultiply(t) {
    return this.multiplyMatrices(t, this);
  }
  multiplyMatrices(t, l) {
    const i = t.elements, e = l.elements, n = this.elements, c = i[0], Z = i[4], h = i[8], a = i[12], d = i[1], m = i[5], b = i[9], o = i[13], r = i[2], G = i[6], u = i[10], Y = i[14], p = i[3], g = i[7], y = i[11], x = i[15], J = e[0], R = e[4], w = e[8], O = e[12], I = e[1], U = e[5], S = e[9], j = e[13], Wt = e[2], P = e[6], Gt = e[10], qt = e[14], $t = e[3], tl = e[7], ll = e[11], il = e[15];
    return n[0] = c * J + Z * I + h * Wt + a * $t, n[4] = c * R + Z * U + h * P + a * tl, n[8] = c * w + Z * S + h * Gt + a * ll, n[12] = c * O + Z * j + h * qt + a * il, n[1] = d * J + m * I + b * Wt + o * $t, n[5] = d * R + m * U + b * P + o * tl, n[9] = d * w + m * S + b * Gt + o * ll, n[13] = d * O + m * j + b * qt + o * il, n[2] = r * J + G * I + u * Wt + Y * $t, n[6] = r * R + G * U + u * P + Y * tl, n[10] = r * w + G * S + u * Gt + Y * ll, n[14] = r * O + G * j + u * qt + Y * il, n[3] = p * J + g * I + y * Wt + x * $t, n[7] = p * R + g * U + y * P + x * tl, n[11] = p * w + g * S + y * Gt + x * ll, n[15] = p * O + g * j + y * qt + x * il, this;
  }
  multiplyScalar(t) {
    const l = this.elements;
    return l[0] *= t, l[4] *= t, l[8] *= t, l[12] *= t, l[1] *= t, l[5] *= t, l[9] *= t, l[13] *= t, l[2] *= t, l[6] *= t, l[10] *= t, l[14] *= t, l[3] *= t, l[7] *= t, l[11] *= t, l[15] *= t, this;
  }
  determinant() {
    const t = this.elements, l = t[0], i = t[4], e = t[8], n = t[12], c = t[1], Z = t[5], h = t[9], a = t[13], d = t[2], m = t[6], b = t[10], o = t[14], r = t[3], G = t[7], u = t[11], Y = t[15];
    return r * (+n * h * m - e * a * m - n * Z * b + i * a * b + e * Z * o - i * h * o) + G * (+l * h * o - l * a * b + n * c * b - e * c * o + e * a * d - n * h * d) + u * (+l * a * m - l * Z * o - n * c * m + i * c * o + n * Z * d - i * a * d) + Y * (-e * Z * d - l * h * m + l * Z * b + e * c * m - i * c * b + i * h * d);
  }
  transpose() {
    const t = this.elements;
    let l;
    return l = t[1], t[1] = t[4], t[4] = l, l = t[2], t[2] = t[8], t[8] = l, l = t[6], t[6] = t[9], t[9] = l, l = t[3], t[3] = t[12], t[12] = l, l = t[7], t[7] = t[13], t[13] = l, l = t[11], t[11] = t[14], t[14] = l, this;
  }
  setPosition(t, l, i) {
    const e = this.elements;
    return t.isVector3 ? (e[12] = t.x, e[13] = t.y, e[14] = t.z) : (e[12] = t, e[13] = l, e[14] = i), this;
  }
  invert() {
    const t = this.elements, l = t[0], i = t[1], e = t[2], n = t[3], c = t[4], Z = t[5], h = t[6], a = t[7], d = t[8], m = t[9], b = t[10], o = t[11], r = t[12], G = t[13], u = t[14], Y = t[15], p = m * u * a - G * b * a + G * h * o - Z * u * o - m * h * Y + Z * b * Y, g = r * b * a - d * u * a - r * h * o + c * u * o + d * h * Y - c * b * Y, y = d * G * a - r * m * a + r * Z * o - c * G * o - d * Z * Y + c * m * Y, x = r * m * h - d * G * h - r * Z * b + c * G * b + d * Z * u - c * m * u, J = l * p + i * g + e * y + n * x;
    if (J === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const R = 1 / J;
    return t[0] = p * R, t[1] = (G * b * n - m * u * n - G * e * o + i * u * o + m * e * Y - i * b * Y) * R, t[2] = (Z * u * n - G * h * n + G * e * a - i * u * a - Z * e * Y + i * h * Y) * R, t[3] = (m * h * n - Z * b * n - m * e * a + i * b * a + Z * e * o - i * h * o) * R, t[4] = g * R, t[5] = (d * u * n - r * b * n + r * e * o - l * u * o - d * e * Y + l * b * Y) * R, t[6] = (r * h * n - c * u * n - r * e * a + l * u * a + c * e * Y - l * h * Y) * R, t[7] = (c * b * n - d * h * n + d * e * a - l * b * a - c * e * o + l * h * o) * R, t[8] = y * R, t[9] = (r * m * n - d * G * n - r * i * o + l * G * o + d * i * Y - l * m * Y) * R, t[10] = (c * G * n - r * Z * n + r * i * a - l * G * a - c * i * Y + l * Z * Y) * R, t[11] = (d * Z * n - c * m * n - d * i * a + l * m * a + c * i * o - l * Z * o) * R, t[12] = x * R, t[13] = (d * G * e - r * m * e + r * i * b - l * G * b - d * i * u + l * m * u) * R, t[14] = (r * Z * e - c * G * e - r * i * h + l * G * h + c * i * u - l * Z * u) * R, t[15] = (c * m * e - d * Z * e + d * i * h - l * m * h - c * i * b + l * Z * b) * R, this;
  }
  scale(t) {
    const l = this.elements, i = t.x, e = t.y, n = t.z;
    return l[0] *= i, l[4] *= e, l[8] *= n, l[1] *= i, l[5] *= e, l[9] *= n, l[2] *= i, l[6] *= e, l[10] *= n, l[3] *= i, l[7] *= e, l[11] *= n, this;
  }
  getMaxScaleOnAxis() {
    const t = this.elements, l = t[0] * t[0] + t[1] * t[1] + t[2] * t[2], i = t[4] * t[4] + t[5] * t[5] + t[6] * t[6], e = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
    return Math.sqrt(Math.max(l, i, e));
  }
  makeTranslation(t, l, i) {
    return this.set(
      1,
      0,
      0,
      t,
      0,
      1,
      0,
      l,
      0,
      0,
      1,
      i,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationX(t) {
    const l = Math.cos(t), i = Math.sin(t);
    return this.set(
      1,
      0,
      0,
      0,
      0,
      l,
      -i,
      0,
      0,
      i,
      l,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationY(t) {
    const l = Math.cos(t), i = Math.sin(t);
    return this.set(
      l,
      0,
      i,
      0,
      0,
      1,
      0,
      0,
      -i,
      0,
      l,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationZ(t) {
    const l = Math.cos(t), i = Math.sin(t);
    return this.set(
      l,
      -i,
      0,
      0,
      i,
      l,
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
  makeRotationAxis(t, l) {
    const i = Math.cos(l), e = Math.sin(l), n = 1 - i, c = t.x, Z = t.y, h = t.z, a = n * c, d = n * Z;
    return this.set(
      a * c + i,
      a * Z - e * h,
      a * h + e * Z,
      0,
      a * Z + e * h,
      d * Z + i,
      d * h - e * c,
      0,
      a * h - e * Z,
      d * h + e * c,
      n * h * h + i,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(t, l, i) {
    return this.set(
      t,
      0,
      0,
      0,
      0,
      l,
      0,
      0,
      0,
      0,
      i,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeShear(t, l, i, e, n, c) {
    return this.set(
      1,
      i,
      n,
      0,
      t,
      1,
      c,
      0,
      l,
      e,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  compose(t, l, i) {
    const e = this.elements, n = l._x, c = l._y, Z = l._z, h = l._w, a = n + n, d = c + c, m = Z + Z, b = n * a, o = n * d, r = n * m, G = c * d, u = c * m, Y = Z * m, p = h * a, g = h * d, y = h * m, x = i.x, J = i.y, R = i.z;
    return e[0] = (1 - (G + Y)) * x, e[1] = (o + y) * x, e[2] = (r - g) * x, e[3] = 0, e[4] = (o - y) * J, e[5] = (1 - (b + Y)) * J, e[6] = (u + p) * J, e[7] = 0, e[8] = (r + g) * R, e[9] = (u - p) * R, e[10] = (1 - (b + G)) * R, e[11] = 0, e[12] = t.x, e[13] = t.y, e[14] = t.z, e[15] = 1, this;
  }
  decompose(t, l, i) {
    const e = this.elements;
    let n = vt.set(e[0], e[1], e[2]).length();
    const c = vt.set(e[4], e[5], e[6]).length(), Z = vt.set(e[8], e[9], e[10]).length();
    this.determinant() < 0 && (n = -n), t.x = e[12], t.y = e[13], t.z = e[14], Zt.copy(this);
    const a = 1 / n, d = 1 / c, m = 1 / Z;
    return Zt.elements[0] *= a, Zt.elements[1] *= a, Zt.elements[2] *= a, Zt.elements[4] *= d, Zt.elements[5] *= d, Zt.elements[6] *= d, Zt.elements[8] *= m, Zt.elements[9] *= m, Zt.elements[10] *= m, l.setFromRotationMatrix(Zt), i.x = n, i.y = c, i.z = Z, this;
  }
  makePerspective(t, l, i, e, n, c) {
    const Z = this.elements, h = 2 * n / (l - t), a = 2 * n / (i - e), d = (l + t) / (l - t), m = (i + e) / (i - e), b = -(c + n) / (c - n), o = -2 * c * n / (c - n);
    return Z[0] = h, Z[4] = 0, Z[8] = d, Z[12] = 0, Z[1] = 0, Z[5] = a, Z[9] = m, Z[13] = 0, Z[2] = 0, Z[6] = 0, Z[10] = b, Z[14] = o, Z[3] = 0, Z[7] = 0, Z[11] = -1, Z[15] = 0, this;
  }
  makeOrthographic(t, l, i, e, n, c) {
    const Z = this.elements, h = 1 / (l - t), a = 1 / (i - e), d = 1 / (c - n), m = (l + t) * h, b = (i + e) * a, o = (c + n) * d;
    return Z[0] = 2 * h, Z[4] = 0, Z[8] = 0, Z[12] = -m, Z[1] = 0, Z[5] = 2 * a, Z[9] = 0, Z[13] = -b, Z[2] = 0, Z[6] = 0, Z[10] = -2 * d, Z[14] = -o, Z[3] = 0, Z[7] = 0, Z[11] = 0, Z[15] = 1, this;
  }
  equals(t) {
    const l = this.elements, i = t.elements;
    for (let e = 0; e < 16; e++)
      if (l[e] !== i[e])
        return !1;
    return !0;
  }
  fromArray(t, l = 0) {
    for (let i = 0; i < 16; i++)
      this.elements[i] = t[i + l];
    return this;
  }
  toArray(t = [], l = 0) {
    const i = this.elements;
    return t[l] = i[0], t[l + 1] = i[1], t[l + 2] = i[2], t[l + 3] = i[3], t[l + 4] = i[4], t[l + 5] = i[5], t[l + 6] = i[6], t[l + 7] = i[7], t[l + 8] = i[8], t[l + 9] = i[9], t[l + 10] = i[10], t[l + 11] = i[11], t[l + 12] = i[12], t[l + 13] = i[13], t[l + 14] = i[14], t[l + 15] = i[15], t;
  }
}
const vt = /* @__PURE__ */ new W(), Zt = /* @__PURE__ */ new E(), $i = /* @__PURE__ */ new W(0, 0, 0), te = /* @__PURE__ */ new W(1, 1, 1), pt = /* @__PURE__ */ new W(), dl = /* @__PURE__ */ new W(), q = /* @__PURE__ */ new W(), ql = /* @__PURE__ */ new E(), $l = /* @__PURE__ */ new Kt();
class yl {
  constructor(t = 0, l = 0, i = 0, e = yl.DEFAULT_ORDER) {
    this.isEuler = !0, this._x = t, this._y = l, this._z = i, this._order = e;
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
  set(t, l, i, e = this._order) {
    return this._x = t, this._y = l, this._z = i, this._order = e, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(t) {
    return this._x = t._x, this._y = t._y, this._z = t._z, this._order = t._order, this._onChangeCallback(), this;
  }
  setFromRotationMatrix(t, l = this._order, i = !0) {
    const e = t.elements, n = e[0], c = e[4], Z = e[8], h = e[1], a = e[5], d = e[9], m = e[2], b = e[6], o = e[10];
    switch (l) {
      case "XYZ":
        this._y = Math.asin(tt(Z, -1, 1)), Math.abs(Z) < 0.9999999 ? (this._x = Math.atan2(-d, o), this._z = Math.atan2(-c, n)) : (this._x = Math.atan2(b, a), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-tt(d, -1, 1)), Math.abs(d) < 0.9999999 ? (this._y = Math.atan2(Z, o), this._z = Math.atan2(h, a)) : (this._y = Math.atan2(-m, n), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(tt(b, -1, 1)), Math.abs(b) < 0.9999999 ? (this._y = Math.atan2(-m, o), this._z = Math.atan2(-c, a)) : (this._y = 0, this._z = Math.atan2(h, n));
        break;
      case "ZYX":
        this._y = Math.asin(-tt(m, -1, 1)), Math.abs(m) < 0.9999999 ? (this._x = Math.atan2(b, o), this._z = Math.atan2(h, n)) : (this._x = 0, this._z = Math.atan2(-c, a));
        break;
      case "YZX":
        this._z = Math.asin(tt(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._x = Math.atan2(-d, a), this._y = Math.atan2(-m, n)) : (this._x = 0, this._y = Math.atan2(Z, o));
        break;
      case "XZY":
        this._z = Math.asin(-tt(c, -1, 1)), Math.abs(c) < 0.9999999 ? (this._x = Math.atan2(b, a), this._y = Math.atan2(Z, n)) : (this._x = Math.atan2(-d, o), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + l);
    }
    return this._order = l, i === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(t, l, i) {
    return ql.makeRotationFromQuaternion(t), this.setFromRotationMatrix(ql, l, i);
  }
  setFromVector3(t, l = this._order) {
    return this.set(t.x, t.y, t.z, l);
  }
  reorder(t) {
    return $l.setFromEuler(this), this.setFromQuaternion($l, t);
  }
  equals(t) {
    return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order;
  }
  fromArray(t) {
    return this._x = t[0], this._y = t[1], this._z = t[2], t[3] !== void 0 && (this._order = t[3]), this._onChangeCallback(), this;
  }
  toArray(t = [], l = 0) {
    return t[l] = this._x, t[l + 1] = this._y, t[l + 2] = this._z, t[l + 3] = this._order, t;
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
yl.DEFAULT_ORDER = "XYZ";
class le {
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
let ie = 0;
const ti = /* @__PURE__ */ new W(), kt = /* @__PURE__ */ new Kt(), ot = /* @__PURE__ */ new E(), ml = /* @__PURE__ */ new W(), St = /* @__PURE__ */ new W(), ee = /* @__PURE__ */ new W(), ne = /* @__PURE__ */ new Kt(), li = /* @__PURE__ */ new W(1, 0, 0), ii = /* @__PURE__ */ new W(0, 1, 0), ei = /* @__PURE__ */ new W(0, 0, 1), se = { type: "added" }, ni = { type: "removed" };
class it extends Bt {
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: ie++ }), this.uuid = Ot(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = it.DEFAULT_UP.clone();
    const t = new W(), l = new yl(), i = new Kt(), e = new W(1, 1, 1);
    function n() {
      i.setFromEuler(l, !1);
    }
    function c() {
      l.setFromQuaternion(i, void 0, !1);
    }
    l._onChange(n), i._onChange(c), Object.defineProperties(this, {
      position: {
        configurable: !0,
        enumerable: !0,
        value: t
      },
      rotation: {
        configurable: !0,
        enumerable: !0,
        value: l
      },
      quaternion: {
        configurable: !0,
        enumerable: !0,
        value: i
      },
      scale: {
        configurable: !0,
        enumerable: !0,
        value: e
      },
      modelViewMatrix: {
        value: new E()
      },
      normalMatrix: {
        value: new It()
      }
    }), this.matrix = new E(), this.matrixWorld = new E(), this.matrixAutoUpdate = it.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.matrixWorldAutoUpdate = it.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.layers = new le(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
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
  setRotationFromAxisAngle(t, l) {
    this.quaternion.setFromAxisAngle(t, l);
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
  rotateOnAxis(t, l) {
    return kt.setFromAxisAngle(t, l), this.quaternion.multiply(kt), this;
  }
  rotateOnWorldAxis(t, l) {
    return kt.setFromAxisAngle(t, l), this.quaternion.premultiply(kt), this;
  }
  rotateX(t) {
    return this.rotateOnAxis(li, t);
  }
  rotateY(t) {
    return this.rotateOnAxis(ii, t);
  }
  rotateZ(t) {
    return this.rotateOnAxis(ei, t);
  }
  translateOnAxis(t, l) {
    return ti.copy(t).applyQuaternion(this.quaternion), this.position.add(ti.multiplyScalar(l)), this;
  }
  translateX(t) {
    return this.translateOnAxis(li, t);
  }
  translateY(t) {
    return this.translateOnAxis(ii, t);
  }
  translateZ(t) {
    return this.translateOnAxis(ei, t);
  }
  localToWorld(t) {
    return this.updateWorldMatrix(!0, !1), t.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(t) {
    return this.updateWorldMatrix(!0, !1), t.applyMatrix4(ot.copy(this.matrixWorld).invert());
  }
  lookAt(t, l, i) {
    t.isVector3 ? ml.copy(t) : ml.set(t, l, i);
    const e = this.parent;
    this.updateWorldMatrix(!0, !1), St.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? ot.lookAt(St, ml, this.up) : ot.lookAt(ml, St, this.up), this.quaternion.setFromRotationMatrix(ot), e && (ot.extractRotation(e.matrixWorld), kt.setFromRotationMatrix(ot), this.quaternion.premultiply(kt.invert()));
  }
  add(t) {
    if (arguments.length > 1) {
      for (let l = 0; l < arguments.length; l++)
        this.add(arguments[l]);
      return this;
    }
    return t === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t), this) : (t && t.isObject3D ? (t.parent !== null && t.parent.remove(t), t.parent = this, this.children.push(t), t.dispatchEvent(se)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t), this);
  }
  remove(t) {
    if (arguments.length > 1) {
      for (let i = 0; i < arguments.length; i++)
        this.remove(arguments[i]);
      return this;
    }
    const l = this.children.indexOf(t);
    return l !== -1 && (t.parent = null, this.children.splice(l, 1), t.dispatchEvent(ni)), this;
  }
  removeFromParent() {
    const t = this.parent;
    return t !== null && t.remove(this), this;
  }
  clear() {
    for (let t = 0; t < this.children.length; t++) {
      const l = this.children[t];
      l.parent = null, l.dispatchEvent(ni);
    }
    return this.children.length = 0, this;
  }
  attach(t) {
    return this.updateWorldMatrix(!0, !1), ot.copy(this.matrixWorld).invert(), t.parent !== null && (t.parent.updateWorldMatrix(!0, !1), ot.multiply(t.parent.matrixWorld)), t.applyMatrix4(ot), this.add(t), t.updateWorldMatrix(!1, !0), this;
  }
  getObjectById(t) {
    return this.getObjectByProperty("id", t);
  }
  getObjectByName(t) {
    return this.getObjectByProperty("name", t);
  }
  getObjectByProperty(t, l) {
    if (this[t] === l)
      return this;
    for (let i = 0, e = this.children.length; i < e; i++) {
      const c = this.children[i].getObjectByProperty(t, l);
      if (c !== void 0)
        return c;
    }
  }
  getObjectsByProperty(t, l) {
    let i = [];
    this[t] === l && i.push(this);
    for (let e = 0, n = this.children.length; e < n; e++) {
      const c = this.children[e].getObjectsByProperty(t, l);
      c.length > 0 && (i = i.concat(c));
    }
    return i;
  }
  getWorldPosition(t) {
    return this.updateWorldMatrix(!0, !1), t.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(t) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(St, t, ee), t;
  }
  getWorldScale(t) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(St, ne, t), t;
  }
  getWorldDirection(t) {
    this.updateWorldMatrix(!0, !1);
    const l = this.matrixWorld.elements;
    return t.set(l[8], l[9], l[10]).normalize();
  }
  raycast() {
  }
  traverse(t) {
    t(this);
    const l = this.children;
    for (let i = 0, e = l.length; i < e; i++)
      l[i].traverse(t);
  }
  traverseVisible(t) {
    if (this.visible === !1)
      return;
    t(this);
    const l = this.children;
    for (let i = 0, e = l.length; i < e; i++)
      l[i].traverseVisible(t);
  }
  traverseAncestors(t) {
    const l = this.parent;
    l !== null && (t(l), l.traverseAncestors(t));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0;
  }
  updateMatrixWorld(t) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t) && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, t = !0);
    const l = this.children;
    for (let i = 0, e = l.length; i < e; i++) {
      const n = l[i];
      (n.matrixWorldAutoUpdate === !0 || t === !0) && n.updateMatrixWorld(t);
    }
  }
  updateWorldMatrix(t, l) {
    const i = this.parent;
    if (t === !0 && i !== null && i.matrixWorldAutoUpdate === !0 && i.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), l === !0) {
      const e = this.children;
      for (let n = 0, c = e.length; n < c; n++) {
        const Z = e[n];
        Z.matrixWorldAutoUpdate === !0 && Z.updateWorldMatrix(!1, !0);
      }
    }
  }
  toJSON(t) {
    const l = t === void 0 || typeof t == "string", i = {};
    l && (t = {
      geometries: {},
      materials: {},
      textures: {},
      images: {},
      shapes: {},
      skeletons: {},
      animations: {},
      nodes: {}
    }, i.metadata = {
      version: 4.5,
      type: "Object",
      generator: "Object3D.toJSON"
    });
    const e = {};
    e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), this.castShadow === !0 && (e.castShadow = !0), this.receiveShadow === !0 && (e.receiveShadow = !0), this.visible === !1 && (e.visible = !1), this.frustumCulled === !1 && (e.frustumCulled = !1), this.renderOrder !== 0 && (e.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (e.userData = this.userData), e.layers = this.layers.mask, e.matrix = this.matrix.toArray(), this.matrixAutoUpdate === !1 && (e.matrixAutoUpdate = !1), this.isInstancedMesh && (e.type = "InstancedMesh", e.count = this.count, e.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (e.instanceColor = this.instanceColor.toJSON()));
    function n(Z, h) {
      return Z[h.uuid] === void 0 && (Z[h.uuid] = h.toJSON(t)), h.uuid;
    }
    if (this.isScene)
      this.background && (this.background.isColor ? e.background = this.background.toJSON() : this.background.isTexture && (e.background = this.background.toJSON(t).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (e.environment = this.environment.toJSON(t).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      e.geometry = n(t.geometries, this.geometry);
      const Z = this.geometry.parameters;
      if (Z !== void 0 && Z.shapes !== void 0) {
        const h = Z.shapes;
        if (Array.isArray(h))
          for (let a = 0, d = h.length; a < d; a++) {
            const m = h[a];
            n(t.shapes, m);
          }
        else
          n(t.shapes, h);
      }
    }
    if (this.isSkinnedMesh && (e.bindMode = this.bindMode, e.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (n(t.skeletons, this.skeleton), e.skeleton = this.skeleton.uuid)), this.material !== void 0)
      if (Array.isArray(this.material)) {
        const Z = [];
        for (let h = 0, a = this.material.length; h < a; h++)
          Z.push(n(t.materials, this.material[h]));
        e.material = Z;
      } else
        e.material = n(t.materials, this.material);
    if (this.children.length > 0) {
      e.children = [];
      for (let Z = 0; Z < this.children.length; Z++)
        e.children.push(this.children[Z].toJSON(t).object);
    }
    if (this.animations.length > 0) {
      e.animations = [];
      for (let Z = 0; Z < this.animations.length; Z++) {
        const h = this.animations[Z];
        e.animations.push(n(t.animations, h));
      }
    }
    if (l) {
      const Z = c(t.geometries), h = c(t.materials), a = c(t.textures), d = c(t.images), m = c(t.shapes), b = c(t.skeletons), o = c(t.animations), r = c(t.nodes);
      Z.length > 0 && (i.geometries = Z), h.length > 0 && (i.materials = h), a.length > 0 && (i.textures = a), d.length > 0 && (i.images = d), m.length > 0 && (i.shapes = m), b.length > 0 && (i.skeletons = b), o.length > 0 && (i.animations = o), r.length > 0 && (i.nodes = r);
    }
    return i.object = e, i;
    function c(Z) {
      const h = [];
      for (const a in Z) {
        const d = Z[a];
        delete d.metadata, h.push(d);
      }
      return h;
    }
  }
  clone(t) {
    return new this.constructor().copy(this, t);
  }
  copy(t, l = !0) {
    if (this.name = t.name, this.up.copy(t.up), this.position.copy(t.position), this.rotation.order = t.rotation.order, this.quaternion.copy(t.quaternion), this.scale.copy(t.scale), this.matrix.copy(t.matrix), this.matrixWorld.copy(t.matrixWorld), this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate, this.matrixWorldAutoUpdate = t.matrixWorldAutoUpdate, this.layers.mask = t.layers.mask, this.visible = t.visible, this.castShadow = t.castShadow, this.receiveShadow = t.receiveShadow, this.frustumCulled = t.frustumCulled, this.renderOrder = t.renderOrder, this.userData = JSON.parse(JSON.stringify(t.userData)), l === !0)
      for (let i = 0; i < t.children.length; i++) {
        const e = t.children[i];
        this.add(e.clone());
      }
    return this;
  }
}
it.DEFAULT_UP = /* @__PURE__ */ new W(0, 1, 0);
it.DEFAULT_MATRIX_AUTO_UPDATE = !0;
it.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
let ce = 0;
class Ll extends Bt {
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: ce++ }), this.uuid = Ot(), this.name = "", this.type = "Material", this.blending = 1, this.side = 0, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = 100, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = 3, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = 7680, this.stencilZFail = 7680, this.stencilZPass = 7680, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
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
      for (const l in t) {
        const i = t[l];
        if (i === void 0) {
          console.warn("THREE.Material: '" + l + "' parameter is undefined.");
          continue;
        }
        const e = this[l];
        if (e === void 0) {
          console.warn("THREE." + this.type + ": '" + l + "' is not a property of this material.");
          continue;
        }
        e && e.isColor ? e.set(i) : e && e.isVector3 && i && i.isVector3 ? e.copy(i) : this[l] = i;
      }
  }
  toJSON(t) {
    const l = t === void 0 || typeof t == "string";
    l && (t = {
      textures: {},
      images: {}
    });
    const i = {
      metadata: {
        version: 4.5,
        type: "Material",
        generator: "Material.toJSON"
      }
    };
    i.uuid = this.uuid, i.type = this.type, this.name !== "" && (i.name = this.name), this.color && this.color.isColor && (i.color = this.color.getHex()), this.roughness !== void 0 && (i.roughness = this.roughness), this.metalness !== void 0 && (i.metalness = this.metalness), this.sheen !== void 0 && (i.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (i.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (i.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (i.emissive = this.emissive.getHex()), this.emissiveIntensity && this.emissiveIntensity !== 1 && (i.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (i.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (i.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (i.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (i.shininess = this.shininess), this.clearcoat !== void 0 && (i.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (i.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (i.clearcoatMap = this.clearcoatMap.toJSON(t).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (i.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (i.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid, i.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.iridescence !== void 0 && (i.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (i.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (i.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (i.iridescenceMap = this.iridescenceMap.toJSON(t).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (i.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(t).uuid), this.map && this.map.isTexture && (i.map = this.map.toJSON(t).uuid), this.matcap && this.matcap.isTexture && (i.matcap = this.matcap.toJSON(t).uuid), this.alphaMap && this.alphaMap.isTexture && (i.alphaMap = this.alphaMap.toJSON(t).uuid), this.lightMap && this.lightMap.isTexture && (i.lightMap = this.lightMap.toJSON(t).uuid, i.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (i.aoMap = this.aoMap.toJSON(t).uuid, i.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (i.bumpMap = this.bumpMap.toJSON(t).uuid, i.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (i.normalMap = this.normalMap.toJSON(t).uuid, i.normalMapType = this.normalMapType, i.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (i.displacementMap = this.displacementMap.toJSON(t).uuid, i.displacementScale = this.displacementScale, i.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (i.roughnessMap = this.roughnessMap.toJSON(t).uuid), this.metalnessMap && this.metalnessMap.isTexture && (i.metalnessMap = this.metalnessMap.toJSON(t).uuid), this.emissiveMap && this.emissiveMap.isTexture && (i.emissiveMap = this.emissiveMap.toJSON(t).uuid), this.specularMap && this.specularMap.isTexture && (i.specularMap = this.specularMap.toJSON(t).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (i.specularIntensityMap = this.specularIntensityMap.toJSON(t).uuid), this.specularColorMap && this.specularColorMap.isTexture && (i.specularColorMap = this.specularColorMap.toJSON(t).uuid), this.envMap && this.envMap.isTexture && (i.envMap = this.envMap.toJSON(t).uuid, this.combine !== void 0 && (i.combine = this.combine)), this.envMapIntensity !== void 0 && (i.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (i.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (i.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (i.gradientMap = this.gradientMap.toJSON(t).uuid), this.transmission !== void 0 && (i.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (i.transmissionMap = this.transmissionMap.toJSON(t).uuid), this.thickness !== void 0 && (i.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (i.thicknessMap = this.thicknessMap.toJSON(t).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (i.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (i.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (i.size = this.size), this.shadowSide !== null && (i.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (i.sizeAttenuation = this.sizeAttenuation), this.blending !== 1 && (i.blending = this.blending), this.side !== 0 && (i.side = this.side), this.vertexColors && (i.vertexColors = !0), this.opacity < 1 && (i.opacity = this.opacity), this.transparent === !0 && (i.transparent = this.transparent), i.depthFunc = this.depthFunc, i.depthTest = this.depthTest, i.depthWrite = this.depthWrite, i.colorWrite = this.colorWrite, i.stencilWrite = this.stencilWrite, i.stencilWriteMask = this.stencilWriteMask, i.stencilFunc = this.stencilFunc, i.stencilRef = this.stencilRef, i.stencilFuncMask = this.stencilFuncMask, i.stencilFail = this.stencilFail, i.stencilZFail = this.stencilZFail, i.stencilZPass = this.stencilZPass, this.rotation !== void 0 && this.rotation !== 0 && (i.rotation = this.rotation), this.polygonOffset === !0 && (i.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (i.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (i.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (i.linewidth = this.linewidth), this.dashSize !== void 0 && (i.dashSize = this.dashSize), this.gapSize !== void 0 && (i.gapSize = this.gapSize), this.scale !== void 0 && (i.scale = this.scale), this.dithering === !0 && (i.dithering = !0), this.alphaTest > 0 && (i.alphaTest = this.alphaTest), this.alphaToCoverage === !0 && (i.alphaToCoverage = this.alphaToCoverage), this.premultipliedAlpha === !0 && (i.premultipliedAlpha = this.premultipliedAlpha), this.forceSinglePass === !0 && (i.forceSinglePass = this.forceSinglePass), this.wireframe === !0 && (i.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (i.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (i.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (i.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (i.flatShading = this.flatShading), this.visible === !1 && (i.visible = !1), this.toneMapped === !1 && (i.toneMapped = !1), this.fog === !1 && (i.fog = !1), Object.keys(this.userData).length > 0 && (i.userData = this.userData);
    function e(n) {
      const c = [];
      for (const Z in n) {
        const h = n[Z];
        delete h.metadata, c.push(h);
      }
      return c;
    }
    if (l) {
      const n = e(t.textures), c = e(t.images);
      n.length > 0 && (i.textures = n), c.length > 0 && (i.images = c);
    }
    return i;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    this.name = t.name, this.blending = t.blending, this.side = t.side, this.vertexColors = t.vertexColors, this.opacity = t.opacity, this.transparent = t.transparent, this.blendSrc = t.blendSrc, this.blendDst = t.blendDst, this.blendEquation = t.blendEquation, this.blendSrcAlpha = t.blendSrcAlpha, this.blendDstAlpha = t.blendDstAlpha, this.blendEquationAlpha = t.blendEquationAlpha, this.depthFunc = t.depthFunc, this.depthTest = t.depthTest, this.depthWrite = t.depthWrite, this.stencilWriteMask = t.stencilWriteMask, this.stencilFunc = t.stencilFunc, this.stencilRef = t.stencilRef, this.stencilFuncMask = t.stencilFuncMask, this.stencilFail = t.stencilFail, this.stencilZFail = t.stencilZFail, this.stencilZPass = t.stencilZPass, this.stencilWrite = t.stencilWrite;
    const l = t.clippingPlanes;
    let i = null;
    if (l !== null) {
      const e = l.length;
      i = new Array(e);
      for (let n = 0; n !== e; ++n)
        i[n] = l[n].clone();
    }
    return this.clippingPlanes = i, this.clipIntersection = t.clipIntersection, this.clipShadows = t.clipShadows, this.shadowSide = t.shadowSide, this.colorWrite = t.colorWrite, this.precision = t.precision, this.polygonOffset = t.polygonOffset, this.polygonOffsetFactor = t.polygonOffsetFactor, this.polygonOffsetUnits = t.polygonOffsetUnits, this.dithering = t.dithering, this.alphaTest = t.alphaTest, this.alphaToCoverage = t.alphaToCoverage, this.premultipliedAlpha = t.premultipliedAlpha, this.forceSinglePass = t.forceSinglePass, this.visible = t.visible, this.toneMapped = t.toneMapped, this.userData = JSON.parse(JSON.stringify(t.userData)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(t) {
    t === !0 && this.version++;
  }
}
const Q = /* @__PURE__ */ new W(), bl = /* @__PURE__ */ new dt();
class z {
  constructor(t, l, i = !1) {
    if (Array.isArray(t))
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = !0, this.name = "", this.array = t, this.itemSize = l, this.count = t !== void 0 ? t.length / l : 0, this.normalized = i, this.usage = 35044, this.updateRange = { offset: 0, count: -1 }, this.version = 0;
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
  copyAt(t, l, i) {
    t *= this.itemSize, i *= l.itemSize;
    for (let e = 0, n = this.itemSize; e < n; e++)
      this.array[t + e] = l.array[i + e];
    return this;
  }
  copyArray(t) {
    return this.array.set(t), this;
  }
  applyMatrix3(t) {
    if (this.itemSize === 2)
      for (let l = 0, i = this.count; l < i; l++)
        bl.fromBufferAttribute(this, l), bl.applyMatrix3(t), this.setXY(l, bl.x, bl.y);
    else if (this.itemSize === 3)
      for (let l = 0, i = this.count; l < i; l++)
        Q.fromBufferAttribute(this, l), Q.applyMatrix3(t), this.setXYZ(l, Q.x, Q.y, Q.z);
    return this;
  }
  applyMatrix4(t) {
    for (let l = 0, i = this.count; l < i; l++)
      Q.fromBufferAttribute(this, l), Q.applyMatrix4(t), this.setXYZ(l, Q.x, Q.y, Q.z);
    return this;
  }
  applyNormalMatrix(t) {
    for (let l = 0, i = this.count; l < i; l++)
      Q.fromBufferAttribute(this, l), Q.applyNormalMatrix(t), this.setXYZ(l, Q.x, Q.y, Q.z);
    return this;
  }
  transformDirection(t) {
    for (let l = 0, i = this.count; l < i; l++)
      Q.fromBufferAttribute(this, l), Q.transformDirection(t), this.setXYZ(l, Q.x, Q.y, Q.z);
    return this;
  }
  set(t, l = 0) {
    return this.array.set(t, l), this;
  }
  getX(t) {
    let l = this.array[t * this.itemSize];
    return this.normalized && (l = el(l, this.array)), l;
  }
  setX(t, l) {
    return this.normalized && (l = _(l, this.array)), this.array[t * this.itemSize] = l, this;
  }
  getY(t) {
    let l = this.array[t * this.itemSize + 1];
    return this.normalized && (l = el(l, this.array)), l;
  }
  setY(t, l) {
    return this.normalized && (l = _(l, this.array)), this.array[t * this.itemSize + 1] = l, this;
  }
  getZ(t) {
    let l = this.array[t * this.itemSize + 2];
    return this.normalized && (l = el(l, this.array)), l;
  }
  setZ(t, l) {
    return this.normalized && (l = _(l, this.array)), this.array[t * this.itemSize + 2] = l, this;
  }
  getW(t) {
    let l = this.array[t * this.itemSize + 3];
    return this.normalized && (l = el(l, this.array)), l;
  }
  setW(t, l) {
    return this.normalized && (l = _(l, this.array)), this.array[t * this.itemSize + 3] = l, this;
  }
  setXY(t, l, i) {
    return t *= this.itemSize, this.normalized && (l = _(l, this.array), i = _(i, this.array)), this.array[t + 0] = l, this.array[t + 1] = i, this;
  }
  setXYZ(t, l, i, e) {
    return t *= this.itemSize, this.normalized && (l = _(l, this.array), i = _(i, this.array), e = _(e, this.array)), this.array[t + 0] = l, this.array[t + 1] = i, this.array[t + 2] = e, this;
  }
  setXYZW(t, l, i, e, n) {
    return t *= this.itemSize, this.normalized && (l = _(l, this.array), i = _(i, this.array), e = _(e, this.array), n = _(n, this.array)), this.array[t + 0] = l, this.array[t + 1] = i, this.array[t + 2] = e, this.array[t + 3] = n, this;
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
class Ze extends z {
  constructor(t, l, i) {
    super(new Uint8Array(t), l, i);
  }
}
class he extends z {
  constructor(t, l, i) {
    super(new Uint16Array(t), l, i);
  }
}
class ae extends z {
  constructor(t, l, i) {
    super(new Uint32Array(t), l, i);
  }
}
class El extends z {
  constructor(t, l, i) {
    super(new Float32Array(t), l, i);
  }
}
let de = 0;
const nt = /* @__PURE__ */ new E(), Hl = /* @__PURE__ */ new it(), Ht = /* @__PURE__ */ new W(), $ = /* @__PURE__ */ new K(), jt = /* @__PURE__ */ new K(), H = /* @__PURE__ */ new W();
class yt extends Bt {
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: de++ }), this.uuid = Ot(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(t) {
    return Array.isArray(t) ? this.index = new (Oi(t) ? ae : he)(t, 1) : this.index = t, this;
  }
  getAttribute(t) {
    return this.attributes[t];
  }
  setAttribute(t, l) {
    return this.attributes[t] = l, this;
  }
  deleteAttribute(t) {
    return delete this.attributes[t], this;
  }
  hasAttribute(t) {
    return this.attributes[t] !== void 0;
  }
  addGroup(t, l, i = 0) {
    this.groups.push({
      start: t,
      count: l,
      materialIndex: i
    });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(t, l) {
    this.drawRange.start = t, this.drawRange.count = l;
  }
  applyMatrix4(t) {
    const l = this.attributes.position;
    l !== void 0 && (l.applyMatrix4(t), l.needsUpdate = !0);
    const i = this.attributes.normal;
    if (i !== void 0) {
      const n = new It().getNormalMatrix(t);
      i.applyNormalMatrix(n), i.needsUpdate = !0;
    }
    const e = this.attributes.tangent;
    return e !== void 0 && (e.transformDirection(t), e.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(t) {
    return nt.makeRotationFromQuaternion(t), this.applyMatrix4(nt), this;
  }
  rotateX(t) {
    return nt.makeRotationX(t), this.applyMatrix4(nt), this;
  }
  rotateY(t) {
    return nt.makeRotationY(t), this.applyMatrix4(nt), this;
  }
  rotateZ(t) {
    return nt.makeRotationZ(t), this.applyMatrix4(nt), this;
  }
  translate(t, l, i) {
    return nt.makeTranslation(t, l, i), this.applyMatrix4(nt), this;
  }
  scale(t, l, i) {
    return nt.makeScale(t, l, i), this.applyMatrix4(nt), this;
  }
  lookAt(t) {
    return Hl.lookAt(t), Hl.updateMatrix(), this.applyMatrix4(Hl.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(Ht).negate(), this.translate(Ht.x, Ht.y, Ht.z), this;
  }
  setFromPoints(t) {
    const l = [];
    for (let i = 0, e = t.length; i < e; i++) {
      const n = t[i];
      l.push(n.x, n.y, n.z || 0);
    }
    return this.setAttribute("position", new El(l, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new K());
    const t = this.attributes.position, l = this.morphAttributes.position;
    if (t && t.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingBox.set(
        new W(-1 / 0, -1 / 0, -1 / 0),
        new W(1 / 0, 1 / 0, 1 / 0)
      );
      return;
    }
    if (t !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(t), l)
        for (let i = 0, e = l.length; i < e; i++) {
          const n = l[i];
          $.setFromBufferAttribute(n), this.morphTargetsRelative ? (H.addVectors(this.boundingBox.min, $.min), this.boundingBox.expandByPoint(H), H.addVectors(this.boundingBox.max, $.max), this.boundingBox.expandByPoint(H)) : (this.boundingBox.expandByPoint($.min), this.boundingBox.expandByPoint($.max));
        }
    } else
      this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new st());
    const t = this.attributes.position, l = this.morphAttributes.position;
    if (t && t.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingSphere.set(new W(), 1 / 0);
      return;
    }
    if (t) {
      const i = this.boundingSphere.center;
      if ($.setFromBufferAttribute(t), l)
        for (let n = 0, c = l.length; n < c; n++) {
          const Z = l[n];
          jt.setFromBufferAttribute(Z), this.morphTargetsRelative ? (H.addVectors($.min, jt.min), $.expandByPoint(H), H.addVectors($.max, jt.max), $.expandByPoint(H)) : ($.expandByPoint(jt.min), $.expandByPoint(jt.max));
        }
      $.getCenter(i);
      let e = 0;
      for (let n = 0, c = t.count; n < c; n++)
        H.fromBufferAttribute(t, n), e = Math.max(e, i.distanceToSquared(H));
      if (l)
        for (let n = 0, c = l.length; n < c; n++) {
          const Z = l[n], h = this.morphTargetsRelative;
          for (let a = 0, d = Z.count; a < d; a++)
            H.fromBufferAttribute(Z, a), h && (Ht.fromBufferAttribute(t, a), H.add(Ht)), e = Math.max(e, i.distanceToSquared(H));
        }
      this.boundingSphere.radius = Math.sqrt(e), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeTangents() {
    const t = this.index, l = this.attributes;
    if (t === null || l.position === void 0 || l.normal === void 0 || l.uv === void 0) {
      console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const i = t.array, e = l.position.array, n = l.normal.array, c = l.uv.array, Z = e.length / 3;
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new z(new Float32Array(4 * Z), 4));
    const h = this.getAttribute("tangent").array, a = [], d = [];
    for (let I = 0; I < Z; I++)
      a[I] = new W(), d[I] = new W();
    const m = new W(), b = new W(), o = new W(), r = new dt(), G = new dt(), u = new dt(), Y = new W(), p = new W();
    function g(I, U, S) {
      m.fromArray(e, I * 3), b.fromArray(e, U * 3), o.fromArray(e, S * 3), r.fromArray(c, I * 2), G.fromArray(c, U * 2), u.fromArray(c, S * 2), b.sub(m), o.sub(m), G.sub(r), u.sub(r);
      const j = 1 / (G.x * u.y - u.x * G.y);
      isFinite(j) && (Y.copy(b).multiplyScalar(u.y).addScaledVector(o, -G.y).multiplyScalar(j), p.copy(o).multiplyScalar(G.x).addScaledVector(b, -u.x).multiplyScalar(j), a[I].add(Y), a[U].add(Y), a[S].add(Y), d[I].add(p), d[U].add(p), d[S].add(p));
    }
    let y = this.groups;
    y.length === 0 && (y = [{
      start: 0,
      count: i.length
    }]);
    for (let I = 0, U = y.length; I < U; ++I) {
      const S = y[I], j = S.start, Wt = S.count;
      for (let P = j, Gt = j + Wt; P < Gt; P += 3)
        g(
          i[P + 0],
          i[P + 1],
          i[P + 2]
        );
    }
    const x = new W(), J = new W(), R = new W(), w = new W();
    function O(I) {
      R.fromArray(n, I * 3), w.copy(R);
      const U = a[I];
      x.copy(U), x.sub(R.multiplyScalar(R.dot(U))).normalize(), J.crossVectors(w, U);
      const j = J.dot(d[I]) < 0 ? -1 : 1;
      h[I * 4] = x.x, h[I * 4 + 1] = x.y, h[I * 4 + 2] = x.z, h[I * 4 + 3] = j;
    }
    for (let I = 0, U = y.length; I < U; ++I) {
      const S = y[I], j = S.start, Wt = S.count;
      for (let P = j, Gt = j + Wt; P < Gt; P += 3)
        O(i[P + 0]), O(i[P + 1]), O(i[P + 2]);
    }
  }
  computeVertexNormals() {
    const t = this.index, l = this.getAttribute("position");
    if (l !== void 0) {
      let i = this.getAttribute("normal");
      if (i === void 0)
        i = new z(new Float32Array(l.count * 3), 3), this.setAttribute("normal", i);
      else
        for (let b = 0, o = i.count; b < o; b++)
          i.setXYZ(b, 0, 0, 0);
      const e = new W(), n = new W(), c = new W(), Z = new W(), h = new W(), a = new W(), d = new W(), m = new W();
      if (t)
        for (let b = 0, o = t.count; b < o; b += 3) {
          const r = t.getX(b + 0), G = t.getX(b + 1), u = t.getX(b + 2);
          e.fromBufferAttribute(l, r), n.fromBufferAttribute(l, G), c.fromBufferAttribute(l, u), d.subVectors(c, n), m.subVectors(e, n), d.cross(m), Z.fromBufferAttribute(i, r), h.fromBufferAttribute(i, G), a.fromBufferAttribute(i, u), Z.add(d), h.add(d), a.add(d), i.setXYZ(r, Z.x, Z.y, Z.z), i.setXYZ(G, h.x, h.y, h.z), i.setXYZ(u, a.x, a.y, a.z);
        }
      else
        for (let b = 0, o = l.count; b < o; b += 3)
          e.fromBufferAttribute(l, b + 0), n.fromBufferAttribute(l, b + 1), c.fromBufferAttribute(l, b + 2), d.subVectors(c, n), m.subVectors(e, n), d.cross(m), i.setXYZ(b + 0, d.x, d.y, d.z), i.setXYZ(b + 1, d.x, d.y, d.z), i.setXYZ(b + 2, d.x, d.y, d.z);
      this.normalizeNormals(), i.needsUpdate = !0;
    }
  }
  // @deprecated since r144
  merge() {
    return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."), this;
  }
  normalizeNormals() {
    const t = this.attributes.normal;
    for (let l = 0, i = t.count; l < i; l++)
      H.fromBufferAttribute(t, l), H.normalize(), t.setXYZ(l, H.x, H.y, H.z);
  }
  toNonIndexed() {
    function t(Z, h) {
      const a = Z.array, d = Z.itemSize, m = Z.normalized, b = new a.constructor(h.length * d);
      let o = 0, r = 0;
      for (let G = 0, u = h.length; G < u; G++) {
        Z.isInterleavedBufferAttribute ? o = h[G] * Z.data.stride + Z.offset : o = h[G] * d;
        for (let Y = 0; Y < d; Y++)
          b[r++] = a[o++];
      }
      return new z(b, d, m);
    }
    if (this.index === null)
      return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const l = new yt(), i = this.index.array, e = this.attributes;
    for (const Z in e) {
      const h = e[Z], a = t(h, i);
      l.setAttribute(Z, a);
    }
    const n = this.morphAttributes;
    for (const Z in n) {
      const h = [], a = n[Z];
      for (let d = 0, m = a.length; d < m; d++) {
        const b = a[d], o = t(b, i);
        h.push(o);
      }
      l.morphAttributes[Z] = h;
    }
    l.morphTargetsRelative = this.morphTargetsRelative;
    const c = this.groups;
    for (let Z = 0, h = c.length; Z < h; Z++) {
      const a = c[Z];
      l.addGroup(a.start, a.count, a.materialIndex);
    }
    return l;
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
      const h = this.parameters;
      for (const a in h)
        h[a] !== void 0 && (t[a] = h[a]);
      return t;
    }
    t.data = { attributes: {} };
    const l = this.index;
    l !== null && (t.data.index = {
      type: l.array.constructor.name,
      array: Array.prototype.slice.call(l.array)
    });
    const i = this.attributes;
    for (const h in i) {
      const a = i[h];
      t.data.attributes[h] = a.toJSON(t.data);
    }
    const e = {};
    let n = !1;
    for (const h in this.morphAttributes) {
      const a = this.morphAttributes[h], d = [];
      for (let m = 0, b = a.length; m < b; m++) {
        const o = a[m];
        d.push(o.toJSON(t.data));
      }
      d.length > 0 && (e[h] = d, n = !0);
    }
    n && (t.data.morphAttributes = e, t.data.morphTargetsRelative = this.morphTargetsRelative);
    const c = this.groups;
    c.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(c)));
    const Z = this.boundingSphere;
    return Z !== null && (t.data.boundingSphere = {
      center: Z.center.toArray(),
      radius: Z.radius
    }), t;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const l = {};
    this.name = t.name;
    const i = t.index;
    i !== null && this.setIndex(i.clone(l));
    const e = t.attributes;
    for (const a in e) {
      const d = e[a];
      this.setAttribute(a, d.clone(l));
    }
    const n = t.morphAttributes;
    for (const a in n) {
      const d = [], m = n[a];
      for (let b = 0, o = m.length; b < o; b++)
        d.push(m[b].clone(l));
      this.morphAttributes[a] = d;
    }
    this.morphTargetsRelative = t.morphTargetsRelative;
    const c = t.groups;
    for (let a = 0, d = c.length; a < d; a++) {
      const m = c[a];
      this.addGroup(m.start, m.count, m.materialIndex);
    }
    const Z = t.boundingBox;
    Z !== null && (this.boundingBox = Z.clone());
    const h = t.boundingSphere;
    return h !== null && (this.boundingSphere = h.clone()), this.drawRange.start = t.drawRange.start, this.drawRange.count = t.drawRange.count, this.userData = t.userData, t.parameters !== void 0 && (this.parameters = Object.assign({}, t.parameters)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
function me(s) {
  const t = {};
  for (const l in s) {
    t[l] = {};
    for (const i in s[l]) {
      const e = s[l][i];
      e && (e.isColor || e.isMatrix3 || e.isMatrix4 || e.isVector2 || e.isVector3 || e.isVector4 || e.isTexture || e.isQuaternion) ? t[l][i] = e.clone() : Array.isArray(e) ? t[l][i] = e.slice() : t[l][i] = e;
    }
  }
  return t;
}
function be(s) {
  const t = [];
  for (let l = 0; l < s.length; l++)
    t.push(s[l].clone());
  return t;
}
var oe = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, re = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class Qi extends Ll {
  constructor(t) {
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = oe, this.fragmentShader = re, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.extensions = {
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
    return super.copy(t), this.fragmentShader = t.fragmentShader, this.vertexShader = t.vertexShader, this.uniforms = me(t.uniforms), this.uniformsGroups = be(t.uniformsGroups), this.defines = Object.assign({}, t.defines), this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.fog = t.fog, this.lights = t.lights, this.clipping = t.clipping, this.extensions = Object.assign({}, t.extensions), this.glslVersion = t.glslVersion, this;
  }
  toJSON(t) {
    const l = super.toJSON(t);
    l.glslVersion = this.glslVersion, l.uniforms = {};
    for (const e in this.uniforms) {
      const c = this.uniforms[e].value;
      c && c.isTexture ? l.uniforms[e] = {
        type: "t",
        value: c.toJSON(t).uuid
      } : c && c.isColor ? l.uniforms[e] = {
        type: "c",
        value: c.getHex()
      } : c && c.isVector2 ? l.uniforms[e] = {
        type: "v2",
        value: c.toArray()
      } : c && c.isVector3 ? l.uniforms[e] = {
        type: "v3",
        value: c.toArray()
      } : c && c.isVector4 ? l.uniforms[e] = {
        type: "v4",
        value: c.toArray()
      } : c && c.isMatrix3 ? l.uniforms[e] = {
        type: "m3",
        value: c.toArray()
      } : c && c.isMatrix4 ? l.uniforms[e] = {
        type: "m4",
        value: c.toArray()
      } : l.uniforms[e] = {
        value: c
      };
    }
    Object.keys(this.defines).length > 0 && (l.defines = this.defines), l.vertexShader = this.vertexShader, l.fragmentShader = this.fragmentShader;
    const i = {};
    for (const e in this.extensions)
      this.extensions[e] === !0 && (i[e] = !0);
    return Object.keys(i).length > 0 && (l.extensions = i), l;
  }
}
const Dl = /* @__PURE__ */ new W(), We = /* @__PURE__ */ new W(), Ge = /* @__PURE__ */ new It();
class Dt {
  constructor(t = new W(1, 0, 0), l = 0) {
    this.isPlane = !0, this.normal = t, this.constant = l;
  }
  set(t, l) {
    return this.normal.copy(t), this.constant = l, this;
  }
  setComponents(t, l, i, e) {
    return this.normal.set(t, l, i), this.constant = e, this;
  }
  setFromNormalAndCoplanarPoint(t, l) {
    return this.normal.copy(t), this.constant = -l.dot(this.normal), this;
  }
  setFromCoplanarPoints(t, l, i) {
    const e = Dl.subVectors(i, l).cross(We.subVectors(t, l)).normalize();
    return this.setFromNormalAndCoplanarPoint(e, t), this;
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
  projectPoint(t, l) {
    return l.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t);
  }
  intersectLine(t, l) {
    const i = t.delta(Dl), e = this.normal.dot(i);
    if (e === 0)
      return this.distanceToPoint(t.start) === 0 ? l.copy(t.start) : null;
    const n = -(t.start.dot(this.normal) + this.constant) / e;
    return n < 0 || n > 1 ? null : l.copy(i).multiplyScalar(n).add(t.start);
  }
  intersectsLine(t) {
    const l = this.distanceToPoint(t.start), i = this.distanceToPoint(t.end);
    return l < 0 && i > 0 || i < 0 && l > 0;
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
  applyMatrix4(t, l) {
    const i = l || Ge.getNormalMatrix(t), e = this.coplanarPoint(Dl).applyMatrix4(t), n = this.normal.applyMatrix3(i).normalize();
    return this.constant = -e.dot(n), this;
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
const Mt = /* @__PURE__ */ new st(), ol = /* @__PURE__ */ new W();
class ue {
  constructor(t = new Dt(), l = new Dt(), i = new Dt(), e = new Dt(), n = new Dt(), c = new Dt()) {
    this.planes = [t, l, i, e, n, c];
  }
  set(t, l, i, e, n, c) {
    const Z = this.planes;
    return Z[0].copy(t), Z[1].copy(l), Z[2].copy(i), Z[3].copy(e), Z[4].copy(n), Z[5].copy(c), this;
  }
  copy(t) {
    const l = this.planes;
    for (let i = 0; i < 6; i++)
      l[i].copy(t.planes[i]);
    return this;
  }
  setFromProjectionMatrix(t) {
    const l = this.planes, i = t.elements, e = i[0], n = i[1], c = i[2], Z = i[3], h = i[4], a = i[5], d = i[6], m = i[7], b = i[8], o = i[9], r = i[10], G = i[11], u = i[12], Y = i[13], p = i[14], g = i[15];
    return l[0].setComponents(Z - e, m - h, G - b, g - u).normalize(), l[1].setComponents(Z + e, m + h, G + b, g + u).normalize(), l[2].setComponents(Z + n, m + a, G + o, g + Y).normalize(), l[3].setComponents(Z - n, m - a, G - o, g - Y).normalize(), l[4].setComponents(Z - c, m - d, G - r, g - p).normalize(), l[5].setComponents(Z + c, m + d, G + r, g + p).normalize(), this;
  }
  intersectsObject(t) {
    const l = t.geometry;
    return l.boundingSphere === null && l.computeBoundingSphere(), Mt.copy(l.boundingSphere).applyMatrix4(t.matrixWorld), this.intersectsSphere(Mt);
  }
  intersectsSprite(t) {
    return Mt.center.set(0, 0, 0), Mt.radius = 0.7071067811865476, Mt.applyMatrix4(t.matrixWorld), this.intersectsSphere(Mt);
  }
  intersectsSphere(t) {
    const l = this.planes, i = t.center, e = -t.radius;
    for (let n = 0; n < 6; n++)
      if (l[n].distanceToPoint(i) < e)
        return !1;
    return !0;
  }
  intersectsBox(t) {
    const l = this.planes;
    for (let i = 0; i < 6; i++) {
      const e = l[i];
      if (ol.x = e.normal.x > 0 ? t.max.x : t.min.x, ol.y = e.normal.y > 0 ? t.max.y : t.min.y, ol.z = e.normal.z > 0 ? t.max.z : t.min.z, e.distanceToPoint(ol) < 0)
        return !1;
    }
    return !0;
  }
  containsPoint(t) {
    const l = this.planes;
    for (let i = 0; i < 6; i++)
      if (l[i].distanceToPoint(t) < 0)
        return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Ye extends it {
  constructor() {
    super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(t, l) {
    return super.copy(t, l), t.background !== null && (this.background = t.background.clone()), t.environment !== null && (this.environment = t.environment.clone()), t.fog !== null && (this.fog = t.fog.clone()), this.backgroundBlurriness = t.backgroundBlurriness, this.backgroundIntensity = t.backgroundIntensity, t.overrideMaterial !== null && (this.overrideMaterial = t.overrideMaterial.clone()), this.matrixAutoUpdate = t.matrixAutoUpdate, this;
  }
  toJSON(t) {
    const l = super.toJSON(t);
    return this.fog !== null && (l.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (l.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (l.object.backgroundIntensity = this.backgroundIntensity), l;
  }
  // @deprecated
  get autoUpdate() {
    return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."), this.matrixWorldAutoUpdate;
  }
  set autoUpdate(t) {
    console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."), this.matrixWorldAutoUpdate = t;
  }
}
class vi extends lt {
  constructor(t = null, l = 1, i = 1, e, n, c, Z, h, a = 1003, d = 1003, m, b) {
    super(null, c, Z, h, a, d, e, n, m, b), this.isDataTexture = !0, this.image = { data: t, width: l, height: i }, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class ki extends Ll {
  constructor(t) {
    super(), this.isLineBasicMaterial = !0, this.type = "LineBasicMaterial", this.color = new V(16777215), this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.linewidth = t.linewidth, this.linecap = t.linecap, this.linejoin = t.linejoin, this.fog = t.fog, this;
  }
}
const si = /* @__PURE__ */ new W(), ci = /* @__PURE__ */ new W(), Zi = /* @__PURE__ */ new E(), Ml = /* @__PURE__ */ new wi(), rl = /* @__PURE__ */ new st();
class Ve extends it {
  constructor(t = new yt(), l = new ki()) {
    super(), this.isLine = !0, this.type = "Line", this.geometry = t, this.material = l, this.updateMorphTargets();
  }
  copy(t, l) {
    return super.copy(t, l), this.material = t.material, this.geometry = t.geometry, this;
  }
  computeLineDistances() {
    const t = this.geometry;
    if (t.index === null) {
      const l = t.attributes.position, i = [0];
      for (let e = 1, n = l.count; e < n; e++)
        si.fromBufferAttribute(l, e - 1), ci.fromBufferAttribute(l, e), i[e] = i[e - 1], i[e] += si.distanceTo(ci);
      t.setAttribute("lineDistance", new El(i, 1));
    } else
      console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
  raycast(t, l) {
    const i = this.geometry, e = this.matrixWorld, n = t.params.Line.threshold, c = i.drawRange;
    if (i.boundingSphere === null && i.computeBoundingSphere(), rl.copy(i.boundingSphere), rl.applyMatrix4(e), rl.radius += n, t.ray.intersectsSphere(rl) === !1)
      return;
    Zi.copy(e).invert(), Ml.copy(t.ray).applyMatrix4(Zi);
    const Z = n / ((this.scale.x + this.scale.y + this.scale.z) / 3), h = Z * Z, a = new W(), d = new W(), m = new W(), b = new W(), o = this.isLineSegments ? 2 : 1, r = i.index, u = i.attributes.position;
    if (r !== null) {
      const Y = Math.max(0, c.start), p = Math.min(r.count, c.start + c.count);
      for (let g = Y, y = p - 1; g < y; g += o) {
        const x = r.getX(g), J = r.getX(g + 1);
        if (a.fromBufferAttribute(u, x), d.fromBufferAttribute(u, J), Ml.distanceSqToSegment(a, d, b, m) > h)
          continue;
        b.applyMatrix4(this.matrixWorld);
        const w = t.ray.origin.distanceTo(b);
        w < t.near || w > t.far || l.push({
          distance: w,
          // What do we want? intersection point on the ray or on the segment??
          // point: raycaster.ray.at( distance ),
          point: m.clone().applyMatrix4(this.matrixWorld),
          index: g,
          face: null,
          faceIndex: null,
          object: this
        });
      }
    } else {
      const Y = Math.max(0, c.start), p = Math.min(u.count, c.start + c.count);
      for (let g = Y, y = p - 1; g < y; g += o) {
        if (a.fromBufferAttribute(u, g), d.fromBufferAttribute(u, g + 1), Ml.distanceSqToSegment(a, d, b, m) > h)
          continue;
        b.applyMatrix4(this.matrixWorld);
        const J = t.ray.origin.distanceTo(b);
        J < t.near || J > t.far || l.push({
          distance: J,
          // What do we want? intersection point on the ray or on the segment??
          // point: raycaster.ray.at( distance ),
          point: m.clone().applyMatrix4(this.matrixWorld),
          index: g,
          face: null,
          faceIndex: null,
          object: this
        });
      }
    }
  }
  updateMorphTargets() {
    const l = this.geometry.morphAttributes, i = Object.keys(l);
    if (i.length > 0) {
      const e = l[i[0]];
      if (e !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let n = 0, c = e.length; n < c; n++) {
          const Z = e[n].name || String(n);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[Z] = n;
        }
      }
    }
  }
}
const hi = /* @__PURE__ */ new W(), ai = /* @__PURE__ */ new W();
class pe extends Ve {
  constructor(t, l) {
    super(t, l), this.isLineSegments = !0, this.type = "LineSegments";
  }
  computeLineDistances() {
    const t = this.geometry;
    if (t.index === null) {
      const l = t.attributes.position, i = [];
      for (let e = 0, n = l.count; e < n; e += 2)
        hi.fromBufferAttribute(l, e), ai.fromBufferAttribute(l, e + 1), i[e] = e === 0 ? 0 : i[e - 1], i[e + 1] = i[e] + hi.distanceTo(ai);
      t.setAttribute("lineDistance", new El(i, 1));
    } else
      console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
}
class Xe extends Ll {
  constructor(t) {
    super(), this.isPointsMaterial = !0, this.type = "PointsMaterial", this.color = new V(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.fog = !0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.map = t.map, this.alphaMap = t.alphaMap, this.size = t.size, this.sizeAttenuation = t.sizeAttenuation, this.fog = t.fog, this;
  }
}
const di = /* @__PURE__ */ new E(), Sl = /* @__PURE__ */ new wi(), Wl = /* @__PURE__ */ new st(), Gl = /* @__PURE__ */ new W();
class Hi extends it {
  constructor(t = new yt(), l = new Xe()) {
    super(), this.isPoints = !0, this.type = "Points", this.geometry = t, this.material = l, this.updateMorphTargets();
  }
  copy(t, l) {
    return super.copy(t, l), this.material = t.material, this.geometry = t.geometry, this;
  }
  raycast(t, l) {
    const i = this.geometry, e = this.matrixWorld, n = t.params.Points.threshold, c = i.drawRange;
    if (i.boundingSphere === null && i.computeBoundingSphere(), Wl.copy(i.boundingSphere), Wl.applyMatrix4(e), Wl.radius += n, t.ray.intersectsSphere(Wl) === !1)
      return;
    di.copy(e).invert(), Sl.copy(t.ray).applyMatrix4(di);
    const Z = n / ((this.scale.x + this.scale.y + this.scale.z) / 3), h = Z * Z, a = i.index, m = i.attributes.position;
    if (a !== null) {
      const b = Math.max(0, c.start), o = Math.min(a.count, c.start + c.count);
      for (let r = b, G = o; r < G; r++) {
        const u = a.getX(r);
        Gl.fromBufferAttribute(m, u), mi(Gl, u, h, e, t, l, this);
      }
    } else {
      const b = Math.max(0, c.start), o = Math.min(m.count, c.start + c.count);
      for (let r = b, G = o; r < G; r++)
        Gl.fromBufferAttribute(m, r), mi(Gl, r, h, e, t, l, this);
    }
  }
  updateMorphTargets() {
    const l = this.geometry.morphAttributes, i = Object.keys(l);
    if (i.length > 0) {
      const e = l[i[0]];
      if (e !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let n = 0, c = e.length; n < c; n++) {
          const Z = e[n].name || String(n);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[Z] = n;
        }
      }
    }
  }
}
function mi(s, t, l, i, e, n, c) {
  const Z = Sl.distanceSqToPoint(s);
  if (Z < l) {
    const h = new W();
    Sl.closestPointToPoint(s, h), h.applyMatrix4(i);
    const a = e.ray.origin.distanceTo(h);
    if (a < e.near || a > e.far)
      return;
    n.push({
      distance: a,
      distanceToRay: Math.sqrt(Z),
      point: h,
      index: t,
      face: null,
      object: c
    });
  }
}
class ge extends lt {
  constructor(t, l, i, e, n, c, Z, h, a) {
    super(t, l, i, e, n, c, Z, h, a), this.isCanvasTexture = !0, this.needsUpdate = !0;
  }
}
class ye extends Qi {
  constructor(t) {
    super(t), this.isRawShaderMaterial = !0, this.type = "RawShaderMaterial";
  }
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
  revision: Bi
} }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = Bi);
class xn extends Qi {
  constructor() {
    super(...arguments), this.uniforms = {
      screenWidth: { type: "f", value: 0 },
      screenHeight: { type: "f", value: 0 },
      map: { type: "t", value: null }
    };
  }
}
var gt = /* @__PURE__ */ ((s) => (s[s.DISABLED = 0] = "DISABLED", s[s.CLIP_OUTSIDE = 1] = "CLIP_OUTSIDE", s[s.HIGHLIGHT_INSIDE = 2] = "HIGHLIGHT_INSIDE", s))(gt || {}), Ut = /* @__PURE__ */ ((s) => (s[s.FIXED = 0] = "FIXED", s[s.ATTENUATED = 1] = "ATTENUATED", s[s.ADAPTIVE = 2] = "ADAPTIVE", s))(Ut || {}), Tt = /* @__PURE__ */ ((s) => (s[s.SQUARE = 0] = "SQUARE", s[s.CIRCLE = 1] = "CIRCLE", s[s.PARABOLOID = 2] = "PARABOLOID", s))(Tt || {}), Lt = /* @__PURE__ */ ((s) => (s[s.OCTREE = 0] = "OCTREE", s[s.KDTREE = 1] = "KDTREE", s))(Lt || {}), Xl = /* @__PURE__ */ ((s) => (s[s.FIXED = 0] = "FIXED", s[s.ATTENUATED = 1] = "ATTENUATED", s))(Xl || {}), k = /* @__PURE__ */ ((s) => (s[s.RGB = 0] = "RGB", s[s.COLOR = 1] = "COLOR", s[s.DEPTH = 2] = "DEPTH", s[s.HEIGHT = 3] = "HEIGHT", s[s.ELEVATION = 3] = "ELEVATION", s[s.INTENSITY = 4] = "INTENSITY", s[s.INTENSITY_GRADIENT = 5] = "INTENSITY_GRADIENT", s[s.LOD = 6] = "LOD", s[s.LEVEL_OF_DETAIL = 6] = "LEVEL_OF_DETAIL", s[s.POINT_INDEX = 7] = "POINT_INDEX", s[s.CLASSIFICATION = 8] = "CLASSIFICATION", s[s.RETURN_NUMBER = 9] = "RETURN_NUMBER", s[s.SOURCE = 10] = "SOURCE", s[s.NORMAL = 11] = "NORMAL", s[s.PHONG = 12] = "PHONG", s[s.RGB_HEIGHT = 13] = "RGB_HEIGHT", s[s.COMPOSITE = 50] = "COMPOSITE", s))(k || {}), Re = `#version 300 es

precision highp float;\r
precision highp int;

#define max_clip_boxes 30

in vec3 position;\r
in vec3 normal;\r
in float intensity;\r
in float classification;\r
in float returnNumber;\r
in float numberOfReturns;\r
in float pointSourceID;\r
in vec4 indices;

uniform mat4 modelMatrix;\r
uniform mat4 modelViewMatrix;\r
uniform mat4 projectionMatrix;\r
uniform mat4 viewMatrix;\r
uniform mat3 normalMatrix;

uniform float pcIndex;

uniform float screenWidth;\r
uniform float screenHeight;\r
uniform float fov;\r
uniform float spacing;

#if defined use_clip_box\r
	uniform mat4 clipBoxes[max_clip_boxes];\r
#endif

uniform float heightMin;\r
uniform float heightMax;\r
uniform float size; 
uniform float minSize; 
uniform float maxSize; 
uniform float octreeSize;\r
uniform vec3 bbSize;\r
uniform vec3 uColor;\r
uniform float opacity;\r
uniform float clipBoxCount;\r
uniform float level;\r
uniform float vnStart;\r
uniform bool isLeafNode;

uniform float filterByNormalThreshold;\r
uniform vec2 intensityRange;\r
uniform float opacityAttenuation;\r
uniform float intensityGamma;\r
uniform float intensityContrast;\r
uniform float intensityBrightness;\r
uniform float rgbGamma;\r
uniform float rgbContrast;\r
uniform float rgbBrightness;\r
uniform float transition;\r
uniform float wRGB;\r
uniform float wIntensity;\r
uniform float wElevation;\r
uniform float wClassification;\r
uniform float wReturnNumber;\r
uniform float wSourceID;

uniform sampler2D visibleNodes;\r
uniform sampler2D gradient;\r
uniform sampler2D classificationLUT;\r
uniform sampler2D depthMap;

#ifdef highlight_point\r
	uniform vec3 highlightedPointCoordinate;\r
	uniform bool enablePointHighlighting;\r
	uniform float highlightedPointScale;\r
#endif

#ifdef new_format\r
	in vec4 rgba;\r
	out vec4 vColor;\r
#else\r
	in vec3 color;\r
	out vec3 vColor;\r
#endif

#if !defined(color_type_point_index)\r
	out float vOpacity;\r
#endif

#if defined(weighted_splats)\r
	out float vLinearDepth;\r
#endif

#if !defined(paraboloid_point_shape) && defined(use_edl)\r
	out float vLogDepth;\r
#endif

#if defined(color_type_phong) && (MAX_POINT_LIGHTS > 0 || MAX_DIR_LIGHTS > 0) || defined(paraboloid_point_shape)\r
	out vec3 vViewPosition;\r
#endif

#if defined(weighted_splats) || defined(paraboloid_point_shape)\r
	out float vRadius;\r
#endif

#if defined(color_type_phong) && (MAX_POINT_LIGHTS > 0 || MAX_DIR_LIGHTS > 0)\r
	out vec3 vNormal;\r
#endif

#ifdef highlight_point\r
	out float vHighlight;\r
#endif\r
 \r

#if (defined(adaptive_point_size) || defined(color_type_lod)) && defined(tree_type_octree)\r

int numberOfOnes(int number, int index) {\r
	int numOnes = 0;\r
	int tmp = 128;\r
	for (int i = 7; i >= 0; i--) {

		if (number >= tmp) {\r
			number = number - tmp;

			if (i <= index) {\r
				numOnes++;\r
			}\r
		}

		tmp = tmp / 2;\r
	}

	return numOnes;\r
}

/**\r
 * Checks whether the bit at index is 1.0\r
 *\r
 * number is treated as if it were an integer in the range 0-255\r
 */\r
bool isBitSet(int number, int index){

	
	int powi = 1;\r
	if (index == 0) {\r
		powi = 1;\r
	} else if (index == 1) {\r
		powi = 2;\r
	} else if (index == 2) {\r
		powi = 4;\r
	} else if (index == 3) {\r
		powi = 8;\r
	} else if (index == 4) {\r
		powi = 16;\r
	} else if (index == 5) {\r
		powi = 32;\r
	} else if (index == 6) {\r
		powi = 64;\r
	} else if (index == 7) {\r
		powi = 128;\r
	}

	int ndp = number / powi;

	return mod(float(ndp), 2.0) != 0.0;\r
}

/**\r
 * Gets the the LOD at the point position.\r
 */\r
float getLOD() {\r
	vec3 offset = vec3(0.0, 0.0, 0.0);\r
	int iOffset = int(vnStart);\r
	float depth = level;

	for (float i = 0.0; i <= 30.0; i++) {\r
		float nodeSizeAtLevel = octreeSize  / pow(2.0, i + level + 0.0);\r
		\r
		vec3 index3d = (position-offset) / nodeSizeAtLevel;\r
		index3d = floor(index3d + 0.5);\r
		int index = int(round(4.0 * index3d.x + 2.0 * index3d.y + index3d.z));\r
		\r
		vec4 value = texture(visibleNodes, vec2(float(iOffset) / 2048.0, 0.0));\r
		int mask = int(round(value.r * 255.0));

		if (isBitSet(mask, index)) {\r
			
			int advanceG = int(round(value.g * 255.0)) * 256;\r
			int advanceB = int(round(value.b * 255.0));\r
			int advanceChild = numberOfOnes(mask, index - 1);\r
			int advance = advanceG + advanceB + advanceChild;

			iOffset = iOffset + advance;

			depth++;\r
		} else {\r
			return value.a * 255.0; 
		}\r
		\r
		offset = offset + (vec3(1.0, 1.0, 1.0) * nodeSizeAtLevel * 0.5) * index3d;  \r
	}\r
		\r
	return depth;\r
}

float getPointSizeAttenuation() {\r
	return 0.5 * pow(2.0, getLOD());\r
}

#endif\r

#if (defined(adaptive_point_size) || defined(color_type_lod)) && defined(tree_type_kdtree)

float getLOD() {\r
	vec3 offset = vec3(0.0, 0.0, 0.0);\r
	float intOffset = 0.0;\r
	float depth = 0.0;\r
			\r
	vec3 size = bbSize;	\r
	vec3 pos = position;\r
		\r
	for (float i = 0.0; i <= 1000.0; i++) {\r
		\r
		vec4 value = texture(visibleNodes, vec2(intOffset / 2048.0, 0.0));\r
		\r
		int children = int(value.r * 255.0);\r
		float next = value.g * 255.0;\r
		int split = int(value.b * 255.0);\r
		\r
		if (next == 0.0) {\r
		 	return depth;\r
		}\r
		\r
		vec3 splitv = vec3(0.0, 0.0, 0.0);\r
		if (split == 1) {\r
			splitv.x = 1.0;\r
		} else if (split == 2) {\r
		 	splitv.y = 1.0;\r
		} else if (split == 4) {\r
		 	splitv.z = 1.0;\r
		}\r
		\r
		intOffset = intOffset + next;\r
		\r
		float factor = length(pos * splitv / size);\r
		if (factor < 0.5) {\r
		 	
			if (children == 0 || children == 2) {\r
				return depth;\r
			}\r
		} else {\r
			
			pos = pos - size * splitv * 0.5;\r
			if (children == 0 || children == 1) {\r
				return depth;\r
			}\r
			if (children == 3) {\r
				intOffset = intOffset + 1.0;\r
			}\r
		}\r
		size = size * ((1.0 - (splitv + 1.0) / 2.0) + 0.5);\r
		\r
		depth++;\r
	}\r
		\r
		\r
	return depth;	\r
}

float getPointSizeAttenuation() {\r
	return 0.5 * pow(1.3, getLOD());\r
}

#endif

float getContrastFactor(float contrast) {\r
	return (1.0158730158730156 * (contrast + 1.0)) / (1.0158730158730156 - contrast);\r
}

#ifndef new_format

vec3 getRGB() {\r
	#if defined(use_rgb_gamma_contrast_brightness)\r
	  vec3 rgb = color;\r
		rgb = pow(rgb, vec3(rgbGamma));\r
		rgb = rgb + rgbBrightness;\r
		rgb = (rgb - 0.5) * getContrastFactor(rgbContrast) + 0.5;\r
		rgb = clamp(rgb, 0.0, 1.0);\r
		return rgb;\r
	#else\r
		return color;\r
	#endif\r
}

#endif

float getIntensity() {\r
	float w = (intensity - intensityRange.x) / (intensityRange.y - intensityRange.x);\r
	w = pow(w, intensityGamma);\r
	w = w + intensityBrightness;\r
	w = (w - 0.5) * getContrastFactor(intensityContrast) + 0.5;\r
	w = clamp(w, 0.0, 1.0);\r
	\r
	return w;\r
}

vec3 getElevation() {\r
	vec4 world = modelMatrix * vec4( position, 1.0 );\r
	float w = (world.z - heightMin) / (heightMax-heightMin);\r
	vec3 cElevation = texture(gradient, vec2(w,1.0-w)).rgb;\r
	\r
	return cElevation;\r
}

vec4 getClassification() {\r
	vec2 uv = vec2(classification / 255.0, 0.5);\r
	vec4 classColor = texture(classificationLUT, uv);\r
	\r
	return classColor;\r
}

vec3 getReturnNumber() {\r
	if (numberOfReturns == 1.0) {\r
		return vec3(1.0, 1.0, 0.0);\r
	} else {\r
		if (returnNumber == 1.0) {\r
			return vec3(1.0, 0.0, 0.0);\r
		} else if (returnNumber == numberOfReturns) {\r
			return vec3(0.0, 0.0, 1.0);\r
		} else {\r
			return vec3(0.0, 1.0, 0.0);\r
		}\r
	}\r
}

vec3 getSourceID() {\r
	float w = mod(pointSourceID, 10.0) / 10.0;\r
	return texture(gradient, vec2(w, 1.0 - w)).rgb;\r
}

#ifndef new_format

vec3 getCompositeColor() {\r
	vec3 c;\r
	float w;

	c += wRGB * getRGB();\r
	w += wRGB;\r
	\r
	c += wIntensity * getIntensity() * vec3(1.0, 1.0, 1.0);\r
	w += wIntensity;\r
	\r
	c += wElevation * getElevation();\r
	w += wElevation;\r
	\r
	c += wReturnNumber * getReturnNumber();\r
	w += wReturnNumber;\r
	\r
	c += wSourceID * getSourceID();\r
	w += wSourceID;\r
	\r
	vec4 cl = wClassification * getClassification();\r
	c += cl.a * cl.rgb;\r
	w += wClassification * cl.a;

	c = c / w;\r
	\r
	if (w == 0.0) {\r
		gl_Position = vec4(100.0, 100.0, 100.0, 0.0);\r
	}\r
	\r
	return c;\r
}

#endif

#ifdef new_format\r
	vec4 fromLinear(vec4 linearRGB) {\r
		bvec4 cutoff = lessThan(linearRGB, vec4(0.0031308));\r
		vec4 higher = vec4(1.055)*pow(linearRGB, vec4(1.0/2.4)) - vec4(0.055);\r
		vec4 lower = linearRGB * vec4(12.92);\r
		return mix(higher, lower, cutoff);\r
	} \r
	vec4 toLinear(vec4 sRGB) {\r
		bvec4 cutoff = lessThan(sRGB, vec4(0.04045));\r
		vec4 higher = pow((sRGB + vec4(0.055))/vec4(1.055), vec4(2.4));\r
		vec4 lower = sRGB/vec4(12.92);\r
		return mix(higher, lower, cutoff);\r
	}\r
#else\r
	vec3 fromLinear(vec3 linearRGB) {\r
		bvec3 cutoff = lessThan(linearRGB, vec3(0.0031308));\r
		vec3 higher = vec3(1.055)*pow(linearRGB, vec3(1.0/2.4)) - vec3(0.055);\r
		vec3 lower = linearRGB * vec3(12.92);\r
		return mix(higher, lower, cutoff);\r
	}\r
	vec3 toLinear(vec3 sRGB) {\r
		bvec3 cutoff = lessThan(sRGB, vec3(0.04045));\r
		vec3 higher = pow((sRGB + vec3(0.055))/vec3(1.055), vec3(2.4));\r
		vec3 lower = sRGB/vec3(12.92);\r
		return mix(higher, lower, cutoff);\r
	}\r
#endif\r

void main() {\r
	vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);

	gl_Position = projectionMatrix * mvPosition;

	#if defined(color_type_phong) && (MAX_POINT_LIGHTS > 0 || MAX_DIR_LIGHTS > 0) || defined(paraboloid_point_shape)\r
		vViewPosition = mvPosition.xyz;\r
	#endif

	#if defined weighted_splats\r
		vLinearDepth = gl_Position.w;\r
	#endif

	#if defined(color_type_phong) && (MAX_POINT_LIGHTS > 0 || MAX_DIR_LIGHTS > 0)\r
		vNormal = normalize(normalMatrix * normal);\r
	#endif

	#if !defined(paraboloid_point_shape) && defined(use_edl)\r
		vLogDepth = log2(-mvPosition.z);\r
	#endif

	
	
	

	float pointSize = 1.0;\r
	float slope = tan(fov / 2.0);\r
	float projFactor =  -0.5 * screenHeight / (slope * mvPosition.z);

	#if defined fixed_point_size\r
		pointSize = size;\r
	#elif defined attenuated_point_size\r
		pointSize = size * spacing * projFactor;\r
	#elif defined adaptive_point_size\r
		float worldSpaceSize = 2.0 * size * spacing / getPointSizeAttenuation();\r
		pointSize = worldSpaceSize * projFactor;\r
	#endif

	pointSize = max(minSize, pointSize);\r
	pointSize = min(maxSize, pointSize);

	#if defined(weighted_splats) || defined(paraboloid_point_shape)\r
		vRadius = pointSize / projFactor;\r
	#endif

	gl_PointSize = pointSize;

	
	
	

	#ifdef highlight_point\r
		vec4 mPosition = modelMatrix * vec4(position, 1.0);\r
		if (enablePointHighlighting && abs(mPosition.x - highlightedPointCoordinate.x) < 0.0001 &&\r
			abs(mPosition.y - highlightedPointCoordinate.y) < 0.0001 &&\r
			abs(mPosition.z - highlightedPointCoordinate.z) < 0.0001) {\r
			vHighlight = 1.0;\r
			gl_PointSize = pointSize * highlightedPointScale;\r
		} else {\r
			vHighlight = 0.0;\r
		}\r
	#endif

	
	
	

	#ifndef color_type_point_index\r
		#ifdef attenuated_opacity\r
			vOpacity = opacity * exp(-length(-mvPosition.xyz) / opacityAttenuation);\r
		#else\r
			vOpacity = opacity;\r
		#endif\r
	#endif

	
	
	

	#ifdef use_filter_by_normal\r
		if(abs((modelViewMatrix * vec4(normal, 0.0)).z) > filterByNormalThreshold) {\r
			
			gl_Position = vec4(0.0, 0.0, 2.0, 1.0);\r
		}\r
	#endif

	
	
	
	#ifdef new_format\r
		vColor = rgba;\r
	#elif defined color_type_rgb\r
		vColor = getRGB();\r
	#elif defined color_type_height\r
		vColor = getElevation();\r
	#elif defined color_type_rgb_height\r
		vec3 cHeight = getElevation();\r
		vColor = (1.0 - transition) * getRGB() + transition * cHeight;\r
	#elif defined color_type_depth\r
		float linearDepth = -mvPosition.z ;\r
		float expDepth = (gl_Position.z / gl_Position.w) * 0.5 + 0.5;\r
		vColor = vec3(linearDepth, expDepth, 0.0);\r
	#elif defined color_type_intensity\r
		float w = getIntensity();\r
		vColor = vec3(w, w, w);\r
	#elif defined color_type_intensity_gradient\r
		float w = getIntensity();\r
		vColor = texture(gradient, vec2(w, 1.0 - w)).rgb;\r
	#elif defined color_type_color\r
		vColor = uColor;\r
	#elif defined color_type_lod\r
	float w = getLOD() / 10.0;\r
	vColor = texture(gradient, vec2(w, 1.0 - w)).rgb;\r
	#elif defined color_type_point_index\r
		vColor = indices.rgb;\r
	#elif defined color_type_classification\r
	  vec4 cl = getClassification(); \r
		vColor = cl.rgb;\r
	#elif defined color_type_return_number\r
		vColor = getReturnNumber();\r
	#elif defined color_type_source\r
		vColor = getSourceID();\r
	#elif defined color_type_normal\r
		vColor = (modelMatrix * vec4(normal, 0.0)).xyz;\r
	#elif defined color_type_phong\r
		vColor = color;\r
	#elif defined color_type_composite\r
		vColor = getCompositeColor();\r
	#endif\r
	\r
	#if !defined color_type_composite && defined color_type_classification\r
		if (cl.a == 0.0) {\r
			gl_Position = vec4(100.0, 100.0, 100.0, 0.0);\r
			return;\r
		}\r
	#endif

	
	
	

	#if defined use_clip_box\r
		bool insideAny = false;\r
		for (int i = 0; i < max_clip_boxes; i++) {\r
			if (i == int(clipBoxCount)) {\r
				break;\r
			}\r
		\r
			vec4 clipPosition = clipBoxes[i] * modelMatrix * vec4(position, 1.0);\r
			bool inside = -0.5 <= clipPosition.x && clipPosition.x <= 0.5;\r
			inside = inside && -0.5 <= clipPosition.y && clipPosition.y <= 0.5;\r
			inside = inside && -0.5 <= clipPosition.z && clipPosition.z <= 0.5;\r
			insideAny = insideAny || inside;\r
		}

		if (!insideAny) {\r
			#if defined clip_outside\r
				gl_Position = vec4(1000.0, 1000.0, 1000.0, 1.0);\r
			#elif defined clip_highlight_inside && !defined(color_type_depth)\r
				float c = (vColor.r + vColor.g + vColor.b) / 6.0;\r
			#endif\r
		} else {\r
			#if defined clip_highlight_inside\r
				vColor.r += 0.5;\r
			#endif\r
		}\r
	#endif

	
	
	
	
	

	#if defined(output_color_encoding_sRGB) && defined(input_color_encoding_linear)\r
		vColor = toLinear(vColor);\r
	#endif

	#if defined(output_color_encoding_linear) && defined(input_color_encoding_sRGB)\r
		vColor = fromLinear(vColor);\r
	#endif\r
}`, xe = `#version 300 es

precision highp float;\r
precision highp int;

uniform mat4 viewMatrix;\r
uniform vec3 cameraPosition;

uniform mat4 projectionMatrix;\r
uniform float opacity;

uniform float blendHardness;\r
uniform float blendDepthSupplement;\r
uniform float fov;\r
uniform float spacing;\r
uniform float pcIndex;\r
uniform float screenWidth;\r
uniform float screenHeight;

uniform sampler2D depthMap;

out vec4 fragColor;

#ifdef highlight_point\r
	uniform vec4 highlightedPointColor;\r
#endif

#ifdef new_format\r
	in vec4 vColor;\r
#else\r
	in vec3 vColor;\r
#endif

#if !defined(color_type_point_index)\r
	in float vOpacity;\r
#endif

#if defined(weighted_splats)\r
	in float vLinearDepth;\r
#endif

#if !defined(paraboloid_point_shape) && defined(use_edl)\r
	in float vLogDepth;\r
#endif

#if defined(color_type_phong) && (MAX_POINT_LIGHTS > 0 || MAX_DIR_LIGHTS > 0) || defined(paraboloid_point_shape)\r
	in vec3 vViewPosition;\r
#endif

#if defined(weighted_splats) || defined(paraboloid_point_shape)\r
	in float vRadius;\r
#endif

#if defined(color_type_phong) && (MAX_POINT_LIGHTS > 0 || MAX_DIR_LIGHTS > 0)\r
	in vec3 vNormal;\r
#endif

#ifdef highlight_point\r
	in float vHighlight;\r
#endif

float specularStrength = 1.0;

void main() {

	#ifdef new_format\r
		
		vec3 actualColor = vColor.xyz;\r
	#else\r
		
		vec3 actualColor = vColor;\r
	#endif\r
	\r
	vec3 color = actualColor;\r
	float depth = gl_FragCoord.z;

	#if defined(circle_point_shape) || defined(paraboloid_point_shape) || defined (weighted_splats)\r
		float u = 2.0 * gl_PointCoord.x - 1.0;\r
		float v = 2.0 * gl_PointCoord.y - 1.0;\r
	#endif\r
	\r
	#if defined(circle_point_shape) || defined (weighted_splats)\r
		float cc = u*u + v*v;\r
		if(cc > 1.0){\r
			discard;\r
		}\r
	#endif

	#if defined weighted_splats\r
		vec2 uv = gl_FragCoord.xy / vec2(screenWidth, screenHeight);\r
		float sDepth = texture2D(depthMap, uv).r;\r
		if(vLinearDepth > sDepth + vRadius + blendDepthSupplement){\r
			discard;\r
		}\r
	#endif\r
		\r
	#if defined color_type_point_index\r
		fragColor = vec4(color, pcIndex / 255.0);\r
	#else\r
		fragColor = vec4(color, vOpacity);\r
	#endif

	#if defined(color_type_phong)\r
		#if MAX_POINT_LIGHTS > 0 || MAX_DIR_LIGHTS > 0\r
			vec3 normal = normalize( vNormal );\r
			normal.z = abs(normal.z);

			vec3 viewPosition = normalize( vViewPosition );\r
		#endif

		
	\r
		#if MAX_POINT_LIGHTS > 0

			vec3 pointDiffuse = vec3( 0.0 );\r
			vec3 pointSpecular = vec3( 0.0 );

			for ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {

				vec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\r
				vec3 lVector = lPosition.xyz + vViewPosition.xyz;

				float lDistance = 1.0;\r
				if ( pointLightDistance[ i ] > 0.0 )\r
					lDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );

				lVector = normalize( lVector );

						

				float dotProduct = dot( normal, lVector );

				#ifdef WRAP_AROUND

					float pointDiffuseWeightFull = max( dotProduct, 0.0 );\r
					float pointDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );

					vec3 pointDiffuseWeight = mix( vec3( pointDiffuseWeightFull ), vec3( pointDiffuseWeightHalf ), wrapRGB );

				#else

					float pointDiffuseWeight = max( dotProduct, 0.0 );

				#endif

				pointDiffuse += diffuse * pointLightColor[ i ] * pointDiffuseWeight * lDistance;

				

				vec3 pointHalfVector = normalize( lVector + viewPosition );\r
				float pointDotNormalHalf = max( dot( normal, pointHalfVector ), 0.0 );\r
				float pointSpecularWeight = specularStrength * max( pow( pointDotNormalHalf, shininess ), 0.0 );

				float specularNormalization = ( shininess + 2.0 ) / 8.0;

				vec3 schlick = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( lVector, pointHalfVector ), 0.0 ), 5.0 );\r
				pointSpecular += schlick * pointLightColor[ i ] * pointSpecularWeight * pointDiffuseWeight * lDistance * specularNormalization;\r
				pointSpecular = vec3(0.0, 0.0, 0.0);\r
			}\r
		\r
		#endif\r
		\r
		#if MAX_DIR_LIGHTS > 0

			vec3 dirDiffuse = vec3( 0.0 );\r
			vec3 dirSpecular = vec3( 0.0 );

			for( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {

				vec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\r
				vec3 dirVector = normalize( lDirection.xyz );

						

				float dotProduct = dot( normal, dirVector );

				#ifdef WRAP_AROUND

					float dirDiffuseWeightFull = max( dotProduct, 0.0 );\r
					float dirDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );

					vec3 dirDiffuseWeight = mix( vec3( dirDiffuseWeightFull ), vec3( dirDiffuseWeightHalf ), wrapRGB );

				#else

					float dirDiffuseWeight = max( dotProduct, 0.0 );

				#endif

				dirDiffuse += diffuse * directionalLightColor[ i ] * dirDiffuseWeight;

				

				vec3 dirHalfVector = normalize( dirVector + viewPosition );\r
				float dirDotNormalHalf = max( dot( normal, dirHalfVector ), 0.0 );\r
				float dirSpecularWeight = specularStrength * max( pow( dirDotNormalHalf, shininess ), 0.0 );

				float specularNormalization = ( shininess + 2.0 ) / 8.0;

				vec3 schlick = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( dirVector, dirHalfVector ), 0.0 ), 5.0 );\r
				dirSpecular += schlick * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight * specularNormalization;\r
			}

		#endif\r
		\r
		vec3 totalDiffuse = vec3( 0.0 );\r
		vec3 totalSpecular = vec3( 0.0 );\r
		\r
		#if MAX_POINT_LIGHTS > 0

			totalDiffuse += pointDiffuse;\r
			totalSpecular += pointSpecular;

		#endif\r
		\r
		#if MAX_DIR_LIGHTS > 0

			totalDiffuse += dirDiffuse;\r
			totalSpecular += dirSpecular;

		#endif\r
		\r
		gl_FragColor.xyz = gl_FragColor.xyz * ( emissive + totalDiffuse + ambientLightColor * ambient ) + totalSpecular;

	#endif\r
	\r
	#if defined weighted_splats\r
	    
		\r
		float wx = 2.0 * length(2.0 * gl_PointCoord - 1.0);\r
		float w = exp(-wx * wx * 0.5);\r
		\r
		
		
		\r
		gl_FragColor.rgb = gl_FragColor.rgb * w;\r
		gl_FragColor.a = w;\r
	#endif\r
	\r
	#if defined paraboloid_point_shape\r
		float wi = 0.0 - ( u*u + v*v);\r
		vec4 pos = vec4(vViewPosition, 1.0);\r
		pos.z += wi * vRadius;\r
		float linearDepth = -pos.z;\r
		pos = projectionMatrix * pos;\r
		pos = pos / pos.w;\r
		float expDepth = pos.z;\r
		depth = (pos.z + 1.0) / 2.0;\r
		gl_FragDepth = depth;\r
		\r
		#if defined(color_type_depth)\r
			gl_FragColor.r = linearDepth;\r
			gl_FragColor.g = expDepth;\r
		#endif\r
		\r
		#if defined(use_edl)\r
			gl_FragColor.a = log2(linearDepth);\r
		#endif\r
		\r
	#else\r
		#if defined(use_edl)\r
			gl_FragColor.a = vLogDepth;\r
		#endif\r
	#endif

	#ifdef highlight_point\r
		if (vHighlight > 0.0) {\r
			gl_FragColor = highlightedPointColor;\r
		}\r
	#endif\r
}`;
const bi = 0, oi = 0, ri = 1, Ne = 50, Fe = 50, Je = 2, Be = 15, Ie = 1e6, Wi = 2, Ce = 4, Di = "PerspectiveCamera", ze = new V(0, 0, 0), we = new M(1, 0, 0, 1);
function jl(s) {
  return parseInt(s.charAt(s.length - 1), 10);
}
function Qe(s, t) {
  const l = s.name, i = t.name;
  return l.length !== i.length ? l.length - i.length : l < i ? -1 : l > i ? 1 : 0;
}
const Gi = {
  0: new M(0.5, 0.5, 0.5, 1),
  1: new M(0.5, 0.5, 0.5, 1),
  2: new M(0.63, 0.32, 0.18, 1),
  3: new M(0, 1, 0, 1),
  4: new M(0, 0.8, 0, 1),
  5: new M(0, 0.6, 0, 1),
  6: new M(1, 0.66, 0, 1),
  7: new M(1, 0, 1, 1),
  8: new M(1, 0, 0, 1),
  9: new M(0, 0, 1, 1),
  12: new M(1, 1, 0, 1),
  DEFAULT: new M(0.3, 0.6, 0.6, 0.5)
};
new V(0, 0, 0), new V(1, 1, 1);
new V(0.077, 0.042, 0.206), new V(0.225, 0.036, 0.388), new V(0.373, 0.074, 0.432), new V(0.522, 0.128, 0.42), new V(0.665, 0.182, 0.37), new V(0.797, 0.255, 0.287), new V(0.902, 0.364, 0.184), new V(0.969, 0.516, 0.063), new V(0.988, 0.683, 0.072), new V(0.961, 0.859, 0.298), new V(0.988, 0.998, 0.645);
new V(0.241, 0.015, 0.61), new V(0.387, 1e-3, 0.654), new V(0.524, 0.025, 0.653), new V(0.651, 0.125, 0.596), new V(0.752, 0.227, 0.513), new V(0.837, 0.329, 0.431), new V(0.907, 0.435, 0.353), new V(0.963, 0.554, 0.272), new V(0.992, 0.681, 0.195), new V(0.987, 0.822, 0.144), new V(0.94, 0.975, 0.131);
new V(0.278, 0, 0.714), 1 / 6, new V(0, 0, 1), 2 / 6, new V(0, 1, 1), 3 / 6, new V(0, 1, 0), 4 / 6, new V(1, 1, 0), 5 / 6, new V(1, 0.64, 0), new V(1, 0, 0);
const ve = [
  [0, new V(0.3686, 0.3098, 0.6353)],
  [0.1, new V(0.1961, 0.5333, 0.7412)],
  [0.2, new V(0.4, 0.7608, 0.6471)],
  [0.3, new V(0.6706, 0.8667, 0.6431)],
  [0.4, new V(0.902, 0.9608, 0.5961)],
  [0.5, new V(1, 1, 0.749)],
  [0.6, new V(0.9961, 0.8784, 0.5451)],
  [0.7, new V(0.9922, 0.6824, 0.3804)],
  [0.8, new V(0.9569, 0.4275, 0.2627)],
  [0.9, new V(0.8353, 0.2431, 0.3098)],
  [1, new V(0.6196, 39e-4, 0.2588)]
];
new V(0.267, 5e-3, 0.329), new V(0.283, 0.141, 0.458), new V(0.254, 0.265, 0.53), new V(0.207, 0.372, 0.553), new V(0.164, 0.471, 0.558), new V(0.128, 0.567, 0.551), new V(0.135, 0.659, 0.518), new V(0.267, 0.749, 0.441), new V(0.478, 0.821, 0.318), new V(0.741, 0.873, 0.15), new V(0.993, 0.906, 0.144);
new V(0.1647, 0.2824, 0.3451), new V(0.1338, 0.3555, 0.4227), new V(0.061, 0.4319, 0.4864), new V(0, 0.5099, 0.5319), new V(0, 0.5881, 0.5569), new V(0.137, 0.665, 0.5614), new V(0.2906, 0.7395, 0.5477), new V(0.4453, 0.8099, 0.5201), new V(0.6102, 0.8748, 0.485), new V(0.7883, 0.9323, 0.4514), new V(0.9804, 0.9804, 0.4314);
function ke(s, t, l) {
  const i = s * t, e = new Uint8Array(4 * i), n = Math.floor(l.r * 255), c = Math.floor(l.g * 255), Z = Math.floor(l.b * 255);
  for (let a = 0; a < i; a++)
    e[a * 3] = n, e[a * 3 + 1] = c, e[a * 3 + 2] = Z;
  const h = new vi(e, s, t, 1023);
  return h.needsUpdate = !0, h.magFilter = 1003, h;
}
function ui(s) {
  const l = document.createElement("canvas");
  l.width = 64, l.height = 64;
  const i = l.getContext("2d");
  i.rect(0, 0, 64, 64);
  const e = i.createLinearGradient(0, 0, 64, 64);
  for (let c = 0; c < s.length; c++) {
    const Z = s[c];
    e.addColorStop(Z[0], `#${Z[1].getHexString()}`);
  }
  i.fillStyle = e, i.fill();
  const n = new ge(l);
  return n.needsUpdate = !0, n.minFilter = 1006, n;
}
function Yi(s) {
  const e = new Uint8Array(262144);
  for (let c = 0; c < 256; c++)
    for (let Z = 0; Z < 256; Z++) {
      const h = c + 256 * Z;
      let a;
      s[c] ? a = s[c] : s[c % 32] ? a = s[c % 32] : a = s.DEFAULT, e[4 * h + 0] = 255 * a.x, e[4 * h + 1] = 255 * a.y, e[4 * h + 2] = 255 * a.z, e[4 * h + 3] = 255 * a.w;
    }
  const n = new vi(e, 256, 256, 1023);
  return n.magFilter = 1003, n.needsUpdate = !0, n;
}
var Jt = /* @__PURE__ */ ((s) => (s[s.LINEAR = 0] = "LINEAR", s[s.SRGB = 1] = "SRGB", s))(Jt || {}), He = Object.defineProperty, De = Object.getOwnPropertyDescriptor, F = (s, t, l, i) => {
  for (var e = i > 1 ? void 0 : i ? De(t, l) : t, n = s.length - 1, c; n >= 0; n--)
    (c = s[n]) && (e = (i ? c(t, l, e) : c(e)) || e);
  return i && e && He(t, l, e), e;
};
const Me = {
  [Lt.OCTREE]: "tree_type_octree",
  [Lt.KDTREE]: "tree_type_kdtree"
}, Ue = {
  [Ut.FIXED]: "fixed_point_size",
  [Ut.ATTENUATED]: "attenuated_point_size",
  [Ut.ADAPTIVE]: "adaptive_point_size"
}, Ae = {
  [Xl.ATTENUATED]: "attenuated_opacity",
  [Xl.FIXED]: "fixed_opacity"
}, fe = {
  [Tt.SQUARE]: "square_point_shape",
  [Tt.CIRCLE]: "circle_point_shape",
  [Tt.PARABOLOID]: "paraboloid_point_shape"
}, Se = {
  [k.RGB]: "color_type_rgb",
  [k.COLOR]: "color_type_color",
  [k.DEPTH]: "color_type_depth",
  [k.HEIGHT]: "color_type_height",
  [k.INTENSITY]: "color_type_intensity",
  [k.INTENSITY_GRADIENT]: "color_type_intensity_gradient",
  [k.LOD]: "color_type_lod",
  [k.POINT_INDEX]: "color_type_point_index",
  [k.CLASSIFICATION]: "color_type_classification",
  [k.RETURN_NUMBER]: "color_type_return_number",
  [k.SOURCE]: "color_type_source",
  [k.NORMAL]: "color_type_normal",
  [k.PHONG]: "color_type_phong",
  [k.RGB_HEIGHT]: "color_type_rgb_height",
  [k.COMPOSITE]: "color_type_composite"
}, je = {
  [gt.DISABLED]: "clip_disabled",
  [gt.CLIP_OUTSIDE]: "clip_outside",
  [gt.HIGHLIGHT_INSIDE]: "clip_highlight_inside"
}, Pe = {
  [Jt.LINEAR]: "input_color_encoding_linear",
  [Jt.SRGB]: "input_color_encoding_sRGB"
}, Te = {
  [Jt.LINEAR]: "output_color_encoding_linear",
  [Jt.SRGB]: "output_color_encoding_sRGB"
}, Mi = class extends ye {
  constructor(s = {}) {
    super(), this.lights = !1, this.fog = !1, this.numClipBoxes = 0, this.clipBoxes = [], this.visibleNodeTextureOffsets = /* @__PURE__ */ new Map(), this._gradient = ve, this.gradientTexture = ui(this._gradient), this._classification = Gi, this.classificationTexture = Yi(
      this._classification
    ), this.uniforms = {
      bbSize: N("fv", [0, 0, 0]),
      blendDepthSupplement: N("f", 0),
      blendHardness: N("f", 2),
      classificationLUT: N("t", this.classificationTexture || new lt()),
      clipBoxCount: N("f", 0),
      clipBoxes: N("Matrix4fv", []),
      depthMap: N("t", null),
      diffuse: N("fv", [1, 1, 1]),
      fov: N("f", 1),
      gradient: N("t", this.gradientTexture || new lt()),
      heightMax: N("f", 1),
      heightMin: N("f", 0),
      intensityBrightness: N("f", 0),
      intensityContrast: N("f", 0),
      intensityGamma: N("f", 1),
      intensityRange: N("fv", [0, 65e3]),
      isLeafNode: N("b", 0),
      level: N("f", 0),
      maxSize: N("f", Ne),
      minSize: N("f", Je),
      octreeSize: N("f", 0),
      opacity: N("f", 1),
      pcIndex: N("f", 0),
      rgbBrightness: N("f", bi),
      rgbContrast: N("f", oi),
      rgbGamma: N("f", ri),
      screenHeight: N("f", 1),
      screenWidth: N("f", 1),
      size: N("f", 1),
      spacing: N("f", 1),
      toModel: N("Matrix4f", []),
      transition: N("f", 0.5),
      uColor: N("c", new V(16777215)),
      // @ts-ignore
      visibleNodes: N("t", this.visibleNodesTexture || new lt()),
      vnStart: N("f", 0),
      wClassification: N("f", 0),
      wElevation: N("f", 0),
      wIntensity: N("f", 0),
      wReturnNumber: N("f", 0),
      wRGB: N("f", 1),
      wSourceID: N("f", 0),
      opacityAttenuation: N("f", 1),
      filterByNormalThreshold: N("f", 0),
      highlightedPointCoordinate: N("fv", new W()),
      highlightedPointColor: N("fv", we.clone()),
      enablePointHighlighting: N("b", !0),
      highlightedPointScale: N("f", 2)
    }, this.useClipBox = !1, this.weighted = !1, this.pointColorType = k.RGB, this.pointSizeType = Ut.ADAPTIVE, this.clipMode = gt.DISABLED, this.useEDL = !1, this.shape = Tt.SQUARE, this.treeType = Lt.OCTREE, this.pointOpacityType = Xl.FIXED, this.useFilterByNormal = !1, this.highlightPoint = !1, this.inputColorEncoding = Jt.SRGB, this.outputColorEncoding = Jt.LINEAR, this.attributes = {
      position: { type: "fv", value: [] },
      color: { type: "fv", value: [] },
      normal: { type: "fv", value: [] },
      intensity: { type: "f", value: [] },
      classification: { type: "f", value: [] },
      returnNumber: { type: "f", value: [] },
      numberOfReturns: { type: "f", value: [] },
      pointSourceID: { type: "f", value: [] },
      indices: { type: "fv", value: [] }
    };
    const t = this.visibleNodesTexture = ke(2048, 1, new V(16777215));
    t.minFilter = 1003, t.magFilter = 1003, this.setUniform("visibleNodes", t), this.treeType = ul(s.treeType, Lt.OCTREE), this.size = ul(s.size, 1), this.minSize = ul(s.minSize, 2), this.maxSize = ul(s.maxSize, 50), this.newFormat = !!s.newFormat, this.classification = Gi, this.defaultAttributeValues.normal = [0, 0, 0], this.defaultAttributeValues.classification = [0, 0, 0], this.defaultAttributeValues.indices = [0, 0, 0, 0], this.vertexColors = !0, this.updateShaderSource();
  }
  dispose() {
    super.dispose(), this.gradientTexture && (this.gradientTexture.dispose(), this.gradientTexture = void 0), this.visibleNodesTexture && (this.visibleNodesTexture.dispose(), this.visibleNodesTexture = void 0), this.clearVisibleNodeTextureOffsets(), this.classificationTexture && (this.classificationTexture.dispose(), this.classificationTexture = void 0), this.depthMap && (this.depthMap.dispose(), this.depthMap = void 0);
  }
  clearVisibleNodeTextureOffsets() {
    this.visibleNodeTextureOffsets.clear();
  }
  updateShaderSource() {
    this.vertexShader = this.applyDefines(Re), this.fragmentShader = this.applyDefines(xe), this.opacity === 1 ? (this.blending = 0, this.transparent = !1, this.depthTest = !0, this.depthWrite = !0, this.depthFunc = 3) : this.opacity < 1 && !this.useEDL && (this.blending = 2, this.transparent = !0, this.depthTest = !1, this.depthWrite = !0), this.weighted && (this.blending = 2, this.transparent = !0, this.depthTest = !0, this.depthWrite = !1, this.depthFunc = 3), this.needsUpdate = !0;
  }
  applyDefines(s) {
    const t = [];
    function l(e) {
      e && t.push(`#define ${e}`);
    }
    l(Me[this.treeType]), l(Ue[this.pointSizeType]), l(fe[this.shape]), l(Se[this.pointColorType]), l(je[this.clipMode]), l(Ae[this.pointOpacityType]), l(Te[this.outputColorEncoding]), l(Pe[this.inputColorEncoding]), (this.rgbGamma !== ri || this.rgbBrightness !== bi || this.rgbContrast !== oi) && l("use_rgb_gamma_contrast_brightness"), this.useFilterByNormal && l("use_filter_by_normal"), this.useEDL && l("use_edl"), this.weighted && l("weighted_splats"), this.numClipBoxes > 0 && l("use_clip_box"), this.highlightPoint && l("highlight_point"), l("MAX_POINT_LIGHTS 0"), l("MAX_DIR_LIGHTS 0"), this.newFormat && l("new_format");
    const i = s.match(/^\s*#version\s+300\s+es\s*\n/);
    return i && (t.unshift(i[0]), s = s.replace(i[0], "")), t.push(s), t.join(`
`);
  }
  setClipBoxes(s) {
    if (!s)
      return;
    this.clipBoxes = s;
    const t = this.numClipBoxes !== s.length && (s.length === 0 || this.numClipBoxes === 0);
    this.numClipBoxes = s.length, this.setUniform("clipBoxCount", this.numClipBoxes), t && this.updateShaderSource();
    const l = this.numClipBoxes * 16, i = new Float32Array(l);
    for (let e = 0; e < this.numClipBoxes; e++)
      i.set(s[e].inverse.elements, 16 * e);
    for (let e = 0; e < l; e++)
      isNaN(i[e]) && (i[e] = 1 / 0);
    this.setUniform("clipBoxes", i);
  }
  get gradient() {
    return this._gradient;
  }
  set gradient(s) {
    this._gradient !== s && (this._gradient = s, this.gradientTexture = ui(this._gradient), this.setUniform("gradient", this.gradientTexture));
  }
  get classification() {
    return this._classification;
  }
  set classification(s) {
    const t = {};
    for (const i of Object.keys(s))
      t[i] = s[i].clone();
    let l = !1;
    if (this._classification === void 0)
      l = !1;
    else {
      l = Object.keys(t).length === Object.keys(this._classification).length;
      for (const i of Object.keys(t))
        l = l && this._classification[i] !== void 0, l = l && t[i].equals(this._classification[i]);
    }
    l || (this._classification = t, this.recomputeClassification());
  }
  recomputeClassification() {
    this.classificationTexture = Yi(this._classification), this.setUniform("classificationLUT", this.classificationTexture);
  }
  get elevationRange() {
    return [this.heightMin, this.heightMax];
  }
  set elevationRange(s) {
    this.heightMin = s[0], this.heightMax = s[1];
  }
  getUniform(s) {
    return this.uniforms === void 0 ? void 0 : this.uniforms[s].value;
  }
  setUniform(s, t) {
    if (this.uniforms === void 0)
      return;
    const l = this.uniforms[s];
    l.type === "c" ? l.value.copy(t) : t !== l.value && (l.value = t);
  }
  updateMaterial(s, t, l, i) {
    const e = i.getPixelRatio();
    l.type === Di ? this.fov = l.fov * (Math.PI / 180) : this.fov = Math.PI / 2;
    const n = i.getRenderTarget();
    n !== null && n instanceof zi ? (this.screenWidth = n.width, this.screenHeight = n.height) : (this.screenWidth = i.domElement.clientWidth * e, this.screenHeight = i.domElement.clientHeight * e);
    const c = Math.max(s.scale.x, s.scale.y, s.scale.z);
    this.spacing = s.pcoGeometry.spacing * c, this.octreeSize = s.pcoGeometry.boundingBox.getSize(Mi.helperVec3).x, (this.pointSizeType === Ut.ADAPTIVE || this.pointColorType === k.LOD) && this.updateVisibilityTextureData(t);
  }
  updateVisibilityTextureData(s) {
    s.sort(Qe);
    const t = new Uint8Array(s.length * 4), l = new Array(s.length).fill(1 / 0);
    this.visibleNodeTextureOffsets.clear();
    for (let e = 0; e < s.length; e++) {
      const n = s[e];
      if (this.visibleNodeTextureOffsets.set(n.name, e), e > 0) {
        const c = n.name.slice(0, -1), Z = this.visibleNodeTextureOffsets.get(c), h = e - Z;
        l[Z] = Math.min(l[Z], h);
        const a = Z * 4;
        t[a] = t[a] | 1 << n.index, t[a + 1] = l[Z] >> 8, t[a + 2] = l[Z] % 256;
      }
      t[e * 4 + 3] = n.name.length;
    }
    const i = this.visibleNodesTexture;
    i && (i.image.data.set(t), i.needsUpdate = !0);
  }
  static makeOnBeforeRender(s, t, l) {
    return (i, e, n, c, Z) => {
      const h = Z, a = h.uniforms;
      a.level.value = t.level, a.isLeafNode.value = t.isLeafNode;
      const d = h.visibleNodeTextureOffsets.get(t.name);
      d !== void 0 && (a.vnStart.value = d), a.pcIndex.value = l !== void 0 ? l : s.visibleNodes.indexOf(t), Z.uniformsNeedUpdate = !0;
    };
  }
};
let X = Mi;
X.helperVec3 = new W();
F([
  B("bbSize")
], X.prototype, "bbSize", 2);
F([
  B("depthMap")
], X.prototype, "depthMap", 2);
F([
  B("fov")
], X.prototype, "fov", 2);
F([
  B("heightMax")
], X.prototype, "heightMax", 2);
F([
  B("heightMin")
], X.prototype, "heightMin", 2);
F([
  B("intensityBrightness")
], X.prototype, "intensityBrightness", 2);
F([
  B("intensityContrast")
], X.prototype, "intensityContrast", 2);
F([
  B("intensityGamma")
], X.prototype, "intensityGamma", 2);
F([
  B("intensityRange")
], X.prototype, "intensityRange", 2);
F([
  B("maxSize")
], X.prototype, "maxSize", 2);
F([
  B("minSize")
], X.prototype, "minSize", 2);
F([
  B("octreeSize")
], X.prototype, "octreeSize", 2);
F([
  B("opacity", !0)
], X.prototype, "opacity", 2);
F([
  B("rgbBrightness", !0)
], X.prototype, "rgbBrightness", 2);
F([
  B("rgbContrast", !0)
], X.prototype, "rgbContrast", 2);
F([
  B("rgbGamma", !0)
], X.prototype, "rgbGamma", 2);
F([
  B("screenHeight")
], X.prototype, "screenHeight", 2);
F([
  B("screenWidth")
], X.prototype, "screenWidth", 2);
F([
  B("size")
], X.prototype, "size", 2);
F([
  B("spacing")
], X.prototype, "spacing", 2);
F([
  B("transition")
], X.prototype, "transition", 2);
F([
  B("uColor")
], X.prototype, "color", 2);
F([
  B("wClassification")
], X.prototype, "weightClassification", 2);
F([
  B("wElevation")
], X.prototype, "weightElevation", 2);
F([
  B("wIntensity")
], X.prototype, "weightIntensity", 2);
F([
  B("wReturnNumber")
], X.prototype, "weightReturnNumber", 2);
F([
  B("wRGB")
], X.prototype, "weightRGB", 2);
F([
  B("wSourceID")
], X.prototype, "weightSourceID", 2);
F([
  B("opacityAttenuation")
], X.prototype, "opacityAttenuation", 2);
F([
  B("filterByNormalThreshold")
], X.prototype, "filterByNormalThreshold", 2);
F([
  B("highlightedPointCoordinate")
], X.prototype, "highlightedPointCoordinate", 2);
F([
  B("highlightedPointColor")
], X.prototype, "highlightedPointColor", 2);
F([
  B("enablePointHighlighting")
], X.prototype, "enablePointHighlighting", 2);
F([
  B("highlightedPointScale")
], X.prototype, "highlightedPointScale", 2);
F([
  et()
], X.prototype, "useClipBox", 2);
F([
  et()
], X.prototype, "weighted", 2);
F([
  et()
], X.prototype, "pointColorType", 2);
F([
  et()
], X.prototype, "pointSizeType", 2);
F([
  et()
], X.prototype, "clipMode", 2);
F([
  et()
], X.prototype, "useEDL", 2);
F([
  et()
], X.prototype, "shape", 2);
F([
  et()
], X.prototype, "treeType", 2);
F([
  et()
], X.prototype, "pointOpacityType", 2);
F([
  et()
], X.prototype, "useFilterByNormal", 2);
F([
  et()
], X.prototype, "highlightPoint", 2);
F([
  et()
], X.prototype, "inputColorEncoding", 2);
F([
  et()
], X.prototype, "outputColorEncoding", 2);
function N(s, t) {
  return { type: s, value: t };
}
function ul(s, t) {
  return s === void 0 ? t : s;
}
function B(s, t = !1) {
  return (l, i) => {
    Object.defineProperty(l, i, {
      get() {
        return this.getUniform(s);
      },
      set(e) {
        e !== this.getUniform(s) && (this.setUniform(s, e), t && this.updateShaderSource());
      }
    });
  };
}
function et() {
  return (s, t) => {
    const l = `_${t.toString()}`;
    Object.defineProperty(s, t, {
      get() {
        return this[l];
      },
      set(i) {
        i !== this[l] && (this[l] = i, this.updateShaderSource());
      }
    });
  };
}
class Ui {
  constructor(t, l) {
    this.loader = t, this.boundingBox = l, this.url = null, this.pointAttributes = null, this.spacing = 0, this.numNodesLoading = 0, this.maxNumNodesLoading = 3, this.disposed = !1, this.tightBoundingBox = this.boundingBox.clone(), this.boundingSphere = this.boundingBox.getBoundingSphere(new st()), this.tightBoundingSphere = this.boundingBox.getBoundingSphere(new st());
  }
  dispose() {
    this.root.traverse((t) => t.dispose()), this.disposed = !0;
  }
}
class Le extends Bt {
  constructor(t, l) {
    super(), this.pcIndex = void 0, this.boundingBoxNode = null, this.loaded = !0, this.isTreeNode = !0, this.isGeometryNode = !1, this.geometryNode = t, this.sceneNode = l, this.children = t.children.slice();
  }
  dispose() {
    this.geometryNode.dispose();
  }
  disposeSceneNode() {
    const t = this.sceneNode;
    if (t.geometry instanceof yt) {
      const l = t.geometry.attributes;
      for (const i in l)
        i === "position" && delete l[i].array, delete l[i];
      t.geometry.dispose(), t.geometry = void 0;
    }
  }
  traverse(t, l) {
    this.geometryNode.traverse(t, l);
  }
  get id() {
    return this.geometryNode.id;
  }
  get name() {
    return this.geometryNode.name;
  }
  get level() {
    return this.geometryNode.level;
  }
  get isLeafNode() {
    return this.geometryNode.isLeafNode;
  }
  get numPoints() {
    return this.geometryNode.numPoints;
  }
  get index() {
    return this.geometryNode.index;
  }
  get boundingSphere() {
    return this.geometryNode.boundingSphere;
  }
  get boundingBox() {
    return this.geometryNode.boundingBox;
  }
  get spacing() {
    return this.geometryNode.spacing;
  }
}
function Vi(s, t, l) {
  return Math.min(Math.max(t, s), l);
}
const A = class {
  dispose() {
    this.pickState && (this.pickState.material.dispose(), this.pickState.renderTarget.dispose());
  }
  pick(s, t, l, i, e = {}) {
    if (i.length === 0)
      return null;
    const n = this.pickState ? this.pickState : this.pickState = A.getPickState(), c = n.material, Z = s.getPixelRatio(), h = Math.ceil(s.domElement.clientWidth * Z), a = Math.ceil(s.domElement.clientHeight * Z);
    A.updatePickRenderTarget(this.pickState, h, a);
    const d = A.helperVec3;
    e.pixelPosition ? d.copy(e.pixelPosition) : (d.addVectors(t.position, l.direction).project(t), d.x = (d.x + 1) * h * 0.5, d.y = (d.y + 1) * a * 0.5);
    const m = Math.floor(
      (e.pickWindowSize || Be) * Z
    ), b = (m - 1) / 2, o = Math.floor(Vi(d.x - b, 0, h)), r = Math.floor(Vi(d.y - b, 0, a));
    A.prepareRender(s, o, r, m, c, n);
    const G = A.render(
      s,
      t,
      c,
      i,
      l,
      n,
      e
    );
    c.clearVisibleNodeTextureOffsets();
    const u = A.readPixels(s, o, r, m), Y = A.findHit(u, m);
    return A.getPickPoint(Y, G);
  }
  static prepareRender(s, t, l, i, e, n) {
    s.setScissor(t, l, i, i), s.setScissorTest(!0), s.state.buffers.depth.setTest(e.depthTest), s.state.buffers.depth.setMask(e.depthWrite), s.state.setBlending(0), s.setRenderTarget(n.renderTarget), s.getClearColor(this.clearColor);
    const c = s.getClearAlpha();
    s.setClearColor(ze, 0), s.clear(!0, !0, !0), s.setClearColor(this.clearColor, c);
  }
  static render(s, t, l, i, e, n, c) {
    const Z = [];
    for (const h of i) {
      const a = A.nodesOnRay(h, e);
      a.length && (A.updatePickMaterial(l, h.material, c), l.updateMaterial(h, a, t, s), c.onBeforePickRender && c.onBeforePickRender(l, n.renderTarget), n.scene.children = A.createTempNodes(
        h,
        a,
        l,
        Z.length
      ), s.render(n.scene, t), a.forEach((d) => Z.push({ node: d, octree: h })));
    }
    return Z;
  }
  static nodesOnRay(s, t) {
    const l = [], i = t.clone();
    for (const e of s.visibleNodes) {
      const n = A.helperSphere.copy(e.boundingSphere).applyMatrix4(s.matrixWorld);
      i.intersectsSphere(n) && l.push(e);
    }
    return l;
  }
  static readPixels(s, t, l, i) {
    const e = new Uint8Array(4 * i * i);
    return s.readRenderTargetPixels(
      s.getRenderTarget(),
      t,
      l,
      i,
      i,
      e
    ), s.setScissorTest(!1), s.setRenderTarget(null), e;
  }
  static createTempNodes(s, t, l, i) {
    const e = [];
    for (let n = 0; n < t.length; n++) {
      const c = t[n], Z = c.sceneNode, h = new Hi(Z.geometry, l);
      h.matrix = Z.matrix, h.matrixWorld = Z.matrixWorld, h.matrixAutoUpdate = !1, h.frustumCulled = !1;
      const a = i + n + 1;
      a > 255 && console.error("More than 255 nodes for pick are not supported."), h.onBeforeRender = X.makeOnBeforeRender(s, c, a), e.push(h);
    }
    return e;
  }
  static updatePickMaterial(s, t, l) {
    s.pointSizeType = t.pointSizeType, s.shape = t.shape, s.size = t.size, s.minSize = t.minSize, s.maxSize = t.maxSize, s.classification = t.classification, s.useFilterByNormal = t.useFilterByNormal, s.filterByNormalThreshold = t.filterByNormalThreshold, l.pickOutsideClipRegion ? s.clipMode = gt.DISABLED : (s.clipMode = t.clipMode, s.setClipBoxes(
      t.clipMode === gt.CLIP_OUTSIDE ? t.clipBoxes : []
    ));
  }
  static updatePickRenderTarget(s, t, l) {
    s.renderTarget.width === t && s.renderTarget.height === l || (s.renderTarget.dispose(), s.renderTarget = A.makePickRenderTarget(), s.renderTarget.setSize(t, l));
  }
  static makePickRenderTarget() {
    return new zi(1, 1, {
      minFilter: 1006,
      magFilter: 1003,
      format: 1023
    });
  }
  static findHit(s, t) {
    const l = new Uint32Array(s.buffer);
    let i = Number.MAX_VALUE, e = null;
    for (let n = 0; n < t; n++)
      for (let c = 0; c < t; c++) {
        const Z = n + c * t, h = Math.pow(n - (t - 1) / 2, 2) + Math.pow(c - (t - 1) / 2, 2), a = s[4 * Z + 3];
        s[4 * Z + 3] = 0;
        const d = l[Z];
        a > 0 && h < i && (e = {
          pIndex: d,
          pcIndex: a - 1
        }, i = h);
      }
    return e;
  }
  static getPickPoint(s, t) {
    if (!s)
      return null;
    const l = {}, i = t[s.pcIndex] && t[s.pcIndex].node.sceneNode;
    if (!i)
      return null;
    l.pointCloud = t[s.pcIndex].octree;
    const e = i.geometry.attributes;
    for (const n in e) {
      if (!e.hasOwnProperty(n))
        continue;
      const c = e[n];
      if (n === "position")
        A.addPositionToPickPoint(l, s, c, i);
      else if (n === "normal")
        A.addNormalToPickPoint(l, s, c, i);
      else if (n !== "indices")
        if (c.itemSize === 1)
          l[n] = c.array[s.pIndex];
        else {
          const Z = [];
          for (let h = 0; h < c.itemSize; h++)
            Z.push(c.array[c.itemSize * s.pIndex + h]);
          l[n] = Z;
        }
    }
    return l;
  }
  static addPositionToPickPoint(s, t, l, i) {
    s.position = new W().fromBufferAttribute(l, t.pIndex).applyMatrix4(i.matrixWorld);
  }
  static addNormalToPickPoint(s, t, l, i) {
    const e = new W().fromBufferAttribute(l, t.pIndex), n = new M(e.x, e.y, e.z, 0).applyMatrix4(i.matrixWorld);
    e.set(n.x, n.y, n.z), s.normal = e;
  }
  static getPickState() {
    const s = new Ye();
    s.autoUpdate = !1;
    const t = new X();
    return t.pointColorType = k.POINT_INDEX, {
      renderTarget: A.makePickRenderTarget(),
      material: t,
      scene: s
    };
  }
};
let _t = A;
_t.helperVec3 = new W();
_t.helperSphere = new st();
_t.clearColor = new V();
class Ee extends it {
  constructor() {
    super(...arguments), this.root = null;
  }
  initialized() {
    return this.root !== null;
  }
}
function pi(s, t) {
  return new K().setFromPoints([
    new W(s.min.x, s.min.y, s.min.z).applyMatrix4(t),
    new W(s.min.x, s.min.y, s.min.z).applyMatrix4(t),
    new W(s.max.x, s.min.y, s.min.z).applyMatrix4(t),
    new W(s.min.x, s.max.y, s.min.z).applyMatrix4(t),
    new W(s.min.x, s.min.y, s.max.z).applyMatrix4(t),
    new W(s.min.x, s.max.y, s.max.z).applyMatrix4(t),
    new W(s.max.x, s.max.y, s.min.z).applyMatrix4(t),
    new W(s.max.x, s.min.y, s.max.z).applyMatrix4(t),
    new W(s.max.x, s.max.y, s.max.z).applyMatrix4(t)
  ]);
}
function Ai(s, t) {
  const l = s.min.clone(), i = s.max.clone(), e = new W().subVectors(i, l);
  return (t & 1) > 0 ? l.z += e.z / 2 : i.z -= e.z / 2, (t & 2) > 0 ? l.y += e.y / 2 : i.y -= e.y / 2, (t & 4) > 0 ? l.x += e.x / 2 : i.x -= e.x / 2, new K(l, i);
}
class Xi extends Ee {
  constructor(t, l, i) {
    super(), this.disposed = !1, this.level = 0, this.maxLevel = 1 / 0, this.minNodePixelSize = Fe, this.root = null, this.boundingBoxNodes = [], this.visibleNodes = [], this.visibleGeometry = [], this.numVisiblePoints = 0, this.showBoundingBox = !1, this.visibleBounds = new K(), this.name = "", this.potree = t, this.root = l.root, this.pcoGeometry = l, this.boundingBox = l.boundingBox, this.boundingSphere = this.boundingBox.getBoundingSphere(new st()), this.position.copy(l.offset), this.updateMatrix(), this.material = i || l instanceof Ui ? new X({ newFormat: !0 }) : new X(), this.initMaterial(this.material);
  }
  initMaterial(t) {
    this.updateMatrixWorld(!0);
    const { min: l, max: i } = pi(
      this.pcoGeometry.tightBoundingBox || this.getBoundingBoxWorld(),
      this.matrixWorld
    ), e = i.z - l.z;
    t.heightMin = l.z - 0.2 * e, t.heightMax = i.z + 0.2 * e;
  }
  dispose() {
    this.root && this.root.dispose(), this.pcoGeometry.root.traverse((t) => this.potree.lru.remove(t)), this.pcoGeometry.dispose(), this.material.dispose(), this.visibleNodes = [], this.visibleGeometry = [], this.picker && (this.picker.dispose(), this.picker = void 0), this.disposed = !0;
  }
  get pointSizeType() {
    return this.material.pointSizeType;
  }
  set pointSizeType(t) {
    this.material.pointSizeType = t;
  }
  toTreeNode(t, l) {
    const i = new Hi(t.geometry, this.material), e = new Le(t, i);
    return i.name = t.name, i.position.copy(t.boundingBox.min), i.frustumCulled = !1, i.onBeforeRender = X.makeOnBeforeRender(this, e), l ? (l.sceneNode.add(i), l.children[t.index] = e, t.oneTimeDisposeHandlers.push(() => {
      e.disposeSceneNode(), l.sceneNode.remove(e.sceneNode), l.children[t.index] = t;
    })) : (this.root = e, this.add(i)), e;
  }
  updateVisibleBounds() {
    const t = this.visibleBounds;
    t.min.set(1 / 0, 1 / 0, 1 / 0), t.max.set(-1 / 0, -1 / 0, -1 / 0);
    for (const l of this.visibleNodes)
      l.isLeafNode && (t.expandByPoint(l.boundingBox.min), t.expandByPoint(l.boundingBox.max));
  }
  updateBoundingBoxes() {
    if (!this.showBoundingBox || !this.parent)
      return;
    let t = this.parent.getObjectByName("bbroot");
    t || (t = new it(), t.name = "bbroot", this.parent.add(t));
    const l = [];
    for (const i of this.visibleNodes)
      i.boundingBoxNode !== void 0 && i.isLeafNode && l.push(i.boundingBoxNode);
    t.children = l;
  }
  updateMatrixWorld(t) {
    this.matrixAutoUpdate === !0 && this.updateMatrix(), (this.matrixWorldNeedsUpdate === !0 || t === !0) && (this.parent ? this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix) : this.matrixWorld.copy(this.matrix), this.matrixWorldNeedsUpdate = !1, t = !0);
  }
  hideDescendants(t) {
    const l = [];
    for (i(t); l.length > 0; ) {
      const e = l.shift();
      e.visible = !1, i(e);
    }
    function i(e) {
      for (const n of e.children)
        n.visible && l.push(n);
    }
  }
  moveToOrigin() {
    this.position.set(0, 0, 0), this.position.set(0, 0, 0).sub(this.getBoundingBoxWorld().getCenter(new W()));
  }
  moveToGroundPlane() {
    this.position.y += -this.getBoundingBoxWorld().min.y;
  }
  getBoundingBoxWorld() {
    return this.updateMatrixWorld(!0), pi(this.boundingBox, this.matrixWorld);
  }
  getVisibleExtent() {
    return this.visibleBounds.applyMatrix4(this.matrixWorld);
  }
  pick(t, l, i, e = {}) {
    return this.picker = this.picker || new _t(), this.picker.pick(t, l, i, [this], e);
  }
  get progress() {
    return this.visibleGeometry.length === 0 ? 0 : this.visibleNodes.length / this.visibleGeometry.length;
  }
}
const C = {
  DATA_TYPE_DOUBLE: { ordinal: 0, name: "double", size: 8 },
  DATA_TYPE_FLOAT: { ordinal: 1, name: "float", size: 4 },
  DATA_TYPE_INT8: { ordinal: 2, name: "int8", size: 1 },
  DATA_TYPE_UINT8: { ordinal: 3, name: "uint8", size: 1 },
  DATA_TYPE_INT16: { ordinal: 4, name: "int16", size: 2 },
  DATA_TYPE_UINT16: { ordinal: 5, name: "uint16", size: 2 },
  DATA_TYPE_INT32: { ordinal: 6, name: "int32", size: 4 },
  DATA_TYPE_UINT32: { ordinal: 7, name: "uint32", size: 4 },
  DATA_TYPE_INT64: { ordinal: 8, name: "int64", size: 8 },
  DATA_TYPE_UINT64: { ordinal: 9, name: "uint64", size: 8 }
};
let gi = 0;
for (let s in C)
  C[gi] = C[s], gi++;
class f {
  constructor(t, l, i, e = [1 / 0, -1 / 0]) {
    this.name = t, this.type = l, this.numElements = i, this.range = e, this.byteSize = this.numElements * this.type.size, this.description = "";
  }
}
const Pt = {
  POSITION_CARTESIAN: new f("POSITION_CARTESIAN", C.DATA_TYPE_FLOAT, 3),
  RGBA_PACKED: new f("COLOR_PACKED", C.DATA_TYPE_INT8, 4),
  COLOR_PACKED: new f("COLOR_PACKED", C.DATA_TYPE_INT8, 4),
  RGB_PACKED: new f("COLOR_PACKED", C.DATA_TYPE_INT8, 3),
  NORMAL_FLOATS: new f("NORMAL_FLOATS", C.DATA_TYPE_FLOAT, 3),
  INTENSITY: new f("INTENSITY", C.DATA_TYPE_UINT16, 1),
  CLASSIFICATION: new f("CLASSIFICATION", C.DATA_TYPE_UINT8, 1),
  NORMAL_SPHEREMAPPED: new f("NORMAL_SPHEREMAPPED", C.DATA_TYPE_UINT8, 2),
  NORMAL_OCT16: new f("NORMAL_OCT16", C.DATA_TYPE_UINT8, 2),
  NORMAL: new f("NORMAL", C.DATA_TYPE_FLOAT, 3),
  RETURN_NUMBER: new f("RETURN_NUMBER", C.DATA_TYPE_UINT8, 1),
  NUMBER_OF_RETURNS: new f("NUMBER_OF_RETURNS", C.DATA_TYPE_UINT8, 1),
  SOURCE_ID: new f("SOURCE_ID", C.DATA_TYPE_UINT16, 1),
  INDICES: new f("INDICES", C.DATA_TYPE_UINT32, 1),
  SPACING: new f("SPACING", C.DATA_TYPE_FLOAT, 1),
  GPS_TIME: new f("GPS_TIME", C.DATA_TYPE_DOUBLE, 1)
};
let Oe = class {
  // pointAttributes will be a list of strings
  constructor(t, l = [], i = 0, e = 0, n = []) {
    if (this.attributes = l, this.byteSize = i, this.size = e, this.vectors = n, t != null)
      for (let c = 0; c < t.length; c++) {
        let Z = t[c], h = Pt[Z];
        this.attributes.push(h), this.byteSize += h.byteSize, this.size++;
      }
  }
  // I hate these argument names that are so similar to each other but have completely different types
  add(t) {
    this.attributes.push(t), this.byteSize += t.byteSize, this.size++;
  }
  addVector(t) {
    this.vectors.push(t);
  }
  hasNormals() {
    for (let t in this.attributes) {
      let l = this.attributes[t];
      if (l === Pt.NORMAL_SPHEREMAPPED || l === Pt.NORMAL_FLOATS || l === Pt.NORMAL || l === Pt.NORMAL_OCT16)
        return !0;
    }
    return !1;
  }
};
const fi = "KGZ1bmN0aW9uKCl7InVzZSBzdHJpY3QiO2NvbnN0IHY9e0RBVEFfVFlQRV9ET1VCTEU6e29yZGluYWw6MCxuYW1lOiJkb3VibGUiLHNpemU6OH0sREFUQV9UWVBFX0ZMT0FUOntvcmRpbmFsOjEsbmFtZToiZmxvYXQiLHNpemU6NH0sREFUQV9UWVBFX0lOVDg6e29yZGluYWw6MixuYW1lOiJpbnQ4IixzaXplOjF9LERBVEFfVFlQRV9VSU5UODp7b3JkaW5hbDozLG5hbWU6InVpbnQ4IixzaXplOjF9LERBVEFfVFlQRV9JTlQxNjp7b3JkaW5hbDo0LG5hbWU6ImludDE2IixzaXplOjJ9LERBVEFfVFlQRV9VSU5UMTY6e29yZGluYWw6NSxuYW1lOiJ1aW50MTYiLHNpemU6Mn0sREFUQV9UWVBFX0lOVDMyOntvcmRpbmFsOjYsbmFtZToiaW50MzIiLHNpemU6NH0sREFUQV9UWVBFX1VJTlQzMjp7b3JkaW5hbDo3LG5hbWU6InVpbnQzMiIsc2l6ZTo0fSxEQVRBX1RZUEVfSU5UNjQ6e29yZGluYWw6OCxuYW1lOiJpbnQ2NCIsc2l6ZTo4fSxEQVRBX1RZUEVfVUlOVDY0OntvcmRpbmFsOjksbmFtZToidWludDY0IixzaXplOjh9fTtsZXQgazA9MDtmb3IobGV0IFIgaW4gdil2W2swXT12W1JdLGswKys7Y2xhc3MgUXtjb25zdHJ1Y3RvcihiLEosZjAsZTA9WzEvMCwtMS8wXSl7dGhpcy5uYW1lPWIsdGhpcy50eXBlPUosdGhpcy5udW1FbGVtZW50cz1mMCx0aGlzLnJhbmdlPWUwLHRoaXMuYnl0ZVNpemU9dGhpcy5udW1FbGVtZW50cyp0aGlzLnR5cGUuc2l6ZSx0aGlzLmRlc2NyaXB0aW9uPSIifX1uZXcgUSgiUE9TSVRJT05fQ0FSVEVTSUFOIix2LkRBVEFfVFlQRV9GTE9BVCwzKSxuZXcgUSgiQ09MT1JfUEFDS0VEIix2LkRBVEFfVFlQRV9JTlQ4LDQpLG5ldyBRKCJDT0xPUl9QQUNLRUQiLHYuREFUQV9UWVBFX0lOVDgsNCksbmV3IFEoIkNPTE9SX1BBQ0tFRCIsdi5EQVRBX1RZUEVfSU5UOCwzKSxuZXcgUSgiTk9STUFMX0ZMT0FUUyIsdi5EQVRBX1RZUEVfRkxPQVQsMyksbmV3IFEoIklOVEVOU0lUWSIsdi5EQVRBX1RZUEVfVUlOVDE2LDEpLG5ldyBRKCJDTEFTU0lGSUNBVElPTiIsdi5EQVRBX1RZUEVfVUlOVDgsMSksbmV3IFEoIk5PUk1BTF9TUEhFUkVNQVBQRUQiLHYuREFUQV9UWVBFX1VJTlQ4LDIpLG5ldyBRKCJOT1JNQUxfT0NUMTYiLHYuREFUQV9UWVBFX1VJTlQ4LDIpLG5ldyBRKCJOT1JNQUwiLHYuREFUQV9UWVBFX0ZMT0FULDMpLG5ldyBRKCJSRVRVUk5fTlVNQkVSIix2LkRBVEFfVFlQRV9VSU5UOCwxKSxuZXcgUSgiTlVNQkVSX09GX1JFVFVSTlMiLHYuREFUQV9UWVBFX1VJTlQ4LDEpLG5ldyBRKCJTT1VSQ0VfSUQiLHYuREFUQV9UWVBFX1VJTlQxNiwxKSxuZXcgUSgiSU5ESUNFUyIsdi5EQVRBX1RZUEVfVUlOVDMyLDEpLG5ldyBRKCJTUEFDSU5HIix2LkRBVEFfVFlQRV9GTE9BVCwxKSxuZXcgUSgiR1BTX1RJTUUiLHYuREFUQV9UWVBFX0RPVUJMRSwxKTtmdW5jdGlvbiBMMCgpe3ZhciBSPW5ldyBJbnQ4QXJyYXkoMCk7ZnVuY3Rpb24gYihlKXt0aGlzLmRhdGE9ZSx0aGlzLm9mZnNldD0wfXZhciBKPUludDMyQXJyYXkuZnJvbShbMjU2LDQwMiw0MzYsNDY4LDUwMCw1MzQsNTY2LDU5OCw2MzAsNjYyLDY5NCw3MjYsNzU4LDc5MCw4MjIsODU0LDg4Niw5MjAsOTUyLDk4NCwxMDE2LDEwNDgsMTA4MF0pLGYwPUludDMyQXJyYXkuZnJvbShbMSwyLDMsNCwwLDUsMTcsNiwxNiw3LDgsOSwxMCwxMSwxMiwxMywxNCwxNV0pLGUwPUludDMyQXJyYXkuZnJvbShbMCwzLDIsMSwwLDAsMCwwLDAsMCwzLDMsMywzLDMsM10pLEYwPUludDMyQXJyYXkuZnJvbShbMCwwLDAsMCwtMSwxLC0yLDIsLTMsMywtMSwxLC0yLDIsLTMsM10pLHIwPUludDMyQXJyYXkuZnJvbShbMTMxMDcyLDEzMTA3NiwxMzEwNzUsMTk2NjEwLDEzMTA3MiwxMzEwNzYsMTMxMDc1LDI2MjE0NSwxMzEwNzIsMTMxMDc2LDEzMTA3NSwxOTY2MTAsMTMxMDcyLDEzMTA3NiwxMzEwNzUsMjYyMTQ5XSksczA9SW50MzJBcnJheS5mcm9tKFswLDAsMCwwLDAsNDA5Niw5MjE2LDIxNTA0LDM1ODQwLDQ0MDMyLDUzMjQ4LDYzNDg4LDc0NzUyLDg3MDQwLDkzNjk2LDEwMDg2NCwxMDQ3MDQsMTA2NzUyLDEwODkyOCwxMTM1MzYsMTE1OTY4LDExODUyOCwxMTk4NzIsMTIxMjgwLDEyMjAxNl0pLFM9SW50MzJBcnJheS5mcm9tKFswLDAsMCwwLDEwLDEwLDExLDExLDEwLDEwLDEwLDEwLDEwLDksOSw4LDcsNyw4LDcsNyw2LDYsNSw1XSkseTA9SW50MzJBcnJheS5mcm9tKFsxLDUsOSwxMywxNywyNSwzMyw0MSw0OSw2NSw4MSw5NywxMTMsMTQ1LDE3NywyMDksMjQxLDMwNSwzNjksNDk3LDc1MywxMjY1LDIyODksNDMzNyw4NDMzLDE2NjI1XSkscDA9SW50MzJBcnJheS5mcm9tKFsyLDIsMiwyLDMsMywzLDMsNCw0LDQsNCw1LDUsNSw1LDYsNiw3LDgsOSwxMCwxMSwxMiwxMywyNF0pLHg9SW50MTZBcnJheS5mcm9tKFswLDAsMCwwLDAsMCwxLDEsMiwyLDMsMyw0LDQsNSw1LDYsNyw4LDksMTAsMTIsMTQsMjRdKSxNPUludDE2QXJyYXkuZnJvbShbMCwwLDAsMCwwLDAsMCwwLDEsMSwyLDIsMywzLDQsNCw1LDUsNiw3LDgsOSwxMCwyNF0pLHQwPW5ldyBJbnQxNkFycmF5KDI4MTYpO1AwKHQwKTtmdW5jdGlvbiBqKGUpe2Zvcih2YXIgbj0tMSx0PTE2O3Q+MDspZT4+PnQmJihuKz10LGU9ZT4+PnQpLHQ9dD4+MTtyZXR1cm4gbitlfWZ1bmN0aW9uIG0wKGUsbix0KXtyZXR1cm4gMTYrbisyKih0PDxlKX1mdW5jdGlvbiBnMChlLG4sdCl7aWYoZTx0KygyPDxuKSl0aHJvdyJtYXhEaXN0YW5jZSBpcyB0b28gc21hbGwiO3ZhciBpPShlLXQ+Pm4pKzQsYT1qKGkpLTEsdT1hLTE8PDF8aT4+YSYxO3JldHVybih1LTE8PG4pKygxPDxuKSt0KzE2fWZ1bmN0aW9uIFAwKGUpe3ZhciBuPW5ldyBJbnQxNkFycmF5KDI0KSx0PW5ldyBJbnQxNkFycmF5KDI0KTt0WzBdPTI7Zm9yKHZhciBpPTA7aTwyMzsrK2kpbltpKzFdPW5baV0rKDE8PHhbaV0pLHRbaSsxXT10W2ldKygxPDxNW2ldKTtmb3IodmFyIGE9MDthPDcwNDsrK2Epe3ZhciB1PWE+Pj42LHI9LTQ7dT49MiYmKHUtPTIscj0wKTt2YXIgbz0oMTcwMDY0Pj4+dSoyJjMpPDwzfGE+Pj4zJjcsbD0oMTU2MjI4Pj4+dSoyJjMpPDwzfGEmNyxzPXRbbF0sYz1yKyhzPjQ/MzpzLTIpLGQ9YSo0O2VbZCswXT14W29dfE1bbF08PDgsZVtkKzFdPW5bb10sZVtkKzJdPXRbbF0sZVtkKzNdPWN9fWZ1bmN0aW9uIE4oZSl7dmFyIG49ZS5pc0xhcmdlV2luZG93O2lmKGUuaXNMYXJnZVdpbmRvdz0wLGUuYml0T2Zmc2V0Pj0xNiYmKGUuYWNjdW11bGF0b3IzMj1lLnNob3J0QnVmZmVyW2UuaGFsZk9mZnNldCsrXTw8MTZ8ZS5hY2N1bXVsYXRvcjMyPj4+MTYsZS5iaXRPZmZzZXQtPTE2KSxoKGUsMSk9PTApcmV0dXJuIDE2O3ZhciB0PWgoZSwzKTtyZXR1cm4gdCE9MD8xNyt0Oih0PWgoZSwzKSx0IT0wP3Q9PTE/bj09MHx8KGUuaXNMYXJnZVdpbmRvdz0xLGgoZSwxKT09MSl8fCh0PWgoZSw2KSx0PDEwfHx0PjMwKT8tMTp0OjgrdDoxNyl9ZnVuY3Rpb24gdjAoZSxuKXtpZihlLnJ1bm5pbmdTdGF0ZSE9MCl0aHJvdyJTdGF0ZSBNVVNUIGJlIHVuaW5pdGlhbGl6ZWQiO2UuYmxvY2tUcmVlcz1uZXcgSW50MzJBcnJheSgzMDkxKSxlLmJsb2NrVHJlZXNbMF09NyxlLmRpc3RSYklkeD0zO3ZhciB0PWcwKDIxNDc0ODM2NDQsMywxNTw8Myk7ZS5kaXN0RXh0cmFCaXRzPW5ldyBJbnQ4QXJyYXkodCksZS5kaXN0T2Zmc2V0PW5ldyBJbnQzMkFycmF5KHQpLGUuaW5wdXQ9bixLMChlKSxlLnJ1bm5pbmdTdGF0ZT0xfWZ1bmN0aW9uIGwwKGUpe2lmKGUucnVubmluZ1N0YXRlPT0wKXRocm93IlN0YXRlIE1VU1QgYmUgaW5pdGlhbGl6ZWQiO2UucnVubmluZ1N0YXRlIT0xMSYmKGUucnVubmluZ1N0YXRlPTExLGUuaW5wdXQhPW51bGwmJihuZShlLmlucHV0KSxlLmlucHV0PW51bGwpKX1mdW5jdGlvbiBpMChlKXtpZihlLmJpdE9mZnNldD49MTYmJihlLmFjY3VtdWxhdG9yMzI9ZS5zaG9ydEJ1ZmZlcltlLmhhbGZPZmZzZXQrK108PDE2fGUuYWNjdW11bGF0b3IzMj4+PjE2LGUuYml0T2Zmc2V0LT0xNiksaChlLDEpIT0wKXt2YXIgbj1oKGUsMyk7cmV0dXJuIG49PTA/MTpoKGUsbikrKDE8PG4pfXJldHVybiAwfWZ1bmN0aW9uIGYoZSl7aWYoZS5iaXRPZmZzZXQ+PTE2JiYoZS5hY2N1bXVsYXRvcjMyPWUuc2hvcnRCdWZmZXJbZS5oYWxmT2Zmc2V0KytdPDwxNnxlLmFjY3VtdWxhdG9yMzI+Pj4xNixlLmJpdE9mZnNldC09MTYpLGUuaW5wdXRFbmQ9aChlLDEpLGUubWV0YUJsb2NrTGVuZ3RoPTAsZS5pc1VuY29tcHJlc3NlZD0wLGUuaXNNZXRhZGF0YT0wLCEoZS5pbnB1dEVuZCE9MCYmaChlLDEpIT0wKSl7dmFyIG49aChlLDIpKzQ7aWYobj09Nyl7aWYoZS5pc01ldGFkYXRhPTEsaChlLDEpIT0wKXRocm93IkNvcnJ1cHRlZCByZXNlcnZlZCBiaXQiO3ZhciB0PWgoZSwyKTtpZih0PT0wKXJldHVybjtmb3IodmFyIGk9MDtpPHQ7aSsrKXtlLmJpdE9mZnNldD49MTYmJihlLmFjY3VtdWxhdG9yMzI9ZS5zaG9ydEJ1ZmZlcltlLmhhbGZPZmZzZXQrK108PDE2fGUuYWNjdW11bGF0b3IzMj4+PjE2LGUuYml0T2Zmc2V0LT0xNik7dmFyIGE9aChlLDgpO2lmKGE9PTAmJmkrMT09dCYmdD4xKXRocm93IkV4dWJlcmFudCBuaWJibGUiO2UubWV0YUJsb2NrTGVuZ3RofD1hPDxpKjh9fWVsc2UgZm9yKHZhciBpPTA7aTxuO2krKyl7ZS5iaXRPZmZzZXQ+PTE2JiYoZS5hY2N1bXVsYXRvcjMyPWUuc2hvcnRCdWZmZXJbZS5oYWxmT2Zmc2V0KytdPDwxNnxlLmFjY3VtdWxhdG9yMzI+Pj4xNixlLmJpdE9mZnNldC09MTYpO3ZhciBhPWgoZSw0KTtpZihhPT0wJiZpKzE9PW4mJm4+NCl0aHJvdyJFeHViZXJhbnQgbmliYmxlIjtlLm1ldGFCbG9ja0xlbmd0aHw9YTw8aSo0fWUubWV0YUJsb2NrTGVuZ3RoKyssZS5pbnB1dEVuZD09MCYmKGUuaXNVbmNvbXByZXNzZWQ9aChlLDEpKX19ZnVuY3Rpb24gZyhlLG4sdCl7dmFyIGk9ZVtuXSxhPXQuYWNjdW11bGF0b3IzMj4+PnQuYml0T2Zmc2V0O2krPWEmMjU1O3ZhciB1PWVbaV0+PjE2LHI9ZVtpXSY2NTUzNTtpZih1PD04KXJldHVybiB0LmJpdE9mZnNldCs9dSxyO2krPXI7dmFyIG89KDE8PHUpLTE7cmV0dXJuIGkrPShhJm8pPj4+OCx0LmJpdE9mZnNldCs9KGVbaV0+PjE2KSs4LGVbaV0mNjU1MzV9ZnVuY3Rpb24gUChlLG4sdCl7dC5iaXRPZmZzZXQ+PTE2JiYodC5hY2N1bXVsYXRvcjMyPXQuc2hvcnRCdWZmZXJbdC5oYWxmT2Zmc2V0KytdPDwxNnx0LmFjY3VtdWxhdG9yMzI+Pj4xNix0LmJpdE9mZnNldC09MTYpO3ZhciBpPWcoZSxuLHQpLGE9cDBbaV07cmV0dXJuIHQuYml0T2Zmc2V0Pj0xNiYmKHQuYWNjdW11bGF0b3IzMj10LnNob3J0QnVmZmVyW3QuaGFsZk9mZnNldCsrXTw8MTZ8dC5hY2N1bXVsYXRvcjMyPj4+MTYsdC5iaXRPZmZzZXQtPTE2KSx5MFtpXSsoYTw9MTY/aCh0LGEpOmIwKHQsYSkpfWZ1bmN0aW9uIFgoZSxuKXtmb3IodmFyIHQ9ZVtuXTtuPjA7bi0tKWVbbl09ZVtuLTFdO2VbMF09dH1mdW5jdGlvbiBGKGUsbil7Zm9yKHZhciB0PW5ldyBJbnQzMkFycmF5KDI1NiksaT0wO2k8MjU2O2krKyl0W2ldPWk7Zm9yKHZhciBpPTA7aTxuO2krKyl7dmFyIGE9ZVtpXSYyNTU7ZVtpXT10W2FdLGEhPTAmJlgodCxhKX19ZnVuY3Rpb24gcChlLG4sdCxpKXt2YXIgYT0wLHU9OCxyPTAsbz0wLGw9MzI3Njgscz1uZXcgSW50MzJBcnJheSgzMisxKSxjPXMubGVuZ3RoLTE7Zm9yKFEwKHMsYyw1LGUsMTgpO2E8biYmbD4wOyl7aS5oYWxmT2Zmc2V0PjIwMzAmJkwoaSksaS5iaXRPZmZzZXQ+PTE2JiYoaS5hY2N1bXVsYXRvcjMyPWkuc2hvcnRCdWZmZXJbaS5oYWxmT2Zmc2V0KytdPDwxNnxpLmFjY3VtdWxhdG9yMzI+Pj4xNixpLmJpdE9mZnNldC09MTYpO3ZhciBkPWkuYWNjdW11bGF0b3IzMj4+PmkuYml0T2Zmc2V0JjMxO2kuYml0T2Zmc2V0Kz1zW2RdPj4xNjt2YXIgbT1zW2RdJjY1NTM1O2lmKG08MTYpcj0wLHRbYSsrXT1tLG0hPTAmJih1PW0sbC09MzI3Njg+Pm0pO2Vsc2V7dmFyIHc9bS0xNCwkPTA7bT09MTYmJigkPXUpLG8hPSQmJihyPTAsbz0kKTt2YXIgXz1yO3I+MCYmKHItPTIscjw8PXcpLGkuYml0T2Zmc2V0Pj0xNiYmKGkuYWNjdW11bGF0b3IzMj1pLnNob3J0QnVmZmVyW2kuaGFsZk9mZnNldCsrXTw8MTZ8aS5hY2N1bXVsYXRvcjMyPj4+MTYsaS5iaXRPZmZzZXQtPTE2KSxyKz1oKGksdykrMzt2YXIgVT1yLV87aWYoYStVPm4pdGhyb3cic3ltYm9sICsgcmVwZWF0RGVsdGEgPiBudW1TeW1ib2xzIjtmb3IodmFyIE89MDtPPFU7TysrKXRbYSsrXT1vO28hPTAmJihsLT1VPDwxNS1vKX19aWYobCE9MCl0aHJvdyJVbnVzZWQgc3BhY2UiO3QuZmlsbCgwLGEsbil9ZnVuY3Rpb24gQihlLG4pe2Zvcih2YXIgdD0wO3Q8bi0xOysrdClmb3IodmFyIGk9dCsxO2k8bjsrK2kpaWYoZVt0XT09ZVtpXSl0aHJvdyJEdXBsaWNhdGUgc2ltcGxlIEh1ZmZtYW4gY29kZSBzeW1ib2wifWZ1bmN0aW9uIGsoZSxuLHQsaSxhKXtmb3IodmFyIHU9bmV3IEludDMyQXJyYXkobikscj1uZXcgSW50MzJBcnJheSg0KSxvPTEraihlLTEpLGw9aChhLDIpKzEscz0wO3M8bDtzKyspe2EuYml0T2Zmc2V0Pj0xNiYmKGEuYWNjdW11bGF0b3IzMj1hLnNob3J0QnVmZmVyW2EuaGFsZk9mZnNldCsrXTw8MTZ8YS5hY2N1bXVsYXRvcjMyPj4+MTYsYS5iaXRPZmZzZXQtPTE2KTt2YXIgYz1oKGEsbyk7aWYoYz49bil0aHJvdyJDYW4ndCByZWFkSHVmZm1hbkNvZGUiO3Jbc109Y31CKHIsbCk7dmFyIGQ9bDtzd2l0Y2gobD09NCYmKGQrPWgoYSwxKSksZCl7Y2FzZSAxOnVbclswXV09MTticmVhaztjYXNlIDI6dVtyWzBdXT0xLHVbclsxXV09MTticmVhaztjYXNlIDM6dVtyWzBdXT0xLHVbclsxXV09Mix1W3JbMl1dPTI7YnJlYWs7Y2FzZSA0OnVbclswXV09Mix1W3JbMV1dPTIsdVtyWzJdXT0yLHVbclszXV09MjticmVhaztjYXNlIDU6dVtyWzBdXT0xLHVbclsxXV09Mix1W3JbMl1dPTMsdVtyWzNdXT0zO2JyZWFrfXJldHVybiBRMCh0LGksOCx1LG4pfWZ1bmN0aW9uIFQoZSxuLHQsaSxhKXtmb3IodmFyIHU9bmV3IEludDMyQXJyYXkoZSkscj1uZXcgSW50MzJBcnJheSgxOCksbz0zMixsPTAscz1uO3M8MTgmJm8+MDtzKyspe3ZhciBjPWYwW3NdO2EuYml0T2Zmc2V0Pj0xNiYmKGEuYWNjdW11bGF0b3IzMj1hLnNob3J0QnVmZmVyW2EuaGFsZk9mZnNldCsrXTw8MTZ8YS5hY2N1bXVsYXRvcjMyPj4+MTYsYS5iaXRPZmZzZXQtPTE2KTt2YXIgZD1hLmFjY3VtdWxhdG9yMzI+Pj5hLmJpdE9mZnNldCYxNTthLmJpdE9mZnNldCs9cjBbZF0+PjE2O3ZhciBtPXIwW2RdJjY1NTM1O3JbY109bSxtIT0wJiYoby09MzI+Pm0sbCsrKX1pZihvIT0wJiZsIT0xKXRocm93IkNvcnJ1cHRlZCBIdWZmbWFuIGNvZGUgaGlzdG9ncmFtIjtyZXR1cm4gcChyLGUsdSxhKSxRMCh0LGksOCx1LGUpfWZ1bmN0aW9uIFkoZSxuLHQsaSxhKXthLmhhbGZPZmZzZXQ+MjAzMCYmTChhKSxhLmJpdE9mZnNldD49MTYmJihhLmFjY3VtdWxhdG9yMzI9YS5zaG9ydEJ1ZmZlclthLmhhbGZPZmZzZXQrK108PDE2fGEuYWNjdW11bGF0b3IzMj4+PjE2LGEuYml0T2Zmc2V0LT0xNik7dmFyIHU9aChhLDIpO3JldHVybiB1PT0xP2soZSxuLHQsaSxhKTpUKG4sdSx0LGksYSl9ZnVuY3Rpb24gRChlLG4sdCl7dC5oYWxmT2Zmc2V0PjIwMzAmJkwodCk7dmFyIGk9aTAodCkrMTtpZihpPT0xKXJldHVybiBuLmZpbGwoMCwwLGUpLGk7dC5iaXRPZmZzZXQ+PTE2JiYodC5hY2N1bXVsYXRvcjMyPXQuc2hvcnRCdWZmZXJbdC5oYWxmT2Zmc2V0KytdPDwxNnx0LmFjY3VtdWxhdG9yMzI+Pj4xNix0LmJpdE9mZnNldC09MTYpO3ZhciBhPWgodCwxKSx1PTA7YSE9MCYmKHU9aCh0LDQpKzEpO3ZhciByPWkrdSxvPUpbciszMT4+NV0sbD1uZXcgSW50MzJBcnJheShvKzEpLHM9bC5sZW5ndGgtMTtZKHIscixsLHMsdCk7Zm9yKHZhciBjPTA7YzxlOyl7dC5oYWxmT2Zmc2V0PjIwMzAmJkwodCksdC5iaXRPZmZzZXQ+PTE2JiYodC5hY2N1bXVsYXRvcjMyPXQuc2hvcnRCdWZmZXJbdC5oYWxmT2Zmc2V0KytdPDwxNnx0LmFjY3VtdWxhdG9yMzI+Pj4xNix0LmJpdE9mZnNldC09MTYpO3ZhciBkPWcobCxzLHQpO2lmKGQ9PTApbltjXT0wLGMrKztlbHNlIGlmKGQ8PXUpe3QuYml0T2Zmc2V0Pj0xNiYmKHQuYWNjdW11bGF0b3IzMj10LnNob3J0QnVmZmVyW3QuaGFsZk9mZnNldCsrXTw8MTZ8dC5hY2N1bXVsYXRvcjMyPj4+MTYsdC5iaXRPZmZzZXQtPTE2KTtmb3IodmFyIG09KDE8PGQpK2godCxkKTttIT0wOyl7aWYoYz49ZSl0aHJvdyJDb3JydXB0ZWQgY29udGV4dCBtYXAiO25bY109MCxjKyssbS0tfX1lbHNlIG5bY109ZC11LGMrK31yZXR1cm4gdC5iaXRPZmZzZXQ+PTE2JiYodC5hY2N1bXVsYXRvcjMyPXQuc2hvcnRCdWZmZXJbdC5oYWxmT2Zmc2V0KytdPDwxNnx0LmFjY3VtdWxhdG9yMzI+Pj4xNix0LmJpdE9mZnNldC09MTYpLGgodCwxKT09MSYmRihuLGUpLGl9ZnVuY3Rpb24gSyhlLG4sdCl7dmFyIGk9ZS5yaW5ncyxhPTQrbioyO2UuYml0T2Zmc2V0Pj0xNiYmKGUuYWNjdW11bGF0b3IzMj1lLnNob3J0QnVmZmVyW2UuaGFsZk9mZnNldCsrXTw8MTZ8ZS5hY2N1bXVsYXRvcjMyPj4+MTYsZS5iaXRPZmZzZXQtPTE2KTt2YXIgdT1nKGUuYmxvY2tUcmVlcywyKm4sZSkscj1QKGUuYmxvY2tUcmVlcywyKm4rMSxlKTtyZXR1cm4gdT09MT91PWlbYSsxXSsxOnU9PTA/dT1pW2FdOnUtPTIsdT49dCYmKHUtPXQpLGlbYV09aVthKzFdLGlbYSsxXT11LHJ9ZnVuY3Rpb24gbjAoZSl7ZS5saXRlcmFsQmxvY2tMZW5ndGg9SyhlLDAsZS5udW1MaXRlcmFsQmxvY2tUeXBlcyk7dmFyIG49ZS5yaW5nc1s1XTtlLmNvbnRleHRNYXBTbGljZT1uPDw2LGUubGl0ZXJhbFRyZWVJZHg9ZS5jb250ZXh0TWFwW2UuY29udGV4dE1hcFNsaWNlXSYyNTU7dmFyIHQ9ZS5jb250ZXh0TW9kZXNbbl07ZS5jb250ZXh0TG9va3VwT2Zmc2V0MT10PDw5LGUuY29udGV4dExvb2t1cE9mZnNldDI9ZS5jb250ZXh0TG9va3VwT2Zmc2V0MSsyNTZ9ZnVuY3Rpb24gYTAoZSl7ZS5jb21tYW5kQmxvY2tMZW5ndGg9SyhlLDEsZS5udW1Db21tYW5kQmxvY2tUeXBlcyksZS5jb21tYW5kVHJlZUlkeD1lLnJpbmdzWzddfWZ1bmN0aW9uIGMwKGUpe2UuZGlzdGFuY2VCbG9ja0xlbmd0aD1LKGUsMixlLm51bURpc3RhbmNlQmxvY2tUeXBlcyksZS5kaXN0Q29udGV4dE1hcFNsaWNlPWUucmluZ3NbOV08PDJ9ZnVuY3Rpb24gdTAoZSl7dmFyIG49ZS5tYXhSaW5nQnVmZmVyU2l6ZTtpZihuPmUuZXhwZWN0ZWRUb3RhbFNpemUpe2Zvcih2YXIgdD1lLmV4cGVjdGVkVG90YWxTaXplO24+PjE+dDspbj4+PTE7ZS5pbnB1dEVuZD09MCYmbjwxNjM4NCYmZS5tYXhSaW5nQnVmZmVyU2l6ZT49MTYzODQmJihuPTE2Mzg0KX1pZighKG48PWUucmluZ0J1ZmZlclNpemUpKXt2YXIgaT1uKzM3LGE9bmV3IEludDhBcnJheShpKTtlLnJpbmdCdWZmZXIubGVuZ3RoIT0wJiZhLnNldChlLnJpbmdCdWZmZXIuc3ViYXJyYXkoMCwwK2UucmluZ0J1ZmZlclNpemUpLDApLGUucmluZ0J1ZmZlcj1hLGUucmluZ0J1ZmZlclNpemU9bn19ZnVuY3Rpb24gWDAoZSl7aWYoZS5pbnB1dEVuZCE9MCl7ZS5uZXh0UnVubmluZ1N0YXRlPTEwLGUucnVubmluZ1N0YXRlPTEyO3JldHVybn1lLmxpdGVyYWxUcmVlR3JvdXA9bmV3IEludDMyQXJyYXkoMCksZS5jb21tYW5kVHJlZUdyb3VwPW5ldyBJbnQzMkFycmF5KDApLGUuZGlzdGFuY2VUcmVlR3JvdXA9bmV3IEludDMyQXJyYXkoMCksZS5oYWxmT2Zmc2V0PjIwMzAmJkwoZSksZihlKSwhKGUubWV0YUJsb2NrTGVuZ3RoPT0wJiZlLmlzTWV0YWRhdGE9PTApJiYoZS5pc1VuY29tcHJlc3NlZCE9MHx8ZS5pc01ldGFkYXRhIT0wPyhEMChlKSxlLnJ1bm5pbmdTdGF0ZT1lLmlzTWV0YWRhdGEhPTA/NTo2KTplLnJ1bm5pbmdTdGF0ZT0zLGUuaXNNZXRhZGF0YT09MCYmKGUuZXhwZWN0ZWRUb3RhbFNpemUrPWUubWV0YUJsb2NrTGVuZ3RoLGUuZXhwZWN0ZWRUb3RhbFNpemU+MTw8MzAmJihlLmV4cGVjdGVkVG90YWxTaXplPTE8PDMwKSxlLnJpbmdCdWZmZXJTaXplPGUubWF4UmluZ0J1ZmZlclNpemUmJnUwKGUpKSl9ZnVuY3Rpb24gdzAoZSxuLHQpe3ZhciBpPWUuYmxvY2tUcmVlc1syKm5dO2lmKHQ8PTEpcmV0dXJuIGUuYmxvY2tUcmVlc1syKm4rMV09aSxlLmJsb2NrVHJlZXNbMipuKzJdPWksMTw8Mjg7dmFyIGE9dCsyO2krPVkoYSxhLGUuYmxvY2tUcmVlcywyKm4sZSksZS5ibG9ja1RyZWVzWzIqbisxXT1pO3ZhciB1PTI2O3JldHVybiBpKz1ZKHUsdSxlLmJsb2NrVHJlZXMsMipuKzEsZSksZS5ibG9ja1RyZWVzWzIqbisyXT1pLFAoZS5ibG9ja1RyZWVzLDIqbisxLGUpfWZ1bmN0aW9uIF8wKGUsbil7Zm9yKHZhciB0PWUuZGlzdEV4dHJhQml0cyxpPWUuZGlzdE9mZnNldCxhPWUuZGlzdGFuY2VQb3N0Zml4Qml0cyx1PWUubnVtRGlyZWN0RGlzdGFuY2VDb2RlcyxyPTE8PGEsbz0xLGw9MCxzPTE2LGM9MDtjPHU7KytjKXRbc109MCxpW3NdPWMrMSwrK3M7Zm9yKDtzPG47KXtmb3IodmFyIGQ9dSsoKDIrbDw8byktNDw8YSkrMSxjPTA7YzxyOysrYyl0W3NdPW8saVtzXT1kK2MsKytzO289bytsLGw9bF4xfX1mdW5jdGlvbiB6MChlKXtlLm51bUxpdGVyYWxCbG9ja1R5cGVzPWkwKGUpKzEsZS5saXRlcmFsQmxvY2tMZW5ndGg9dzAoZSwwLGUubnVtTGl0ZXJhbEJsb2NrVHlwZXMpLGUubnVtQ29tbWFuZEJsb2NrVHlwZXM9aTAoZSkrMSxlLmNvbW1hbmRCbG9ja0xlbmd0aD13MChlLDEsZS5udW1Db21tYW5kQmxvY2tUeXBlcyksZS5udW1EaXN0YW5jZUJsb2NrVHlwZXM9aTAoZSkrMSxlLmRpc3RhbmNlQmxvY2tMZW5ndGg9dzAoZSwyLGUubnVtRGlzdGFuY2VCbG9ja1R5cGVzKSxlLmhhbGZPZmZzZXQ+MjAzMCYmTChlKSxlLmJpdE9mZnNldD49MTYmJihlLmFjY3VtdWxhdG9yMzI9ZS5zaG9ydEJ1ZmZlcltlLmhhbGZPZmZzZXQrK108PDE2fGUuYWNjdW11bGF0b3IzMj4+PjE2LGUuYml0T2Zmc2V0LT0xNiksZS5kaXN0YW5jZVBvc3RmaXhCaXRzPWgoZSwyKSxlLm51bURpcmVjdERpc3RhbmNlQ29kZXM9aChlLDQpPDxlLmRpc3RhbmNlUG9zdGZpeEJpdHMsZS5kaXN0YW5jZVBvc3RmaXhNYXNrPSgxPDxlLmRpc3RhbmNlUG9zdGZpeEJpdHMpLTEsZS5jb250ZXh0TW9kZXM9bmV3IEludDhBcnJheShlLm51bUxpdGVyYWxCbG9ja1R5cGVzKTtmb3IodmFyIG49MDtuPGUubnVtTGl0ZXJhbEJsb2NrVHlwZXM7KXtmb3IodmFyIHQ9VihuKzk2LGUubnVtTGl0ZXJhbEJsb2NrVHlwZXMpO248dDsrK24pZS5iaXRPZmZzZXQ+PTE2JiYoZS5hY2N1bXVsYXRvcjMyPWUuc2hvcnRCdWZmZXJbZS5oYWxmT2Zmc2V0KytdPDwxNnxlLmFjY3VtdWxhdG9yMzI+Pj4xNixlLmJpdE9mZnNldC09MTYpLGUuY29udGV4dE1vZGVzW25dPWgoZSwyKTtlLmhhbGZPZmZzZXQ+MjAzMCYmTChlKX1lLmNvbnRleHRNYXA9bmV3IEludDhBcnJheShlLm51bUxpdGVyYWxCbG9ja1R5cGVzPDw2KTt2YXIgaT1EKGUubnVtTGl0ZXJhbEJsb2NrVHlwZXM8PDYsZS5jb250ZXh0TWFwLGUpO2UudHJpdmlhbExpdGVyYWxDb250ZXh0PTE7Zm9yKHZhciBhPTA7YTxlLm51bUxpdGVyYWxCbG9ja1R5cGVzPDw2O2ErKylpZihlLmNvbnRleHRNYXBbYV0hPWE+PjYpe2UudHJpdmlhbExpdGVyYWxDb250ZXh0PTA7YnJlYWt9ZS5kaXN0Q29udGV4dE1hcD1uZXcgSW50OEFycmF5KGUubnVtRGlzdGFuY2VCbG9ja1R5cGVzPDwyKTt2YXIgdT1EKGUubnVtRGlzdGFuY2VCbG9ja1R5cGVzPDwyLGUuZGlzdENvbnRleHRNYXAsZSk7ZS5saXRlcmFsVHJlZUdyb3VwPVkwKDI1NiwyNTYsaSxlKSxlLmNvbW1hbmRUcmVlR3JvdXA9WTAoNzA0LDcwNCxlLm51bUNvbW1hbmRCbG9ja1R5cGVzLGUpO3ZhciByPW0wKGUuZGlzdGFuY2VQb3N0Zml4Qml0cyxlLm51bURpcmVjdERpc3RhbmNlQ29kZXMsMjQpLG89cjtlLmlzTGFyZ2VXaW5kb3c9PTEmJihyPW0wKGUuZGlzdGFuY2VQb3N0Zml4Qml0cyxlLm51bURpcmVjdERpc3RhbmNlQ29kZXMsNjIpLG89ZzAoMjE0NzQ4MzY0NCxlLmRpc3RhbmNlUG9zdGZpeEJpdHMsZS5udW1EaXJlY3REaXN0YW5jZUNvZGVzKSksZS5kaXN0YW5jZVRyZWVHcm91cD1ZMChyLG8sdSxlKSxfMChlLG8pLGUuY29udGV4dE1hcFNsaWNlPTAsZS5kaXN0Q29udGV4dE1hcFNsaWNlPTAsZS5jb250ZXh0TG9va3VwT2Zmc2V0MT1lLmNvbnRleHRNb2Rlc1swXSo1MTIsZS5jb250ZXh0TG9va3VwT2Zmc2V0Mj1lLmNvbnRleHRMb29rdXBPZmZzZXQxKzI1NixlLmxpdGVyYWxUcmVlSWR4PTAsZS5jb21tYW5kVHJlZUlkeD0wLGUucmluZ3NbNF09MSxlLnJpbmdzWzVdPTAsZS5yaW5nc1s2XT0xLGUucmluZ3NbN109MCxlLnJpbmdzWzhdPTEsZS5yaW5nc1s5XT0wfWZ1bmN0aW9uIFIwKGUpe3ZhciBuPWUucmluZ0J1ZmZlcjtpZihlLm1ldGFCbG9ja0xlbmd0aDw9MCl7UzAoZSksZS5ydW5uaW5nU3RhdGU9MjtyZXR1cm59dmFyIHQ9VihlLnJpbmdCdWZmZXJTaXplLWUucG9zLGUubWV0YUJsb2NrTGVuZ3RoKTtpZihWMChlLG4sZS5wb3MsdCksZS5tZXRhQmxvY2tMZW5ndGgtPXQsZS5wb3MrPXQsZS5wb3M9PWUucmluZ0J1ZmZlclNpemUpe2UubmV4dFJ1bm5pbmdTdGF0ZT02LGUucnVubmluZ1N0YXRlPTEyO3JldHVybn1TMChlKSxlLnJ1bm5pbmdTdGF0ZT0yfWZ1bmN0aW9uIE0wKGUpe3ZhciBuPVYoZS5vdXRwdXRMZW5ndGgtZS5vdXRwdXRVc2VkLGUucmluZ0J1ZmZlckJ5dGVzUmVhZHktZS5yaW5nQnVmZmVyQnl0ZXNXcml0dGVuKTtyZXR1cm4gbiE9MCYmKGUub3V0cHV0LnNldChlLnJpbmdCdWZmZXIuc3ViYXJyYXkoZS5yaW5nQnVmZmVyQnl0ZXNXcml0dGVuLGUucmluZ0J1ZmZlckJ5dGVzV3JpdHRlbituKSxlLm91dHB1dE9mZnNldCtlLm91dHB1dFVzZWQpLGUub3V0cHV0VXNlZCs9bixlLnJpbmdCdWZmZXJCeXRlc1dyaXR0ZW4rPW4pLGUub3V0cHV0VXNlZDxlLm91dHB1dExlbmd0aD8xOjB9ZnVuY3Rpb24gWTAoZSxuLHQsaSl7Zm9yKHZhciBhPUpbbiszMT4+NV0sdT1uZXcgSW50MzJBcnJheSh0K3QqYSkscj10LG89MDtvPHQ7KytvKXVbb109cixyKz1ZKGUsbix1LG8saSk7cmV0dXJuIHV9ZnVuY3Rpb24gQTAoZSl7dmFyIG49ZS5yaW5nQnVmZmVyU2l6ZTtyZXR1cm4gZS5pc0VhZ2VyIT0wJiYobj1WKG4sZS5yaW5nQnVmZmVyQnl0ZXNXcml0dGVuK2Uub3V0cHV0TGVuZ3RoLWUub3V0cHV0VXNlZCkpLG59ZnVuY3Rpb24gVTAoZSl7aWYoZS5ydW5uaW5nU3RhdGU9PTApdGhyb3ciQ2FuJ3QgZGVjb21wcmVzcyB1bnRpbCBpbml0aWFsaXplZCI7aWYoZS5ydW5uaW5nU3RhdGU9PTExKXRocm93IkNhbid0IGRlY29tcHJlc3MgYWZ0ZXIgY2xvc2UiO2lmKGUucnVubmluZ1N0YXRlPT0xKXt2YXIgbj1OKGUpO2lmKG49PS0xKXRocm93IkludmFsaWQgJ3dpbmRvd0JpdHMnIGNvZGUiO2UubWF4UmluZ0J1ZmZlclNpemU9MTw8bixlLm1heEJhY2t3YXJkRGlzdGFuY2U9ZS5tYXhSaW5nQnVmZmVyU2l6ZS0xNixlLnJ1bm5pbmdTdGF0ZT0yfWZvcih2YXIgdD1BMChlKSxpPWUucmluZ0J1ZmZlclNpemUtMSxhPWUucmluZ0J1ZmZlcjtlLnJ1bm5pbmdTdGF0ZSE9MTA7KXN3aXRjaChlLnJ1bm5pbmdTdGF0ZSl7Y2FzZSAyOmlmKGUubWV0YUJsb2NrTGVuZ3RoPDApdGhyb3ciSW52YWxpZCBtZXRhYmxvY2sgbGVuZ3RoIjtYMChlKSx0PUEwKGUpLGk9ZS5yaW5nQnVmZmVyU2l6ZS0xLGE9ZS5yaW5nQnVmZmVyO2NvbnRpbnVlO2Nhc2UgMzp6MChlKSxlLnJ1bm5pbmdTdGF0ZT00O2Nhc2UgNDppZihlLm1ldGFCbG9ja0xlbmd0aDw9MCl7ZS5ydW5uaW5nU3RhdGU9Mjtjb250aW51ZX1lLmhhbGZPZmZzZXQ+MjAzMCYmTChlKSxlLmNvbW1hbmRCbG9ja0xlbmd0aD09MCYmYTAoZSksZS5jb21tYW5kQmxvY2tMZW5ndGgtLSxlLmJpdE9mZnNldD49MTYmJihlLmFjY3VtdWxhdG9yMzI9ZS5zaG9ydEJ1ZmZlcltlLmhhbGZPZmZzZXQrK108PDE2fGUuYWNjdW11bGF0b3IzMj4+PjE2LGUuYml0T2Zmc2V0LT0xNik7dmFyIHU9ZyhlLmNvbW1hbmRUcmVlR3JvdXAsZS5jb21tYW5kVHJlZUlkeCxlKTw8MixyPXQwW3VdLG89dDBbdSsxXSxsPXQwW3UrMl07ZS5kaXN0YW5jZUNvZGU9dDBbdSszXSxlLmJpdE9mZnNldD49MTYmJihlLmFjY3VtdWxhdG9yMzI9ZS5zaG9ydEJ1ZmZlcltlLmhhbGZPZmZzZXQrK108PDE2fGUuYWNjdW11bGF0b3IzMj4+PjE2LGUuYml0T2Zmc2V0LT0xNik7dmFyIHM9ciYyNTU7ZS5pbnNlcnRMZW5ndGg9bysoczw9MTY/aChlLHMpOmIwKGUscykpLGUuYml0T2Zmc2V0Pj0xNiYmKGUuYWNjdW11bGF0b3IzMj1lLnNob3J0QnVmZmVyW2UuaGFsZk9mZnNldCsrXTw8MTZ8ZS5hY2N1bXVsYXRvcjMyPj4+MTYsZS5iaXRPZmZzZXQtPTE2KTt2YXIgcz1yPj44O2UuY29weUxlbmd0aD1sKyhzPD0xNj9oKGUscyk6YjAoZSxzKSksZS5qPTAsZS5ydW5uaW5nU3RhdGU9NztjYXNlIDc6aWYoZS50cml2aWFsTGl0ZXJhbENvbnRleHQhPTApe2Zvcig7ZS5qPGUuaW5zZXJ0TGVuZ3RoOylpZihlLmhhbGZPZmZzZXQ+MjAzMCYmTChlKSxlLmxpdGVyYWxCbG9ja0xlbmd0aD09MCYmbjAoZSksZS5saXRlcmFsQmxvY2tMZW5ndGgtLSxlLmJpdE9mZnNldD49MTYmJihlLmFjY3VtdWxhdG9yMzI9ZS5zaG9ydEJ1ZmZlcltlLmhhbGZPZmZzZXQrK108PDE2fGUuYWNjdW11bGF0b3IzMj4+PjE2LGUuYml0T2Zmc2V0LT0xNiksYVtlLnBvc109ZyhlLmxpdGVyYWxUcmVlR3JvdXAsZS5saXRlcmFsVHJlZUlkeCxlKSxlLnBvcysrLGUuaisrLGUucG9zPj10KXtlLm5leHRSdW5uaW5nU3RhdGU9NyxlLnJ1bm5pbmdTdGF0ZT0xMjticmVha319ZWxzZSBmb3IodmFyIGM9YVtlLnBvcy0xJmldJjI1NSxkPWFbZS5wb3MtMiZpXSYyNTU7ZS5qPGUuaW5zZXJ0TGVuZ3RoOyl7ZS5oYWxmT2Zmc2V0PjIwMzAmJkwoZSksZS5saXRlcmFsQmxvY2tMZW5ndGg9PTAmJm4wKGUpO3ZhciBtPUIwW2UuY29udGV4dExvb2t1cE9mZnNldDErY118QjBbZS5jb250ZXh0TG9va3VwT2Zmc2V0MitkXSx3PWUuY29udGV4dE1hcFtlLmNvbnRleHRNYXBTbGljZSttXSYyNTU7aWYoZS5saXRlcmFsQmxvY2tMZW5ndGgtLSxkPWMsZS5iaXRPZmZzZXQ+PTE2JiYoZS5hY2N1bXVsYXRvcjMyPWUuc2hvcnRCdWZmZXJbZS5oYWxmT2Zmc2V0KytdPDwxNnxlLmFjY3VtdWxhdG9yMzI+Pj4xNixlLmJpdE9mZnNldC09MTYpLGM9ZyhlLmxpdGVyYWxUcmVlR3JvdXAsdyxlKSxhW2UucG9zXT1jLGUucG9zKyssZS5qKyssZS5wb3M+PXQpe2UubmV4dFJ1bm5pbmdTdGF0ZT03LGUucnVubmluZ1N0YXRlPTEyO2JyZWFrfX1pZihlLnJ1bm5pbmdTdGF0ZSE9Nyljb250aW51ZTtpZihlLm1ldGFCbG9ja0xlbmd0aC09ZS5pbnNlcnRMZW5ndGgsZS5tZXRhQmxvY2tMZW5ndGg8PTApe2UucnVubmluZ1N0YXRlPTQ7Y29udGludWV9dmFyICQ9ZS5kaXN0YW5jZUNvZGU7aWYoJDwwKWUuZGlzdGFuY2U9ZS5yaW5nc1tlLmRpc3RSYklkeF07ZWxzZXtlLmhhbGZPZmZzZXQ+MjAzMCYmTChlKSxlLmRpc3RhbmNlQmxvY2tMZW5ndGg9PTAmJmMwKGUpLGUuZGlzdGFuY2VCbG9ja0xlbmd0aC0tLGUuYml0T2Zmc2V0Pj0xNiYmKGUuYWNjdW11bGF0b3IzMj1lLnNob3J0QnVmZmVyW2UuaGFsZk9mZnNldCsrXTw8MTZ8ZS5hY2N1bXVsYXRvcjMyPj4+MTYsZS5iaXRPZmZzZXQtPTE2KTt2YXIgXz1lLmRpc3RDb250ZXh0TWFwW2UuZGlzdENvbnRleHRNYXBTbGljZSskXSYyNTU7aWYoJD1nKGUuZGlzdGFuY2VUcmVlR3JvdXAsXyxlKSwkPDE2KXt2YXIgVT1lLmRpc3RSYklkeCtlMFskXSYzO2lmKGUuZGlzdGFuY2U9ZS5yaW5nc1tVXStGMFskXSxlLmRpc3RhbmNlPDApdGhyb3ciTmVnYXRpdmUgZGlzdGFuY2UifWVsc2V7dmFyIHM9ZS5kaXN0RXh0cmFCaXRzWyRdLE87ZS5iaXRPZmZzZXQrczw9MzI/Tz1oKGUscyk6KGUuYml0T2Zmc2V0Pj0xNiYmKGUuYWNjdW11bGF0b3IzMj1lLnNob3J0QnVmZmVyW2UuaGFsZk9mZnNldCsrXTw8MTZ8ZS5hY2N1bXVsYXRvcjMyPj4+MTYsZS5iaXRPZmZzZXQtPTE2KSxPPXM8PTE2P2goZSxzKTpiMChlLHMpKSxlLmRpc3RhbmNlPWUuZGlzdE9mZnNldFskXSsoTzw8ZS5kaXN0YW5jZVBvc3RmaXhCaXRzKX19aWYoZS5tYXhEaXN0YW5jZSE9ZS5tYXhCYWNrd2FyZERpc3RhbmNlJiZlLnBvczxlLm1heEJhY2t3YXJkRGlzdGFuY2U/ZS5tYXhEaXN0YW5jZT1lLnBvczplLm1heERpc3RhbmNlPWUubWF4QmFja3dhcmREaXN0YW5jZSxlLmRpc3RhbmNlPmUubWF4RGlzdGFuY2Upe2UucnVubmluZ1N0YXRlPTk7Y29udGludWV9aWYoJD4wJiYoZS5kaXN0UmJJZHg9ZS5kaXN0UmJJZHgrMSYzLGUucmluZ3NbZS5kaXN0UmJJZHhdPWUuZGlzdGFuY2UpLGUuY29weUxlbmd0aD5lLm1ldGFCbG9ja0xlbmd0aCl0aHJvdyJJbnZhbGlkIGJhY2t3YXJkIHJlZmVyZW5jZSI7ZS5qPTAsZS5ydW5uaW5nU3RhdGU9ODtjYXNlIDg6dmFyIHE9ZS5wb3MtZS5kaXN0YW5jZSZpLEk9ZS5wb3Msej1lLmNvcHlMZW5ndGgtZS5qLG8wPXEreixIPUkrejtpZihvMDxpJiZIPGkpe2lmKHo8MTJ8fG8wPkkmJkg+cSlmb3IodmFyIEE9MDtBPHo7QSs9NClhW0krK109YVtxKytdLGFbSSsrXT1hW3ErK10sYVtJKytdPWFbcSsrXSxhW0krK109YVtxKytdO2Vsc2UgYS5jb3B5V2l0aGluKEkscSxvMCk7ZS5qKz16LGUubWV0YUJsb2NrTGVuZ3RoLT16LGUucG9zKz16fWVsc2UgZm9yKDtlLmo8ZS5jb3B5TGVuZ3RoOylpZihhW2UucG9zXT1hW2UucG9zLWUuZGlzdGFuY2UmaV0sZS5tZXRhQmxvY2tMZW5ndGgtLSxlLnBvcysrLGUuaisrLGUucG9zPj10KXtlLm5leHRSdW5uaW5nU3RhdGU9OCxlLnJ1bm5pbmdTdGF0ZT0xMjticmVha31lLnJ1bm5pbmdTdGF0ZT09OCYmKGUucnVubmluZ1N0YXRlPTQpO2NvbnRpbnVlO2Nhc2UgOTppZihlLmRpc3RhbmNlPjIxNDc0ODM2NDQpdGhyb3ciSW52YWxpZCBiYWNrd2FyZCByZWZlcmVuY2UiO2lmKGUuY29weUxlbmd0aD49NCYmZS5jb3B5TGVuZ3RoPD0yNCl7dmFyIHk9czBbZS5jb3B5TGVuZ3RoXSxkMD1lLmRpc3RhbmNlLWUubWF4RGlzdGFuY2UtMSxFPVNbZS5jb3B5TGVuZ3RoXSxXPSgxPDxFKS0xLEc9ZDAmVyxaPWQwPj4+RTtpZih5Kz1HKmUuY29weUxlbmd0aCxaPDEyMSl7dmFyIGgwPUcwKGEsZS5wb3MsUix5LGUuY29weUxlbmd0aCwkMCxaKTtpZihlLnBvcys9aDAsZS5tZXRhQmxvY2tMZW5ndGgtPWgwLGUucG9zPj10KXtlLm5leHRSdW5uaW5nU3RhdGU9NCxlLnJ1bm5pbmdTdGF0ZT0xMjtjb250aW51ZX19ZWxzZSB0aHJvdyJJbnZhbGlkIGJhY2t3YXJkIHJlZmVyZW5jZSJ9ZWxzZSB0aHJvdyJJbnZhbGlkIGJhY2t3YXJkIHJlZmVyZW5jZSI7ZS5ydW5uaW5nU3RhdGU9NDtjb250aW51ZTtjYXNlIDU6Zm9yKDtlLm1ldGFCbG9ja0xlbmd0aD4wOyllLmhhbGZPZmZzZXQ+MjAzMCYmTChlKSxlLmJpdE9mZnNldD49MTYmJihlLmFjY3VtdWxhdG9yMzI9ZS5zaG9ydEJ1ZmZlcltlLmhhbGZPZmZzZXQrK108PDE2fGUuYWNjdW11bGF0b3IzMj4+PjE2LGUuYml0T2Zmc2V0LT0xNiksaChlLDgpLGUubWV0YUJsb2NrTGVuZ3RoLS07ZS5ydW5uaW5nU3RhdGU9Mjtjb250aW51ZTtjYXNlIDY6UjAoZSk7Y29udGludWU7Y2FzZSAxMjplLnJpbmdCdWZmZXJCeXRlc1JlYWR5PVYoZS5wb3MsZS5yaW5nQnVmZmVyU2l6ZSksZS5ydW5uaW5nU3RhdGU9MTM7Y2FzZSAxMzppZihNMChlKT09MClyZXR1cm47ZS5wb3M+PWUubWF4QmFja3dhcmREaXN0YW5jZSYmKGUubWF4RGlzdGFuY2U9ZS5tYXhCYWNrd2FyZERpc3RhbmNlKSxlLnBvcz49ZS5yaW5nQnVmZmVyU2l6ZSYmKGUucG9zPmUucmluZ0J1ZmZlclNpemUmJmEuY29weVdpdGhpbigwLGUucmluZ0J1ZmZlclNpemUsZS5wb3MpLGUucG9zJj1pLGUucmluZ0J1ZmZlckJ5dGVzV3JpdHRlbj0wKSxlLnJ1bm5pbmdTdGF0ZT1lLm5leHRSdW5uaW5nU3RhdGU7Y29udGludWU7ZGVmYXVsdDp0aHJvdyJVbmV4cGVjdGVkIHN0YXRlICIrZS5ydW5uaW5nU3RhdGV9aWYoZS5ydW5uaW5nU3RhdGU9PTEwKXtpZihlLm1ldGFCbG9ja0xlbmd0aDwwKXRocm93IkludmFsaWQgbWV0YWJsb2NrIGxlbmd0aCI7RDAoZSksQzAoZSwxKX19ZnVuY3Rpb24gSDAoZSxuLHQpe3RoaXMubnVtVHJhbnNmb3Jtcz0wLHRoaXMudHJpcGxldHM9bmV3IEludDMyQXJyYXkoMCksdGhpcy5wcmVmaXhTdWZmaXhTdG9yYWdlPW5ldyBJbnQ4QXJyYXkoMCksdGhpcy5wcmVmaXhTdWZmaXhIZWFkcz1uZXcgSW50MzJBcnJheSgwKSx0aGlzLnBhcmFtcz1uZXcgSW50MTZBcnJheSgwKSx0aGlzLm51bVRyYW5zZm9ybXM9ZSx0aGlzLnRyaXBsZXRzPW5ldyBJbnQzMkFycmF5KGUqMyksdGhpcy5wYXJhbXM9bmV3IEludDE2QXJyYXkoZSksdGhpcy5wcmVmaXhTdWZmaXhTdG9yYWdlPW5ldyBJbnQ4QXJyYXkobiksdGhpcy5wcmVmaXhTdWZmaXhIZWFkcz1uZXcgSW50MzJBcnJheSh0KzEpfXZhciAkMD1uZXcgSDAoMTIxLDE2Nyw1MCk7ZnVuY3Rpb24gVzAoZSxuLHQsaSxhKXtmb3IodmFyIHU9aS5sZW5ndGgscj0xLG89MCxsPTA7bDx1OysrbCl7dmFyIHM9aS5jaGFyQ29kZUF0KGwpO3M9PTM1P25bcisrXT1vOmVbbysrXT1zfWZvcih2YXIgbD0wO2w8MzYzOysrbCl0W2xdPWEuY2hhckNvZGVBdChsKS0zMn1XMCgkMC5wcmVmaXhTdWZmaXhTdG9yYWdlLCQwLnByZWZpeFN1ZmZpeEhlYWRzLCQwLnRyaXBsZXRzLGAjICNzICMsICNlICMuIyB0aGUgIy5jb20vI8OCwqAjIG9mICMgYW5kICMgaW4gIyB0byAjIiMiPiMKI10jIGZvciAjIGEgIyB0aGF0ICMuICMgd2l0aCAjJyMgZnJvbSAjIGJ5ICMuIFRoZSAjIG9uICMgYXMgIyBpcyAjaW5nICMKCSM6I2VkICMoIyBhdCAjbHkgIz0iIyBvZiB0aGUgIy4gVGhpcyAjLCMgbm90ICNlciAjYWwgIz0nI2Z1bCAjaXZlICNsZXNzICNlc3QgI2l6ZSAjb3VzICNgLGAgICAgICEhICEgLCAgKiEgICYhICAiICEgICkgKiAgICogLSAgISAjICEgICMhKiEgICsgICwkICEgIC0gICUgIC4gIC8gIyAgIDAgIDEgLiAgIiAgIDIgIDMhKiAgIDQlICAhICMgLyAgIDUgIDYgIDcgIDggMCAgMSAmICAgJCAgIDkgKyAgIDogIDsgIDwgJyAgIT0gID4gID8hIDQgIEAgNCAgMiAgJiAgIEEgKiMgKCAgIEIgIEMmICkgJSAgKSAhKiMgKi0lIEEgKyEgKi4gIEQhICUnICAmIEUgKjYgIEYgIEclICEgKkEgKiUgIEghIEQgIEkhKyEgIEohKyAgIEsgKy0gKjQhIEEgIEwhKjQgIE0gIE4gKzYgIE8hKiUgKy4hIEsgKkcgIFAgKyUoICAhIEcgKkQgK0QgIFEgKyMgKkshKkchK0QhKyMgK0cgK0EgKzQhKyUgK0shKzQhKkQhK0shKktgKTtmdW5jdGlvbiBHMChlLG4sdCxpLGEsdSxyKXt2YXIgbz1uLGw9dS50cmlwbGV0cyxzPXUucHJlZml4U3VmZml4U3RvcmFnZSxjPXUucHJlZml4U3VmZml4SGVhZHMsZD0zKnIsbT1sW2RdLHc9bFtkKzFdLCQ9bFtkKzJdLF89Y1ttXSxVPWNbbSsxXSxPPWNbJF0scT1jWyQrMV0sST13LTExLHo9dy0wO2ZvcigoSTwxfHxJPjkpJiYoST0wKSwoejwxfHx6PjkpJiYoej0wKTtfIT1VOyllW28rK109c1tfKytdO0k+YSYmKEk9YSksaSs9SSxhLT1JLGEtPXo7Zm9yKHZhciBvMD1hO28wPjA7KWVbbysrXT10W2krK10sbzAtLTtpZih3PT0xMHx8dz09MTEpe3ZhciBIPW8tYTtmb3Iodz09MTAmJihhPTEpO2E+MDspe3ZhciBBPWVbSF0mMjU1O0E8MTkyPyhBPj05NyYmQTw9MTIyJiYoZVtIXV49MzIpLEgrPTEsYS09MSk6QTwyMjQ/KGVbSCsxXV49MzIsSCs9MixhLT0yKTooZVtIKzJdXj01LEgrPTMsYS09Myl9fWVsc2UgaWYodz09MjF8fHc9PTIyKWZvcih2YXIgeT1vLWEsZDA9dS5wYXJhbXNbcl0sRT0oZDAmMzI3NjcpKygxNjc3NzIxNi0oZDAmMzI3NjgpKTthPjA7KXt2YXIgVz0xLEE9ZVt5XSYyNTU7aWYoQTwxMjgpRSs9QSxlW3ldPUUmMTI3O2Vsc2UgaWYoIShBPDE5Mikpe2lmKEE8MjI0KWlmKGE+PTIpe3ZhciBHPWVbeSsxXTtFKz1HJjYzfChBJjMxKTw8NixlW3ldPTE5MnxFPj42JjMxLGVbeSsxXT1HJjE5MnxFJjYzLFc9Mn1lbHNlIFc9YTtlbHNlIGlmKEE8MjQwKWlmKGE+PTMpe3ZhciBHPWVbeSsxXSxaPWVbeSsyXTtFKz1aJjYzfChHJjYzKTw8NnwoQSYxNSk8PDEyLGVbeV09MjI0fEU+PjEyJjE1LGVbeSsxXT1HJjE5MnxFPj42JjYzLGVbeSsyXT1aJjE5MnxFJjYzLFc9M31lbHNlIFc9YTtlbHNlIGlmKEE8MjQ4KWlmKGE+PTQpe3ZhciBHPWVbeSsxXSxaPWVbeSsyXSxoMD1lW3krM107RSs9aDAmNjN8KFomNjMpPDw2fChHJjYzKTw8MTJ8KEEmNyk8PDE4LGVbeV09MjQwfEU+PjE4JjcsZVt5KzFdPUcmMTkyfEU+PjEyJjYzLGVbeSsyXT1aJjE5MnxFPj42JjYzLGVbeSszXT1oMCYxOTJ8RSY2MyxXPTR9ZWxzZSBXPWF9eSs9VyxhLT1XLHc9PTIxJiYoYT0wKX1mb3IoO08hPXE7KWVbbysrXT1zW08rK107cmV0dXJuIG8tbn1mdW5jdGlvbiBFMChlLG4pe2Zvcih2YXIgdD0xPDxuLTE7ZSZ0Oyl0Pj49MTtyZXR1cm4oZSZ0LTEpK3R9ZnVuY3Rpb24gVDAoZSxuLHQsaSxhKXtkbyBpLT10LGVbbitpXT1hO3doaWxlKGk+MCl9ZnVuY3Rpb24gSjAoZSxuLHQpe2Zvcih2YXIgaT0xPDxuLXQ7bjwxNSYmKGktPWVbbl0sIShpPD0wKSk7KW4rKyxpPDw9MTtyZXR1cm4gbi10fWZ1bmN0aW9uIFEwKGUsbix0LGksYSl7dmFyIHU9ZVtuXSxyLG89bmV3IEludDMyQXJyYXkoYSksbD1uZXcgSW50MzJBcnJheSgxNikscz1uZXcgSW50MzJBcnJheSgxNiksYztmb3IoYz0wO2M8YTtjKyspbFtpW2NdXSsrO3NbMV09MDtmb3IodmFyIGQ9MTtkPDE1O2QrKylzW2QrMV09c1tkXStsW2RdO2ZvcihjPTA7YzxhO2MrKylpW2NdIT0wJiYob1tzW2lbY11dKytdPWMpO3ZhciBtPXQsdz0xPDxtLCQ9dztpZihzWzE1XT09MSl7Zm9yKHI9MDtyPCQ7cisrKWVbdStyXT1vWzBdO3JldHVybiAkfXI9MCxjPTA7Zm9yKHZhciBkPTEsXz0yO2Q8PXQ7ZCsrLF88PD0xKWZvcig7bFtkXT4wO2xbZF0tLSlUMChlLHUrcixfLHcsZDw8MTZ8b1tjKytdKSxyPUUwKHIsZCk7Zm9yKHZhciBVPSQtMSxPPS0xLHE9dSxkPXQrMSxfPTI7ZDw9MTU7ZCsrLF88PD0xKWZvcig7bFtkXT4wO2xbZF0tLSkociZVKSE9TyYmKHErPXcsbT1KMChsLGQsdCksdz0xPDxtLCQrPXcsTz1yJlUsZVt1K09dPW0rdDw8MTZ8cS11LU8pLFQwKGUscSsocj4+dCksXyx3LGQtdDw8MTZ8b1tjKytdKSxyPUUwKHIsZCk7cmV0dXJuICR9ZnVuY3Rpb24gTChlKXtpZihlLmVuZE9mU3RyZWFtUmVhY2hlZCE9MCl7aWYoeDAoZSk+PS0yKXJldHVybjt0aHJvdyJObyBtb3JlIGlucHV0In12YXIgbj1lLmhhbGZPZmZzZXQ8PDEsdD00MDk2LW47Zm9yKGUuYnl0ZUJ1ZmZlci5jb3B5V2l0aGluKDAsbiw0MDk2KSxlLmhhbGZPZmZzZXQ9MDt0PDQwOTY7KXt2YXIgaT00MDk2LXQsYT1qMChlLmlucHV0LGUuYnl0ZUJ1ZmZlcix0LGkpO2lmKGE8PTApe2UuZW5kT2ZTdHJlYW1SZWFjaGVkPTEsZS50YWlsQnl0ZXM9dCx0Kz0xO2JyZWFrfXQrPWF9WjAoZSx0KX1mdW5jdGlvbiBDMChlLG4pe2lmKGUuZW5kT2ZTdHJlYW1SZWFjaGVkIT0wKXt2YXIgdD0oZS5oYWxmT2Zmc2V0PDwxKSsoZS5iaXRPZmZzZXQrNz4+MyktNDtpZih0PmUudGFpbEJ5dGVzKXRocm93IlJlYWQgYWZ0ZXIgZW5kIjtpZihuIT0wJiZ0IT1lLnRhaWxCeXRlcyl0aHJvdyJVbnVzZWQgYnl0ZXMgYWZ0ZXIgZW5kIn19ZnVuY3Rpb24gaChlLG4pe3ZhciB0PWUuYWNjdW11bGF0b3IzMj4+PmUuYml0T2Zmc2V0JigxPDxuKS0xO3JldHVybiBlLmJpdE9mZnNldCs9bix0fWZ1bmN0aW9uIGIwKGUsbil7dmFyIHQ9aChlLDE2KTtyZXR1cm4gZS5hY2N1bXVsYXRvcjMyPWUuc2hvcnRCdWZmZXJbZS5oYWxmT2Zmc2V0KytdPDwxNnxlLmFjY3VtdWxhdG9yMzI+Pj4xNixlLmJpdE9mZnNldC09MTYsdHxoKGUsbi0xNik8PDE2fWZ1bmN0aW9uIEswKGUpe2UuYnl0ZUJ1ZmZlcj1uZXcgSW50OEFycmF5KDQxNjApLGUuYWNjdW11bGF0b3IzMj0wLGUuc2hvcnRCdWZmZXI9bmV3IEludDE2QXJyYXkoMjA4MCksZS5iaXRPZmZzZXQ9MzIsZS5oYWxmT2Zmc2V0PTIwNDgsZS5lbmRPZlN0cmVhbVJlYWNoZWQ9MCxJMChlKX1mdW5jdGlvbiBJMChlKXtlLmhhbGZPZmZzZXQ+MjAzMCYmTChlKSxDMChlLDApLGUuYWNjdW11bGF0b3IzMj1lLnNob3J0QnVmZmVyW2UuaGFsZk9mZnNldCsrXTw8MTZ8ZS5hY2N1bXVsYXRvcjMyPj4+MTYsZS5iaXRPZmZzZXQtPTE2LGUuYWNjdW11bGF0b3IzMj1lLnNob3J0QnVmZmVyW2UuaGFsZk9mZnNldCsrXTw8MTZ8ZS5hY2N1bXVsYXRvcjMyPj4+MTYsZS5iaXRPZmZzZXQtPTE2fWZ1bmN0aW9uIFMwKGUpe2UuYml0T2Zmc2V0PT0zMiYmSTAoZSl9ZnVuY3Rpb24gRDAoZSl7dmFyIG49MzItZS5iaXRPZmZzZXQmNztpZihuIT0wKXt2YXIgdD1oKGUsbik7aWYodCE9MCl0aHJvdyJDb3JydXB0ZWQgcGFkZGluZyBiaXRzIn19ZnVuY3Rpb24geDAoZSl7dmFyIG49MjA0ODtyZXR1cm4gZS5lbmRPZlN0cmVhbVJlYWNoZWQhPTAmJihuPWUudGFpbEJ5dGVzKzE+PjEpLG4tZS5oYWxmT2Zmc2V0fWZ1bmN0aW9uIFYwKGUsbix0LGkpe2lmKGUuYml0T2Zmc2V0JjcpdGhyb3ciVW5hbGlnbmVkIGNvcHlCeXRlcyI7Zm9yKDtlLmJpdE9mZnNldCE9MzImJmkhPTA7KW5bdCsrXT1lLmFjY3VtdWxhdG9yMzI+Pj5lLmJpdE9mZnNldCxlLmJpdE9mZnNldCs9OCxpLS07aWYoaSE9MCl7dmFyIGE9Vih4MChlKSxpPj4xKTtpZihhPjApe3ZhciB1PWUuaGFsZk9mZnNldDw8MSxyPWE8PDE7bi5zZXQoZS5ieXRlQnVmZmVyLnN1YmFycmF5KHUsdStyKSx0KSx0Kz1yLGktPXIsZS5oYWxmT2Zmc2V0Kz1hfWlmKGkhPTApe2lmKHgwKGUpPjApe2ZvcihlLmJpdE9mZnNldD49MTYmJihlLmFjY3VtdWxhdG9yMzI9ZS5zaG9ydEJ1ZmZlcltlLmhhbGZPZmZzZXQrK108PDE2fGUuYWNjdW11bGF0b3IzMj4+PjE2LGUuYml0T2Zmc2V0LT0xNik7aSE9MDspblt0KytdPWUuYWNjdW11bGF0b3IzMj4+PmUuYml0T2Zmc2V0LGUuYml0T2Zmc2V0Kz04LGktLTtDMChlLDApO3JldHVybn1mb3IoO2k+MDspe3ZhciBvPWowKGUuaW5wdXQsbix0LGkpO2lmKG89PS0xKXRocm93IlVuZXhwZWN0ZWQgZW5kIG9mIGlucHV0Ijt0Kz1vLGktPW99fX19ZnVuY3Rpb24gWjAoZSxuKXtmb3IodmFyIHQ9ZS5ieXRlQnVmZmVyLGk9bj4+MSxhPWUuc2hvcnRCdWZmZXIsdT0wO3U8aTsrK3UpYVt1XT10W3UqMl0mMjU1fCh0W3UqMisxXSYyNTUpPDw4fXZhciBCMD1uZXcgSW50MzJBcnJheSgyMDQ4KTtmdW5jdGlvbiBlZShlLG4sdCl7Zm9yKHZhciBpPTA7aTwyNTY7KytpKWVbaV09aSY2MyxlWzUxMitpXT1pPj4yLGVbMTc5MitpXT0yKyhpPj42KTtmb3IodmFyIGk9MDtpPDEyODsrK2kpZVsxMDI0K2ldPTQqKG4uY2hhckNvZGVBdChpKS0zMik7Zm9yKHZhciBpPTA7aTw2NDsrK2kpZVsxMTUyK2ldPWkmMSxlWzEyMTYraV09MisoaSYxKTtmb3IodmFyIGE9MTI4MCx1PTA7dTwxOTsrK3UpZm9yKHZhciByPXUmMyxvPXQuY2hhckNvZGVBdCh1KS0zMixpPTA7aTxvOysraSllW2ErK109cjtmb3IodmFyIGk9MDtpPDE2OysraSllWzE3OTIraV09MSxlWzIwMzIraV09NjtlWzE3OTJdPTAsZVsyMDQ3XT03O2Zvcih2YXIgaT0wO2k8MjU2OysraSllWzE1MzYraV09ZVsxNzkyK2ldPDwzfWVlKEIwLGAgICAgICAgICAhISAgISAgICAgICAgICAgICAgICAgICIjJCMjJSMkJicjIygjKSMrKysrKysrKysrKCgmKicjIywtLS0sLS0tLC0tLS0tLC0tLS0tLC0tLS0tJiMnIyMjLi8vLy4vLy8uLy8vLy8uLy8vLy8uLy8vLy8mIycjIGAsIkEvKiAgJzogICYgOiAkICDCgSBAIik7ZnVuY3Rpb24gdGUoKXt0aGlzLnJpbmdCdWZmZXI9bmV3IEludDhBcnJheSgwKSx0aGlzLmNvbnRleHRNb2Rlcz1uZXcgSW50OEFycmF5KDApLHRoaXMuY29udGV4dE1hcD1uZXcgSW50OEFycmF5KDApLHRoaXMuZGlzdENvbnRleHRNYXA9bmV3IEludDhBcnJheSgwKSx0aGlzLmRpc3RFeHRyYUJpdHM9bmV3IEludDhBcnJheSgwKSx0aGlzLm91dHB1dD1uZXcgSW50OEFycmF5KDApLHRoaXMuYnl0ZUJ1ZmZlcj1uZXcgSW50OEFycmF5KDApLHRoaXMuc2hvcnRCdWZmZXI9bmV3IEludDE2QXJyYXkoMCksdGhpcy5pbnRCdWZmZXI9bmV3IEludDMyQXJyYXkoMCksdGhpcy5yaW5ncz1uZXcgSW50MzJBcnJheSgwKSx0aGlzLmJsb2NrVHJlZXM9bmV3IEludDMyQXJyYXkoMCksdGhpcy5saXRlcmFsVHJlZUdyb3VwPW5ldyBJbnQzMkFycmF5KDApLHRoaXMuY29tbWFuZFRyZWVHcm91cD1uZXcgSW50MzJBcnJheSgwKSx0aGlzLmRpc3RhbmNlVHJlZUdyb3VwPW5ldyBJbnQzMkFycmF5KDApLHRoaXMuZGlzdE9mZnNldD1uZXcgSW50MzJBcnJheSgwKSx0aGlzLnJ1bm5pbmdTdGF0ZT0wLHRoaXMubmV4dFJ1bm5pbmdTdGF0ZT0wLHRoaXMuYWNjdW11bGF0b3IzMj0wLHRoaXMuYml0T2Zmc2V0PTAsdGhpcy5oYWxmT2Zmc2V0PTAsdGhpcy50YWlsQnl0ZXM9MCx0aGlzLmVuZE9mU3RyZWFtUmVhY2hlZD0wLHRoaXMubWV0YUJsb2NrTGVuZ3RoPTAsdGhpcy5pbnB1dEVuZD0wLHRoaXMuaXNVbmNvbXByZXNzZWQ9MCx0aGlzLmlzTWV0YWRhdGE9MCx0aGlzLmxpdGVyYWxCbG9ja0xlbmd0aD0wLHRoaXMubnVtTGl0ZXJhbEJsb2NrVHlwZXM9MCx0aGlzLmNvbW1hbmRCbG9ja0xlbmd0aD0wLHRoaXMubnVtQ29tbWFuZEJsb2NrVHlwZXM9MCx0aGlzLmRpc3RhbmNlQmxvY2tMZW5ndGg9MCx0aGlzLm51bURpc3RhbmNlQmxvY2tUeXBlcz0wLHRoaXMucG9zPTAsdGhpcy5tYXhEaXN0YW5jZT0wLHRoaXMuZGlzdFJiSWR4PTAsdGhpcy50cml2aWFsTGl0ZXJhbENvbnRleHQ9MCx0aGlzLmxpdGVyYWxUcmVlSWR4PTAsdGhpcy5jb21tYW5kVHJlZUlkeD0wLHRoaXMuaj0wLHRoaXMuaW5zZXJ0TGVuZ3RoPTAsdGhpcy5jb250ZXh0TWFwU2xpY2U9MCx0aGlzLmRpc3RDb250ZXh0TWFwU2xpY2U9MCx0aGlzLmNvbnRleHRMb29rdXBPZmZzZXQxPTAsdGhpcy5jb250ZXh0TG9va3VwT2Zmc2V0Mj0wLHRoaXMuZGlzdGFuY2VDb2RlPTAsdGhpcy5udW1EaXJlY3REaXN0YW5jZUNvZGVzPTAsdGhpcy5kaXN0YW5jZVBvc3RmaXhNYXNrPTAsdGhpcy5kaXN0YW5jZVBvc3RmaXhCaXRzPTAsdGhpcy5kaXN0YW5jZT0wLHRoaXMuY29weUxlbmd0aD0wLHRoaXMubWF4QmFja3dhcmREaXN0YW5jZT0wLHRoaXMubWF4UmluZ0J1ZmZlclNpemU9MCx0aGlzLnJpbmdCdWZmZXJTaXplPTAsdGhpcy5leHBlY3RlZFRvdGFsU2l6ZT0wLHRoaXMub3V0cHV0T2Zmc2V0PTAsdGhpcy5vdXRwdXRMZW5ndGg9MCx0aGlzLm91dHB1dFVzZWQ9MCx0aGlzLnJpbmdCdWZmZXJCeXRlc1dyaXR0ZW49MCx0aGlzLnJpbmdCdWZmZXJCeXRlc1JlYWR5PTAsdGhpcy5pc0VhZ2VyPTAsdGhpcy5pc0xhcmdlV2luZG93PTAsdGhpcy5pbnB1dD1udWxsLHRoaXMucmluZ0J1ZmZlcj1uZXcgSW50OEFycmF5KDApLHRoaXMucmluZ3M9bmV3IEludDMyQXJyYXkoMTApLHRoaXMucmluZ3NbMF09MTYsdGhpcy5yaW5nc1sxXT0xNSx0aGlzLnJpbmdzWzJdPTExLHRoaXMucmluZ3NbM109NH1mdW5jdGlvbiBpZShlLG4sdCxpKXt2YXIgYT1hZShuK3QpO2lmKGEubGVuZ3RoIT1lLmxlbmd0aCl0aHJvdyJDb3JydXB0ZWQgYnJvdGxpIGRpY3Rpb25hcnkiO2Zvcih2YXIgdT0wLHI9aS5sZW5ndGgsbz0wO288cjtvKz0yKXt2YXIgbD1pLmNoYXJDb2RlQXQobyktMzYscz1pLmNoYXJDb2RlQXQobysxKS0zNjt1Kz1sO2Zvcih2YXIgYz0wO2M8czsrK2MpYVt1XXw9MTI4LHUrK31lLnNldChhKX17dmFyIE8wPW5ldyBJbnQ4QXJyYXkoMTIyNzg0KTtpZShPMCxgdGltZWRvd25saWZlbGVmdGJhY2tjb2RlZGF0YXNob3dvbmx5c2l0ZWNpdHlvcGVuanVzdGxpa2VmcmVld29ya3RleHR5ZWFyb3ZlcmJvZHlsb3ZlZm9ybWJvb2twbGF5bGl2ZWxpbmVoZWxwaG9tZXNpZGVtb3Jld29yZGxvbmd0aGVtdmlld2ZpbmRwYWdlZGF5c2Z1bGxoZWFkdGVybWVhY2hhcmVhZnJvbXRydWVtYXJrYWJsZXVwb25oaWdoZGF0ZWxhbmRuZXdzZXZlbm5leHRjYXNlYm90aHBvc3R1c2VkbWFkZWhhbmRoZXJld2hhdG5hbWVMaW5rYmxvZ3NpemViYXNlaGVsZG1ha2VtYWludXNlcicpICtob2xkZW5kc3dpdGhOZXdzcmVhZHdlcmVzaWdudGFrZWhhdmVnYW1lc2VlbmNhbGxwYXRod2VsbHBsdXNtZW51ZmlsbXBhcnRqb2ludGhpc2xpc3Rnb29kbmVlZHdheXN3ZXN0am9ic21pbmRhbHNvbG9nb3JpY2h1c2VzbGFzdHRlYW1hcm15Zm9vZGtpbmd3aWxsZWFzdHdhcmRiZXN0ZmlyZVBhZ2Vrbm93YXdheS5wbmdtb3ZldGhhbmxvYWRnaXZlc2VsZm5vdGVtdWNoZmVlZG1hbnlyb2NraWNvbm9uY2Vsb29raGlkZWRpZWRIb21lcnVsZWhvc3RhamF4aW5mb2NsdWJsYXdzbGVzc2hhbGZzb21lc3VjaHpvbmUxMDAlb25lc2NhcmVUaW1lcmFjZWJsdWVmb3Vyd2Vla2ZhY2Vob3BlZ2F2ZWhhcmRsb3N0d2hlbnBhcmtrZXB0cGFzc3NoaXByb29tSFRNTHBsYW5UeXBlZG9uZXNhdmVrZWVwZmxhZ2xpbmtzb2xkZml2ZXRvb2tyYXRldG93bmp1bXB0aHVzZGFya2NhcmRmaWxlZmVhcnN0YXlraWxsdGhhdGZhbGxhdXRvZXZlci5jb210YWxrc2hvcHZvdGVkZWVwbW9kZXJlc3R0dXJuYm9ybmJhbmRmZWxscm9zZXVybChza2lucm9sZWNvbWVhY3RzYWdlc21lZXRnb2xkLmpwZ2l0ZW12YXJ5ZmVsdHRoZW5zZW5kZHJvcFZpZXdjb3B5MS4wIjwvYT5zdG9wZWxzZWxpZXN0b3VycGFjay5naWZwYXN0Y3NzP2dyYXltZWFuJmd0O3JpZGVzaG90bGF0ZXNhaWRyb2FkdmFyIGZlZWxqb2hucmlja3BvcnRmYXN0J1VBLWRlYWQ8L2I+cG9vcmJpbGx0eXBlVS5TLndvb2RtdXN0MnB4O0luZm9yYW5rd2lkZXdhbnR3YWxsbGVhZFswXTtwYXVsd2F2ZXN1cmUkKCcjd2FpdG1hc3Nhcm1zZ29lc2dhaW5sYW5ncGFpZCEtLSBsb2NrdW5pdHJvb3R3YWxrZmlybXdpZmV4bWwic29uZ3Rlc3QyMHB4a2luZHJvd3N0b29sZm9udG1haWxzYWZlc3Rhcm1hcHNjb3JlcmFpbmZsb3diYWJ5c3BhbnNheXM0cHg7NnB4O2FydHNmb290cmVhbHdpa2loZWF0c3RlcHRyaXBvcmcvbGFrZXdlYWt0b2xkRm9ybWNhc3RmYW5zYmFua3ZlcnlydW5zanVseXRhc2sxcHg7Z29hbGdyZXdzbG93ZWRnZWlkPSJzZXRzNXB4Oy5qcz80MHB4aWYgKHNvb25zZWF0bm9uZXR1YmV6ZXJvc2VudHJlZWRmYWN0aW50b2dpZnRoYXJtMThweGNhbWVoaWxsYm9sZHpvb212b2lkZWFzeXJpbmdmaWxscGVha2luaXRjb3N0M3B4O2phY2t0YWdzYml0c3JvbGxlZGl0a25ld25lYXI8IS0tZ3Jvd0pTT05kdXR5TmFtZXNhbGV5b3UgbG90c3BhaW5qYXp6Y29sZGV5ZXNmaXNod3d3LnJpc2t0YWJzcHJldjEwcHhyaXNlMjVweEJsdWVkaW5nMzAwLGJhbGxmb3JkZWFybndpbGRib3guZmFpcmxhY2t2ZXJzcGFpcmp1bmV0ZWNoaWYoIXBpY2tldmlsJCgiI3dhcm1sb3JkZG9lc3B1bGwsMDAwaWRlYWRyYXdodWdlc3BvdGZ1bmRidXJuaHJlZmNlbGxrZXlzdGlja2hvdXJsb3NzZnVlbDEycHhzdWl0ZGVhbFJTUyJhZ2VkZ3JleUdFVCJlYXNlYWltc2dpcmxhaWRzOHB4O25hdnlncmlkdGlwcyM5OTl3YXJzbGFkeWNhcnMpOyB9cGhwP2hlbGx0YWxsd2hvbXpoOmUqL1xyCiAxMDBoYWxsLgoKQTdweDtwdXNoY2hhdDBweDtjcmV3Ki88L2hhc2g3NXB4ZmxhdHJhcmUgJiYgdGVsbGNhbXBvbnRvbGFpZG1pc3Nza2lwdGVudGZpbmVtYWxlZ2V0c3Bsb3Q0MDAsXHIKXHIKY29vbGZlZXQucGhwPGJyPmVyaWNtb3N0Z3VpZGJlbGxkZXNjaGFpcm1hdGhhdG9tL2ltZyYjODJsdWNrY2VudDAwMDt0aW55Z29uZWh0bWxzZWxsZHJ1Z0ZSRUVub2Rlbmljaz9pZD1sb3NlbnVsbHZhc3R3aW5kUlNTIHdlYXJyZWx5YmVlbnNhbWVkdWtlbmFzYWNhcGV3aXNoZ3VsZlQyMzpoaXRzc2xvdGdhdGVraWNrYmx1cnRoZXkxNXB4JycpOyk7Ij5tc2lld2luc2JpcmRzb3J0YmV0YXNlZWtUMTg6b3Jkc3RyZWVtYWxsNjBweGZhcm1iXDAZc2JveXNbMF0uJyk7IlBPU1RiZWFya2lkcyk7fX1tYXJ5dGVuZChVSylxdWFkemg6Zi1zaXotLS0tcHJvcCcpO1xybGlmdFQxOTp2aWNlYW5keWRlYnQ+UlNTcG9vbG5lY2tibG93VDE2OmRvb3JldmFsVDE3OmxldHNmYWlsb3JhbHBvbGxub3ZhY29sc2dlbmUgYlwwFHNvZnRyb21ldGlsbHJvc3M8aDM+cG91cmZhZGVwaW5rPHRyPm1pbmkpfCEobWluZXpoOmhiYXJzaGVhcjAwKTttaWxrIC0tPmlyb25mcmVkZGlza3dlbnRzb2lscHV0cy9qcy9ob2x5VDIyOklTQk5UMjA6YWRhbXNlZXM8aDI+anNvbicsICdjb250VDIxOiBSU1Nsb29wYXNpYW1vb248L3A+c291bExJTkVmb3J0Y2FydFQxNDo8aDE+ODBweCEtLTw5cHg7VDA0Om1pa2U6NDZabmljZWluY2hZb3JrcmljZXpoOmQnKSk7cHVyZW1hZ2VwYXJhdG9uZWJvbmQ6MzdaX29mXyddKTswMDAsemg6Z3Rhbmt5YXJkYm93bGJ1c2g6NTZaSmF2YTMwcHgKfH0KJUMzJTozNFpqZWZmRVhQSWNhc2h2aXNhZ29sZnNub3d6aDppcXVlci5jc3NzaWNrbWVhdG1pbi5iaW5kZGVsbGhpcmVwaWNzcmVudDozNlpIVFRQLTIwMWZvdG93b2xmRU5EIHhib3g6NTRaQk9EWWRpY2s7Cn0KZXhpdDozNVp2YXJzYmVhdCd9KTtkaWV0OTk5O2FubmV9fTwvW2ldLkxhbmdrbUIyd2lyZXRveXNhZGRzc2VhbGFsZXg7Cgl9ZWNob25pbmUub3JnMDA1KXRvbnlqZXdzc2FuZGxlZ3Nyb29mMDAwKSAyMDB3aW5lZ2VhcmRvZ3Nib290Z2FyeWN1dHN0eWxldGVtcHRpb24ueG1sY29ja2dhbmckKCcuNTBweFBoLkRtaXNjYWxhbmxvYW5kZXNrbWlsZXJ5YW51bml4ZGlzYyk7fQpkdXN0Y2xpcCkuCgo3MHB4LTIwMERWRHM3XT48dGFwZWRlbW9pKyspd2FnZWV1cm9waGlsb3B0c2hvbGVGQVFzYXNpbi0yNlRsYWJzcGV0c1VSTCBidWxrY29vazt9XHIKSEVBRFswXSlhYmJyanVhbigxOThsZXNodHdpbjwvaT5zb255Z3V5c2Z1Y2twaXBlfC0KITAwMiluZG93WzFdO1tdOwpMb2cgc2FsdFxyCgkJYmFuZ3RyaW1iYXRoKXtccgowMHB4Cn0pO2tvOmxmZWVzYWQ+XHJzOi8vIFtdO3RvbGxwbHVnKCl7CntccgogLmpzJzIwMHBkdWFsYm9hdC5KUEcpOwp9cXVvdCk7CgonKTsKXHIKfVxyMjAxNDIwMTUyMDE2MjAxNzIwMTgyMDE5MjAyMDIwMjEyMDIyMjAyMzIwMjQyMDI1MjAyNjIwMjcyMDI4MjAyOTIwMzAyMDMxMjAzMjIwMzMyMDM0MjAzNTIwMzYyMDM3MjAxMzIwMTIyMDExMjAxMDIwMDkyMDA4MjAwNzIwMDYyMDA1MjAwNDIwMDMyMDAyMjAwMTIwMDAxOTk5MTk5ODE5OTcxOTk2MTk5NTE5OTQxOTkzMTk5MjE5OTExOTkwMTk4OTE5ODgxOTg3MTk4NjE5ODUxOTg0MTk4MzE5ODIxOTgxMTk4MDE5NzkxOTc4MTk3NzE5NzYxOTc1MTk3NDE5NzMxOTcyMTk3MTE5NzAxOTY5MTk2ODE5NjcxOTY2MTk2NTE5NjQxOTYzMTk2MjE5NjExOTYwMTk1OTE5NTgxOTU3MTk1NjE5NTUxOTU0MTk1MzE5NTIxOTUxMTk1MDEwMDAxMDI0MTM5NDAwMDA5OTk5Y29tb21DIXNlc3RlZXN0YXBlcm90b2RvaGFjZWNhZGFhQzFvYmllbmRDLWFhc0MtdmlkYWNhc29vdHJvZm9yb3NvbG9vdHJhY3VhbGRpam9zaWRvZ3JhbnRpcG90ZW1hZGViZWFsZ29xdUMpZXN0b25hZGF0cmVzcG9jb2Nhc2FiYWpvdG9kYXNpbm9hZ3VhcHVlc3Vub3NhbnRlZGljZWx1aXNlbGxhbWF5b3pvbmFhbW9ycGlzb29icmFjbGljZWxsb2Rpb3Nob3JhY2FzaVA3UDBQPVAwUD5QPFFcMFAwUVwwUQNRAlAwUD1QNVA/UD5QPlECUDhQN1A9UD5QNFA+UQJQPlA2UDVQPlA9UDhRBVAdUDBQNVA1UDFRXHZQPFFcdlASUVx2UQFQPlAyUVx2UDJQPlAdUD5QPlAxUB9QPlA7UDhQPVA4UCBQJFAdUDVQHFFcdlECUVx2UB5QPVA4UDxQNFAwUBdQMFAUUDBQHVEDUB5QMVECUDVQGFA3UDVQOVA9UQNQPFA8UCJRXHZRA1A2WQFZClgjWQZZBVgnWQVYOVkDWQRYI1lcYlgxWC9ZClgnWQFZCVlceDA3WVxiWQRZBVkEWQNYJ1lcYlkEWVx4MDdYKFgzWCdZBFglWQZZXHgwN1kKWCNZClkCWC9ZXHgwN1kEWCtZBVgoWVx4MDdZBFlcYlkEWQpYKFkEWCdZClgoWQNYNFkKWCdZBVgjWQVZBlgqWChZClkEWQZYLVgoWVx4MDdZBVkFWDRZXGJYNGZpcnN0dmlkZW9saWdodHdvcmxkbWVkaWF3aGl0ZWNsb3NlYmxhY2tyaWdodHNtYWxsYm9va3NwbGFjZW11c2ljZmllbGRvcmRlcnBvaW50dmFsdWVsZXZlbHRhYmxlYm9hcmRob3VzZWdyb3Vwd29ya3N5ZWFyc3N0YXRldG9kYXl3YXRlcnN0YXJ0c3R5bGVkZWF0aHBvd2VycGhvbmVuaWdodGVycm9yaW5wdXRhYm91dHRlcm1zdGl0bGV0b29sc2V2ZW50bG9jYWx0aW1lc2xhcmdld29yZHNnYW1lc3Nob3J0c3BhY2Vmb2N1c2NsZWFybW9kZWxibG9ja2d1aWRlcmFkaW9zaGFyZXdvbWVuYWdhaW5tb25leWltYWdlbmFtZXN5b3VuZ2xpbmVzbGF0ZXJjb2xvcmdyZWVuZnJvbnQmYW1wO3dhdGNoZm9yY2VwcmljZXJ1bGVzYmVnaW5hZnRlcnZpc2l0aXNzdWVhcmVhc2JlbG93aW5kZXh0b3RhbGhvdXJzbGFiZWxwcmludHByZXNzYnVpbHRsaW5rc3NwZWVkc3R1ZHl0cmFkZWZvdW5kc2Vuc2V1bmRlcnNob3duZm9ybXNyYW5nZWFkZGVkc3RpbGxtb3ZlZHRha2VuYWJvdmVmbGFzaGZpeGVkb2Z0ZW5vdGhlcnZpZXdzY2hlY2tsZWdhbHJpdmVyaXRlbXNxdWlja3NoYXBlaHVtYW5leGlzdGdvaW5nbW92aWV0aGlyZGJhc2ljcGVhY2VzdGFnZXdpZHRobG9naW5pZGVhc3dyb3RlcGFnZXN1c2Vyc2RyaXZlc3RvcmVicmVha3NvdXRodm9pY2VzaXRlc21vbnRod2hlcmVidWlsZHdoaWNoZWFydGhmb3J1bXRocmVlc3BvcnRwYXJ0eUNsaWNrbG93ZXJsaXZlc2NsYXNzbGF5ZXJlbnRyeXN0b3J5dXNhZ2Vzb3VuZGNvdXJ0eW91ciBiaXJ0aHBvcHVwdHlwZXNhcHBseUltYWdlYmVpbmd1cHBlcm5vdGVzZXZlcnlzaG93c21lYW5zZXh0cmFtYXRjaHRyYWNra25vd25lYXJseWJlZ2Fuc3VwZXJwYXBlcm5vcnRobGVhcm5naXZlbm5hbWVkZW5kZWRUZXJtc3BhcnRzR3JvdXBicmFuZHVzaW5nd29tYW5mYWxzZXJlYWR5YXVkaW90YWtlc3doaWxlLmNvbS9saXZlZGNhc2VzZGFpbHljaGlsZGdyZWF0anVkZ2V0aG9zZXVuaXRzbmV2ZXJicm9hZGNvYXN0Y292ZXJhcHBsZWZpbGVzY3ljbGVzY2VuZXBsYW5zY2xpY2t3cml0ZXF1ZWVucGllY2VlbWFpbGZyYW1lb2xkZXJwaG90b2xpbWl0Y2FjaGVjaXZpbHNjYWxlZW50ZXJ0aGVtZXRoZXJldG91Y2hib3VuZHJveWFsYXNrZWR3aG9sZXNpbmNlc3RvY2sgbmFtZWZhaXRoaGVhcnRlbXB0eW9mZmVyc2NvcGVvd25lZG1pZ2h0YWxidW10aGlua2Jsb29kYXJyYXltYWpvcnRydXN0Y2Fub251bmlvbmNvdW50dmFsaWRzdG9uZVN0eWxlTG9naW5oYXBweW9jY3VybGVmdDpmcmVzaHF1aXRlZmlsbXNncmFkZW5lZWRzdXJiYW5maWdodGJhc2lzaG92ZXJhdXRvO3JvdXRlLmh0bWxtaXhlZGZpbmFsWW91ciBzbGlkZXRvcGljYnJvd25hbG9uZWRyYXduc3BsaXRyZWFjaFJpZ2h0ZGF0ZXNtYXJjaHF1b3RlZ29vZHNMaW5rc2RvdWJ0YXN5bmN0aHVtYmFsbG93Y2hpZWZ5b3V0aG5vdmVsMTBweDtzZXJ2ZXVudGlsaGFuZHNDaGVja1NwYWNlcXVlcnlqYW1lc2VxdWFsdHdpY2UwLDAwMFN0YXJ0cGFuZWxzb25nc3JvdW5kZWlnaHRzaGlmdHdvcnRocG9zdHNsZWFkc3dlZWtzYXZvaWR0aGVzZW1pbGVzcGxhbmVzbWFydGFscGhhcGxhbnRtYXJrc3JhdGVzcGxheXNjbGFpbXNhbGVzdGV4dHNzdGFyc3dyb25nPC9oMz50aGluZy5vcmcvbXVsdGloZWFyZFBvd2Vyc3RhbmR0b2tlbnNvbGlkKHRoaXNicmluZ3NoaXBzc3RhZmZ0cmllZGNhbGxzZnVsbHlmYWN0c2FnZW50VGhpcyAvLy0tPmFkbWluZWd5cHRFdmVudDE1cHg7RW1haWx0cnVlImNyb3Nzc3BlbnRibG9nc2JveCI+bm90ZWRsZWF2ZWNoaW5hc2l6ZXNndWVzdDwvaDQ+cm9ib3RoZWF2eXRydWUsc2V2ZW5ncmFuZGNyaW1lc2lnbnNhd2FyZWRhbmNlcGhhc2U+PCEtLWVuX1VTJiMzOTsyMDBweF9uYW1lbGF0aW5lbmpveWFqYXguYXRpb25zbWl0aFUuUy4gaG9sZHNwZXRlcmluZGlhbmF2Ij5jaGFpbnNjb3JlY29tZXNkb2luZ3ByaW9yU2hhcmUxOTkwc3JvbWFubGlzdHNqYXBhbmZhbGxzdHJpYWxvd25lcmFncmVlPC9oMj5hYnVzZWFsZXJ0b3BlcmEiLS8vV2NhcmRzaGlsbHN0ZWFtc1Bob3RvdHJ1dGhjbGVhbi5waHA/c2FpbnRtZXRhbGxvdWlzbWVhbnRwcm9vZmJyaWVmcm93Ij5nZW5yZXRydWNrbG9va3NWYWx1ZUZyYW1lLm5ldC8tLT4KPHRyeSB7CnZhciBtYWtlc2Nvc3RzcGxhaW5hZHVsdHF1ZXN0dHJhaW5sYWJvcmhlbHBzY2F1c2VtYWdpY21vdG9ydGhlaXIyNTBweGxlYXN0c3RlcHNDb3VudGNvdWxkZ2xhc3NzaWRlc2Z1bmRzaG90ZWxhd2FyZG1vdXRobW92ZXNwYXJpc2dpdmVzZHV0Y2h0ZXhhc2ZydWl0bnVsbCx8fFtdO3RvcCI+CjwhLS1QT1NUIm9jZWFuPGJyLz5mbG9vcnNwZWFrZGVwdGggc2l6ZWJhbmtzY2F0Y2hjaGFydDIwcHg7YWxpZ25kZWFsc3dvdWxkNTBweDt1cmw9InBhcmtzbW91c2VNb3N0IC4uLjwvYW1vbmdicmFpbmJvZHkgbm9uZTtiYXNlZGNhcnJ5ZHJhZnRyZWZlcnBhZ2VfaG9tZS5tZXRlcmRlbGF5ZHJlYW1wcm92ZWpvaW50PC90cj5kcnVnczwhLS0gYXByaWxpZGVhbGFsbGVuZXhhY3Rmb3J0aGNvZGVzbG9naWNWaWV3IHNlZW1zYmxhbmtwb3J0cyAoMjAwc2F2ZWRfbGlua2dvYWxzZ3JhbnRncmVla2hvbWVzcmluZ3NyYXRlZDMwcHg7d2hvc2VwYXJzZSgpOyIgQmxvY2tsaW51eGpvbmVzcGl4ZWwnKTsiPik7aWYoLWxlZnRkYXZpZGhvcnNlRm9jdXNyYWlzZWJveGVzVHJhY2tlbWVudDwvZW0+YmFyIj4uc3JjPXRvd2VyYWx0PSJjYWJsZWhlbnJ5MjRweDtzZXR1cGl0YWx5c2hhcnBtaW5vcnRhc3Rld2FudHN0aGlzLnJlc2V0d2hlZWxnaXJscy9jc3MvMTAwJTtjbHVic3N0dWZmYmlibGV2b3RlcyAxMDAwa29yZWF9KTtccgpiYW5kc3F1ZXVlPSB7fTs4MHB4O2NraW5ne1xyCgkJYWhlYWRjbG9ja2lyaXNobGlrZSByYXRpb3N0YXRzRm9ybSJ5YWhvbylbMF07QWJvdXRmaW5kczwvaDE+ZGVidWd0YXNrc1VSTCA9Y2VsbHN9KSgpOzEycHg7cHJpbWV0ZWxsc3R1cm5zMHg2MDAuanBnInNwYWluYmVhY2h0YXhlc21pY3JvYW5nZWwtLT48L2dpZnRzc3RldmUtbGlua2JvZHkufSk7Cgltb3VudCAoMTk5RkFRPC9yb2dlcmZyYW5rQ2xhc3MyOHB4O2ZlZWRzPGgxPjxzY290dHRlc3RzMjJweDtkcmluaykgfHwgbGV3aXNzaGFsbCMwMzk7IGZvciBsb3ZlZHdhc3RlMDBweDtqYTpjAnNpbW9uPGZvbnRyZXBseW1lZXRzdW50ZXJjaGVhcHRpZ2h0QnJhbmQpICE9IGRyZXNzY2xpcHNyb29tc29ua2V5bW9iaWxtYWluLk5hbWUgcGxhdGVmdW5ueXRyZWVzY29tLyIxLmpwZ3dtb2RlcGFyYW1TVEFSVGxlZnQgaWRkZW4sIDIwMSk7Cn0KZm9ybS52aXJ1c2NoYWlydHJhbnN3b3JzdFBhZ2VzaXRpb25wYXRjaDwhLS0Kby1jYWNmaXJtc3RvdXJzLDAwMCBhc2lhbmkrKyl7YWRvYmUnKVswXWlkPTEwYm90aDttZW51IC4yLm1pLnBuZyJrZXZpbmNvYWNoQ2hpbGRicnVjZTIuanBnVVJMKSsuanBnfHN1aXRlc2xpY2VoYXJyeTEyMCIgc3dlZXR0cj5ccgpuYW1lPWRpZWdvcGFnZSBzd2lzcy0tPgoKI2ZmZjsiPkxvZy5jb20idHJlYXRzaGVldCkgJiYgMTRweDtzbGVlcG50ZW50ZmlsZWRqYTpjA2lkPSJjTmFtZSJ3b3JzZXNob3RzLWJveC1kZWx0YQombHQ7YmVhcnM6NDhaPGRhdGEtcnVyYWw8L2E+IHNwZW5kYmFrZXJzaG9wcz0gIiI7cGhwIj5jdGlvbjEzcHg7YnJpYW5oZWxsb3NpemU9bz0lMkYgam9pbm1heWJlPGltZyBpbWciPiwgZmpzaW1nIiAiKVswXU1Ub3BCVHlwZSJuZXdseURhbnNrY3plY2h0cmFpbGtub3dzPC9oNT5mYXEiPnpoLWNuMTApOwotMSIpO3R5cGU9Ymx1ZXN0cnVseWRhdmlzLmpzJzs+XHIKPCFzdGVlbCB5b3UgaDI+XHIKZm9ybSBqZXN1czEwMCUgbWVudS5ccgoJXHIKd2FsZXNyaXNrc3VtZW50ZGRpbmdiLWxpa3RlYWNoZ2lmIiB2ZWdhc2RhbnNrZWVzdGlzaHFpcHN1b21pc29icmVkZXNkZWVudHJldG9kb3NwdWVkZWFDMW9zZXN0QyF0aWVuZWhhc3Rhb3Ryb3NwYXJ0ZWRvbmRlbnVldm9oYWNlcmZvcm1hbWlzbW9tZWpvcm11bmRvYXF1Qy1kQy1hc3NDM2xvYXl1ZGFmZWNoYXRvZGFzdGFudG9tZW5vc2RhdG9zb3RyYXNzaXRpb211Y2hvYWhvcmFsdWdhcm1heW9yZXN0b3Nob3Jhc3RlbmVyYW50ZXNmb3Rvc2VzdGFzcGFDLXNudWV2YXNhbHVkZm9yb3NtZWRpb3F1aWVubWVzZXNwb2RlcmNoaWxlc2VyQyF2ZWNlc2RlY2lyam9zQyllc3RhcnZlbnRhZ3J1cG9oZWNob2VsbG9zdGVuZ29hbWlnb2Nvc2Fzbml2ZWxnZW50ZW1pc21hYWlyZXNqdWxpb3RlbWFzaGFjaWFmYXZvcmp1bmlvbGlicmVwdW50b2J1ZW5vYXV0b3JhYnJpbGJ1ZW5hdGV4dG9tYXJ6b3NhYmVybGlzdGFsdWVnb2NDM21vZW5lcm9qdWVnb3BlckM6aGFiZXJlc3RveW51bmNhbXVqZXJ2YWxvcmZ1ZXJhbGlicm9ndXN0YWlndWFsdm90b3NjYXNvc2d1Qy1hcHVlZG9zb21vc2F2aXNvdXN0ZWRkZWJlbm5vY2hlYnVzY2FmYWx0YWV1cm9zc2VyaWVkaWNob2N1cnNvY2xhdmVjYXNhc2xlQzNucGxhem9sYXJnb29icmFzdmlzdGFhcG95b2p1bnRvdHJhdGF2aXN0b2NyZWFyY2FtcG9oZW1vc2NpbmNvY2FyZ29waXNvc29yZGVuaGFjZW5DIXJlYWRpc2NvcGVkcm9jZXJjYXB1ZWRhcGFwZWxtZW5vckM6dGlsY2xhcm9qb3JnZWNhbGxlcG9uZXJ0YXJkZW5hZGllbWFyY2FzaWd1ZWVsbGFzc2lnbG9jb2NoZW1vdG9zbWFkcmVjbGFzZXJlc3RvbmlDMW9xdWVkYXBhc2FyYmFuY29oaWpvc3ZpYWplcGFibG9DKXN0ZXZpZW5lcmVpbm9kZWphcmZvbmRvY2FuYWxub3J0ZWxldHJhY2F1c2F0b21hcm1hbm9zbHVuZXNhdXRvc3ZpbGxhdmVuZG9wZXNhcnRpcG9zdGVuZ2FtYXJjb2xsZXZhcGFkcmV1bmlkb3ZhbW9zem9uYXNhbWJvc2JhbmRhbWFyaWFhYnVzb211Y2hhc3ViaXJyaW9qYXZpdmlyZ3JhZG9jaGljYWFsbEMtam92ZW5kaWNoYWVzdGFudGFsZXNzYWxpcnN1ZWxvcGVzb3NmaW5lc2xsYW1hYnVzY29DKXN0YWxsZWdhbmVncm9wbGF6YWh1bW9ycGFnYXJqdW50YWRvYmxlaXNsYXNib2xzYWJhQzFvaGFibGFsdWNoYUMBcmVhZGljZW5qdWdhcm5vdGFzdmFsbGVhbGxDIWNhcmdhZG9sb3JhYmFqb2VzdEMpZ3VzdG9tZW50ZW1hcmlvZmlybWFjb3N0b2ZpY2hhcGxhdGFob2dhcmFydGVzbGV5ZXNhcXVlbG11c2VvYmFzZXNwb2Nvc21pdGFkY2llbG9jaGljb21pZWRvZ2FuYXJzYW50b2V0YXBhZGViZXNwbGF5YXJlZGVzc2lldGVjb3J0ZWNvcmVhZHVkYXNkZXNlb3ZpZWpvZGVzZWFhZ3VhcyZxdW90O2RvbWFpbmNvbW1vbnN0YXR1c2V2ZW50c21hc3RlcnN5c3RlbWFjdGlvbmJhbm5lcnJlbW92ZXNjcm9sbHVwZGF0ZWdsb2JhbG1lZGl1bWZpbHRlcm51bWJlcmNoYW5nZXJlc3VsdHB1YmxpY3NjcmVlbmNob29zZW5vcm1hbHRyYXZlbGlzc3Vlc3NvdXJjZXRhcmdldHNwcmluZ21vZHVsZW1vYmlsZXN3aXRjaHBob3Rvc2JvcmRlcnJlZ2lvbml0c2VsZnNvY2lhbGFjdGl2ZWNvbHVtbnJlY29yZGZvbGxvd3RpdGxlPmVpdGhlcmxlbmd0aGZhbWlseWZyaWVuZGxheW91dGF1dGhvcmNyZWF0ZXJldmlld3N1bW1lcnNlcnZlcnBsYXllZHBsYXllcmV4cGFuZHBvbGljeWZvcm1hdGRvdWJsZXBvaW50c3Nlcmllc3BlcnNvbmxpdmluZ2Rlc2lnbm1vbnRoc2ZvcmNlc3VuaXF1ZXdlaWdodHBlb3BsZWVuZXJneW5hdHVyZXNlYXJjaGZpZ3VyZWhhdmluZ2N1c3RvbW9mZnNldGxldHRlcndpbmRvd3N1Ym1pdHJlbmRlcmdyb3Vwc3VwbG9hZGhlYWx0aG1ldGhvZHZpZGVvc3NjaG9vbGZ1dHVyZXNoYWRvd2RlYmF0ZXZhbHVlc09iamVjdG90aGVyc3JpZ2h0c2xlYWd1ZWNocm9tZXNpbXBsZW5vdGljZXNoYXJlZGVuZGluZ3NlYXNvbnJlcG9ydG9ubGluZXNxdWFyZWJ1dHRvbmltYWdlc2VuYWJsZW1vdmluZ2xhdGVzdHdpbnRlckZyYW5jZXBlcmlvZHN0cm9uZ3JlcGVhdExvbmRvbmRldGFpbGZvcm1lZGRlbWFuZHNlY3VyZXBhc3NlZHRvZ2dsZXBsYWNlc2RldmljZXN0YXRpY2NpdGllc3N0cmVhbXllbGxvd2F0dGFja3N0cmVldGZsaWdodGhpZGRlbmluZm8iPm9wZW5lZHVzZWZ1bHZhbGxleWNhdXNlc2xlYWRlcnNlY3JldHNlY29uZGRhbWFnZXNwb3J0c2V4Y2VwdHJhdGluZ3NpZ25lZHRoaW5nc2VmZmVjdGZpZWxkc3N0YXRlc29mZmljZXZpc3VhbGVkaXRvcnZvbHVtZVJlcG9ydG11c2V1bW1vdmllc3BhcmVudGFjY2Vzc21vc3RseW1vdGhlciIgaWQ9Im1hcmtldGdyb3VuZGNoYW5jZXN1cnZleWJlZm9yZXN5bWJvbG1vbWVudHNwZWVjaG1vdGlvbmluc2lkZW1hdHRlckNlbnRlcm9iamVjdGV4aXN0c21pZGRsZUV1cm9wZWdyb3d0aGxlZ2FjeW1hbm5lcmVub3VnaGNhcmVlcmFuc3dlcm9yaWdpbnBvcnRhbGNsaWVudHNlbGVjdHJhbmRvbWNsb3NlZHRvcGljc2NvbWluZ2ZhdGhlcm9wdGlvbnNpbXBseXJhaXNlZGVzY2FwZWNob3NlbmNodXJjaGRlZmluZXJlYXNvbmNvcm5lcm91dHB1dG1lbW9yeWlmcmFtZXBvbGljZW1vZGVsc051bWJlcmR1cmluZ29mZmVyc3N0eWxlc2tpbGxlZGxpc3RlZGNhbGxlZHNpbHZlcm1hcmdpbmRlbGV0ZWJldHRlcmJyb3dzZWxpbWl0c0dsb2JhbHNpbmdsZXdpZGdldGNlbnRlcmJ1ZGdldG5vd3JhcGNyZWRpdGNsYWltc2VuZ2luZXNhZmV0eWNob2ljZXNwaXJpdC1zdHlsZXNwcmVhZG1ha2luZ25lZWRlZHJ1c3NpYXBsZWFzZWV4dGVudFNjcmlwdGJyb2tlbmFsbG93c2NoYXJnZWRpdmlkZWZhY3Rvcm1lbWJlci1iYXNlZHRoZW9yeWNvbmZpZ2Fyb3VuZHdvcmtlZGhlbHBlZENodXJjaGltcGFjdHNob3VsZGFsd2F5c2xvZ28iIGJvdHRvbWxpc3QiPil7dmFyIHByZWZpeG9yYW5nZUhlYWRlci5wdXNoKGNvdXBsZWdhcmRlbmJyaWRnZWxhdW5jaFJldmlld3Rha2luZ3Zpc2lvbmxpdHRsZWRhdGluZ0J1dHRvbmJlYXV0eXRoZW1lc2ZvcmdvdFNlYXJjaGFuY2hvcmFsbW9zdGxvYWRlZENoYW5nZXJldHVybnN0cmluZ3JlbG9hZE1vYmlsZWluY29tZXN1cHBseVNvdXJjZW9yZGVyc3ZpZXdlZCZuYnNwO2NvdXJzZUFib3V0IGlzbGFuZDxodG1sIGNvb2tpZW5hbWU9ImFtYXpvbm1vZGVybmFkdmljZWluPC9hPjogVGhlIGRpYWxvZ2hvdXNlc0JFR0lOIE1leGljb3N0YXJ0c2NlbnRyZWhlaWdodGFkZGluZ0lzbGFuZGFzc2V0c0VtcGlyZVNjaG9vbGVmZm9ydGRpcmVjdG5lYXJseW1hbnVhbFNlbGVjdC4KCk9uZWpvaW5lZG1lbnUiPlBoaWxpcGF3YXJkc2hhbmRsZWltcG9ydE9mZmljZXJlZ2FyZHNraWxsc25hdGlvblNwb3J0c2RlZ3JlZXdlZWtseSAoZS5nLmJlaGluZGRvY3RvcmxvZ2dlZHVuaXRlZDwvYj48L2JlZ2luc3BsYW50c2Fzc2lzdGFydGlzdGlzc3VlZDMwMHB4fGNhbmFkYWFnZW5jeXNjaGVtZXJlbWFpbkJyYXppbHNhbXBsZWxvZ28iPmJleW9uZC1zY2FsZWFjY2VwdHNlcnZlZG1hcmluZUZvb3RlcmNhbWVyYTwvaDE+Cl9mb3JtImxlYXZlc3N0cmVzcyIgLz5ccgouZ2lmIiBvbmxvYWRsb2FkZXJPeGZvcmRzaXN0ZXJzdXJ2aXZsaXN0ZW5mZW1hbGVEZXNpZ25zaXplPSJhcHBlYWx0ZXh0Ij5sZXZlbHN0aGFua3NoaWdoZXJmb3JjZWRhbmltYWxhbnlvbmVBZnJpY2FhZ3JlZWRyZWNlbnRQZW9wbGU8YnIgLz53b25kZXJwcmljZXN0dXJuZWR8fCB7fTttYWluIj5pbmxpbmVzdW5kYXl3cmFwIj5mYWlsZWRjZW5zdXNtaW51dGViZWFjb25xdW90ZXMxNTBweHxlc3RhdGVyZW1vdGVlbWFpbCJsaW5rZWRyaWdodDtzaWduYWxmb3JtYWwxLmh0bWxzaWdudXBwcmluY2VmbG9hdDoucG5nIiBmb3J1bS5BY2Nlc3NwYXBlcnNzb3VuZHNleHRlbmRIZWlnaHRzbGlkZXJVVEYtOCImYW1wOyBCZWZvcmUuIFdpdGhzdHVkaW9vd25lcnNtYW5hZ2Vwcm9maXRqUXVlcnlhbm51YWxwYXJhbXNib3VnaHRmYW1vdXNnb29nbGVsb25nZXJpKyspIHtpc3JhZWxzYXlpbmdkZWNpZGVob21lIj5oZWFkZXJlbnN1cmVicmFuY2hwaWVjZXNibG9jaztzdGF0ZWR0b3AiPjxyYWNpbmdyZXNpemUtLSZndDtwYWNpdHlzZXh1YWxidXJlYXUuanBnIiAxMCwwMDBvYnRhaW50aXRsZXNhbW91bnQsIEluYy5jb21lZHltZW51IiBseXJpY3N0b2RheS5pbmRlZWRjb3VudHlfbG9nby5GYW1pbHlsb29rZWRNYXJrZXRsc2UgaWZQbGF5ZXJ0dXJrZXkpO3ZhciBmb3Jlc3RnaXZpbmdlcnJvcnNEb21haW59ZWxzZXtpbnNlcnRCbG9nPC9mb290ZXJsb2dpbi5mYXN0ZXJhZ2VudHM8Ym9keSAxMHB4IDBwcmFnbWFmcmlkYXlqdW5pb3Jkb2xsYXJwbGFjZWRjb3ZlcnNwbHVnaW41LDAwMCBwYWdlIj5ib3N0b24udGVzdChhdmF0YXJ0ZXN0ZWRfY291bnRmb3J1bXNzY2hlbWFpbmRleCxmaWxsZWRzaGFyZXNyZWFkZXJhbGVydChhcHBlYXJTdWJtaXRsaW5lIj5ib2R5Ij4KKiBUaGVUaG91Z2hzZWVpbmdqZXJzZXlOZXdzPC92ZXJpZnlleHBlcnRpbmp1cnl3aWR0aD1Db29raWVTVEFSVCBhY3Jvc3NfaW1hZ2V0aHJlYWRuYXRpdmVwb2NrZXRib3giPgpTeXN0ZW0gRGF2aWRjYW5jZXJ0YWJsZXNwcm92ZWRBcHJpbCByZWFsbHlkcml2ZXJpdGVtIj5tb3JlIj5ib2FyZHNjb2xvcnNjYW1wdXNmaXJzdCB8fCBbXTttZWRpYS5ndWl0YXJmaW5pc2h3aWR0aDpzaG93ZWRPdGhlciAucGhwIiBhc3N1bWVsYXllcnN3aWxzb25zdG9yZXNyZWxpZWZzd2VkZW5DdXN0b21lYXNpbHkgeW91ciBTdHJpbmcKCldoaWx0YXlsb3JjbGVhcjpyZXNvcnRmcmVuY2h0aG91Z2giKSArICI8Ym9keT5idXlpbmdicmFuZHNNZW1iZXJuYW1lIj5vcHBpbmdzZWN0b3I1cHg7Ij52c3BhY2Vwb3N0ZXJtYWpvciBjb2ZmZWVtYXJ0aW5tYXR1cmVoYXBwZW48L25hdj5rYW5zYXNsaW5rIj5JbWFnZXM9ZmFsc2V3aGlsZSBoc3BhY2UwJmFtcDsgCgpJbiAgcG93ZXJQb2xza2ktY29sb3Jqb3JkYW5Cb3R0b21TdGFydCAtY291bnQyLmh0bWxuZXdzIj4wMS5qcGdPbmxpbmUtcmlnaHRtaWxsZXJzZW5pb3JJU0JOIDAwLDAwMCBndWlkZXN2YWx1ZSllY3Rpb25yZXBhaXIueG1sIiAgcmlnaHRzLmh0bWwtYmxvY2tyZWdFeHA6aG92ZXJ3aXRoaW52aXJnaW5waG9uZXM8L3RyPlxydXNpbmcgCgl2YXIgPicpOwoJPC90ZD4KPC90cj4KYmFoYXNhYnJhc2lsZ2FsZWdvbWFneWFycG9sc2tpc3Jwc2tpWDFYL1lcYmQ4LWYWXHgwN2cuXDBkPRNnOQFpKxRkPyFmAS9kOC1lXHgxQj1mXGIRZDssZDhcMGQ4KmUFLGUPOGcuIWcQBmguOmUdXHgxQmUPL2Q7JWYcXHJlCiFmFzZpFzRkOCpkOjpkOidlEwFoXHgwNyplNzFkPAFkOBpmHyVnHFx2ZTclZD0caAEUZzM7ZjIhZhwJZz0RZysZZglcMGYcCWgvBGguOmQ4LWU/A2YWXHgwN2crIGcUKGZcYjdpJhZpITVkPRxoXDAFZgpcMGYcL2kXLmkiGGdceDFC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D2Q5CWkYM2UFCWhcdjFlXHgxQj1mPAJkOi5lBlx4MUJkOlx2Zw4pZS42Zz4kZDwXZQYcZjARZVxyM2UPL2UQXHJnKDFlLjZlBTdlCihnFDtmAzNlXGIwZjMoZhgOZTAPZS0mZlwwJ2gDPWhcMANnIBRnISxkOzZoJwJnHFx2ZjgFZiUaZhAeZywRaSYWaSABaTsEaVx4MDcRaVwwAmcUKGYxH2hcdg9nHB9lLh5kODtnLiFpGDZmLjVoKDtlBgpnPztoLxFmHQNlXGIpZQEaZSU9ZDw8ZDkOaVwwGmguL2YWPWU3JWdcdlwwZgVcdmQ5H2guOGcOL2Q/HWUfOWUFO2YmAmU/NWUkJ2UeXHZmHDpnJShnEAZoJyNlXGY/ZRBccmN1YW5kb2Vudmlhcm1hZHJpZGJ1c2NhcmluaWNpb3RpZW1wb3BvcnF1ZWN1ZW50YWVzdGFkb3B1ZWRlbmp1ZWdvc2NvbnRyYWVzdEMhbm5vbWJyZXRpZW5lbnBlcmZpbG1hbmVyYWFtaWdvc2NpdWRhZGNlbnRyb2F1bnF1ZXB1ZWRlc2RlbnRyb3ByaW1lcnByZWNpb3NlZ0M6bmJ1ZW5vc3ZvbHZlcnB1bnRvc3NlbWFuYWhhYkMtYWFnb3N0b251ZXZvc3VuaWRvc2Nhcmxvc2VxdWlwb25pQzFvc211Y2hvc2FsZ3VuYWNvcnJlb2ltYWdlbnBhcnRpcmFycmliYW1hckMtYWhvbWJyZWVtcGxlb3ZlcmRhZGNhbWJpb211Y2hhc2Z1ZXJvbnBhc2Fkb2xDLW5lYXBhcmVjZW51ZXZhc2N1cnNvc2VzdGFiYXF1aWVyb2xpYnJvc2N1YW50b2FjY2Vzb21pZ3VlbHZhcmlvc2N1YXRyb3RpZW5lc2dydXBvc3NlckMhbmV1cm9wYW1lZGlvc2ZyZW50ZWFjZXJjYWRlbUMhc29mZXJ0YWNvY2hlc21vZGVsb2l0YWxpYWxldHJhc2FsZ0M6bmNvbXByYWN1YWxlc2V4aXN0ZWN1ZXJwb3NpZW5kb3ByZW5zYWxsZWdhcnZpYWplc2RpbmVyb211cmNpYXBvZHJDIXB1ZXN0b2RpYXJpb3B1ZWJsb3F1aWVyZW1hbnVlbHByb3Bpb2NyaXNpc2NpZXJ0b3NlZ3Vyb211ZXJ0ZWZ1ZW50ZWNlcnJhcmdyYW5kZWVmZWN0b3BhcnRlc21lZGlkYXByb3BpYW9mcmVjZXRpZXJyYWUtbWFpbHZhcmlhc2Zvcm1hc2Z1dHVyb29iamV0b3NlZ3VpcnJpZXNnb25vcm1hc21pc21vc0M6bmljb2NhbWlub3NpdGlvc3JhekMzbmRlYmlkb3BydWViYXRvbGVkb3RlbkMtYWplc0M6c2VzcGVyb2NvY2luYW9yaWdlbnRpZW5kYWNpZW50b2NDIWRpemhhYmxhcnNlckMtYWxhdGluYWZ1ZXJ6YWVzdGlsb2d1ZXJyYWVudHJhckMpeGl0b2xDM3BlemFnZW5kYXZDLWRlb2V2aXRhcnBhZ2luYW1ldHJvc2phdmllcnBhZHJlc2ZDIWNpbGNhYmV6YUMhcmVhc3NhbGlkYWVudkMtb2phcEMzbmFidXNvc2JpZW5lc3RleHRvc2xsZXZhcnB1ZWRhbmZ1ZXJ0ZWNvbUM6bmNsYXNlc2h1bWFub3Rlbmlkb2JpbGJhb3VuaWRhZGVzdEMhc2VkaXRhcmNyZWFkb1A0UDtRD1FceDA3UQJQPlA6UDBQOlA4UDtQOFFcclECUD5QMlEBUDVQNVAzUD5QP1FcMFA4UQJQMFA6UDVRCVA1UQNQNlA1UBpQMFA6UDFQNVA3UDFRXHZQO1A+UD1QOFASUQFQNVA/UD5QNFAtUQJQPlECUD5QPFFceDA3UDVQPFA9UDVRAlA7UDVRAlFcMFAwUDdQPlA9UDBQM1A0UDVQPFA9UDVQFFA7UQ9QH1FcMFA4UD1QMFEBUD1QOFEFUQJQNVA8UDpRAlA+UDNQPlA0UDJQPlECUQJQMFA8UCFQKFAQUDxQMFEPUCdRAlA+UDJQMFEBUDJQMFA8UDVQPFEDUCJQMFA6UDRQMlAwUD1QMFA8UVxyUQJQOFFcclECUQNQElAwUDxRAlA1UQVQP1FcMFA+UQJRA1ECUD1QMFA0UDRQPVEPUBJQPlECUQJRXDBQOFA9UDVQOVASUDBRAVA9UDhQPFEBUDBQPFECUD5RAlFcMFEDUDFQHlA9UDhQPFA4UVwwUD1QNVA1UB5QHlAeUDtQOFEGUVxyUQJQMFAeUD1QMFA9UDVQPFA0UD5QPFA8UD5QOVA0UDJQNVA+UD1QPlEBUQNQNFxgJBVcYCVceDA3XGAkOVxgJVxiXGAkFVxgJVwwXGAkOFxgJVx4MDdcYCQVXGAkPlxgJBVcYCVcdlxgJBRcYCQwXGAkKlxgJDBcYCQoXGAlXHgwN1xgJA9cYCQVXGAkFVxgJD9cYCQtXGAlXDBcYCRceDA3XGAkOFxgJBVcYCQwXGAkJFxgJVx2XGAkOVxgJVx2XGAkBlxgJCpcYCQ5XGAlXDBcYCQvXGAkOVxgJC9cYCQ+XGAkJFxgJBVcYCQlXGAkPmphZ3JhblxgJAZcYCQcXGAkHFxgJVx2XGAkBVxgJCxcYCQmXGAlXHZcYCQXXGAkXGJcYCQcXGAkPlxgJBdcYCQPXGAkOVxgJC5cYCRceDA3XGAkKFxgJDVcYCQ5XGAkL1xgJVx4MDdcYCQlXGAlXHgwN1xgJCVcYCVcMFxgJBhcYCQwXGAkHFxgJCxcYCQmXGAlXDBcYCQVXGAkXGJcYCQcXGAlXDBcYCQ1XGAlXHgwN1xgJChcYCRcYlxgJChcYCQPXGAkOVxgJDBcYCQJXGAkOFxgJC5cYCVceDA3XGAkFVxgJC5cYCQ1XGAlXHZcYCQyXGAlXHgwN1xgJDhcYCQsXGAkLlxgJFxiXGAkJlxgJVx4MDdcYCQTXGAkMFxgJAZcYCQuXGAkLFxgJDhcYCQtXGAkMFxgJCxcYCQoXGAkGlxgJDJcYCQuXGAkKFxgJAZcYCQXXGAkOFxgJVwwXGAkMlxgJVwwWDlZBFkJWCVZBFkJWVx4MDdYMFgnWCJYLlgxWDlYL1gvWCdZBFkJWVx4MDdYMFlceDA3WDVZXGJYMVg6WQpYMVkDWCdZBllcYlkEWCdYKFkKWQZYOVgxWDZYMFkEWQNZXHgwN1kGWCdZCllcYlkFWQJYJ1kEWDlZBFkKWCdZBlgnWQRZA1kGWC1YKlkJWQJYKFkEWVxiWC1YKVgnWC5YMVkBWQJYN1g5WChYL1gxWQNZBlglWDBYJ1kDWQVYJ1gnWC1YL1glWQRYJ1kBWQpZXHgwN1goWDlYNlkDWQpZAVgoWC1YK1lcYlkFWQZZXGJZXHgwN1lcYlgjWQZYJ1gsWC9YJ1kEWVx4MDdYJ1gzWQRZBVg5WQZYL1kEWQpYM1g5WChYMVg1WQRZCVkFWQZYMFgoWVx4MDdYJ1gjWQZZXHgwN1kFWCtZBFkDWQZYKlgnWQRYJ1gtWQpYK1kFWDVYMVg0WDFYLVgtWVxiWQRZXGJZAVkKWCdYMFgnWQRZA1kEWQVYMVgpWCdZBlgqWCdZBFkBWCNYKFlcYlguWCdYNVgjWQZYKlgnWQZZXHgwN1gnWQRZClg5WDZZXGJZXGJZAlgvWCdYKFkGWC5ZClgxWChZBlgqWQRZA1kFWDRYJ1ghWVxiWVx4MDdZClgnWChZXGJZAlg1WDVZXGJZBVgnWDFZAlkFWCNYLVgvWQZYLVkGWDlYL1kFWDFYI1kKWCdYLVgpWQNYKlgoWC9ZXGJZBlkKWCxYKFkFWQZZXHgwN1gqWC1YKlgsWVx4MDdYKVgzWQZYKVkKWCpZBVkDWDFYKVg6WDJYKVkGWQFYM1goWQpYKlkEWQRZXHgwN1kEWQZYJ1gqWQRZA1kCWQRYKFkEWQVYJ1g5WQZZXHgwN1gjWVxiWQRYNFkKWCFZBllcYlgxWCNZBVgnWQFZClkDWChZA1kEWDBYJ1gqWDFYKlgoWChYI1kGWVx4MDdZBVgzWCdZBlkDWChZClg5WQFZAlgvWC1YM1kGWQRZXHgwN1kFWDRYOVgxWCNZXHgwN1kEWDRZXHgwN1gxWQJYN1gxWDdZBFgocHJvZmlsZXNlcnZpY2VkZWZhdWx0aGltc2VsZmRldGFpbHNjb250ZW50c3VwcG9ydHN0YXJ0ZWRtZXNzYWdlc3VjY2Vzc2Zhc2hpb248dGl0bGU+Y291bnRyeWFjY291bnRjcmVhdGVkc3Rvcmllc3Jlc3VsdHNydW5uaW5ncHJvY2Vzc3dyaXRpbmdvYmplY3RzdmlzaWJsZXdlbGNvbWVhcnRpY2xldW5rbm93bm5ldHdvcmtjb21wYW55ZHluYW1pY2Jyb3dzZXJwcml2YWN5cHJvYmxlbVNlcnZpY2VyZXNwZWN0ZGlzcGxheXJlcXVlc3RyZXNlcnZld2Vic2l0ZWhpc3RvcnlmcmllbmRzb3B0aW9uc3dvcmtpbmd2ZXJzaW9ubWlsbGlvbmNoYW5uZWx3aW5kb3cuYWRkcmVzc3Zpc2l0ZWR3ZWF0aGVyY29ycmVjdHByb2R1Y3RlZGlyZWN0Zm9yd2FyZHlvdSBjYW5yZW1vdmVkc3ViamVjdGNvbnRyb2xhcmNoaXZlY3VycmVudHJlYWRpbmdsaWJyYXJ5bGltaXRlZG1hbmFnZXJmdXJ0aGVyc3VtbWFyeW1hY2hpbmVtaW51dGVzcHJpdmF0ZWNvbnRleHRwcm9ncmFtc29jaWV0eW51bWJlcnN3cml0dGVuZW5hYmxlZHRyaWdnZXJzb3VyY2VzbG9hZGluZ2VsZW1lbnRwYXJ0bmVyZmluYWxseXBlcmZlY3RtZWFuaW5nc3lzdGVtc2tlZXBpbmdjdWx0dXJlJnF1b3Q7LGpvdXJuYWxwcm9qZWN0c3VyZmFjZXMmcXVvdDtleHBpcmVzcmV2aWV3c2JhbGFuY2VFbmdsaXNoQ29udGVudHRocm91Z2hQbGVhc2Ugb3BpbmlvbmNvbnRhY3RhdmVyYWdlcHJpbWFyeXZpbGxhZ2VTcGFuaXNoZ2FsbGVyeWRlY2xpbmVtZWV0aW5nbWlzc2lvbnBvcHVsYXJxdWFsaXR5bWVhc3VyZWdlbmVyYWxzcGVjaWVzc2Vzc2lvbnNlY3Rpb253cml0ZXJzY291bnRlcmluaXRpYWxyZXBvcnRzZmlndXJlc21lbWJlcnNob2xkaW5nZGlzcHV0ZWVhcmxpZXJleHByZXNzZGlnaXRhbHBpY3R1cmVBbm90aGVybWFycmllZHRyYWZmaWNsZWFkaW5nY2hhbmdlZGNlbnRyYWx2aWN0b3J5aW1hZ2VzL3JlYXNvbnNzdHVkaWVzZmVhdHVyZWxpc3RpbmdtdXN0IGJlc2Nob29sc1ZlcnNpb251c3VhbGx5ZXBpc29kZXBsYXlpbmdncm93aW5nb2J2aW91c292ZXJsYXlwcmVzZW50YWN0aW9uczwvdWw+XHIKd3JhcHBlcmFscmVhZHljZXJ0YWlucmVhbGl0eXN0b3JhZ2Vhbm90aGVyZGVza3RvcG9mZmVyZWRwYXR0ZXJudW51c3VhbERpZ2l0YWxjYXBpdGFsV2Vic2l0ZWZhaWx1cmVjb25uZWN0cmVkdWNlZEFuZHJvaWRkZWNhZGVzcmVndWxhciAmYW1wOyBhbmltYWxzcmVsZWFzZUF1dG9tYXRnZXR0aW5nbWV0aG9kc25vdGhpbmdQb3B1bGFyY2FwdGlvbmxldHRlcnNjYXB0dXJlc2NpZW5jZWxpY2Vuc2VjaGFuZ2VzRW5nbGFuZD0xJmFtcDtIaXN0b3J5ID0gbmV3IENlbnRyYWx1cGRhdGVkU3BlY2lhbE5ldHdvcmtyZXF1aXJlY29tbWVudHdhcm5pbmdDb2xsZWdldG9vbGJhcnJlbWFpbnNiZWNhdXNlZWxlY3RlZERldXRzY2hmaW5hbmNld29ya2Vyc3F1aWNrbHliZXR3ZWVuZXhhY3RseXNldHRpbmdkaXNlYXNlU29jaWV0eXdlYXBvbnNleGhpYml0Jmx0OyEtLUNvbnRyb2xjbGFzc2VzY292ZXJlZG91dGxpbmVhdHRhY2tzZGV2aWNlcyh3aW5kb3dwdXJwb3NldGl0bGU9Ik1vYmlsZSBraWxsaW5nc2hvd2luZ0l0YWxpYW5kcm9wcGVkaGVhdmlseWVmZmVjdHMtMSddKTsKY29uZmlybUN1cnJlbnRhZHZhbmNlc2hhcmluZ29wZW5pbmdkcmF3aW5nYmlsbGlvbm9yZGVyZWRHZXJtYW55cmVsYXRlZDwvZm9ybT5pbmNsdWRld2hldGhlcmRlZmluZWRTY2llbmNlY2F0YWxvZ0FydGljbGVidXR0b25zbGFyZ2VzdHVuaWZvcm1qb3VybmV5c2lkZWJhckNoaWNhZ29ob2xpZGF5R2VuZXJhbHBhc3NhZ2UsJnF1b3Q7YW5pbWF0ZWZlZWxpbmdhcnJpdmVkcGFzc2luZ25hdHVyYWxyb3VnaGx5LgoKVGhlIGJ1dCBub3RkZW5zaXR5QnJpdGFpbkNoaW5lc2VsYWNrIG9mdHJpYnV0ZUlyZWxhbmQiIGRhdGEtZmFjdG9yc3JlY2VpdmV0aGF0IGlzTGlicmFyeWh1c2JhbmRpbiBmYWN0YWZmYWlyc0NoYXJsZXNyYWRpY2FsYnJvdWdodGZpbmRpbmdsYW5kaW5nOmxhbmc9InJldHVybiBsZWFkZXJzcGxhbm5lZHByZW1pdW1wYWNrYWdlQW1lcmljYUVkaXRpb25dJnF1b3Q7TWVzc2FnZW5lZWQgdG92YWx1ZT0iY29tcGxleGxvb2tpbmdzdGF0aW9uYmVsaWV2ZXNtYWxsZXItbW9iaWxlcmVjb3Jkc3dhbnQgdG9raW5kIG9mRmlyZWZveHlvdSBhcmVzaW1pbGFyc3R1ZGllZG1heGltdW1oZWFkaW5ncmFwaWRseWNsaW1hdGVraW5nZG9tZW1lcmdlZGFtb3VudHNmb3VuZGVkcGlvbmVlcmZvcm11bGFkeW5hc3R5aG93IHRvIFN1cHBvcnRyZXZlbnVlZWNvbm9teVJlc3VsdHNicm90aGVyc29sZGllcmxhcmdlbHljYWxsaW5nLiZxdW90O0FjY291bnRFZHdhcmQgc2VnbWVudFJvYmVydCBlZmZvcnRzUGFjaWZpY2xlYXJuZWR1cCB3aXRoaGVpZ2h0OndlIGhhdmVBbmdlbGVzbmF0aW9uc19zZWFyY2hhcHBsaWVkYWNxdWlyZW1hc3NpdmVncmFudGVkOiBmYWxzZXRyZWF0ZWRiaWdnZXN0YmVuZWZpdGRyaXZpbmdTdHVkaWVzbWluaW11bXBlcmhhcHNtb3JuaW5nc2VsbGluZ2lzIHVzZWRyZXZlcnNldmFyaWFudCByb2xlPSJtaXNzaW5nYWNoaWV2ZXByb21vdGVzdHVkZW50c29tZW9uZWV4dHJlbWVyZXN0b3JlYm90dG9tOmV2b2x2ZWRhbGwgdGhlc2l0ZW1hcGVuZ2xpc2h3YXkgdG8gIEF1Z3VzdHN5bWJvbHNDb21wYW55bWF0dGVyc211c2ljYWxhZ2FpbnN0c2VydmluZ30pKCk7XHIKcGF5bWVudHRyb3VibGVjb25jZXB0Y29tcGFyZXBhcmVudHNwbGF5ZXJzcmVnaW9uc21vbml0b3IgJydUaGUgd2lubmluZ2V4cGxvcmVhZGFwdGVkR2FsbGVyeXByb2R1Y2VhYmlsaXR5ZW5oYW5jZWNhcmVlcnMpLiBUaGUgY29sbGVjdFNlYXJjaCBhbmNpZW50ZXhpc3RlZGZvb3RlciBoYW5kbGVycHJpbnRlZGNvbnNvbGVFYXN0ZXJuZXhwb3J0c3dpbmRvd3NDaGFubmVsaWxsZWdhbG5ldXRyYWxzdWdnZXN0X2hlYWRlcnNpZ25pbmcuaHRtbCI+c2V0dGxlZHdlc3Rlcm5jYXVzaW5nLXdlYmtpdGNsYWltZWRKdXN0aWNlY2hhcHRlcnZpY3RpbXNUaG9tYXMgbW96aWxsYXByb21pc2VwYXJ0aWVzZWRpdGlvbm91dHNpZGU6ZmFsc2UsaHVuZHJlZE9seW1waWNfYnV0dG9uYXV0aG9yc3JlYWNoZWRjaHJvbmljZGVtYW5kc3NlY29uZHNwcm90ZWN0YWRvcHRlZHByZXBhcmVuZWl0aGVyZ3JlYXRseWdyZWF0ZXJvdmVyYWxsaW1wcm92ZWNvbW1hbmRzcGVjaWFsc2VhcmNoLndvcnNoaXBmdW5kaW5ndGhvdWdodGhpZ2hlc3RpbnN0ZWFkdXRpbGl0eXF1YXJ0ZXJDdWx0dXJldGVzdGluZ2NsZWFybHlleHBvc2VkQnJvd3NlcmxpYmVyYWx9IGNhdGNoUHJvamVjdGV4YW1wbGVoaWRlKCk7RmxvcmlkYWFuc3dlcnNhbGxvd2VkRW1wZXJvcmRlZmVuc2VzZXJpb3VzZnJlZWRvbVNldmVyYWwtYnV0dG9uRnVydGhlcm91dCBvZiAhPSBudWxsdHJhaW5lZERlbm1hcmt2b2lkKDApL2FsbC5qc3ByZXZlbnRSZXF1ZXN0U3RlcGhlbgoKV2hlbiBvYnNlcnZlPC9oMj5ccgpNb2Rlcm4gcHJvdmlkZSIgYWx0PSJib3JkZXJzLgoKRm9yIAoKTWFueSBhcnRpc3RzcG93ZXJlZHBlcmZvcm1maWN0aW9udHlwZSBvZm1lZGljYWx0aWNrZXRzb3Bwb3NlZENvdW5jaWx3aXRuZXNzanVzdGljZUdlb3JnZSBCZWxnaXVtLi4uPC9hPnR3aXR0ZXJub3RhYmx5d2FpdGluZ3dhcmZhcmUgT3RoZXIgcmFua2luZ3BocmFzZXNtZW50aW9uc3Vydml2ZXNjaG9sYXI8L3A+XHIKIENvdW50cnlpZ25vcmVkbG9zcyBvZmp1c3QgYXNHZW9yZ2lhc3RyYW5nZTxoZWFkPjxzdG9wcGVkMSddKTtccgppc2xhbmRzbm90YWJsZWJvcmRlcjpsaXN0IG9mY2FycmllZDEwMCwwMDA8L2gzPgogc2V2ZXJhbGJlY29tZXNzZWxlY3Qgd2VkZGluZzAwLmh0bWxtb25hcmNob2ZmIHRoZXRlYWNoZXJoaWdobHkgYmlvbG9neWxpZmUgb2ZvciBldmVucmlzZSBvZiZyYXF1bztwbHVzb25laHVudGluZyh0aG91Z2hEb3VnbGFzam9pbmluZ2NpcmNsZXNGb3IgdGhlQW5jaWVudFZpZXRuYW12ZWhpY2xlc3VjaCBhc2NyeXN0YWx2YWx1ZSA9V2luZG93c2Vuam95ZWRhIHNtYWxsYXNzdW1lZDxhIGlkPSJmb3JlaWduIEFsbCByaWhvdyB0aGVEaXNwbGF5cmV0aXJlZGhvd2V2ZXJoaWRkZW47YmF0dGxlc3NlZWtpbmdjYWJpbmV0d2FzIG5vdGxvb2sgYXRjb25kdWN0Z2V0IHRoZUphbnVhcnloYXBwZW5zdHVybmluZ2E6aG92ZXJPbmxpbmUgRnJlbmNoIGxhY2tpbmd0eXBpY2FsZXh0cmFjdGVuZW1pZXNldmVuIGlmZ2VuZXJhdGRlY2lkZWRhcmUgbm90L3NlYXJjaGJlbGllZnMtaW1hZ2U6bG9jYXRlZHN0YXRpYy5sb2dpbiI+Y29udmVydHZpb2xlbnRlbnRlcmVkZmlyc3QiPmNpcmN1aXRGaW5sYW5kY2hlbWlzdHNoZSB3YXMxMHB4OyI+YXMgc3VjaGRpdmlkZWQ8L3NwYW4+d2lsbCBiZWxpbmUgb2ZhIGdyZWF0bXlzdGVyeS9pbmRleC5mYWxsaW5nZHVlIHRvIHJhaWx3YXljb2xsZWdlbW9uc3RlcmRlc2NlbnRpdCB3aXRobnVjbGVhckpld2lzaCBwcm90ZXN0QnJpdGlzaGZsb3dlcnNwcmVkaWN0cmVmb3Jtc2J1dHRvbiB3aG8gd2FzbGVjdHVyZWluc3RhbnRzdWljaWRlZ2VuZXJpY3BlcmlvZHNtYXJrZXRzU29jaWFsIGZpc2hpbmdjb21iaW5lZ3JhcGhpY3dpbm5lcnM8YnIgLz48YnkgdGhlIE5hdHVyYWxQcml2YWN5Y29va2llc291dGNvbWVyZXNvbHZlU3dlZGlzaGJyaWVmbHlQZXJzaWFuc28gbXVjaENlbnR1cnlkZXBpY3RzY29sdW1uc2hvdXNpbmdzY3JpcHRzbmV4dCB0b2JlYXJpbmdtYXBwaW5ncmV2aXNlZGpRdWVyeSgtd2lkdGg6dGl0bGUiPnRvb2x0aXBTZWN0aW9uZGVzaWduc1R1cmtpc2h5b3VuZ2VyLm1hdGNoKH0pKCk7CgpidXJuaW5nb3BlcmF0ZWRlZ3JlZXNzb3VyY2U9UmljaGFyZGNsb3NlbHlwbGFzdGljZW50cmllczwvdHI+XHIKY29sb3I6I3VsIGlkPSJwb3NzZXNzcm9sbGluZ3BoeXNpY3NmYWlsaW5nZXhlY3V0ZWNvbnRlc3RsaW5rIHRvRGVmYXVsdDxiciAvPgo6IHRydWUsY2hhcnRlcnRvdXJpc21jbGFzc2ljcHJvY2VlZGV4cGxhaW48L2gxPlxyCm9ubGluZS4/eG1sIHZlaGVscGluZ2RpYW1vbmR1c2UgdGhlYWlybGluZWVuZCAtLT4pLmF0dHIocmVhZGVyc2hvc3RpbmcjZmZmZmZmcmVhbGl6ZVZpbmNlbnRzaWduYWxzIHNyYz0iL1Byb2R1Y3RkZXNwaXRlZGl2ZXJzZXRlbGxpbmdQdWJsaWMgaGVsZCBpbkpvc2VwaCB0aGVhdHJlYWZmZWN0czxzdHlsZT5hIGxhcmdlZG9lc24ndGxhdGVyLCBFbGVtZW50ZmF2aWNvbmNyZWF0b3JIdW5nYXJ5QWlycG9ydHNlZSB0aGVzbyB0aGF0TWljaGFlbFN5c3RlbXNQcm9ncmFtcywgYW5kICB3aWR0aD1lJnF1b3Q7dHJhZGluZ2xlZnQiPgpwZXJzb25zR29sZGVuIEFmZmFpcnNncmFtbWFyZm9ybWluZ2Rlc3Ryb3lpZGVhIG9mY2FzZSBvZm9sZGVzdCB0aGlzIGlzLnNyYyA9IGNhcnRvb25yZWdpc3RyQ29tbW9uc011c2xpbXNXaGF0IGlzaW4gbWFueW1hcmtpbmdyZXZlYWxzSW5kZWVkLGVxdWFsbHkvc2hvd19hb3V0ZG9vcmVzY2FwZShBdXN0cmlhZ2VuZXRpY3N5c3RlbSxJbiB0aGUgc2l0dGluZ0hlIGFsc29Jc2xhbmRzQWNhZGVteQoJCTwhLS1EYW5pZWwgYmluZGluZ2Jsb2NrIj5pbXBvc2VkdXRpbGl6ZUFicmFoYW0oZXhjZXB0e3dpZHRoOnB1dHRpbmcpLmh0bWwofHwgW107CkRBVEFbICpraXRjaGVubW91bnRlZGFjdHVhbCBkaWFsZWN0bWFpbmx5IF9ibGFuaydpbnN0YWxsZXhwZXJ0c2lmKHR5cGVJdCBhbHNvJmNvcHk7ICI+VGVybXNib3JuIGluT3B0aW9uc2Vhc3Rlcm50YWxraW5nY29uY2VybmdhaW5lZCBvbmdvaW5nanVzdGlmeWNyaXRpY3NmYWN0b3J5aXRzIG93bmFzc2F1bHRpbnZpdGVkbGFzdGluZ2hpcyBvd25ocmVmPSIvIiByZWw9ImRldmVsb3Bjb25jZXJ0ZGlhZ3JhbWRvbGxhcnNjbHVzdGVycGhwP2lkPWFsY29ob2wpO30pKCk7dXNpbmcgYT48c3Bhbj52ZXNzZWxzcmV2aXZhbEFkZHJlc3NhbWF0ZXVyYW5kcm9pZGFsbGVnZWRpbGxuZXNzd2Fsa2luZ2NlbnRlcnNxdWFsaWZ5bWF0Y2hlc3VuaWZpZWRleHRpbmN0RGVmZW5zZWRpZWQgaW4KCTwhLS0gY3VzdG9tc2xpbmtpbmdMaXR0bGUgQm9vayBvZmV2ZW5pbmdtaW4uanM/YXJlIHRoZWtvbnRha3R0b2RheSdzLmh0bWwiIHRhcmdldD13ZWFyaW5nQWxsIFJpZzsKfSkoKTtyYWlzaW5nIEFsc28sIGNydWNpYWxhYm91dCI+ZGVjbGFyZS0tPgo8c2NmaXJlZm94YXMgbXVjaGFwcGxpZXNpbmRleCwgcywgYnV0IHR5cGUgPSAKXHIKPCEtLXRvd2FyZHNSZWNvcmRzUHJpdmF0ZUZvcmVpZ25QcmVtaWVyY2hvaWNlc1ZpcnR1YWxyZXR1cm5zQ29tbWVudFBvd2VyZWRpbmxpbmU7cG92ZXJ0eWNoYW1iZXJMaXZpbmcgdm9sdW1lc0FudGhvbnlsb2dpbiIgUmVsYXRlZEVjb25vbXlyZWFjaGVzY3V0dGluZ2dyYXZpdHlsaWZlIGluQ2hhcHRlci1zaGFkb3dOb3RhYmxlPC90ZD5ccgogcmV0dXJuc3RhZGl1bXdpZGdldHN2YXJ5aW5ndHJhdmVsc2hlbGQgYnl3aG8gYXJld29yayBpbmZhY3VsdHlhbmd1bGFyd2hvIGhhZGFpcnBvcnR0b3duIG9mCgpTb21lICdjbGljaydjaGFyZ2Vza2V5d29yZGl0IHdpbGxjaXR5IG9mKHRoaXMpO0FuZHJldyB1bmlxdWUgY2hlY2tlZG9yIG1vcmUzMDBweDsgcmV0dXJuO3JzaW9uPSJwbHVnaW5zd2l0aGluIGhlcnNlbGZTdGF0aW9uRmVkZXJhbHZlbnR1cmVwdWJsaXNoc2VudCB0b3RlbnNpb25hY3RyZXNzY29tZSB0b2ZpbmdlcnNEdWtlIG9mcGVvcGxlLGV4cGxvaXR3aGF0IGlzaGFybW9ueWEgbWFqb3IiOiJodHRwaW4gaGlzIG1lbnUiPgptb250aGx5b2ZmaWNlcmNvdW5jaWxnYWluaW5nZXZlbiBpblN1bW1hcnlkYXRlIG9mbG95YWx0eWZpdG5lc3NhbmQgd2FzZW1wZXJvcnN1cHJlbWVTZWNvbmQgaGVhcmluZ1J1c3NpYW5sb25nZXN0QWxiZXJ0YWxhdGVyYWxzZXQgb2Ygc21hbGwiPi5hcHBlbmRkbyB3aXRoZmVkZXJhbGJhbmsgb2ZiZW5lYXRoRGVzcGl0ZUNhcGl0YWxncm91bmRzKSwgYW5kIHBlcmNlbnRpdCBmcm9tY2xvc2luZ2NvbnRhaW5JbnN0ZWFkZmlmdGVlbmFzIHdlbGwueWFob28ucmVzcG9uZGZpZ2h0ZXJvYnNjdXJlcmVmbGVjdG9yZ2FuaWM9IE1hdGguZWRpdGluZ29ubGluZSBwYWRkaW5nYSB3aG9sZW9uZXJyb3J5ZWFyIG9mZW5kIG9mIGJhcnJpZXJ3aGVuIGl0aGVhZGVyIGhvbWUgb2ZyZXN1bWVkcmVuYW1lZHN0cm9uZz5oZWF0aW5ncmV0YWluc2Nsb3VkZnJ3YXkgb2YgTWFyY2ggMWtub3dpbmdpbiBwYXJ0QmV0d2Vlbmxlc3NvbnNjbG9zZXN0dmlydHVhbGxpbmtzIj5jcm9zc2VkRU5EIC0tPmZhbW91cyBhd2FyZGVkTGljZW5zZUhlYWx0aCBmYWlybHkgd2VhbHRoeW1pbmltYWxBZnJpY2FuY29tcGV0ZWxhYmVsIj5zaW5naW5nZmFybWVyc0JyYXNpbClkaXNjdXNzcmVwbGFjZUdyZWdvcnlmb250IGNvcHVyc3VlZGFwcGVhcnNtYWtlIHVwcm91bmRlZGJvdGggb2ZibG9ja2Vkc2F3IHRoZW9mZmljZXNjb2xvdXJzaWYoZG9jdXdoZW4gaGVlbmZvcmNlcHVzaChmdUF1Z3VzdCBVVEYtOCI+RmFudGFzeWluIG1vc3Rpbmp1cmVkVXN1YWxseWZhcm1pbmdjbG9zdXJlb2JqZWN0IGRlZmVuY2V1c2Ugb2YgTWVkaWNhbDxib2R5PgpldmlkZW50YmUgdXNlZGtleUNvZGVzaXh0ZWVuSXNsYW1pYyMwMDAwMDBlbnRpcmUgd2lkZWx5IGFjdGl2ZSAodHlwZW9mb25lIGNhbmNvbG9yID1zcGVha2VyZXh0ZW5kc1BoeXNpY3N0ZXJyYWluPHRib2R5PmZ1bmVyYWx2aWV3aW5nbWlkZGxlIGNyaWNrZXRwcm9waGV0c2hpZnRlZGRvY3RvcnNSdXNzZWxsIHRhcmdldGNvbXBhY3RhbGdlYnJhc29jaWFsLWJ1bGsgb2ZtYW4gYW5kPC90ZD4KIGhlIGxlZnQpLnZhbCgpZmFsc2UpO2xvZ2ljYWxiYW5raW5naG9tZSB0b25hbWluZyBBcml6b25hY3JlZGl0cyk7Cn0pOwpmb3VuZGVyaW4gdHVybkNvbGxpbnNiZWZvcmUgQnV0IHRoZWNoYXJnZWRUaXRsZSI+Q2FwdGFpbnNwZWxsZWRnb2RkZXNzVGFnIC0tPkFkZGluZzpidXQgd2FzUmVjZW50IHBhdGllbnRiYWNrIGluPWZhbHNlJkxpbmNvbG53ZSBrbm93Q291bnRlckp1ZGFpc21zY3JpcHQgYWx0ZXJlZCddKTsKICBoYXMgdGhldW5jbGVhckV2ZW50Jyxib3RoIGlubm90IGFsbAoKPCEtLSBwbGFjaW5naGFyZCB0byBjZW50ZXJzb3J0IG9mY2xpZW50c3N0cmVldHNCZXJuYXJkYXNzZXJ0c3RlbmQgdG9mYW50YXN5ZG93biBpbmhhcmJvdXJGcmVlZG9tamV3ZWxyeS9hYm91dC4uc2VhcmNobGVnZW5kc2lzIG1hZGVtb2Rlcm4gb25seSBvbm9ubHkgdG9pbWFnZSIgbGluZWFyIHBhaW50ZXJhbmQgbm90cmFyZWx5IGFjcm9ueW1kZWxpdmVyc2hvcnRlcjAwJmFtcDthcyBtYW55d2lkdGg9Ii8qIDwhW0N0aXRsZSA9b2YgdGhlIGxvd2VzdCBwaWNrZWQgZXNjYXBlZHVzZXMgb2ZwZW9wbGVzIFB1YmxpY01hdHRoZXd0YWN0aWNzZGFtYWdlZHdheSBmb3JsYXdzIG9mZWFzeSB0byB3aW5kb3dzdHJvbmcgIHNpbXBsZX1jYXRjaChzZXZlbnRoaW5mb2JveHdlbnQgdG9wYWludGVkY2l0aXplbkkgZG9uJ3RyZXRyZWF0LiBTb21lIHd3LiIpOwpib21iaW5nbWFpbHRvOm1hZGUgaW4uIE1hbnkgY2Fycmllc3x8e307d2l3b3JrIG9mc3lub255bWRlZmVhdHNmYXZvcmVkb3B0aWNhbHBhZ2VUcmF1bmxlc3Mgc2VuZGluZ2xlZnQiPjxjb21TY29yQWxsIHRoZWpRdWVyeS50b3VyaXN0Q2xhc3NpY2ZhbHNlIiBXaWxoZWxtc3VidXJic2dlbnVpbmViaXNob3BzLnNwbGl0KGdsb2JhbCBmb2xsb3dzYm9keSBvZm5vbWluYWxDb250YWN0c2VjdWxhcmxlZnQgdG9jaGllZmx5LWhpZGRlbi1iYW5uZXI8L2xpPgoKLiBXaGVuIGluIGJvdGhkaXNtaXNzRXhwbG9yZWFsd2F5cyB2aWEgdGhlc3BhQzFvbHdlbGZhcmVydWxpbmcgYXJyYW5nZWNhcHRhaW5oaXMgc29ucnVsZSBvZmhlIHRvb2tpdHNlbGYsPTAmYW1wOyhjYWxsZWRzYW1wbGVzdG8gbWFrZWNvbS9wYWdNYXJ0aW4gS2VubmVkeWFjY2VwdHNmdWxsIG9maGFuZGxlZEJlc2lkZXMvLy0tPjwvYWJsZSB0b3RhcmdldHNlc3NlbmNlaGltIHRvIGl0cyBieSBjb21tb24ubWluZXJhbHRvIHRha2V3YXlzIHRvcy5vcmcvbGFkdmlzZWRwZW5hbHR5c2ltcGxlOmlmIHRoZXlMZXR0ZXJzYSBzaG9ydEhlcmJlcnRzdHJpa2VzIGdyb3Vwcy5sZW5ndGhmbGlnaHRzb3ZlcmxhcHNsb3dseSBsZXNzZXIgc29jaWFsIDwvcD4KCQlpdCBpbnRvcmFua2VkIHJhdGUgb2Z1bD5ccgogIGF0dGVtcHRwYWlyIG9mbWFrZSBpdEtvbnRha3RBbnRvbmlvaGF2aW5nIHJhdGluZ3MgYWN0aXZlc3RyZWFtc3RyYXBwZWQiKS5jc3MoaG9zdGlsZWxlYWQgdG9saXR0bGUgZ3JvdXBzLFBpY3R1cmUtLT5ccgpccgogcm93cz0iIG9iamVjdGludmVyc2U8Zm9vdGVyQ3VzdG9tVj48XFwvc2Nyc29sdmluZ0NoYW1iZXJzbGF2ZXJ5d291bmRlZHdoZXJlYXMhPSAndW5kZm9yIGFsbHBhcnRseSAtcmlnaHQ6QXJhYmlhbmJhY2tlZCBjZW50dXJ5dW5pdCBvZm1vYmlsZS1FdXJvcGUsaXMgaG9tZXJpc2sgb2ZkZXNpcmVkQ2xpbnRvbmNvc3Qgb2ZhZ2Ugb2YgYmVjb21lIG5vbmUgb2ZwJnF1b3Q7TWlkZGxlIGVhZCcpWzBDcml0aWNzc3R1ZGlvcz4mY29weTtncm91cCI+YXNzZW1ibG1ha2luZyBwcmVzc2Vkd2lkZ2V0LnBzOiIgPyByZWJ1aWx0Ynkgc29tZUZvcm1lciBlZGl0b3JzZGVsYXllZENhbm9uaWNoYWQgdGhlcHVzaGluZ2NsYXNzPSJidXQgYXJlcGFydGlhbEJhYnlsb25ib3R0b20gY2FycmllckNvbW1hbmRpdHMgdXNlQXMgd2l0aGNvdXJzZXNhIHRoaXJkZGVub3Rlc2Fsc28gaW5Ib3VzdG9uMjBweDsiPmFjY3VzZWRkb3VibGUgZ29hbCBvZkZhbW91cyApLmJpbmQocHJpZXN0cyBPbmxpbmVpbiBKdWx5c3QgKyAiZ2NvbnN1bHRkZWNpbWFsaGVscGZ1bHJldml2ZWRpcyB2ZXJ5cicrJ2lwdGxvc2luZyBmZW1hbGVzaXMgYWxzb3N0cmluZ3NkYXlzIG9mYXJyaXZhbGZ1dHVyZSA8b2JqZWN0Zm9yY2luZ1N0cmluZygiIC8+CgkJaGVyZSBpc2VuY29kZWQuICBUaGUgYmFsbG9vbmRvbmUgYnkvY29tbW9uYmdjb2xvcmxhdyBvZiBJbmRpYW5hYXZvaWRlZGJ1dCB0aGUycHggM3B4anF1ZXJ5LmFmdGVyIGFwb2xpY3kubWVuIGFuZGZvb3Rlci09IHRydWU7Zm9yIHVzZXNjcmVlbi5JbmRpYW4gaW1hZ2UgPWZhbWlseSxodHRwOi8vICZuYnNwO2RyaXZlcnNldGVybmFsc2FtZSBhc25vdGljZWR2aWV3ZXJzfSkoKTsKIGlzIG1vcmVzZWFzb25zZm9ybWVyIHRoZSBuZXdpcyBqdXN0Y29uc2VudCBTZWFyY2h3YXMgdGhld2h5IHRoZXNoaXBwZWRicj48YnI+d2lkdGg6IGhlaWdodD1tYWRlIG9mY3Vpc2luZWlzIHRoYXRhIHZlcnkgQWRtaXJhbCBmaXhlZDtub3JtYWwgTWlzc2lvblByZXNzLCBvbnRhcmlvY2hhcnNldHRyeSB0byBpbnZhZGVkPSJ0cnVlInNwYWNpbmdpcyBtb3N0YSBtb3JlIHRvdGFsbHlmYWxsIG9mfSk7XHIKICBpbW1lbnNldGltZSBpbnNldCBvdXRzYXRpc2Z5dG8gZmluZGRvd24gdG9sb3Qgb2YgUGxheWVyc2luIEp1bmVxdWFudHVtbm90IHRoZXRpbWUgdG9kaXN0YW50RmlubmlzaHNyYyA9IChzaW5nbGUgaGVscCBvZkdlcm1hbiBsYXcgYW5kbGFiZWxlZGZvcmVzdHNjb29raW5nc3BhY2UiPmhlYWRlci13ZWxsIGFzU3RhbmxleWJyaWRnZXMvZ2xvYmFsQ3JvYXRpYSBBYm91dCBbMF07CiAgaXQsIGFuZGdyb3VwZWRiZWluZyBhKXt0aHJvd2hlIG1hZGVsaWdodGVyZXRoaWNhbEZGRkZGRiJib3R0b20ibGlrZSBhIGVtcGxveXNsaXZlIGluYXMgc2VlbnByaW50ZXJtb3N0IG9mdWItbGlua3JlamVjdHNhbmQgdXNlaW1hZ2UiPnN1Y2NlZWRmZWVkaW5nTnVjbGVhcmluZm9ybWF0byBoZWxwV29tZW4nc05laXRoZXJNZXhpY2FucHJvdGVpbjx0YWJsZSBieSBtYW55aGVhbHRoeWxhd3N1aXRkZXZpc2VkLnB1c2goe3NlbGxlcnNzaW1wbHkgVGhyb3VnaC5jb29raWUgSW1hZ2Uob2xkZXIiPnVzLmpzIj4gU2luY2UgdW5pdmVyc2xhcmdlciBvcGVuIHRvIS0tIGVuZGxpZXMgaW4nXSk7XHIKICBtYXJrZXR3aG8gaXMgKCJET01Db21hbmFnZWRvbmUgZm9ydHlwZW9mIEtpbmdkb21wcm9maXRzcHJvcG9zZXRvIHNob3djZW50ZXI7bWFkZSBpdGRyZXNzZWR3ZXJlIGlubWl4dHVyZXByZWNpc2VhcmlzaW5nc3JjID0gJ21ha2UgYSBzZWN1cmVkQmFwdGlzdHZvdGluZyAKCQl2YXIgTWFyY2ggMmdyZXcgdXBDbGltYXRlLnJlbW92ZXNraWxsZWR3YXkgdGhlPC9oZWFkPmZhY2Ugb2ZhY3RpbmcgcmlnaHQiPnRvIHdvcmtyZWR1Y2VzaGFzIGhhZGVyZWN0ZWRzaG93KCk7YWN0aW9uPWJvb2sgb2ZhbiBhcmVhPT0gImh0dDxoZWFkZXIKPGh0bWw+Y29uZm9ybWZhY2luZyBjb29raWUucmVseSBvbmhvc3RlZCAuY3VzdG9taGUgd2VudGJ1dCBmb3JzcHJlYWQgRmFtaWx5IGEgbWVhbnNvdXQgdGhlZm9ydW1zLmZvb3RhZ2UiPk1vYmlsQ2xlbWVudHMiIGlkPSJhcyBoaWdoaW50ZW5zZS0tPjwhLS1mZW1hbGUgaXMgc2VlbmltcGxpZWRzZXQgdGhlYSBzdGF0ZWFuZCBoaXNmYXN0ZXN0YmVzaWRlc2J1dHRvbl9ib3VuZGVkIj48aW1nIEluZm9ib3hldmVudHMsYSB5b3VuZ2FuZCBhcmVOYXRpdmUgY2hlYXBlclRpbWVvdXRhbmQgaGFzZW5naW5lc3dvbiB0aGUobW9zdGx5cmlnaHQ6IGZpbmQgYSAtYm90dG9tUHJpbmNlIGFyZWEgb2Ztb3JlIG9mc2VhcmNoX25hdHVyZSxsZWdhbGx5cGVyaW9kLGxhbmQgb2ZvciB3aXRoaW5kdWNlZHByb3ZpbmdtaXNzaWxlbG9jYWxseUFnYWluc3R0aGUgd2F5ayZxdW90O3B4OyI+XHIKcHVzaGVkIGFiYW5kb25udW1lcmFsQ2VydGFpbkluIHRoaXNtb3JlIGlub3Igc29tZW5hbWUgaXNhbmQsIGluY3Jvd25lZElTQk4gMC1jcmVhdGVzT2N0b2Jlcm1heSBub3RjZW50ZXIgbGF0ZSBpbkRlZmVuY2VlbmFjdGVkd2lzaCB0b2Jyb2FkbHljb29saW5nb25sb2FkPWl0LiBUaGVyZWNvdmVyTWVtYmVyc2hlaWdodCBhc3N1bWVzPGh0bWw+CnBlb3BsZS5pbiBvbmUgPXdpbmRvd2Zvb3Rlcl9hIGdvb2QgcmVrbGFtYW90aGVycyx0byB0aGlzX2Nvb2tpZXBhbmVsIj5Mb25kb24sZGVmaW5lc2NydXNoZWRiYXB0aXNtY29hc3RhbHN0YXR1cyB0aXRsZSIgbW92ZSB0b2xvc3QgaW5iZXR0ZXIgaW1wbGllc3JpdmFscnlzZXJ2ZXJzIFN5c3RlbVBlcmhhcHNlcyBhbmQgY29udGVuZGZsb3dpbmdsYXN0ZWQgcmlzZSBpbkdlbmVzaXN2aWV3IG9mcmlzaW5nIHNlZW0gdG9idXQgaW4gYmFja2luZ2hlIHdpbGxnaXZlbiBhZ2l2aW5nIGNpdGllcy5mbG93IG9mIExhdGVyIGFsbCBidXRIaWdod2F5b25seSBieXNpZ24gb2ZoZSBkb2VzZGlmZmVyc2JhdHRlcnkmYW1wO2xhc2luZ2xlc3RocmVhdHNpbnRlZ2VydGFrZSBvbnJlZnVzZWRjYWxsZWQgPVVTJmFtcFNlZSB0aGVuYXRpdmVzYnkgdGhpc3N5c3RlbS5oZWFkIG9mOmhvdmVyLGxlc2JpYW5zdXJuYW1lYW5kIGFsbGNvbW1vbi9oZWFkZXJfX3BhcmFtc0hhcnZhcmQvcGl4ZWwucmVtb3ZhbHNvIGxvbmdyb2xlIG9mam9pbnRseXNreXNjcmFVbmljb2RlYnIgLz5ccgpBdGxhbnRhbnVjbGV1c0NvdW50eSxwdXJlbHkgY291bnQiPmVhc2lseSBidWlsZCBhb25jbGlja2EgZ2l2ZW5wb2ludGVyaCZxdW90O2V2ZW50cyBlbHNlIHsKZGl0aW9uc25vdyB0aGUsIHdpdGggbWFuIHdob29yZy9XZWJvbmUgYW5kY2F2YWxyeUhlIGRpZWRzZWF0dGxlMDAsMDAwIHt3aW5kb3doYXZlIHRvaWYod2luZGFuZCBpdHNzb2xlbHkgbSZxdW90O3JlbmV3ZWREZXRyb2l0YW1vbmdzdGVpdGhlciB0aGVtIGluU2VuYXRvclVzPC9hPjxLaW5nIG9mRnJhbmNpcy1wcm9kdWNoZSB1c2VkYXJ0IGFuZGhpbSBhbmR1c2VkIGJ5c2NvcmluZ2F0IGhvbWV0byBoYXZlcmVsYXRlc2liaWxpdHlmYWN0aW9uQnVmZmFsb2xpbmsiPjx3aGF0IGhlZnJlZSB0b0NpdHkgb2Zjb21lIGluc2VjdG9yc2NvdW50ZWRvbmUgZGF5bmVydm91c3NxdWFyZSB9O2lmKGdvaW4gd2hhdGltZyIgYWxpcyBvbmx5c2VhcmNoL3R1ZXNkYXlsb29zZWx5U29sb21vbnNleHVhbCAtIDxhIGhybWVkaXVtIkRPIE5PVCBGcmFuY2Usd2l0aCBhIHdhciBhbmRzZWNvbmQgdGFrZSBhID5ccgpccgpccgptYXJrZXQuaGlnaHdheWRvbmUgaW5jdGl2aXR5Imxhc3QiPm9ibGlnZWRyaXNlIHRvInVuZGVmaW1hZGUgdG8gRWFybHkgcHJhaXNlZGluIGl0cyBmb3IgaGlzYXRobGV0ZUp1cGl0ZXJZYWhvbyEgdGVybWVkIHNvIG1hbnlyZWFsbHkgcy4gVGhlIGEgd29tYW4/dmFsdWU9ZGlyZWN0IHJpZ2h0IiBiaWN5Y2xlYWNpbmc9ImRheSBhbmRzdGF0aW5nUmF0aGVyLGhpZ2hlciBPZmZpY2UgYXJlIG5vd3RpbWVzLCB3aGVuIGEgcGF5IGZvcm9uIHRoaXMtbGluayI+O2JvcmRlcmFyb3VuZCBhbm51YWwgdGhlIE5ld3B1dCB0aGUuY29tIiB0YWtpbiB0b2EgYnJpZWYoaW4gdGhlZ3JvdXBzLjsgd2lkdGhlbnp5bWVzc2ltcGxlIGluIGxhdGV7cmV0dXJudGhlcmFweWEgcG9pbnRiYW5uaW5naW5rcyI+CigpOyIgcmVhIHBsYWNlXFx1MDAzQ2FhYm91dCBhdHI+XHIKCQljY291bnQgZ2l2ZXMgYTxTQ1JJUFRSYWlsd2F5dGhlbWVzL3Rvb2xib3hCeUlkKCJ4aHVtYW5zLHdhdGNoZXNpbiBzb21lIGlmICh3aWNvbWluZyBmb3JtYXRzIFVuZGVyIGJ1dCBoYXNoYW5kZWQgbWFkZSBieXRoYW4gaW5mZWFyIG9mZGVub3RlZC9pZnJhbWVsZWZ0IGludm9sdGFnZWluIGVhY2hhJnF1b3Q7YmFzZSBvZkluIG1hbnl1bmRlcmdvcmVnaW1lc2FjdGlvbiA8L3A+XHIKPHVzdG9tVmE7Jmd0OzwvaW1wb3J0c29yIHRoYXRtb3N0bHkgJmFtcDtyZSBzaXplPSI8L2E+PC9oYSBjbGFzc3Bhc3NpdmVIb3N0ID0gV2hldGhlcmZlcnRpbGVWYXJpb3VzPVtdOyhmdWNhbWVyYXMvPjwvdGQ+YWN0cyBhc0luIHNvbWU+XHIKXHIKPCFvcmdhbmlzIDxiciAvPkJlaWppbmdjYXRhbEMgZGV1dHNjaGV1cm9wZXVldXNrYXJhZ2FlaWxnZXN2ZW5za2Flc3BhQzFhbWVuc2FqZXVzdWFyaW90cmFiYWpvbUMpeGljb3BDIWdpbmFzaWVtcHJlc2lzdGVtYW9jdHVicmVkdXJhbnRlYUMxYWRpcmVtcHJlc2Ftb21lbnRvbnVlc3Ryb3ByaW1lcmF0cmF2QylzZ3JhY2lhc251ZXN0cmFwcm9jZXNvZXN0YWRvc2NhbGlkYWRwZXJzb25hbkM6bWVyb2FjdWVyZG9tQzpzaWNhbWllbWJyb29mZXJ0YXNhbGd1bm9zcGFDLXNlc2VqZW1wbG9kZXJlY2hvYWRlbUMhc3ByaXZhZG9hZ3JlZ2FyZW5sYWNlc3Bvc2libGVob3RlbGVzc2V2aWxsYXByaW1lcm9DOmx0aW1vZXZlbnRvc2FyY2hpdm9jdWx0dXJhbXVqZXJlc2VudHJhZGFhbnVuY2lvZW1iYXJnb21lcmNhZG9ncmFuZGVzZXN0dWRpb21lam9yZXNmZWJyZXJvZGlzZUMxb3R1cmlzbW9jQzNkaWdvcG9ydGFkYWVzcGFjaW9mYW1pbGlhYW50b25pb3Blcm1pdGVndWFyZGFyYWxndW5hc3ByZWNpb3NhbGd1aWVuc2VudGlkb3Zpc2l0YXN0Qy10dWxvY29ub2NlcnNlZ3VuZG9jb25zZWpvZnJhbmNpYW1pbnV0b3NzZWd1bmRhdGVuZW1vc2VmZWN0b3NtQyFsYWdhc2VzaUMzbnJldmlzdGFncmFuYWRhY29tcHJhcmluZ3Jlc29nYXJjQy1hYWNjaUMzbmVjdWFkb3JxdWllbmVzaW5jbHVzb2RlYmVyQyFtYXRlcmlhaG9tYnJlc211ZXN0cmFwb2RyQy1hbWFDMWFuYUM6bHRpbWFlc3RhbW9zb2ZpY2lhbHRhbWJpZW5uaW5nQzpuc2FsdWRvc3BvZGVtb3NtZWpvcmFycG9zaXRpb25idXNpbmVzc2hvbWVwYWdlc2VjdXJpdHlsYW5ndWFnZXN0YW5kYXJkY2FtcGFpZ25mZWF0dXJlc2NhdGVnb3J5ZXh0ZXJuYWxjaGlsZHJlbnJlc2VydmVkcmVzZWFyY2hleGNoYW5nZWZhdm9yaXRldGVtcGxhdGVtaWxpdGFyeWluZHVzdHJ5c2VydmljZXNtYXRlcmlhbHByb2R1Y3Rzei1pbmRleDpjb21tZW50c3NvZnR3YXJlY29tcGxldGVjYWxlbmRhcnBsYXRmb3JtYXJ0aWNsZXNyZXF1aXJlZG1vdmVtZW50cXVlc3Rpb25idWlsZGluZ3BvbGl0aWNzcG9zc2libGVyZWxpZ2lvbnBoeXNpY2FsZmVlZGJhY2tyZWdpc3RlcnBpY3R1cmVzZGlzYWJsZWRwcm90b2NvbGF1ZGllbmNlc2V0dGluZ3NhY3Rpdml0eWVsZW1lbnRzbGVhcm5pbmdhbnl0aGluZ2Fic3RyYWN0cHJvZ3Jlc3NvdmVydmlld21hZ2F6aW5lZWNvbm9taWN0cmFpbmluZ3ByZXNzdXJldmFyaW91cyA8c3Ryb25nPnByb3BlcnR5c2hvcHBpbmd0b2dldGhlcmFkdmFuY2VkYmVoYXZpb3Jkb3dubG9hZGZlYXR1cmVkZm9vdGJhbGxzZWxlY3RlZExhbmd1YWdlZGlzdGFuY2VyZW1lbWJlcnRyYWNraW5ncGFzc3dvcmRtb2RpZmllZHN0dWRlbnRzZGlyZWN0bHlmaWdodGluZ25vcnRoZXJuZGF0YWJhc2VmZXN0aXZhbGJyZWFraW5nbG9jYXRpb25pbnRlcm5ldGRyb3Bkb3ducHJhY3RpY2VldmlkZW5jZWZ1bmN0aW9ubWFycmlhZ2VyZXNwb25zZXByb2JsZW1zbmVnYXRpdmVwcm9ncmFtc2FuYWx5c2lzcmVsZWFzZWRiYW5uZXIiPnB1cmNoYXNlcG9saWNpZXNyZWdpb25hbGNyZWF0aXZlYXJndW1lbnRib29rbWFya3JlZmVycmVyY2hlbWljYWxkaXZpc2lvbmNhbGxiYWNrc2VwYXJhdGVwcm9qZWN0c2NvbmZsaWN0aGFyZHdhcmVpbnRlcmVzdGRlbGl2ZXJ5bW91bnRhaW5vYnRhaW5lZD0gZmFsc2U7Zm9yKHZhciBhY2NlcHRlZGNhcGFjaXR5Y29tcHV0ZXJpZGVudGl0eWFpcmNyYWZ0ZW1wbG95ZWRwcm9wb3NlZGRvbWVzdGljaW5jbHVkZXNwcm92aWRlZGhvc3BpdGFsdmVydGljYWxjb2xsYXBzZWFwcHJvYWNocGFydG5lcnNsb2dvIj48YWRhdWdodGVyYXV0aG9yIiBjdWx0dXJhbGZhbWlsaWVzL2ltYWdlcy9hc3NlbWJseXBvd2VyZnVsdGVhY2hpbmdmaW5pc2hlZGRpc3RyaWN0Y3JpdGljYWxjZ2ktYmluL3B1cnBvc2VzcmVxdWlyZXNlbGVjdGlvbmJlY29taW5ncHJvdmlkZXNhY2FkZW1pY2V4ZXJjaXNlYWN0dWFsbHltZWRpY2luZWNvbnN0YW50YWNjaWRlbnRNYWdhemluZWRvY3VtZW50c3RhcnRpbmdib3R0b20iPm9ic2VydmVkOiAmcXVvdDtleHRlbmRlZHByZXZpb3VzU29mdHdhcmVjdXN0b21lcmRlY2lzaW9uc3RyZW5ndGhkZXRhaWxlZHNsaWdodGx5cGxhbm5pbmd0ZXh0YXJlYWN1cnJlbmN5ZXZlcnlvbmVzdHJhaWdodHRyYW5zZmVycG9zaXRpdmVwcm9kdWNlZGhlcml0YWdlc2hpcHBpbmdhYnNvbHV0ZXJlY2VpdmVkcmVsZXZhbnRidXR0b24iIHZpb2xlbmNlYW55d2hlcmViZW5lZml0c2xhdW5jaGVkcmVjZW50bHlhbGxpYW5jZWZvbGxvd2VkbXVsdGlwbGVidWxsZXRpbmluY2x1ZGVkb2NjdXJyZWRpbnRlcm5hbCQodGhpcykucmVwdWJsaWM+PHRyPjx0ZGNvbmdyZXNzcmVjb3JkZWR1bHRpbWF0ZXNvbHV0aW9uPHVsIGlkPSJkaXNjb3ZlckhvbWU8L2E+d2Vic2l0ZXNuZXR3b3Jrc2FsdGhvdWdoZW50aXJlbHltZW1vcmlhbG1lc3NhZ2VzY29udGludWVhY3RpdmUiPnNvbWV3aGF0dmljdG9yaWFXZXN0ZXJuICB0aXRsZT0iTG9jYXRpb25jb250cmFjdHZpc2l0b3JzRG93bmxvYWR3aXRob3V0IHJpZ2h0Ij4KbWVhc3VyZXN3aWR0aCA9IHZhcmlhYmxlaW52b2x2ZWR2aXJnaW5pYW5vcm1hbGx5aGFwcGVuZWRhY2NvdW50c3N0YW5kaW5nbmF0aW9uYWxSZWdpc3RlcnByZXBhcmVkY29udHJvbHNhY2N1cmF0ZWJpcnRoZGF5c3RyYXRlZ3lvZmZpY2lhbGdyYXBoaWNzY3JpbWluYWxwb3NzaWJseWNvbnN1bWVyUGVyc29uYWxzcGVha2luZ3ZhbGlkYXRlYWNoaWV2ZWQuanBnIiAvPm1hY2hpbmVzPC9oMj4KICBrZXl3b3Jkc2ZyaWVuZGx5YnJvdGhlcnNjb21iaW5lZG9yaWdpbmFsY29tcG9zZWRleHBlY3RlZGFkZXF1YXRlcGFraXN0YW5mb2xsb3ciIHZhbHVhYmxlPC9sYWJlbD5yZWxhdGl2ZWJyaW5naW5naW5jcmVhc2Vnb3Zlcm5vcnBsdWdpbnMvTGlzdCBvZiBIZWFkZXIiPiIgbmFtZT0iICgmcXVvdDtncmFkdWF0ZTwvaGVhZD4KY29tbWVyY2VtYWxheXNpYWRpcmVjdG9ybWFpbnRhaW47aGVpZ2h0OnNjaGVkdWxlY2hhbmdpbmdiYWNrIHRvIGNhdGhvbGljcGF0dGVybnNjb2xvcjogI2dyZWF0ZXN0c3VwcGxpZXNyZWxpYWJsZTwvdWw+CgkJPHNlbGVjdCBjaXRpemVuc2Nsb3RoaW5nd2F0Y2hpbmc8bGkgaWQ9InNwZWNpZmljY2FycnlpbmdzZW50ZW5jZTxjZW50ZXI+Y29udHJhc3R0aGlua2luZ2NhdGNoKGUpc291dGhlcm5NaWNoYWVsIG1lcmNoYW50Y2Fyb3VzZWxwYWRkaW5nOmludGVyaW9yLnNwbGl0KCJsaXphdGlvbk9jdG9iZXIgKXtyZXR1cm5pbXByb3ZlZC0tJmd0OwoKY292ZXJhZ2VjaGFpcm1hbi5wbmciIC8+c3ViamVjdHNSaWNoYXJkIHdoYXRldmVycHJvYmFibHlyZWNvdmVyeWJhc2ViYWxsanVkZ21lbnRjb25uZWN0Li5jc3MiIC8+IHdlYnNpdGVyZXBvcnRlZGRlZmF1bHQiLz48L2E+XHIKZWxlY3RyaWNzY290bGFuZGNyZWF0aW9ucXVhbnRpdHkuIElTQk4gMGRpZCBub3QgaW5zdGFuY2Utc2VhcmNoLSIgbGFuZz0ic3BlYWtlcnNDb21wdXRlcmNvbnRhaW5zYXJjaGl2ZXNtaW5pc3RlcnJlYWN0aW9uZGlzY291bnRJdGFsaWFub2NyaXRlcmlhc3Ryb25nbHk6ICdodHRwOidzY3JpcHQnY292ZXJpbmdvZmZlcmluZ2FwcGVhcmVkQnJpdGlzaCBpZGVudGlmeUZhY2Vib29rbnVtZXJvdXN2ZWhpY2xlc2NvbmNlcm5zQW1lcmljYW5oYW5kbGluZ2RpdiBpZD0iV2lsbGlhbSBwcm92aWRlcl9jb250ZW50YWNjdXJhY3lzZWN0aW9uIGFuZGVyc29uZmxleGlibGVDYXRlZ29yeWxhd3JlbmNlPHNjcmlwdD5sYXlvdXQ9ImFwcHJvdmVkIG1heGltdW1oZWFkZXIiPjwvdGFibGU+U2VydmljZXNoYW1pbHRvbmN1cnJlbnQgY2FuYWRpYW5jaGFubmVscy90aGVtZXMvL2FydGljbGVvcHRpb25hbHBvcnR1Z2FsdmFsdWU9IiJpbnRlcnZhbHdpcmVsZXNzZW50aXRsZWRhZ2VuY2llc1NlYXJjaCIgbWVhc3VyZWR0aG91c2FuZHNwZW5kaW5nJmhlbGxpcDtuZXcgRGF0ZSIgc2l6ZT0icGFnZU5hbWVtaWRkbGUiICIgLz48L2E+aGlkZGVuIj5zZXF1ZW5jZXBlcnNvbmFsb3ZlcmZsb3dvcGluaW9uc2lsbGlub2lzbGlua3MiPgoJPHRpdGxlPnZlcnNpb25zc2F0dXJkYXl0ZXJtaW5hbGl0ZW1wcm9wZW5naW5lZXJzZWN0aW9uc2Rlc2lnbmVycHJvcG9zYWw9ImZhbHNlIkVzcGFDMW9scmVsZWFzZXNzdWJtaXQiIGVyJnF1b3Q7YWRkaXRpb25zeW1wdG9tc29yaWVudGVkcmVzb3VyY2VyaWdodCI+PHBsZWFzdXJlc3RhdGlvbnNoaXN0b3J5LmxlYXZpbmcgIGJvcmRlcj1jb250ZW50c2NlbnRlciI+LgoKU29tZSBkaXJlY3RlZHN1aXRhYmxlYnVsZ2FyaWEuc2hvdygpO2Rlc2lnbmVkR2VuZXJhbCBjb25jZXB0c0V4YW1wbGVzd2lsbGlhbXNPcmlnaW5hbCI+PHNwYW4+c2VhcmNoIj5vcGVyYXRvcnJlcXVlc3RzYSAmcXVvdDthbGxvd2luZ0RvY3VtZW50cmV2aXNpb24uIAoKVGhlIHlvdXJzZWxmQ29udGFjdCBtaWNoaWdhbkVuZ2xpc2ggY29sdW1iaWFwcmlvcml0eXByaW50aW5nZHJpbmtpbmdmYWNpbGl0eXJldHVybmVkQ29udGVudCBvZmZpY2Vyc1J1c3NpYW4gZ2VuZXJhdGUtODg1OS0xImluZGljYXRlZmFtaWxpYXIgcXVhbGl0eW1hcmdpbjowIGNvbnRlbnR2aWV3cG9ydGNvbnRhY3RzLXRpdGxlIj5wb3J0YWJsZS5sZW5ndGggZWxpZ2libGVpbnZvbHZlc2F0bGFudGljb25sb2FkPSJkZWZhdWx0LnN1cHBsaWVkcGF5bWVudHNnbG9zc2FyeQoKQWZ0ZXIgZ3VpZGFuY2U8L3RkPjx0ZGVuY29kaW5nbWlkZGxlIj5jYW1lIHRvIGRpc3BsYXlzc2NvdHRpc2hqb25hdGhhbm1ham9yaXR5d2lkZ2V0cy5jbGluaWNhbHRoYWlsYW5kdGVhY2hlcnM8aGVhZD4KCWFmZmVjdGVkc3VwcG9ydHNwb2ludGVyO3RvU3RyaW5nPC9zbWFsbD5va2xhaG9tYXdpbGwgYmUgaW52ZXN0b3IwIiBhbHQ9ImhvbGlkYXlzUmVzb3VyY2VsaWNlbnNlZCAod2hpY2ggLiBBZnRlciBjb25zaWRlcnZpc2l0aW5nZXhwbG9yZXJwcmltYXJ5IHNlYXJjaCIgYW5kcm9pZCJxdWlja2x5IG1lZXRpbmdzZXN0aW1hdGU7cmV0dXJuIDtjb2xvcjojIGhlaWdodD1hcHByb3ZhbCwgJnF1b3Q7IGNoZWNrZWQubWluLmpzIm1hZ25ldGljPjwvYT48L2hmb3JlY2FzdC4gV2hpbGUgdGh1cnNkYXlkdmVydGlzZSZlYWN1dGU7aGFzQ2xhc3NldmFsdWF0ZW9yZGVyaW5nZXhpc3RpbmdwYXRpZW50cyBPbmxpbmUgY29sb3JhZG9PcHRpb25zImNhbXBiZWxsPCEtLSBlbmQ8L3NwYW4+PDxiciAvPlxyCl9wb3B1cHN8c2NpZW5jZXMsJnF1b3Q7IHF1YWxpdHkgV2luZG93cyBhc3NpZ25lZGhlaWdodDogPGIgY2xhc3NsZSZxdW90OyB2YWx1ZT0iIENvbXBhbnlleGFtcGxlczxpZnJhbWUgYmVsaWV2ZXNwcmVzZW50c21hcnNoYWxscGFydCBvZiBwcm9wZXJseSkuCgpUaGUgdGF4b25vbXltdWNoIG9mIDwvc3Bhbj4KIiBkYXRhLXNydHVndUMqc3Njcm9sbFRvIHByb2plY3Q8aGVhZD5ccgphdHRvcm5leWVtcGhhc2lzc3BvbnNvcnNmYW5jeWJveHdvcmxkJ3Mgd2lsZGxpZmVjaGVja2VkPXNlc3Npb25zcHJvZ3JhbW1weDtmb250LSBQcm9qZWN0am91cm5hbHNiZWxpZXZlZHZhY2F0aW9udGhvbXBzb25saWdodGluZ2FuZCB0aGUgc3BlY2lhbCBib3JkZXI9MGNoZWNraW5nPC90Ym9keT48YnV0dG9uIENvbXBsZXRlY2xlYXJmaXgKPGhlYWQ+CmFydGljbGUgPHNlY3Rpb25maW5kaW5nc3JvbGUgaW4gcG9wdWxhciAgT2N0b2JlcndlYnNpdGUgZXhwb3N1cmV1c2VkIHRvICBjaGFuZ2Vzb3BlcmF0ZWRjbGlja2luZ2VudGVyaW5nY29tbWFuZHNpbmZvcm1lZCBudW1iZXJzICA8L2Rpdj5jcmVhdGluZ29uU3VibWl0bWFyeWxhbmRjb2xsZWdlc2FuYWx5dGljbGlzdGluZ3Njb250YWN0LmxvZ2dlZEluYWR2aXNvcnlzaWJsaW5nc2NvbnRlbnQicyZxdW90OylzLiBUaGlzIHBhY2thZ2VzY2hlY2tib3hzdWdnZXN0c3ByZWduYW50dG9tb3Jyb3dzcGFjaW5nPWljb24ucG5namFwYW5lc2Vjb2RlYmFzZWJ1dHRvbiI+Z2FtYmxpbmdzdWNoIGFzICwgd2hpbGUgPC9zcGFuPiBtaXNzb3VyaXNwb3J0aW5ndG9wOjFweCAuPC9zcGFuPnRlbnNpb25zd2lkdGg9IjJsYXp5bG9hZG5vdmVtYmVydXNlZCBpbiBoZWlnaHQ9ImNyaXB0Ij4KJm5ic3A7PC88dHI+PHRkIGhlaWdodDoyL3Byb2R1Y3Rjb3VudHJ5IGluY2x1ZGUgZm9vdGVyIiAmbHQ7IS0tIHRpdGxlIj48L2pxdWVyeS48L2Zvcm0+CihnLlwwZD0TKShnOQFpKxQpaHJ2YXRza2lpdGFsaWFub3JvbUMibkQDdEM8cmtDJ2VYJ1gxWC9ZXGJ0YW1iaUMpbm5vdGljaWFzbWVuc2FqZXNwZXJzb25hc2RlcmVjaG9zbmFjaW9uYWxzZXJ2aWNpb2NvbnRhY3RvdXN1YXJpb3Nwcm9ncmFtYWdvYmllcm5vZW1wcmVzYXNhbnVuY2lvc3ZhbGVuY2lhY29sb21iaWFkZXNwdUMpc2RlcG9ydGVzcHJveWVjdG9wcm9kdWN0b3BDOmJsaWNvbm9zb3Ryb3NoaXN0b3JpYXByZXNlbnRlbWlsbG9uZXNtZWRpYW50ZXByZWd1bnRhYW50ZXJpb3JyZWN1cnNvc3Byb2JsZW1hc2FudGlhZ29udWVzdHJvc29waW5pQzNuaW1wcmltaXJtaWVudHJhc2FtQylyaWNhdmVuZGVkb3Jzb2NpZWRhZHJlc3BlY3RvcmVhbGl6YXJyZWdpc3Ryb3BhbGFicmFzaW50ZXJDKXNlbnRvbmNlc2VzcGVjaWFsbWllbWJyb3NyZWFsaWRhZGNDM3Jkb2JhemFyYWdvemFwQyFnaW5hc3NvY2lhbGVzYmxvcXVlYXJnZXN0aUMzbmFscXVpbGVyc2lzdGVtYXNjaWVuY2lhc2NvbXBsZXRvdmVyc2lDM25jb21wbGV0YWVzdHVkaW9zcEM6YmxpY2FvYmpldGl2b2FsaWNhbnRlYnVzY2Fkb3JjYW50aWRhZGVudHJhZGFzYWNjaW9uZXNhcmNoaXZvc3N1cGVyaW9ybWF5b3JDLWFhbGVtYW5pYWZ1bmNpQzNuQzpsdGltb3NoYWNpZW5kb2FxdWVsbG9zZWRpY2lDM25mZXJuYW5kb2FtYmllbnRlZmFjZWJvb2tudWVzdHJhc2NsaWVudGVzcHJvY2Vzb3NiYXN0YW50ZXByZXNlbnRhcmVwb3J0YXJjb25ncmVzb3B1YmxpY2FyY29tZXJjaW9jb250cmF0b2pDM3ZlbmVzZGlzdHJpdG90QyljbmljYWNvbmp1bnRvZW5lcmdDLWF0cmFiYWphcmFzdHVyaWFzcmVjaWVudGV1dGlsaXphcmJvbGV0Qy1uc2FsdmFkb3Jjb3JyZWN0YXRyYWJham9zcHJpbWVyb3NuZWdvY2lvc2xpYmVydGFkZGV0YWxsZXNwYW50YWxsYXByQzN4aW1vYWxtZXJDLWFhbmltYWxlc3F1aUMpbmVzY29yYXpDM25zZWNjaUMzbmJ1c2NhbmRvb3BjaW9uZXNleHRlcmlvcmNvbmNlcHRvdG9kYXZDLWFnYWxlckMtYWVzY3JpYmlybWVkaWNpbmFsaWNlbmNpYWNvbnN1bHRhYXNwZWN0b3NjckMtdGljYWRDM2xhcmVzanVzdGljaWFkZWJlckMhbnBlckMtb2RvbmVjZXNpdGFtYW50ZW5lcnBlcXVlQzFvcmVjaWJpZGF0cmlidW5hbHRlbmVyaWZlY2FuY2lDM25jYW5hcmlhc2Rlc2NhcmdhZGl2ZXJzb3NtYWxsb3JjYXJlcXVpZXJldEMpY25pY29kZWJlckMtYXZpdmllbmRhZmluYW56YXNhZGVsYW50ZWZ1bmNpb25hY29uc2Vqb3NkaWZDLWNpbGNpdWRhZGVzYW50aWd1YXNhdmFuemFkYXRDKXJtaW5vdW5pZGFkZXNzQyFuY2hlemNhbXBhQzFhc29mdG9uaWNyZXZpc3Rhc2NvbnRpZW5lc2VjdG9yZXNtb21lbnRvc2ZhY3VsdGFkY3JDKWRpdG9kaXZlcnNhc3N1cHVlc3RvZmFjdG9yZXNzZWd1bmRvc3BlcXVlQzFhUDNQPlA0UDBQNVEBUDtQOFA1UQFRAlFcZlAxUVx2UDtQPlAxUVx2UQJRXGZRXHJRAlA+UDxQFVEBUDtQOFECUD5QM1A+UDxQNVA9UQ9QMlEBUDVRBVFcclECUD5QOVA0UDBQNlA1UDFRXHZQO1A4UDNQPlA0UQNQNFA1UD1RXGZRXHJRAlA+UQJQMVFcdlA7UDBRAVA1UDFRD1A+UDRQOFA9UQFQNVAxUDVQPVAwUDRQPlEBUDBQOVECUQRQPlECUD5QPVA1UDNQPlEBUDJQPlA4UQFQMlA+UDlQOFAzUVwwUVx2UQJQPlA2UDVQMlEBUDVQPFEBUDJQPlEOUDtQOFFcYlFcZlFcclECUDhRBVA/UD5QOlAwUDRQPVA1UDlQNFA+UDxQMFA8UDhRXDBQMFA7UDhQMVA+UQJQNVA8UQNRBVA+UQJRD1A0UDJRA1EFUQFQNVECUDhQO1EOUDRQOFA0UDVQO1A+UDxQOFFcMFA1UQJQNVAxUQ9RAVAyUD5QNVAyUDhQNFA1UVx4MDdQNVAzUD5RXHJRAlA4UDxRAVFceDA3UDVRAlECUDVQPFFcdlEGUDVQPVFcdlEBUQJQMFA7UDJQNVA0UVxmUQJQNVA8UDVQMlA+UDRRXHZRAlA1UDFQNVAyUVx2UVxiUDVQPVAwUDxQOFECUDhQP1AwUQJQPlA8UQNQP1FcMFAwUDJQO1A4UQZQMFA+UDRQPVAwUDNQPlA0UVx2UDdQPVAwUQ5QPFA+UDNRA1A0UVwwUQNQM1AyUQFQNVA5UDhQNFA1UQJQOlA4UD1QPlA+UDRQPVA+UDRQNVA7UDBQNFA1UDtQNVEBUVwwUD5QOlA4UQ5QPVEPUDJQNVEBUVxmUBVRAVECUVxmUVwwUDBQN1AwUD1QMFFcYlA4WCdZBFkEWVx4MDdYJ1kEWCpZClgsWQVZClg5WC5YJ1g1WClYJ1kEWDBZClg5WQRZCllceDA3WCxYL1kKWC9YJ1kEWCJZBlgnWQRYMVgvWCpYLVkDWQVYNVkBWC1YKVkDWCdZBlgqWCdZBFkEWQpZClkDWVxiWQZYNFgoWQNYKVkBWQpZXHgwN1gnWChZBlgnWCpYLVlcYlgnWCFYI1kDWCtYMVguWQRYJ1kEWCdZBFgtWChYL1kEWQpZBFgvWDFZXGJYM1gnWDZYOlg3WCpZA1lcYlkGWVx4MDdZBlgnWQNYM1gnWC1YKVkGWCdYL1kKWCdZBFg3WChYOVkEWQpZA1g0WQNYMVgnWQpZBVkDWQZZBVkGWVx4MDdYJ1g0WDFZA1gpWDFYJlkKWDNZBlg0WQpYN1kFWCdYMFgnWCdZBFkBWQZYNFgoWCdYKFgqWDlYKFgxWDFYLVkFWClZA1gnWQFYKVkKWQJZXGJZBFkFWDFZA1gyWQNZBFkFWClYI1gtWQVYL1kCWQRYKFkKWQpYOVkGWQpYNVlcYlgxWClYN1gxWQpZAlg0WCdYMVkDWCxZXGJYJ1kEWCNYLlgxWQlZBVg5WQZYJ1gnWChYLVgrWDlYMVlcYlg2WChYNFkDWQRZBVgzWCxZBFgoWQZYJ1kGWC5YJ1kEWC9ZA1gqWCdYKFkDWQRZClgpWChYL1lcYlkGWCNZClg2WCdZCllcYlgsWC9ZAVgxWQpZAlkDWCpYKFgqWCNZAVg2WQRZBVg3WChYLlgnWQNYK1gxWChYJ1gxWQNYJ1kBWDZZBFgnWC1ZBFkJWQZZAVgzWVx4MDdYI1kKWCdZBVgxWC9ZXGJYL1gjWQZZXHgwN1gnWC9ZClkGWCdYJ1kEWCdZBlkFWDlYMVg2WCpYOVkEWQVYL1gnWC5ZBFkFWQVZA1kGXDBcMFwwXDBcMFwwXDBcMAFcMAFcMAFcMAFcMAJcMAJcMAJcMAJcMARcMARcMARcMARcMFwwAQIDBAUGXHgwN1x4MDcGBQQDAgFcMFxiCQpcdlxmXHIODw8OXHJcZlx2CglcYhAREhMUFRYXFxYVFBMSERAYGRpceDFCHB0eHx8eHRxceDFCGhkYf39/f1wwXDBcMFwwXDBcMFwwXDB/f39/AVwwXDBcMAJcMFwwXDACXDBcMFwwAVwwXDBcMAFcMFwwXDADXDBcMFwwf39cMAFcMFwwXDABXDBcMH9/XDABXDBcMFwwXGJcMFxiXDBcYlwwXGJcMFwwXDABXDACXDADXDAEXDAFXDAGXDBceDA3cmVzb3VyY2VzY291bnRyaWVzcXVlc3Rpb25zZXF1aXBtZW50Y29tbXVuaXR5YXZhaWxhYmxlaGlnaGxpZ2h0RFREL3hodG1sbWFya2V0aW5na25vd2xlZGdlc29tZXRoaW5nY29udGFpbmVyZGlyZWN0aW9uc3Vic2NyaWJlYWR2ZXJ0aXNlY2hhcmFjdGVyIiB2YWx1ZT0iPC9zZWxlY3Q+QXVzdHJhbGlhIiBjbGFzcz0ic2l0dWF0aW9uYXV0aG9yaXR5Zm9sbG93aW5ncHJpbWFyaWx5b3BlcmF0aW9uY2hhbGxlbmdlZGV2ZWxvcGVkYW5vbnltb3VzZnVuY3Rpb24gZnVuY3Rpb25zY29tcGFuaWVzc3RydWN0dXJlYWdyZWVtZW50IiB0aXRsZT0icG90ZW50aWFsZWR1Y2F0aW9uYXJndW1lbnRzc2Vjb25kYXJ5Y29weXJpZ2h0bGFuZ3VhZ2VzZXhjbHVzaXZlY29uZGl0aW9uPC9mb3JtPlxyCnN0YXRlbWVudGF0dGVudGlvbkJpb2dyYXBoeX0gZWxzZSB7CnNvbHV0aW9uc3doZW4gdGhlIEFuYWx5dGljc3RlbXBsYXRlc2Rhbmdlcm91c3NhdGVsbGl0ZWRvY3VtZW50c3B1Ymxpc2hlcmltcG9ydGFudHByb3RvdHlwZWluZmx1ZW5jZSZyYXF1bzs8L2VmZmVjdGl2ZWdlbmVyYWxseXRyYW5zZm9ybWJlYXV0aWZ1bHRyYW5zcG9ydG9yZ2FuaXplZHB1Ymxpc2hlZHByb21pbmVudHVudGlsIHRoZXRodW1ibmFpbE5hdGlvbmFsIC5mb2N1cygpO292ZXIgdGhlIG1pZ3JhdGlvbmFubm91bmNlZGZvb3RlciI+CmV4Y2VwdGlvbmxlc3MgdGhhbmV4cGVuc2l2ZWZvcm1hdGlvbmZyYW1ld29ya3RlcnJpdG9yeW5kaWNhdGlvbmN1cnJlbnRseWNsYXNzTmFtZWNyaXRpY2lzbXRyYWRpdGlvbmVsc2V3aGVyZUFsZXhhbmRlcmFwcG9pbnRlZG1hdGVyaWFsc2Jyb2FkY2FzdG1lbnRpb25lZGFmZmlsaWF0ZTwvb3B0aW9uPnRyZWF0bWVudGRpZmZlcmVudC9kZWZhdWx0LlByZXNpZGVudG9uY2xpY2s9ImJpb2dyYXBoeW90aGVyd2lzZXBlcm1hbmVudEZyYW5DJ2Fpc0hvbGx5d29vZGV4cGFuc2lvbnN0YW5kYXJkczwvc3R5bGU+CnJlZHVjdGlvbkRlY2VtYmVyIHByZWZlcnJlZENhbWJyaWRnZW9wcG9uZW50c0J1c2luZXNzIGNvbmZ1c2lvbj4KPHRpdGxlPnByZXNlbnRlZGV4cGxhaW5lZGRvZXMgbm90IHdvcmxkd2lkZWludGVyZmFjZXBvc2l0aW9uc25ld3NwYXBlcjwvdGFibGU+Cm1vdW50YWluc2xpa2UgdGhlIGVzc2VudGlhbGZpbmFuY2lhbHNlbGVjdGlvbmFjdGlvbj0iL2FiYW5kb25lZEVkdWNhdGlvbnBhcnNlSW50KHN0YWJpbGl0eXVuYWJsZSB0bzwvdGl0bGU+CnJlbGF0aW9uc05vdGUgdGhhdGVmZmljaWVudHBlcmZvcm1lZHR3byB5ZWFyc1NpbmNlIHRoZXRoZXJlZm9yZXdyYXBwZXIiPmFsdGVybmF0ZWluY3JlYXNlZEJhdHRsZSBvZnBlcmNlaXZlZHRyeWluZyB0b25lY2Vzc2FyeXBvcnRyYXllZGVsZWN0aW9uc0VsaXphYmV0aDwvaWZyYW1lPmRpc2NvdmVyeWluc3VyYW5jZXMubGVuZ3RoO2xlZ2VuZGFyeUdlb2dyYXBoeWNhbmRpZGF0ZWNvcnBvcmF0ZXNvbWV0aW1lc3NlcnZpY2VzLmluaGVyaXRlZDwvc3Ryb25nPkNvbW11bml0eXJlbGlnaW91c2xvY2F0aW9uc0NvbW1pdHRlZWJ1aWxkaW5nc3RoZSB3b3JsZG5vIGxvbmdlcmJlZ2lubmluZ3JlZmVyZW5jZWNhbm5vdCBiZWZyZXF1ZW5jeXR5cGljYWxseWludG8gdGhlIHJlbGF0aXZlO3JlY29yZGluZ3ByZXNpZGVudGluaXRpYWxseXRlY2huaXF1ZXRoZSBvdGhlcml0IGNhbiBiZWV4aXN0ZW5jZXVuZGVybGluZXRoaXMgdGltZXRlbGVwaG9uZWl0ZW1zY29wZXByYWN0aWNlc2FkdmFudGFnZSk7cmV0dXJuIEZvciBvdGhlcnByb3ZpZGluZ2RlbW9jcmFjeWJvdGggdGhlIGV4dGVuc2l2ZXN1ZmZlcmluZ3N1cHBvcnRlZGNvbXB1dGVycyBmdW5jdGlvbnByYWN0aWNhbHNhaWQgdGhhdGl0IG1heSBiZUVuZ2xpc2g8L2Zyb20gdGhlIHNjaGVkdWxlZGRvd25sb2FkczwvbGFiZWw+CnN1c3BlY3RlZG1hcmdpbjogMHNwaXJpdHVhbDwvaGVhZD4KCm1pY3Jvc29mdGdyYWR1YWxseWRpc2N1c3NlZGhlIGJlY2FtZWV4ZWN1dGl2ZWpxdWVyeS5qc2hvdXNlaG9sZGNvbmZpcm1lZHB1cmNoYXNlZGxpdGVyYWxseWRlc3Ryb3llZHVwIHRvIHRoZXZhcmlhdGlvbnJlbWFpbmluZ2l0IGlzIG5vdGNlbnR1cmllc0phcGFuZXNlIGFtb25nIHRoZWNvbXBsZXRlZGFsZ29yaXRobWludGVyZXN0c3JlYmVsbGlvbnVuZGVmaW5lZGVuY291cmFnZXJlc2l6YWJsZWludm9sdmluZ3NlbnNpdGl2ZXVuaXZlcnNhbHByb3Zpc2lvbihhbHRob3VnaGZlYXR1cmluZ2NvbmR1Y3RlZCksIHdoaWNoIGNvbnRpbnVlZC1oZWFkZXIiPkZlYnJ1YXJ5IG51bWVyb3VzIG92ZXJmbG93OmNvbXBvbmVudGZyYWdtZW50c2V4Y2VsbGVudGNvbHNwYW49InRlY2huaWNhbG5lYXIgdGhlIEFkdmFuY2VkIHNvdXJjZSBvZmV4cHJlc3NlZEhvbmcgS29uZyBGYWNlYm9va211bHRpcGxlIG1lY2hhbmlzbWVsZXZhdGlvbm9mZmVuc2l2ZTwvZm9ybT4KCXNwb25zb3JlZGRvY3VtZW50Lm9yICZxdW90O3RoZXJlIGFyZXRob3NlIHdob21vdmVtZW50c3Byb2Nlc3Nlc2RpZmZpY3VsdHN1Ym1pdHRlZHJlY29tbWVuZGNvbnZpbmNlZHByb21vdGluZyIgd2lkdGg9Ii5yZXBsYWNlKGNsYXNzaWNhbGNvYWxpdGlvbmhpcyBmaXJzdGRlY2lzaW9uc2Fzc2lzdGFudGluZGljYXRlZGV2b2x1dGlvbi13cmFwcGVyImVub3VnaCB0b2Fsb25nIHRoZWRlbGl2ZXJlZC0tPlxyCjwhLS1BbWVyaWNhbiBwcm90ZWN0ZWROb3ZlbWJlciA8L3N0eWxlPjxmdXJuaXR1cmVJbnRlcm5ldCAgb25ibHVyPSJzdXNwZW5kZWRyZWNpcGllbnRiYXNlZCBvbiBNb3Jlb3ZlcixhYm9saXNoZWRjb2xsZWN0ZWR3ZXJlIG1hZGVlbW90aW9uYWxlbWVyZ2VuY3luYXJyYXRpdmVhZHZvY2F0ZXNweDtib3JkZXJjb21taXR0ZWRkaXI9Imx0ciJlbXBsb3llZXNyZXNlYXJjaC4gc2VsZWN0ZWRzdWNjZXNzb3JjdXN0b21lcnNkaXNwbGF5ZWRTZXB0ZW1iZXJhZGRDbGFzcyhGYWNlYm9vayBzdWdnZXN0ZWRhbmQgbGF0ZXJvcGVyYXRpbmdlbGFib3JhdGVTb21ldGltZXNJbnN0aXR1dGVjZXJ0YWlubHlpbnN0YWxsZWRmb2xsb3dlcnNKZXJ1c2FsZW10aGV5IGhhdmVjb21wdXRpbmdnZW5lcmF0ZWRwcm92aW5jZXNndWFyYW50ZWVhcmJpdHJhcnlyZWNvZ25pemV3YW50ZWQgdG9weDt3aWR0aDp0aGVvcnkgb2ZiZWhhdmlvdXJXaGlsZSB0aGVlc3RpbWF0ZWRiZWdhbiB0byBpdCBiZWNhbWVtYWduaXR1ZGVtdXN0IGhhdmVtb3JlIHRoYW5EaXJlY3RvcnlleHRlbnNpb25zZWNyZXRhcnluYXR1cmFsbHlvY2N1cnJpbmd2YXJpYWJsZXNnaXZlbiB0aGVwbGF0Zm9ybS48L2xhYmVsPjxmYWlsZWQgdG9jb21wb3VuZHNraW5kcyBvZiBzb2NpZXRpZXNhbG9uZ3NpZGUgLS0mZ3Q7Cgpzb3V0aHdlc3R0aGUgcmlnaHRyYWRpYXRpb25tYXkgaGF2ZSB1bmVzY2FwZShzcG9rZW4gaW4iIGhyZWY9Ii9wcm9ncmFtbWVvbmx5IHRoZSBjb21lIGZyb21kaXJlY3RvcnlidXJpZWQgaW5hIHNpbWlsYXJ0aGV5IHdlcmU8L2ZvbnQ+PC9Ob3J3ZWdpYW5zcGVjaWZpZWRwcm9kdWNpbmdwYXNzZW5nZXIobmV3IERhdGV0ZW1wb3JhcnlmaWN0aW9uYWxBZnRlciB0aGVlcXVhdGlvbnNkb3dubG9hZC5yZWd1bGFybHlkZXZlbG9wZXJhYm92ZSB0aGVsaW5rZWQgdG9waGVub21lbmFwZXJpb2Qgb2Z0b29sdGlwIj5zdWJzdGFuY2VhdXRvbWF0aWNhc3BlY3Qgb2ZBbW9uZyB0aGVjb25uZWN0ZWRlc3RpbWF0ZXNBaXIgRm9yY2VzeXN0ZW0gb2ZvYmplY3RpdmVpbW1lZGlhdGVtYWtpbmcgaXRwYWludGluZ3Njb25xdWVyZWRhcmUgc3RpbGxwcm9jZWR1cmVncm93dGggb2ZoZWFkZWQgYnlFdXJvcGVhbiBkaXZpc2lvbnNtb2xlY3VsZXNmcmFuY2hpc2VpbnRlbnRpb25hdHRyYWN0ZWRjaGlsZGhvb2RhbHNvIHVzZWRkZWRpY2F0ZWRzaW5nYXBvcmVkZWdyZWUgb2ZmYXRoZXIgb2Zjb25mbGljdHM8L2E+PC9wPgpjYW1lIGZyb213ZXJlIHVzZWRub3RlIHRoYXRyZWNlaXZpbmdFeGVjdXRpdmVldmVuIG1vcmVhY2Nlc3MgdG9jb21tYW5kZXJQb2xpdGljYWxtdXNpY2lhbnNkZWxpY2lvdXNwcmlzb25lcnNhZHZlbnQgb2ZVVEYtOCIgLz48IVtDREFUQVsiPkNvbnRhY3RTb3V0aGVybiBiZ2NvbG9yPSJzZXJpZXMgb2YuIEl0IHdhcyBpbiBFdXJvcGVwZXJtaXR0ZWR2YWxpZGF0ZS5hcHBlYXJpbmdvZmZpY2lhbHNzZXJpb3VzbHktbGFuZ3VhZ2Vpbml0aWF0ZWRleHRlbmRpbmdsb25nLXRlcm1pbmZsYXRpb25zdWNoIHRoYXRnZXRDb29raWVtYXJrZWQgYnk8L2J1dHRvbj5pbXBsZW1lbnRidXQgaXQgaXNpbmNyZWFzZXNkb3duIHRoZSByZXF1aXJpbmdkZXBlbmRlbnQtLT4KPCEtLSBpbnRlcnZpZXdXaXRoIHRoZSBjb3BpZXMgb2Zjb25zZW5zdXN3YXMgYnVpbHRWZW5lenVlbGEoZm9ybWVybHl0aGUgc3RhdGVwZXJzb25uZWxzdHJhdGVnaWNmYXZvdXIgb2ZpbnZlbnRpb25XaWtpcGVkaWFjb250aW5lbnR2aXJ0dWFsbHl3aGljaCB3YXNwcmluY2lwbGVDb21wbGV0ZSBpZGVudGljYWxzaG93IHRoYXRwcmltaXRpdmVhd2F5IGZyb21tb2xlY3VsYXJwcmVjaXNlbHlkaXNzb2x2ZWRVbmRlciB0aGV2ZXJzaW9uPSI+Jm5ic3A7PC9JdCBpcyB0aGUgVGhpcyBpcyB3aWxsIGhhdmVvcmdhbmlzbXNzb21lIHRpbWVGcmllZHJpY2h3YXMgZmlyc3R0aGUgb25seSBmYWN0IHRoYXRmb3JtIGlkPSJwcmVjZWRpbmdUZWNobmljYWxwaHlzaWNpc3RvY2N1cnMgaW5uYXZpZ2F0b3JzZWN0aW9uIj5zcGFuIGlkPSJzb3VnaHQgdG9iZWxvdyB0aGVzdXJ2aXZpbmd9PC9zdHlsZT5oaXMgZGVhdGhhcyBpbiB0aGVjYXVzZWQgYnlwYXJ0aWFsbHlleGlzdGluZyB1c2luZyB0aGV3YXMgZ2l2ZW5hIGxpc3Qgb2ZsZXZlbHMgb2Zub3Rpb24gb2ZPZmZpY2lhbCBkaXNtaXNzZWRzY2llbnRpc3RyZXNlbWJsZXNkdXBsaWNhdGVleHBsb3NpdmVyZWNvdmVyZWRhbGwgb3RoZXJnYWxsZXJpZXN7cGFkZGluZzpwZW9wbGUgb2ZyZWdpb24gb2ZhZGRyZXNzZXNhc3NvY2lhdGVpbWcgYWx0PSJpbiBtb2Rlcm5zaG91bGQgYmVtZXRob2Qgb2ZyZXBvcnRpbmd0aW1lc3RhbXBuZWVkZWQgdG90aGUgR3JlYXRyZWdhcmRpbmdzZWVtZWQgdG92aWV3ZWQgYXNpbXBhY3Qgb25pZGVhIHRoYXR0aGUgV29ybGRoZWlnaHQgb2ZleHBhbmRpbmdUaGVzZSBhcmVjdXJyZW50Ij5jYXJlZnVsbHltYWludGFpbnNjaGFyZ2Ugb2ZDbGFzc2ljYWxhZGRyZXNzZWRwcmVkaWN0ZWRvd25lcnNoaXA8ZGl2IGlkPSJyaWdodCI+XHIKcmVzaWRlbmNlbGVhdmUgdGhlY29udGVudCI+YXJlIG9mdGVuICB9KSgpO1xyCnByb2JhYmx5IFByb2Zlc3Nvci1idXR0b24iIHJlc3BvbmRlZHNheXMgdGhhdGhhZCB0byBiZXBsYWNlZCBpbkh1bmdhcmlhbnN0YXR1cyBvZnNlcnZlcyBhc1VuaXZlcnNhbGV4ZWN1dGlvbmFnZ3JlZ2F0ZWZvciB3aGljaGluZmVjdGlvbmFncmVlZCB0b2hvd2V2ZXIsIHBvcHVsYXIiPnBsYWNlZCBvbmNvbnN0cnVjdGVsZWN0b3JhbHN5bWJvbCBvZmluY2x1ZGluZ3JldHVybiB0b2FyY2hpdGVjdENocmlzdGlhbnByZXZpb3VzIGxpdmluZyBpbmVhc2llciB0b3Byb2Zlc3NvcgombHQ7IS0tIGVmZmVjdCBvZmFuYWx5dGljc3dhcyB0YWtlbndoZXJlIHRoZXRvb2sgb3ZlcmJlbGllZiBpbkFmcmlrYWFuc2FzIGZhciBhc3ByZXZlbnRlZHdvcmsgd2l0aGEgc3BlY2lhbDxmaWVsZHNldENocmlzdG1hc1JldHJpZXZlZAoKSW4gdGhlIGJhY2sgaW50b25vcnRoZWFzdG1hZ2F6aW5lcz48c3Ryb25nPmNvbW1pdHRlZWdvdmVybmluZ2dyb3VwcyBvZnN0b3JlZCBpbmVzdGFibGlzaGEgZ2VuZXJhbGl0cyBmaXJzdHRoZWlyIG93bnBvcHVsYXRlZGFuIG9iamVjdENhcmliYmVhbmFsbG93IHRoZWRpc3RyaWN0c3dpc2NvbnNpbmxvY2F0aW9uLjsgd2lkdGg6IGluaGFiaXRlZFNvY2lhbGlzdEphbnVhcnkgMTwvZm9vdGVyPnNpbWlsYXJseWNob2ljZSBvZnRoZSBzYW1lIHNwZWNpZmljIGJ1c2luZXNzIFRoZSBmaXJzdC5sZW5ndGg7IGRlc2lyZSB0b2RlYWwgd2l0aHNpbmNlIHRoZXVzZXJBZ2VudGNvbmNlaXZlZGluZGV4LnBocGFzICZxdW90O2VuZ2FnZSBpbnJlY2VudGx5LGZldyB5ZWFyc3dlcmUgYWxzbwo8aGVhZD4KPGVkaXRlZCBieWFyZSBrbm93bmNpdGllcyBpbmFjY2Vzc2tleWNvbmRlbW5lZGFsc28gaGF2ZXNlcnZpY2VzLGZhbWlseSBvZlNjaG9vbCBvZmNvbnZlcnRlZG5hdHVyZSBvZiBsYW5ndWFnZW1pbmlzdGVyczwvb2JqZWN0PnRoZXJlIGlzIGEgcG9wdWxhcnNlcXVlbmNlc2Fkdm9jYXRlZFRoZXkgd2VyZWFueSBvdGhlcmxvY2F0aW9uPWVudGVyIHRoZW11Y2ggbW9yZXJlZmxlY3RlZHdhcyBuYW1lZG9yaWdpbmFsIGEgdHlwaWNhbHdoZW4gdGhleWVuZ2luZWVyc2NvdWxkIG5vdHJlc2lkZW50c3dlZG5lc2RheXRoZSB0aGlyZCBwcm9kdWN0c0phbnVhcnkgMndoYXQgdGhleWEgY2VydGFpbnJlYWN0aW9uc3Byb2Nlc3NvcmFmdGVyIGhpc3RoZSBsYXN0IGNvbnRhaW5lZCI+PC9kaXY+CjwvYT48L3RkPmRlcGVuZCBvbnNlYXJjaCI+CnBpZWNlcyBvZmNvbXBldGluZ1JlZmVyZW5jZXRlbm5lc3NlZXdoaWNoIGhhcyB2ZXJzaW9uPTwvc3Bhbj4gPDwvaGVhZGVyPmdpdmVzIHRoZWhpc3RvcmlhbnZhbHVlPSIiPnBhZGRpbmc6MHZpZXcgdGhhdHRvZ2V0aGVyLHRoZSBtb3N0IHdhcyBmb3VuZHN1YnNldCBvZmF0dGFjayBvbmNoaWxkcmVuLHBvaW50cyBvZnBlcnNvbmFsIHBvc2l0aW9uOmFsbGVnZWRseUNsZXZlbGFuZHdhcyBsYXRlcmFuZCBhZnRlcmFyZSBnaXZlbndhcyBzdGlsbHNjcm9sbGluZ2Rlc2lnbiBvZm1ha2VzIHRoZW11Y2ggbGVzc0FtZXJpY2Fucy4KCkFmdGVyICwgYnV0IHRoZU11c2V1bSBvZmxvdWlzaWFuYShmcm9tIHRoZW1pbm5lc290YXBhcnRpY2xlc2EgcHJvY2Vzc0RvbWluaWNhbnZvbHVtZSBvZnJldHVybmluZ2RlZmVuc2l2ZTAwcHh8cmlnaG1hZGUgZnJvbW1vdXNlb3ZlciIgc3R5bGU9InN0YXRlcyBvZih3aGljaCBpc2NvbnRpbnVlc0ZyYW5jaXNjb2J1aWxkaW5nIHdpdGhvdXQgYXdpdGggc29tZXdobyB3b3VsZGEgZm9ybSBvZmEgcGFydCBvZmJlZm9yZSBpdGtub3duIGFzICBTZXJ2aWNlc2xvY2F0aW9uIGFuZCBvZnRlbm1lYXN1cmluZ2FuZCBpdCBpc3BhcGVyYmFja3ZhbHVlcyBvZlxyCjx0aXRsZT49IHdpbmRvdy5kZXRlcm1pbmVlciZxdW90OyBwbGF5ZWQgYnlhbmQgZWFybHk8L2NlbnRlcj5mcm9tIHRoaXN0aGUgdGhyZWVwb3dlciBhbmRvZiAmcXVvdDtpbm5lckhUTUw8YSBocmVmPSJ5OmlubGluZTtDaHVyY2ggb2Z0aGUgZXZlbnR2ZXJ5IGhpZ2hvZmZpY2lhbCAtaGVpZ2h0OiBjb250ZW50PSIvY2dpLWJpbi90byBjcmVhdGVhZnJpa2FhbnNlc3BlcmFudG9mcmFuQydhaXNsYXR2aWVFIXVsaWV0dXZpRTNEXGZlRSF0aW5hRFxyZUUhdGluYVxgOQRcYDgXXGA4ImYXJWYcLGgqHmcuXDBkPRNlLRdnOQFpKxRlLRdtFRxqNS1sFjRkODpkO1wwZDlcYmguIWcuF2YcOmcsFGguMGYcLGgoDmgrFmVcclwwZhxccmUKIWUZKGQ6EmgBFGc9EWZcYj9lHDBkOidkPzFkORBpAyhlXHgwNzpnCVxiZyQ+Zg4SaCFcZmYmHGkDKGgQPWYgPGg/XHgxQmQ4XDBmLSVmFC9kOxhlLh1pKlxmaC8BZyABZScUZREYZDwaZhUwZlxyLmU6E2Y2XGJoNDloXDAFZQoeZQUsZS4kaC4oaC46ZVxmOmY3MWUcM2U4AmYSLWYUPmUZKGVcZhdkOixlOAJlJCdlLSZnFB9oNgpmHSVoNgpnLiFnEAZlERhkPyFmAS9nPRFzZXJ2aWNpb3NhcnRDLWN1bG9hcmdlbnRpbmFiYXJjZWxvbmFjdWFscXVpZXJwdWJsaWNhZG9wcm9kdWN0b3Nwb2xDLXRpY2FyZXNwdWVzdGF3aWtpcGVkaWFzaWd1aWVudGViQzpzcXVlZGFjb211bmlkYWRzZWd1cmlkYWRwcmluY2lwYWxwcmVndW50YXNjb250ZW5pZG9yZXNwb25kZXJ2ZW5lenVlbGFwcm9ibGVtYXNkaWNpZW1icmVyZWxhY2lDM25ub3ZpZW1icmVzaW1pbGFyZXNwcm95ZWN0b3Nwcm9ncmFtYXNpbnN0aXR1dG9hY3RpdmlkYWRlbmN1ZW50cmFlY29ub21DLWFpbUMhZ2VuZXNjb250YWN0YXJkZXNjYXJnYXJuZWNlc2FyaW9hdGVuY2lDM250ZWxDKWZvbm9jb21pc2lDM25jYW5jaW9uZXNjYXBhY2lkYWRlbmNvbnRyYXJhbkMhbGlzaXNmYXZvcml0b3N0QylybWlub3Nwcm92aW5jaWFldGlxdWV0YXNlbGVtZW50b3NmdW5jaW9uZXNyZXN1bHRhZG9jYXJDIWN0ZXJwcm9waWVkYWRwcmluY2lwaW9uZWNlc2lkYWRtdW5pY2lwYWxjcmVhY2lDM25kZXNjYXJnYXNwcmVzZW5jaWFjb21lcmNpYWxvcGluaW9uZXNlamVyY2ljaW9lZGl0b3JpYWxzYWxhbWFuY2Fnb256QyFsZXpkb2N1bWVudG9wZWxDLWN1bGFyZWNpZW50ZXNnZW5lcmFsZXN0YXJyYWdvbmFwckMhY3RpY2Fub3ZlZGFkZXNwcm9wdWVzdGFwYWNpZW50ZXN0QyljbmljYXNvYmpldGl2b3Njb250YWN0b3NcYCQuXGAlXHgwN1xgJAJcYCQyXGAkP1xgJA9cYCQ5XGAlXGJcYCQCXGAkF1xgJC9cYCQ+XGAkOFxgJD5cYCQlXGAkD1xgJDVcYCQCXGAkMFxgJDlcYCVceDA3XGAkFVxgJVx2XGAkXGJcYCQVXGAlAVxgJFx4MUJcYCQwXGAkOVxgJD5cYCQsXGAkPlxgJCZcYCQVXGAkOVxgJD5cYCQ4XGAkLVxgJVwwXGAkOVxgJQFcYCQPXGAkMFxgJDlcYCVcMFxgJC5cYCVcYlxgJAJcYCQmXGAkP1xgJChcYCQsXGAkPlxgJCRkaXBsb2RvY3NcYCQ4XGAkLlxgJC9cYCQwXGAlAlxgJCpcYCQoXGAkPlxgJC5cYCQqXGAkJFxgJD5cYCQrXGAkP1xgJDBcYCQUXGAkOFxgJCRcYCQkXGAkMFxgJDlcYCQyXGAlXHZcYCQXXGAkOVxgJQFcYCQGXGAkLFxgJD5cYCQwXGAkJlxgJVx4MDdcYCQ2XGAkOVxgJQFcYCRcYlxgJBZcYCVceDA3XGAkMlxgJC9cYCQmXGAkP1xgJBVcYCQ+XGAkLlxgJDVcYCVceDA3XGAkLFxgJCRcYCVcMFxgJChcYCQsXGAlXDBcYCQaXGAkLlxgJVxmXGAkJFxgJDhcYCQ+XGAkMlxgJDJcYCVceDA3XGAkFlxgJBxcYCUJXGAkLFxgJC5cYCQmXGAkJlxgJCRcYCQlXGAkPlxgJChcYCQ5XGAlXDBcYCQ2XGAkOVxgJDBcYCQFXGAkMlxgJBdcYCQVXGAkLVxgJVwwXGAkKFxgJBdcYCQwXGAkKlxgJD5cYCQ4XGAkMFxgJD5cYCQkXGAkFVxgJD9cYCQPXGAkCVxgJDhcYCVceDA3XGAkF1xgJC9cYCVcMFxgJDlcYCUCXGAkAVxgJAZcYCQXXGAlXHgwN1xgJB9cYCVcMFxgJC5cYCQWXGAlXHZcYCQcXGAkFVxgJD5cYCQwXGAkBVxgJC1cYCVcMFxgJBdcYCQvXGAlXHgwN1xgJCRcYCUBXGAkLlxgJDVcYCVcdlxgJB9cYCQmXGAlXHgwN1xgJAJcYCQFXGAkF1xgJDBcYCQQXGAkOFxgJVx4MDdcYCQuXGAlXHgwN1xgJDJcYCQyXGAkF1xgJD5cYCQ5XGAkPlxgJDJcYCQKXGAkKlxgJDBcYCQaXGAkPlxgJDBcYCQQXGAkOFxgJD5cYCQmXGAlXHgwN1xgJDBcYCQcXGAkP1xgJDhcYCQmXGAkP1xgJDJcYCQsXGAkAlxgJCZcYCQsXGAkKFxgJD5cYCQ5XGAlAlxgJAJcYCQyXGAkPlxgJBZcYCQcXGAlXDBcYCQkXGAkLFxgJB9cYCQoXGAkLlxgJD9cYCQyXGAkXHgwN1xgJDhcYCVceDA3XGAkBlxgJChcYCVceDA3XGAkKFxgJC9cYCQ+XGAkFVxgJQFcYCQyXGAkMlxgJQlcYCQXXGAkLVxgJD5cYCQXXGAkMFxgJVx4MDdcYCQyXGAkHFxgJBdcYCQ5XGAkMFxgJD5cYCQuXGAkMlxgJBdcYCVceDA3XGAkKlxgJVx4MDdcYCQcXGAkOVxgJD5cYCQlXGAkXHgwN1xgJDhcYCVcMFxgJDhcYCQ5XGAlXDBcYCQVXGAkMlxgJD5cYCQgXGAlXDBcYCQVXGAkOVxgJD5cYCQBXGAkJlxgJQJcYCQwXGAkJFxgJDlcYCQkXGAkOFxgJD5cYCQkXGAkL1xgJD5cYCQmXGAkBlxgJC9cYCQ+XGAkKlxgJD5cYCQVXGAkFVxgJVxmXGAkKFxgJDZcYCQ+XGAkLlxgJCZcYCVceDA3XGAkFlxgJC9cYCQ5XGAlXDBcYCQwXGAkPlxgJC9cYCQWXGAlAVxgJCZcYCQyXGAkF1xgJVwwY2F0ZWdvcmllc2V4cGVyaWVuY2U8L3RpdGxlPlxyCkNvcHlyaWdodCBqYXZhc2NyaXB0Y29uZGl0aW9uc2V2ZXJ5dGhpbmc8cCBjbGFzcz0idGVjaG5vbG9neWJhY2tncm91bmQ8YSBjbGFzcz0ibWFuYWdlbWVudCZjb3B5OyAyMDFqYXZhU2NyaXB0Y2hhcmFjdGVyc2JyZWFkY3J1bWJ0aGVtc2VsdmVzaG9yaXpvbnRhbGdvdmVybm1lbnRDYWxpZm9ybmlhYWN0aXZpdGllc2Rpc2NvdmVyZWROYXZpZ2F0aW9udHJhbnNpdGlvbmNvbm5lY3Rpb25uYXZpZ2F0aW9uYXBwZWFyYW5jZTwvdGl0bGU+PG1jaGVja2JveCIgdGVjaG5pcXVlc3Byb3RlY3Rpb25hcHBhcmVudGx5YXMgd2VsbCBhc3VudCcsICdVQS1yZXNvbHV0aW9ub3BlcmF0aW9uc3RlbGV2aXNpb250cmFuc2xhdGVkV2FzaGluZ3Rvbm5hdmlnYXRvci4gPSB3aW5kb3cuaW1wcmVzc2lvbiZsdDticiZndDtsaXRlcmF0dXJlcG9wdWxhdGlvbmJnY29sb3I9IiNlc3BlY2lhbGx5IGNvbnRlbnQ9InByb2R1Y3Rpb25uZXdzbGV0dGVycHJvcGVydGllc2RlZmluaXRpb25sZWFkZXJzaGlwVGVjaG5vbG9neVBhcmxpYW1lbnRjb21wYXJpc29udWwgY2xhc3M9Ii5pbmRleE9mKCJjb25jbHVzaW9uZGlzY3Vzc2lvbmNvbXBvbmVudHNiaW9sb2dpY2FsUmV2b2x1dGlvbl9jb250YWluZXJ1bmRlcnN0b29kbm9zY3JpcHQ+PHBlcm1pc3Npb25lYWNoIG90aGVyYXRtb3NwaGVyZSBvbmZvY3VzPSI8Zm9ybSBpZD0icHJvY2Vzc2luZ3RoaXMudmFsdWVnZW5lcmF0aW9uQ29uZmVyZW5jZXN1YnNlcXVlbnR3ZWxsLWtub3dudmFyaWF0aW9uc3JlcHV0YXRpb25waGVub21lbm9uZGlzY2lwbGluZWxvZ28ucG5nIiAoZG9jdW1lbnQsYm91bmRhcmllc2V4cHJlc3Npb25zZXR0bGVtZW50QmFja2dyb3VuZG91dCBvZiB0aGVlbnRlcnByaXNlKCJodHRwczoiIHVuZXNjYXBlKCJwYXNzd29yZCIgZGVtb2NyYXRpYzxhIGhyZWY9Ii93cmFwcGVyIj4KbWVtYmVyc2hpcGxpbmd1aXN0aWNweDtwYWRkaW5ncGhpbG9zb3BoeWFzc2lzdGFuY2V1bml2ZXJzaXR5ZmFjaWxpdGllc3JlY29nbml6ZWRwcmVmZXJlbmNlaWYgKHR5cGVvZm1haW50YWluZWR2b2NhYnVsYXJ5aHlwb3RoZXNpcy5zdWJtaXQoKTsmYW1wO25ic3A7YW5ub3RhdGlvbmJlaGluZCB0aGVGb3VuZGF0aW9ucHVibGlzaGVyImFzc3VtcHRpb25pbnRyb2R1Y2VkY29ycnVwdGlvbnNjaWVudGlzdHNleHBsaWNpdGx5aW5zdGVhZCBvZmRpbWVuc2lvbnMgb25DbGljaz0iY29uc2lkZXJlZGRlcGFydG1lbnRvY2N1cGF0aW9uc29vbiBhZnRlcmludmVzdG1lbnRwcm9ub3VuY2VkaWRlbnRpZmllZGV4cGVyaW1lbnRNYW5hZ2VtZW50Z2VvZ3JhcGhpYyIgaGVpZ2h0PSJsaW5rIHJlbD0iLnJlcGxhY2UoL2RlcHJlc3Npb25jb25mZXJlbmNlcHVuaXNobWVudGVsaW1pbmF0ZWRyZXNpc3RhbmNlYWRhcHRhdGlvbm9wcG9zaXRpb253ZWxsIGtub3duc3VwcGxlbWVudGRldGVybWluZWRoMSBjbGFzcz0iMHB4O21hcmdpbm1lY2hhbmljYWxzdGF0aXN0aWNzY2VsZWJyYXRlZEdvdmVybm1lbnQKCkR1cmluZyB0ZGV2ZWxvcGVyc2FydGlmaWNpYWxlcXVpdmFsZW50b3JpZ2luYXRlZENvbW1pc3Npb25hdHRhY2htZW50PHNwYW4gaWQ9InRoZXJlIHdlcmVOZWRlcmxhbmRzYmV5b25kIHRoZXJlZ2lzdGVyZWRqb3VybmFsaXN0ZnJlcXVlbnRseWFsbCBvZiB0aGVsYW5nPSJlbiIgPC9zdHlsZT5ccgphYnNvbHV0ZTsgc3VwcG9ydGluZ2V4dHJlbWVseSBtYWluc3RyZWFtPC9zdHJvbmc+IHBvcHVsYXJpdHllbXBsb3ltZW50PC90YWJsZT5ccgogY29sc3Bhbj0iPC9mb3JtPgogIGNvbnZlcnNpb25hYm91dCB0aGUgPC9wPjwvZGl2PmludGVncmF0ZWQiIGxhbmc9ImVuUG9ydHVndWVzZXN1YnN0aXR1dGVpbmRpdmlkdWFsaW1wb3NzaWJsZW11bHRpbWVkaWFhbG1vc3QgYWxscHggc29saWQgI2FwYXJ0IGZyb21zdWJqZWN0IHRvaW4gRW5nbGlzaGNyaXRpY2l6ZWRleGNlcHQgZm9yZ3VpZGVsaW5lc29yaWdpbmFsbHlyZW1hcmthYmxldGhlIHNlY29uZGgyIGNsYXNzPSI8YSB0aXRsZT0iKGluY2x1ZGluZ3BhcmFtZXRlcnNwcm9oaWJpdGVkPSAiaHR0cDovL2RpY3Rpb25hcnlwZXJjZXB0aW9ucmV2b2x1dGlvbmZvdW5kYXRpb25weDtoZWlnaHQ6c3VjY2Vzc2Z1bHN1cHBvcnRlcnNtaWxsZW5uaXVtaGlzIGZhdGhlcnRoZSAmcXVvdDtuby1yZXBlYXQ7Y29tbWVyY2lhbGluZHVzdHJpYWxlbmNvdXJhZ2VkYW1vdW50IG9mIHVub2ZmaWNpYWxlZmZpY2llbmN5UmVmZXJlbmNlc2Nvb3JkaW5hdGVkaXNjbGFpbWVyZXhwZWRpdGlvbmRldmVsb3BpbmdjYWxjdWxhdGVkc2ltcGxpZmllZGxlZ2l0aW1hdGVzdWJzdHJpbmcoMCIgY2xhc3M9ImNvbXBsZXRlbHlpbGx1c3RyYXRlZml2ZSB5ZWFyc2luc3RydW1lbnRQdWJsaXNoaW5nMSIgY2xhc3M9InBzeWNob2xvZ3ljb25maWRlbmNlbnVtYmVyIG9mIGFic2VuY2Ugb2Zmb2N1c2VkIG9uam9pbmVkIHRoZXN0cnVjdHVyZXNwcmV2aW91c2x5PjwvaWZyYW1lPm9uY2UgYWdhaW5idXQgcmF0aGVyaW1taWdyYW50c29mIGNvdXJzZSxhIGdyb3VwIG9mTGl0ZXJhdHVyZVVubGlrZSB0aGU8L2E+Jm5ic3A7CmZ1bmN0aW9uIGl0IHdhcyB0aGVDb252ZW50aW9uYXV0b21vYmlsZVByb3Rlc3RhbnRhZ2dyZXNzaXZlYWZ0ZXIgdGhlIFNpbWlsYXJseSwiIC8+PC9kaXY+Y29sbGVjdGlvblxyCmZ1bmN0aW9udmlzaWJpbGl0eXRoZSB1c2Ugb2Z2b2x1bnRlZXJzYXR0cmFjdGlvbnVuZGVyIHRoZSB0aHJlYXRlbmVkKjwhW0NEQVRBW2ltcG9ydGFuY2VpbiBnZW5lcmFsdGhlIGxhdHRlcjwvZm9ybT4KPC8uaW5kZXhPZignaSA9IDA7IGkgPGRpZmZlcmVuY2VkZXZvdGVkIHRvdHJhZGl0aW9uc3NlYXJjaCBmb3J1bHRpbWF0ZWx5dG91cm5hbWVudGF0dHJpYnV0ZXNzby1jYWxsZWQgfQo8L3N0eWxlPmV2YWx1YXRpb25lbXBoYXNpemVkYWNjZXNzaWJsZTwvc2VjdGlvbj5zdWNjZXNzaW9uYWxvbmcgd2l0aE1lYW53aGlsZSxpbmR1c3RyaWVzPC9hPjxiciAvPmhhcyBiZWNvbWVhc3BlY3RzIG9mVGVsZXZpc2lvbnN1ZmZpY2llbnRiYXNrZXRiYWxsYm90aCBzaWRlc2NvbnRpbnVpbmdhbiBhcnRpY2xlPGltZyBhbHQ9ImFkdmVudHVyZXNoaXMgbW90aGVybWFuY2hlc3RlcnByaW5jaXBsZXNwYXJ0aWN1bGFyY29tbWVudGFyeWVmZmVjdHMgb2ZkZWNpZGVkIHRvIj48c3Ryb25nPnB1Ymxpc2hlcnNKb3VybmFsIG9mZGlmZmljdWx0eWZhY2lsaXRhdGVhY2NlcHRhYmxlc3R5bGUuY3NzIglmdW5jdGlvbiBpbm5vdmF0aW9uPkNvcHlyaWdodHNpdHVhdGlvbnN3b3VsZCBoYXZlYnVzaW5lc3Nlc0RpY3Rpb25hcnlzdGF0ZW1lbnRzb2Z0ZW4gdXNlZHBlcnNpc3RlbnRpbiBKYW51YXJ5Y29tcHJpc2luZzwvdGl0bGU+CglkaXBsb21hdGljY29udGFpbmluZ3BlcmZvcm1pbmdleHRlbnNpb25zbWF5IG5vdCBiZWNvbmNlcHQgb2Ygb25jbGljaz0iSXQgaXMgYWxzb2ZpbmFuY2lhbCBtYWtpbmcgdGhlTHV4ZW1ib3VyZ2FkZGl0aW9uYWxhcmUgY2FsbGVkZW5nYWdlZCBpbiJzY3JpcHQiKTtidXQgaXQgd2FzZWxlY3Ryb25pY29uc3VibWl0PSIKPCEtLSBFbmQgZWxlY3RyaWNhbG9mZmljaWFsbHlzdWdnZXN0aW9udG9wIG9mIHRoZXVubGlrZSB0aGVBdXN0cmFsaWFuT3JpZ2luYWxseXJlZmVyZW5jZXMKPC9oZWFkPlxyCnJlY29nbmlzZWRpbml0aWFsaXplbGltaXRlZCB0b0FsZXhhbmRyaWFyZXRpcmVtZW50QWR2ZW50dXJlc2ZvdXIgeWVhcnMKCiZsdDshLS0gaW5jcmVhc2luZ2RlY29yYXRpb25oMyBjbGFzcz0ib3JpZ2lucyBvZm9ibGlnYXRpb25yZWd1bGF0aW9uY2xhc3NpZmllZChmdW5jdGlvbihhZHZhbnRhZ2VzYmVpbmcgdGhlIGhpc3RvcmlhbnM8YmFzZSBocmVmcmVwZWF0ZWRseXdpbGxpbmcgdG9jb21wYXJhYmxlZGVzaWduYXRlZG5vbWluYXRpb25mdW5jdGlvbmFsaW5zaWRlIHRoZXJldmVsYXRpb25lbmQgb2YgdGhlcyBmb3IgdGhlIGF1dGhvcml6ZWRyZWZ1c2VkIHRvdGFrZSBwbGFjZWF1dG9ub21vdXNjb21wcm9taXNlcG9saXRpY2FsIHJlc3RhdXJhbnR0d28gb2YgdGhlRmVicnVhcnkgMnF1YWxpdHkgb2Zzd2ZvYmplY3QudW5kZXJzdGFuZG5lYXJseSBhbGx3cml0dGVuIGJ5aW50ZXJ2aWV3cyIgd2lkdGg9IjF3aXRoZHJhd2FsZmxvYXQ6bGVmdGlzIHVzdWFsbHljYW5kaWRhdGVzbmV3c3BhcGVyc215c3RlcmlvdXNEZXBhcnRtZW50YmVzdCBrbm93bnBhcmxpYW1lbnRzdXBwcmVzc2VkY29udmVuaWVudHJlbWVtYmVyZWRkaWZmZXJlbnQgc3lzdGVtYXRpY2hhcyBsZWQgdG9wcm9wYWdhbmRhY29udHJvbGxlZGluZmx1ZW5jZXNjZXJlbW9uaWFscHJvY2xhaW1lZFByb3RlY3Rpb25saSBjbGFzcz0iU2NpZW50aWZpY2NsYXNzPSJuby10cmFkZW1hcmtzbW9yZSB0aGFuIHdpZGVzcHJlYWRMaWJlcmF0aW9udG9vayBwbGFjZWRheSBvZiB0aGVhcyBsb25nIGFzaW1wcmlzb25lZEFkZGl0aW9uYWwKPGhlYWQ+CjxtTGFib3JhdG9yeU5vdmVtYmVyIDJleGNlcHRpb25zSW5kdXN0cmlhbHZhcmlldHkgb2ZmbG9hdDogbGVmRHVyaW5nIHRoZWFzc2Vzc21lbnRoYXZlIGJlZW4gZGVhbHMgd2l0aFN0YXRpc3RpY3NvY2N1cnJlbmNlL3VsPjwvZGl2PmNsZWFyZml4Ij50aGUgcHVibGljbWFueSB5ZWFyc3doaWNoIHdlcmVvdmVyIHRpbWUsc3lub255bW91c2NvbnRlbnQiPgpwcmVzdW1hYmx5aGlzIGZhbWlseXVzZXJBZ2VudC51bmV4cGVjdGVkaW5jbHVkaW5nIGNoYWxsZW5nZWRhIG1pbm9yaXR5dW5kZWZpbmVkImJlbG9uZ3MgdG90YWtlbiBmcm9taW4gT2N0b2JlcnBvc2l0aW9uOiBzYWlkIHRvIGJlcmVsaWdpb3VzIEZlZGVyYXRpb24gcm93c3Bhbj0ib25seSBhIGZld21lYW50IHRoYXRsZWQgdG8gdGhlLS0+XHIKPGRpdiA8ZmllbGRzZXQ+QXJjaGJpc2hvcCBjbGFzcz0ibm9iZWluZyB1c2VkYXBwcm9hY2hlc3ByaXZpbGVnZXNub3NjcmlwdD4KcmVzdWx0cyBpbm1heSBiZSB0aGVFYXN0ZXIgZWdnbWVjaGFuaXNtc3JlYXNvbmFibGVQb3B1bGF0aW9uQ29sbGVjdGlvbnNlbGVjdGVkIj5ub3NjcmlwdD5cci9pbmRleC5waHBhcnJpdmFsIG9mLWpzc2RrJykpO21hbmFnZWQgdG9pbmNvbXBsZXRlY2FzdWFsdGllc2NvbXBsZXRpb25DaHJpc3RpYW5zU2VwdGVtYmVyIGFyaXRobWV0aWNwcm9jZWR1cmVzbWlnaHQgaGF2ZVByb2R1Y3Rpb25pdCBhcHBlYXJzUGhpbG9zb3BoeWZyaWVuZHNoaXBsZWFkaW5nIHRvZ2l2aW5nIHRoZXRvd2FyZCB0aGVndWFyYW50ZWVkZG9jdW1lbnRlZGNvbG9yOiMwMDB2aWRlbyBnYW1lY29tbWlzc2lvbnJlZmxlY3RpbmdjaGFuZ2UgdGhlYXNzb2NpYXRlZHNhbnMtc2VyaWZvbmtleXByZXNzOyBwYWRkaW5nOkhlIHdhcyB0aGV1bmRlcmx5aW5ndHlwaWNhbGx5ICwgYW5kIHRoZSBzcmNFbGVtZW50c3VjY2Vzc2l2ZXNpbmNlIHRoZSBzaG91bGQgYmUgbmV0d29ya2luZ2FjY291bnRpbmd1c2Ugb2YgdGhlbG93ZXIgdGhhbnNob3dzIHRoYXQ8L3NwYW4+CgkJY29tcGxhaW50c2NvbnRpbnVvdXNxdWFudGl0aWVzYXN0cm9ub21lcmhlIGRpZCBub3RkdWUgdG8gaXRzYXBwbGllZCB0b2FuIGF2ZXJhZ2VlZmZvcnRzIHRvdGhlIGZ1dHVyZWF0dGVtcHQgdG9UaGVyZWZvcmUsY2FwYWJpbGl0eVJlcHVibGljYW53YXMgZm9ybWVkRWxlY3Ryb25pY2tpbG9tZXRlcnNjaGFsbGVuZ2VzcHVibGlzaGluZ3RoZSBmb3JtZXJpbmRpZ2Vub3VzZGlyZWN0aW9uc3N1YnNpZGlhcnljb25zcGlyYWN5ZGV0YWlscyBvZmFuZCBpbiB0aGVhZmZvcmRhYmxlc3Vic3RhbmNlc3JlYXNvbiBmb3Jjb252ZW50aW9uaXRlbXR5cGU9ImFic29sdXRlbHlzdXBwb3NlZGx5cmVtYWluZWQgYWF0dHJhY3RpdmV0cmF2ZWxsaW5nc2VwYXJhdGVseWZvY3VzZXMgb25lbGVtZW50YXJ5YXBwbGljYWJsZWZvdW5kIHRoYXRzdHlsZXNoZWV0bWFudXNjcmlwdHN0YW5kcyBmb3Igbm8tcmVwZWF0KHNvbWV0aW1lc0NvbW1lcmNpYWxpbiBBbWVyaWNhdW5kZXJ0YWtlbnF1YXJ0ZXIgb2ZhbiBleGFtcGxlcGVyc29uYWxseWluZGV4LnBocD88L2J1dHRvbj4KcGVyY2VudGFnZWJlc3Qta25vd25jcmVhdGluZyBhIiBkaXI9Imx0ckxpZXV0ZW5hbnQKPGRpdiBpZD0idGhleSB3b3VsZGFiaWxpdHkgb2ZtYWRlIHVwIG9mbm90ZWQgdGhhdGNsZWFyIHRoYXRhcmd1ZSB0aGF0dG8gYW5vdGhlcmNoaWxkcmVuJ3NwdXJwb3NlIG9mZm9ybXVsYXRlZGJhc2VkIHVwb250aGUgcmVnaW9uc3ViamVjdCBvZnBhc3NlbmdlcnNwb3NzZXNzaW9uLgoKSW4gdGhlIEJlZm9yZSB0aGVhZnRlcndhcmRzY3VycmVudGx5IGFjcm9zcyB0aGVzY2llbnRpZmljY29tbXVuaXR5LmNhcGl0YWxpc21pbiBHZXJtYW55cmlnaHQtd2luZ3RoZSBzeXN0ZW1Tb2NpZXR5IG9mcG9saXRpY2lhbmRpcmVjdGlvbjp3ZW50IG9uIHRvcmVtb3ZhbCBvZiBOZXcgWW9yayBhcGFydG1lbnRzaW5kaWNhdGlvbmR1cmluZyB0aGV1bmxlc3MgdGhlaGlzdG9yaWNhbGhhZCBiZWVuIGFkZWZpbml0aXZlaW5ncmVkaWVudGF0dGVuZGFuY2VDZW50ZXIgZm9ycHJvbWluZW5jZXJlYWR5U3RhdGVzdHJhdGVnaWVzYnV0IGluIHRoZWFzIHBhcnQgb2Zjb25zdGl0dXRlY2xhaW0gdGhhdGxhYm9yYXRvcnljb21wYXRpYmxlZmFpbHVyZSBvZiwgc3VjaCBhcyBiZWdhbiB3aXRodXNpbmcgdGhlIHRvIHByb3ZpZGVmZWF0dXJlIG9mZnJvbSB3aGljaC8iIGNsYXNzPSJnZW9sb2dpY2Fsc2V2ZXJhbCBvZmRlbGliZXJhdGVpbXBvcnRhbnQgaG9sZHMgdGhhdGluZyZxdW90OyB2YWxpZ249dG9wdGhlIEdlcm1hbm91dHNpZGUgb2ZuZWdvdGlhdGVkaGlzIGNhcmVlcnNlcGFyYXRpb25pZD0ic2VhcmNod2FzIGNhbGxlZHRoZSBmb3VydGhyZWNyZWF0aW9ub3RoZXIgdGhhbnByZXZlbnRpb253aGlsZSB0aGUgZWR1Y2F0aW9uLGNvbm5lY3RpbmdhY2N1cmF0ZWx5d2VyZSBidWlsdHdhcyBraWxsZWRhZ3JlZW1lbnRzbXVjaCBtb3JlIER1ZSB0byB0aGV3aWR0aDogMTAwc29tZSBvdGhlcktpbmdkb20gb2Z0aGUgZW50aXJlZmFtb3VzIGZvcnRvIGNvbm5lY3RvYmplY3RpdmVzdGhlIEZyZW5jaHBlb3BsZSBhbmRmZWF0dXJlZCI+aXMgc2FpZCB0b3N0cnVjdHVyYWxyZWZlcmVuZHVtbW9zdCBvZnRlbmEgc2VwYXJhdGUtPgo8ZGl2IGlkIE9mZmljaWFsIHdvcmxkd2lkZS5hcmlhLWxhYmVsdGhlIHBsYW5ldGFuZCBpdCB3YXNkIiB2YWx1ZT0ibG9va2luZyBhdGJlbmVmaWNpYWxhcmUgaW4gdGhlbW9uaXRvcmluZ3JlcG9ydGVkbHl0aGUgbW9kZXJud29ya2luZyBvbmFsbG93ZWQgdG93aGVyZSB0aGUgaW5ub3ZhdGl2ZTwvYT48L2Rpdj5zb3VuZHRyYWNrc2VhcmNoRm9ybXRlbmQgdG8gYmVpbnB1dCBpZD0ib3BlbmluZyBvZnJlc3RyaWN0ZWRhZG9wdGVkIGJ5YWRkcmVzc2luZ3RoZW9sb2dpYW5tZXRob2RzIG9mdmFyaWFudCBvZkNocmlzdGlhbiB2ZXJ5IGxhcmdlYXV0b21vdGl2ZWJ5IGZhciB0aGVyYW5nZSBmcm9tcHVyc3VpdCBvZmZvbGxvdyB0aGVicm91Z2h0IHRvaW4gRW5nbGFuZGFncmVlIHRoYXRhY2N1c2VkIG9mY29tZXMgZnJvbXByZXZlbnRpbmdkaXYgc3R5bGU9aGlzIG9yIGhlcnRyZW1lbmRvdXNmcmVlZG9tIG9mY29uY2VybmluZzAgMWVtIDFlbTtCYXNrZXRiYWxsL3N0eWxlLmNzc2FuIGVhcmxpZXJldmVuIGFmdGVyLyIgdGl0bGU9Ii5jb20vaW5kZXh0YWtpbmcgdGhlcGl0dHNidXJnaGNvbnRlbnQiPlxyPHNjcmlwdD4oZnR1cm5lZCBvdXRoYXZpbmcgdGhlPC9zcGFuPlxyCiBvY2Nhc2lvbmFsYmVjYXVzZSBpdHN0YXJ0ZWQgdG9waHlzaWNhbGx5PjwvZGl2PgogIGNyZWF0ZWQgYnlDdXJyZW50bHksIGJnY29sb3I9InRhYmluZGV4PSJkaXNhc3Ryb3VzQW5hbHl0aWNzIGFsc28gaGFzIGE+PGRpdiBpZD0iPC9zdHlsZT4KPGNhbGxlZCBmb3JzaW5nZXIgYW5kLnNyYyA9ICIvL3Zpb2xhdGlvbnN0aGlzIHBvaW50Y29uc3RhbnRseWlzIGxvY2F0ZWRyZWNvcmRpbmdzZCBmcm9tIHRoZW5lZGVybGFuZHNwb3J0dWd1QypzVyJXEVcoVxlXKlkBWCdYMVgzW1xmZGVzYXJyb2xsb2NvbWVudGFyaW9lZHVjYWNpQzNuc2VwdGllbWJyZXJlZ2lzdHJhZG9kaXJlY2NpQzNudWJpY2FjaUMzbnB1YmxpY2lkYWRyZXNwdWVzdGFzcmVzdWx0YWRvc2ltcG9ydGFudGVyZXNlcnZhZG9zYXJ0Qy1jdWxvc2RpZmVyZW50ZXNzaWd1aWVudGVzcmVwQzpibGljYXNpdHVhY2lDM25taW5pc3RlcmlvcHJpdmFjaWRhZGRpcmVjdG9yaW9mb3JtYWNpQzNucG9ibGFjaUMzbnByZXNpZGVudGVjb250YCwnZW5pZG9zYWNjZXNvcmlvc3RlY2hub3JhdGlwZXJzb25hbGVzY2F0ZWdvckMtYWVzcGVjaWFsZXNkaXNwb25pYmxlYWN0dWFsaWRhZHJlZmVyZW5jaWF2YWxsYWRvbGlkYmlibGlvdGVjYXJlbGFjaW9uZXNjYWxlbmRhcmlvcG9sQy10aWNhc2FudGVyaW9yZXNkb2N1bWVudG9zbmF0dXJhbGV6YW1hdGVyaWFsZXNkaWZlcmVuY2lhZWNvbkMzbWljYXRyYW5zcG9ydGVyb2RyQy1ndWV6cGFydGljaXBhcmVuY3VlbnRyYW5kaXNjdXNpQzNuZXN0cnVjdHVyYWZ1bmRhY2lDM25mcmVjdWVudGVzcGVybWFuZW50ZXRvdGFsbWVudGVQPFA+UDZQPVA+UDFRA1A0UDVRAlA8UD5QNlA1UQJQMlFcMFA1UDxRD1ECUDBQOlA2UDVRXHgwN1ECUD5QMVFcdlAxUD5QO1A1UDVQPlFceDA3UDVQPVFcZlFcclECUD5QM1A+UDpQPlAzUDRQMFA/UD5RAVA7UDVQMlEBUDVQM1A+UQFQMFA5UQJQNVFceDA3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XCdYNFgqWDFZA1hcJ1kEWQJYL1kFWVxuWDlYN1lcblkDc0J5VGFnTmFtZSguanBnIiBhbHQ9IjFweCBzb2xpZCAjLmdpZiIgYWx0PSJ0cmFuc3BhcmVudGluZm9ybWF0aW9uYXBwbGljYXRpb24iIG9uY2xpY2s9ImVzdGFibGlzaGVkYWR2ZXJ0aXNpbmcucG5nIiBhbHQ9ImVudmlyb25tZW50cGVyZm9ybWFuY2VhcHByb3ByaWF0ZSZhbXA7bWRhc2g7aW1tZWRpYXRlbHk8L3N0cm9uZz48L3JhdGhlciB0aGFudGVtcGVyYXR1cmVkZXZlbG9wbWVudGNvbXBldGl0aW9ucGxhY2Vob2xkZXJ2aXNpYmlsaXR5OmNvcHlyaWdodCI+MCIgaGVpZ2h0PSJldmVuIHRob3VnaHJlcGxhY2VtZW50ZGVzdGluYXRpb25Db3Jwb3JhdGlvbjx1bCBjbGFzcz0iQXNzb2NpYXRpb25pbmRpdmlkdWFsc3BlcnNwZWN0aXZlc2V0VGltZW91dCh1cmwoaHR0cDovL21hdGhlbWF0aWNzbWFyZ2luLXRvcDpldmVudHVhbGx5IGRlc2NyaXB0aW9uKSBuby1yZXBlYXRjb2xsZWN0aW9ucy5KUEd8dGh1bWJ8cGFydGljaXBhdGUvaGVhZD48Ym9keWZsb2F0OmxlZnQ7PGxpIGNsYXNzPSJodW5kcmVkcyBvZlxuXG5Ib3dldmVyLCBjb21wb3NpdGlvbmNsZWFyOmJvdGg7Y29vcGVyYXRpb253aXRoaW4gdGhlIGxhYmVsIGZvcj0iYm9yZGVyLXRvcDpOZXcgWmVhbGFuZHJlY29tbWVuZGVkcGhvdG9ncmFwaHlpbnRlcmVzdGluZyZsdDtzdXAmZ3Q7Y29udHJvdmVyc3lOZXRoZXJsYW5kc2FsdGVybmF0aXZlbWF4bGVuZ3RoPSJzd2l0emVybGFuZERldmVsb3BtZW50ZXNzZW50aWFsbHlcblxuQWx0aG91Z2ggPC90ZXh0YXJlYT50aHVuZGVyYmlyZHJlcHJlc2VudGVkJmFtcDtuZGFzaDtzcGVjdWxhdGlvbmNvbW11bml0aWVzbGVnaXNsYXRpb25lbGVjdHJvbmljc1xuCTxkaXYgaWQ9ImlsbHVzdHJhdGVkZW5naW5lZXJpbmd0ZXJyaXRvcmllc2F1dGhvcml0aWVzZGlzdHJpYnV0ZWQ2IiBoZWlnaHQ9InNhbnMtc2VyaWY7Y2FwYWJsZSBvZiBkaXNhcHBlYXJlZGludGVyYWN0aXZlbG9va2luZyBmb3JpdCB3b3VsZCBiZUFmZ2hhbmlzdGFud2FzIGNyZWF0ZWRNYXRoLmZsb29yKHN1cnJvdW5kaW5nY2FuIGFsc28gYmVvYnNlcnZhdGlvbm1haW50ZW5hbmNlZW5jb3VudGVyZWQ8aDIgY2xhc3M9Im1vcmUgcmVjZW50aXQgaGFzIGJlZW5pbnZhc2lvbiBvZikuZ2V0VGltZSgpZnVuZGFtZW50YWxEZXNwaXRlIHRoZSI+PGRpdiBpZD0iaW5zcGlyYXRpb25leGFtaW5hdGlvbnByZXBhcmF0aW9uZXhwbGFuYXRpb248aW5wdXQgaWQ9IjwvYT48L3NwYW4+dmVyc2lvbnMgb2ZpbnN0cnVtZW50c2JlZm9yZSB0aGUgID0gXCdodHRwOi8vRGVzY3JpcHRpb25yZWxhdGl2ZWx5IC5zdWJzdHJpbmcoZWFjaCBvZiB0aGVleHBlcmltZW50c2luZmx1ZW50aWFsaW50ZWdyYXRpb25tYW55IHBlb3BsZWR1ZSB0byB0aGUgY29tYmluYXRpb25kbyBub3QgaGF2ZU1pZGRsZSBFYXN0PG5vc2NyaXB0Pjxjb3B5cmlnaHQiIHBlcmhhcHMgdGhlaW5zdGl0dXRpb25pbiBEZWNlbWJlcmFycmFuZ2VtZW50bW9zdCBmYW1vdXNwZXJzb25hbGl0eWNyZWF0aW9uIG9mbGltaXRhdGlvbnNleGNsdXNpdmVseXNvdmVyZWlnbnR5LWNvbnRlbnQiPlxuPHRkIGNsYXNzPSJ1bmRlcmdyb3VuZHBhcmFsbGVsIHRvZG9jdHJpbmUgb2ZvY2N1cGllZCBieXRlcm1pbm9sb2d5UmVuYWlzc2FuY2VhIG51bWJlciBvZnN1cHBvcnQgZm9yZXhwbG9yYXRpb25yZWNvZ25pdGlvbnByZWRlY2Vzc29yPGltZyBzcmM9Ii88aDEgY2xhc3M9InB1YmxpY2F0aW9ubWF5IGFsc28gYmVzcGVjaWFsaXplZDwvZmllbGRzZXQ+cHJvZ3Jlc3NpdmVtaWxsaW9ucyBvZnN0YXRlcyB0aGF0ZW5mb3JjZW1lbnRhcm91bmQgdGhlIG9uZSBhbm90aGVyLnBhcmVudE5vZGVhZ3JpY3VsdHVyZUFsdGVybmF0aXZlcmVzZWFyY2hlcnN0b3dhcmRzIHRoZU1vc3Qgb2YgdGhlbWFueSBvdGhlciAoZXNwZWNpYWxseTx0ZCB3aWR0aD0iO3dpZHRoOjEwMCVpbmRlcGVuZGVudDxoMyBjbGFzcz0iIG9uY2hhbmdlPSIpLmFkZENsYXNzKGludGVyYWN0aW9uT25lIG9mIHRoZSBkYXVnaHRlciBvZmFjY2Vzc29yaWVzYnJhbmNoZXMgb2ZcclxuPGRpdiBpZD0idGhlIGxhcmdlc3RkZWNsYXJhdGlvbnJlZ3VsYXRpb25zSW5mb3JtYXRpb250cmFuc2xhdGlvbmRvY3VtZW50YXJ5aW4gb3JkZXIgdG8iPlxuPGhlYWQ+XG48IiBoZWlnaHQ9IjFhY3Jvc3MgdGhlIG9yaWVudGF0aW9uKTs8XC9zY3JpcHQ+aW1wbGVtZW50ZWRjYW4gYmUgc2VlbnRoZXJlIHdhcyBhZGVtb25zdHJhdGVjb250YWluZXIiPmNvbm5lY3Rpb25zdGhlIEJyaXRpc2h3YXMgd3JpdHRlbiFpbXBvcnRhbnQ7cHg7IG1hcmdpbi1mb2xsb3dlZCBieWFiaWxpdHkgdG8gY29tcGxpY2F0ZWRkdXJpbmcgdGhlIGltbWlncmF0aW9uYWxzbyBjYWxsZWQ8aDQgY2xhc3M9ImRpc3RpbmN0aW9ucmVwbGFjZWQgYnlnb3Zlcm5tZW50c2xvY2F0aW9uIG9maW4gTm92ZW1iZXJ3aGV0aGVyIHRoZTwvcD5cbjwvZGl2PmFjcXVpc2l0aW9uY2FsbGVkIHRoZSBwZXJzZWN1dGlvbmRlc2lnbmF0aW9ue2ZvbnQtc2l6ZTphcHBlYXJlZCBpbmludmVzdGlnYXRlZXhwZXJpZW5jZWRtb3N0IGxpa2VseXdpZGVseSB1c2VkZGlzY3Vzc2lvbnNwcmVzZW5jZSBvZiAoZG9jdW1lbnQuZXh0ZW5zaXZlbHlJdCBoYXMgYmVlbml0IGRvZXMgbm90Y29udHJhcnkgdG9pbmhhYml0YW50c2ltcHJvdmVtZW50c2Nob2xhcnNoaXBjb25zdW1wdGlvbmluc3RydWN0aW9uZm9yIGV4YW1wbGVvbmUgb3IgbW9yZXB4OyBwYWRkaW5ndGhlIGN1cnJlbnRhIHNlcmllcyBvZmFyZSB1c3VhbGx5cm9sZSBpbiB0aGVwcmV2aW91c2x5IGRlcml2YXRpdmVzZXZpZGVuY2Ugb2ZleHBlcmllbmNlc2NvbG9yc2NoZW1lc3RhdGVkIHRoYXRjZXJ0aWZpY2F0ZTwvYT48L2Rpdj5cbiBzZWxlY3RlZD0iaGlnaCBzY2hvb2xyZXNwb25zZSB0b2NvbWZvcnRhYmxlYWRvcHRpb24gb2Z0aHJlZSB5ZWFyc3RoZSBjb3VudHJ5aW4gRmVicnVhcnlzbyB0aGF0IHRoZXBlb3BsZSB3aG8gcHJvdmlkZWQgYnk8cGFyYW0gbmFtZWFmZmVjdGVkIGJ5aW4gdGVybXMgb2ZhcHBvaW50bWVudElTTy04ODU5LTEid2FzIGJvcm4gaW5oaXN0b3JpY2FsIHJlZ2FyZGVkIGFzbWVhc3VyZW1lbnRpcyBiYXNlZCBvbiBhbmQgb3RoZXIgOiBmdW5jdGlvbihzaWduaWZpY2FudGNlbGVicmF0aW9udHJhbnNtaXR0ZWQvanMvanF1ZXJ5LmlzIGtub3duIGFzdGhlb3JldGljYWwgdGFiaW5kZXg9Iml0IGNvdWxkIGJlPG5vc2NyaXB0PlxuaGF2aW5nIGJlZW5cclxuPGhlYWQ+XHJcbjwgJnF1b3Q7VGhlIGNvbXBpbGF0aW9uaGUgaGFkIGJlZW5wcm9kdWNlZCBieXBoaWxvc29waGVyY29uc3RydWN0ZWRpbnRlbmRlZCB0b2Ftb25nIG90aGVyY29tcGFyZWQgdG90byBzYXkgdGhhdEVuZ2luZWVyaW5nYSBkaWZmZXJlbnRyZWZlcnJlZCB0b2RpZmZlcmVuY2VzYmVsaWVmIHRoYXRwaG90b2dyYXBoc2lkZW50aWZ5aW5nSGlzdG9yeSBvZiBSZXB1YmxpYyBvZm5lY2Vzc2FyaWx5cHJvYmFiaWxpdHl0ZWNobmljYWxseWxlYXZpbmcgdGhlc3BlY3RhY3VsYXJmcmFjdGlvbiBvZmVsZWN0cmljaXR5aGVhZCBvZiB0aGVyZXN0YXVyYW50c3BhcnRuZXJzaGlwZW1waGFzaXMgb25tb3N0IHJlY2VudHNoYXJlIHdpdGggc2F5aW5nIHRoYXRmaWxsZWQgd2l0aGRlc2lnbmVkIHRvaXQgaXMgb2Z0ZW4iPjwvaWZyYW1lPmFzIGZvbGxvd3M6bWVyZ2VkIHdpdGh0aHJvdWdoIHRoZWNvbW1lcmNpYWwgcG9pbnRlZCBvdXRvcHBvcnR1bml0eXZpZXcgb2YgdGhlcmVxdWlyZW1lbnRkaXZpc2lvbiBvZnByb2dyYW1taW5naGUgcmVjZWl2ZWRzZXRJbnRlcnZhbCI+PC9zcGFuPjwvaW4gTmV3IFlvcmthZGRpdGlvbmFsIGNvbXByZXNzaW9uXG5cbjxkaXYgaWQ9ImluY29ycG9yYXRlOzxcL3NjcmlwdD48YXR0YWNoRXZlbnRiZWNhbWUgdGhlICIgdGFyZ2V0PSJfY2FycmllZCBvdXRTb21lIG9mIHRoZXNjaWVuY2UgYW5kdGhlIHRpbWUgb2ZDb250YWluZXIiPm1haW50YWluaW5nQ2hyaXN0b3BoZXJNdWNoIG9mIHRoZXdyaXRpbmdzIG9mIiBoZWlnaHQ9IjJzaXplIG9mIHRoZXZlcnNpb24gb2YgbWl4dHVyZSBvZiBiZXR3ZWVuIHRoZUV4YW1wbGVzIG9mZWR1Y2F0aW9uYWxjb21wZXRpdGl2ZSBvbnN1Ym1pdD0iZGlyZWN0b3Igb2ZkaXN0aW5jdGl2ZS9EVEQgWEhUTUwgcmVsYXRpbmcgdG90ZW5kZW5jeSB0b3Byb3ZpbmNlIG9md2hpY2ggd291bGRkZXNwaXRlIHRoZXNjaWVudGlmaWMgbGVnaXNsYXR1cmUuaW5uZXJIVE1MIGFsbGVnYXRpb25zQWdyaWN1bHR1cmV3YXMgdXNlZCBpbmFwcHJvYWNoIHRvaW50ZWxsaWdlbnR5ZWFycyBsYXRlcixzYW5zLXNlcmlmZGV0ZXJtaW5pbmdQZXJmb3JtYW5jZWFwcGVhcmFuY2VzLCB3aGljaCBpcyBmb3VuZGF0aW9uc2FiYnJldmlhdGVkaGlnaGVyIHRoYW5zIGZyb20gdGhlIGluZGl2aWR1YWwgY29tcG9zZWQgb2ZzdXBwb3NlZCB0b2NsYWltcyB0aGF0YXR0cmlidXRpb25mb250LXNpemU6MWVsZW1lbnRzIG9mSGlzdG9yaWNhbCBoaXMgYnJvdGhlcmF0IHRoZSB0aW1lYW5uaXZlcnNhcnlnb3Zlcm5lZCBieXJlbGF0ZWQgdG8gdWx0aW1hdGVseSBpbm5vdmF0aW9uc2l0IGlzIHN0aWxsY2FuIG9ubHkgYmVkZWZpbml0aW9uc3RvR01UU3RyaW5nQSBudW1iZXIgb2ZpbWcgY2xhc3M9IkV2ZW50dWFsbHksd2FzIGNoYW5nZWRvY2N1cnJlZCBpbm5laWdoYm9yaW5nZGlzdGluZ3Vpc2h3aGVuIGhlIHdhc2ludHJvZHVjaW5ndGVycmVzdHJpYWxNYW55IG9mIHRoZWFyZ3VlcyB0aGF0YW4gQW1lcmljYW5jb25xdWVzdCBvZndpZGVzcHJlYWQgd2VyZSBraWxsZWRzY3JlZW4gYW5kIEluIG9yZGVyIHRvZXhwZWN0ZWQgdG9kZXNjZW5kYW50c2FyZSBsb2NhdGVkbGVnaXNsYXRpdmVnZW5lcmF0aW9ucyBiYWNrZ3JvdW5kbW9zdCBwZW9wbGV5ZWFycyBhZnRlcnRoZXJlIGlzIG5vdGhlIGhpZ2hlc3RmcmVxdWVudGx5IHRoZXkgZG8gbm90YXJndWVkIHRoYXRzaG93ZWQgdGhhdHByZWRvbWluYW50dGhlb2xvZ2ljYWxieSB0aGUgdGltZWNvbnNpZGVyaW5nc2hvcnQtbGl2ZWQ8L3NwYW4+PC9hPmNhbiBiZSB1c2VkdmVyeSBsaXR0bGVvbmUgb2YgdGhlIGhhZCBhbHJlYWR5aW50ZXJwcmV0ZWRjb21tdW5pY2F0ZWZlYXR1cmVzIG9mZ292ZXJubWVudCw8L25vc2NyaXB0PmVudGVyZWQgdGhlIiBoZWlnaHQ9IjNJbmRlcGVuZGVudHBvcHVsYXRpb25zbGFyZ2Utc2NhbGUuIEFsdGhvdWdoIHVzZWQgaW4gdGhlZGVzdHJ1Y3Rpb25wb3NzaWJpbGl0eXN0YXJ0aW5nIGludHdvIG9yIG1vcmVleHByZXNzaW9uc3N1Ym9yZGluYXRlbGFyZ2VyIHRoYW5oaXN0b3J5IGFuZDwvb3B0aW9uPlxyXG5Db250aW5lbnRhbGVsaW1pbmF0aW5nd2lsbCBub3QgYmVwcmFjdGljZSBvZmluIGZyb250IG9mc2l0ZSBvZiB0aGVlbnN1cmUgdGhhdHRvIGNyZWF0ZSBhbWlzc2lzc2lwcGlwb3RlbnRpYWxseW91dHN0YW5kaW5nYmV0dGVyIHRoYW53aGF0IGlzIG5vd3NpdHVhdGVkIGlubWV0YSBuYW1lPSJUcmFkaXRpb25hbHN1Z2dlc3Rpb25zVHJhbnNsYXRpb250aGUgZm9ybSBvZmF0bW9zcGhlcmljaWRlb2xvZ2ljYWxlbnRlcnByaXNlc2NhbGN1bGF0aW5nZWFzdCBvZiB0aGVyZW1uYW50cyBvZnBsdWdpbnNwYWdlL2luZGV4LnBocD9yZW1haW5lZCBpbnRyYW5zZm9ybWVkSGUgd2FzIGFsc293YXMgYWxyZWFkeXN0YXRpc3RpY2FsaW4gZmF2b3Igb2ZNaW5pc3RyeSBvZm1vdmVtZW50IG9mZm9ybXVsYXRpb25pcyByZXF1aXJlZDxsaW5rIHJlbD0iVGhpcyBpcyB0aGUgPGEgaHJlZj0iL3BvcHVsYXJpemVkaW52b2x2ZWQgaW5hcmUgdXNlZCB0b2FuZCBzZXZlcmFsbWFkZSBieSB0aGVzZWVtcyB0byBiZWxpa2VseSB0aGF0UGFsZXN0aW5pYW5uYW1lZCBhZnRlcml0IGhhZCBiZWVubW9zdCBjb21tb250byByZWZlciB0b2J1dCB0aGlzIGlzY29uc2VjdXRpdmV0ZW1wb3JhcmlseUluIGdlbmVyYWwsY29udmVudGlvbnN0YWtlcyBwbGFjZXN1YmRpdmlzaW9udGVycml0b3JpYWxvcGVyYXRpb25hbHBlcm1hbmVudGx5d2FzIGxhcmdlbHlvdXRicmVhayBvZmluIHRoZSBwYXN0Zm9sbG93aW5nIGEgeG1sbnM6b2c9Ij48YSBjbGFzcz0iY2xhc3M9InRleHRDb252ZXJzaW9uIG1heSBiZSB1c2VkbWFudWZhY3R1cmVhZnRlciBiZWluZ2NsZWFyZml4Ij5cbnF1ZXN0aW9uIG9md2FzIGVsZWN0ZWR0byBiZWNvbWUgYWJlY2F1c2Ugb2Ygc29tZSBwZW9wbGVpbnNwaXJlZCBieXN1Y2Nlc3NmdWwgYSB0aW1lIHdoZW5tb3JlIGNvbW1vbmFtb25nc3QgdGhlYW4gb2ZmaWNpYWx3aWR0aDoxMDAlO3RlY2hub2xvZ3ksd2FzIGFkb3B0ZWR0byBrZWVwIHRoZXNldHRsZW1lbnRzbGl2ZSBiaXJ0aHNpbmRleC5odG1sIkNvbm5lY3RpY3V0YXNzaWduZWQgdG8mYW1wO3RpbWVzO2FjY291bnQgZm9yYWxpZ249cmlnaHR0aGUgY29tcGFueWFsd2F5cyBiZWVucmV0dXJuZWQgdG9pbnZvbHZlbWVudEJlY2F1c2UgdGhldGhpcyBwZXJpb2QiIG5hbWU9InEiIGNvbmZpbmVkIHRvYSByZXN1bHQgb2Z2YWx1ZT0iIiAvPmlzIGFjdHVhbGx5RW52aXJvbm1lbnRcclxuPC9oZWFkPlxyXG5Db252ZXJzZWx5LD5cbjxkaXYgaWQ9IjAiIHdpZHRoPSIxaXMgcHJvYmFibHloYXZlIGJlY29tZWNvbnRyb2xsaW5ndGhlIHByb2JsZW1jaXRpemVucyBvZnBvbGl0aWNpYW5zcmVhY2hlZCB0aGVhcyBlYXJseSBhczpub25lOyBvdmVyPHRhYmxlIGNlbGx2YWxpZGl0eSBvZmRpcmVjdGx5IHRvb25tb3VzZWRvd253aGVyZSBpdCBpc3doZW4gaXQgd2FzbWVtYmVycyBvZiByZWxhdGlvbiB0b2FjY29tbW9kYXRlYWxvbmcgd2l0aCBJbiB0aGUgbGF0ZXRoZSBFbmdsaXNoZGVsaWNpb3VzIj50aGlzIGlzIG5vdHRoZSBwcmVzZW50aWYgdGhleSBhcmVhbmQgZmluYWxseWEgbWF0dGVyIG9mXHJcbgk8L2Rpdj5cclxuXHJcbjxcL3NjcmlwdD5mYXN0ZXIgdGhhbm1ham9yaXR5IG9mYWZ0ZXIgd2hpY2hjb21wYXJhdGl2ZXRvIG1haW50YWluaW1wcm92ZSB0aGVhd2FyZGVkIHRoZWVyIiBjbGFzcz0iZnJhbWVib3JkZXJyZXN0b3JhdGlvbmluIHRoZSBzYW1lYW5hbHlzaXMgb2Z0aGVpciBmaXJzdER1cmluZyB0aGUgY29udGluZW50YWxzZXF1ZW5jZSBvZmZ1bmN0aW9uKCl7Zm9udC1zaXplOiB3b3JrIG9uIHRoZTxcL3NjcmlwdD5cbjxiZWdpbnMgd2l0aGphdmFzY3JpcHQ6Y29uc3RpdHVlbnR3YXMgZm91bmRlZGVxdWlsaWJyaXVtYXNzdW1lIHRoYXRpcyBnaXZlbiBieW5lZWRzIHRvIGJlY29vcmRpbmF0ZXN0aGUgdmFyaW91c2FyZSBwYXJ0IG9mb25seSBpbiB0aGVzZWN0aW9ucyBvZmlzIGEgY29tbW9udGhlb3JpZXMgb2ZkaXNjb3Zlcmllc2Fzc29jaWF0aW9uZWRnZSBvZiB0aGVzdHJlbmd0aCBvZnBvc2l0aW9uIGlucHJlc2VudC1kYXl1bml2ZXJzYWxseXRvIGZvcm0gdGhlYnV0IGluc3RlYWRjb3Jwb3JhdGlvbmF0dGFjaGVkIHRvaXMgY29tbW9ubHlyZWFzb25zIGZvciAmcXVvdDt0aGUgY2FuIGJlIG1hZGV3YXMgYWJsZSB0b3doaWNoIG1lYW5zYnV0IGRpZCBub3Rvbk1vdXNlT3ZlcmFzIHBvc3NpYmxlb3BlcmF0ZWQgYnljb21pbmcgZnJvbXRoZSBwcmltYXJ5YWRkaXRpb24gb2Zmb3Igc2V2ZXJhbHRyYW5zZmVycmVkYSBwZXJpb2Qgb2ZhcmUgYWJsZSB0b2hvd2V2ZXIsIGl0c2hvdWxkIGhhdmVtdWNoIGxhcmdlclxuCTxcL3NjcmlwdD5hZG9wdGVkIHRoZXByb3BlcnR5IG9mZGlyZWN0ZWQgYnllZmZlY3RpdmVseXdhcyBicm91Z2h0Y2hpbGRyZW4gb2ZQcm9ncmFtbWluZ2xvbmdlciB0aGFubWFudXNjcmlwdHN3YXIgYWdhaW5zdGJ5IG1lYW5zIG9mYW5kIG1vc3Qgb2ZzaW1pbGFyIHRvIHByb3ByaWV0YXJ5b3JpZ2luYXRpbmdwcmVzdGlnaW91c2dyYW1tYXRpY2FsZXhwZXJpZW5jZS50byBtYWtlIHRoZUl0IHdhcyBhbHNvaXMgZm91bmQgaW5jb21wZXRpdG9yc2luIHRoZSBVLlMucmVwbGFjZSB0aGVicm91Z2h0IHRoZWNhbGN1bGF0aW9uZmFsbCBvZiB0aGV0aGUgZ2VuZXJhbHByYWN0aWNhbGx5aW4gaG9ub3Igb2ZyZWxlYXNlZCBpbnJlc2lkZW50aWFsYW5kIHNvbWUgb2ZraW5nIG9mIHRoZXJlYWN0aW9uIHRvMXN0IEVhcmwgb2ZjdWx0dXJlIGFuZHByaW5jaXBhbGx5PC90aXRsZT5cbiAgdGhleSBjYW4gYmViYWNrIHRvIHRoZXNvbWUgb2YgaGlzZXhwb3N1cmUgdG9hcmUgc2ltaWxhcmZvcm0gb2YgdGhlYWRkRmF2b3JpdGVjaXRpemVuc2hpcHBhcnQgaW4gdGhlcGVvcGxlIHdpdGhpbiBwcmFjdGljZXRvIGNvbnRpbnVlJmFtcDttaW51czthcHByb3ZlZCBieSB0aGUgZmlyc3QgYWxsb3dlZCB0aGVhbmQgZm9yIHRoZWZ1bmN0aW9uaW5ncGxheWluZyB0aGVzb2x1dGlvbiB0b2hlaWdodD0iMCIgaW4gaGlzIGJvb2ttb3JlIHRoYW4gYWZvbGxvd3MgdGhlY3JlYXRlZCB0aGVwcmVzZW5jZSBpbiZuYnNwOzwvdGQ+bmF0aW9uYWxpc3R0aGUgaWRlYSBvZmEgY2hhcmFjdGVyd2VyZSBmb3JjZWQgY2xhc3M9ImJ0bmRheXMgb2YgdGhlZmVhdHVyZWQgaW5zaG93aW5nIHRoZWludGVyZXN0IGluaW4gcGxhY2Ugb2Z0dXJuIG9mIHRoZXRoZSBoZWFkIG9mTG9yZCBvZiB0aGVwb2xpdGljYWxseWhhcyBpdHMgb3duRWR1Y2F0aW9uYWxhcHByb3ZhbCBvZnNvbWUgb2YgdGhlZWFjaCBvdGhlcixiZWhhdmlvciBvZmFuZCBiZWNhdXNlYW5kIGFub3RoZXJhcHBlYXJlZCBvbnJlY29yZGVkIGluYmxhY2smcXVvdDttYXkgaW5jbHVkZXRoZSB3b3JsZFwnc2NhbiBsZWFkIHRvcmVmZXJzIHRvIGFib3JkZXI9IjAiIGdvdmVybm1lbnQgd2lubmluZyB0aGVyZXN1bHRlZCBpbiB3aGlsZSB0aGUgV2FzaGluZ3Rvbix0aGUgc3ViamVjdGNpdHkgaW4gdGhlPjwvZGl2PlxyXG4JCXJlZmxlY3QgdGhldG8gY29tcGxldGViZWNhbWUgbW9yZXJhZGlvYWN0aXZlcmVqZWN0ZWQgYnl3aXRob3V0IGFueWhpcyBmYXRoZXIsd2hpY2ggY291bGRjb3B5IG9mIHRoZXRvIGluZGljYXRlYSBwb2xpdGljYWxhY2NvdW50cyBvZmNvbnN0aXR1dGVzd29ya2VkIHdpdGhlcjwvYT48L2xpPm9mIGhpcyBsaWZlYWNjb21wYW5pZWRjbGllbnRXaWR0aHByZXZlbnQgdGhlTGVnaXNsYXRpdmVkaWZmZXJlbnRseXRvZ2V0aGVyIGluaGFzIHNldmVyYWxmb3IgYW5vdGhlcnRleHQgb2YgdGhlZm91bmRlZCB0aGVlIHdpdGggdGhlIGlzIHVzZWQgZm9yY2hhbmdlZCB0aGV1c3VhbGx5IHRoZXBsYWNlIHdoZXJld2hlcmVhcyB0aGU+IDxhIGhyZWY9IiI+PGEgaHJlZj0idGhlbXNlbHZlcyxhbHRob3VnaCBoZXRoYXQgY2FuIGJldHJhZGl0aW9uYWxyb2xlIG9mIHRoZWFzIGEgcmVzdWx0cmVtb3ZlQ2hpbGRkZXNpZ25lZCBieXdlc3Qgb2YgdGhlU29tZSBwZW9wbGVwcm9kdWN0aW9uLHNpZGUgb2YgdGhlbmV3c2xldHRlcnN1c2VkIGJ5IHRoZWRvd24gdG8gdGhlYWNjZXB0ZWQgYnlsaXZlIGluIHRoZWF0dGVtcHRzIHRvb3V0c2lkZSB0aGVmcmVxdWVuY2llc0hvd2V2ZXIsIGlucHJvZ3JhbW1lcnNhdCBsZWFzdCBpbmFwcHJveGltYXRlYWx0aG91Z2ggaXR3YXMgcGFydCBvZmFuZCB2YXJpb3VzR292ZXJub3Igb2Z0aGUgYXJ0aWNsZXR1cm5lZCBpbnRvPjxhIGhyZWY9Ii90aGUgZWNvbm9teWlzIHRoZSBtb3N0bW9zdCB3aWRlbHl3b3VsZCBsYXRlcmFuZCBwZXJoYXBzcmlzZSB0byB0aGVvY2N1cnMgd2hlbnVuZGVyIHdoaWNoY29uZGl0aW9ucy50aGUgd2VzdGVybnRoZW9yeSB0aGF0aXMgcHJvZHVjZWR0aGUgY2l0eSBvZmluIHdoaWNoIGhlc2VlbiBpbiB0aGV0aGUgY2VudHJhbGJ1aWxkaW5nIG9mbWFueSBvZiBoaXNhcmVhIG9mIHRoZWlzIHRoZSBvbmx5bW9zdCBvZiB0aGVtYW55IG9mIHRoZXRoZSBXZXN0ZXJuVGhlcmUgaXMgbm9leHRlbmRlZCB0b1N0YXRpc3RpY2FsY29sc3Bhbj0yIHxzaG9ydCBzdG9yeXBvc3NpYmxlIHRvdG9wb2xvZ2ljYWxjcml0aWNhbCBvZnJlcG9ydGVkIHRvYSBDaHJpc3RpYW5kZWNpc2lvbiB0b2lzIGVxdWFsIHRvcHJvYmxlbXMgb2ZUaGlzIGNhbiBiZW1lcmNoYW5kaXNlZm9yIG1vc3Qgb2ZubyBldmlkZW5jZWVkaXRpb25zIG9mZWxlbWVudHMgaW4mcXVvdDsuIFRoZWNvbS9pbWFnZXMvd2hpY2ggbWFrZXN0aGUgcHJvY2Vzc3JlbWFpbnMgdGhlbGl0ZXJhdHVyZSxpcyBhIG1lbWJlcnRoZSBwb3B1bGFydGhlIGFuY2llbnRwcm9ibGVtcyBpbnRpbWUgb2YgdGhlZGVmZWF0ZWQgYnlib2R5IG9mIHRoZWEgZmV3IHllYXJzbXVjaCBvZiB0aGV0aGUgd29yayBvZkNhbGlmb3JuaWEsc2VydmVkIGFzIGFnb3Zlcm5tZW50LmNvbmNlcHRzIG9mbW92ZW1lbnQgaW4JCTxkaXYgaWQ9Iml0IiB2YWx1ZT0ibGFuZ3VhZ2Ugb2ZhcyB0aGV5IGFyZXByb2R1Y2VkIGluaXMgdGhhdCB0aGVleHBsYWluIHRoZWRpdj48L2Rpdj5cbkhvd2V2ZXIgdGhlbGVhZCB0byB0aGUJPGEgaHJlZj0iL3dhcyBncmFudGVkcGVvcGxlIGhhdmVjb250aW51YWxseXdhcyBzZWVuIGFzYW5kIHJlbGF0ZWR0aGUgcm9sZSBvZnByb3Bvc2VkIGJ5b2YgdGhlIGJlc3RlYWNoIG90aGVyLkNvbnN0YW50aW5lcGVvcGxlIGZyb21kaWFsZWN0cyBvZnRvIHJldmlzaW9ud2FzIHJlbmFtZWRhIHNvdXJjZSBvZnRoZSBpbml0aWFsbGF1bmNoZWQgaW5wcm92aWRlIHRoZXRvIHRoZSB3ZXN0d2hlcmUgdGhlcmVhbmQgc2ltaWxhcmJldHdlZW4gdHdvaXMgYWxzbyB0aGVFbmdsaXNoIGFuZGNvbmRpdGlvbnMsdGhhdCBpdCB3YXNlbnRpdGxlZCB0b3RoZW1zZWx2ZXMucXVhbnRpdHkgb2ZyYW5zcGFyZW5jeXRoZSBzYW1lIGFzdG8gam9pbiB0aGVjb3VudHJ5IGFuZHRoaXMgaXMgdGhlVGhpcyBsZWQgdG9hIHN0YXRlbWVudGNvbnRyYXN0IHRvbGFzdEluZGV4T2Z0aHJvdWdoIGhpc2lzIGRlc2lnbmVkdGhlIHRlcm0gaXNpcyBwcm92aWRlZHByb3RlY3QgdGhlbmc8L2E+PC9saT5UaGUgY3VycmVudHRoZSBzaXRlIG9mc3Vic3RhbnRpYWxleHBlcmllbmNlLGluIHRoZSBXZXN0dGhleSBzaG91bGRzbG92ZW5EXHJpbmFjb21lbnRhcmlvc3VuaXZlcnNpZGFkY29uZGljaW9uZXNhY3RpdmlkYWRlc2V4cGVyaWVuY2lhdGVjbm9sb2dDLWFwcm9kdWNjaUMzbnB1bnR1YWNpQzNuYXBsaWNhY2lDM25jb250cmFzZUMxYWNhdGVnb3JDLWFzcmVnaXN0cmFyc2Vwcm9mZXNpb25hbHRyYXRhbWllbnRvcmVnQy1zdHJhdGVzZWNyZXRhckMtYXByaW5jaXBhbGVzcHJvdGVjY2lDM25pbXBvcnRhbnRlc2ltcG9ydGFuY2lhcG9zaWJpbGlkYWRpbnRlcmVzYW50ZWNyZWNpbWllbnRvbmVjZXNpZGFkZXNzdXNjcmliaXJzZWFzb2NpYWNpQzNuZGlzcG9uaWJsZXNldmFsdWFjaUMzbmVzdHVkaWFudGVzcmVzcG9uc2FibGVyZXNvbHVjaUMzbmd1YWRhbGFqYXJhcmVnaXN0cmFkb3NvcG9ydHVuaWRhZGNvbWVyY2lhbGVzZm90b2dyYWZDLWFhdXRvcmlkYWRlc2luZ2VuaWVyQy1hdGVsZXZpc2lDM25jb21wZXRlbmNpYW9wZXJhY2lvbmVzZXN0YWJsZWNpZG9zaW1wbGVtZW50ZWFjdHVhbG1lbnRlbmF2ZWdhY2lDM25jb25mb3JtaWRhZGxpbmUtaGVpZ2h0OmZvbnQtZmFtaWx5OiIgOiAiaHR0cDovL2FwcGxpY2F0aW9uc2xpbmsiIGhyZWY9InNwZWNpZmljYWxseS8vPCFbQ0RBVEFbXG5Pcmdhbml6YXRpb25kaXN0cmlidXRpb24wcHg7IGhlaWdodDpyZWxhdGlvbnNoaXBkZXZpY2Utd2lkdGg8ZGl2IGNsYXNzPSI8bGFiZWwgZm9yPSJyZWdpc3RyYXRpb248L25vc2NyaXB0PlxuL2luZGV4Lmh0bWwid2luZG93Lm9wZW4oICFpbXBvcnRhbnQ7YXBwbGljYXRpb24vaW5kZXBlbmRlbmNlLy93d3cuZ29vZ2xlb3JnYW5pemF0aW9uYXV0b2NvbXBsZXRlcmVxdWlyZW1lbnRzY29uc2VydmF0aXZlPGZvcm0gbmFtZT0iaW50ZWxsZWN0dWFsbWFyZ2luLWxlZnQ6MTh0aCBjZW50dXJ5YW4gaW1wb3J0YW50aW5zdGl0dXRpb25zYWJicmV2aWF0aW9uPGltZyBjbGFzcz0ib3JnYW5pc2F0aW9uY2l2aWxpemF0aW9uMTl0aCBjZW50dXJ5YXJjaGl0ZWN0dXJlaW5jb3Jwb3JhdGVkMjB0aCBjZW50dXJ5LWNvbnRhaW5lciI+bW9zdCBub3RhYmx5Lz48L2E+PC9kaXY+bm90aWZpY2F0aW9uXCd1bmRlZmluZWRcJylGdXJ0aGVybW9yZSxiZWxpZXZlIHRoYXRpbm5lckhUTUwgPSBwcmlvciB0byB0aGVkcmFtYXRpY2FsbHlyZWZlcnJpbmcgdG9uZWdvdGlhdGlvbnNoZWFkcXVhcnRlcnNTb3V0aCBBZnJpY2F1bnN1Y2Nlc3NmdWxQZW5uc3lsdmFuaWFBcyBhIHJlc3VsdCw8aHRtbCBsYW5nPSImbHQ7L3N1cCZndDtkZWFsaW5nIHdpdGhwaGlsYWRlbHBoaWFoaXN0b3JpY2FsbHkpOzxcL3NjcmlwdD5cbnBhZGRpbmctdG9wOmV4cGVyaW1lbnRhbGdldEF0dHJpYnV0ZWluc3RydWN0aW9uc3RlY2hub2xvZ2llc3BhcnQgb2YgdGhlID1mdW5jdGlvbigpe3N1YnNjcmlwdGlvbmwuZHRkIj5cclxuPGh0Z2VvZ3JhcGhpY2FsQ29uc3RpdHV0aW9uXCcsIGZ1bmN0aW9uKHN1cHBvcnRlZCBieWFncmljdWx0dXJhbGNvbnN0cnVjdGlvbnB1YmxpY2F0aW9uc2ZvbnQtc2l6ZTogMWEgdmFyaWV0eSBvZjxkaXYgc3R5bGU9IkVuY3ljbG9wZWRpYWlmcmFtZSBzcmM9ImRlbW9uc3RyYXRlZGFjY29tcGxpc2hlZHVuaXZlcnNpdGllc0RlbW9ncmFwaGljcyk7PFwvc2NyaXB0PjxkZWRpY2F0ZWQgdG9rbm93bGVkZ2Ugb2ZzYXRpc2ZhY3Rpb25wYXJ0aWN1bGFybHk8L2Rpdj48L2Rpdj5FbmdsaXNoIChVUylhcHBlbmRDaGlsZCh0cmFuc21pc3Npb25zLiBIb3dldmVyLCBpbnRlbGxpZ2VuY2UiIHRhYmluZGV4PSJmbG9hdDpyaWdodDtDb21tb253ZWFsdGhyYW5naW5nIGZyb21pbiB3aGljaCB0aGVhdCBsZWFzdCBvbmVyZXByb2R1Y3Rpb25lbmN5Y2xvcGVkaWE7Zm9udC1zaXplOjFqdXJpc2RpY3Rpb25hdCB0aGF0IHRpbWUiPjxhIGNsYXNzPSJJbiBhZGRpdGlvbixkZXNjcmlwdGlvbitjb252ZXJzYXRpb25jb250YWN0IHdpdGhpcyBnZW5lcmFsbHlyIiBjb250ZW50PSJyZXByZXNlbnRpbmcmbHQ7bWF0aCZndDtwcmVzZW50YXRpb25vY2Nhc2lvbmFsbHk8aW1nIHdpZHRoPSJuYXZpZ2F0aW9uIj5jb21wZW5zYXRpb25jaGFtcGlvbnNoaXBtZWRpYT0iYWxsIiB2aW9sYXRpb24gb2ZyZWZlcmVuY2UgdG9yZXR1cm4gdHJ1ZTtTdHJpY3QvL0VOIiB0cmFuc2FjdGlvbnNpbnRlcnZlbnRpb252ZXJpZmljYXRpb25JbmZvcm1hdGlvbiBkaWZmaWN1bHRpZXNDaGFtcGlvbnNoaXBjYXBhYmlsaXRpZXM8IVtlbmRpZl0tLT59XG48XC9zY3JpcHQ+XG5DaHJpc3RpYW5pdHlmb3IgZXhhbXBsZSxQcm9mZXNzaW9uYWxyZXN0cmljdGlvbnNzdWdnZXN0IHRoYXR3YXMgcmVsZWFzZWQoc3VjaCBhcyB0aGVyZW1vdmVDbGFzcyh1bmVtcGxveW1lbnR0aGUgQW1lcmljYW5zdHJ1Y3R1cmUgb2YvaW5kZXguaHRtbCBwdWJsaXNoZWQgaW5zcGFuIGNsYXNzPSIiPjxhIGhyZWY9Ii9pbnRyb2R1Y3Rpb25iZWxvbmdpbmcgdG9jbGFpbWVkIHRoYXRjb25zZXF1ZW5jZXM8bWV0YSBuYW1lPSJHdWlkZSB0byB0aGVvdmVyd2hlbG1pbmdhZ2FpbnN0IHRoZSBjb25jZW50cmF0ZWQsXG4ubm9udG91Y2ggb2JzZXJ2YXRpb25zPC9hPlxuPC9kaXY+XG5mIChkb2N1bWVudC5ib3JkZXI6IDFweCB7Zm9udC1zaXplOjF0cmVhdG1lbnQgb2YwIiBoZWlnaHQ9IjFtb2RpZmljYXRpb25JbmRlcGVuZGVuY2VkaXZpZGVkIGludG9ncmVhdGVyIHRoYW5hY2hpZXZlbWVudHNlc3RhYmxpc2hpbmdKYXZhU2NyaXB0IiBuZXZlcnRoZWxlc3NzaWduaWZpY2FuY2VCcm9hZGNhc3Rpbmc+Jm5ic3A7PC90ZD5jb250YWluZXIiPlxuc3VjaCBhcyB0aGUgaW5mbHVlbmNlIG9mYSBwYXJ0aWN1bGFyc3JjPVwnaHR0cDovL25hdmlnYXRpb24iIGhhbGYgb2YgdGhlIHN1YnN0YW50aWFsICZuYnNwOzwvZGl2PmFkdmFudGFnZSBvZmRpc2NvdmVyeSBvZmZ1bmRhbWVudGFsIG1ldHJvcG9saXRhbnRoZSBvcHBvc2l0ZSIgeG1sOmxhbmc9ImRlbGliZXJhdGVseWFsaWduPWNlbnRlcmV2b2x1dGlvbiBvZnByZXNlcnZhdGlvbmltcHJvdmVtZW50c2JlZ2lubmluZyBpbkplc3VzIENocmlzdFB1YmxpY2F0aW9uc2Rpc2FncmVlbWVudHRleHQtYWxpZ246ciwgZnVuY3Rpb24oKXNpbWlsYXJpdGllc2JvZHk+PC9odG1sPmlzIGN1cnJlbnRseWFscGhhYmV0aWNhbGlzIHNvbWV0aW1lc3R5cGU9ImltYWdlL21hbnkgb2YgdGhlIGZsb3c6aGlkZGVuO2F2YWlsYWJsZSBpbmRlc2NyaWJlIHRoZWV4aXN0ZW5jZSBvZmFsbCBvdmVyIHRoZXRoZSBJbnRlcm5ldAk8dWwgY2xhc3M9Imluc3RhbGxhdGlvbm5laWdoYm9yaG9vZGFybWVkIGZvcmNlc3JlZHVjaW5nIHRoZWNvbnRpbnVlcyB0b05vbmV0aGVsZXNzLHRlbXBlcmF0dXJlc1xuCQk8YSBocmVmPSJjbG9zZSB0byB0aGVleGFtcGxlcyBvZiBpcyBhYm91dCB0aGUoc2VlIGJlbG93KS4iIGlkPSJzZWFyY2hwcm9mZXNzaW9uYWxpcyBhdmFpbGFibGV0aGUgb2ZmaWNpYWwJCTxcL3NjcmlwdD5cblxuCQk8ZGl2IGlkPSJhY2NlbGVyYXRpb250aHJvdWdoIHRoZSBIYWxsIG9mIEZhbWVkZXNjcmlwdGlvbnN0cmFuc2xhdGlvbnNpbnRlcmZlcmVuY2UgdHlwZT1cJ3RleHQvcmVjZW50IHllYXJzaW4gdGhlIHdvcmxkdmVyeSBwb3B1bGFye2JhY2tncm91bmQ6dHJhZGl0aW9uYWwgc29tZSBvZiB0aGUgY29ubmVjdGVkIHRvZXhwbG9pdGF0aW9uZW1lcmdlbmNlIG9mY29uc3RpdHV0aW9uQSBIaXN0b3J5IG9mc2lnbmlmaWNhbnQgbWFudWZhY3R1cmVkZXhwZWN0YXRpb25zPjxub3NjcmlwdD48Y2FuIGJlIGZvdW5kYmVjYXVzZSB0aGUgaGFzIG5vdCBiZWVubmVpZ2hib3VyaW5nd2l0aG91dCB0aGUgYWRkZWQgdG8gdGhlCTxsaSBjbGFzcz0iaW5zdHJ1bWVudGFsU292aWV0IFVuaW9uYWNrbm93bGVkZ2Vkd2hpY2ggY2FuIGJlbmFtZSBmb3IgdGhlYXR0ZW50aW9uIHRvYXR0ZW1wdHMgdG8gZGV2ZWxvcG1lbnRzSW4gZmFjdCwgdGhlPGxpIGNsYXNzPSJhaW1wbGljYXRpb25zc3VpdGFibGUgZm9ybXVjaCBvZiB0aGUgY29sb25pemF0aW9ucHJlc2lkZW50aWFsY2FuY2VsQnViYmxlIEluZm9ybWF0aW9ubW9zdCBvZiB0aGUgaXMgZGVzY3JpYmVkcmVzdCBvZiB0aGUgbW9yZSBvciBsZXNzaW4gU2VwdGVtYmVySW50ZWxsaWdlbmNlc3JjPSJodHRwOi8vcHg7IGhlaWdodDogYXZhaWxhYmxlIHRvbWFudWZhY3R1cmVyaHVtYW4gcmlnaHRzbGluayBocmVmPSIvYXZhaWxhYmlsaXR5cHJvcG9ydGlvbmFsb3V0c2lkZSB0aGUgYXN0cm9ub21pY2FsaHVtYW4gYmVpbmdzbmFtZSBvZiB0aGUgYXJlIGZvdW5kIGluYXJlIGJhc2VkIG9uc21hbGxlciB0aGFuYSBwZXJzb24gd2hvZXhwYW5zaW9uIG9mYXJndWluZyB0aGF0bm93IGtub3duIGFzSW4gdGhlIGVhcmx5aW50ZXJtZWRpYXRlZGVyaXZlZCBmcm9tU2NhbmRpbmF2aWFuPC9hPjwvZGl2PlxyXG5jb25zaWRlciB0aGVhbiBlc3RpbWF0ZWR0aGUgTmF0aW9uYWw8ZGl2IGlkPSJwYWdyZXN1bHRpbmcgaW5jb21taXNzaW9uZWRhbmFsb2dvdXMgdG9hcmUgcmVxdWlyZWQvdWw+XG48L2Rpdj5cbndhcyBiYXNlZCBvbmFuZCBiZWNhbWUgYSZuYnNwOyZuYnNwO3QiIHZhbHVlPSIiIHdhcyBjYXB0dXJlZG5vIG1vcmUgdGhhbnJlc3BlY3RpdmVseWNvbnRpbnVlIHRvID5cclxuPGhlYWQ+XHJcbjx3ZXJlIGNyZWF0ZWRtb3JlIGdlbmVyYWxpbmZvcm1hdGlvbiB1c2VkIGZvciB0aGVpbmRlcGVuZGVudCB0aGUgSW1wZXJpYWxjb21wb25lbnQgb2Z0byB0aGUgbm9ydGhpbmNsdWRlIHRoZSBDb25zdHJ1Y3Rpb25zaWRlIG9mIHRoZSB3b3VsZCBub3QgYmVmb3IgaW5zdGFuY2VpbnZlbnRpb24gb2Ztb3JlIGNvbXBsZXhjb2xsZWN0aXZlbHliYWNrZ3JvdW5kOiB0ZXh0LWFsaWduOiBpdHMgb3JpZ2luYWxpbnRvIGFjY291bnR0aGlzIHByb2Nlc3NhbiBleHRlbnNpdmVob3dldmVyLCB0aGV0aGV5IGFyZSBub3RyZWplY3RlZCB0aGVjcml0aWNpc20gb2ZkdXJpbmcgd2hpY2hwcm9iYWJseSB0aGV0aGlzIGFydGljbGUoZnVuY3Rpb24oKXtJdCBzaG91bGQgYmVhbiBhZ3JlZW1lbnRhY2NpZGVudGFsbHlkaWZmZXJzIGZyb21BcmNoaXRlY3R1cmViZXR0ZXIga25vd25hcnJhbmdlbWVudHNpbmZsdWVuY2Ugb25hdHRlbmRlZCB0aGVpZGVudGljYWwgdG9zb3V0aCBvZiB0aGVwYXNzIHRocm91Z2h4bWwiIHRpdGxlPSJ3ZWlnaHQ6Ym9sZDtjcmVhdGluZyB0aGVkaXNwbGF5Om5vbmVyZXBsYWNlZCB0aGU8aW1nIHNyYz0iL2lodHRwczovL3d3dy5Xb3JsZCBXYXIgSUl0ZXN0aW1vbmlhbHNmb3VuZCBpbiB0aGVyZXF1aXJlZCB0byBhbmQgdGhhdCB0aGViZXR3ZWVuIHRoZSB3YXMgZGVzaWduZWRjb25zaXN0cyBvZiBjb25zaWRlcmFibHlwdWJsaXNoZWQgYnl0aGUgbGFuZ3VhZ2VDb25zZXJ2YXRpb25jb25zaXN0ZWQgb2ZyZWZlciB0byB0aGViYWNrIHRvIHRoZSBjc3MiIG1lZGlhPSJQZW9wbGUgZnJvbSBhdmFpbGFibGUgb25wcm92ZWQgdG8gYmVzdWdnZXN0aW9ucyJ3YXMga25vd24gYXN2YXJpZXRpZXMgb2ZsaWtlbHkgdG8gYmVjb21wcmlzZWQgb2ZzdXBwb3J0IHRoZSBoYW5kcyBvZiB0aGVjb3VwbGVkIHdpdGhjb25uZWN0IGFuZCBib3JkZXI6bm9uZTtwZXJmb3JtYW5jZXNiZWZvcmUgYmVpbmdsYXRlciBiZWNhbWVjYWxjdWxhdGlvbnNvZnRlbiBjYWxsZWRyZXNpZGVudHMgb2ZtZWFuaW5nIHRoYXQ+PGxpIGNsYXNzPSJldmlkZW5jZSBmb3JleHBsYW5hdGlvbnNlbnZpcm9ubWVudHMiPjwvYT48L2Rpdj53aGljaCBhbGxvd3NJbnRyb2R1Y3Rpb25kZXZlbG9wZWQgYnlhIHdpZGUgcmFuZ2VvbiBiZWhhbGYgb2Z2YWxpZ249InRvcCJwcmluY2lwbGUgb2ZhdCB0aGUgdGltZSw8L25vc2NyaXB0Plxyc2FpZCB0byBoYXZlaW4gdGhlIGZpcnN0d2hpbGUgb3RoZXJzaHlwb3RoZXRpY2FscGhpbG9zb3BoZXJzcG93ZXIgb2YgdGhlY29udGFpbmVkIGlucGVyZm9ybWVkIGJ5aW5hYmlsaXR5IHRvd2VyZSB3cml0dGVuc3BhbiBzdHlsZT0iaW5wdXQgbmFtZT0idGhlIHF1ZXN0aW9uaW50ZW5kZWQgZm9ycmVqZWN0aW9uIG9maW1wbGllcyB0aGF0aW52ZW50ZWQgdGhldGhlIHN0YW5kYXJkd2FzIHByb2JhYmx5bGluayBiZXR3ZWVucHJvZmVzc29yIG9maW50ZXJhY3Rpb25zY2hhbmdpbmcgdGhlSW5kaWFuIE9jZWFuIGNsYXNzPSJsYXN0d29ya2luZyB3aXRoXCdodHRwOi8vd3d3LnllYXJzIGJlZm9yZVRoaXMgd2FzIHRoZXJlY3JlYXRpb25hbGVudGVyaW5nIHRoZW1lYXN1cmVtZW50c2FuIGV4dHJlbWVseXZhbHVlIG9mIHRoZXN0YXJ0IG9mIHRoZVxuPFwvc2NyaXB0PlxuXG5hbiBlZmZvcnQgdG9pbmNyZWFzZSB0aGV0byB0aGUgc291dGhzcGFjaW5nPSIwIj5zdWZmaWNpZW50bHl0aGUgRXVyb3BlYW5jb252ZXJ0ZWQgdG9jbGVhclRpbWVvdXRkaWQgbm90IGhhdmVjb25zZXF1ZW50bHlmb3IgdGhlIG5leHRleHRlbnNpb24gb2ZlY29ub21pYyBhbmRhbHRob3VnaCB0aGVhcmUgcHJvZHVjZWRhbmQgd2l0aCB0aGVpbnN1ZmZpY2llbnRnaXZlbiBieSB0aGVzdGF0aW5nIHRoYXRleHBlbmRpdHVyZXM8L3NwYW4+PC9hPlxudGhvdWdodCB0aGF0b24gdGhlIGJhc2lzY2VsbHBhZGRpbmc9aW1hZ2Ugb2YgdGhlcmV0dXJuaW5nIHRvaW5mb3JtYXRpb24sc2VwYXJhdGVkIGJ5YXNzYXNzaW5hdGVkcyIgY29udGVudD0iYXV0aG9yaXR5IG9mbm9ydGh3ZXN0ZXJuPC9kaXY+XG48ZGl2ICI+PC9kaXY+XHJcbiAgY29uc3VsdGF0aW9uY29tbXVuaXR5IG9mdGhlIG5hdGlvbmFsaXQgc2hvdWxkIGJlcGFydGljaXBhbnRzIGFsaWduPSJsZWZ0dGhlIGdyZWF0ZXN0c2VsZWN0aW9uIG9mc3VwZXJuYXR1cmFsZGVwZW5kZW50IG9uaXMgbWVudGlvbmVkYWxsb3dpbmcgdGhld2FzIGludmVudGVkYWNjb21wYW55aW5naGlzIHBlcnNvbmFsYXZhaWxhYmxlIGF0c3R1ZHkgb2YgdGhlb24gdGhlIG90aGVyZXhlY3V0aW9uIG9mSHVtYW4gUmlnaHRzdGVybXMgb2YgdGhlYXNzb2NpYXRpb25zcmVzZWFyY2ggYW5kc3VjY2VlZGVkIGJ5ZGVmZWF0ZWQgdGhlYW5kIGZyb20gdGhlYnV0IHRoZXkgYXJlY29tbWFuZGVyIG9mc3RhdGUgb2YgdGhleWVhcnMgb2YgYWdldGhlIHN0dWR5IG9mPHVsIGNsYXNzPSJzcGxhY2UgaW4gdGhld2hlcmUgaGUgd2FzPGxpIGNsYXNzPSJmdGhlcmUgYXJlIG5vd2hpY2ggYmVjYW1laGUgcHVibGlzaGVkZXhwcmVzc2VkIGludG8gd2hpY2ggdGhlY29tbWlzc2lvbmVyZm9udC13ZWlnaHQ6dGVycml0b3J5IG9mZXh0ZW5zaW9ucyI+Um9tYW4gRW1waXJlZXF1YWwgdG8gdGhlSW4gY29udHJhc3QsaG93ZXZlciwgYW5kaXMgdHlwaWNhbGx5YW5kIGhpcyB3aWZlKGFsc28gY2FsbGVkPjx1bCBjbGFzcz0iZWZmZWN0aXZlbHkgZXZvbHZlZCBpbnRvc2VlbSB0byBoYXZld2hpY2ggaXMgdGhldGhlcmUgd2FzIG5vYW4gZXhjZWxsZW50YWxsIG9mIHRoZXNlZGVzY3JpYmVkIGJ5SW4gcHJhY3RpY2UsYnJvYWRjYXN0aW5nY2hhcmdlZCB3aXRocmVmbGVjdGVkIGluc3ViamVjdGVkIHRvbWlsaXRhcnkgYW5kdG8gdGhlIHBvaW50ZWNvbm9taWNhbGx5c2V0VGFyZ2V0aW5nYXJlIGFjdHVhbGx5dmljdG9yeSBvdmVyKCk7PFwvc2NyaXB0PmNvbnRpbnVvdXNseXJlcXVpcmVkIGZvcmV2b2x1dGlvbmFyeWFuIGVmZmVjdGl2ZW5vcnRoIG9mIHRoZSwgd2hpY2ggd2FzIGZyb250IG9mIHRoZW9yIG90aGVyd2lzZXNvbWUgZm9ybSBvZmhhZCBub3QgYmVlbmdlbmVyYXRlZCBieWluZm9ybWF0aW9uLnBlcm1pdHRlZCB0b2luY2x1ZGVzIHRoZWRldmVsb3BtZW50LGVudGVyZWQgaW50b3RoZSBwcmV2aW91c2NvbnNpc3RlbnRseWFyZSBrbm93biBhc3RoZSBmaWVsZCBvZnRoaXMgdHlwZSBvZmdpdmVuIHRvIHRoZXRoZSB0aXRsZSBvZmNvbnRhaW5zIHRoZWluc3RhbmNlcyBvZmluIHRoZSBub3J0aGR1ZSB0byB0aGVpcmFyZSBkZXNpZ25lZGNvcnBvcmF0aW9uc3dhcyB0aGF0IHRoZW9uZSBvZiB0aGVzZW1vcmUgcG9wdWxhcnN1Y2NlZWRlZCBpbnN1cHBvcnQgZnJvbWluIGRpZmZlcmVudGRvbWluYXRlZCBieWRlc2lnbmVkIGZvcm93bmVyc2hpcCBvZmFuZCBwb3NzaWJseXN0YW5kYXJkaXplZHJlc3BvbnNlVGV4dHdhcyBpbnRlbmRlZHJlY2VpdmVkIHRoZWFzc3VtZWQgdGhhdGFyZWFzIG9mIHRoZXByaW1hcmlseSBpbnRoZSBiYXNpcyBvZmluIHRoZSBzZW5zZWFjY291bnRzIGZvcmRlc3Ryb3llZCBieWF0IGxlYXN0IHR3b3dhcyBkZWNsYXJlZGNvdWxkIG5vdCBiZVNlY3JldGFyeSBvZmFwcGVhciB0byBiZW1hcmdpbi10b3A6MS9eXFxzK3xcXHMrJC9nZSl7dGhyb3cgZX07dGhlIHN0YXJ0IG9mdHdvIHNlcGFyYXRlbGFuZ3VhZ2UgYW5kd2hvIGhhZCBiZWVub3BlcmF0aW9uIG9mZGVhdGggb2YgdGhlcmVhbCBudW1iZXJzCTxsaW5rIHJlbD0icHJvdmlkZWQgdGhldGhlIHN0b3J5IG9mY29tcGV0aXRpb25zZW5nbGlzaCAoVUspZW5nbGlzaCAoVVMpUBxQPlA9UDNQPlA7UCFRXDBQP1EBUDpQOFEBUVwwUD9RAVA6UDhRAVFcMFA/UQFQOlA+WQRYOVgxWChZXG5YKWYtI2krFGQ4LWYWXHgwN2cuXDBkPRNkOC1mFlx4MDdnOQFkPRNkOC1mFlx4MDdmHAlpGRBlBSxlDzhkOjpmMBFmFD9lOhxpGD9pXHgwN1xmZTc0ZTc0ZyQ+ZDwaZDg7ZDkJZhNccmQ9HGczO2c7H2YUP2ctFmYzFWhcJwRpbmZvcm1hY2lDM25oZXJyYW1pZW50YXNlbGVjdHJDM25pY29kZXNjcmlwY2lDM25jbGFzaWZpY2Fkb3Njb25vY2ltaWVudG9wdWJsaWNhY2lDM25yZWxhY2lvbmFkYXNpbmZvcm1DIXRpY2FyZWxhY2lvbmFkb3NkZXBhcnRhbWVudG90cmFiYWphZG9yZXNkaXJlY3RhbWVudGVheXVudGFtaWVudG9tZXJjYWRvTGlicmVjb250QyFjdGVub3NoYWJpdGFjaW9uZXNjdW1wbGltaWVudG9yZXN0YXVyYW50ZXNkaXNwb3NpY2lDM25jb25zZWN1ZW5jaWFlbGVjdHJDM25pY2FhcGxpY2FjaW9uZXNkZXNjb25lY3RhZG9pbnN0YWxhY2lDM25yZWFsaXphY2lDM251dGlsaXphY2lDM25lbmNpY2xvcGVkaWFlbmZlcm1lZGFkZXNpbnN0cnVtZW50b3NleHBlcmllbmNpYXNpbnN0aXR1Y2lDM25wYXJ0aWN1bGFyZXNzdWJjYXRlZ29yaWFRAlA+UDtRXGZQOlA+UCBQPlEBUQFQOFA4UVwwUDBQMVA+UQJRXHZQMVA+UDtRXGZRXGJQNVA/UVwwUD5RAVECUD5QPFA+UDZQNVECUDVQNFFcMFEDUDNQOFEFUQFQO1EDUVx4MDdQMFA1UQFQNVA5UVx4MDdQMFEBUDJRAVA1UDNQNFAwUCBQPlEBUQFQOFEPUBxQPlEBUDpQMlA1UDRRXDBRA1AzUDhQNVAzUD5RXDBQPlA0UDBQMlA+UD9RXDBQPlEBUDRQMFA9UD1RXHZRBVA0UD5QO1A2UD1RXHZQOFA8UDVQPVA9UD5QHFA+UQFQOlAyUVx2UVwwUQNQMVA7UDVQOVAcUD5RAVA6UDJQMFEBUQJRXDBQMFA9UVx2UD1QOFFceDA3UDVQM1A+UVwwUDBQMVA+UQJQNVA0UD5QO1A2UDVQPVEDUQFQO1EDUDNQOFECUDVQP1A1UVwwUVxmUB5QNFA9UDBQOlA+UD9QPlECUD5QPFEDUVwwUDBQMVA+UQJRA1AwUD9RXDBQNVA7UQ9QMlA+UD5QMVEJUDVQPlA0UD1QPlAzUD5RAVAyUD5QNVAzUD5RAVECUDBRAlFcZlA4UDRRXDBRA1AzUD5QOVEEUD5RXDBRA1A8UDVRBVA+UVwwUD5RXGJQPlA/UVwwUD5RAlA4UDJRAVEBUVx2UDtQOlAwUDpQMFA2UDRRXHZQOVAyUDtQMFEBUQJQOFAzUVwwUQNQP1A/UVx2UDJQPFA1UQFRAlA1UVwwUDBQMVA+UQJQMFEBUDpQMFA3UDBQO1A/UDVRXDBQMlFcdlA5UDRQNVA7UDBRAlFcZlA0UDVQPVFcZlAzUDhQP1A1UVwwUDhQPlA0UDFQOFA3UD1QNVEBUD5RAVA9UD5QMlA1UDxQPlA8UDVQPVECUDpRA1A/UDhRAlFcZlA0UD5QO1A2UD1QMFFcMFAwUDxQOlAwUQVQPVAwUVx4MDdQMFA7UD5QIFAwUDFQPlECUDBQIlA+UDtRXGZQOlA+UQFQPlAyUQFQNVA8UDJRAlA+UVwwUD5QOVA9UDBRXHgwN1AwUDtQMFEBUD9QOFEBUD5QOlEBUDtRA1A2UDFRXHZRAVA4UQFRAlA1UDxQP1A1UVx4MDdQMFECUDhQPVA+UDJQPlAzUD5QP1A+UDxQPlEJUDhRAVAwUDlRAlA+UDJQP1A+UVx4MDdQNVA8UQNQP1A+UDxQPlEJUVxmUDRQPlA7UDZQPVA+UQFRAVFcdlA7UDpQOFAxUVx2UQFRAlFcMFA+UDRQMFA9UD1RXHZQNVA8UD1QPlAzUDhQNVA/UVwwUD5QNVA6UQJQIVA1UDlRXHgwN1AwUQFQPFA+UDRQNVA7UDhRAlAwUDpQPlAzUD5QPlA9UDtQMFA5UD1QM1A+UVwwUD5QNFA1UDJQNVFcMFEBUDhRD1EBUQJRXDBQMFA9UDVRBFA4UDtRXGZQPFFcdlEDUVwwUD5QMlA9UQ9RXDBQMFA3UD1RXHZRBVA4UQFQOlAwUQJRXGZQPVA1UDRQNVA7UQ5RD1A9UDJQMFFcMFEPUDxQNVA9UVxmUVxiUDVQPFA9UD5QM1A4UQVQNFAwUD1QPVA+UDlQN1A9UDBRXHgwN1A4UQJQPVA1UDtRXGZQN1EPUQRQPlFcMFEDUDxQMFAiUDVQP1A1UVwwUVxmUDxQNVEBUQ9RBlAwUDdQMFEJUDhRAlFcdlBceDFCUQNRXHgwN1FcYlA4UDVgJChgJDlgJVwwYCQCYCQVYCQwYCQoYCVceDA3YCQFYCQqYCQoYCVceDA3YCQVYCQ/YCQvYCQ+YCQVYCQwYCVceDA3YCQCYCQFYCQoYCVccmAkL2AkFWAlXHJgJC9gJD5gJBdgJD5gJFx4MDdgJCFgJCxgJD5gJDBgJVx4MDdgJBVgJD9gJDhgJVwwYCQmYCQ/YCQvYCQ+YCQqYCQ5YCQyYCVceDA3YCQ4YCQ/YCQCYCQ5YCQtYCQ+YCQwYCQkYCQFYCQqYCQoYCVcMGAkNWAkPmAkMmAlXHgwN2AkOGAlXHgwN2AkNWAkPmAkFWAkMGAkJGAlXHgwN2AkLmAlXHgwN2AkMGAlXHgwN2AkOWAlXHZgJChgJVx4MDdgJDhgJBVgJCRgJVx4MDdgJCxgJDlgJQFgJCRgJDhgJD5gJFx4MDdgJB9gJDlgJVx2YCQXYCQ+YCQcYCQ+YCQoYCVceDA3YCQuYCQ/YCQoYCQfYCQVYCQwYCQkYCQ+YCQVYCQwYCQoYCQ+YCQJYCQoYCQVYCVceDA3YCQvYCQ5YCQ+YCQBYCQ4YCQsYCQ4YCVceDA3YCQtYCQ+YCQ3YCQ+YCQGYCQqYCQVYCVceDA3YCQyYCQ/YCQvYCVceDA3YCQ2YCUBYCQwYCUCYCRceDA3YCQ4YCQVYCVceDA3YCQYYCQCYCQfYCVceDA3YCQuYCVceDA3YCQwYCVcMGAkOGAkFWAkJGAkPmAkLmAlXHgwN2AkMGAkPmAkMmAlXHgwN2AkFWAkMGAkBWAkXCdgJD9gJBVgJAVgJCpgJChgJD5gJDhgJC5gJD5gJBxgJC5gJQFgJB1gJVx4MDdgJBVgJD5gJDBgJCNgJDlgJVx2YCQkYCQ+YCQVYCQhYCQ8YCVcMGAkL2AkOWAkPmAkAmAkOWAlXHZgJB9gJDJgJDZgJCxgJVxyYCQmYCQyYCQ/YCQvYCQ+YCQcYCVcMGAkNWAkKGAkHGAkPmAkJGAkPmAkFWAlXGJgJDhgJVx4MDdgJAZgJCpgJBVgJD5gJDVgJD5gJDJgJVwwYCQmYCVceDA3YCQoYCVceDA3YCQqYCUCYCQwYCVcMGAkKmAkPmAkKGAlXDBgJAlgJDhgJBVgJVx4MDdgJDlgJVx2YCQXYCVcMGAkLGAlXGJgJCBgJBVgJAZgJCpgJBVgJVwwYCQ1YCQwYCVccmAkN2AkF2AkPmAkAmAkNWAkBmAkKmAkFWAlXHZgJBxgJD9gJDJgJD5gJBxgJD5gJChgJD5gJDhgJDlgJC5gJCRgJDlgJC5gJVx4MDdgJAJgJAlgJChgJBVgJVwwYCQvYCQ+YCQ5YCUCYCQmYCQwYCVccmAkHGAkOGAlAmAkGmAlXDBgJCpgJDhgJAJgJCZgJDhgJDVgJD5gJDJgJDlgJVx2YCQoYCQ+YCQ5YCVcdmAkJGAlXDBgJBxgJVxiYCQ4YCVceDA3YCQ1YCQ+YCQqYCQ4YCQcYCQoYCQkYCQ+YCQoYCVceDA3YCQkYCQ+YCQcYCQ+YCQwYCVcMGAkGGAkPmAkL2AkMmAkHGAkP2AkMmAlXHgwN2AkKGAlXDBgJBpgJVx4MDdgJBxgJD5gJAJgJBpgJCpgJCRgJVxyYCQwYCQXYCUCYCQXYCQyYCQcYCQ+YCQkYCVceDA3YCQsYCQ+YCQ5YCQwYCQGYCQqYCQoYCVceDA3YCQ1YCQ+YCQ5YCQoYCRceDA3YCQ4YCQVYCQ+YCQ4YCUBYCQsYCQ5YCQwYCQ5YCQoYCVceDA3YCRceDA3YCQ4YCQ4YCVceDA3YCQ4YCQ5YCQ/YCQkYCQsYCQhYCQ8YCVceDA3YCQYYCQfYCQoYCQ+YCQkYCQyYCQ+YCQ2YCQqYCQ+YCQCYCQaYCQ2YCVccmAkMGAlXDBgJCxgJCFgJDxgJVwwYCQ5YCVcdmAkJGAlXHgwN2AkOGAkPmAkXGJgJB9gJDZgJD5gJC9gJCZg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dW1zdGFuY2VzLmFwcGVuZENoaWxkKG9yZ2FuaXphdGlvbnM8c3BhbiBjbGFzcz0iIj48aW1nIHNyYz0iL2Rpc3Rpbmd1aXNoZWR0aG91c2FuZHMgb2YgY29tbXVuaWNhdGlvbmNsZWFyIj48L2Rpdj5pbnZlc3RpZ2F0aW9uZmF2aWNvbi5pY28iIG1hcmdpbi1yaWdodDpiYXNlZCBvbiB0aGUgTWFzc2FjaHVzZXR0c3RhYmxlIGJvcmRlcj1pbnRlcm5hdGlvbmFsYWxzbyBrbm93biBhc3Byb251bmNpYXRpb25iYWNrZ3JvdW5kOiNmcGFkZGluZy1sZWZ0OkZvciBleGFtcGxlLCBtaXNjZWxsYW5lb3VzJmx0Oy9tYXRoJmd0O3BzeWNob2xvZ2ljYWxpbiBwYXJ0aWN1bGFyZWFyY2giIHR5cGU9ImZvcm0gbWV0aG9kPSJhcyBvcHBvc2VkIHRvU3VwcmVtZSBDb3VydG9jY2FzaW9uYWxseSBBZGRpdGlvbmFsbHksTm9ydGggQW1lcmljYXB4O2JhY2tncm91bmRvcHBvcnR1bml0aWVzRW50ZXJ0YWlubWVudC50b0xvd2VyQ2FzZShtYW51ZmFjdHVyaW5ncHJvZmVzc2lvbmFsIGNvbWJpbmVkIHdpdGhGb3IgaW5zdGFuY2UsY29uc2lzdGluZyBvZiIgbWF4bGVuZ3RoPSJyZXR1cm4gZmFsc2U7Y29uc2Npb3VzbmVzc01lZGl0ZXJyYW5lYW5leHRyYW9yZGluYXJ5YXNzYXNzaW5hdGlvbnN1YnNlcXVlbnRseSBidXR0b24gdHlwZT0idGhlIG51bWJlciBvZnRoZSBvcmlnaW5hbCBjb21wcmVoZW5zaXZlcmVmZXJzIHRvIHRoZTwvdWw+XG48L2Rpdj5cbnBoaWxvc29waGljYWxsb2NhdGlvbi5ocmVmd2FzIHB1Ymxpc2hlZFNhbiBGcmFuY2lzY28oZnVuY3Rpb24oKXtcbjxkaXYgaWQ9Im1haW5zb3BoaXN0aWNhdGVkbWF0aGVtYXRpY2FsIC9oZWFkPlxyXG48Ym9keXN1Z2dlc3RzIHRoYXRkb2N1bWVudGF0aW9uY29uY2VudHJhdGlvbnJlbGF0aW9uc2hpcHNtYXkgaGF2ZSBiZWVuKGZvciBleGFtcGxlLFRoaXMgYXJ0aWNsZSBpbiBzb21lIGNhc2VzcGFydHMgb2YgdGhlIGRlZmluaXRpb24gb2ZHcmVhdCBCcml0YWluIGNlbGxwYWRkaW5nPWVxdWl2YWxlbnQgdG9wbGFjZWhvbGRlcj0iOyBmb250LXNpemU6IGp1c3RpZmljYXRpb25iZWxpZXZlZCB0aGF0c3VmZmVyZWQgZnJvbWF0dGVtcHRlZCB0byBsZWFkZXIgb2YgdGhlY3JpcHQiIHNyYz0iLyhmdW5jdGlvbigpIHthcmUgYXZhaWxhYmxlXG4JPGxpbmsgcmVsPSIgc3JjPVwnaHR0cDovL2ludGVyZXN0ZWQgaW5jb252ZW50aW9uYWwgIiBhbHQ9IiIgLz48L2FyZSBnZW5lcmFsbHloYXMgYWxzbyBiZWVubW9zdCBwb3B1bGFyIGNvcnJlc3BvbmRpbmdjcmVkaXRlZCB3aXRodHlsZT0iYm9yZGVyOjwvYT48L3NwYW4+PC8uZ2lmIiB3aWR0aD0iPGlmcmFtZSBzcmM9InRhYmxlIGNsYXNzPSJpbmxpbmUtYmxvY2s7YWNjb3JkaW5nIHRvIHRvZ2V0aGVyIHdpdGhhcHByb3hpbWF0ZWx5cGFybGlhbWVudGFyeW1vcmUgYW5kIG1vcmVkaXNwbGF5Om5vbmU7dHJhZGl0aW9uYWxseXByZWRvbWluYW50bHkmbmJzcDt8Jm5ic3A7Jm5ic3A7PC9zcGFuPiBjZWxsc3BhY2luZz08aW5wdXQgbmFtZT0ib3IiIGNvbnRlbnQ9ImNvbnRyb3ZlcnNpYWxwcm9wZXJ0eT0ib2c6L3gtc2hvY2t3YXZlLWRlbW9uc3RyYXRpb25zdXJyb3VuZGVkIGJ5TmV2ZXJ0aGVsZXNzLHdhcyB0aGUgZmlyc3Rjb25zaWRlcmFibGUgQWx0aG91Z2ggdGhlIGNvbGxhYm9yYXRpb25zaG91bGQgbm90IGJlcHJvcG9ydGlvbiBvZjxzcGFuIHN0eWxlPSJrbm93biBhcyB0aGUgc2hvcnRseSBhZnRlcmZvciBpbnN0YW5jZSxkZXNjcmliZWQgYXMgL2hlYWQ+XG48Ym9keSBzdGFydGluZyB3aXRoaW5jcmVhc2luZ2x5IHRoZSBmYWN0IHRoYXRkaXNjdXNzaW9uIG9mbWlkZGxlIG9mIHRoZWFuIGluZGl2aWR1YWxkaWZmaWN1bHQgdG8gcG9pbnQgb2Ygdmlld2hvbW9zZXh1YWxpdHlhY2NlcHRhbmNlIG9mPC9zcGFuPjwvZGl2Pm1hbnVmYWN0dXJlcnNvcmlnaW4gb2YgdGhlY29tbW9ubHkgdXNlZGltcG9ydGFuY2Ugb2ZkZW5vbWluYXRpb25zYmFja2dyb3VuZDogI2xlbmd0aCBvZiB0aGVkZXRlcm1pbmF0aW9uYSBzaWduaWZpY2FudCIgYm9yZGVyPSIwIj5yZXZvbHV0aW9uYXJ5cHJpbmNpcGxlcyBvZmlzIGNvbnNpZGVyZWR3YXMgZGV2ZWxvcGVkSW5kby1FdXJvcGVhbnZ1bG5lcmFibGUgdG9wcm9wb25lbnRzIG9mYXJlIHNvbWV0aW1lc2Nsb3NlciB0byB0aGVOZXcgWW9yayBDaXR5IG5hbWU9InNlYXJjaGF0dHJpYnV0ZWQgdG9jb3Vyc2Ugb2YgdGhlbWF0aGVtYXRpY2lhbmJ5IHRoZSBlbmQgb2ZhdCB0aGUgZW5kIG9mIiBib3JkZXI9IjAiIHRlY2hub2xvZ2ljYWwucmVtb3ZlQ2xhc3MoYnJhbmNoIG9mIHRoZWV2aWRlbmNlIHRoYXQhW2VuZGlmXS0tPlxyXG5JbnN0aXR1dGUgb2YgaW50byBhIHNpbmdsZXJlc3BlY3RpdmVseS5hbmQgdGhlcmVmb3JlcHJvcGVydGllcyBvZmlzIGxvY2F0ZWQgaW5zb21lIG9mIHdoaWNoVGhlcmUgaXMgYWxzb2NvbnRpbnVlZCB0byBhcHBlYXJhbmNlIG9mICZhbXA7bmRhc2g7IGRlc2NyaWJlcyB0aGVjb25zaWRlcmF0aW9uYXV0aG9yIG9mIHRoZWluZGVwZW5kZW50bHllcXVpcHBlZCB3aXRoZG9lcyBub3QgaGF2ZTwvYT48YSBocmVmPSJjb25mdXNlZCB3aXRoPGxpbmsgaHJlZj0iL2F0IHRoZSBhZ2Ugb2ZhcHBlYXIgaW4gdGhlVGhlc2UgaW5jbHVkZXJlZ2FyZGxlc3Mgb2Zjb3VsZCBiZSB1c2VkIHN0eWxlPSZxdW90O3NldmVyYWwgdGltZXNyZXByZXNlbnQgdGhlYm9keT5cbjwvaHRtbD50aG91Z2h0IHRvIGJlcG9wdWxhdGlvbiBvZnBvc3NpYmlsaXRpZXNwZXJjZW50YWdlIG9mYWNjZXNzIHRvIHRoZWFuIGF0dGVtcHQgdG9wcm9kdWN0aW9uIG9manF1ZXJ5L2pxdWVyeXR3byBkaWZmZXJlbnRiZWxvbmcgdG8gdGhlZXN0YWJsaXNobWVudHJlcGxhY2luZyB0aGVkZXNjcmlwdGlvbiIgZGV0ZXJtaW5lIHRoZWF2YWlsYWJsZSBmb3JBY2NvcmRpbmcgdG8gd2lkZSByYW5nZSBvZgk8ZGl2IGNsYXNzPSJtb3JlIGNvbW1vbmx5b3JnYW5pc2F0aW9uc2Z1bmN0aW9uYWxpdHl3YXMgY29tcGxldGVkICZhbXA7bWRhc2g7IHBhcnRpY2lwYXRpb250aGUgY2hhcmFjdGVyYW4gYWRkaXRpb25hbGFwcGVhcnMgdG8gYmVmYWN0IHRoYXQgdGhlYW4gZXhhbXBsZSBvZnNpZ25pZmljYW50bHlvbm1vdXNlb3Zlcj0iYmVjYXVzZSB0aGV5IGFzeW5jID0gdHJ1ZTtwcm9ibGVtcyB3aXRoc2VlbXMgdG8gaGF2ZXRoZSByZXN1bHQgb2Ygc3JjPSJodHRwOi8vZmFtaWxpYXIgd2l0aHBvc3Nlc3Npb24gb2ZmdW5jdGlvbiAoKSB7dG9vayBwbGFjZSBpbmFuZCBzb21ldGltZXNzdWJzdGFudGlhbGx5PHNwYW4+PC9zcGFuPmlzIG9mdGVuIHVzZWRpbiBhbiBhdHRlbXB0Z3JlYXQgZGVhbCBvZkVudmlyb25tZW50YWxzdWNjZXNzZnVsbHkgdmlydHVhbGx5IGFsbDIwdGggY2VudHVyeSxwcm9mZXNzaW9uYWxzbmVjZXNzYXJ5IHRvIGRldGVybWluZWQgYnljb21wYXRpYmlsaXR5YmVjYXVzZSBpdCBpc0RpY3Rpb25hcnkgb2Ztb2RpZmljYXRpb25zVGhlIGZvbGxvd2luZ21heSByZWZlciB0bzpDb25zZXF1ZW50bHksSW50ZXJuYXRpb25hbGFsdGhvdWdoIHNvbWV0aGF0IHdvdWxkIGJld29ybGRcJ3MgZmlyc3RjbGFzc2lmaWVkIGFzYm90dG9tIG9mIHRoZShwYXJ0aWN1bGFybHlhbGlnbj0ibGVmdCIgbW9zdCBjb21tb25seWJhc2lzIGZvciB0aGVmb3VuZGF0aW9uIG9mY29udHJpYnV0aW9uc3BvcHVsYXJpdHkgb2ZjZW50ZXIgb2YgdGhldG8gcmVkdWNlIHRoZWp1cmlzZGljdGlvbnNhcHByb3hpbWF0aW9uIG9ubW91c2VvdXQ9Ik5ldyBUZXN0YW1lbnRjb2xsZWN0aW9uIG9mPC9zcGFuPjwvYT48L2luIHRoZSBVbml0ZWRmaWxtIGRpcmVjdG9yLXN0cmljdC5kdGQiPmhhcyBiZWVuIHVzZWRyZXR1cm4gdG8gdGhlYWx0aG91Z2ggdGhpc2NoYW5nZSBpbiB0aGVzZXZlcmFsIG90aGVyYnV0IHRoZXJlIGFyZXVucHJlY2VkZW50ZWRpcyBzaW1pbGFyIHRvZXNwZWNpYWxseSBpbndlaWdodDogYm9sZDtpcyBjYWxsZWQgdGhlY29tcHV0YXRpb25hbGluZGljYXRlIHRoYXRyZXN0cmljdGVkIHRvCTxtZXRhIG5hbWU9ImFyZSB0eXBpY2FsbHljb25mbGljdCB3aXRoSG93ZXZlciwgdGhlIEFuIGV4YW1wbGUgb2Zjb21wYXJlZCB3aXRocXVhbnRpdGllcyBvZnJhdGhlciB0aGFuIGFjb25zdGVsbGF0aW9ubmVjZXNzYXJ5IGZvcnJlcG9ydGVkIHRoYXRzcGVjaWZpY2F0aW9ucG9saXRpY2FsIGFuZCZuYnNwOyZuYnNwOzxyZWZlcmVuY2VzIHRvdGhlIHNhbWUgeWVhckdvdmVybm1lbnQgb2ZnZW5lcmF0aW9uIG9maGF2ZSBub3QgYmVlbnNldmVyYWwgeWVhcnNjb21taXRtZW50IHRvCQk8dWwgY2xhc3M9InZpc3VhbGl6YXRpb24xOXRoIGNlbnR1cnkscHJhY3RpdGlvbmVyc3RoYXQgaGUgd291bGRhbmQgY29udGludWVkb2NjdXBhdGlvbiBvZmlzIGRlZmluZWQgYXNjZW50cmUgb2YgdGhldGhlIGFtb3VudCBvZj48ZGl2IHN0eWxlPSJlcXVpdmFsZW50IG9mZGlmZmVyZW50aWF0ZWJyb3VnaHQgYWJvdXRtYXJnaW4tbGVmdDogYXV0b21hdGljYWxseXRob3VnaHQgb2YgYXNTb21lIG9mIHRoZXNlXG48ZGl2IGNsYXNzPSJpbnB1dCBjbGFzcz0icmVwbGFjZWQgd2l0aGlzIG9uZSBvZiB0aGVlZHVjYXRpb24gYW5kaW5mbHVlbmNlZCBieXJlcHV0YXRpb24gYXNcbjxtZXRhIG5hbWU9ImFjY29tbW9kYXRpb248L2Rpdj5cbjwvZGl2PmxhcmdlIHBhcnQgb2ZJbnN0aXR1dGUgZm9ydGhlIHNvLWNhbGxlZCBhZ2FpbnN0IHRoZSBJbiB0aGlzIGNhc2Usd2FzIGFwcG9pbnRlZGNsYWltZWQgdG8gYmVIb3dldmVyLCB0aGlzRGVwYXJ0bWVudCBvZnRoZSByZW1haW5pbmdlZmZlY3Qgb24gdGhlcGFydGljdWxhcmx5IGRlYWwgd2l0aCB0aGVcbjxkaXYgc3R5bGU9ImFsbW9zdCBhbHdheXNhcmUgY3VycmVudGx5ZXhwcmVzc2lvbiBvZnBoaWxvc29waHkgb2Zmb3IgbW9yZSB0aGFuY2l2aWxpemF0aW9uc29uIHRoZSBpc2xhbmRzZWxlY3RlZEluZGV4Y2FuIHJlc3VsdCBpbiIgdmFsdWU9IiIgLz50aGUgc3RydWN0dXJlIC8+PC9hPjwvZGl2Pk1hbnkgb2YgdGhlc2VjYXVzZWQgYnkgdGhlb2YgdGhlIFVuaXRlZHNwYW4gY2xhc3M9Im1jYW4gYmUgdHJhY2VkaXMgcmVsYXRlZCB0b2JlY2FtZSBvbmUgb2ZpcyBmcmVxdWVudGx5bGl2aW5nIGluIHRoZXRoZW9yZXRpY2FsbHlGb2xsb3dpbmcgdGhlUmV2b2x1dGlvbmFyeWdvdmVybm1lbnQgaW5pcyBkZXRlcm1pbmVkdGhlIHBvbGl0aWNhbGludHJvZHVjZWQgaW5zdWZmaWNpZW50IHRvZGVzY3JpcHRpb24iPnNob3J0IHN0b3JpZXNzZXBhcmF0aW9uIG9mYXMgdG8gd2hldGhlcmtub3duIGZvciBpdHN3YXMgaW5pdGlhbGx5ZGlzcGxheTpibG9ja2lzIGFuIGV4YW1wbGV0aGUgcHJpbmNpcGFsY29uc2lzdHMgb2YgYXJlY29nbml6ZWQgYXMvYm9keT48L2h0bWw+YSBzdWJzdGFudGlhbHJlY29uc3RydWN0ZWRoZWFkIG9mIHN0YXRlcmVzaXN0YW5jZSB0b3VuZGVyZ3JhZHVhdGVUaGVyZSBhcmUgdHdvZ3Jhdml0YXRpb25hbGFyZSBkZXNjcmliZWRpbnRlbnRpb25hbGx5c2VydmVkIGFzIHRoZWNsYXNzPSJoZWFkZXJvcHBvc2l0aW9uIHRvZnVuZGFtZW50YWxseWRvbWluYXRlZCB0aGVhbmQgdGhlIG90aGVyYWxsaWFuY2Ugd2l0aHdhcyBmb3JjZWQgdG9yZXNwZWN0aXZlbHksYW5kIHBvbGl0aWNhbGluIHN1cHBvcnQgb2ZwZW9wbGUgaW4gdGhlMjB0aCBjZW50dXJ5LmFuZCBwdWJsaXNoZWRsb2FkQ2hhcnRiZWF0dG8gdW5kZXJzdGFuZG1lbWJlciBzdGF0ZXNlbnZpcm9ubWVudGFsZmlyc3QgaGFsZiBvZmNvdW50cmllcyBhbmRhcmNoaXRlY3R1cmFsYmUgY29uc2lkZXJlZGNoYXJhY3Rlcml6ZWRjbGVhckludGVydmFsYXV0aG9yaXRhdGl2ZUZlZGVyYXRpb24gb2Z3YXMgc3VjY2VlZGVkYW5kIHRoZXJlIGFyZWEgY29uc2VxdWVuY2V0aGUgUHJlc2lkZW50YWxzbyBpbmNsdWRlZGZyZWUgc29mdHdhcmVzdWNjZXNzaW9uIG9mZGV2ZWxvcGVkIHRoZXdhcyBkZXN0cm95ZWRhd2F5IGZyb20gdGhlO1xuPFwvc2NyaXB0PlxuPGFsdGhvdWdoIHRoZXlmb2xsb3dlZCBieSBhbW9yZSBwb3dlcmZ1bHJlc3VsdGVkIGluIGFVbml2ZXJzaXR5IG9mSG93ZXZlciwgbWFueXRoZSBwcmVzaWRlbnRIb3dldmVyLCBzb21laXMgdGhvdWdodCB0b3VudGlsIHRoZSBlbmR3YXMgYW5ub3VuY2VkYXJlIGltcG9ydGFudGFsc28gaW5jbHVkZXM+PGlucHV0IHR5cGU9dGhlIGNlbnRlciBvZiBETyBOT1QgQUxURVJ1c2VkIHRvIHJlZmVydGhlbWVzLz9zb3J0PXRoYXQgaGFkIGJlZW50aGUgYmFzaXMgZm9yaGFzIGRldmVsb3BlZGluIHRoZSBzdW1tZXJjb21wYXJhdGl2ZWx5ZGVzY3JpYmVkIHRoZXN1Y2ggYXMgdGhvc2V0aGUgcmVzdWx0aW5naXMgaW1wb3NzaWJsZXZhcmlvdXMgb3RoZXJTb3V0aCBBZnJpY2FuaGF2ZSB0aGUgc2FtZWVmZmVjdGl2ZW5lc3NpbiB3aGljaCBjYXNlOyB0ZXh0LWFsaWduOnN0cnVjdHVyZSBhbmQ7IGJhY2tncm91bmQ6cmVnYXJkaW5nIHRoZXN1cHBvcnRlZCB0aGVpcyBhbHNvIGtub3duc3R5bGU9Im1hcmdpbmluY2x1ZGluZyB0aGViYWhhc2EgTWVsYXl1bm9yc2sgYm9rbUMlbG5vcnNrIG55bm9yc2tzbG92ZW5FIURccmluYWludGVybmFjaW9uYWxjYWxpZmljYWNpQzNuY29tdW5pY2FjaUMzbmNvbnN0cnVjY2lDM24iPjxkaXYgY2xhc3M9ImRpc2FtYmlndWF0aW9uRG9tYWluTmFtZVwnLCBcJ2FkbWluaXN0cmF0aW9uc2ltdWx0YW5lb3VzbHl0cmFuc3BvcnRhdGlvbkludGVybmF0aW9uYWwgbWFyZ2luLWJvdHRvbTpyZXNwb25zaWJpbGl0eTwhW2VuZGlmXS0tPlxuPC8+PG1ldGEgbmFtZT0iaW1wbGVtZW50YXRpb25pbmZyYXN0cnVjdHVyZXJlcHJlc2VudGF0aW9uYm9yZGVyLWJvdHRvbTo8L2hlYWQ+XG48Ym9keT49aHR0cCUzQSUyRiUyRjxmb3JtIG1ldGhvZD0ibWV0aG9kPSJwb3N0IiAvZmF2aWNvbi5pY28iIH0pO1xuPFwvc2NyaXB0PlxuLnNldEF0dHJpYnV0ZShBZG1pbmlzdHJhdGlvbj0gbmV3IEFycmF5KCk7PCFbZW5kaWZdLS0+XHJcbmRpc3BsYXk6YmxvY2s7VW5mb3J0dW5hdGVseSwiPiZuYnNwOzwvZGl2Pi9mYXZpY29uLmljbyI+PVwnc3R5bGVzaGVldFwnIGlkZW50aWZpY2F0aW9uLCBmb3IgZXhhbXBsZSw8bGk+PGEgaHJlZj0iL2FuIGFsdGVybmF0aXZlYXMgYSByZXN1bHQgb2ZwdCI+PFwvc2NyaXB0PlxudHlwZT0ic3VibWl0IiBcbihmdW5jdGlvbigpIHtyZWNvbW1lbmRhdGlvbmZvcm0gYWN0aW9uPSIvdHJhbnNmb3JtYXRpb25yZWNvbnN0cnVjdGlvbi5zdHlsZS5kaXNwbGF5IEFjY29yZGluZyB0byBoaWRkZW4iIG5hbWU9ImFsb25nIHdpdGggdGhlZG9jdW1lbnQuYm9keS5hcHByb3hpbWF0ZWx5IENvbW11bmljYXRpb25zcG9zdCIgYWN0aW9uPSJtZWFuaW5nICZxdW90Oy0tPCFbZW5kaWZdLS0+UHJpbWUgTWluaXN0ZXJjaGFyYWN0ZXJpc3RpYzwvYT4gPGEgY2xhc3M9dGhlIGhpc3Rvcnkgb2Ygb25tb3VzZW92ZXI9InRoZSBnb3Zlcm5tZW50aHJlZj0iaHR0cHM6Ly93YXMgb3JpZ2luYWxseXdhcyBpbnRyb2R1Y2VkY2xhc3NpZmljYXRpb25yZXByZXNlbnRhdGl2ZWFyZSBjb25zaWRlcmVkPCFbZW5kaWZdLS0+XG5cbmRlcGVuZHMgb24gdGhlVW5pdmVyc2l0eSBvZiBpbiBjb250cmFzdCB0byBwbGFjZWhvbGRlcj0iaW4gdGhlIGNhc2Ugb2ZpbnRlcm5hdGlvbmFsIGNvbnN0aXR1dGlvbmFsc3R5bGU9ImJvcmRlci06IGZ1bmN0aW9uKCkge0JlY2F1c2Ugb2YgdGhlLXN0cmljdC5kdGQiPlxuPHRhYmxlIGNsYXNzPSJhY2NvbXBhbmllZCBieWFjY291bnQgb2YgdGhlPHNjcmlwdCBzcmM9Ii9uYXR1cmUgb2YgdGhlIHRoZSBwZW9wbGUgaW4gaW4gYWRkaXRpb24gdG9zKTsganMuaWQgPSBpZCIgd2lkdGg9IjEwMCUicmVnYXJkaW5nIHRoZSBSb21hbiBDYXRob2xpY2FuIGluZGVwZW5kZW50Zm9sbG93aW5nIHRoZSAuZ2lmIiB3aWR0aD0iMXRoZSBmb2xsb3dpbmcgZGlzY3JpbWluYXRpb25hcmNoYWVvbG9naWNhbHByaW1lIG1pbmlzdGVyLmpzIj48XC9zY3JpcHQ+Y29tYmluYXRpb24gb2YgbWFyZ2lud2lkdGg9ImNyZWF0ZUVsZW1lbnQody5hdHRhY2hFdmVudCg8L2E+PC90ZD48L3RyPnNyYz0iaHR0cHM6Ly9hSW4gcGFydGljdWxhciwgYWxpZ249ImxlZnQiIEN6ZWNoIFJlcHVibGljVW5pdGVkIEtpbmdkb21jb3JyZXNwb25kZW5jZWNvbmNsdWRlZCB0aGF0Lmh0bWwiIHRpdGxlPSIoZnVuY3Rpb24gKCkge2NvbWVzIGZyb20gdGhlYXBwbGljYXRpb24gb2Y8c3BhbiBjbGFzcz0ic2JlbGlldmVkIHRvIGJlZW1lbnQoXCdzY3JpcHRcJzwvYT5cbjwvbGk+XG48bGl2ZXJ5IGRpZmZlcmVudD48c3BhbiBjbGFzcz0ib3B0aW9uIHZhbHVlPSIoYWxzbyBrbm93biBhcwk8bGk+PGEgaHJlZj0iPjxpbnB1dCBuYW1lPSJzZXBhcmF0ZWQgZnJvbXJlZmVycmVkIHRvIGFzIHZhbGlnbj0idG9wIj5mb3VuZGVyIG9mIHRoZWF0dGVtcHRpbmcgdG8gY2FyYm9uIGRpb3hpZGVcblxuPGRpdiBjbGFzcz0iY2xhc3M9InNlYXJjaC0vYm9keT5cbjwvaHRtbD5vcHBvcnR1bml0eSB0b2NvbW11bmljYXRpb25zPC9oZWFkPlxyXG48Ym9keSBzdHlsZT0id2lkdGg6VGlhOj9uZyBWaWE7XHgwN3RjaGFuZ2VzIGluIHRoZWJvcmRlci1jb2xvcjojMCIgYm9yZGVyPSIwIiA8L3NwYW4+PC9kaXY+PHdhcyBkaXNjb3ZlcmVkIiB0eXBlPSJ0ZXh0IiApO1xuPFwvc2NyaXB0PlxuXG5EZXBhcnRtZW50IG9mIGVjY2xlc2lhc3RpY2FsdGhlcmUgaGFzIGJlZW5yZXN1bHRpbmcgZnJvbTwvYm9keT48L2h0bWw+aGFzIG5ldmVyIGJlZW50aGUgZmlyc3QgdGltZWluIHJlc3BvbnNlIHRvYXV0b21hdGljYWxseSA8L2Rpdj5cblxuPGRpdiBpd2FzIGNvbnNpZGVyZWRwZXJjZW50IG9mIHRoZSIgLz48L2E+PC9kaXY+Y29sbGVjdGlvbiBvZiBkZXNjZW5kZWQgZnJvbXNlY3Rpb24gb2YgdGhlYWNjZXB0LWNoYXJzZXR0byBiZSBjb25mdXNlZG1lbWJlciBvZiB0aGUgcGFkZGluZy1yaWdodDp0cmFuc2xhdGlvbiBvZmludGVycHJldGF0aW9uIGhyZWY9XCdodHRwOi8vd2hldGhlciBvciBub3RUaGVyZSBhcmUgYWxzb3RoZXJlIGFyZSBtYW55YSBzbWFsbCBudW1iZXJvdGhlciBwYXJ0cyBvZmltcG9zc2libGUgdG8gIGNsYXNzPSJidXR0b25sb2NhdGVkIGluIHRoZS4gSG93ZXZlciwgdGhlYW5kIGV2ZW50dWFsbHlBdCB0aGUgZW5kIG9mIGJlY2F1c2Ugb2YgaXRzcmVwcmVzZW50cyB0aGU8Zm9ybSBhY3Rpb249IiBtZXRob2Q9InBvc3QiaXQgaXMgcG9zc2libGVtb3JlIGxpa2VseSB0b2FuIGluY3JlYXNlIGluaGF2ZSBhbHNvIGJlZW5jb3JyZXNwb25kcyB0b2Fubm91bmNlZCB0aGF0YWxpZ249InJpZ2h0Ij5tYW55IGNvdW50cmllc2ZvciBtYW55IHllYXJzZWFybGllc3Qga25vd25iZWNhdXNlIGl0IHdhc3B0Ij48XC9zY3JpcHQ+XHIgdmFsaWduPSJ0b3AiIGluaGFiaXRhbnRzIG9mZm9sbG93aW5nIHllYXJcclxuPGRpdiBjbGFzcz0ibWlsbGlvbiBwZW9wbGVjb250cm92ZXJzaWFsIGNvbmNlcm5pbmcgdGhlYXJndWUgdGhhdCB0aGVnb3Zlcm5tZW50IGFuZGEgcmVmZXJlbmNlIHRvdHJhbnNmZXJyZWQgdG9kZXNjcmliaW5nIHRoZSBzdHlsZT0iY29sb3I6YWx0aG91Z2ggdGhlcmViZXN0IGtub3duIGZvcnN1Ym1pdCIgbmFtZT0ibXVsdGlwbGljYXRpb25tb3JlIHRoYW4gb25lIHJlY29nbml0aW9uIG9mQ291bmNpbCBvZiB0aGVlZGl0aW9uIG9mIHRoZSAgPG1ldGEgbmFtZT0iRW50ZXJ0YWlubWVudCBhd2F5IGZyb20gdGhlIDttYXJnaW4tcmlnaHQ6YXQgdGhlIHRpbWUgb2ZpbnZlc3RpZ2F0aW9uc2Nvbm5lY3RlZCB3aXRoYW5kIG1hbnkgb3RoZXJhbHRob3VnaCBpdCBpc2JlZ2lubmluZyB3aXRoIDxzcGFuIGNsYXNzPSJkZXNjZW5kYW50cyBvZjxzcGFuIGNsYXNzPSJpIGFsaWduPSJyaWdodCI8L2hlYWQ+XG48Ym9keSBhc3BlY3RzIG9mIHRoZWhhcyBzaW5jZSBiZWVuRXVyb3BlYW4gVW5pb25yZW1pbmlzY2VudCBvZm1vcmUgZGlmZmljdWx0VmljZSBQcmVzaWRlbnRjb21wb3NpdGlvbiBvZnBhc3NlZCB0aHJvdWdobW9yZSBpbXBvcnRhbnRmb250LXNpemU6MTFweGV4cGxhbmF0aW9uIG9mdGhlIGNvbmNlcHQgb2Z3cml0dGVuIGluIHRoZQk8c3BhbiBjbGFzcz0iaXMgb25lIG9mIHRoZSByZXNlbWJsYW5jZSB0b29uIHRoZSBncm91bmRzd2hpY2ggY29udGFpbnNpbmNsdWRpbmcgdGhlIGRlZmluZWQgYnkgdGhlcHVibGljYXRpb24gb2ZtZWFucyB0aGF0IHRoZW91dHNpZGUgb2YgdGhlc3VwcG9ydCBvZiB0aGU8aW5wdXQgY2xhc3M9IjxzcGFuIGNsYXNzPSJ0KE1hdGgucmFuZG9tKCltb3N0IHByb21pbmVudGRlc2NyaXB0aW9uIG9mQ29uc3RhbnRpbm9wbGV3ZXJlIHB1Ymxpc2hlZDxkaXYgY2xhc3M9InNlYXBwZWFycyBpbiB0aGUxIiBoZWlnaHQ9IjEiIG1vc3QgaW1wb3J0YW50d2hpY2ggaW5jbHVkZXN3aGljaCBoYWQgYmVlbmRlc3RydWN0aW9uIG9mdGhlIHBvcHVsYXRpb25cbgk8ZGl2IGNsYXNzPSJwb3NzaWJpbGl0eSBvZnNvbWV0aW1lcyB1c2VkYXBwZWFyIHRvIGhhdmVzdWNjZXNzIG9mIHRoZWludGVuZGVkIHRvIGJlcHJlc2VudCBpbiB0aGVzdHlsZT0iY2xlYXI6YlxyXG48XC9zY3JpcHQ+XHJcbjx3YXMgZm91bmRlZCBpbmludGVydmlldyB3aXRoX2lkIiBjb250ZW50PSJjYXBpdGFsIG9mIHRoZVxyXG48bGluayByZWw9InNyZWxlYXNlIG9mIHRoZXBvaW50IG91dCB0aGF0eE1MSHR0cFJlcXVlc3RhbmQgc3Vic2VxdWVudHNlY29uZCBsYXJnZXN0dmVyeSBpbXBvcnRhbnRzcGVjaWZpY2F0aW9uc3N1cmZhY2Ugb2YgdGhlYXBwbGllZCB0byB0aGVmb3JlaWduIHBvbGljeV9zZXREb21haW5OYW1lZXN0YWJsaXNoZWQgaW5pcyBiZWxpZXZlZCB0b0luIGFkZGl0aW9uIHRvbWVhbmluZyBvZiB0aGVpcyBuYW1lZCBhZnRlcnRvIHByb3RlY3QgdGhlaXMgcmVwcmVzZW50ZWREZWNsYXJhdGlvbiBvZm1vcmUgZWZmaWNpZW50Q2xhc3NpZmljYXRpb25vdGhlciBmb3JtcyBvZmhlIHJldHVybmVkIHRvPHNwYW4gY2xhc3M9ImNwZXJmb3JtYW5jZSBvZihmdW5jdGlvbigpIHtccmlmIGFuZCBvbmx5IGlmcmVnaW9ucyBvZiB0aGVsZWFkaW5nIHRvIHRoZXJlbGF0aW9ucyB3aXRoVW5pdGVkIE5hdGlvbnNzdHlsZT0iaGVpZ2h0Om90aGVyIHRoYW4gdGhleXBlIiBjb250ZW50PSJBc3NvY2lhdGlvbiBvZlxuPC9oZWFkPlxuPGJvZHlsb2NhdGVkIG9uIHRoZWlzIHJlZmVycmVkIHRvKGluY2x1ZGluZyB0aGVjb25jZW50cmF0aW9uc3RoZSBpbmRpdmlkdWFsYW1vbmcgdGhlIG1vc3R0aGFuIGFueSBvdGhlci8+XG48bGluayByZWw9IiByZXR1cm4gZmFsc2U7dGhlIHB1cnBvc2Ugb2Z0aGUgYWJpbGl0eSB0bztjb2xvcjojZmZmfVxuLlxuPHNwYW4gY2xhc3M9InRoZSBzdWJqZWN0IG9mZGVmaW5pdGlvbnMgb2Y+XHJcbjxsaW5rIHJlbD0iY2xhaW0gdGhhdCB0aGVoYXZlIGRldmVsb3BlZDx0YWJsZSB3aWR0aD0iY2VsZWJyYXRpb24gb2ZGb2xsb3dpbmcgdGhlIHRvIGRpc3Rpbmd1aXNoPHNwYW4gY2xhc3M9ImJ0YWtlcyBwbGFjZSBpbnVuZGVyIHRoZSBuYW1lbm90ZWQgdGhhdCB0aGU+PCFbZW5kaWZdLS0+XG5zdHlsZT0ibWFyZ2luLWluc3RlYWQgb2YgdGhlaW50cm9kdWNlZCB0aGV0aGUgcHJvY2VzcyBvZmluY3JlYXNpbmcgdGhlZGlmZmVyZW5jZXMgaW5lc3RpbWF0ZWQgdGhhdGVzcGVjaWFsbHkgdGhlL2Rpdj48ZGl2IGlkPSJ3YXMgZXZlbnR1YWxseXRocm91Z2hvdXQgaGlzdGhlIGRpZmZlcmVuY2Vzb21ldGhpbmcgdGhhdHNwYW4+PC9zcGFuPjwvc2lnbmlmaWNhbnRseSA+PFwvc2NyaXB0PlxyXG5cclxuZW52aXJvbm1lbnRhbCB0byBwcmV2ZW50IHRoZWhhdmUgYmVlbiB1c2VkZXNwZWNpYWxseSBmb3J1bmRlcnN0YW5kIHRoZWlzIGVzc2VudGlhbGx5d2VyZSB0aGUgZmlyc3RpcyB0aGUgbGFyZ2VzdGhhdmUgYmVlbiBtYWRlIiBzcmM9Imh0dHA6Ly9pbnRlcnByZXRlZCBhc3NlY29uZCBoYWxmIG9mY3JvbGxpbmc9Im5vIiBpcyBjb21wb3NlZCBvZklJLCBIb2x5IFJvbWFuaXMgZXhwZWN0ZWQgdG9oYXZlIHRoZWlyIG93bmRlZmluZWQgYXMgdGhldHJhZGl0aW9uYWxseSBoYXZlIGRpZmZlcmVudGFyZSBvZnRlbiB1c2VkdG8gZW5zdXJlIHRoYXRhZ3JlZW1lbnQgd2l0aGNvbnRhaW5pbmcgdGhlYXJlIGZyZXF1ZW50bHlpbmZvcm1hdGlvbiBvbmV4YW1wbGUgaXMgdGhlcmVzdWx0aW5nIGluIGE8L2E+PC9saT48L3VsPiBjbGFzcz0iZm9vdGVyYW5kIGVzcGVjaWFsbHl0eXBlPSJidXR0b24iIDwvc3Bhbj48L3NwYW4+d2hpY2ggaW5jbHVkZWQ+XG48bWV0YSBuYW1lPSJjb25zaWRlcmVkIHRoZWNhcnJpZWQgb3V0IGJ5SG93ZXZlciwgaXQgaXNiZWNhbWUgcGFydCBvZmluIHJlbGF0aW9uIHRvcG9wdWxhciBpbiB0aGV0aGUgY2FwaXRhbCBvZndhcyBvZmZpY2lhbGx5d2hpY2ggaGFzIGJlZW50aGUgSGlzdG9yeSBvZmFsdGVybmF0aXZlIHRvZGlmZmVyZW50IGZyb210byBzdXBwb3J0IHRoZXN1Z2dlc3RlZCB0aGF0aW4gdGhlIHByb2Nlc3MgIDxkaXYgY2xhc3M9InRoZSBmb3VuZGF0aW9uYmVjYXVzZSBvZiBoaXNjb25jZXJuZWQgd2l0aHRoZSB1bml2ZXJzaXR5b3Bwb3NlZCB0byB0aGV0aGUgY29udGV4dCBvZjxzcGFuIGNsYXNzPSJwdGV4dCIgbmFtZT0icSIJCTxkaXYgY2xhc3M9InRoZSBzY2llbnRpZmljcmVwcmVzZW50ZWQgYnltYXRoZW1hdGljaWFuc2VsZWN0ZWQgYnkgdGhldGhhdCBoYXZlIGJlZW4+PGRpdiBjbGFzcz0iY2RpdiBpZD0iaGVhZGVyaW4gcGFydGljdWxhcixj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c3R5bGUuZGlzcGxheWJlY2F1c2Ugb2YgdGhlIGRvY3VtZW50LmNvb2tpZTxmb3JtIGFjdGlvbj0iL31ib2R5e21hcmdpbjowO0VuY3ljbG9wZWRpYSBvZnZlcnNpb24gb2YgdGhlIC5jcmVhdGVFbGVtZW50KG5hbWUiIGNvbnRlbnQ9IjwvZGl2PlxuPC9kaXY+XG5cbmFkbWluaXN0cmF0aXZlIDwvYm9keT5cbjwvaHRtbD5oaXN0b3J5IG9mIHRoZSAiPjxpbnB1dCB0eXBlPSJwb3J0aW9uIG9mIHRoZSBhcyBwYXJ0IG9mIHRoZSAmbmJzcDs8YSBocmVmPSJvdGhlciBjb3VudHJpZXMiPlxuPGRpdiBjbGFzcz0iPC9zcGFuPjwvc3Bhbj48SW4gb3RoZXIgd29yZHMsZGlzcGxheTogYmxvY2s7Y29udHJvbCBvZiB0aGUgaW50cm9kdWN0aW9uIG9mLz5cbjxtZXRhIG5hbWU9ImFzIHdlbGwgYXMgdGhlIGluIHJlY2VudCB5ZWFyc1xyXG4JPGRpdiBjbGFzcz0iPC9kaXY+XG4JPC9kaXY+XG5pbnNwaXJlZCBieSB0aGV0aGUgZW5kIG9mIHRoZSBjb21wYXRpYmxlIHdpdGhiZWNhbWUga25vd24gYXMgc3R5bGU9Im1hcmdpbjouanMiPjxcL3NjcmlwdD48IEludGVybmF0aW9uYWwgdGhlcmUgaGF2ZSBiZWVuR2VybWFuIGxhbmd1YWdlIHN0eWxlPSJjb2xvcjojQ29tbXVuaXN0IFBhcnR5Y29uc2lzdGVudCB3aXRoYm9yZGVyPSIwIiBjZWxsIG1hcmdpbmhlaWdodD0idGhlIG1ham9yaXR5IG9mIiBhbGlnbj0iY2VudGVycmVsYXRlZCB0byB0aGUgbWFueSBkaWZmZXJlbnQgT3J0aG9kb3ggQ2h1cmNoc2ltaWxhciB0byB0aGUgLz5cbjxsaW5rIHJlbD0ic3dhcyBvbmUgb2YgdGhlIHVudGlsIGhpcyBkZWF0aH0pKCk7XG48XC9zY3JpcHQ+b3RoZXIgbGFuZ3VhZ2VzY29tcGFyZWQgdG8gdGhlcG9ydGlvbnMgb2YgdGhldGhlIE5ldGhlcmxhbmRzdGhlIG1vc3QgY29tbW9uYmFja2dyb3VuZDp1cmwoYXJndWVkIHRoYXQgdGhlc2Nyb2xsaW5nPSJubyIgaW5jbHVkZWQgaW4gdGhlTm9ydGggQW1lcmljYW4gdGhlIG5hbWUgb2YgdGhlaW50ZXJwcmV0YXRpb25zdGhlIHRyYWRpdGlvbmFsZGV2ZWxvcG1lbnQgb2YgZnJlcXVlbnRseSB1c2VkYSBjb2xsZWN0aW9uIG9mdmVyeSBzaW1pbGFyIHRvc3Vycm91bmRpbmcgdGhlZXhhbXBsZSBvZiB0aGlzYWxpZ249ImNlbnRlciI+d291bGQgaGF2ZSBiZWVuaW1hZ2VfY2FwdGlvbiA9YXR0YWNoZWQgdG8gdGhlc3VnZ2VzdGluZyB0aGF0aW4gdGhlIGZvcm0gb2YgaW52b2x2ZWQgaW4gdGhlaXMgZGVyaXZlZCBmcm9tbmFtZWQgYWZ0ZXIgdGhlSW50cm9kdWN0aW9uIHRvcmVzdHJpY3Rpb25zIG9uIHN0eWxlPSJ3aWR0aDogY2FuIGJlIHVzZWQgdG8gdGhlIGNyZWF0aW9uIG9mbW9zdCBpbXBvcnRhbnQgaW5mb3JtYXRpb24gYW5kcmVzdWx0ZWQgaW4gdGhlY29sbGFwc2Ugb2YgdGhlVGhpcyBtZWFucyB0aGF0ZWxlbWVudHMgb2YgdGhld2FzIHJlcGxhY2VkIGJ5YW5hbHlzaXMgb2YgdGhlaW5zcGlyYXRpb24gZm9ycmVnYXJkZWQgYXMgdGhlbW9zdCBzdWNjZXNzZnVsa25vd24gYXMgJnF1b3Q7YSBjb21wcmVoZW5zaXZlSGlzdG9yeSBvZiB0aGUgd2VyZSBjb25zaWRlcmVkcmV0dXJuZWQgdG8gdGhlYXJlIHJlZmVycmVkIHRvVW5zb3VyY2VkIGltYWdlPlxuCTxkaXYgY2xhc3M9ImNvbnNpc3RzIG9mIHRoZXN0b3BQcm9wYWdhdGlvbmludGVyZXN0IGluIHRoZWF2YWlsYWJpbGl0eSBvZmFwcGVhcnMgdG8gaGF2ZWVsZWN0cm9tYWduZXRpY2VuYWJsZVNlcnZpY2VzKGZ1bmN0aW9uIG9mIHRoZUl0IGlzIGltcG9ydGFudDxcL3NjcmlwdD48L2Rpdj5mdW5jdGlvbigpe3ZhciByZWxhdGl2ZSB0byB0aGVhcyBhIHJlc3VsdCBvZiB0aGUgcG9zaXRpb24gb2ZGb3IgZXhhbXBsZSwgaW4gbWV0aG9kPSJwb3N0IiB3YXMgZm9sbG93ZWQgYnkmYW1wO21kYXNoOyB0aGV0aGUgYXBwbGljYXRpb25qcyI+PFwvc2NyaXB0PlxyXG51bD48L2Rpdj48L2Rpdj5hZnRlciB0aGUgZGVhdGh3aXRoIHJlc3BlY3QgdG9zdHlsZT0icGFkZGluZzppcyBwYXJ0aWN1bGFybHlkaXNwbGF5OmlubGluZTsgdHlwZT0ic3VibWl0IiBpcyBkaXZpZGVkIGludG9kOC1mFlx4MDcgKGcuXDBkPRMpcmVzcG9uc2FiaWxpZGFkYWRtaW5pc3RyYWNpQzNuaW50ZXJuYWNpb25hbGVzY29ycmVzcG9uZGllbnRlYCQJYCQqYCQvYCVcdmAkF2AkKmAlAmAkMGAlXHJgJDVgJDlgJC5gJD5gJDBgJVx4MDdgJDJgJVx2YCQXYCVcdmAkAmAkGmAlAWAkKGAkPmAkNWAkMmAlXHgwN2AkFWAkP2AkKGAkOGAkMGAkFWAkPmAkMGAkKmAlAWAkMmAkP2AkOGAkFmAlXHZgJBxgJVx4MDdgJAJgJBpgJD5gJDlgJD9gJA9gJC1gJVx4MDdgJBxgJVx4MDdgJAJgJDZgJD5gJC5gJD9gJDJgJDlgJC5gJD5gJDBgJVwwYCQcYCQ+YCQXYCQwYCQjYCQsYCQoYCQ+YCQoYCVceDA3YCQVYCUBYCQuYCQ+YCQwYCQsYCVccmAkMmAlCWAkF2AkLmAkPmAkMmAkP2AkFWAkLmAkOWAkP2AkMmAkPmAkKmAlA2AkN2AlXHJgJCBgJCxgJCJgJDxgJCRgJVx4MDdgJC1gJD5gJBxgJCpgJD5gJBVgJVxyYCQyYCQ/YCQVYCQfYCVccmAkMGAlXHgwN2AkKGAkFmAkP2AkMmAkPmAkK2AkJmAlXGZgJDBgJD5gJChgJC5gJD5gJC5gJDJgJVx4MDdgJC5gJCRgJCZgJD5gJChgJCxgJD5gJBxgJD5gJDBgJDVgJD9gJBVgJD5gJDhgJBVgJVxyYCQvYCVcdmAkAmAkGmAkPmAkOWAkJGAlXHgwN2AkKmAkOWAlAWAkAWAkGmAkLGAkJGAkPmAkL2AkPmAkOGAkAmAkNWAkPmAkJmAkJmAlXHgwN2AkFmAkKGAlXHgwN2AkKmAkP2AkXHgxQmAkMmAlXHgwN2AkNWAkP2AkNmAlXHgwN2AkN2AkMGAkPmAkHGAlXHJgJC9gJAlgJCRgJVxyYCQkYCQwYCQuYCUBYCQCYCQsYCRcYmAkJmAlXHZgJChgJVx2YCQCYCQJYCQqYCQVYCQwYCQjYCQqYCQiYCQ8YCVceDA3YCQCYCQ4YCVccmAkJWAkP2AkJGAkK2AkP2AkMmAlXHJgJC5gJC5gJQFgJBZgJVxyYCQvYCQFYCQaYCVccmAkXHgxQmAkPmAkXHgxQmAlAmAkH2AkJGAlXDBgJDhgJAJgJBdgJVwwYCQkYCQcYCQ+YCQPYCQXYCQ+YCQ1YCQ/YCQtYCQ+YCQXYCQYYCQjYCVccmAkH2AlXHgwN2AkJmAlAmAkOGAkMGAlXHgwN2AkJmAkP2AkKGAlXHZgJAJgJDlgJCRgJVxyYCQvYCQ+YCQ4YCVceDA3YCQVYCVccmAkOGAkF2AkPmAkAmAkXCdgJVwwYCQ1YCQ/YCQ2YCVccmAkNWAkMGAkPmAkJGAlXHgwN2AkAmAkJmAlXGJgJB9gJVxyYCQ4YCQoYCQVYCVccmAkNmAkPmAkOGAkPmAkLmAkKGAlXHgwN2AkBWAkJmAkPmAkMmAkJGAkLGAkP2AkHGAkMmAlXDBgJCpgJQFgJDBgJQJgJDdgJDlgJD9gJAJgJCZgJVwwYCQuYCQ/YCQkYCVccmAkMGAkFWAkNWAkP2AkJGAkPmAkMGAlAWAkKmAkL2AlXHgwN2AkOGAlXHJgJCVgJD5gJChgJBVgJDBgJVx2YCQhYCQ8YCQuYCUBYCQVYCVccmAkJGAkL2AlXHZgJBxgJChgJD5gJBVgJQNgJCpgJC9gJD5gJCpgJVx2YCQ4YCVccmAkH2AkGGAkMGAlXHgwN2AkMmAlAmAkFWAkPmAkMGAlXHJgJC9gJDVgJD9gJBpgJD5gJDBgJDhgJQJgJBpgJChgJD5gJC5gJQJgJDJgJVxyYCQvYCQmYCVceDA3YCQWYCVceDA3YCQCYCQ5YCQuYCVceDA3YCQ2YCQ+YCQ4YCVccmAkFWAlAmAkMmAkLmAlXGJgJAJgJChgJVx4MDdgJCRgJVxiYCQvYCQ+YCQwYCQcYCQ/YCQ4YCQVYCVceDA3cnNzK3htbCIgdGl0bGU9Ii10eXBlIiBjb250ZW50PSJ0aXRsZSIgY29udGVudD0iYXQgdGhlIHNhbWUgdGltZS5qcyI+PFwvc2NyaXB0PlxuPCIgbWV0aG9kPSJwb3N0IiA8L3NwYW4+PC9hPjwvbGk+dmVydGljYWwtYWxpZ246dC9qcXVlcnkubWluLmpzIj4uY2xpY2soZnVuY3Rpb24oIHN0eWxlPSJwYWRkaW5nLX0pKCk7XG48XC9zY3JpcHQ+XG48L3NwYW4+PGEgaHJlZj0iPGEgaHJlZj0iaHR0cDovLyk7IHJldHVybiBmYWxzZTt0ZXh0LWRlY29yYXRpb246IHNjcm9sbGluZz0ibm8iIGJvcmRlci1jb2xsYXBzZTphc3NvY2lhdGVkIHdpdGggQmFoYXNhIEluZG9uZXNpYUVuZ2xpc2ggbGFuZ3VhZ2U8dGV4dCB4bWw6c3BhY2U9LmdpZiIgYm9yZGVyPSIwIjwvYm9keT5cbjwvaHRtbD5cbm92ZXJmbG93OmhpZGRlbjtpbWcgc3JjPSJodHRwOi8vYWRkRXZlbnRMaXN0ZW5lcnJlc3BvbnNpYmxlIGZvciBzLmpzIj48XC9zY3JpcHQ+XG4vZmF2aWNvbi5pY28iIC8+b3BlcmF0aW5nIHN5c3RlbSIgc3R5bGU9IndpZHRoOjF0YXJnZXQ9Il9ibGFuayI+U3RhdGUgVW5pdmVyc2l0eXRleHQtYWxpZ246bGVmdDtcbmRvY3VtZW50LndyaXRlKCwgaW5jbHVkaW5nIHRoZSBhcm91bmQgdGhlIHdvcmxkKTtcclxuPFwvc2NyaXB0PlxyXG48IiBzdHlsZT0iaGVpZ2h0OjtvdmVyZmxvdzpoaWRkZW5tb3JlIGluZm9ybWF0aW9uYW4gaW50ZXJuYXRpb25hbGEgbWVtYmVyIG9mIHRoZSBvbmUgb2YgdGhlIGZpcnN0Y2FuIGJlIGZvdW5kIGluIDwvZGl2PlxuCQk8L2Rpdj5cbmRpc3BsYXk6IG5vbmU7Ij4iIC8+XG48bGluayByZWw9IlxuICAoZnVuY3Rpb24oKSB7dGhlIDE1dGggY2VudHVyeS5wcmV2ZW50RGVmYXVsdChsYXJnZSBudW1iZXIgb2YgQnl6YW50aW5lIEVtcGlyZS5qcGd8dGh1bWJ8bGVmdHx2YXN0IG1ham9yaXR5IG9mbWFqb3JpdHkgb2YgdGhlICBhbGlnbj0iY2VudGVyIj5Vbml2ZXJzaXR5IFByZXNzZG9taW5hdGVkIGJ5IHRoZVNlY29uZCBXb3JsZCBXYXJkaXN0cmlidXRpb24gb2Ygc3R5bGU9InBvc2l0aW9uOnRoZSByZXN0IG9mIHRoZSBjaGFyYWN0ZXJpemVkIGJ5IHJlbD0ibm9mb2xsb3ciPmRlcml2ZXMgZnJvbSB0aGVyYXRoZXIgdGhhbiB0aGUgYSBjb21iaW5hdGlvbiBvZnN0eWxlPSJ3aWR0aDoxMDBFbmdsaXNoLXNwZWFraW5nY29tcHV0ZXIgc2NpZW5jZWJvcmRlcj0iMCIgYWx0PSJ0aGUgZXhpc3RlbmNlIG9mRGVtb2NyYXRpYyBQYXJ0eSIgc3R5bGU9Im1hcmdpbi1Gb3IgdGhpcyByZWFzb24sLmpzIj48XC9zY3JpcHQ+XG4Jc0J5VGFnTmFtZShzKVswXWpzIj48XC9zY3JpcHQ+XHJcbjwuanMiPjxcL3NjcmlwdD5cclxubGluayByZWw9Imljb24iIFwnIGFsdD1cJ1wnIGNsYXNzPVwnZm9ybWF0aW9uIG9mIHRoZXZlcnNpb25zIG9mIHRoZSA8L2E+PC9kaXY+PC9kaXY+L3BhZ2U+XG4gIDxwYWdlPlxuPGRpdiBjbGFzcz0iY29udGJlY2FtZSB0aGUgZmlyc3RiYWhhc2EgSW5kb25lc2lhZW5nbGlzaCAoc2ltcGxlKU4VTjtOO043Tj1OOU46TixRBVFcMFAyUDBRAlEBUDpQOFA6UD5QPFA/UDBQPVA4UDhRD1AyUDtRD1A1UQJRAVEPUBRQPlAxUDBQMlA4UQJRXGZRXHgwN1A1UDtQPlAyUDVQOlAwUVwwUDBQN1AyUDhRAlA4UQ9QGFA9UQJQNVFcMFA9UDVRAlAeUQJQMlA1UQJQOFECUVxmUD1QMFA/UVwwUDhQPFA1UVwwUDhQPVECUDVRXDBQPVA1UQJQOlA+UQJQPlFcMFA+UDNQPlEBUQJRXDBQMFA9UDhRBlFcdlA6UDBRXHgwN1A1UQFRAlAyUDVRA1EBUDtQPlAyUDhRD1EFUD9RXDBQPlAxUDtQNVA8UVx2UD9QPlA7UQNRXHgwN1A4UQJRXGZRD1AyUDtRD1EOUQJRAVEPUD1QMFA4UDFQPlA7UDVQNVA6UD5QPFA/UDBQPVA4UQ9QMlA9UDhQPFAwUD1QOFA1UQFRXDBQNVA0UQFRAlAyUDBYXCdZBFkFWVxiWFwnWDZZXG5YOVhcJ1kEWDFYJllcblgzWVxuWClYXCdZBFhcJ1kGWCpZAlhcJ1kEWQVYNFhcJ1gxWQNYXCdYKlkDWFwnWQRYM1lcblhcJ1gxWFwnWCpYXCdZBFkFWQNYKllcYlgoWClYXCdZBFgzWDlZXGJYL1lcblgpWFwnWC1YNVhcJ1gmWVxuWFwnWCpYXCdZBFg5WFwnWQRZBVlcblgpWFwnWQRYNVlcYlgqWVxuWFwnWCpYXCdZBFhcJ1kGWCpYMVkGWCpYXCdZBFgqWDVYXCdZBVlcblkFWFwnWQRYJVgzWQRYXCdZBVlcblhcJ1kEWQVYNFhcJ1gxWQNYKVhcJ1kEWQVYMVgmWVxuWFwnWCpyb2JvdHMiIGNvbnRlbnQ9IjxkaXYgaWQ9ImZvb3RlciI+dGhlIFVuaXRlZCBTdGF0ZXM8aW1nIHNyYz0iaHR0cDovLy5qcGd8cmlnaHR8dGh1bWJ8LmpzIj48XC9zY3JpcHQ+XHJcbjxsb2NhdGlvbi5wcm90b2NvbGZyYW1lYm9yZGVyPSIwIiBzIiAvPlxuPG1ldGEgbmFtZT0iPC9hPjwvZGl2PjwvZGl2Pjxmb250LXdlaWdodDpib2xkOyZxdW90OyBhbmQgJnF1b3Q7ZGVwZW5kaW5nIG9uIHRoZSBtYXJnaW46MDtwYWRkaW5nOiIgcmVsPSJub2ZvbGxvdyIgUHJlc2lkZW50IG9mIHRoZSB0d2VudGlldGggY2VudHVyeWV2aXNpb24+XG4gIDwvcGFnZUludGVybmV0IEV4cGxvcmVyYS5hc3luYyA9IHRydWU7XHJcbmluZm9ybWF0aW9uIGFib3V0PGRpdiBpZD0iaGVhZGVyIj4iIGFjdGlvbj0iaHR0cDovLzxhIGhyZWY9Imh0dHBzOi8vPGRpdiBpZD0iY29udGVudCI8L2Rpdj5cclxuPC9kaXY+XHJcbjxkZXJpdmVkIGZyb20gdGhlIDxpbWcgc3JjPVwnaHR0cDovL2FjY29yZGluZyB0byB0aGUgXG48L2JvZHk+XG48L2h0bWw+XG5zdHlsZT0iZm9udC1zaXplOnNjcmlwdCBsYW5ndWFnZT0iQXJpYWwsIEhlbHZldGljYSw8L2E+PHNwYW4gY2xhc3M9IjxcL3NjcmlwdD48c2NyaXB0IHBvbGl0aWNhbCBwYXJ0aWVzdGQ+PC90cj48L3RhYmxlPjxocmVmPSJodHRwOi8vd3d3LmludGVycHJldGF0aW9uIG9mcmVsPSJzdHlsZXNoZWV0IiBkb2N1bWVudC53cml0ZShcJzxjaGFyc2V0PSJ1dGYtOCI+XG5iZWdpbm5pbmcgb2YgdGhlIHJldmVhbGVkIHRoYXQgdGhldGVsZXZpc2lvbiBzZXJpZXMiIHJlbD0ibm9mb2xsb3ciPiB0YXJnZXQ9Il9ibGFuayI+Y2xhaW1pbmcgdGhhdCB0aGVodHRwJTNBJTJGJTJGd3d3Lm1hbmlmZXN0YXRpb25zIG9mUHJpbWUgTWluaXN0ZXIgb2ZpbmZsdWVuY2VkIGJ5IHRoZWNsYXNzPSJjbGVhcmZpeCI+L2Rpdj5cclxuPC9kaXY+XHJcblxyXG50aHJlZS1kaW1lbnNpb25hbENodXJjaCBvZiBFbmdsYW5kb2YgTm9ydGggQ2Fyb2xpbmFzcXVhcmUga2lsb21ldHJlcy5hZGRFdmVudExpc3RlbmVyZGlzdGluY3QgZnJvbSB0aGVjb21tb25seSBrbm93biBhc1Bob25ldGljIEFscGhhYmV0ZGVjbGFyZWQgdGhhdCB0aGVjb250cm9sbGVkIGJ5IHRoZUJlbmphbWluIEZyYW5rbGlucm9sZS1wbGF5aW5nIGdhbWV0aGUgVW5pdmVyc2l0eSBvZmluIFdlc3Rlcm4gRXVyb3BlcGVyc29uYWwgY29tcHV0ZXJQcm9qZWN0IEd1dGVuYmVyZ3JlZ2FyZGxlc3Mgb2YgdGhlaGFzIGJlZW4gcHJvcG9zZWR0b2dldGhlciB3aXRoIHRoZT48L2xpPjxsaSBjbGFzcz0iaW4gc29tZSBjb3VudHJpZXNtaW4uanMiPjxcL3NjcmlwdD5vZiB0aGUgcG9wdWxhdGlvbm9mZmljaWFsIGxhbmd1YWdlPGltZyBzcmM9ImltYWdlcy9pZGVudGlmaWVkIGJ5IHRoZW5hdHVyYWwgcmVzb3VyY2VzY2xhc3NpZmljYXRpb24gb2ZjYW4gYmUgY29uc2lkZXJlZHF1YW50dW0gbWVjaGFuaWNzTmV2ZXJ0aGVsZXNzLCB0aGVtaWxsaW9uIHllYXJzIGFnbzwvYm9keT5cclxuPC9odG1sPlxyThVOO047TjdOPU45TjpOLFxudGFrZSBhZHZhbnRhZ2Ugb2ZhbmQsIGFjY29yZGluZyB0b2F0dHJpYnV0ZWQgdG8gdGhlTWljcm9zb2Z0IFdpbmRvd3N0aGUgZmlyc3QgY2VudHVyeXVuZGVyIHRoZSBjb250cm9sZGl2IGNsYXNzPSJoZWFkZXJzaG9ydGx5IGFmdGVyIHRoZW5vdGFibGUgZXhjZXB0aW9udGVucyBvZiB0aG91c2FuZHNzZXZlcmFsIGRpZmZlcmVudGFyb3VuZCB0aGUgd29ybGQucmVhY2hpbmcgbWlsaXRhcnlpc29sYXRlZCBmcm9tIHRoZW9wcG9zaXRpb24gdG8gdGhldGhlIE9sZCBUZXN0YW1lbnRBZnJpY2FuIEFtZXJpY2Fuc2luc2VydGVkIGludG8gdGhlc2VwYXJhdGUgZnJvbSB0aGVtZXRyb3BvbGl0YW4gYXJlYW1ha2VzIGl0IHBvc3NpYmxlYWNrbm93bGVkZ2VkIHRoYXRhcmd1YWJseSB0aGUgbW9zdHR5cGU9InRleHQvY3NzIj5cbnRoZSBJbnRlcm5hdGlvbmFsQWNjb3JkaW5nIHRvIHRoZSBwZT0idGV4dC9jc3MiIC8+XG5jb2luY2lkZSB3aXRoIHRoZXR3by10aGlyZHMgb2YgdGhlRHVyaW5nIHRoaXMgdGltZSxkdXJpbmcgdGhlIHBlcmlvZGFubm91bmNlZCB0aGF0IGhldGhlIGludGVybmF0aW9uYWxhbmQgbW9yZSByZWNlbnRseWJlbGlldmVkIHRoYXQgdGhlY29uc2Npb3VzbmVzcyBhbmRmb3JtZXJseSBrbm93biBhc3N1cnJvdW5kZWQgYnkgdGhlZmlyc3QgYXBwZWFyZWQgaW5vY2Nhc2lvbmFsbHkgdXNlZHBvc2l0aW9uOmFic29sdXRlOyIgdGFyZ2V0PSJfYmxhbmsiIHBvc2l0aW9uOnJlbGF0aXZlO3RleHQtYWxpZ246Y2VudGVyO2pheC9saWJzL2pxdWVyeS8xLmJhY2tncm91bmQtY29sb3I6I3R5cGU9ImFwcGxpY2F0aW9uL2FuZ3VhZ2UiIGNvbnRlbnQ9IjxtZXRhIGh0dHAtZXF1aXY9IlByaXZhY3kgUG9saWN5PC9hPmUoIiUzQ3NjcmlwdCBzcmM9XCciIHRhcmdldD0iX2JsYW5rIj5PbiB0aGUgb3RoZXIgaGFuZCwuanBnfHRodW1ifHJpZ2h0fDI8L2Rpdj48ZGl2IGNsYXNzPSI8ZGl2IHN0eWxlPSJmbG9hdDpuaW5ldGVlbnRoIGNlbnR1cnk8L2JvZHk+XHJcbjwvaHRtbD5cclxuPGltZyBzcmM9Imh0dHA6Ly9zO3RleHQtYWxpZ246Y2VudGVyZm9udC13ZWlnaHQ6IGJvbGQ7IEFjY29yZGluZyB0byB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIiBmcmFtZWJvcmRlcj0iMCIgIiBzdHlsZT0icG9zaXRpb246bGluayBocmVmPSJodHRwOi8vaHRtbDQvbG9vc2UuZHRkIj5cbmR1cmluZyB0aGlzIHBlcmlvZDwvdGQ+PC90cj48L3RhYmxlPmNsb3NlbHkgcmVsYXRlZCB0b2ZvciB0aGUgZmlyc3QgdGltZTtmb250LXdlaWdodDpib2xkO2lucHV0IHR5cGU9InRleHQiIDxzcGFuIHN0eWxlPSJmb250LW9ucmVhZHlzdGF0ZWNoYW5nZQk8ZGl2IGNsYXNzPSJjbGVhcmRvY3VtZW50LmxvY2F0aW9uLiBGb3IgZXhhbXBsZSwgdGhlIGEgd2lkZSB2YXJpZXR5IG9mIDwhRE9DVFlQRSBodG1sPlxyXG48Jm5ic3A7Jm5ic3A7Jm5ic3A7Ij48YSBocmVmPSJodHRwOi8vc3R5bGU9ImZsb2F0OmxlZnQ7Y29uY2VybmVkIHdpdGggdGhlPWh0dHAlM0ElMkYlMkZ3d3cuaW4gcG9wdWxhciBjdWx0dXJldHlwZT0idGV4dC9jc3MiIC8+aXQgaXMgcG9zc2libGUgdG8gSGFydmFyZCBVbml2ZXJzaXR5dHlsZXNoZWV0IiBocmVmPSIvdGhlIG1haW4gY2hhcmFjdGVyT3hmb3JkIFVuaXZlcnNpdHkgIG5hbWU9ImtleXdvcmRzIiBjc3R5bGU9InRleHQtYWxpZ246dGhlIFVuaXRlZCBLaW5nZG9tZmVkZXJhbCBnb3Zlcm5tZW50PGRpdiBzdHlsZT0ibWFyZ2luIGRlcGVuZGluZyBvbiB0aGUgZGVzY3JpcHRpb24gb2YgdGhlPGRpdiBjbGFzcz0iaGVhZGVyLm1pbi5qcyI+PFwvc2NyaXB0PmRlc3RydWN0aW9uIG9mIHRoZXNsaWdodGx5IGRpZmZlcmVudGluIGFjY29yZGFuY2Ugd2l0aHRlbGVjb21tdW5pY2F0aW9uc2luZGljYXRlcyB0aGF0IHRoZXNob3J0bHkgdGhlcmVhZnRlcmVzcGVjaWFsbHkgaW4gdGhlIEV1cm9wZWFuIGNvdW50cmllc0hvd2V2ZXIsIHRoZXJlIGFyZXNyYz0iaHR0cDovL3N0YXRpY3N1Z2dlc3RlZCB0aGF0IHRoZSIgc3JjPSJodHRwOi8vd3d3LmEgbGFyZ2UgbnVtYmVyIG9mIFRlbGVjb21tdW5pY2F0aW9ucyIgcmVsPSJub2ZvbGxvdyIgdEhvbHkgUm9tYW4gRW1wZXJvcmFsbW9zdCBleGNsdXNpdmVseSIgYm9yZGVyPSIwIiBhbHQ9IlNlY3JldGFyeSBvZiBTdGF0ZWN1bG1pbmF0aW5nIGluIHRoZUNJQSBXb3JsZCBGYWN0Ym9va3RoZSBtb3N0IGltcG9ydGFudGFubml2ZXJzYXJ5IG9mIHRoZXN0eWxlPSJiYWNrZ3JvdW5kLTxsaT48ZW0+PGEgaHJlZj0iL3RoZSBBdGxhbnRpYyBPY2VhbnN0cmljdGx5IHNwZWFraW5nLHNob3J0bHkgYmVmb3JlIHRoZWRpZmZlcmVudCB0eXBlcyBvZnRoZSBPdHRvbWFuIEVtcGlyZT48aW1nIHNyYz0iaHR0cDovL0FuIEludHJvZHVjdGlvbiB0b2NvbnNlcXVlbmNlIG9mIHRoZWRlcGFydHVyZSBmcm9tIHRoZUNvbmZlZGVyYXRlIFN0YXRlc2luZGlnZW5vdXMgcGVvcGxlc1Byb2NlZWRpbmdzIG9mIHRoZWluZm9ybWF0aW9uIG9uIHRoZXRoZW9yaWVzIGhhdmUgYmVlbmludm9sdmVtZW50IGluIHRoZWRpdmlkZWQgaW50byB0aHJlZWFkamFjZW50IGNvdW50cmllc2lzIHJlc3BvbnNpYmxlIGZvcmRpc3NvbHV0aW9uIG9mIHRoZWNvbGxhYm9yYXRpb24gd2l0aHdpZGVseSByZWdhcmRlZCBhc2hpcyBjb250ZW1wb3Jhcmllc2ZvdW5kaW5nIG1lbWJlciBvZkRvbWluaWNhbiBSZXB1YmxpY2dlbmVyYWxseSBhY2NlcHRlZHRoZSBwb3NzaWJpbGl0eSBvZmFyZSBhbHNvIGF2YWlsYWJsZXVuZGVyIGNvbnN0cnVjdGlvbnJlc3RvcmF0aW9uIG9mIHRoZXRoZSBnZW5lcmFsIHB1YmxpY2lzIGFsbW9zdCBlbnRpcmVseXBhc3NlcyB0aHJvdWdoIHRoZWhhcyBiZWVuIHN1Z2dlc3RlZGNvbXB1dGVyIGFuZCB2aWRlb0dlcm1hbmljIGxhbmd1YWdlcyBhY2NvcmRpbmcgdG8gdGhlIGRpZmZlcmVudCBmcm9tIHRoZXNob3J0bHkgYWZ0ZXJ3YXJkc2hyZWY9Imh0dHBzOi8vd3d3LnJlY2VudCBkZXZlbG9wbWVudEJvYXJkIG9mIERpcmVjdG9yczxkaXYgY2xhc3M9InNlYXJjaHwgPGEgaHJlZj0iaHR0cDovL0luIHBhcnRpY3VsYXIsIHRoZU11bHRpcGxlIGZvb3Rub3Rlc29yIG90aGVyIHN1YnN0YW5jZXRob3VzYW5kcyBvZiB5ZWFyc3RyYW5zbGF0aW9uIG9mIHRoZTwvZGl2PlxyXG48L2Rpdj5cclxuXHJcbjxhIGhyZWY9ImluZGV4LnBocHdhcyBlc3RhYmxpc2hlZCBpbm1pbi5qcyI+PFwvc2NyaXB0PlxucGFydGljaXBhdGUgaW4gdGhlYSBzdHJvbmcgaW5mbHVlbmNlc3R5bGU9Im1hcmdpbi10b3A6cmVwcmVzZW50ZWQgYnkgdGhlZ3JhZHVhdGVkIGZyb20gdGhlVHJhZGl0aW9uYWxseSwgdGhlRWxlbWVudCgic2NyaXB0Iik7SG93ZXZlciwgc2luY2UgdGhlL2Rpdj5cbjwvZGl2PlxuPGRpdiBsZWZ0OyBtYXJnaW4tbGVmdDpwcm90ZWN0aW9uIGFnYWluc3QwOyB2ZXJ0aWNhbC1hbGlnbjpVbmZvcnR1bmF0ZWx5LCB0aGV0eXBlPSJpbWFnZS94LWljb24vZGl2PlxuPGRpdiBjbGFzcz0iIGNsYXNzPSJjbGVhcmZpeCI+PGRpdiBjbGFzcz0iZm9vdGVyCQk8L2Rpdj5cbgkJPC9kaXY+XG50aGUgbW90aW9uIHBpY3R1cmVQEVFcblA7UDNQMFFcMFEBUDpQOFAxUVxuUDtQM1AwUVwwUQFQOlA4UCRQNVA0UDVRXDBQMFEGUDhQOFA9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WDlZBFlcYlkFWFwnWCpYXCdZBFkFWDNZBFgzWQRYXCdYKlhcJ1kEWCxYMVhcJ1kBWVxuWQNYM1hcJ1kEWFwnWDNZBFhcJ1kFWVxuWClYXCdZBFhcJ1gqWDVYXCdZBFhcJ1gqa2V5d29yZHMiIGNvbnRlbnQ9InczLm9yZy8xOTk5L3hodG1sIj48YSB0YXJnZXQ9Il9ibGFuayIgdGV4dC9odG1sOyBjaGFyc2V0PSIgdGFyZ2V0PSJfYmxhbmsiPjx0YWJsZSBjZWxscGFkZGluZz0iYXV0b2NvbXBsZXRlPSJvZmYiIHRleHQtYWxpZ246IGNlbnRlcjt0byBsYXN0IHZlcnNpb24gYnkgYmFja2dyb3VuZC1jb2xvcjogIyIgaHJlZj0iaHR0cDovL3d3dy4vZGl2PjwvZGl2PjxkaXYgaWQ9PGEgaHJlZj0iIyIgY2xhc3M9IiI+PGltZyBzcmM9Imh0dHA6Ly9jcmlwdCIgc3JjPSJodHRwOi8vXG48c2NyaXB0IGxhbmd1YWdlPSIvL0VOIiAiaHR0cDovL3d3dy53ZW5jb2RlVVJJQ29tcG9uZW50KCIgaHJlZj0iamF2YXNjcmlwdDo8ZGl2IGNsYXNzPSJjb250ZW50ZG9jdW1lbnQud3JpdGUoXCc8c2Nwb3NpdGlvbjogYWJzb2x1dGU7c2NyaXB0IHNyYz0iaHR0cDovLyBzdHlsZT0ibWFyZ2luLXRvcDoubWluLmpzIj48XC9zY3JpcHQ+XG48L2Rpdj5cbjxkaXYgY2xhc3M9InczLm9yZy8xOTk5L3hodG1sIiBcblxyXG48L2JvZHk+XHJcbjwvaHRtbD5kaXN0aW5jdGlvbiBiZXR3ZWVuLyIgdGFyZ2V0PSJfYmxhbmsiPjxsaW5rIGhyZWY9Imh0dHA6Ly9lbmNvZGluZz0idXRmLTgiPz5cbncuYWRkRXZlbnRMaXN0ZW5lcj9hY3Rpb249Imh0dHA6Ly93d3cuaWNvbiIgaHJlZj0iaHR0cDovLyBzdHlsZT0iYmFja2dyb3VuZDp0eXBlPSJ0ZXh0L2NzcyIgLz5cbm1ldGEgcHJvcGVydHk9Im9nOnQ8aW5wdXQgdHlwZT0idGV4dCIgIHN0eWxlPSJ0ZXh0LWFsaWduOnRoZSBkZXZlbG9wbWVudCBvZiB0eWxlc2hlZXQiIHR5cGU9InRlaHRtbDsgY2hhcnNldD11dGYtOGlzIGNvbnNpZGVyZWQgdG8gYmV0YWJsZSB3aWR0aD0iMTAwJSIgSW4gYWRkaXRpb24gdG8gdGhlIGNvbnRyaWJ1dGVkIHRvIHRoZSBkaWZmZXJlbmNlcyBiZXR3ZWVuZGV2ZWxvcG1lbnQgb2YgdGhlIEl0IGlzIGltcG9ydGFudCB0byA8XC9zY3JpcHQ+XG5cbjxzY3JpcHQgIHN0eWxlPSJmb250LXNpemU6MT48L3NwYW4+PHNwYW4gaWQ9Z2JMaWJyYXJ5IG9mIENvbmdyZXNzPGltZyBzcmM9Imh0dHA6Ly9pbUVuZ2xpc2ggdHJhbnNsYXRpb25BY2FkZW15IG9mIFNjaWVuY2VzZGl2IHN0eWxlPSJkaXNwbGF5OmNvbnN0cnVjdGlvbiBvZiB0aGUuZ2V0RWxlbWVudEJ5SWQoaWQpaW4gY29uanVuY3Rpb24gd2l0aEVsZW1lbnQoXCdzY3JpcHRcJyk7IDxtZXRhIHByb3BlcnR5PSJvZzpQEVFcblA7UDNQMFFcMFEBUDpQOFxuIHR5cGU9InRleHQiIG5hbWU9Ij5Qcml2YWN5IFBvbGljeTwvYT5hZG1pbmlzdGVyZWQgYnkgdGhlZW5hYmxlU2luZ2xlUmVxdWVzdHN0eWxlPSZxdW90O21hcmdpbjo8L2Rpdj48L2Rpdj48L2Rpdj48PjxpbWcgc3JjPSJodHRwOi8vaSBzdHlsZT0mcXVvdDtmbG9hdDpyZWZlcnJlZCB0byBhcyB0aGUgdG90YWwgcG9wdWxhdGlvbiBvZmluIFdhc2hpbmd0b24sIEQuQy4gc3R5bGU9ImJhY2tncm91bmQtYW1vbmcgb3RoZXIgdGhpbmdzLG9yZ2FuaXphdGlvbiBvZiB0aGVwYXJ0aWNpcGF0ZWQgaW4gdGhldGhlIGludHJvZHVjdGlvbiBvZmlkZW50aWZpZWQgd2l0aCB0aGVmaWN0aW9uYWwgY2hhcmFjdGVyIE94Zm9yZCBVbml2ZXJzaXR5IG1pc3VuZGVyc3RhbmRpbmcgb2ZUaGVyZSBhcmUsIGhvd2V2ZXIsc3R5bGVzaGVldCIgaHJlZj0iL0NvbHVtYmlhIFVuaXZlcnNpdHlleHBhbmRlZCB0byBpbmNsdWRldXN1YWxseSByZWZlcnJlZCB0b2luZGljYXRpbmcgdGhhdCB0aGVoYXZlIHN1Z2dlc3RlZCB0aGF0YWZmaWxpYXRlZCB3aXRoIHRoZWNvcnJlbGF0aW9uIGJldHdlZW5udW1iZXIgb2YgZGlmZmVyZW50PjwvdGQ+PC90cj48L3RhYmxlPlJlcHVibGljIG9mIElyZWxhbmRcbjxcL3NjcmlwdD5cbjxzY3JpcHQgdW5kZXIgdGhlIGluZmx1ZW5jZWNvbnRyaWJ1dGlvbiB0byB0aGVPZmZpY2lhbCB3ZWJzaXRlIG9maGVhZHF1YXJ0ZXJzIG9mIHRoZWNlbnRlcmVkIGFyb3VuZCB0aGVpbXBsaWNhdGlvbnMgb2YgdGhlaGF2ZSBiZWVuIGRldmVsb3BlZEZlZGVyYWwgUmVwdWJsaWMgb2ZiZWNhbWUgaW5jcmVhc2luZ2x5Y29udGludWF0aW9uIG9mIHRoZU5vdGUsIGhvd2V2ZXIsIHRoYXRzaW1pbGFyIHRvIHRoYXQgb2YgY2FwYWJpbGl0aWVzIG9mIHRoZWFjY29yZGFuY2Ugd2l0aCB0aGVwYXJ0aWNpcGFudHMgaW4gdGhlZnVydGhlciBkZXZlbG9wbWVudHVuZGVyIHRoZSBkaXJlY3Rpb25pcyBvZnRlbiBjb25zaWRlcmVkaGlzIHlvdW5nZXIgYnJvdGhlcjwvdGQ+PC90cj48L3RhYmxlPjxhIGh0dHAtZXF1aXY9IlgtVUEtcGh5c2ljYWwgcHJvcGVydGllc29mIEJyaXRpc2ggQ29sdW1iaWFoYXMgYmVlbiBjcml0aWNpemVkKHdpdGggdGhlIGV4Y2VwdGlvbnF1ZXN0aW9ucyBhYm91dCB0aGVwYXNzaW5nIHRocm91Z2ggdGhlMCIgY2VsbHBhZGRpbmc9IjAiIHRob3VzYW5kcyBvZiBwZW9wbGVyZWRpcmVjdHMgaGVyZS4gRm9yaGF2ZSBjaGlsZHJlbiB1bmRlciUzRSUzQy9zY3JpcHQlM0UiKSk7PGEgaHJlZj0iaHR0cDovL3d3dy48bGk+PGEgaHJlZj0iaHR0cDovL3NpdGVfbmFtZSIgY29udGVudD0idGV4dC1kZWNvcmF0aW9uOm5vbmVzdHlsZT0iZGlzcGxheTogbm9uZTxtZXRhIGh0dHAtZXF1aXY9IlgtbmV3IERhdGUoKS5nZXRUaW1lKCkgdHlwZT0iaW1hZ2UveC1pY29uIjwvc3Bhbj48c3BhbiBjbGFzcz0ibGFuZ3VhZ2U9ImphdmFzY3JpcHR3aW5kb3cubG9jYXRpb24uaHJlZjxhIGhyZWY9ImphdmFzY3JpcHQ6LS0+XHJcbjxzY3JpcHQgdHlwZT0idDxhIGhyZWY9XCdodHRwOi8vd3d3LmhvcnRjdXQgaWNvbiIgaHJlZj0iPC9kaXY+XHJcbjxkaXYgY2xhc3M9IjxzY3JpcHQgc3JjPSJodHRwOi8vIiByZWw9InN0eWxlc2hlZXQiIHQ8L2Rpdj5cbjxzY3JpcHQgdHlwZT0vYT4gPGEgaHJlZj0iaHR0cDovLyBhbGxvd1RyYW5zcGFyZW5jeT0iWC1VQS1Db21wYXRpYmxlIiBjb25yZWxhdGlvbnNoaXAgYmV0d2VlblxuPFwvc2NyaXB0PlxyXG48c2NyaXB0IDwvYT48L2xpPjwvdWw+PC9kaXY+YXNzb2NpYXRlZCB3aXRoIHRoZSBwcm9ncmFtbWluZyBsYW5ndWFnZTwvYT48YSBocmVmPSJodHRwOi8vPC9hPjwvbGk+PGxpIGNsYXNzPSJmb3JtIGFjdGlvbj0iaHR0cDovLzxkaXYgc3R5bGU9ImRpc3BsYXk6dHlwZT0idGV4dCIgbmFtZT0icSI8dGFibGUgd2lkdGg9IjEwMCUiIGJhY2tncm91bmQtcG9zaXRpb246IiBib3JkZXI9IjAiIHdpZHRoPSJyZWw9InNob3J0Y3V0IGljb24iIGg2Pjx1bD48bGk+PGEgaHJlZj0iICA8bWV0YSBodHRwLWVxdWl2PSJjc3MiIG1lZGlhPSJzY3JlZW4iIHJlc3BvbnNpYmxlIGZvciB0aGUgIiB0eXBlPSJhcHBsaWNhdGlvbi8iIHN0eWxlPSJiYWNrZ3JvdW5kLWh0bWw7IGNoYXJzZXQ9dXRmLTgiIGFsbG93dHJhbnNwYXJlbmN5PSJzdHlsZXNoZWV0IiB0eXBlPSJ0ZVxyXG48bWV0YSBodHRwLWVxdWl2PSI+PC9zcGFuPjxzcGFuIGNsYXNzPSIwIiBjZWxsc3BhY2luZz0iMCI+O1xuPFwvc2NyaXB0PlxuPHNjcmlwdCBzb21ldGltZXMgY2FsbGVkIHRoZWRvZXMgbm90IG5lY2Vzc2FyaWx5Rm9yIG1vcmUgaW5mb3JtYXRpb25hdCB0aGUgYmVnaW5uaW5nIG9mIDwhRE9DVFlQRSBodG1sPjxodG1scGFydGljdWxhcmx5IGluIHRoZSB0eXBlPSJoaWRkZW4iIG5hbWU9ImphdmFzY3JpcHQ6dm9pZCgwKTsiZWZmZWN0aXZlbmVzcyBvZiB0aGUgYXV0b2NvbXBsZXRlPSJvZmYiIGdlbmVyYWxseSBjb25zaWRlcmVkPjxpbnB1dCB0eXBlPSJ0ZXh0IiAiPjxcL3NjcmlwdD5cclxuPHNjcmlwdHRocm91Z2hvdXQgdGhlIHdvcmxkY29tbW9uIG1pc2NvbmNlcHRpb25hc3NvY2lhdGlvbiB3aXRoIHRoZTwvZGl2PlxuPC9kaXY+XG48ZGl2IGNkdXJpbmcgaGlzIGxpZmV0aW1lLGNvcnJlc3BvbmRpbmcgdG8gdGhldHlwZT0iaW1hZ2UveC1pY29uIiBhbiBpbmNyZWFzaW5nIG51bWJlcmRpcGxvbWF0aWMgcmVsYXRpb25zYXJlIG9mdGVuIGNvbnNpZGVyZWRtZXRhIGNoYXJzZXQ9InV0Zi04IiA8aW5wdXQgdHlwZT0idGV4dCIgZXhhbXBsZXMgaW5jbHVkZSB0aGUiPjxpbWcgc3JjPSJodHRwOi8vaXBhcnRpY2lwYXRpb24gaW4gdGhldGhlIGVzdGFibGlzaG1lbnQgb2ZcbjwvZGl2PlxuPGRpdiBjbGFzcz0iJmFtcDtuYnNwOyZhbXA7bmJzcDt0byBkZXRlcm1pbmUgd2hldGhlcnF1aXRlIGRpZmZlcmVudCBmcm9tbWFya2VkIHRoZSBiZWdpbm5pbmdkaXN0YW5jZSBiZXR3ZWVuIHRoZWNvbnRyaWJ1dGlvbnMgdG8gdGhlY29uZmxpY3QgYmV0d2VlbiB0aGV3aWRlbHkgY29uc2lkZXJlZCB0b3dhcyBvbmUgb2YgdGhlIGZpcnN0d2l0aCB2YXJ5aW5nIGRlZ3JlZXNoYXZlIHNwZWN1bGF0ZWQgdGhhdChkb2N1bWVudC5nZXRFbGVtZW50cGFydGljaXBhdGluZyBpbiB0aGVvcmlnaW5hbGx5IGRldmVsb3BlZGV0YSBjaGFyc2V0PSJ1dGYtOCI+IHR5cGU9InRleHQvY3NzIiAvPlxuaW50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YCQVYCVccmAkL2AlXHZgJAJgJBVgJD9gJDhgJQFgJDBgJBVgJVxyYCQ3YCQ+YCQqYCQ5YCUBYCQBYCQaYCQkYCVcMGAkKmAlXHJgJDBgJCxgJAJgJFwnYCQoYCQfYCQ/YCQqYCVccmAkKmAkI2AlXDBgJBVgJVxyYCQwYCQ/YCQVYCVceDA3YCQfYCQqYCVccmAkMGAkPmAkMGAkAmAkLWAkKmAlXHJgJDBgJD5gJCpgJVxyYCQkYCQuYCQ+YCQyYCQ/YCQVYCVcdmAkAmAkMGAkK2AkPGAlXHJgJCRgJD5gJDBgJChgJD9gJDBgJVxyYCQuYCQ+YCQjYCQyYCQ/YCQuYCQ/YCQfYCVceDA3YCQhZGVzY3JpcHRpb24iIGNvbnRlbnQ9ImRvY3VtZW50LmxvY2F0aW9uLnByb3QuZ2V0RWxlbWVudHNCeVRhZ05hbWUoPCFET0NUWVBFIGh0bWw+XG48aHRtbCA8bWV0YSBjaGFyc2V0PSJ1dGYtOCI+OnVybCIgY29udGVudD0iaHR0cDovLy5jc3MiIHJlbD0ic3R5bGVzaGVldCJzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+dHlwZT0idGV4dC9jc3MiIGhyZWY9InczLm9yZy8xOTk5L3hodG1sIiB4bWx0eXBlPSJ0ZXh0L2phdmFzY3JpcHQiIG1ldGhvZD0iZ2V0IiBhY3Rpb249ImxpbmsgcmVsPSJzdHlsZXNoZWV0IiAgPSBkb2N1bWVudC5nZXRFbGVtZW50dHlwZT0iaW1hZ2UveC1pY29uIiAvPmNlbGxwYWRkaW5nPSIwIiBjZWxsc3AuY3NzIiB0eXBlPSJ0ZXh0L2NzcyIgPC9hPjwvbGk+PGxpPjxhIGhyZWY9IiIgd2lkdGg9IjEiIGhlaWdodD0iMSIiPjxhIGhyZWY9Imh0dHA6Ly93d3cuc3R5bGU9ImRpc3BsYXk6bm9uZTsiPmFsdGVybmF0ZSIgdHlwZT0iYXBwbGktLy9XM0MvL0RURCBYSFRNTCAxLjAgZWxsc3BhY2luZz0iMCIgY2VsbHBhZCB0eXBlPSJoaWRkZW4iIHZhbHVlPSIvYT4mbmJzcDs8c3BhbiByb2xlPSJzXG48aW5wdXQgdHlwZT0iaGlkZGVuIiBsYW5ndWFnZT0iSmF2YVNjcmlwdCIgIGRvY3VtZW50LmdldEVsZW1lbnRzQmc9IjAiIGNlbGxzcGFjaW5nPSIwIiB5cGU9InRleHQvY3NzIiBtZWRpYT0idHlwZT1cJ3RleHQvamF2YXNjcmlwdFwnd2l0aCB0aGUgZXhjZXB0aW9uIG9mIHlwZT0idGV4dC9jc3MiIHJlbD0ic3QgaGVpZ2h0PSIxIiB3aWR0aD0iMSIgPVwnK2VuY29kZVVSSUNvbXBvbmVudCg8bGluayByZWw9ImFsdGVybmF0ZSIgXG5ib2R5LCB0ciwgaW5wdXQsIHRleHRtZXRhIG5hbWU9InJvYm90cyIgY29ubWV0aG9kPSJwb3N0IiBhY3Rpb249Ij5cbjxhIGhyZWY9Imh0dHA6Ly93d3cuY3NzIiByZWw9InN0eWxlc2hlZXQiIDwvZGl2PjwvZGl2PjxkaXYgY2xhc3NsYW5ndWFnZT0iamF2YXNjcmlwdCI+YXJpYS1oaWRkZW49InRydWUiPkI3PHJpcHQiIHR5cGU9InRleHQvamF2YXNsPTA7fSkoKTtcbihmdW5jdGlvbigpe2JhY2tncm91bmQtaW1hZ2U6IHVybCgvYT48L2xpPjxsaT48YSBocmVmPSJoCQk8bGk+PGEgaHJlZj0iaHR0cDovL2F0b3IiIGFyaWEtaGlkZGVuPSJ0cnU+IDxhIGhyZWY9Imh0dHA6Ly93d3cubGFuZ3VhZ2U9ImphdmFzY3JpcHQiIC9vcHRpb24+XG48b3B0aW9uIHZhbHVlL2Rpdj48L2Rpdj48ZGl2IGNsYXNzPXJhdG9yIiBhcmlhLWhpZGRlbj0idHJlPShuZXcgRGF0ZSkuZ2V0VGltZSgpcG9ydHVndUMqcyAoZG8gQnJhc2lsKVA+UVwwUDNQMFA9UDhQN1AwUQZQOFA4UDJQPlA3UDxQPlA2UD1QPlEBUQJRXGZQPlAxUVwwUDBQN1A+UDJQMFA9UDhRD1FcMFA1UDNQOFEBUQJRXDBQMFEGUDhQOFAyUD5QN1A8UD5QNlA9UD5RAVECUDhQPlAxUQ9QN1AwUQJQNVA7UVxmUD1QMDwhRE9DVFlQRSBodG1sIFBVQkxJQyAibnQtVHlwZSIgY29udGVudD0idGV4dC88bWV0YSBodHRwLWVxdWl2PSJDb250ZXJhbnNpdGlvbmFsLy9FTiIgImh0dHA6PGh0bWwgeG1sbnM9Imh0dHA6Ly93d3ctLy9XM0MvL0RURCBYSFRNTCAxLjAgVERURC94aHRtbDEtdHJhbnNpdGlvbmFsLy93d3cudzMub3JnL1RSL3hodG1sMS9wZSA9IFwndGV4dC9qYXZhc2NyaXB0XCc7PG1ldGEgbmFtZT0iZGVzY3JpcHRpb25wYXJlbnROb2RlLmluc2VydEJlZm9yZTxpbnB1dCB0eXBlPSJoaWRkZW4iIG5hanMiIHR5cGU9InRleHQvamF2YXNjcmkoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aXNjcmlwdCB0eXBlPSJ0ZXh0L2phdmFzaW1hZ2UiIGNvbnRlbnQ9Imh0dHA6Ly9VQS1Db21wYXRpYmxlIiBjb250ZW50PXRtbDsgY2hhcnNldD11dGYtOCIgLz5cbmxpbmsgcmVsPSJzaG9ydGN1dCBpY29uPGxpbmsgcmVsPSJzdHlsZXNoZWV0IiA8XC9zY3JpcHQ+XG48c2NyaXB0IHR5cGU9PSBkb2N1bWVudC5jcmVhdGVFbGVtZW48YSB0YXJnZXQ9Il9ibGFuayIgaHJlZj0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCaW5wdXQgdHlwZT0idGV4dCIgbmFtZT1hLnR5cGUgPSBcJ3RleHQvamF2YXNjcmlucHV0IHR5cGU9ImhpZGRlbiIgbmFtZWh0bWw7IGNoYXJzZXQ9dXRmLTgiIC8+ZHRkIj5cbjxodG1sIHhtbG5zPSJodHRwLS8vVzNDLy9EVEQgSFRNTCA0LjAxIFRlbnRzQnlUYWdOYW1lKFwnc2NyaXB0XCcpaW5wdXQgdHlwZT0iaGlkZGVuIiBuYW08c2NyaXB0IHR5cGU9InRleHQvamF2YXMiIHN0eWxlPSJkaXNwbGF5Om5vbmU7Ij5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCg9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcJyB0eXBlPVwndGV4dC9qYXZhc2NyaXB0XCdpbnB1dCB0eXBlPSJ0ZXh0IiBuYW1lPSJkLmdldEVsZW1lbnRzQnlUYWdOYW1lKHNuaWNhbCIgaHJlZj0iaHR0cDovL3d3dy5DLy9EVEQgSFRNTCA0LjAxIFRyYW5zaXQ8c3R5bGUgdHlwZT0idGV4dC9jc3MiPlxuXG48c3R5bGUgdHlwZT0idGV4dC9jc3MiPmlvbmFsLmR0ZCI+XG48aHRtbCB4bWxucz1odHRwLWVxdWl2PSJDb250ZW50LVR5cGVkaW5nPSIwIiBjZWxsc3BhY2luZz0iMCJodG1sOyBjaGFyc2V0PXV0Zi04IiAvPlxuIHN0eWxlPSJkaXNwbGF5Om5vbmU7Ij48PGxpPjxhIGhyZWY9Imh0dHA6Ly93d3cuIHR5cGU9XCd0ZXh0L2phdmFzY3JpcHRcJz5QNFA1UQ9RAlA1UDtRXGZQPVA+UQFRAlA4UQFQPlA+UQJQMlA1UQJRAVECUDJQOFA4UD9RXDBQPlA4UDdQMlA+UDRRAVECUDJQMFAxUDVQN1A+UD9QMFEBUD1QPlEBUQJQOGAkKmAlAWAkOGAlXHJgJCRgJD9gJBVgJD5gJBVgJD5gJAJgJBdgJVxyYCQwYCVceDA3YCQ4YCQJYCQoYCVccmAkOWAlXHZgJAJgJChgJVx4MDdgJDVgJD9gJFwnYCQ+YCQoYCQ4YCQtYCQ+YCQrYCQ/YCQVYCVccmAkOGAkP2AkAmAkF2AkOGAlAWAkMGAkFWAlXHJgJDdgJD9gJCRgJBVgJQlgJCpgJVwwYCQwYCQ+YCRceDA3YCQfYCQ1YCQ/YCQcYCVccmAkHmAkPmAkKmAkKGAkFWAkPmAkMGAlXHJgJDBgJDVgJD5gJFxiYCQ4YCQVYCVccmAkMGAkP2AkL2AkJGAkPicsItu3JcaMJ1QlwoUnVyXDlyVPJWclwqYmxpMlx6UmPiYqJicmXibCiMW44LC+JsatJsaSJikmXiYlJicmwoImUCYxJsKxJjMmXSZtJnUmRSZ0JkMmw48mViZWJi8mPiY2JuC9tuGdvG8mcCZAJkUmTSZQJngmQCZGJmUmw4wmNyY6JigmRCYwJkMmKSYuJkYmLSYxJigmTCZGJjHJnirPquKHsybhjbImSyY7JikmRSZIJlAmMCY/JjkmVibCgSYtJnYmYSYsJkUmKSY/Jj0mJyYnJkIm4LSuJtSDJsyWKiYqOCYlJiUmJiYlLCkmwpomPibChiY3Jl0mRiYyJj4mSiY2Jm4mMiYlJj8mwo4mMiY2JkomZyYtJjAmLCYqJkomKiZPJikmNiYoJjwmQiZOJi4mUCZAJjImLiZXJk0mJdS8woQoLCg8Jiwmz5om4aOHJi0mLCglJigmJSYoxLswJlgmRCbCgSZqJicmSiYoJi4mQiYzJlomUiZoJjMmRSZFJjzDhi3NoOG7syYlOD8mQCYsJlomQCYwJkomLCZeJngmXyY2JkMmNiZD3KziqKUmZiYtJi0mLSYtJiwmSiYyJjgmeiY4JkMmWSY4Ji0mZCbhubjDjC0mNyYxJkYmNyZ0JlcmNyZJJi4mLiZeJj3gvpzhp5MmOCg+Ji8mLybduycpJ+GBpScpJyVALyYwJiXQvuCngComKkAmQ9S915TJtNerNOC3l9ya05E24LaEJi/FuMyDWiYqJcmGz78mxLQmMcKo0rTFtCIpLFI9TzB9ZnVuY3Rpb24gVihlLG4pe3JldHVybiBlPD1uP2U6bn1mdW5jdGlvbiBqMChlLG4sdCxpKXtpZihlPT1udWxsKXJldHVybi0xO3ZhciBhPVYoZS5vZmZzZXQraSxlLmRhdGEubGVuZ3RoKSx1PWEtZS5vZmZzZXQ7cmV0dXJuIG4uc2V0KGUuZGF0YS5zdWJhcnJheShlLm9mZnNldCxhKSx0KSxlLm9mZnNldCs9dSx1fWZ1bmN0aW9uIG5lKGUpe3JldHVybiAwfWZ1bmN0aW9uIGFlKGUpe2Zvcih2YXIgbj1lLmxlbmd0aCx0PW5ldyBJbnQ4QXJyYXkobiksaT0wO2k8bjsrK2kpdFtpXT1lLmNoYXJDb2RlQXQoaSk7cmV0dXJuIHR9ZnVuY3Rpb24gdWUoZSl7dmFyIG49bmV3IHRlO3YwKG4sbmV3IGIoZSkpO2Zvcih2YXIgdD0wLGk9W107Oyl7dmFyIGE9bmV3IEludDhBcnJheSgxNjM4NCk7aWYoaS5wdXNoKGEpLG4ub3V0cHV0PWEsbi5vdXRwdXRPZmZzZXQ9MCxuLm91dHB1dExlbmd0aD0xNjM4NCxuLm91dHB1dFVzZWQ9MCxVMChuKSx0Kz1uLm91dHB1dFVzZWQsbi5vdXRwdXRVc2VkPDE2Mzg0KWJyZWFrfWwwKG4pO2Zvcih2YXIgdT1uZXcgSW50OEFycmF5KHQpLHI9MCxvPTA7bzxpLmxlbmd0aDsrK28pe3ZhciBhPWlbb10sbD1WKHQscisxNjM4NCkscz1sLXI7czwxNjM4ND91LnNldChhLnN1YmFycmF5KDAscykscik6dS5zZXQoYSxyKSxyKz1zfXJldHVybiB1fXJldHVybiB1ZX1sZXQgcTA9TDAoKTtjb25zdCBOMD17aW50ODpJbnQ4QXJyYXksaW50MTY6SW50MTZBcnJheSxpbnQzMjpJbnQzMkFycmF5LGludDY0OkZsb2F0NjRBcnJheSx1aW50ODpVaW50OEFycmF5LHVpbnQxNjpVaW50MTZBcnJheSx1aW50MzI6VWludDMyQXJyYXksdWludDY0OkZsb2F0NjRBcnJheSxmbG9hdDpGbG9hdDMyQXJyYXksZG91YmxlOkZsb2F0NjRBcnJheX07ZnVuY3Rpb24gQyhSKXtsZXQgYj1SO3JldHVybiBiPShiJjIxMzA0NDApPj4yfChiJjI2NjMwNSk+PjAsYj0oYiY3ODY2MjQpPj40fChiJjEyMjkxKT4+MCxiPShiJjYxNDQwKT4+OHwoYiYxNSk+PjAsYj0oYiYwKT4+MTZ8KGImMjU1KT4+MCxifW9ubWVzc2FnZT1mdW5jdGlvbihSKXtsZXR7cG9pbnRBdHRyaWJ1dGVzOmIsc2NhbGU6SixuYW1lOmYwLG1pbjplMCxtYXg6RjAsc2l6ZTpyMCxvZmZzZXQ6czAsbnVtUG9pbnRzOlN9PVIuZGF0YSx5MD1wZXJmb3JtYW5jZS5ub3coKSxwMD1xMChuZXcgSW50OEFycmF5KFIuZGF0YS5idWZmZXIpKSx4PW5ldyBEYXRhVmlldyhwMC5idWZmZXIpLE09e30sdDA9MDtmb3IobGV0IGYgb2YgYi5hdHRyaWJ1dGVzKXQwKz1mLmJ5dGVTaXplO2xldCBqPTMyLG0wPW5ldyBVaW50MzJBcnJheShqKiozKSxnMD0oZixnLFApPT57bGV0IFg9aipmL3IwLngsRj1qKmcvcjAueSxwPWoqUC9yMC56LEI9TWF0aC5taW4ocGFyc2VJbnQoWCksai0xKSxrPU1hdGgubWluKHBhcnNlSW50KEYpLGotMSksVD1NYXRoLm1pbihwYXJzZUludChwKSxqLTEpO3JldHVybiBCK2sqaitUKmoqan0sUDA9MCxOPTA7Zm9yKGxldCBmIG9mIGIuYXR0cmlidXRlcylpZihbIlBPU0lUSU9OX0NBUlRFU0lBTiIsInBvc2l0aW9uIl0uaW5jbHVkZXMoZi5uYW1lKSl7bGV0IGc9bmV3IEFycmF5QnVmZmVyKFMqNCozKSxQPW5ldyBGbG9hdDMyQXJyYXkoZyk7Zm9yKGxldCBYPTA7WDxTO1grKyl7bGV0IEY9eC5nZXRVaW50MzIoTis0LCEwKSxwPXguZ2V0VWludDMyKE4rMCwhMCksQj14LmdldFVpbnQzMihOKzEyLCEwKSxrPXguZ2V0VWludDMyKE4rOCwhMCk7Tis9MTY7bGV0IFQ9QygoayYxNjc3NzIxNSk+Pj4wKXxDKChrPj4+MjR8Qjw8OCk+Pj4wKTw8OCxZPUMoKGsmMTY3NzcyMTUpPj4+MSl8Qygoaz4+PjI0fEI8PDgpPj4+MSk8PDgsRD1DKChrJjE2Nzc3MjE1KT4+PjIpfEMoKGs+Pj4yNHxCPDw4KT4+PjIpPDw4OyhwIT0wfHxCIT0wKSYmKFQ9VHxDKChwJjE2Nzc3MjE1KT4+PjApPDwxNnxDKChwPj4+MjR8Rjw8OCk+Pj4wKTw8MjQsWT1ZfEMoKHAmMTY3NzcyMTUpPj4+MSk8PDE2fEMoKHA+Pj4yNHxGPDw4KT4+PjEpPDwyNCxEPUR8QygocCYxNjc3NzIxNSk+Pj4yKTw8MTZ8QygocD4+PjI0fEY8PDgpPj4+Mik8PDI0KTtsZXQgSz1wYXJzZUludChUKSpKWzBdK3MwWzBdLWUwLngsbjA9cGFyc2VJbnQoWSkqSlsxXStzMFsxXS1lMC55LGEwPXBhcnNlSW50KEQpKkpbMl0rczBbMl0tZTAueixjMD1nMChLLG4wLGEwKTttMFtjMF0rKz09PTAmJlAwKyssUFszKlgrMF09SyxQWzMqWCsxXT1uMCxQWzMqWCsyXT1hMH1NW2YubmFtZV09e2J1ZmZlcjpnLGF0dHJpYnV0ZTpmfX1lbHNlIGlmKFsiUkdCQSIsInJnYmEiXS5pbmNsdWRlcyhmLm5hbWUpKXtsZXQgZz1uZXcgQXJyYXlCdWZmZXIoUyo0KSxQPW5ldyBVaW50OEFycmF5KGcpO2ZvcihsZXQgWD0wO1g8UztYKyspe2xldCBGPXguZ2V0VWludDMyKE4rNCwhMCkscD14LmdldFVpbnQzMihOKzAsITApO04rPTg7bGV0IEI9QygocCYxNjc3NzIxNSk+Pj4wKXxDKChwPj4+MjR8Rjw8OCk+Pj4wKTw8OCxrPUMoKHAmMTY3NzcyMTUpPj4+MSl8QygocD4+PjI0fEY8PDgpPj4+MSk8PDgsVD1DKChwJjE2Nzc3MjE1KT4+PjIpfEMoKHA+Pj4yNHxGPDw4KT4+PjIpPDw4O1BbNCpYKzBdPUI+MjU1P0IvMjU2OkIsUFs0KlgrMV09az4yNTU/ay8yNTY6ayxQWzQqWCsyXT1UPjI1NT9ULzI1NjpUfU1bZi5uYW1lXT17YnVmZmVyOmcsYXR0cmlidXRlOmZ9fWVsc2V7bGV0IGc9bmV3IEFycmF5QnVmZmVyKFMqNCksUD1uZXcgRmxvYXQzMkFycmF5KGcpLFg9TjBbZi50eXBlLm5hbWVdLEY9bmV3IFgoUyksW3AsQl09WzAsMV07Y29uc3QgVD17aW50ODp4LmdldEludDgsaW50MTY6eC5nZXRJbnQxNixpbnQzMjp4LmdldEludDMyLHVpbnQ4OnguZ2V0VWludDgsdWludDE2OnguZ2V0VWludDE2LHVpbnQzMjp4LmdldFVpbnQzMixmbG9hdDp4LmdldEZsb2F0MzIsZG91YmxlOnguZ2V0RmxvYXQ2NH1bZi50eXBlLm5hbWVdLmJpbmQoeCk7aWYoZi50eXBlLnNpemU+NCl7bGV0W1ksRF09Zi5yYW5nZTtwPVksQj0xLyhELVkpfWZvcihsZXQgWT0wO1k8UztZKyspe2xldCBEPVQoTiwhMCk7Tis9Zi5ieXRlU2l6ZSxQW1ldPShELXApKkIsRltZXT1EfU1bZi5uYW1lXT17YnVmZmVyOmcscHJlY2lzZUJ1ZmZlcjpGLGF0dHJpYnV0ZTpmLG9mZnNldDpwLHNjYWxlOkJ9fWxldCB2MD1wYXJzZUludChTL1AwKTt7bGV0IGY9bmV3IEFycmF5QnVmZmVyKFMqNCksZz1uZXcgVWludDMyQXJyYXkoZik7Zm9yKGxldCBQPTA7UDxTO1ArKylnW1BdPVA7TS5JTkRJQ0VTPXtidWZmZXI6ZixhdHRyaWJ1dGU6US5JTkRJQ0VTfX17bGV0IGY9Yi52ZWN0b3JzO2ZvcihsZXQgZyBvZiBmKXtsZXR7bmFtZTpQLGF0dHJpYnV0ZXM6WH09ZyxGPVgubGVuZ3RoLHA9bmV3IEFycmF5QnVmZmVyKEYqUyo0KSxCPW5ldyBGbG9hdDMyQXJyYXkocCksaz0wO2ZvcihsZXQgWSBvZiBYKXtsZXQgRD1NW1ldLHtvZmZzZXQ6SyxzY2FsZTpuMH09RCxhMD1uZXcgRGF0YVZpZXcoRC5idWZmZXIpO2NvbnN0IGMwPWEwLmdldEZsb2F0MzIuYmluZChhMCk7Zm9yKGxldCB1MD0wO3UwPFM7dTArKyl7bGV0IFgwPWMwKHUwKjQsITApO0JbdTAqRitrXT1YMC9uMCtLfWsrK31sZXQgVD1uZXcgUShQLHYuREFUQV9UWVBFX0ZMT0FULDMpO01bUF09e2J1ZmZlcjpwLGF0dHJpYnV0ZTpUfX19cGVyZm9ybWFuY2Uubm93KCkteTA7bGV0IGwwPXtidWZmZXI6cDAsYXR0cmlidXRlQnVmZmVyczpNLGRlbnNpdHk6djB9LGkwPVtdO2ZvcihsZXQgZiBpbiBsMC5hdHRyaWJ1dGVCdWZmZXJzKWkwLnB1c2gobDAuYXR0cmlidXRlQnVmZmVyc1tmXS5idWZmZXIpO3Bvc3RNZXNzYWdlKGwwLGkwKX19KSgpOwovLyMgc291cmNlTWFwcGluZ1VSTD1icm90bGktZGVjb2Rlci53b3JrZXItOGVmNjQ5ZmIuanMubWFwCg==", yi = typeof window < "u" && window.Blob && new Blob([atob(fi)], { type: "text/javascript;charset=utf-8" });
function Ke() {
  let s;
  try {
    if (s = yi && (window.URL || window.webkitURL).createObjectURL(yi), !s)
      throw "";
    return new Worker(s);
  } catch {
    return new Worker("data:application/javascript;base64," + fi);
  } finally {
    s && (window.URL || window.webkitURL).revokeObjectURL(s);
  }
}
const Si = "KGZ1bmN0aW9uKCl7InVzZSBzdHJpY3QiO2NvbnN0IHQ9e0RBVEFfVFlQRV9ET1VCTEU6e29yZGluYWw6MCxuYW1lOiJkb3VibGUiLHNpemU6OH0sREFUQV9UWVBFX0ZMT0FUOntvcmRpbmFsOjEsbmFtZToiZmxvYXQiLHNpemU6NH0sREFUQV9UWVBFX0lOVDg6e29yZGluYWw6MixuYW1lOiJpbnQ4IixzaXplOjF9LERBVEFfVFlQRV9VSU5UODp7b3JkaW5hbDozLG5hbWU6InVpbnQ4IixzaXplOjF9LERBVEFfVFlQRV9JTlQxNjp7b3JkaW5hbDo0LG5hbWU6ImludDE2IixzaXplOjJ9LERBVEFfVFlQRV9VSU5UMTY6e29yZGluYWw6NSxuYW1lOiJ1aW50MTYiLHNpemU6Mn0sREFUQV9UWVBFX0lOVDMyOntvcmRpbmFsOjYsbmFtZToiaW50MzIiLHNpemU6NH0sREFUQV9UWVBFX1VJTlQzMjp7b3JkaW5hbDo3LG5hbWU6InVpbnQzMiIsc2l6ZTo0fSxEQVRBX1RZUEVfSU5UNjQ6e29yZGluYWw6OCxuYW1lOiJpbnQ2NCIsc2l6ZTo4fSxEQVRBX1RZUEVfVUlOVDY0OntvcmRpbmFsOjksbmFtZToidWludDY0IixzaXplOjh9fTtsZXQgZz0wO2ZvcihsZXQgTyBpbiB0KXRbZ109dFtPXSxnKys7Y2xhc3MgaXtjb25zdHJ1Y3RvcihiLHksRCxZPVsxLzAsLTEvMF0pe3RoaXMubmFtZT1iLHRoaXMudHlwZT15LHRoaXMubnVtRWxlbWVudHM9RCx0aGlzLnJhbmdlPVksdGhpcy5ieXRlU2l6ZT10aGlzLm51bUVsZW1lbnRzKnRoaXMudHlwZS5zaXplLHRoaXMuZGVzY3JpcHRpb249IiJ9fW5ldyBpKCJQT1NJVElPTl9DQVJURVNJQU4iLHQuREFUQV9UWVBFX0ZMT0FULDMpLG5ldyBpKCJDT0xPUl9QQUNLRUQiLHQuREFUQV9UWVBFX0lOVDgsNCksbmV3IGkoIkNPTE9SX1BBQ0tFRCIsdC5EQVRBX1RZUEVfSU5UOCw0KSxuZXcgaSgiQ09MT1JfUEFDS0VEIix0LkRBVEFfVFlQRV9JTlQ4LDMpLG5ldyBpKCJOT1JNQUxfRkxPQVRTIix0LkRBVEFfVFlQRV9GTE9BVCwzKSxuZXcgaSgiSU5URU5TSVRZIix0LkRBVEFfVFlQRV9VSU5UMTYsMSksbmV3IGkoIkNMQVNTSUZJQ0FUSU9OIix0LkRBVEFfVFlQRV9VSU5UOCwxKSxuZXcgaSgiTk9STUFMX1NQSEVSRU1BUFBFRCIsdC5EQVRBX1RZUEVfVUlOVDgsMiksbmV3IGkoIk5PUk1BTF9PQ1QxNiIsdC5EQVRBX1RZUEVfVUlOVDgsMiksbmV3IGkoIk5PUk1BTCIsdC5EQVRBX1RZUEVfRkxPQVQsMyksbmV3IGkoIlJFVFVSTl9OVU1CRVIiLHQuREFUQV9UWVBFX1VJTlQ4LDEpLG5ldyBpKCJOVU1CRVJfT0ZfUkVUVVJOUyIsdC5EQVRBX1RZUEVfVUlOVDgsMSksbmV3IGkoIlNPVVJDRV9JRCIsdC5EQVRBX1RZUEVfVUlOVDE2LDEpLG5ldyBpKCJJTkRJQ0VTIix0LkRBVEFfVFlQRV9VSU5UMzIsMSksbmV3IGkoIlNQQUNJTkciLHQuREFUQV9UWVBFX0ZMT0FULDEpLG5ldyBpKCJHUFNfVElNRSIsdC5EQVRBX1RZUEVfRE9VQkxFLDEpO2NvbnN0IE09e2ludDg6SW50OEFycmF5LGludDE2OkludDE2QXJyYXksaW50MzI6SW50MzJBcnJheSxpbnQ2NDpGbG9hdDY0QXJyYXksdWludDg6VWludDhBcnJheSx1aW50MTY6VWludDE2QXJyYXksdWludDMyOlVpbnQzMkFycmF5LHVpbnQ2NDpGbG9hdDY0QXJyYXksZmxvYXQ6RmxvYXQzMkFycmF5LGRvdWJsZTpGbG9hdDY0QXJyYXl9O29ubWVzc2FnZT1mdW5jdGlvbihPKXtsZXR7YnVmZmVyOmIscG9pbnRBdHRyaWJ1dGVzOnksc2NhbGU6RCxuYW1lOlksbWluOlUsbWF4Okcsc2l6ZTpwLG9mZnNldDpSLG51bVBvaW50czpzfT1PLmRhdGE7cGVyZm9ybWFuY2Uubm93KCk7bGV0IEE9bmV3IERhdGFWaWV3KGIpLEU9e30sST0wLG09MDtmb3IobGV0IGUgb2YgeS5hdHRyaWJ1dGVzKW0rPWUuYnl0ZVNpemU7bGV0IF89MzIsej1uZXcgVWludDMyQXJyYXkoXyoqMyksRj0oZSxULHIpPT57bGV0IG49XyplL3AueCxhPV8qVC9wLnksbD1fKnIvcC56LGY9TWF0aC5taW4ocGFyc2VJbnQobiksXy0xKSx1PU1hdGgubWluKHBhcnNlSW50KGEpLF8tMSksTj1NYXRoLm1pbihwYXJzZUludChsKSxfLTEpO3JldHVybiBmK3UqXytOKl8qX30sQz0wO2ZvcihsZXQgZSBvZiB5LmF0dHJpYnV0ZXMpe2lmKFsiUE9TSVRJT05fQ0FSVEVTSUFOIiwicG9zaXRpb24iXS5pbmNsdWRlcyhlLm5hbWUpKXtsZXQgVD1uZXcgQXJyYXlCdWZmZXIocyo0KjMpLHI9bmV3IEZsb2F0MzJBcnJheShUKTtmb3IobGV0IG49MDtuPHM7bisrKXtsZXQgYT1uKm0sbD1BLmdldEludDMyKGErSSswLCEwKSpEWzBdK1JbMF0tVS54LGY9QS5nZXRJbnQzMihhK0krNCwhMCkqRFsxXStSWzFdLVUueSx1PUEuZ2V0SW50MzIoYStJKzgsITApKkRbMl0rUlsyXS1VLnosTj1GKGwsZix1KTt6W05dKys9PT0wJiZDKyssclszKm4rMF09bCxyWzMqbisxXT1mLHJbMypuKzJdPXV9RVtlLm5hbWVdPXtidWZmZXI6VCxhdHRyaWJ1dGU6ZX19ZWxzZSBpZihbIlJHQkEiLCJyZ2JhIl0uaW5jbHVkZXMoZS5uYW1lKSl7bGV0IFQ9bmV3IEFycmF5QnVmZmVyKHMqNCkscj1uZXcgVWludDhBcnJheShUKTtmb3IobGV0IG49MDtuPHM7bisrKXtsZXQgYT1uKm0sbD1BLmdldFVpbnQxNihhK0krMCwhMCksZj1BLmdldFVpbnQxNihhK0krMiwhMCksdT1BLmdldFVpbnQxNihhK0krNCwhMCk7cls0Km4rMF09bD4yNTU/bC8yNTY6bCxyWzQqbisxXT1mPjI1NT9mLzI1NjpmLHJbNCpuKzJdPXU+MjU1P3UvMjU2OnV9RVtlLm5hbWVdPXtidWZmZXI6VCxhdHRyaWJ1dGU6ZX19ZWxzZXtsZXQgVD1uZXcgQXJyYXlCdWZmZXIocyo0KSxyPW5ldyBGbG9hdDMyQXJyYXkoVCksbj1NW2UudHlwZS5uYW1lXSxhPW5ldyBuKHMpLFtsLGZdPVswLDFdO2NvbnN0IE49e2ludDg6QS5nZXRJbnQ4LGludDE2OkEuZ2V0SW50MTYsaW50MzI6QS5nZXRJbnQzMix1aW50ODpBLmdldFVpbnQ4LHVpbnQxNjpBLmdldFVpbnQxNix1aW50MzI6QS5nZXRVaW50MzIsZmxvYXQ6QS5nZXRGbG9hdDMyLGRvdWJsZTpBLmdldEZsb2F0NjR9W2UudHlwZS5uYW1lXS5iaW5kKEEpO2lmKGUudHlwZS5zaXplPjQpe2xldFtvLFBdPWUucmFuZ2U7bD1vLGY9MS8oUC1vKX1mb3IobGV0IG89MDtvPHM7bysrKXtsZXQgUD1vKm0sYz1OKFArSSwhMCk7cltvXT0oYy1sKSpmLGFbb109Y31FW2UubmFtZV09e2J1ZmZlcjpULHByZWNpc2VCdWZmZXI6YSxhdHRyaWJ1dGU6ZSxvZmZzZXQ6bCxzY2FsZTpmfX1JKz1lLmJ5dGVTaXplfWxldCBCPXBhcnNlSW50KHMvQyk7e2xldCBlPW5ldyBBcnJheUJ1ZmZlcihzKjQpLFQ9bmV3IFVpbnQzMkFycmF5KGUpO2ZvcihsZXQgcj0wO3I8cztyKyspVFtyXT1yO0UuSU5ESUNFUz17YnVmZmVyOmUsYXR0cmlidXRlOmkuSU5ESUNFU319e2xldCBlPXkudmVjdG9ycztmb3IobGV0IFQgb2YgZSl7bGV0e25hbWU6cixhdHRyaWJ1dGVzOm59PVQsYT1uLmxlbmd0aCxsPW5ldyBBcnJheUJ1ZmZlcihhKnMqNCksZj1uZXcgRmxvYXQzMkFycmF5KGwpLHU9MDtmb3IobGV0IG8gb2Ygbil7bGV0IFA9RVtvXSx7b2Zmc2V0OmMsc2NhbGU6aH09UCxMPW5ldyBEYXRhVmlldyhQLmJ1ZmZlcik7Y29uc3QgeD1MLmdldEZsb2F0MzIuYmluZChMKTtmb3IobGV0IHc9MDt3PHM7dysrKXtsZXQgdj14KHcqNCwhMCk7Zlt3KmErdV09di9oK2N9dSsrfWxldCBOPW5ldyBpKHIsdC5EQVRBX1RZUEVfRkxPQVQsMyk7RVtyXT17YnVmZmVyOmwsYXR0cmlidXRlOk59fX1sZXQgZD17YnVmZmVyOmIsYXR0cmlidXRlQnVmZmVyczpFLGRlbnNpdHk6Qn0sUz1bXTtmb3IobGV0IGUgaW4gZC5hdHRyaWJ1dGVCdWZmZXJzKVMucHVzaChkLmF0dHJpYnV0ZUJ1ZmZlcnNbZV0uYnVmZmVyKTtTLnB1c2goYikscG9zdE1lc3NhZ2UoZCxTKX19KSgpOwovLyMgc291cmNlTWFwcGluZ1VSTD1kZWNvZGVyLndvcmtlci1mNzU3MDc3Yy5qcy5tYXAK", Ri = typeof window < "u" && window.Blob && new Blob([atob(Si)], { type: "text/javascript;charset=utf-8" });
function _e() {
  let s;
  try {
    if (s = Ri && (window.URL || window.webkitURL).createObjectURL(Ri), !s)
      throw "";
    return new Worker(s);
  } catch {
    return new Worker("data:application/javascript;base64," + Si);
  } finally {
    s && (window.URL || window.webkitURL).revokeObjectURL(s);
  }
}
var Pl = /* @__PURE__ */ ((s) => (s.DECODER_WORKER_BROTLI = "DECODER_WORKER_BROTLI", s.DECODER_WORKER = "DECODER_WORKER", s))(Pl || {});
function qe(s) {
  switch (s) {
    case "DECODER_WORKER_BROTLI":
      return new Ke();
    case "DECODER_WORKER":
      return new _e();
    default:
      throw new Error("Unknown worker type");
  }
}
class $e {
  constructor() {
    this.workers = { DECODER_WORKER: [], DECODER_WORKER_BROTLI: [] };
  }
  getWorker(t) {
    if (this.workers[t] === void 0)
      throw new Error("Unknown worker type");
    if (this.workers[t].length === 0) {
      let i = qe(t);
      this.workers[t].push(i);
    }
    let l = this.workers[t].pop();
    if (l === void 0)
      throw new Error("No workers available");
    return l;
  }
  returnWorker(t, l) {
    this.workers[t].push(l);
  }
}
const ji = class {
  constructor(s, t, l) {
    this.name = s, this.octreeGeometry = t, this.boundingBox = l, this.loaded = !1, this.loading = !1, this.parent = null, this.geometry = null, this.hasChildren = !1, this.isLeafNode = !0, this.isTreeNode = !1, this.isGeometryNode = !0, this.children = [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null
    ], this.id = ji.IDCount++, this.index = parseInt(s.charAt(s.length - 1)), this.boundingSphere = l.getBoundingSphere(new st()), this.numPoints = 0, this.oneTimeDisposeHandlers = [];
  }
  // isGeometryNode(){
  // 	return true;
  // }
  getLevel() {
    return this.level;
  }
  // isTreeNode(){
  // 	return false;
  // } // Converted to property
  isLoaded() {
    return this.loaded;
  }
  getBoundingSphere() {
    return this.boundingSphere;
  }
  // getChildren(){
  // 	let children = [];
  // 	for (let i = 0; i < 8; i++) {
  // 		if (this.children[i]) {
  // 			children.push(this.children[i]);
  // 		}
  // 	}
  // 	return children;
  // }
  getBoundingBox() {
    return this.boundingBox;
  }
  load() {
    this.octreeGeometry.numNodesLoading >= this.octreeGeometry.maxNumNodesLoading || this.octreeGeometry.loader && this.octreeGeometry.loader.load(this);
  }
  getNumPoints() {
    return this.numPoints;
  }
  dispose() {
    if (this.geometry && this.parent != null) {
      this.geometry.dispose(), this.geometry = null, this.loaded = !1;
      for (let s = 0; s < this.oneTimeDisposeHandlers.length; s++) {
        let t = this.oneTimeDisposeHandlers[s];
        t();
      }
      this.oneTimeDisposeHandlers = [];
    }
  }
  traverse(s, t = !0) {
    const l = t ? [this] : [];
    let i;
    for (; (i = l.pop()) !== void 0; ) {
      s(i);
      for (const e of i.children)
        e !== null && l.push(e);
    }
  }
};
let Rl = ji;
Rl.IDCount = 0;
Rl.IDCount = 0;
class tn {
  constructor(t, l, i) {
    this.url = t, this.workerPool = l, this.metadata = i;
  }
  async load(t) {
    if (!(t.loaded || t.loading)) {
      t.loading = !0, t.octreeGeometry.numNodesLoading++;
      try {
        t.nodeType === 2 && await this.loadHierarchy(t);
        let { byteOffset: l, byteSize: i } = t;
        if (l === void 0 || i === void 0)
          throw new Error("byteOffset and byteSize are required");
        let e = `${this.url}/../octree.bin`, n = l, c = l + i - BigInt(1), Z;
        i === BigInt(0) ? (Z = new ArrayBuffer(0), console.warn(`loaded node with 0 bytes: ${t.name}`)) : Z = await (await fetch(e, {
          headers: {
            "content-type": "multipart/byteranges",
            Range: `bytes=${n}-${c}`
          }
        })).arrayBuffer();
        const h = this.metadata.encoding === "BROTLI" ? Pl.DECODER_WORKER_BROTLI : Pl.DECODER_WORKER, a = this.workerPool.getWorker(h);
        a.onmessage = (g) => {
          let y = g.data, x = y.attributeBuffers;
          this.workerPool.returnWorker(h, a);
          let J = new yt();
          for (let R in x) {
            let w = x[R].buffer;
            if (R === "position")
              J.setAttribute("position", new z(new Float32Array(w), 3));
            else if (R === "rgba")
              J.setAttribute("rgba", new z(new Uint8Array(w), 4, !0));
            else if (R === "NORMAL")
              J.setAttribute("normal", new z(new Float32Array(w), 3));
            else if (R === "INDICES") {
              let O = new z(new Uint8Array(w), 4);
              O.normalized = !0, J.setAttribute("indices", O);
            } else {
              const O = new z(new Float32Array(w), 1);
              let I = x[R].attribute;
              O.potree = {
                offset: x[R].offset,
                scale: x[R].scale,
                preciseBuffer: x[R].preciseBuffer,
                range: I.range
              }, J.setAttribute(R, O);
            }
          }
          t.density = y.density, t.geometry = J, t.loaded = !0, t.loading = !1, t.octreeGeometry.numNodesLoading--;
        };
        let d = t.octreeGeometry.pointAttributes, m = t.octreeGeometry.scale, b = t.boundingBox, o = t.octreeGeometry.offset.clone().add(b.min), r = b.max.clone().sub(b.min), G = o.clone().add(r), u = t.numPoints, Y = t.octreeGeometry.loader.offset, p = {
          name: t.name,
          buffer: Z,
          pointAttributes: d,
          scale: m,
          min: o,
          max: G,
          size: r,
          offset: Y,
          numPoints: u
        };
        a.postMessage(p, [p.buffer]);
      } catch {
        t.loaded = !1, t.loading = !1, t.octreeGeometry.numNodesLoading--;
      }
    }
  }
  parseHierarchy(t, l) {
    let i = new DataView(l), e = 22, n = l.byteLength / e, c = t.octreeGeometry, Z = new Array(n);
    Z[0] = t;
    let h = 1;
    for (let a = 0; a < n; a++) {
      let d = Z[a], m = i.getUint8(a * e + 0), b = i.getUint8(a * e + 1), o = i.getUint32(a * e + 2, !0), r = i.getBigInt64(a * e + 6, !0), G = i.getBigInt64(a * e + 14, !0);
      if (d.nodeType === 2 ? (d.byteOffset = r, d.byteSize = G, d.numPoints = o) : m === 2 ? (d.hierarchyByteOffset = r, d.hierarchyByteSize = G, d.numPoints = o) : (d.byteOffset = r, d.byteSize = G, d.numPoints = o), d.nodeType = m, d.nodeType !== 2)
        for (let u = 0; u < 8; u++) {
          if (!((1 << u & b) !== 0))
            continue;
          let p = d.name + u, g = en(d.boundingBox, u), y = new Rl(p, c, g);
          y.name = p, y.spacing = d.spacing / 2, y.level = d.level + 1, d.children[u] = y, y.parent = d, Z[h] = y, h++;
        }
    }
  }
  async loadHierarchy(t) {
    let { hierarchyByteOffset: l, hierarchyByteSize: i } = t;
    if (l === void 0 || i === void 0)
      throw new Error(`hierarchyByteOffset and hierarchyByteSize are undefined for node ${t.name}`);
    let e = `${this.url}/../hierarchy.bin`, n = l, c = n + i - BigInt(1), h = await (await fetch(e, {
      headers: {
        "content-type": "multipart/byteranges",
        Range: `bytes=${n}-${c}`
      }
    })).arrayBuffer();
    this.parseHierarchy(t, h);
  }
}
let ln = new W();
function en(s, t) {
  let l = s.min.clone(), i = s.max.clone(), e = ln.subVectors(i, l);
  return (t & 1) > 0 ? l.z += e.z / 2 : i.z -= e.z / 2, (t & 2) > 0 ? l.y += e.y / 2 : i.y -= e.y / 2, (t & 4) > 0 ? l.x += e.x / 2 : i.x -= e.x / 2, new K(l, i);
}
let nn = {
  double: C.DATA_TYPE_DOUBLE,
  float: C.DATA_TYPE_FLOAT,
  int8: C.DATA_TYPE_INT8,
  uint8: C.DATA_TYPE_UINT8,
  int16: C.DATA_TYPE_INT16,
  uint16: C.DATA_TYPE_UINT16,
  int32: C.DATA_TYPE_INT32,
  uint32: C.DATA_TYPE_UINT32,
  int64: C.DATA_TYPE_INT64,
  uint64: C.DATA_TYPE_UINT64
};
class gl {
  constructor() {
    this.workerPool = new $e();
  }
  static parseAttributes(t) {
    let l = new Oe(), i = {
      rgb: "rgba"
    };
    for (const e of t) {
      let { name: n, numElements: c, min: Z, max: h } = e, a = nn[e.type], d = i[n] ? i[n] : n, m = new f(d, a, c);
      c === 1 ? m.range = [Z[0], h[0]] : m.range = [Z, h], n === "gps-time" && typeof m.range[0] == "number" && m.range[0] === m.range[1] && (m.range[1] += 1), m.initialRange = m.range, l.add(m);
    }
    if (l.attributes.find((n) => n.name === "NormalX") !== void 0 && l.attributes.find((n) => n.name === "NormalY") !== void 0 && l.attributes.find((n) => n.name === "NormalZ") !== void 0) {
      let n = {
        name: "NORMAL",
        attributes: ["NormalX", "NormalY", "NormalZ"]
      };
      l.addVector(n);
    }
    return l;
  }
  async load(t, l) {
    let e = await (await l(t)).json(), n = gl.parseAttributes(e.attributes), c = new tn(t, this.workerPool, e);
    c.attributes = n, c.scale = e.scale, c.offset = e.offset;
    let Z = new Ui(c, new K(new W(...e.boundingBox.min), new W(...e.boundingBox.max)));
    Z.url = t, Z.spacing = e.spacing, Z.scale = e.scale;
    let h = new W(...e.boundingBox.min), a = new W(...e.boundingBox.max), d = new K(h, a), m = h.clone();
    d.min.sub(m), d.max.sub(m), Z.projection = e.projection, Z.boundingBox = d, Z.tightBoundingBox = d.clone(), Z.boundingSphere = d.getBoundingSphere(new st()), Z.tightBoundingSphere = d.getBoundingSphere(new st()), Z.offset = m, Z.pointAttributes = gl.parseAttributes(e.attributes);
    let b = new Rl("r", Z, d);
    return b.level = 0, b.nodeType = 2, b.hierarchyByteOffset = BigInt(0), b.hierarchyByteSize = BigInt(e.hierarchy.firstChunkSize), b.spacing = Z.spacing, b.byteOffset = BigInt(0), Z.root = b, c.load(b), {
      geometry: Z
    };
  }
}
async function sn(s, t, l) {
  const i = await t(s), e = new gl(), { geometry: n } = await e.load(i, l);
  return n;
}
const cn = document.createElement("canvas"), D = cn.getContext("webgl"), Zn = {
  SHADER_INTERPOLATION: Yl("EXT_frag_depth") && Ul(8),
  SHADER_SPLATS: Yl("EXT_frag_depth") && Yl("OES_texture_float") && Ul(8),
  SHADER_EDL: Yl("OES_texture_float") && Ul(8),
  precision: hn()
};
function Yl(s) {
  return D !== null && !!D.getExtension(s);
}
function Ul(s) {
  return D !== null && D.getParameter(D.MAX_VARYING_VECTORS) >= s;
}
function hn() {
  if (D === null)
    return "";
  const s = D.getShaderPrecisionFormat(D.VERTEX_SHADER, D.HIGH_FLOAT), t = D.getShaderPrecisionFormat(D.VERTEX_SHADER, D.MEDIUM_FLOAT), l = D.getShaderPrecisionFormat(D.FRAGMENT_SHADER, D.HIGH_FLOAT), i = D.getShaderPrecisionFormat(D.FRAGMENT_SHADER, D.MEDIUM_FLOAT), e = s && l && s.precision > 0 && l.precision > 0, n = t && i && t.precision > 0 && i.precision > 0;
  return e ? "highp" : n ? "mediump" : "lowp";
}
var Xt = /* @__PURE__ */ ((s) => (s[s.POSITION_CARTESIAN = 0] = "POSITION_CARTESIAN", s[s.COLOR_PACKED = 1] = "COLOR_PACKED", s[s.COLOR_FLOATS_1 = 2] = "COLOR_FLOATS_1", s[s.COLOR_FLOATS_255 = 3] = "COLOR_FLOATS_255", s[s.NORMAL_FLOATS = 4] = "NORMAL_FLOATS", s[s.FILLER = 5] = "FILLER", s[s.INTENSITY = 6] = "INTENSITY", s[s.CLASSIFICATION = 7] = "CLASSIFICATION", s[s.NORMAL_SPHEREMAPPED = 8] = "NORMAL_SPHEREMAPPED", s[s.NORMAL_OCT16 = 9] = "NORMAL_OCT16", s[s.NORMAL = 10] = "NORMAL", s))(Xt || {});
const ht = {
  DATA_TYPE_DOUBLE: { ordinal: 0, size: 8 },
  DATA_TYPE_FLOAT: { ordinal: 1, size: 4 },
  DATA_TYPE_INT8: { ordinal: 2, size: 1 },
  DATA_TYPE_UINT8: { ordinal: 3, size: 1 },
  DATA_TYPE_INT16: { ordinal: 4, size: 2 },
  DATA_TYPE_UINT16: { ordinal: 5, size: 2 },
  DATA_TYPE_INT32: { ordinal: 6, size: 4 },
  DATA_TYPE_UINT32: { ordinal: 7, size: 4 },
  DATA_TYPE_INT64: { ordinal: 8, size: 8 },
  DATA_TYPE_UINT64: { ordinal: 9, size: 8 }
};
function at(s, t, l) {
  return {
    name: s,
    type: t,
    numElements: l,
    byteSize: l * t.size
  };
}
const xi = at(
  1,
  ht.DATA_TYPE_INT8,
  4
), an = {
  POSITION_CARTESIAN: at(
    0,
    ht.DATA_TYPE_FLOAT,
    3
  ),
  RGBA_PACKED: xi,
  COLOR_PACKED: xi,
  RGB_PACKED: at(
    1,
    ht.DATA_TYPE_INT8,
    3
  ),
  NORMAL_FLOATS: at(
    4,
    ht.DATA_TYPE_FLOAT,
    3
  ),
  FILLER_1B: at(
    5,
    ht.DATA_TYPE_UINT8,
    1
  ),
  INTENSITY: at(
    6,
    ht.DATA_TYPE_UINT16,
    1
  ),
  CLASSIFICATION: at(
    7,
    ht.DATA_TYPE_UINT8,
    1
  ),
  NORMAL_SPHEREMAPPED: at(
    8,
    ht.DATA_TYPE_UINT8,
    2
  ),
  NORMAL_OCT16: at(
    9,
    ht.DATA_TYPE_UINT8,
    2
  ),
  NORMAL: at(10, ht.DATA_TYPE_FLOAT, 3)
};
class Pi {
  constructor(t = []) {
    this.attributes = [], this.byteSize = 0, this.size = 0;
    for (let l = 0; l < t.length; l++) {
      const i = t[l], e = an[i];
      this.attributes.push(e), this.byteSize += e.byteSize, this.size++;
    }
  }
  add(t) {
    this.attributes.push(t), this.byteSize += t.byteSize, this.size++;
  }
  hasColors() {
    return this.attributes.find(dn) !== void 0;
  }
  hasNormals() {
    return this.attributes.find(mn) !== void 0;
  }
}
function dn({ name: s }) {
  return s === 1;
}
function mn({ name: s }) {
  return s === 8 || s === 4 || s === 10 || s === 9;
}
class Et {
  constructor(t) {
    this.versionMinor = 0, this.version = t;
    const l = t.indexOf(".") === -1 ? t.length : t.indexOf(".");
    this.versionMajor = parseInt(t.substr(0, l), 10), this.versionMinor = parseInt(t.substr(l + 1), 10), isNaN(this.versionMinor) && (this.versionMinor = 0);
  }
  newerThan(t) {
    const l = new Et(t);
    return this.versionMajor > l.versionMajor ? !0 : this.versionMajor === l.versionMajor && this.versionMinor > l.versionMinor;
  }
  equalOrHigher(t) {
    const l = new Et(t);
    return this.versionMajor > l.versionMajor ? !0 : this.versionMajor === l.versionMajor && this.versionMinor >= l.versionMinor;
  }
  upTo(t) {
    return !this.newerThan(t);
  }
}
const Ti = "KGZ1bmN0aW9uKCl7InVzZSBzdHJpY3QiO3ZhciBUPShlPT4oZVtlLlBPU0lUSU9OX0NBUlRFU0lBTj0wXT0iUE9TSVRJT05fQ0FSVEVTSUFOIixlW2UuQ09MT1JfUEFDS0VEPTFdPSJDT0xPUl9QQUNLRUQiLGVbZS5DT0xPUl9GTE9BVFNfMT0yXT0iQ09MT1JfRkxPQVRTXzEiLGVbZS5DT0xPUl9GTE9BVFNfMjU1PTNdPSJDT0xPUl9GTE9BVFNfMjU1IixlW2UuTk9STUFMX0ZMT0FUUz00XT0iTk9STUFMX0ZMT0FUUyIsZVtlLkZJTExFUj01XT0iRklMTEVSIixlW2UuSU5URU5TSVRZPTZdPSJJTlRFTlNJVFkiLGVbZS5DTEFTU0lGSUNBVElPTj03XT0iQ0xBU1NJRklDQVRJT04iLGVbZS5OT1JNQUxfU1BIRVJFTUFQUEVEPThdPSJOT1JNQUxfU1BIRVJFTUFQUEVEIixlW2UuTk9STUFMX09DVDE2PTldPSJOT1JNQUxfT0NUMTYiLGVbZS5OT1JNQUw9MTBdPSJOT1JNQUwiLGUpKShUfHx7fSk7Y29uc3QgST17REFUQV9UWVBFX0RPVUJMRTp7b3JkaW5hbDowLHNpemU6OH0sREFUQV9UWVBFX0ZMT0FUOntvcmRpbmFsOjEsc2l6ZTo0fSxEQVRBX1RZUEVfSU5UODp7b3JkaW5hbDoyLHNpemU6MX0sREFUQV9UWVBFX1VJTlQ4OntvcmRpbmFsOjMsc2l6ZToxfSxEQVRBX1RZUEVfSU5UMTY6e29yZGluYWw6NCxzaXplOjJ9LERBVEFfVFlQRV9VSU5UMTY6e29yZGluYWw6NSxzaXplOjJ9LERBVEFfVFlQRV9JTlQzMjp7b3JkaW5hbDo2LHNpemU6NH0sREFUQV9UWVBFX1VJTlQzMjp7b3JkaW5hbDo3LHNpemU6NH0sREFUQV9UWVBFX0lOVDY0OntvcmRpbmFsOjgsc2l6ZTo4fSxEQVRBX1RZUEVfVUlOVDY0OntvcmRpbmFsOjksc2l6ZTo4fX07ZnVuY3Rpb24gTyhlLHQscil7cmV0dXJue25hbWU6ZSx0eXBlOnQsbnVtRWxlbWVudHM6cixieXRlU2l6ZTpyKnQuc2l6ZX19Y29uc3QgUz1PKDEsSS5EQVRBX1RZUEVfSU5UOCw0KSxFPXtQT1NJVElPTl9DQVJURVNJQU46TygwLEkuREFUQV9UWVBFX0ZMT0FULDMpLFJHQkFfUEFDS0VEOlMsQ09MT1JfUEFDS0VEOlMsUkdCX1BBQ0tFRDpPKDEsSS5EQVRBX1RZUEVfSU5UOCwzKSxOT1JNQUxfRkxPQVRTOk8oNCxJLkRBVEFfVFlQRV9GTE9BVCwzKSxGSUxMRVJfMUI6Tyg1LEkuREFUQV9UWVBFX1VJTlQ4LDEpLElOVEVOU0lUWTpPKDYsSS5EQVRBX1RZUEVfVUlOVDE2LDEpLENMQVNTSUZJQ0FUSU9OOk8oNyxJLkRBVEFfVFlQRV9VSU5UOCwxKSxOT1JNQUxfU1BIRVJFTUFQUEVEOk8oOCxJLkRBVEFfVFlQRV9VSU5UOCwyKSxOT1JNQUxfT0NUMTY6Tyg5LEkuREFUQV9UWVBFX1VJTlQ4LDIpLE5PUk1BTDpPKDEwLEkuREFUQV9UWVBFX0ZMT0FULDMpfTtjbGFzcyBke2NvbnN0cnVjdG9yKHQpe3RoaXMudmVyc2lvbk1pbm9yPTAsdGhpcy52ZXJzaW9uPXQ7Y29uc3Qgcj10LmluZGV4T2YoIi4iKT09PS0xP3QubGVuZ3RoOnQuaW5kZXhPZigiLiIpO3RoaXMudmVyc2lvbk1ham9yPXBhcnNlSW50KHQuc3Vic3RyKDAsciksMTApLHRoaXMudmVyc2lvbk1pbm9yPXBhcnNlSW50KHQuc3Vic3RyKHIrMSksMTApLGlzTmFOKHRoaXMudmVyc2lvbk1pbm9yKSYmKHRoaXMudmVyc2lvbk1pbm9yPTApfW5ld2VyVGhhbih0KXtjb25zdCByPW5ldyBkKHQpO3JldHVybiB0aGlzLnZlcnNpb25NYWpvcj5yLnZlcnNpb25NYWpvcj8hMDp0aGlzLnZlcnNpb25NYWpvcj09PXIudmVyc2lvbk1ham9yJiZ0aGlzLnZlcnNpb25NaW5vcj5yLnZlcnNpb25NaW5vcn1lcXVhbE9ySGlnaGVyKHQpe2NvbnN0IHI9bmV3IGQodCk7cmV0dXJuIHRoaXMudmVyc2lvbk1ham9yPnIudmVyc2lvbk1ham9yPyEwOnRoaXMudmVyc2lvbk1ham9yPT09ci52ZXJzaW9uTWFqb3ImJnRoaXMudmVyc2lvbk1pbm9yPj1yLnZlcnNpb25NaW5vcn11cFRvKHQpe3JldHVybiF0aGlzLm5ld2VyVGhhbih0KX19Y2xhc3MgTntjb25zdHJ1Y3Rvcih0KXt0aGlzLnRtcD1uZXcgQXJyYXlCdWZmZXIoNCksdGhpcy50bXBmPW5ldyBGbG9hdDMyQXJyYXkodGhpcy50bXApLHRoaXMudG1wdTg9bmV3IFVpbnQ4QXJyYXkodGhpcy50bXApLHRoaXMudTg9bmV3IFVpbnQ4QXJyYXkodCl9Z2V0VWludDMyKHQpe3JldHVybiB0aGlzLnU4W3QrM108PDI0fHRoaXMudThbdCsyXTw8MTZ8dGhpcy51OFt0KzFdPDw4fHRoaXMudThbdF19Z2V0VWludDE2KHQpe3JldHVybiB0aGlzLnU4W3QrMV08PDh8dGhpcy51OFt0XX1nZXRGbG9hdDMyKHQpe2NvbnN0IHI9dGhpcy50bXB1OCxzPXRoaXMudTgsbj10aGlzLnRtcGY7cmV0dXJuIHJbMF09c1t0KzBdLHJbMV09c1t0KzFdLHJbMl09c1t0KzJdLHJbM109c1t0KzNdLG5bMF19Z2V0VWludDgodCl7cmV0dXJuIHRoaXMudThbdF19fWNvbnN0IGg9TWF0aC5zaWdufHxmdW5jdGlvbihlKXtyZXR1cm4oZT0rZSk9PTB8fGUhPWU/ZTplPDA/LTE6MX07ZnVuY3Rpb24gYihlKXtjb25zdCB0PWUuZGF0YS5idWZmZXIscj1lLmRhdGEucG9pbnRBdHRyaWJ1dGVzLHM9e2F0dHJpYnV0ZUJ1ZmZlcnM6e30sY3VycmVudE9mZnNldDowLGRhdGE6bmV3IE4odCksbWVhbjpbMCwwLDBdLG5vZGVPZmZzZXQ6ZS5kYXRhLm9mZnNldCxudW1Qb2ludHM6ZS5kYXRhLmJ1ZmZlci5ieXRlTGVuZ3RoL3IuYnl0ZVNpemUscG9pbnRBdHRyaWJ1dGVzOnIsc2NhbGU6ZS5kYXRhLnNjYWxlLHRpZ2h0Qm94TWF4OltOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFksTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZLE51bWJlci5ORUdBVElWRV9JTkZJTklUWV0sdGlnaHRCb3hNaW46W051bWJlci5QT1NJVElWRV9JTkZJTklUWSxOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFksTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZXSx0cmFuc2ZlcmFibGVzOltdLHZlcnNpb246bmV3IGQoZS5kYXRhLnZlcnNpb24pfTtmb3IoY29uc3QgaSBvZiBzLnBvaW50QXR0cmlidXRlcy5hdHRyaWJ1dGVzKVAoaSxzKSxzLmN1cnJlbnRPZmZzZXQrPWkuYnl0ZVNpemU7Y29uc3Qgbj1uZXcgQXJyYXlCdWZmZXIocy5udW1Qb2ludHMqNCksYT1uZXcgVWludDMyQXJyYXkobik7Zm9yKGxldCBpPTA7aTxzLm51bVBvaW50cztpKyspYVtpXT1pO3MuYXR0cmlidXRlQnVmZmVyc1tULkNMQVNTSUZJQ0FUSU9OXXx8eShzKTtjb25zdCB1PXtidWZmZXI6dCxtZWFuOnMubWVhbixhdHRyaWJ1dGVCdWZmZXJzOnMuYXR0cmlidXRlQnVmZmVycyx0aWdodEJvdW5kaW5nQm94OnttaW46cy50aWdodEJveE1pbixtYXg6cy50aWdodEJveE1heH0saW5kaWNlczpufTtwb3N0TWVzc2FnZSh1LHMudHJhbnNmZXJhYmxlcyl9ZnVuY3Rpb24geShlKXtjb25zdCB0PW5ldyBBcnJheUJ1ZmZlcihlLm51bVBvaW50cyo0KSxyPW5ldyBGbG9hdDMyQXJyYXkodCk7Zm9yKGxldCBzPTA7czxlLm51bVBvaW50cztzKyspcltzXT0wO2UuYXR0cmlidXRlQnVmZmVyc1tULkNMQVNTSUZJQ0FUSU9OXT17YnVmZmVyOnQsYXR0cmlidXRlOkUuQ0xBU1NJRklDQVRJT059fWZ1bmN0aW9uIFAoZSx0KXtjb25zdCByPWcoZSx0KTtyIT09dm9pZCAwJiYodC5hdHRyaWJ1dGVCdWZmZXJzW3IuYXR0cmlidXRlLm5hbWVdPXIsdC50cmFuc2ZlcmFibGVzLnB1c2goci5idWZmZXIpKX1mdW5jdGlvbiBnKGUsdCl7c3dpdGNoKGUubmFtZSl7Y2FzZSBULlBPU0lUSU9OX0NBUlRFU0lBTjpyZXR1cm4gTChlLHQpO2Nhc2UgVC5DT0xPUl9QQUNLRUQ6cmV0dXJuIG0oZSx0KTtjYXNlIFQuSU5URU5TSVRZOnJldHVybiBCKGUsdCk7Y2FzZSBULkNMQVNTSUZJQ0FUSU9OOnJldHVybiBDKGUsdCk7Y2FzZSBULk5PUk1BTF9TUEhFUkVNQVBQRUQ6cmV0dXJuIEYoZSx0KTtjYXNlIFQuTk9STUFMX09DVDE2OnJldHVybiBwKGUsdCk7Y2FzZSBULk5PUk1BTDpyZXR1cm4gUihlLHQpO2RlZmF1bHQ6cmV0dXJufX1mdW5jdGlvbiBMKGUsdCl7Y29uc3Qgcj1uZXcgQXJyYXlCdWZmZXIodC5udW1Qb2ludHMqNCozKSxzPW5ldyBGbG9hdDMyQXJyYXkocik7Zm9yKGxldCBuPTA7bjx0Lm51bVBvaW50cztuKyspe2xldCBhLHUsaTt0LnZlcnNpb24ubmV3ZXJUaGFuKCIxLjMiKT8oYT10LmRhdGEuZ2V0VWludDMyKHQuY3VycmVudE9mZnNldCtuKnQucG9pbnRBdHRyaWJ1dGVzLmJ5dGVTaXplKzApKnQuc2NhbGUsdT10LmRhdGEuZ2V0VWludDMyKHQuY3VycmVudE9mZnNldCtuKnQucG9pbnRBdHRyaWJ1dGVzLmJ5dGVTaXplKzQpKnQuc2NhbGUsaT10LmRhdGEuZ2V0VWludDMyKHQuY3VycmVudE9mZnNldCtuKnQucG9pbnRBdHRyaWJ1dGVzLmJ5dGVTaXplKzgpKnQuc2NhbGUpOihhPXQuZGF0YS5nZXRGbG9hdDMyKG4qdC5wb2ludEF0dHJpYnV0ZXMuYnl0ZVNpemUrMCkrdC5ub2RlT2Zmc2V0WzBdLHU9dC5kYXRhLmdldEZsb2F0MzIobip0LnBvaW50QXR0cmlidXRlcy5ieXRlU2l6ZSs0KSt0Lm5vZGVPZmZzZXRbMV0saT10LmRhdGEuZ2V0RmxvYXQzMihuKnQucG9pbnRBdHRyaWJ1dGVzLmJ5dGVTaXplKzgpK3Qubm9kZU9mZnNldFsyXSksc1szKm4rMF09YSxzWzMqbisxXT11LHNbMypuKzJdPWksdC5tZWFuWzBdKz1hL3QubnVtUG9pbnRzLHQubWVhblsxXSs9dS90Lm51bVBvaW50cyx0Lm1lYW5bMl0rPWkvdC5udW1Qb2ludHMsdC50aWdodEJveE1pblswXT1NYXRoLm1pbih0LnRpZ2h0Qm94TWluWzBdLGEpLHQudGlnaHRCb3hNaW5bMV09TWF0aC5taW4odC50aWdodEJveE1pblsxXSx1KSx0LnRpZ2h0Qm94TWluWzJdPU1hdGgubWluKHQudGlnaHRCb3hNaW5bMl0saSksdC50aWdodEJveE1heFswXT1NYXRoLm1heCh0LnRpZ2h0Qm94TWF4WzBdLGEpLHQudGlnaHRCb3hNYXhbMV09TWF0aC5tYXgodC50aWdodEJveE1heFsxXSx1KSx0LnRpZ2h0Qm94TWF4WzJdPU1hdGgubWF4KHQudGlnaHRCb3hNYXhbMl0saSl9cmV0dXJue2J1ZmZlcjpyLGF0dHJpYnV0ZTplfX1mdW5jdGlvbiBtKGUsdCl7Y29uc3Qgcj1uZXcgQXJyYXlCdWZmZXIodC5udW1Qb2ludHMqMykscz1uZXcgVWludDhBcnJheShyKTtmb3IobGV0IG49MDtuPHQubnVtUG9pbnRzO24rKylzWzMqbiswXT10LmRhdGEuZ2V0VWludDgodC5jdXJyZW50T2Zmc2V0K24qdC5wb2ludEF0dHJpYnV0ZXMuYnl0ZVNpemUrMCksc1szKm4rMV09dC5kYXRhLmdldFVpbnQ4KHQuY3VycmVudE9mZnNldCtuKnQucG9pbnRBdHRyaWJ1dGVzLmJ5dGVTaXplKzEpLHNbMypuKzJdPXQuZGF0YS5nZXRVaW50OCh0LmN1cnJlbnRPZmZzZXQrbip0LnBvaW50QXR0cmlidXRlcy5ieXRlU2l6ZSsyKTtyZXR1cm57YnVmZmVyOnIsYXR0cmlidXRlOmV9fWZ1bmN0aW9uIEIoZSx0KXtjb25zdCByPW5ldyBBcnJheUJ1ZmZlcih0Lm51bVBvaW50cyo0KSxzPW5ldyBGbG9hdDMyQXJyYXkocik7Zm9yKGxldCBuPTA7bjx0Lm51bVBvaW50cztuKyspc1tuXT10LmRhdGEuZ2V0VWludDE2KHQuY3VycmVudE9mZnNldCtuKnQucG9pbnRBdHRyaWJ1dGVzLmJ5dGVTaXplKTtyZXR1cm57YnVmZmVyOnIsYXR0cmlidXRlOmV9fWZ1bmN0aW9uIEMoZSx0KXtjb25zdCByPW5ldyBBcnJheUJ1ZmZlcih0Lm51bVBvaW50cykscz1uZXcgVWludDhBcnJheShyKTtmb3IobGV0IG49MDtuPHQubnVtUG9pbnRzO24rKylzW25dPXQuZGF0YS5nZXRVaW50OCh0LmN1cnJlbnRPZmZzZXQrbip0LnBvaW50QXR0cmlidXRlcy5ieXRlU2l6ZSk7cmV0dXJue2J1ZmZlcjpyLGF0dHJpYnV0ZTplfX1mdW5jdGlvbiBGKGUsdCl7Y29uc3Qgcj1uZXcgQXJyYXlCdWZmZXIodC5udW1Qb2ludHMqNCozKSxzPW5ldyBGbG9hdDMyQXJyYXkocik7Zm9yKGxldCBuPTA7bjx0Lm51bVBvaW50cztuKyspe2NvbnN0IGE9dC5kYXRhLmdldFVpbnQ4KHQuY3VycmVudE9mZnNldCtuKnQucG9pbnRBdHRyaWJ1dGVzLmJ5dGVTaXplKzApLHU9dC5kYXRhLmdldFVpbnQ4KHQuY3VycmVudE9mZnNldCtuKnQucG9pbnRBdHRyaWJ1dGVzLmJ5dGVTaXplKzEpLGk9YS8yNTUsbD11LzI1NTtsZXQgZj1pKjItMSxvPWwqMi0xLEE9MTtjb25zdCBfPS0xLE09ZiotZitvKi1vK0EqLV87QT1NLGY9ZipNYXRoLnNxcnQoTSksbz1vKk1hdGguc3FydChNKSxmPWYqMixvPW8qMixBPUEqMi0xLHNbMypuKzBdPWYsc1szKm4rMV09byxzWzMqbisyXT1BfXJldHVybntidWZmZXI6cixhdHRyaWJ1dGU6ZX19ZnVuY3Rpb24gcChlLHQpe2NvbnN0IHI9bmV3IEFycmF5QnVmZmVyKHQubnVtUG9pbnRzKjQqMykscz1uZXcgRmxvYXQzMkFycmF5KHIpO2ZvcihsZXQgbj0wO248dC5udW1Qb2ludHM7bisrKXtjb25zdCBhPXQuZGF0YS5nZXRVaW50OCh0LmN1cnJlbnRPZmZzZXQrbip0LnBvaW50QXR0cmlidXRlcy5ieXRlU2l6ZSswKSx1PXQuZGF0YS5nZXRVaW50OCh0LmN1cnJlbnRPZmZzZXQrbip0LnBvaW50QXR0cmlidXRlcy5ieXRlU2l6ZSsxKSxpPWEvMjU1KjItMSxsPXUvMjU1KjItMTtsZXQgZj0xLU1hdGguYWJzKGkpLU1hdGguYWJzKGwpLG89MCxBPTA7Zj49MD8obz1pLEE9bCk6KG89LShsL2gobCktMSkvaChpKSxBPS0oaS9oKGkpLTEpL2gobCkpO2NvbnN0IF89TWF0aC5zcXJ0KG8qbytBKkErZipmKTtvPW8vXyxBPUEvXyxmPWYvXyxzWzMqbiswXT1vLHNbMypuKzFdPUEsc1szKm4rMl09Zn1yZXR1cm57YnVmZmVyOnIsYXR0cmlidXRlOmV9fWZ1bmN0aW9uIFIoZSx0KXtjb25zdCByPW5ldyBBcnJheUJ1ZmZlcih0Lm51bVBvaW50cyo0KjMpLHM9bmV3IEZsb2F0MzJBcnJheShyKTtmb3IobGV0IG49MDtuPHQubnVtUG9pbnRzO24rKyl7Y29uc3QgYT10LmRhdGEuZ2V0RmxvYXQzMih0LmN1cnJlbnRPZmZzZXQrbip0LnBvaW50QXR0cmlidXRlcy5ieXRlU2l6ZSswKSx1PXQuZGF0YS5nZXRGbG9hdDMyKHQuY3VycmVudE9mZnNldCtuKnQucG9pbnRBdHRyaWJ1dGVzLmJ5dGVTaXplKzQpLGk9dC5kYXRhLmdldEZsb2F0MzIodC5jdXJyZW50T2Zmc2V0K24qdC5wb2ludEF0dHJpYnV0ZXMuYnl0ZVNpemUrOCk7c1szKm4rMF09YSxzWzMqbisxXT11LHNbMypuKzJdPWl9cmV0dXJue2J1ZmZlcjpyLGF0dHJpYnV0ZTplfX1vbm1lc3NhZ2U9Yn0pKCk7Ci8vIyBzb3VyY2VNYXBwaW5nVVJMPWJpbmFyeS1kZWNvZGVyLndvcmtlci1mZDM3Yjk3My5qcy5tYXAK", Ni = typeof window < "u" && window.Blob && new Blob([atob(Ti)], { type: "text/javascript;charset=utf-8" });
function bn() {
  let s;
  try {
    if (s = Ni && (window.URL || window.webkitURL).createObjectURL(Ni), !s)
      throw "";
    return new Worker(s);
  } catch {
    return new Worker("data:application/javascript;base64," + Ti);
  } finally {
    s && (window.URL || window.webkitURL).revokeObjectURL(s);
  }
}
class on {
  constructor({
    getUrl: t = (c) => Promise.resolve(c),
    version: l,
    boundingBox: i,
    scale: e,
    xhrRequest: n
  }) {
    this.disposed = !1, this.workers = [], console.log([t, l, i, e, n]), typeof l == "string" ? this.version = new Et(l) : this.version = l, this.xhrRequest = n, this.getUrl = t, this.boundingBox = i, this.scale = e, this.callbacks = [];
  }
  dispose() {
    this.workers.forEach((t) => t.terminate()), this.workers = [], this.disposed = !0;
  }
  load(t) {
    return t.loaded || this.disposed ? Promise.resolve() : Promise.resolve(this.getUrl(this.getNodeUrl(t))).then((l) => this.xhrRequest(l, { mode: "cors" })).then((l) => l.arrayBuffer()).then((l) => new Promise((i) => this.parse(t, l, i)));
  }
  getNodeUrl(t) {
    let l = t.getUrl();
    return this.version.equalOrHigher("1.4") && (l += ".bin"), l;
  }
  parse(t, l, i) {
    if (this.disposed) {
      i();
      return;
    }
    const e = this.getWorker(), n = t.pcoGeometry.pointAttributes, c = l.byteLength / n.byteSize;
    this.version.upTo("1.5") && (t.numPoints = c), e.onmessage = (h) => {
      if (this.disposed) {
        i();
        return;
      }
      const a = h.data, d = t.geometry = t.geometry || new yt();
      d.boundingBox = t.boundingBox, this.addBufferAttributes(d, a.attributeBuffers), this.addIndices(d, a.indices), this.addNormalAttribute(d, c), t.mean = new W().fromArray(a.mean), t.tightBoundingBox = this.getTightBoundingBox(a.tightBoundingBox), t.loaded = !0, t.loading = !1, t.failed = !1, t.pcoGeometry.numNodesLoading--, t.pcoGeometry.needsUpdate = !0, this.releaseWorker(e), this.callbacks.forEach((m) => m(t)), i();
    };
    const Z = {
      buffer: l,
      pointAttributes: n,
      version: this.version.version,
      min: t.boundingBox.min.toArray(),
      offset: t.pcoGeometry.offset.toArray(),
      scale: this.scale,
      spacing: t.spacing,
      hasChildren: t.hasChildren
    };
    e.postMessage(Z, [Z.buffer]);
  }
  getWorker() {
    const t = this.workers.pop();
    return t || new bn();
  }
  releaseWorker(t) {
    this.workers.push(t);
  }
  getTightBoundingBox({ min: t, max: l }) {
    const i = new K(new W().fromArray(t), new W().fromArray(l));
    return i.max.sub(i.min), i.min.set(0, 0, 0), i;
  }
  addBufferAttributes(t, l) {
    Object.keys(l).forEach((i) => {
      const e = l[i].buffer;
      this.isAttribute(i, Xt.POSITION_CARTESIAN) ? t.setAttribute("position", new z(new Float32Array(e), 3)) : this.isAttribute(i, Xt.COLOR_PACKED) ? t.setAttribute("color", new z(new Uint8Array(e), 3, !0)) : this.isAttribute(i, Xt.INTENSITY) ? t.setAttribute("intensity", new z(new Float32Array(e), 1)) : this.isAttribute(i, Xt.CLASSIFICATION) ? t.setAttribute("classification", new z(new Uint8Array(e), 1)) : this.isAttribute(i, Xt.NORMAL_SPHEREMAPPED) ? t.setAttribute("normal", new z(new Float32Array(e), 3)) : this.isAttribute(i, Xt.NORMAL_OCT16) ? t.setAttribute("normal", new z(new Float32Array(e), 3)) : this.isAttribute(i, Xt.NORMAL) && t.setAttribute("normal", new z(new Float32Array(e), 3));
    });
  }
  addIndices(t, l) {
    const i = new Ze(l, 4);
    i.normalized = !0, t.setAttribute("indices", i);
  }
  addNormalAttribute(t, l) {
    if (!t.getAttribute("normal")) {
      const i = new Float32Array(l * 3);
      t.setAttribute("normal", new z(new Float32Array(i), 3));
    }
  }
  isAttribute(t, l) {
    return parseInt(t, 10) === l;
  }
}
class rn {
  constructor(t, l, i, e, n) {
    this.loader = t, this.boundingBox = l, this.tightBoundingBox = i, this.offset = e, this.xhrRequest = n, this.disposed = !1, this.needsUpdate = !0, this.octreeDir = "", this.hierarchyStepSize = -1, this.nodes = {}, this.numNodesLoading = 0, this.maxNumNodesLoading = 3, this.spacing = 0, this.pointAttributes = new Pi([]), this.projection = null, this.url = null;
  }
  dispose() {
    this.loader.dispose(), this.root.traverse((t) => t.dispose()), this.disposed = !0;
  }
  addNodeLoadedCallback(t) {
    this.loader.callbacks.push(t);
  }
  clearNodeLoadedCallbacks() {
    this.loader.callbacks = [];
  }
}
const Fi = 5, Tl = class extends Bt {
  constructor(s, t, l) {
    super(), this.id = Tl.idCount++, this.level = 0, this.spacing = 0, this.hasChildren = !1, this.children = [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null
    ], this.mean = new W(), this.numPoints = 0, this.loaded = !1, this.loading = !1, this.failed = !1, this.parent = null, this.oneTimeDisposeHandlers = [], this.isLeafNode = !0, this.isTreeNode = !1, this.isGeometryNode = !0, this.name = s, this.index = jl(s), this.pcoGeometry = t, this.boundingBox = l, this.tightBoundingBox = l.clone(), this.boundingSphere = l.getBoundingSphere(new st());
  }
  dispose() {
    !this.geometry || !this.parent || (this.geometry.dispose(), this.geometry = void 0, this.loaded = !1, this.oneTimeDisposeHandlers.forEach((s) => s()), this.oneTimeDisposeHandlers = []);
  }
  /**
   * Gets the url of the binary file for this node.
   */
  getUrl() {
    const s = this.pcoGeometry, t = s.loader.version, l = [s.octreeDir];
    return s.loader && t.equalOrHigher("1.5") ? (l.push(this.getHierarchyBaseUrl()), l.push(this.name)) : t.equalOrHigher("1.4") ? l.push(this.name) : t.upTo("1.3") && l.push(this.name), l.join("/");
  }
  /**
   * Gets the url of the hierarchy file for this node.
   */
  getHierarchyUrl() {
    return `${this.pcoGeometry.octreeDir}/${this.getHierarchyBaseUrl()}/${this.name}.hrc`;
  }
  /**
   * Adds the specified node as a child of the current node.
   *
   * @param child
   *    The node which is to be added as a child.
   */
  addChild(s) {
    this.children[s.index] = s, this.isLeafNode = !1, s.parent = this;
  }
  /**
   * Calls the specified callback for the current node (if includeSelf is set to true) and all its
   * children.
   *
   * @param cb
   *    The function which is to be called for each node.
   */
  traverse(s, t = !0) {
    const l = t ? [this] : [];
    let i;
    for (; (i = l.pop()) !== void 0; ) {
      s(i);
      for (const e of i.children)
        e !== null && l.push(e);
    }
  }
  load() {
    if (!this.canLoad())
      return Promise.resolve();
    this.loading = !0, this.pcoGeometry.numNodesLoading++, this.pcoGeometry.needsUpdate = !0;
    let s;
    return this.pcoGeometry.loader.version.equalOrHigher("1.5") && this.level % this.pcoGeometry.hierarchyStepSize === 0 && this.hasChildren ? s = this.loadHierachyThenPoints() : s = this.loadPoints(), s.catch((t) => {
      throw this.loading = !1, this.failed = !0, this.pcoGeometry.numNodesLoading--, t;
    });
  }
  canLoad() {
    return !this.loading && !this.loaded && !this.pcoGeometry.disposed && !this.pcoGeometry.loader.disposed && this.pcoGeometry.numNodesLoading < this.pcoGeometry.maxNumNodesLoading;
  }
  loadPoints() {
    return this.pcoGeometry.needsUpdate = !0, this.pcoGeometry.loader.load(this);
  }
  loadHierachyThenPoints() {
    return this.level % this.pcoGeometry.hierarchyStepSize !== 0 ? Promise.resolve() : Promise.resolve(this.pcoGeometry.loader.getUrl(this.getHierarchyUrl())).then((s) => this.pcoGeometry.xhrRequest(s, { mode: "cors" })).then((s) => s.arrayBuffer()).then((s) => this.loadHierarchy(this, s));
  }
  /**
   * Gets the url of the folder where the hierarchy is, relative to the octreeDir.
   */
  getHierarchyBaseUrl() {
    const s = this.pcoGeometry.hierarchyStepSize, t = this.name.substr(1), l = Math.floor(t.length / s);
    let i = "r/";
    for (let e = 0; e < l; e++)
      i += `${t.substr(e * s, s)}/`;
    return i.slice(0, -1);
  }
  // tslint:disable:no-bitwise
  loadHierarchy(s, t) {
    const l = new DataView(t), i = this.getNodeData(s.name, 0, l);
    s.numPoints = i.numPoints;
    const e = [i], n = [];
    let c = Fi;
    for (; e.length > 0; ) {
      const h = e.shift();
      let a = 1;
      for (let d = 0; d < 8 && c + 1 < t.byteLength; d++) {
        if (h.children & a) {
          const m = this.getNodeData(h.name + d, c, l);
          n.push(m), e.push(m), c += Fi;
        }
        a = a * 2;
      }
    }
    s.pcoGeometry.needsUpdate = !0;
    const Z = /* @__PURE__ */ new Map();
    Z.set(s.name, s), n.forEach((h) => this.addNode(h, s.pcoGeometry, Z)), s.loadPoints();
  }
  // tslint:enable:no-bitwise
  getNodeData(s, t, l) {
    const i = l.getUint8(t), e = l.getUint32(t + 1, !0);
    return { children: i, numPoints: e, name: s };
  }
  addNode({ name: s, numPoints: t, children: l }, i, e) {
    const n = jl(s), c = s.substring(0, s.length - 1), Z = e.get(c), h = s.length - 1, a = Ai(Z.boundingBox, n), d = new Tl(s, i, a);
    d.level = h, d.numPoints = t, d.hasChildren = l > 0, d.spacing = i.spacing / Math.pow(2, h), Z.addChild(d), e.set(s, d);
  }
};
let Ol = Tl;
Ol.idCount = 0;
function Wn(s, t, l) {
  return Promise.resolve(t(s)).then((i) => l(i, { mode: "cors" }).then((e) => e.json()).then(Gn(i, t, l)));
}
function Gn(s, t, l) {
  return (i) => {
    const { offset: e, boundingBox: n, tightBoundingBox: c } = un(i), Z = new on({
      getUrl: t,
      version: i.version,
      boundingBox: n,
      scale: i.scale,
      xhrRequest: l
    }), h = new rn(
      Z,
      n,
      c,
      e,
      l
    );
    h.url = s, h.octreeDir = i.octreeDir, h.needsUpdate = !0, h.spacing = i.spacing, h.hierarchyStepSize = i.hierarchyStepSize, h.projection = i.projection, h.offset = e, h.pointAttributes = new Pi(i.pointAttributes), console.log(h.pointAttributes);
    const a = {}, d = new Et(i.version);
    return Yn(h, i, a, d).then(() => (d.upTo("1.4") && Vn(h, i, a), h.nodes = a, h));
  };
}
function un(s) {
  const t = new W(s.boundingBox.lx, s.boundingBox.ly, s.boundingBox.lz), l = new W(s.boundingBox.ux, s.boundingBox.uy, s.boundingBox.uz), i = new K(t, l), e = i.clone(), n = t.clone();
  if (s.tightBoundingBox) {
    const { lx: c, ly: Z, lz: h, ux: a, uy: d, uz: m } = s.tightBoundingBox;
    e.min.set(c, Z, h), e.max.set(a, d, m);
  }
  return i.min.sub(n), i.max.sub(n), e.min.sub(n), e.max.sub(n), { offset: n, boundingBox: i, tightBoundingBox: e };
}
function Yn(s, t, l, i) {
  const e = "r", n = new Ol(e, s, s.boundingBox);
  return n.hasChildren = !0, n.spacing = s.spacing, i.upTo("1.5") ? n.numPoints = t.hierarchy[0][1] : n.numPoints = 0, s.root = n, l[e] = n, s.root.load();
}
function Vn(s, t, l) {
  for (let i = 1; i < t.hierarchy.length; i++) {
    const [e, n] = t.hierarchy[i], { index: c, parentName: Z, level: h } = pn(e), a = l[Z], d = Ai(a.boundingBox, c), m = new Ol(e, s, d);
    m.level = h, m.numPoints = n, m.spacing = s.spacing / Math.pow(2, m.level), l[e] = m, a.addChild(m);
  }
}
function pn(s) {
  return {
    index: jl(s),
    parentName: s.substring(0, s.length - 1),
    level: s.length - 1
  };
}
function Xn(s) {
  return s != null && s.isGeometryNode;
}
function Al(s) {
  return s != null && s.isTreeNode;
}
function Li(s) {
  this.content = [], this.scoreFunction = s;
}
Li.prototype = {
  push: function(s) {
    this.content.push(s), this.bubbleUp(this.content.length - 1);
  },
  pop: function() {
    var s = this.content[0], t = this.content.pop();
    return this.content.length > 0 && (this.content[0] = t, this.sinkDown(0)), s;
  },
  remove: function(s) {
    for (var t = this.content.length, l = 0; l < t; l++)
      if (this.content[l] == s) {
        var i = this.content.pop();
        if (l == t - 1)
          break;
        this.content[l] = i, this.bubbleUp(l), this.sinkDown(l);
        break;
      }
  },
  size: function() {
    return this.content.length;
  },
  bubbleUp: function(s) {
    for (var t = this.content[s], l = this.scoreFunction(t); s > 0; ) {
      var i = Math.floor((s + 1) / 2) - 1, e = this.content[i];
      if (l >= this.scoreFunction(e))
        break;
      this.content[i] = t, this.content[s] = e, s = i;
    }
  },
  sinkDown: function(s) {
    for (var t = this.content.length, l = this.content[s], i = this.scoreFunction(l); ; ) {
      var e = (s + 1) * 2, n = e - 1, c = null;
      if (n < t) {
        var Z = this.content[n], h = this.scoreFunction(Z);
        h < i && (c = n);
      }
      if (e < t) {
        var a = this.content[e], d = this.scoreFunction(a);
        d < (c == null ? i : h) && (c = e);
      }
      if (c == null)
        break;
      this.content[s] = this.content[c], this.content[c] = l, s = c;
    }
  }
};
class gn extends pe {
  constructor(t, l = new V(16776960)) {
    const i = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]), e = new Float32Array([
      t.min.x,
      t.min.y,
      t.min.z,
      t.max.x,
      t.min.y,
      t.min.z,
      t.max.x,
      t.min.y,
      t.max.z,
      t.min.x,
      t.min.y,
      t.max.z,
      t.min.x,
      t.max.y,
      t.min.z,
      t.max.x,
      t.max.y,
      t.min.z,
      t.max.x,
      t.max.y,
      t.max.z,
      t.min.x,
      t.max.y,
      t.max.z
    ]), n = new yt();
    n.setIndex(new z(i, 1)), n.setAttribute("position", new z(e, 3));
    const c = new ki({ color: l });
    super(n, c);
  }
}
class yn {
  constructor(t) {
    this.node = t, this.next = null, this.previous = null;
  }
}
class Rn {
  constructor(t = 1e6) {
    this.pointBudget = t, this.first = null, this.last = null, this.numPoints = 0, this.items = /* @__PURE__ */ new Map();
  }
  get size() {
    return this.items.size;
  }
  has(t) {
    return this.items.has(t.id);
  }
  /**
   * Makes the specified the most recently used item. if the list does not contain node, it will
   * be added.
   */
  touch(t) {
    if (!t.loaded)
      return;
    const l = this.items.get(t.id);
    l ? this.touchExisting(l) : this.addNew(t);
  }
  addNew(t) {
    const l = new yn(t);
    l.previous = this.last, this.last = l, l.previous && (l.previous.next = l), this.first || (this.first = l), this.items.set(t.id, l), this.numPoints += t.numPoints;
  }
  touchExisting(t) {
    t.previous ? t.next && (t.previous.next = t.next, t.next.previous = t.previous, t.previous = this.last, t.next = null, this.last = t, t.previous && (t.previous.next = t)) : t.next && (this.first = t.next, this.first.previous = null, t.previous = this.last, t.next = null, this.last = t, t.previous && (t.previous.next = t));
  }
  remove(t) {
    const l = this.items.get(t.id);
    l && (this.items.size === 1 ? (this.first = null, this.last = null) : (l.previous || (this.first = l.next, this.first.previous = null), l.next || (this.last = l.previous, this.last.next = null), l.previous && l.next && (l.previous.next = l.next, l.next.previous = l.previous)), this.items.delete(t.id), this.numPoints -= t.numPoints);
  }
  getLRUItem() {
    return this.first ? this.first.node : void 0;
  }
  freeMemory() {
    if (!(this.items.size <= 1))
      for (; this.numPoints > this.pointBudget * 2; ) {
        const t = this.getLRUItem();
        t && this.disposeSubtree(t);
      }
  }
  disposeSubtree(t) {
    const l = [t];
    t.traverse((i) => {
      i.loaded && l.push(i);
    });
    for (const i of l)
      i.dispose(), this.remove(i);
  }
}
class Ji {
  constructor(t, l, i, e) {
    this.pointCloudIndex = t, this.weight = l, this.node = i, this.parent = e;
  }
}
class pl {
  constructor() {
    this._pointBudget = Ie, this._rendererSize = new dt(), this.maxNumNodesLoading = Ce, this.features = Zn, this.lru = new Rn(this._pointBudget), this.updateVisibilityStructures = (() => {
      const t = new E(), l = new E(), i = new E();
      return (e, n) => {
        var a;
        const c = [], Z = [], h = new Li((d) => 1 / d.weight);
        for (let d = 0; d < e.length; d++) {
          const m = e[d];
          if (!m.initialized())
            continue;
          m.numVisiblePoints = 0, m.visibleNodes = [], m.visibleGeometry = [], n.updateMatrixWorld(!1);
          const b = n.matrixWorldInverse, o = m.matrixWorld;
          if (t.identity().multiply(n.projectionMatrix).multiply(b).multiply(o), c.push(new ue().setFromProjectionMatrix(t)), l.copy(o).invert(), i.identity().multiply(l).multiply(n.matrixWorld), Z.push(new W().setFromMatrixPosition(i)), m.visible && m.root !== null) {
            const r = Number.MAX_VALUE;
            h.push(new Ji(d, r, m.root));
          }
          Al(m.root) && m.hideDescendants((a = m == null ? void 0 : m.root) == null ? void 0 : a.sceneNode);
          for (const r of m.boundingBoxNodes)
            r.visible = !1;
        }
        return { frustums: c, cameraPositions: Z, priorityQueue: h };
      };
    })();
  }
  async loadPointCloud(t, l, i = (e, n) => fetch(e, n)) {
    if (t === "cloud.js")
      return await Wn(t, l, i).then((e) => new Xi(this, e));
    if (t === "metadata.json")
      return await sn(t, l, i).then((e) => new Xi(this, e));
    throw new Error("Unsupported file type");
  }
  updatePointClouds(t, l, i) {
    const e = this.updateVisibility(t, l, i);
    for (let n = 0; n < t.length; n++) {
      const c = t[n];
      c.disposed || (c.material.updateMaterial(c, c.visibleNodes, l, i), c.updateVisibleBounds(), c.updateBoundingBoxes());
    }
    return this.lru.freeMemory(), e;
  }
  static pick(t, l, i, e, n = {}) {
    return pl.picker = pl.picker || new _t(), pl.picker.pick(l, i, e, t, n);
  }
  get pointBudget() {
    return this._pointBudget;
  }
  set pointBudget(t) {
    t !== this._pointBudget && (this._pointBudget = t, this.lru.pointBudget = t, this.lru.freeMemory());
  }
  updateVisibility(t, l, i) {
    let e = 0;
    const n = [], c = [], { frustums: Z, cameraPositions: h, priorityQueue: a } = this.updateVisibilityStructures(
      t,
      l
    );
    let d = 0, m = !1, b = !1, o;
    for (; (o = a.pop()) !== void 0; ) {
      let u = o.node;
      if (e + u.numPoints > this.pointBudget)
        break;
      const Y = o.pointCloudIndex, p = t[Y], g = p.maxLevel !== void 0 ? p.maxLevel : 1 / 0;
      if (u.level > g || !Z[Y].intersectsBox(u.boundingBox) || this.shouldClip(p, u.boundingBox))
        continue;
      e += u.numPoints, p.numVisiblePoints += u.numPoints;
      const y = o.parent;
      if (Xn(u) && (!y || Al(y)))
        if (u.loaded && d < Wi)
          u = p.toTreeNode(u, y), d++;
        else if (!u.failed)
          u.loaded && d >= Wi && (m = !0), c.push(u), p.visibleGeometry.push(u);
        else {
          b = !0;
          continue;
        }
      Al(u) && (this.updateTreeNodeVisibility(p, u, n), p.visibleGeometry.push(u.geometryNode));
      const x = 0.5 * i.getSize(this._rendererSize).height * i.getPixelRatio();
      this.updateChildVisibility(
        o,
        a,
        p,
        u,
        h[Y],
        l,
        x
      );
    }
    const r = Math.min(this.maxNumNodesLoading, c.length), G = [];
    for (let u = 0; u < r; u++)
      G.push(c[u].load());
    return {
      visibleNodes: n,
      numVisiblePoints: e,
      exceededMaxLoadsToGPU: m,
      nodeLoadFailed: b,
      nodeLoadPromises: G
    };
  }
  updateTreeNodeVisibility(t, l, i) {
    this.lru.touch(l.geometryNode);
    const e = l.sceneNode;
    e.visible = !0, e.material = t.material, e.updateMatrix(), e.matrixWorld.multiplyMatrices(t.matrixWorld, e.matrix), i.push(l), t.visibleNodes.push(l), this.updateBoundingBoxVisibility(t, l);
  }
  updateChildVisibility(t, l, i, e, n, c, Z) {
    const h = e.children;
    for (let a = 0; a < h.length; a++) {
      const d = h[a];
      if (d === null)
        continue;
      const m = d.boundingSphere, b = m.center.distanceTo(n), o = m.radius;
      let r = 0;
      if (c.type === Di) {
        const p = c.fov * Math.PI / 180, g = Math.tan(p / 2);
        r = Z / (g * b);
      } else {
        const Y = c;
        r = 2 * Z / (Y.top - Y.bottom);
      }
      const G = o * r;
      if (G < i.minNodePixelSize)
        continue;
      const u = b < o ? Number.MAX_VALUE : G + 1 / b;
      l.push(new Ji(t.pointCloudIndex, u, d, e));
    }
  }
  updateBoundingBoxVisibility(t, l) {
    if (t.showBoundingBox && !l.boundingBoxNode) {
      const i = new gn(l.boundingBox);
      i.matrixAutoUpdate = !1, t.boundingBoxNodes.push(i), l.boundingBoxNode = i, l.boundingBoxNode.matrix.copy(t.matrixWorld);
    } else
      t.showBoundingBox && l.boundingBoxNode ? (l.boundingBoxNode.visible = !0, l.boundingBoxNode.matrix.copy(t.matrixWorld)) : !t.showBoundingBox && l.boundingBoxNode && (l.boundingBoxNode.visible = !1);
  }
  shouldClip(t, l) {
    const i = t.material;
    if (i.numClipBoxes === 0 || i.clipMode !== gt.CLIP_OUTSIDE)
      return !1;
    const e = l.clone();
    t.updateMatrixWorld(!0), e.applyMatrix4(t.matrixWorld);
    const n = i.clipBoxes;
    for (let c = 0; c < n.length; c++) {
      const Z = n[c].matrix, h = new K(
        new W(-0.5, -0.5, -0.5),
        new W(0.5, 0.5, 0.5)
      ).applyMatrix4(Z);
      if (e.intersectsBox(h))
        return !1;
    }
    return !0;
  }
}
export {
  xn as BlurMaterial,
  X as PointCloudMaterial,
  Xi as PointCloudOctree,
  pl as Potree,
  Ji as QueueItem,
  Et as Version
};
//# sourceMappingURL=potree-loader.es.js.map
