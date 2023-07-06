import React, { useMemo, useState } from 'react';

const getAverage = (numbers) => {
  console.log('평균값 계산중');

  if (numbers.length === 0) return 0;
  return numbers.reduce((a, b) => a + b) / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');

  const onChange = (e) => {
    setNumber(e.target.value);
  };
  const onInsert = (e) => {
    setList([...list, parseInt(number)]);
    setNumber('');
  };

  const getMemoAverage = useMemo(() => getAverage(list), [list]);
  return (
    <div>
      <input value={number} onChange={onChange} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값:</b> {getMemoAverage}
      </div>
    </div>
  );
};

export default Average;
