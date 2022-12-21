class HelloWorld extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });
        // shadow.append('Hello Wrold2');

        const $template = document.querySelector('#hello-world-template');
        const contents = $template.content;

        shadow.append(contents.cloneNode(true));
    }

    /** DOM에 Component가 추가되면 가장 먼저 불려지는 메소드. */
    connectedCallback() {
        // console.log('Dom에 추가');
    }
}

customElements.define('hello-world', HelloWorld);
