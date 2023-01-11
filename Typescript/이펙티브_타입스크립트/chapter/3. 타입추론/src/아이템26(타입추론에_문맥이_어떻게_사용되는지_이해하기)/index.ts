(function () {
    //프로젝트내 변수 공유 체크로 인한 지역변수 사용.
    function setLanguage(language: string) {}

    setLanguage('Javascript'); //인라인
    let language = 'Javascript';
    setLanguage(language);

    type Language = 'Javascript' | 'Typescript' | 'Python';
    function setLanguageWithType(language: Language) {}

    setLanguageWithType('Javascript');
    setLanguageWithType(language); //string타입을 union에 넣어 오류

    //해법1. 타입을 통해 값을 제한한다.
    let languageWithType: Language = 'Javascript';
    setLanguageWithType(languageWithType);

    //해법2. language를 상수로 만든다. 좁히기방법)
    const languageWithConst = 'Javascript'; //상수 선언으로 unit타입이 추론되었다.
    setLanguageWithType(languageWithConst);

    /** 튜플 사용시 주의점 */
    function panTo(where: [number, number]) {}
    panTo([10, 20]);

    const loc = [10, 20];
    panTo(loc); //number[] 는 튜플에 들어올 수 없음.

    //해법1. 타입을 지정한다.
    const locWithType: [number, number] = [10, 20];
    panTo(locWithType);

    //const단언법
    const locWithConst = [10, 20] as const;
    panTo(locWithConst);

    function panToWithReadonly(where: readonly [number, number]) {}
    panToWithReadonly(locWithConst);

    //문제점
    const locWithConst2 = [10, 20, 30] as const; //실제 오류는 여기서 남
    panToWithReadonly(locWithConst2); //근데 오류는 여기서 나서 근본적인 오류를 찾기 힘들어질지도....

    /** 객체 사용 시 주의점 */
    type Language2 = 'Javascript' | 'Typescript' | 'Python';
    interface GovernedLanguage {
        language: Language;
        organization: string;
    }

    function complain(language: GovernedLanguage) {}
    complain({ language: 'Typescript', organization: 'Microsoft' });

    const ts = { language: 'Typescript', organization: 'Microsoft' };
    complain(ts); //ts.language의 타입이 string이다.
    const tsWithConst = { language: 'Typescript', organization: 'Microsoft' } as const;
    complain(tsWithConst);

    /** 콜백 사용 시 주의점 */
    function callWithRandomNumbers(fn: (n1: number, n2: number) => void) {
        fn(Math.random(), Math.random());
    }

    callWithRandomNumbers((a, b) => {
        a;
        b;
        console.log(a + b);
    });
    const fn = (a, b) => {
        console.log(a + b);
    };
    const fnWithType = (a: number, b: number) => {
        console.log(a + b);
    };
    callWithRandomNumbers(fn);
    callWithRandomNumbers(fnWithType);
})();
