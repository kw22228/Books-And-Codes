window.monkey = 'Tamarin';
document.monkey = 'Howler';

const el = document.getElementById('colobus');
el.home = 'tree';

(document as any).monkey = 'Howler'; // 정상
(document as any).mokey = 'Howler'; //오타 체크 불가
(document as any).monkey = /Howler/; // 잘못된 타입 체크 불가

/**
 * 보강기능
 *
 * -장점
 * 1. 타입이 더 안전하다. 타입체커는 오타나 잘못된 타입의 할당을 오류로 표시한다.
 * 2. 속성에 주석을 붙일 수 있다.
 * 3. 속성에 자동완성을 사용할 수 있다.
 * 4. 몽키패치가 어떤 부분에 적용되었는지 정확한 기록이 남는다.
 *
 * */
export {};
declare global {
  interface Document {
    monkey: string; //몽키 타입  (장점2. 장점4.)
  }
}

document.monkey = 'Tamarin'; // 장점3. auto complete
document.mokey = 'Holer'; // 장점1.

/** 더구체적인 타입 단언문 사용하기 */
interface MonkeyDocument extends Document {
  monkey: string;
}
(document as MonkeyDocument).monkey = 'Macaque';

/*
    - 전역 변수나 DOM에 데이터를 저장하지 말고, 데이터를 분리하여 사용해야 한다.
    - 내장 타입에 데이터를 저장해야 하는 경우, 안전한 타입 접근법 중 하나(보강이나 사용자 정의 인터페이스로 단언)를 사용해야한다.
    - 보강의 모듈 영역 문제를 이해해야 한다.
*/
