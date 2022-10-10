/** @jsx h */
function h(type, props, ...children) {
    return {
        type,
        props,
        children: children.flat(),
    };
}

function createElement(node) {
    if (typeof node === 'string') {
        return document.createTextNode(node);
    }

    const element = document.createElement(node.type);

    //속성 삽입 (id="app")
    Object.entries(node.props || {})
        .filter(([attr, value]) => value) // value가 존재하는것만
        .forEach(([attr, value]) => element.setAttribute(attr, value)); //value 삽입

    try {
        const children = node.children
            .map(child => createElement(child))
            .forEach(child => element.appendChild(child));
    } catch (e) {
        console.log(node);
        console.log(e);
    }

    return element;
}

const state = [
    {
        id: 1,
        completed: false,
        content: 'todo list 1',
    },
    {
        id: 2,
        completed: true,
        content: 'todo list 2',
    },
];

const realDom = createElement(
    <div id="app">
        <ul>
            {state.map(({ completed, content }) => (
                <li class={completed ? 'completed' : null}>
                    <input type="checkbox" class="toggle" checked={completed} />
                    {content}
                    <button class="remove">삭제</button>
                </li>
            ))}
        </ul>
        <form>
            <input type="text" />
            <button type="submit">추가</button>
        </form>
    </div>
);

const root = document.querySelector('#root');

root.appendChild(realDom);
