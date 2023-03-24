const T = {
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
let P = 0;
for (let _ in T)
  T[P] = T[_], P++;
class A {
  constructor(t, e, n, E = [1 / 0, -1 / 0]) {
    this.name = t, this.type = e, this.numElements = n, this.range = E, this.byteSize = this.numElements * this.type.size, this.description = "";
  }
}
const i = {
  POSITION_CARTESIAN: new A("POSITION_CARTESIAN", T.DATA_TYPE_FLOAT, 3),
  RGBA_PACKED: new A("COLOR_PACKED", T.DATA_TYPE_INT8, 4),
  COLOR_PACKED: new A("COLOR_PACKED", T.DATA_TYPE_INT8, 4),
  RGB_PACKED: new A("COLOR_PACKED", T.DATA_TYPE_INT8, 3),
  NORMAL_FLOATS: new A("NORMAL_FLOATS", T.DATA_TYPE_FLOAT, 3),
  INTENSITY: new A("INTENSITY", T.DATA_TYPE_UINT16, 1),
  CLASSIFICATION: new A("CLASSIFICATION", T.DATA_TYPE_UINT8, 1),
  NORMAL_SPHEREMAPPED: new A("NORMAL_SPHEREMAPPED", T.DATA_TYPE_UINT8, 2),
  NORMAL_OCT16: new A("NORMAL_OCT16", T.DATA_TYPE_UINT8, 2),
  NORMAL: new A("NORMAL", T.DATA_TYPE_FLOAT, 3),
  RETURN_NUMBER: new A("RETURN_NUMBER", T.DATA_TYPE_UINT8, 1),
  NUMBER_OF_RETURNS: new A("NUMBER_OF_RETURNS", T.DATA_TYPE_UINT8, 1),
  SOURCE_ID: new A("SOURCE_ID", T.DATA_TYPE_UINT16, 1),
  INDICES: new A("INDICES", T.DATA_TYPE_UINT32, 1),
  SPACING: new A("SPACING", T.DATA_TYPE_FLOAT, 1),
  GPS_TIME: new A("GPS_TIME", T.DATA_TYPE_DOUBLE, 1)
};
class D {
  // pointAttributes will be a list of strings
  constructor(t, e = [], n = 0, E = 0, I = []) {
    if (this.attributes = e, this.byteSize = n, this.size = E, this.vectors = I, t != null)
      for (let s = 0; s < t.length; s++) {
        let O = t[s], N = i[O];
        this.attributes.push(N), this.byteSize += N.byteSize, this.size++;
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
      let e = this.attributes[t];
      if (e === i.NORMAL_SPHEREMAPPED || e === i.NORMAL_FLOATS || e === i.NORMAL || e === i.NORMAL_OCT16)
        return !0;
    }
    return !1;
  }
}
export {
  i as POINT_ATTRIBUTES,
  A as PointAttribute,
  T as PointAttributeTypes,
  D as PointAttributes
};
//# sourceMappingURL=potree-loader.es33.js.map
