import { ICommand } from '../../interface';

class MacroCommand implements ICommand {
  commands: ICommand[];

  constructor(commands: ICommand[]) {
    this.commands = commands;
  }

  execute(): string {
    return this.commands.map(command => command.execute()).join(' ');
  }

  undo(): string {
    return this.commands.map(command => command.undo()).join(' ');
  }
}

export default MacroCommand;
