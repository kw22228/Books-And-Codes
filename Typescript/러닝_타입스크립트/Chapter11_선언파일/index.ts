import { Character } from './types';
import { value } from 'my-example-lib';
import styles from './styles/product.module.css';

export const character: Character = {
  catchphrase: 'Yee',
  name: 'sandy',
};

/** declare */
declare const myGlobalValue: string;
console.log(myGlobalValue);

export function logVersion() {
  console.log(version);
}

/** window 전역객체 */
export function logWindowVersion() {
  console.log(window.myVersion);
  window.alert('hi');
}

console.log(kjw);
console.log(value);

styles.anyClassName;

export {};
