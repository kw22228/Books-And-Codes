"use strict";
let age;
age = '12'; // 오류
age = '12'; // 타입 단언문
age += 1; // '12' + 1 -> 121
function calculateAge(birthDate) {
    return Number(birthDate); //NaN
}
let birthDate = '1990-01-19';
calculateAge(birthDate); // 의도치않게 any타입의 문자열이 들어온다. (Date가 들어와야 정상)
////////////
// 객체의 autocomplete가 적용되지 않음.
let person = { first: 'Geroge', last: 'Washington' };
// interface에 있는 props key를 변경하면 덩달아 rename할 수 있음
// 마찬가지로 any타입에서는 언어 서비스 적용 x
const formatName = (p) => `${p.first} ${p.last}`;
const formatNameAny = (p) => `${p.first} ${p.last}`;
function renderSelector(props) {
    const { onSelectItem } = props;
    onSelectItem('1');
}
let selectedItem = 0;
function handleSelectItem(id) {
    selectedItem = id;
}
renderSelector({ onSelectItem: handleSelectItem });
