import style from './AppStatus.style';

export default class AppStatus extends HTMLElement {
    // 클래스 초기화. 속성이나 하위 노드는 접근할 수는 없다.
    constructor() {
        super();
        this.shadowObj = this.attachShadow({ mode: 'open' });
    }

    /** 클래스명 -> define될 컴포넌트 명으로 변경해주는 Static 헬퍼 함수 */
    static getComponentName(str) {
        return str
            .split('')
            .map((x, i) => (i > 0 && x.match(/[A-Z]/) ? `-${x.toLowerCase()}` : x.toLowerCase()))
            .join('');
    }

    /** -- HTMLElement Core Method -- */

    // 모니터링 할 속성 이름 (배열로 해줘야하는거같음.)
    static get observedAttributes() {
        return ['item-count'];
    }

    // DOM에 추가되었다. 렌더링, 이벤트 등의 처리를 하자.
    connectedCallback() {
        this.render();
    }

    // DOM에서 제거되었다. 엘리먼트, 이벤트를 정리하는 일을 하자.
    disconnectedCallback() {}

    // 속성이 추가/제거/변경되었다.
    attributeChangedCallback(attrName, oldVal, newVal) {
        if (attrName === 'item-count')
            this.shadowObj.querySelector('.status_count').innerText = newVal;
    }

    // 다른 Document에서 옮겨져 왔음. 자주 쓸 일은 없을 것.
    adoptedCallback(oldDoc, newDoc) {}

    /** -- HTMLElement Core Method End -- */

    /** -- Custom Method -- */

    render() {
        const template = this.getTemplate();
        this.shadowObj.innerHTML = template;
    }

    getTemplate() {
        return /* html */ `
            <p role="status" class="visually-hidden">You have done <span class="js-status">1 thing</span> today!</p>
            <div class="[ app__decor ] [ js-count ]" aria-hidden="true">
                <small>You've done</small>
                <span class="status_count">0</span>
                <small>things today 😢</small>
            </div>
            ${style}
        `;
    }

    /** -- Custom Method End -- */
}

customElements.get(AppStatus.getComponentName('AppStatus')) ??
    customElements.define(AppStatus.getComponentName('AppStatus'), AppStatus);
