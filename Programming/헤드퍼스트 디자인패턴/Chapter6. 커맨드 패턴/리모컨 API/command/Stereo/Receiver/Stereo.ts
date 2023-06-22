class Stereo {
  cd: string;
  dvd: string;
  radio: string;
  volume: number;

  on() {
    return '켜짐';
  }
  off() {
    return '꺼짐';
  }

  setCd(cd: string) {
    this.cd = cd;
  }
  setDvd(dvd: string) {
    this.dvd = dvd;
  }
  setRadio(radio: string) {
    this.radio = radio;
  }
  setVolume(volume: number) {
    this.volume = volume;
  }
}

export default Stereo;
