import React, { useState } from 'react';

const Counter = () => {
  const [value, setValue] = useState(0);

  return (
    <div>
      <p>
        현재 카운터 값은 <b>{value}</b>
      </p>
      <button onClick={() => setValue((prev) => prev + 1)}>+1</button>
      <button onClick={() => setValue((prev) => prev - 1)}>-1</button>
    </div>
  );
};

export default Counter;
