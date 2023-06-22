import { ICommand } from '../../../interface';
import Light from '../Receiver/Light';

class LightOffCommand implements ICommand {
  light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  execute(): string {
    return this.light.off();
  }

  undo(): string {
    return this.light.on();
  }
}

export default LightOffCommand;
