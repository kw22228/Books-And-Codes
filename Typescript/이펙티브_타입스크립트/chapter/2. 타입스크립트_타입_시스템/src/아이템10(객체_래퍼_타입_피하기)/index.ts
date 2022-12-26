'hello' === new String('hello'); //false
new String('hello') === new String('hello'); //false

function getStringLen(foo: String) {
    return foo.length;
}

getStringLen('hello');
getStringLen(new String('hello'));

function isGreeting(phrase: String) {
    return ['hello', 'good day'].includes(phrase); // 기본형인 string에 의해 래퍼타입은 String은 에러남.
}
