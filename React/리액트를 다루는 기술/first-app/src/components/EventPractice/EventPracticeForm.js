import { useState } from 'react';

const EventPracticeForm = () => {
  const [form, setForm] = useState({
    username: '',
    message: '',
  });
  const { username, message } = form;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleClick = () => {
    alert(`${username} ${message}`);
    setForm({
      username: '',
      message: '',
    });
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
        onChange={handleChange}
      />
      <input
        type="text"
        name="message"
        placeholder="메세지 입력"
        value={message}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleClick}>초기화</button>
    </div>
  );
};

export default EventPracticeForm;
