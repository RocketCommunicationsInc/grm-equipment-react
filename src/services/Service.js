import { randInt } from '../util/util';
export class Service {
  onChangeCallbacks = []; //todo: make private
  #genTimeout;
  static #lastId = 1;
  data = [];
  blueprints = [];

  onChange(cb) {
    this.onChangeCallbacks.push(cb);
  }

  removeOnChange(_cb) {
    this.onChangeCallbacks = this.onChangeCallbacks.filter(
      (cb) => !Object.is(_cb, cb)
    );
  }

  notifyChange() {
    this.onChangeCallbacks.forEach((cb) => {
      cb(this.data);
    });
  }

  startGeneration() {
    this.genFutureItem();
  }

  stopGeneration() {
    clearTimeout(this.#genTimeout);
  }

  generateItem(blueprint) {
    if (!blueprint) {
      const bp = this.blueprints;
      blueprint = bp[randInt(0, bp.length - 1)];
    }
    const item = { ...blueprint };
    item.id = Service.#lastId++;
    this.data.push(item);
    return item;
  }

  genFutureItem(minTime = 1000, maxTime = 20000) {
    this.#genTimeout = setTimeout(() => {
      this.generateItem();
      this.genFutureItem(minTime, maxTime);
      this.notifyChange();
    }, randInt(minTime, maxTime));
  }
}
