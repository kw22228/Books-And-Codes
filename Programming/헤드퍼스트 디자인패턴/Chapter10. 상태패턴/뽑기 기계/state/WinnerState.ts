import GumballMachine from '../GumballMachine';
import { IState } from './interface';

class WinnverState implements IState {
  gumballMachine: GumballMachine;

  constructor(gumballMachine: GumballMachine) {
    this.gumballMachine = gumballMachine;
  }

  insertQuarter() {
    console.log('알맹이를 내보내고 있습니다.');
  }

  ejectQuarter() {
    console.log('이미 알맹이를 뽑으셨습니다.');
  }

  turnCrank() {
    console.log('손잡이는 한번만 돌려주세요.');
  }

  dispense() {
    this.gumballMachine.releaseBall();
    if (this.gumballMachine.count === 0) {
      this.gumballMachine.setState(this.gumballMachine.soldOutState);
    } else {
      this.gumballMachine.releaseBall();
      console.log('축하합니다. 알맹이를 하나 더 받으실 수 있습니다.');

      if (this.gumballMachine.count > 0) {
        this.gumballMachine.setState(this.gumballMachine.noQuarterState);
      } else {
        console.log('더 이상 알맹이가 없습니다.');
        this.gumballMachine.setState(this.gumballMachine.soldOutState);
      }
    }
  }
}

export default WinnverState;
