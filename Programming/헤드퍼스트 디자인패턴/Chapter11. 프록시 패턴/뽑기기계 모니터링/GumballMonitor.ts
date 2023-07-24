import GumballMachine from './GumballMachine';

class GumballMonitor {
  machine: GumballMachine;

  constructor(machine: GumballMachine) {
    this.machine = machine;
  }

  report() {
    console.log(`뽑기 기계 위치: ${this.machine.location}`);
    console.log(`뽑기 재고: ${this.machine.count}`);
  }
}

export default GumballMonitor;
