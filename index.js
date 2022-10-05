import KakaoClass from './Javascript/순수 자바스크립트를 익히며 주도적인 개발자로 성장하기/13. SNS로그인/kakaoLogin.js';
import NaverClass from './Javascript/순수 자바스크립트를 익히며 주도적인 개발자로 성장하기/13. SNS로그인/naverLogin.js';
import GoogleClass from './Javascript/순수 자바스크립트를 익히며 주도적인 개발자로 성장하기/13. SNS로그인/googleLogin.js';
window.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('#root');
    const appKey = 'b02d6ad782021251e6b25fda94563838';

    const callbackUrl = 'http://localhost:5500/index.html';
    const clientId = 'XbHeLzSIZDalEEa4aSqJ';

    // const kakao = new KakaoClass(Kakao, appKey, container);
    // const naver = new NaverClass(container, clientId, callbackUrl);
    const google = new GoogleClass(gapi, container);
});
