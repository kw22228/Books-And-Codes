import RemoteControl from './invoke/RemoteControl';
import { RemoteControlKey } from './util/constant';

import { Light, Stereo } from './command/receivers';
import {
  LightOffCommand,
  LightOnCommand,
  StereoOffCommand,
  StereoOnWithCdCommand,
} from './command/commands';

const remoteControl = new RemoteControl();

const light = new Light();
const lightOn = new LightOnCommand(light);
const lightOff = new LightOffCommand(light);

const stereo = new Stereo();
const stereoOnWithCd = new StereoOnWithCdCommand(stereo);
const stereoOff = new StereoOffCommand(stereo);

remoteControl.setCommand(RemoteControlKey.Light, lightOn, lightOff);
remoteControl.setCommand(RemoteControlKey.Stereo, stereoOnWithCd, stereoOff);

/** Light */
console.log(remoteControl.onButtonWasPushed(RemoteControlKey.Light));
console.log(remoteControl.undoButtonWasPushed());

console.log(remoteControl.offButtonWasPushed(RemoteControlKey.Light));
console.log(remoteControl.undoButtonWasPushed());

/** Stereo */
console.log(remoteControl.onButtonWasPushed(RemoteControlKey.Stereo));
console.log(remoteControl.undoButtonWasPushed());

console.log(remoteControl.offButtonWasPushed(RemoteControlKey.Stereo));
console.log(remoteControl.undoButtonWasPushed());
