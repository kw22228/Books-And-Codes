import { Person } from './interface';

class PersonImpl implements Person {
  _name: string;
  _gender: string;
  _interests: string;
  _rating: number;
  ratingCount = 0;

  get name() {
    return this._name;
  }
  get gender() {
    return this._gender;
  }
  get interests() {
    return this._interests;
  }
  get geekRating() {
    if (this.ratingCount === 0) return 0;
    return this._rating / this.ratingCount;
  }

  set name(name: string) {
    this._name = name;
  }
  set gender(gender: string) {
    this._gender = gender;
  }
  set interests(interests: string) {
    this._interests = interests;
  }
  set geekRating(rating: number) {
    this._rating += rating;
    this.ratingCount++;
  }
}
