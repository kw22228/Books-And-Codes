export default class ProfileInfo extends HTMLElement {
    constructor() {
        super();

        //props setting
        this.name = '';
        this.destination = '';
        this.idNumber = '';
        this.picktureSrc = '';
        this.employeeType = undefined;

        this.shadowRoot = this.attachShadow({ mode: 'open' });
    }

    //////////////////// Abstract Method ////////////////////
    static get observedAttributes() {}

    //////////////////// Custom Method ////////////////////

    getTemplate() {
        return /* html */ `
            <div class="profile-info__container">
                <img class="profile-info__picture" src=""/>
            </div>
        `;
    }

    getStyle() {}

    render() {
        this.classList.add(`profile-info__emp-type-${this.employeeType ?? 'pt'}`);

        this.shadowRoot.innerHTML = this.getTemplate();
    }
}

customElements.define('profile-info', ProfileInfo);
