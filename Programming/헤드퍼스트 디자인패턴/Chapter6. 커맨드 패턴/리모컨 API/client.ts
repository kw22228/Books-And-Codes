import RemoteControl from './invoke/RemoteControl';
import { RemoteControlKey } from './util/constant';

import { CeilingFan, Light, Stereo } from './command/receivers';
import {
  CeilingFanHighCommand,
  CeilingFanOffCommand,
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

const ceilingFan = new CeilingFan('서울');
const ceilingFanHigh = new CeilingFanHighCommand(ceilingFan);
const ceilingFanOff = new CeilingFanOffCommand(ceilingFan);

remoteControl.setCommand(RemoteControlKey.Light, lightOn, lightOff);
remoteControl.setCommand(RemoteControlKey.Stereo, stereoOnWithCd, stereoOff);
remoteControl.setCommand(RemoteControlKey.CeilingFan, ceilingFanHigh, ceilingFanOff);

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

/** CeilingFan */
console.log(remoteControl.onButtonWasPushed(RemoteControlKey.CeilingFan));
console.log(remoteControl.undoButtonWasPushed());

console.log(remoteControl.offButtonWasPushed(RemoteControlKey.CeilingFan));
console.log(remoteControl.undoButtonWasPushed());
