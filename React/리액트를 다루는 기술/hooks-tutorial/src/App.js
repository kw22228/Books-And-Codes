import { useState } from 'react';
import Counter from './components/useState/Counter';
import Info from './components/useState/Info';
import ReducerCounter from './components/useReducer/Counter';
import ReducerInfo from './components/useReducer/Info';
import Average from './components/useMemo/Average';
import AverageCallback from './components/useCallback/Average';
import AverageRef from './components/useRef/Average';
import InfoCustom from './components/customHooks/useInputs/Info';

function App() {
  const [visible, setVisible] = useState(true);
  return (
    <div className="App">
      <button onClick={() => setVisible((prev) => !prev)}>{visible ? '보이기' : '숨기기'}</button>
      {visible && <InfoCustom />}
    </div>
  );
}

export default App;
