export default class KakaoClass {
    #container;
    #LOGIN_URL = '/v2/user/me';
    #LOGIN_BTN = 'kakaoLoginBtn';
    #LOGOUT_BTN = 'kakaoLogoutBtn';
    #kakaoModule;

    constructor(kakaoModule, appKey, container) {
        this.#container = container;
        this.#kakaoModule = kakaoModule;
        this.#kakaoModule.init(appKey);

        this.paint();
        setTimeout(this.attachEventHandler.bind(this), 0);
    }

    getAccessToken() {
        console.log(this.#kakaoModule.Auth.getAccessToken());
    }

    login() {
        const scope = 'profile_nickname,account_email'; //동의항목에서 설정한 ID와 반드시 일치해야함.
        this.#kakaoModule.Auth.login({
            scope,
            success: function () {
                this.#kakaoModule.API.request({
                    url: this.#LOGIN_URL,
                    success: res => {
                        const kakaoAccount = res.kakao_account;

                        this.getAccessToken();
                        this.paint('LOGOUT');
                    },
                });
            }.bind(this),
            fail: function (error) {
                console.log(error);
            },
        });
    }

    logout() {
        if (!this.#kakaoModule.Auth.getAccessToken()) {
            console.log('Not Logged in.');
            return;
        }

        this.#kakaoModule.Auth.logout(res => {
            if (res) this.paint();
        });
    }

    paint(type = 'LOGIN') {
        const htmlArr = [];
        const html =
            type === 'LOGIN'
                ? `<button id="${this.#LOGIN_BTN}">카카오 로그인</button>`
                : `<button id="${this.#LOGOUT_BTN}">로그아웃</button>`;
        htmlArr.push(html);

        this.#container.innerHTML = htmlArr.join('');
    }

    attachEventHandler() {
        // document
        //     .querySelector(`#${this.#LOGIN_BTN}`)
        //     .addEventListener('click', this.login.bind(this));

        document.addEventListener(
            'click',
            function (e) {
                if (e.target && e.target.id === this.#LOGIN_BTN) {
                    this.login();
                } else if (e.target && e.target.id === this.#LOGOUT_BTN) {
                    this.logout();
                }
            }.bind(this)
        );
    }
}
