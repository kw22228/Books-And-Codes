/** ECMAScript 모듈 사용하기 */
// CommonJS
const bCommonJS = require('./b');
console.log(bCommonJS.name);

// ESM
import * as bESM from './b';
console.log(bESM.name);
/** ECMAScript 모듈 사용하기 */

/** 프로로타입 대신 클래스 사용하기 */
// 생성자 함수
function Person(this: any, first, last) {
  this.first = first;
  this.last = last;
}
Person.prototype.getName = function () {
  return this.first + ' ' + this.last;
};
const person = new Person('kim', 'jaewon');
console.log(person.getName());

class PersonCls {
  first: string;
  last: string;

  constructor(first: string, last: string) {
    this.first = first;
    this.last = last;
  }

  getName(this: PersonCls) {
    return this.first + ' ' + this.last;
  }
}
const personCls = new PersonCls('kim', 'jaewon');
console.log(personCls.getName());
/** 프로로타입 대신 클래스 사용하기 */

const obj = {
  props: 'props',
};

const { props, a = 'default' } = obj;
console.log(props, a);

/////////////////////////////////////////////////////////////////

function countWords(text: string) {
  const counts: { [word: string]: number } = {};
  for (const word of text.split(/[\s,.]+/)) {
    counts[word] = 1 + (counts[word] || 0);
  }
  return counts;
}
console.log(countWords('Objects have a constructor'));
// constructor의 초깃값은 undefined가 아니라 Object.prototype에 있는 생성자 함수이다. 그래서 1function Object() .... 로 나오고있음.

/** 해결법 (Map을 사용) */
function countWordsMap(text: string) {
  const counts = new Map<string, number>();
  for (const word of text.split(/[\s,.]+/)) {
    counts.set(word, 1 + (counts.get(word) || 0));
  }
  return counts;
}
console.log(countWordsMap('Objects have a constructor'));
