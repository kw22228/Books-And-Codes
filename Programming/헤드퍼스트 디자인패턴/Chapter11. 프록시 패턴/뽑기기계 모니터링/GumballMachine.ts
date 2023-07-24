class GumballMachine {
  private _location: string;
  private _count: number;

  constructor(location: string, count: number) {
    this._location = location;
    this._count = count;
  }

  get location() {
    return this._location;
  }
  get count() {
    return this._count;
  }
}

export default GumballMachine;
