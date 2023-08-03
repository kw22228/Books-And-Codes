import { Quackable } from '../interface/index';
import Goose from './Goose';

class GooseAdapter implements Quackable {
  goose: Goose;

  constructor(goose: Goose) {
    this.goose = goose;
  }

  quack(): void {
    this.goose.honk();
  }
}

export default GooseAdapter;
