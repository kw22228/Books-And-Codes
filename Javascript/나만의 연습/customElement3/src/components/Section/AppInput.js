import style from './AppInput.style';

export default class AppInput extends HTMLElement {
    // 클래스 초기화. 속성이나 하위 노드는 접근할 수는 없다.
    constructor() {
        super();

        this.items = [];
        this.handler = null;

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
        return [];
    }

    // DOM에 추가되었다. 렌더링, 이벤트 등의 처리를 하자.
    connectedCallback() {
        this.render();

        this.handler = this.onClickHandler.bind(this);
        this.shadowObj.querySelector('form').addEventListener('submit', this.handler);
    }

    // DOM에서 제거되었다. 엘리먼트, 이벤트를 정리하는 일을 하자.
    disconnectedCallback() {
        this.shadowObj.querySelector('form').removeEventListener('submit', this.handler);
    }

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
            <h2 class="app__heading">What you've done</h2>
            <div class="js-items" aria-live="polite" aria-label="A list of items you have done"></div>
            <form class="[ new-item ] [ boilerform ] [ js-form ]">
                <div class="boilerform">
                    <label for="new-item-field" class="[ new-item__label ] [ c-label ]">Add a new item</label>
                    <input type="text" class="[ new-item__details ] [ c-input-field ]" id="new-item-field" autocomplete="off" />
                    <button class="[ c-button ] [ new-item__button ]">Save</button>
                </div>
            </form>
            ${style}
        `;
    }

    dispatchItems() {
        this.dispatchEvent(
            new CustomEvent('itemChanged', {
                detail: { data: this.items.length },
                bubbles: true,
            })
        );
    }

    onClickHandler(event) {
        event.preventDefault();
        this.addItem();
    }

    addItem() {
        const { value } = this.shadowObj.querySelector('#new-item-field');
        if (!value) return;

        this.items.push(value);
        this.dispatchItems();
        this.renderList();
    }

    renderList() {
        this.shadowObj.querySelector('.js-items').innerHTML = /* html */ `
            <ul>
                ${this.items
                    .map(
                        (item, idx) => /* html */ `
                    <li>
                        ${item}
                        <button class="rm" aria-label="Delete this item">x</button>
                    </li>
                    
                `
                    )
                    .join('')}
            </ul>
        `.trim();
    }

    /** -- Custom Method End -- */
}

customElements.get(AppInput.getComponentName('AppInput')) ??
    customElements.define(AppInput.getComponentName('AppInput'), AppInput);
