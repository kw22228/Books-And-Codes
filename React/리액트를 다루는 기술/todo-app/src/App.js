import { useCallback, useReducer, useRef, useState } from 'react';
import TodoInsert from './components/TodoInsert/TodoInsert';
import TodoList from './components/TodoList/TodoList';
import TodoTemplate from './components/TodoTemplate/TodoTemplate';

function createBulkTodos() {
  const array = [];
  for (let i = 0; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할일 ${i}`,
      checked: false,
    });
  }
  return array;
}
function todoReducer(todos, action) {
  switch (action.type) {
    case 'INSERT':
      return [...todos, action.todo];
    case 'REMOVE':
      return todos.filter((todo) => todo.id !== action.id);
    case 'TOGGLE':
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,
      );
    default:
      return todos;
  }
}
function App() {
  // const [todos, setTodos] = useState(createBulkTodos);

  // 두번째는 undefined넣고 3번째에 createBulkTodos를 넣음으로써 컴포넌트가 첫 렌더링될 시에만 createBulkTodos를 호출한다.
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);

  const nextId = useRef(2501);

  // const onInsert = useCallback((text) => {
  //   setTodos((todos) => [
  //     ...todos,
  //     { id: nextId.current, text, checked: false },
  //   ]);
  //   nextId.current++;
  // }, []);
  // const onRemove = useCallback(
  //   (id) => setTodos((todos) => todos.filter((todo) => todo.id !== id)),
  //   [],
  // );
  // const onToggle = useCallback((id) => {
  //   setTodos((todos) =>
  //     todos.map((todo) =>
  //       todo.id === id ? { ...todo, checked: !todo.checked } : todo,
  //     ),
  //   );
  // }, []);

  const onInsertReducer = useCallback((text) => {
    dispatch({
      type: 'INSERT',
      todo: { id: nextId.current, text, checked: false },
    });
    nextId.current++;
  }, []);
  const onRemoveReducer = useCallback((id) => {
    dispatch({ type: 'REMOVE', id });
  }, []);
  const onToggleReducer = useCallback((id) => {
    dispatch({ type: 'TOGGLE', id });
  }, []);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsertReducer} />
      <TodoList
        todos={todos}
        onRemove={onRemoveReducer}
        onToggle={onToggleReducer}
      />
    </TodoTemplate>
  );
}

export default App;
