import { useState } from 'react';
import Counter from './components/useState/Counter';
import Info from './components/useState/Info';
import ReducerCounter from './components/useReducer/Counter';
import ReducerInfo from './components/useReducer/Info';
import Average from './components/useMemo/Average';

function App() {
  const [visible, setVisible] = useState(true);
  return (
    <div className="App">
      <button onClick={() => setVisible((prev) => !prev)}>{visible ? '보이기' : '숨기기'}</button>
      {visible && <Average />}
    </div>
  );
}

export default App;
