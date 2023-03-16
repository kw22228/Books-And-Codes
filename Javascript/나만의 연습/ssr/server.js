import express from 'express';
import { model } from './src/model.js';
import { generateHtml } from './src/ssr.js';

const app = express();
app.use(express.json());

app.get('/', (req, res) => res.send(generateHtml(model)));

app.post('/api/todo-items', (req, res) => {
  model.addTodoItem(req.body.content);
  res.status(201).send();
});

app.delete('/api/todo-items/:index', (req, res) => {
  model.deleteTodoItme(req.params.index);
  res.status(204).send();
});

app.listen(8080, () => console.log('listen to http://localhost:8080'));
