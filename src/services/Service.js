export class Service {
  onChangeCallbacks = [];

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
}
