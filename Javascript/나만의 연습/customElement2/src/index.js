import './components/HelloWorld';
import './components/CustomButton';
import './components/ProfileInfo/ProfileInfo';
import './components/CompanyHeader/CompanyHeader';
import './components/EventButton/EventButton';

const root = document.querySelector('#root');

root.innerHTML = /* html */ `
    <div>Hello</div>

    <hello-world></hello-world>
    <template id="hello-world-template">
        <div>
            <p>Hello Templates</p>
            <p>This is a small template</p>
        </div>
    </template>

    <p></p>

    <!--
    <template id="my-template">
        <div class="red-border">
            <p>Hello Templates</p>
            <p>This is a small template</p>
        </div>
    </template>
    <div id="template-target"></div>
    -->

    <custom-button btitle="클릭"></custom-button>

    <hr />

    <profile-info 
        name="Jaewon Kim" 
        designation="FrontEnd Web Developer" 
        id-number="200101" 
        picture-src="https://avatars.githubusercontent.com/u/53852668?v=4"
        employee-type="ft"
    ></profile-info>
    <profile-info 
        name="Jaewon Kim" 
        designation="FrontEnd Web Developer" 
        id-number="200101" 
        picture-src="https://avatars.githubusercontent.com/u/53852668?v=4"
        employee-type="pt"
    ></profile-info>
    <profile-info 
        name="Jaewon Kim" 
        designation="FrontEnd Web Developer" 
        id-number="200101" 
        picture-src="https://avatars.githubusercontent.com/u/53852668?v=4"
        employee-type="ct"
    ></profile-info>

    <hr />

    <company-header icon="https://avatars.githubusercontent.com/u/53852668?v=4" pageTitle="My Page">
        <h3 slot="slot-test">
            Slot Test Text
        </h3>
    </company-header>

    <hr />

    <event-button b-title="클릭"></event-button>

    
`;

//Shadow Dom
const $shadowRoot = document.querySelector('p');
const shadowRoot = $shadowRoot.attachShadow({ mode: 'open' }); // mode가 true일시 외부에서 접근가능(element.shadowRoot)
const $span = document.createElement('span');

$span.innerText = '새로운 root를 붙여보자!';
shadowRoot.appendChild($span);

//Template
// const $template = document.querySelector('#my-template');
// const contents = $template.content;

// const $templateTarget = document.querySelector('#template-target');
// $templateTarget.appendChild(contents.cloneNode(true));
