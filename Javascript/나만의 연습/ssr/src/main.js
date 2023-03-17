import { App } from './components.js';
import { model } from './model.js';

async function updateTodoItems(todoItems) {
  const response = await fetch('api/todo-items', {
    method: 'put',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ todoItems }),
  });

  return await response.json();
}

async function syncServerModel() {
  const newTodoItems = await updateTodoItems(model.todoItems);
  model.init({ todoItems: newTodoItems });
}

function render() {
  const $app = document.querySelector('#app');
  $app.innerHTML = App(model.todoItems);

  $app.querySelector('#add').onclick = () => {
    model.addTodoItem('새로운 아이템');
    syncServerModel().then(render);
  };

  $app.querySelector('#delete').onclick = () => {
    model.deleteTodoItme(0);
    syncServerModel().then(render);
  };
}

function main() {
  model.init(window.__INITIAL_MODEL__);
  render();
}

main();

export {};
