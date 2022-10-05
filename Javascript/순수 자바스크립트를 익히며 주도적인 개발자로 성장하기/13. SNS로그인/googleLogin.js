export default class GoogleClass {
    #container;
    #googleModule;
    #googleBtn = 'google-signin-btn';

    constructor(gapi, container) {
        this.#googleModule = gapi;
        this.#container = container;

        this.paint();
    }

    paint() {
        const div = document.createElement('div');
        div.id = this.#googleBtn;

        this.#container.append(div);

        this.#googleModule.signin2.render(this.#googleBtn, {
            onsuccess: this.loginSuccess,
        });
    }

    loginSuccess(googleUser) {
        console.log(googleUser);
    }
}
