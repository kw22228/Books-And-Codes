import express from 'express';
import { model } from './src/model.js';
import { generateHtml } from './src/ssr.js';

const app = express();
app.use(express.json());

/** Hydration하기 위해 static파일 등록 */
app.use('/src', express.static('./src'));

app.get('/', (req, res) => res.send(generateHtml(model)));

/** Api Mocking */
// app.post('/api/todo-items', (req, res) => {
//   model.addTodoItem(req.body.content);
//   res.status(201).send();
// });

// app.delete('/api/todo-items/:index', (req, res) => {
//   model.deleteTodoItme(req.params.index);
//   res.status(204).send();
// });

app.put('/api/todo-items', (req, res) => {
  model.init({ todoItems: req.body.todoItems });
  res.status(200).send(model.todoItems);
});

app.listen(8080, () => console.log('listen to http://localhost:8080'));
