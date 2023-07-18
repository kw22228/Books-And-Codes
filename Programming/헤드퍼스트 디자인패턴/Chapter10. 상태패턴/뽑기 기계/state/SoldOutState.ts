import GumballMachine from '../GumballMachine';
import { IState } from './interface';

class SoldOutState implements IState {
  gumballMachine: GumballMachine;

  constructor(gumballMachine: GumballMachine) {
    this.gumballMachine = gumballMachine;
  }

  insertQuarter() {
    console.log('매진 되었습니다.');
  }

  ejectQuarter() {
    console.log('동전을 넣지 않았습니다.');
  }

  turnCrank() {
    console.log('매진 되었습니다.');
  }

  dispense() {
    console.log('알맹이를 내보낼 수 없습니다.');
  }
}

export default SoldOutState;
