/*
    기본형을 객체로 바꾸기 (상당히 어려움)

    [배경]
    - 단순히 String이나 Number로 사용되던 특정 상태를 객체로 바꾼다.
    - 객체로 바꾸면 함수를 추가할 수 있으므로 유지보수 측면에서 효과가 좋다.

    [절차]
    1. 변수를 캡슐화한다.
    2. 단순한 값 클래스를 만든다. (생성자로 값을 필드에 저장하고, Getter/Setter를 만든다)
*/

class Order {
  constructor(data) {
    this._priority = data.priority;
  }

  /** 1. 변수 캡슐화 */
  get priority() {
    return this._priority;
  }

  /** 3. 접근자 수정 */
  get priorityString() {
    return this._priority.toString();
  }
  set priority(aString) {
    // this._priority = aString;
    /** 3. 접근자 수정 */
    this._priority = new Priority(aString);
  }
}

/** 2. 값 클래스 만들기 */
class Priority {
  constructor(value) {
    if (value instanceof Priority) return value;
    this._value = value;
  }

  // getter보다는 toString으로서 속성을 문자열로 표현한 값을 요청하게끔.
  toString() {
    return this._value;
  }
}

const orders = [
  //
  { priority: 'high' },
  { priority: 'rush' },
  { priority: 'row' },
];
const highPriorityCount = orders.filter(
  (o) => o.priority === 'high' || o.priority === 'rush'
).length;
