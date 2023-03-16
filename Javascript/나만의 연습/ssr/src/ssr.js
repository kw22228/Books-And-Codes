import { Button, TodoList } from './components.js';

export const generateHtml = model => /* html */ `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Todo List</title>
    </head>
    <body>
        <div id="app">
            ${Button({ id: 'add', text: '추가' })}
            ${Button({ id: 'delete', text: '삭제' })}
            ${TodoList(model.todoItems)}
        </div>
        <script>
            document.querySelector('#add').onclick = () => {
                fetch('/api/todo-items', {
                    method: 'post',
                    body: JSON.stringify({content: '추가된 아이템'}),
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }).then(() => location.reload())
            }

            document.querySelector('#delete').onclick = () => {
                fetch('/api/todo-items/0', {
                    method: 'delete'
                }).then(() => location.reload())
            }
        </script>
    </body>
    </html>
`;
