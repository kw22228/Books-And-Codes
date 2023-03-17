export const TodoItem = item => /* html */ `<li>${item}</li>`;
export const TodoList = items => /* html */ `<ul>${items.map(TodoItem).join('')}</ul>`;
export const Button = ({ id, text }) => /* html */ `<button id="${id}">${text}</button>`;

export const App = todoItmes => /* html */ `
    ${Button({ id: 'add', text: '추가' })}
    ${Button({ id: 'delete', text: '삭제' })}
    ${TodoList(todoItmes)}
`;
