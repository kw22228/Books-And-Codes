import GumballMachine from '../GumballMachine';
import { IState } from './interface';

class HasQuarterState implements IState {
  gumballMachine: GumballMachine;

  constructor(gumballMachine: GumballMachine) {
    this.gumballMachine = gumballMachine;
  }

  insertQuarter() {
    console.log('동전은 한 개만 넣어 주세요.');
  }

  ejectQuarter() {
    console.log('동전이 반환 됩니다.');
    this.gumballMachine.setState(this.gumballMachine.noQuarterState);
  }

  turnCrank() {
    console.log('손잡이를 돌리셨습니다.');
    this.gumballMachine.setState(this.gumballMachine.soldState);
  }

  dispense() {
    console.log('알맹이를 내보낼 수 없습니다.');
  }
}

export default HasQuarterState;
