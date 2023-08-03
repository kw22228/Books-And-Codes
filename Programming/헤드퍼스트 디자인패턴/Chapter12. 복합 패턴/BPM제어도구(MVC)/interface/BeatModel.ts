import { BPMObserver, BeatObserver, IBeatModel } from './index';

class BeatModel implements IBeatModel, Runnable {
  beatObservers: BeatObserver[] = [];
  bmpObservers: BPMObserver[] = [];
  bpm = 90;
  thread: any;
  stop = false;
  clip;

  set BPM(bpm: number) {
    this.bpm = bpm;
  }
  get BPM() {
    return this.bpm;
  }

  initialize(): void {}

  on(): void {
    this.bpm = 90;
  }
  off(): void {}

  run() {}
}
