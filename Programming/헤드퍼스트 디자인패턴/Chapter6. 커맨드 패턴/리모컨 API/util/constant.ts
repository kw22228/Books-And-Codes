export const RemoteControlKey = {
  Light: 'light',
  Stereo: 'stereo',
} as const;
export type TRemoteControlKey = (typeof RemoteControlKey)[keyof typeof RemoteControlKey];
