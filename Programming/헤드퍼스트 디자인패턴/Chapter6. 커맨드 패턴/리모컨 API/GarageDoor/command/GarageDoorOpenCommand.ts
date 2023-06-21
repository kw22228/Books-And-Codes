import { ICommand } from '../../interface';
import GarageDoor from '../GarageDoor';

class GarageDoorOpenCommand implements ICommand {
  garageDoor: GarageDoor;

  constructor(garageDoor: GarageDoor) {
    this.garageDoor = garageDoor;
  }

  execute(): string {
    return `${this.garageDoor.up()}, ${this.garageDoor.lightOn()}`;
  }
}

export default GarageDoorOpenCommand;
