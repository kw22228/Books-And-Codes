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
import MacroCommand from './command/Macro/MacroCommand';

const light = new Light();
const lightOn = new LightOnCommand(light);
const lightOff = new LightOffCommand(light);

const stereo = new Stereo();
const stereoOnWithCd = new StereoOnWithCdCommand(stereo);
const stereoOff = new StereoOffCommand(stereo);

const ceilingFan = new CeilingFan('서울');
const ceilingFanHigh = new CeilingFanHighCommand(ceilingFan);
const ceilingFanOff = new CeilingFanOffCommand(ceilingFan);

const macroOn = new MacroCommand([lightOn, stereoOnWithCd, ceilingFanHigh]);
const marcoOff = new MacroCommand([lightOff, stereoOff, ceilingFanOff]);

const remoteControl = new RemoteControl();
remoteControl.setCommand(RemoteControlKey.Macro, macroOn, marcoOff);

console.log(remoteControl.onButtonWasPushed(RemoteControlKey.Macro));
console.log(remoteControl.undoButtonWasPushed());

console.log(remoteControl.offButtonWasPushed(RemoteControlKey.Macro));
