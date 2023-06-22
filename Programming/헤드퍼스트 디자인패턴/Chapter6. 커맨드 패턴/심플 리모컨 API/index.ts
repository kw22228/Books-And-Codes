import SimpleRemoteControl from './command';
import GarageDoorOpenCommand from './GarageDoor/command/GarageDoorOpenCommand';
import GarageDoor from './GarageDoor/GarageDoor';
import { Light, LightOnCommand } from './Light';

const remote = new SimpleRemoteControl();
remote.setCommand(new LightOnCommand(new Light()));
const lightActive = remote.buttonWasPressed();
console.log(lightActive);

remote.setCommand(new GarageDoorOpenCommand(new GarageDoor()));
const garageActive = remote.buttonWasPressed();
console.log(garageActive);
