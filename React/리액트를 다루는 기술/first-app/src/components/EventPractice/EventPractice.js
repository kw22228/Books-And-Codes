import React, { useState } from 'react';

const EventPractice = () => {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);
  const handleClick = () => {
    alert(`${username} ${message}`);
    setUsername('');
    setMessage('');
  };
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleClick();
    }
  };
  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명 추가"
        value={username}
        onChange={handleUsernameChange}
      />
      <input
        type="text"
        name="message"
        placeholder="메세지 입력"
        value={message}
        onChange={handleMessageChange}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleClick}>초기화</button>
    </div>
  );
};

export default EventPractice;
