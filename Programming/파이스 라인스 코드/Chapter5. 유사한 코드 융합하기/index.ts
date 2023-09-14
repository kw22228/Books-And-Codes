/** 유사 클래스 통합 */
interface TrafficColor {
  color(): string;
  check(car: any): void;
}
class Red implements TrafficColor {
  constructor(private col: string) {}
  color() {
    return this.col;
  }
  check(car: any) {
    if (this.color() === 'red') car.stop();
    else if (this.color() === 'yellow') car.stop();
    else if (this.color() === 'green') car.drive();
  }
}

function nextColor(t: TrafficColor) {
  if (t.color() === 'red') return new Red('green');
  if (t.color() === 'green') return new Red('yellow');
  if (t.color() === 'yellow') return new Red('red');
}
/** 유사 클래스 통합 */

/** if 문 결합 */

/** if 문 결합 */
