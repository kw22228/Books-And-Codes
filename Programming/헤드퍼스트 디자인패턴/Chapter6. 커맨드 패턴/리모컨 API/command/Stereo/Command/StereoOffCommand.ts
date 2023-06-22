import { ICommand } from '../../../interface';
import Stereo from '../Receiver/Stereo';

class StereoOffCommand implements ICommand {
  stereo: Stereo;

  constructor(stereo: Stereo) {
    this.stereo = stereo;
  }

  execute(): string {
    return this.stereo.off();
  }

  undo(): string {
    return this.stereo.on();
  }
}

export default StereoOffCommand;
