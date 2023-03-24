var S = /* @__PURE__ */ ((T) => (T[T.POSITION_CARTESIAN = 0] = "POSITION_CARTESIAN", T[T.COLOR_PACKED = 1] = "COLOR_PACKED", T[T.COLOR_FLOATS_1 = 2] = "COLOR_FLOATS_1", T[T.COLOR_FLOATS_255 = 3] = "COLOR_FLOATS_255", T[T.NORMAL_FLOATS = 4] = "NORMAL_FLOATS", T[T.FILLER = 5] = "FILLER", T[T.INTENSITY = 6] = "INTENSITY", T[T.CLASSIFICATION = 7] = "CLASSIFICATION", T[T.NORMAL_SPHEREMAPPED = 8] = "NORMAL_SPHEREMAPPED", T[T.NORMAL_OCT16 = 9] = "NORMAL_OCT16", T[T.NORMAL = 10] = "NORMAL", T))(S || {});
const A = {
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
function _(T, O, E) {
  return {
    name: T,
    type: O,
    numElements: E,
    byteSize: E * O.size
  };
}
const s = _(
  1,
  A.DATA_TYPE_INT8,
  4
), R = {
  POSITION_CARTESIAN: _(
    0,
    A.DATA_TYPE_FLOAT,
    3
  ),
  RGBA_PACKED: s,
  COLOR_PACKED: s,
  RGB_PACKED: _(
    1,
    A.DATA_TYPE_INT8,
    3
  ),
  NORMAL_FLOATS: _(
    4,
    A.DATA_TYPE_FLOAT,
    3
  ),
  FILLER_1B: _(
    5,
    A.DATA_TYPE_UINT8,
    1
  ),
  INTENSITY: _(
    6,
    A.DATA_TYPE_UINT16,
    1
  ),
  CLASSIFICATION: _(
    7,
    A.DATA_TYPE_UINT8,
    1
  ),
  NORMAL_SPHEREMAPPED: _(
    8,
    A.DATA_TYPE_UINT8,
    2
  ),
  NORMAL_OCT16: _(
    9,
    A.DATA_TYPE_UINT8,
    2
  ),
  NORMAL: _(10, A.DATA_TYPE_FLOAT, 3)
};
class N {
  constructor(O = []) {
    this.attributes = [], this.byteSize = 0, this.size = 0;
    for (let E = 0; E < O.length; E++) {
      const L = O[E], I = R[L];
      this.attributes.push(I), this.byteSize += I.byteSize, this.size++;
    }
  }
  add(O) {
    this.attributes.push(O), this.byteSize += O.byteSize, this.size++;
  }
  hasColors() {
    return this.attributes.find(D) !== void 0;
  }
  hasNormals() {
    return this.attributes.find(C) !== void 0;
  }
}
function D({ name: T }) {
  return T === 1;
}
function C({ name: T }) {
  return T === 8 || T === 4 || T === 10 || T === 9;
}
export {
  R as POINT_ATTRIBUTES,
  A as POINT_ATTRIBUTE_TYPES,
  S as PointAttributeName,
  N as PointAttributes
};
//# sourceMappingURL=potree-loader.es22.js.map
