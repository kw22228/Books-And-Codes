export default class CustomButton extends HTMLElement {
    constructor() {
        super();

        this.timesClicked = 0;
        this.render();
    }

    ///////////////////////////////////// Core class의 추상 메소드 //////////////////////////

    /** DOM에 Component가 추가되면 가장 먼저 불려지는 메소드.. */
    connectedCallback() {
        this.handler = this.onClickHandler.bind(this); //삭제를 위해서 이벤트메소드 주소값 저장

        this.querySelector('button').addEventListener('click', this.handler);
    }

    /** DOM에서 삭제되는 순간 불리워지는 Callback Method. 앞서 Event binding한게 있다면 여기서 삭제. */
    disconnectedCallback() {
        this.querySelector('button').removeEventListener('click', this.handler);
    }

    /** Parent Node가 변경되면 (다른 Node로 옮겨지면) 해당 메소드가 실행된다. */
    adoptedCallback() {
        console.log('Move to somewhere');
    }

    /** Observe 할 attributes를 설정한다. 배열안에 추가하는것으로 여러개 설정 가능. ex) ['aTitle', 'bTitle'] */
    static get observedAttributes() {
        return ['btitle'];
    }

    /** Custom Elements에 Attributes가 있거나, 변경되면 메소드가 실행된다. (주의. observedAttributes에 허용된것만 가능.) */
    attributeChangedCallback(attrName, oldValue, newValue) {
        this[attrName] = newValue;

        this.querySelector('button').innerText = newValue;
    }

    ////////////////////////////////////// 커스텀 메소드 /////////////////////////////////////

    getTemplate() {
        return /* html */ `
            <button class='click'>Click Me</button>
            <span>${this.getTimeClicked()}</span>
        `;
    }

    render() {
        this.innerHTML = this.getTemplate();
    }

    getTimeClicked() {
        return `Times Clicked : ${this.timesClicked}`;
    }

    onClickHandler(e) {
        this.timesClicked++;
        this.querySelector('span').innerText = this.getTimeClicked();
    }
}

customElements.define('custom-button', CustomButton);
