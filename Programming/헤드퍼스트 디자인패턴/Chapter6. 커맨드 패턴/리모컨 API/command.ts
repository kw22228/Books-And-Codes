import { ICommand } from './interface';

class SimpleRemoteControl {
  slot: ICommand;

  constructor() {}

  setCommand(command: ICommand) {
    this.slot = command;
  }

  buttonWasPressed() {
    return this.slot.execute();
  }
}

export default SimpleRemoteControl;
