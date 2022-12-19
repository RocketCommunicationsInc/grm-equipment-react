import { randInt } from '../util/util';
export class Service {
  _childClass;
  onChangeCallbacks = [];
  genTimeout;
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

  set childClass(val) {
    this._childClass = val;
    this._childClass.lastId = 1;
  }

  startGeneration(minTime, maxTime) {
    this.genFutureItem(minTime, maxTime);
  }

  stopGeneration() {
    clearTimeout(this.genTimeout);
  }

  generateItem(blueprint) {
    if (!blueprint) {
      const bp = this.blueprints;
      blueprint = bp[randInt(0, bp.length - 1)];
    }
    const item = { ...blueprint };
    item.id = this._childClass.lastId++;
    this.data.push(item);
    return item;
  }

  generateItems(num) {
    let items = [];
    for (let i = 0; i < num; i++) {
      this.generateItem();
    }
    this.notifyChange();
    return items;
  }

  genFutureItem(minTime = 1000, maxTime = 20000) {
    this.genTimeout = setTimeout(() => {
      this.generateItem();
      this.genFutureItem(minTime, maxTime);
      this.notifyChange();
    }, randInt(minTime, maxTime));
  }

  removeItemsById(ids) {
    this.data = this.data.filter((item) => !ids.includes(item.id));
    this.notifyChange();
  }
}
