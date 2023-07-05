import { useState } from 'react';
import Counter from './components/useState/Counter';
import Info from './components/useState/Info';

function App() {
  const [visible, setVisible] = useState(true);
  return (
    <div className="App">
      <button onClick={() => setVisible((prev) => !prev)}>{visible ? '보이기' : '숨기기'}</button>
      {visible && <Info />}
    </div>
  );
}

export default App;
