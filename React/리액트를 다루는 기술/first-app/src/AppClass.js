import React, { Component } from 'react';
import './App.css';
import MyComponent from './components/My/MyComponent';
import MyComponentClass from './components/My/MyComponentClass';
import CounterClass from './components/Counter/CounterClass';
import LifeCycleSample from './components/LifeCycle/LifeCycleSample';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
class AppClass extends Component {
  state = {
    color: '#000000',
  };

  handleClick = () => {
    this.setState({ color: getRandomColor() });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color} />
        </ErrorBoundary>
      </div>
    );
  }
}

export default AppClass;
