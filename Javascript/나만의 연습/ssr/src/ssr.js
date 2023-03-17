import { App } from './components.js';

export const generateHtml = ({ todoItems }) => /* html */ `
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
            ${App(todoItems)}
        </div>
        <script>window.__INITIAL_MODEL__ = ${JSON.stringify({ todoItems })}</script>
        <script src="./src/main.js" type="module"></script>
    </body>
    </html>
`;
