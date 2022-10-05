/**
 * logout 하려면
   https://nid.naver.com/oauth2.0/token?grant_type=delete&client_id={발급받은 clientId}&client_secret={발급받은 Client Secret}
   &access_token={로그인시 받은 토큰}&service_provider=NAVER
 * 
*/
export default class NaverClass {
    #container;
    #naverLogin;
    #naverButtonId = 'naverIdLogin';

    constructor(container, clientId, callbackUrl) {
        this.#container = container;
        this.#naverLogin = new naver.LoginWithNaverId({
            clientId,
            callbackUrl,
            isPopup: false,
            loginButton: {
                color: 'green',
                type: 3,
                height: 60,
            },
        });

        this.appendNaverBtn();
        this.#naverLogin.init();
        this.getLoginStatus();
    }

    appendNaverBtn() {
        const temp = document.createElement('div');
        temp.id = this.#naverButtonId;

        this.#container.append(temp);
    }

    getLoginStatus() {
        this.#naverLogin.getLoginStatus(status => {
            if (status) {
                console.log(this.#naverLogin.user);

                const email = this.#naverLogin.user.getEmail();

                if (!email) {
                    this.#naverLogin.reprompt();
                    return;
                }
            } else {
                throw new Error('로그인 실패');
            }
        });
    }
}
