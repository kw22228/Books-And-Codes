/** 타입 추론 */
var city = 'new york city';
console.log(city.toUpperCase()); //메소드가 오류인걸 알려줌.
/** 런타임에 발생할 사이드이펙트를 찾지 미리찾음 */
var states = [
    { name: 'Alabama', capital: 'Montgamery' },
    { name: 'Alaska', capital: 'Juneau' },
    { name: 'Arizona', capital: 'Phoenix' },
];
for (var _i = 0, states_1 = states; _i < states_1.length; _i++) {
    var state = states_1[_i];
    console.log(state.capitol);
} //undefined
var states2 = [
    { name: 'Alabama', capital: 'Montgamery' },
    { name: 'Alaska', capital: 'Juneau' },
    { name: 'Arizona', capital: 'Phoenix' },
];
for (var _a = 0, states_2 = states; _a < states_2.length; _a++) {
    var state = states_2[_a];
    console.log(state.capital);
}
var a = null + 7;
var b = [] + 12;
alert('Hello', 'Typescript');
/** 타입체커가 통과되더라도 런타임에서 오류나는 상황 */
var names = ['Alice', 'Bob'];
console.log(names[2].toUpperCase());
