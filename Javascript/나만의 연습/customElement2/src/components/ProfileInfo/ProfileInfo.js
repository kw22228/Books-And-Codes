import style from './ProfileInfo.style';

export default class ProfileInfo extends HTMLElement {
    constructor() {
        super();

        //props setting
        this.name = '';
        this.designation = '';
        this.idNumber = '';
        this.pictureSrc = '';
        this.employeeType = undefined;

        this.shadowObj = this.attachShadow({ mode: 'open' });
    }

    //////////////////// Abstract Method ////////////////////
    //1번째
    static get observedAttributes() {
        return ['name', 'designation', 'id-number', 'pickture-src', 'employee-type'];
    }

    //2번째
    attributeChangedCallback(name, oldValue, newValue) {
        let key = name
            .split('-')
            .map(item => item.charAt(0).toUpperCase() + item.slice(1))
            .join('');
        key = key.charAt(0).toLowerCase() + key.slice(1);

        this[key] = newValue;
    }

    //3번째
    connectedCallback() {
        this.render();
    }

    disconnectedCallback() {}

    adoptedCallback() {}

    //////////////////// Custom Method ////////////////////
    getTemplate() {
        return /* html */ `
            <div class="profile-info__container">
                <img class="profile-info__picture" src="${this.getAttribute('picture-src')}"/>
                <div class="profile-info__text">
                    <div class="profile-info__name">${this.getAttribute('name')}</div>
                    <div class="progile-info__designation">${this.getAttribute('designation')}</div>
                    <div class="profile-info__id-number">${this.getAttribute('id-number')}</div>
                </div>
            </div>
            ${style}
        `;
    }

    render() {
        this.clearEmployeeType();
        this.classList.add(`profile-info__emp-type-${this.employeeType ?? 'pt'}`);

        this.shadowRoot.innerHTML = this.getTemplate();
    }

    clearEmployeeType() {
        this.classList?.remove('profile-info__emp-type-ft');
        this.classList?.remove('profile-info__emp-type-pt');
        this.classList?.remove('profile-info__emp-type-ct');
    }
}

customElements.define('profile-info', ProfileInfo);
