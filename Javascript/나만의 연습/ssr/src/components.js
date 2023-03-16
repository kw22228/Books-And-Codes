export const TodoItem = item => /* html */ `<li>${item}</li>`;
export const TodoList = items => /* html */ `<ul>${items.map(TodoItem).join('')}</ul>`;
export const Button = ({ id, text }) => /* html */ `<button id="${id}">${text}</button>`;
