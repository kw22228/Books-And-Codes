import { ICommand } from '../../interface';
import Light from '../Light';

class LightOnCommand implements ICommand {
  light: Light;
  constructor(light: Light) {
    this.light = light;
  }
  execute(): string {
    return this.light.on();
  }
}

export default LightOnCommand;
