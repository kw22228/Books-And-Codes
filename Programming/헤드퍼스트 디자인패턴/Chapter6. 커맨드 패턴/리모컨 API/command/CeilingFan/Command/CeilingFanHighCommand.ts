import { ICommand } from '../../../interface';
import CeilingFan from '../Receiver/CeilingFan';
import { CeilingFanSpeed } from '../../../util/constant';

class CeilingFanHighCommand implements ICommand {
  ceilingFan: CeilingFan;
  prevSpeed: number;

  constructor(ceilingFan: CeilingFan) {
    this.ceilingFan = ceilingFan;
  }

  execute(): string {
    this.prevSpeed = this.ceilingFan.getSpeed();
    return this.ceilingFan.high();
  }

  undo(): string {
    return this.prevSpeed === CeilingFanSpeed.HIGH
      ? this.ceilingFan.high()
      : this.prevSpeed === CeilingFanSpeed.MEDIUM
      ? this.ceilingFan.medium()
      : this.prevSpeed === CeilingFanSpeed.LOW
      ? this.ceilingFan.low()
      : this.prevSpeed === CeilingFanSpeed.OFF
      ? this.ceilingFan.off()
      : '';
  }
}

export default CeilingFanHighCommand;
