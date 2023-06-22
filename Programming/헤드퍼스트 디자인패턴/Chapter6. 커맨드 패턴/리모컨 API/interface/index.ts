import { CeilingFanSpeed, RemoteControlKey } from '../util/constant';

export interface ICommand {
  execute(): string;
  undo(): string;
}
export type TRemoteControlKey = (typeof RemoteControlKey)[keyof typeof RemoteControlKey];
export type TCeilingFanSpeed = (typeof CeilingFanSpeed)[keyof typeof CeilingFanSpeed];
