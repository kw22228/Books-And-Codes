/*
    g: 대상 문자열 전체로 검색 대상을 지정
       정규식 패턴에 일치하는 모든 문자(열) 반환
    
    i: 알파벳 대소문자 구분 무시

    m: 대상 문자열의 줄바꿈을 인식하여 멀티 라인 체크 함.

    ----------------------------------------------

    검색 문자 옵션

    . : 임의의 문자 하나를 의미하는 메타 문자 마침표 (2개의 마침표는 문자 2개가 결합된 문자열과 일치)

    + : 앞에 있는 패턴의 불일치가 발생할 때 까지 반복 시킴. (AAB 문자열에서 /A+/ => [AA])

    ^ : 문자 집합의 반대 를 의미한다.   
        문자 집합 밖에서의 캐럿은 대상 문자열의 첫번째를 의미함. ( /^https:?:\/\//g )

    * : 앞의 문자가 없거나, 1번이상 반복되면 일치.

    ? : 앞의 문자가 없거나, 1번만 있으면 일치.

    ?= : 전방 탐색 연산자 (?=;)  ;문자 앞에 까지 탐색

*/
const str = 'AA BB Aa Bb $12,000.00';

// +
const reg1 = /A+/; //[AA]
const reg2 = /A+/g; //[AA, A]
const reg3 = /A+/gi; //[AA, Aa]

//OR pattern
const reg4 = /A|B/g; //[A, A, B, B, A, B]
const reg5 = /A+|B+/g; //[AA, BB, A, B]

//OR pattern2
const reg6 = /[AB]/g; //[A, A, B, B, A, B]
const reg7 = /[AB]+/g; //[AA, BB, A, B]

// -
const reg8 = /[A-Z]+/g; //[AA, BB, A, B]  ->  A 부터 Z까지 +
const reg9 = /[A-Za-z]+/g; //[AA, BB, Aa, Bb];

//메타문자
const reg10 = /$12,000/g; //[] -> $는 정규식 내 메타문자 이기때문에.
const reg11 = /\$12,000/g; //[$12,000] -> \를 메타문자 앞에 넣어줘서 일반 문자로 취급하게 해준다.

const reg12 = /\$[0-9]/g; //[$1] -> 반복적이지않아 숫자 하나만 일치함.
const reg13 = /\$[0-9]+/g; //[$12] -> ,가 나와 12까지 잡고 끝남.
const reg14 = /\$[0-9,]+/g; //[$12,000]
const reg15 = /\$[0-9,.]+/g; //[$12,000.00]

const reg16 = /\./g; //[.] -> .도 정규식 내 메타문자 이기때문에 \ 붙여줌.

// \d \D
const reg17 = /\d/g; //[1, 2, 0, 0, 0, 0, 0] -> \d는 [0-9]+ 와 같다.
const reg18 = /\D/g; //[A, A, B, B, A, a, B, b, $, ,, .] -> \D는 \d의 반대 숫자가 아닌 모든 문자 (띄어쓰기도 포함)

// \w /W
const reg19 = /\w/g; //[A, A, B, B, A, a, B, b, 1, 2, 0, 0, 0, 0, 0] -> \w는 영문자를 의미, [a-zA-Z_0-9]와 같다. (_ 도 포함한다.)
const reg20 = /\W/g; // \w의 반대 [^a-zA-Z_0-9] 와 같다.

//http: https:
const str2 = `http: vs. https: or httpss:  What's the difference?`;
const reg21 = /http:/g; //[http:]
const reg22 = /https:/g; //[https:]

const reg23 = /http:|https:/g; //[http:, https:]

// *
const reg24 = /https*:/g; //[http:, https:, httpss:]

// ?
const reg25 = /https?:/g; //[http:, https:]

//url 추출하기
const str3 = 'https://admin.static-best.io/show?no=1';
const reg26 = /https?:\/\/\w/g; //[https://a]
const reg27 = /https?:\/\/\w+/g; //[https://admin]

const reg28 = /https?:\/\/[^:\/\s+]+/g; //[https://admin.static-best.io]
const reg29 = /https?:\/\/[^:\/\s+]+\.\w+(:\d+)?/g;

//반복패턴
const str4 = 'color: #ff0000;';
const str5 = 'background-color: #ddd;';

const reg30 = /#[0-9A-Fa-f]{6}/g; //[#ff0000];
const reg31 = /#[0-9A-Fa-f]{3}/g; //[#ddd]
const reg32 = /#[0-9A-Fa-f]{3,6}/g; //[#ff0000, #ddd]

const ref33 = /#[0-9A-Fa-f]+;/g; //[#ff0000;, #ddd;]

//?= 전방 탐색 연산자
const ref34 = /#[0-9A-Fa-f]+(?=;)/g; //[#ff0000, #ddd]
