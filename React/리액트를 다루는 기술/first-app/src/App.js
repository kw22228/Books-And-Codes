import React from 'react';
import './App.css';
function App() {
  const name = '리액트';
  const number = 0;
  const type = undefined;
  return (
    <React.Fragment>
      {name === '리액트' ? <h1>리액트 안녕!</h1> : <h2>잘 동작하니?</h2>}
      {name === '리액트' && <h1>리액트입니다.</h1>}
      {number && <h1>리액트입니다.</h1>}
      {type || <h3>undefined 값</h3>}
      <div
        style={{
          backgroundColor: 'black',
          color: 'aqua',
          fontSize: '48px',
          fontWeight: 'bold',
          padding: 16,
        }}
      >
        {name}
      </div>
      <div className="react">className을 추가한 값이다 !!</div>
      // JSX내의 이런 주석은 페이지에 그대로 나타난다 .
    </React.Fragment>
  );
}

export default App;
