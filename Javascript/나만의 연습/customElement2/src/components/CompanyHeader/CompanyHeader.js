import style from './CompanyHeader.style';

export default class CompanyHeader extends HTMLElement {
    // 클래스 초기화. 속성이나 하위 노드는 접근할 수는 없다.
    constructor() {
        super();

        this.icon = '';
        this.pageTitle = '';

        this.shadowObj = this.attachShadow({ mode: 'open' });
    }

    static getComponentName(str) {
        return str
            .split('')
            .map((x, i) => (i > 0 && x.match(/[A-Z]/) ? `-${x.toLowerCase()}` : x.toLowerCase()))
            .join('');
    }

    /** -- HTMLElement Core Method -- */

    // 모니터링 할 속성 이름 (배열로 해줘야하는거같음.)
    static get observedAttributes() {
        return ['icon', 'pageTitle'];
    }

    // DOM에 추가되었다. 렌더링, 이벤트 등의 처리를 하자.
    connectedCallback() {
        this.render();
    }

    // DOM에서 제거되었다. 엘리먼트, 이벤트를 정리하는 일을 하자.
    disconnectedCallback() {}

    // 속성이 추가/제거/변경되었다.
    attributeChangedCallback(attrName, oldVal, newVal) {
        this[attrName] = newVal;
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
            <a href="/chapter3.html">
                <img class="icon" src="${this.icon}" />
            </a>
            <h1 class="heading">${this.title}</h1>

            <div>
                <slot name="slot-test"></slot>
            </div>

            <div>
                <a class="header-links">Home</a>
                <a class="header-links">About Us</a>
            </div>
            ${style}
        `;
    }

    /** -- Custom Method End -- */
}

customElements.define(CompanyHeader.getComponentName('CompanyHeader'), CompanyHeader);
