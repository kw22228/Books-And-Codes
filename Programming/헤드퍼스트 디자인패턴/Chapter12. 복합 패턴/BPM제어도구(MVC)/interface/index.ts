export interface IBeatModel {
  initialize(): void;
  on(): void;
  off(): void;

  set BPM(bpm: number);
  get BPM();

  registerObserver(o: BeatObserver | BPMObserver): void;
  removeObserver(o: BeatObserver | BPMObserver): void;
}

export interface BeatObserver {}
export interface BPMObserver {}
