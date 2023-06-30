import React, { useState } from 'react';

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: '눈사람' },
    { id: 2, text: '얼음' },
    { id: 3, text: '눈' },
    { id: 4, text: '바람' },
  ]);
  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5);

  const handleChange = (e) => setInputText(e.target.value);
  const handleClick = () => {
    setNames([...names, { id: nextId, text: inputText }]);
    setNextId((prev) => prev + 1);
    setInputText('');
  };
  const handleRemove = (id) => {
    setNames(names.filter((name) => name.id !== id));
  };

  const namesList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => handleRemove(name.id)}>
      {name.text} {name.id}
    </li>
  ));

  return (
    <>
      <input value={inputText} onChange={handleChange} />
      <button onClick={handleClick}>추가</button>
      <ul>{namesList}</ul>
    </>
  );
};

export default IterationSample;
