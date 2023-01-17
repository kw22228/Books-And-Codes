"use strict";
/**
 *  foreground 문자열을 반환한다. (실제로는 객체를 반환하고 있음.)
 *  0개 또는 1개의 매개변수를 받는다. (?: 옵셔널로 되어있는것만봐도 알 수 있음.)
 *  매개변수가 없을 때는 표준 foreground를 반환한다.
 *  매개변수가 있을 때는 특정 페이지의 foreground를 반환한다.
 */
function getForegroundColor(page) {
    return page === 'login' ? { r: 127, g: 127, b: 127 } : { r: 0, g: 0, b: 0 };
}
/** 앱 또는 특정 페이지의 foreground색을 가져온다. */
function getForegroundColorWithType(page) {
    return page === 'login' ? { r: 127, g: 127, b: 127 } : { r: 0, g: 0, b: 0 };
}
/////////////////////////////////////////////////////////////
/** nums를 변경하지 않습니다. */
function sort(nums) { }
function sortWithType(nums) { } //readonly구문으로 변경하지 못함.
/*
    결론.
    - 주석과 변수명에 타입정보를 적는 것은 피해야한다.
      타입선언이 중복되는 것으로 끝나면 다행이지만, 최악의 경우는 타입정보에 모순이 생길수 있다.
    - 타입이 명확하지 않은 경우는 변수명에 단위 정보를 포함하는 것을 고려하는것이 좋다.
      ex) time -> timeMS, temperature -> temperatureC
*/
