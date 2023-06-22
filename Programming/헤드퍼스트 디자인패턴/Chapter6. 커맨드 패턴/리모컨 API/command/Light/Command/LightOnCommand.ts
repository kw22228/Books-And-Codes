import { ICommand } from '../../../interface';
import Light from '../Receiver/Light';

class LightOnCommand implements ICommand {
  light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  execute(): string {
    return this.light.on();
  }

  undo(): string {
    return this.light.off();
  }
}

export default LightOnCommand;
