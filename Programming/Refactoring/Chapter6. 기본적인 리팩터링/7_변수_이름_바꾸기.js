/*
    변수 이름 바꾸기

    [배경]
    - 값이 영속적인 필드의 이름은 신중하게 지어야 한다.
    - 넓은 범위에서 쓰이는 변수는 변수 캡슐화하기를 고려하자.

    [절차]
    1. 변수 이름 바꾸기를 적용할 변수를 참조하는 곳을 찾아서 하나씩 변경하자.
*/

let _title = 'untitled';

let result = `<h1>${_title}</h1>`; //변수를 읽기만 함
_title = obj['articleTitle']; //값을 수정함

//이럴때는 변수 캡슐화 하기 사용
function getTitle() {
  return _title;
}
function setTitle(arg) {
  _title = arg;
}

result = `<h1>${getTitle()}</h1>`;
setTitle(obj['articleTitle']);

///////////////////////////////////////////////////
/** 상수 이름 바꾸기 */
// const cpyNm = '에크미 구스베리';

const companyName = '애크미 구스베리';
const cpyNm = companyName;
