import { diff } from './func';

const oldState = [
    { id: 1, completed: false, content: 'todo list item1' },
    { id: 2, completed: true, content: 'todo list item2' },
];

const newState = [
    { id: 1, completed: true, content: 'todo list item 1 update' },
    { id: 2, completed: true, content: 'todo list item 2' },
    { id: 3, completed: false, content: 'todo list item 3' },
];

const render = state => {
    const $el = document.createElement('div');
    $el.innerHTML = /* html */ `
        <div class="content">
            <ul>
                ${state
                    .map(
                        ({ completed, content }) => /* html */ `
                    <li class="${completed ? 'completed' : ''}">
                        <input type="checkbox" class="toggle" ${completed ? 'checked' : ''} />
                        ${content}
                        <button class="remove">삭제</button>
                    </li>
                `
                    )
                    .join('')}
            </ul>
            <form>
                <input type="text" />
                <button type="submit">추가</button>
            </form>
        </div>
    `.trim();

    return $el.children[0];
};

const oldNode = render(oldState);
const newNode = render(newState);

const $root = document.querySelector('#root');
$root.appendChild(oldNode);

setTimeout(() => diff($root, newNode, oldNode), 3000);
