import GumballMachine from '../GumballMachine';
import { IState } from './interface';

class NoQuarterState implements IState {
  gumballMachine: GumballMachine;

  constructor(gumballMachine: GumballMachine) {
    this.gumballMachine = gumballMachine;
  }

  insertQuarter() {
    console.log('동전을 넣으셨습니다.');
    this.gumballMachine.setState(this.gumballMachine.hasQuarterState);
  }

  ejectQuarter() {
    console.log('동전을 넣어주세요.');
  }

  turnCrank() {
    console.log('동전을 넣어주세요.');
  }

  dispense() {
    console.log('동전을 넣어주세요.');
  }
}

export default NoQuarterState;
