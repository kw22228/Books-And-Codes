import React, { Component } from 'react';

export default class EventPracticeClass extends Component {
  state = {
    message: '',
    username: '',
  };

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleClick() {
    alert(`${this.state.username} ${this.state.message}`);
    this.setState({ message: '', username: '' });
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleClick();
    }
  };

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="username"
          placeholder="이름을 입력해주세요."
          onChange={this.handleChange}
          value={this.state.username}
        />
        <br />
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해주세요."
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
          value={this.state.message}
        />
        <button onClick={this.handleClick}>초기화</button>
      </div>
    );
  }
}
