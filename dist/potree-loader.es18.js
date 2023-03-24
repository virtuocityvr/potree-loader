import { Object3D as t } from "./potree-loader.es6.js";
class e extends t {
  constructor() {
    super(...arguments), this.root = null;
  }
  initialized() {
    return this.root !== null;
  }
}
export {
  e as PointCloudTree
};
//# sourceMappingURL=potree-loader.es18.js.map
