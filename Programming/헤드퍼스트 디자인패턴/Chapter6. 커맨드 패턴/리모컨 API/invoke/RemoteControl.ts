import NoCommand from '../command/NoCommand';
import { ICommand } from '../interface/index';
import { TRemoteControlKey } from '../util/constant';

class RemoteControl {
  onCommands: Map<string, ICommand>;
  offCommands: Map<string, ICommand>;
  undoCommand: ICommand;

  constructor() {
    this.onCommands = new Map();
    this.offCommands = new Map();
  }

  setCommand(key: TRemoteControlKey, onCommand: ICommand, offCommand: ICommand) {
    this.onCommands.set(key, onCommand);
    this.offCommands.set(key, offCommand);
  }

  onButtonWasPushed(key: TRemoteControlKey) {
    if (this.onCommands.has(key)) this.undoCommand = this.onCommands.get(key) as ICommand;
    return this.onCommands.get(key)?.execute();
  }

  offButtonWasPushed(key: TRemoteControlKey) {
    if (this.onCommands.has(key)) this.undoCommand = this.onCommands.get(key) as ICommand;

    return this.offCommands.get(key)?.execute();
  }

  undoButtonWasPushed() {
    return this.undoCommand.undo();
  }

  toString(): string {
    const strArr: string[] = [];

    for (const onCommand of this.onCommands) {
      console.log(onCommand);
    }
    return strArr.join(' ');
  }
}

export default RemoteControl;
