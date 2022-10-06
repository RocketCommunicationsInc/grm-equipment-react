export class Service {
  onChangeCallbacks = [];

  // constructor(data) {
  //   this.data = data;
  // }

  onChange(cb) {
    this.onChangeCallbacks.push(cb);
    // console.log('registering callback..', this.onChangeCallbacks);
  }
  onChangeRemove(_cb) {
    this.onChangeCallbacks = this.onChangeCallbacks.filter(
      (cb) => !Object.is(_cb, cb)
    );
    // console.log('removing callback..', this.onChangeCallbacks);
  }
  notifyChange() {
    this.onChangeCallbacks.forEach((cb) => {
      cb(this.data);
    });
  }
}
