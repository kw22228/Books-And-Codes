import { CeilingFanSpeed } from '../../../util/constant';

class CeilingFan {
  location: string;
  speed: number;

  constructor(location: string) {
    this.location = location;
    this.speed = CeilingFanSpeed.OFF;
  }

  high() {
    this.speed = CeilingFanSpeed.HIGH;
    return 'high';
  }

  medium() {
    this.speed = CeilingFanSpeed.MEDIUM;
    return 'medium';
  }

  low() {
    this.speed = CeilingFanSpeed.LOW;
    return 'low';
  }

  off() {
    this.speed = CeilingFanSpeed.OFF;
    return 'off';
  }

  getSpeed() {
    return this.speed;
  }
}

export default CeilingFan;
