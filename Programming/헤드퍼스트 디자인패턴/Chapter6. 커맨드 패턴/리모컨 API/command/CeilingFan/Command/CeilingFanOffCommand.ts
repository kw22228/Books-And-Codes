import { ICommand } from '../../../interface';
import { CeilingFanSpeed } from '../../../util/constant';
import CeilingFan from '../Receiver/CeilingFan';

class CeilingFanOffCommand implements ICommand {
  ceilingFan: CeilingFan;
  prevSpeed: number;

  constructor(ceilingFan: CeilingFan) {
    this.ceilingFan = ceilingFan;
  }

  execute(): string {
    this.prevSpeed = this.ceilingFan.getSpeed();
    return this.ceilingFan.off();
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

export default CeilingFanOffCommand;
