// import { createElement, updateElement } from './func';

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
function createElement(node) {
  // node가 string일때 (객체가 아니라 문자열 ex. todo list item2 )
  if (typeof node === 'string') return document.createTextNode(node);

  // 객체(html tag)
  const $el = document.createElement(node.type);

  // props를 배열 [attr, value]로 만듬 -> value가 있는 배열만 뽑아냄 -> 만들어둔 element에 attr과 value 삽입
  Object.entries(node.props || {})
    .filter(([, value]) => value)
    .forEach(([attr, value]) => $el.setAttribute(attr, value));

  try {
    // node의 children들도 Virtual dom -> Dom 형태로 변화 시켜줌 ==> 만들어둔 element에 children들을 append 시켜준다.
    node.children.map(child => createElement(child)).forEach(child => $el.appendChild(child));
  } catch (e) {
    console.log(node);
    console.log(e);
  }

  //변환한 dom을 반환한다.
  return $el;
}

function updateElement(parent, newNode, oldNode, index = 0) {
  // 1. oldNode만 있는 경우
  if (!newNode && oldNode) {
    return parent.removeChild(parent.childNodes[index]);
  }

  // 2. newNode만 있는 경우
  if (newNode && !oldNode) {
    return parent.appendChild(createElement(newNode));
  }

  // 3. oldNode와 newNode 모두 string 일경우 (객체<tag> 아님)
  if (typeof newNode === 'string' && typeof oldNode === 'string') {
    if (newNode === oldNode) return;

    return parent.replaceChild(createElement(newNode), parent.childNodes[index]);
  }

  // 4. oldNode와 newNode의 태그 이름(type)이 다를 경우
  if (oldNode.type !== newNode.type) {
    return parent.replaceChild(createElement(newNode), parent.childNodes[index]);
  }

  // 5. oldNode와 newNode의 태그 이름(type)이 같을 경우
  updateAtrributes(parent.childNodes[index], newNode.props || {}, oldNode.props || {});

  // 6. newNode와 oldNode의 모든 자식 요소를 순회하면 1 ~ 5번 내용 반복
  const maxLength = Math.max(newNode.children.length, oldNode.children.length);
  for (let i = 0; i < maxLength; i++) {
    updateElement(parent.childNodes[index], newNode.children[i], oldNode.children[i], i);
  }
}

/** newNode와 oldNode의 attribute를 비교하여 변경된 부분만 반영한다. */
function updateAtrributes(target, newProps, oldProps) {
  /** 추가된 Props를 반영 */
  for (const [attr, value] of Object.entries(newProps)) {
    if (oldProps[attr] === newProps[attr]) continue;
    target.setAttribute(attr, value);
  }

  /** 없어진  Props를 제거 */
  for (const attr of Object.keys(oldProps)) {
    if (newProps[attr] !== undefined) continue;
    target.removeAttribute(attr);
  }
}

const oldState = [
  { id: 1, completed: false, content: 'todo list item1' },
  { id: 2, completed: true, content: 'todo list item2' },
];

const newState = [
  { id: 1, completed: true, content: 'todo list item 1 update' },
  { id: 2, completed: true, content: 'todo list item 2' },
  { id: 3, completed: false, content: 'todo list item 3' },
];

const render = state => (
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

const oldNode = render(oldState);
const newNode = render(newState);

// document.querySelector('#root').innerHTML = `<pre>${JSON.stringify(virtualDom, null, 2)}</pre>`;
// document.querySelector('#root').appendChild(virtualDom);

const $root = document.querySelector('#root');
updateElement($root, oldNode);

setTimeout(() => {
  updateElement($root, newNode, oldNode);
}, 3000);
