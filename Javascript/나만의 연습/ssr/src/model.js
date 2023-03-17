export const model = {
  todoItems: [
    'About SSR2',
    'About CSR',
    'About MVVM',
    'How to many studying?',
    'Why does we need this one.',
  ],

  addTodoItem(item) {
    this.todoItems.push(item);
  },
  deleteTodoItme(index) {
    this.todoItems.splice(index, 1);
  },
  init(initialModel) {
    this.todoItems = initialModel.todoItems;
  },
};
