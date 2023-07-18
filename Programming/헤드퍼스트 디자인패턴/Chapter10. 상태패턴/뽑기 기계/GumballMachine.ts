import HasQuarterState from './state/HasQuarterState';
import NoQuarterState from './state/NoQuarterState';
import SoldOutState from './state/SoldOutState';
import SoldState from './state/SoldState';
import { IState } from './state/interface';

class GumballMachine {
  _soldOutState: IState;
  _noQuarterState: IState;
  _hasQuarterState: IState;
  _soldState: IState;

  state: IState;
  count = 0;

  constructor(numberGumballs: number) {
    this._soldOutState = new SoldOutState(this);
    this._noQuarterState = new NoQuarterState(this);
    this._hasQuarterState = new HasQuarterState(this);
    this._soldState = new SoldState(this);

    this.count = numberGumballs;
    if (numberGumballs > 0) {
      this.state = this._noQuarterState;
    } else {
      this.state = this._soldOutState;
    }
  }

  get soldOutState() {
    return this._soldOutState;
  }
  get noQuarterState() {
    return this._noQuarterState;
  }
  get hasQuarterState() {
    return this._hasQuarterState;
  }
  get soldState() {
    return this._soldState;
  }

  insertQuarter() {
    this.state.insertQuarter();
  }

  ejectQuarter() {
    this.state.ejectQuarter();
  }

  turnCrank() {
    this.state.turnCrank();
  }

  setState(state: IState) {
    this.state = state;
  }

  releaseBall() {
    console.log('알맹이를 내보내고 있습니다.');
    if (this.count > 0) this.count--;
  }
}

export default GumballMachine;
