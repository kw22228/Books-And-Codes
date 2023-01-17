"use strict";
//객체 리터럴 (잉여 속성 체크가 적용)
const r = {
    numDoors: 1,
    ceilingHeightFt: 10,
    elephant: 'present',
};
//구조적 타이핑
const obj = {
    numDoors: 1,
    ceilingHeightFt: 10,
    elephant: 'present',
};
const r1 = obj;
function createWindow(options) {
    if (options.darkMode) {
        //setDarkMode();
    }
}
const options = {
    title: 'Spider Solitaire',
    darkmode: true,
};
createWindow({
    title: 'Spider Solitaire',
    darkmode: true,
});
const o1 = document; //document.title이 string 타입.
const o2 = new HTMLAnchorElement(); //HTMLAnchorElement.title이 string타입
const o = { darkmode: true, title: 'Ski Free' };
const intermediate = { darkmode: true, title: 'Ski Free' };
const o3 = intermediate; // 구조적 타이핑
const o4 = { darkmode: true, title: 'Ski Free' }; // 타입단언문(잉여 속성체크 x)
const opts = { logScale: true };
const o5 = opts;
