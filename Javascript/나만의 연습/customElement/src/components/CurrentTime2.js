export default class CurrentTime2 {
    #target;
    #timer;
    #localeChangedObserver;
    #disconnectedObserver;

    constructor(target) {
        this.#target = target;
        this.#timer = null;

        this._init();
        this.start();
    }

    _init() {
        //속성 변경을 모니터
        this.#localeChangedObserver = new MutationObserver(mutations => {
            console.log(mutations);
            mutations.forEach(mutation => {
                if (mutation.type === 'attributes' && mutation.attributeName === 'locale') {
                    const locale = this.#target.getAttribute('locale');
                    console.log(locale);
                    this.locale = locale;
                }
            });
        });
        this.#localeChangedObserver.observe(this.#target, {
            attributes: true,
            attributeFilter: ['locale'],
        });

        //엘리먼트가 DOM에서 제거되었는지 모니터
        this.#disconnectedObserver = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                if (
                    mutation.type === 'childList' &&
                    [...mutation.removedNodes].indexOf(this.#target) >= 0
                ) {
                    this.dispose();
                }
            });
        });
        this.#disconnectedObserver.observe(this.#target.parentNode, {
            childList: true,
        });
    }

    start() {
        this.stop();

        this.#timer = window.setInterval(() => {
            this.#target.innerText = new Date().toLocaleString(this.locale);
        }, 1000);
    }

    stop() {
        if (this.#timer) {
            window.clearInterval(this.#timer);
            this.#timer = null;
        }
    }

    dispose() {
        this.stop();
        this.#localeChangedObserver.disconnect();
        this.#disconnectedObserver.disconnect();
    }

    static create(el) {
        return new CurrentTime2(el);
    }
}
