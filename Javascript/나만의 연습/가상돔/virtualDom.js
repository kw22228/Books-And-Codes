// const realDom = /* html */ `
//     <div id="app">
//         <ul>
//             <li>
//                 <input type="checkbox" class="toggle" />
//                 todo list item1
//                 <button class="remove">삭제</button>
//             </li>
//             <li class="completed">
//                 <input type="checkbox" class="toggle" checked />
//                 todo list item 2
//                 <button class="remove">삭제</button>
//             </li>
//         </ul>
//         <form>
//             <input type="text" />
//             <button type="submit">추가</button>
//         </form>
//     </div>
// `;

// const virtualDom = h(
//     'div',
//     { id: 'app' },
//     h(
//         'ul',
//         null,
//         h(
//             'li',
//             null,
//             h('input', { type: 'checkbox', className: 'toggle' }),
//             'todo list item1',
//             h('button', { className: 'remove' }, '삭제')
//         ),
//         h(
//             'li',
//             { className: 'completed' },
//             h('input', { type: 'checkbox', className: 'toggle', checked: true }),
//             'todo list item2',
//             h('button', { className: 'remove' }, '삭제')
//         )
//     ),
//     h('form', null, h('input', { type: 'text' }), h('button', { type: 'submit' }, '추가'))
// );

/** @jsx h */
const h = (type, props, ...children) => ({ type, props, children: children.flat() });

const state = [
    { id: 1, completed: false, content: 'todo list item1' },
    { id: 2, completed: true, content: 'todo list item2' },
];

const virtualDom = (
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

document.querySelector('#root').innerHTML = `<pre>${JSON.stringify(virtualDom, null, 2)}</pre>`;
