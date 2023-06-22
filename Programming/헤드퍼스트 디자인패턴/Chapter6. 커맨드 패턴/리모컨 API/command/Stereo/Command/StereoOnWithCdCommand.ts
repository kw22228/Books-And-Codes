import { ICommand } from '../../../interface';
import Stereo from '../Receiver/Stereo';

class StereoOnWithCDCommand implements ICommand {
  stereo: Stereo;

  constructor(stereo: Stereo) {
    this.stereo = stereo;
  }

  execute(): string {
    this.stereo.setCd('something..');
    this.stereo.setVolume(11);

    return this.stereo.on();
  }

  undo(): string {
    return this.stereo.off();
  }
}

export default StereoOnWithCDCommand;
