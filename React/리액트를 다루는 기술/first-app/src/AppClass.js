import React, { Component } from 'react';
import './App.css';
import MyComponent from './components/My/MyComponent';
import MyComponentClass from './components/My/MyComponentClass';
import CounterClass from './components/Counter/CounterClass';

class AppClass extends Component {
  render() {
    const name = '김재원';
    return (
      <div className="react">
        {/* <MyComponent name={name} favoriteNumber={3}>
          안녕
        </MyComponent>
        <br />
        <MyComponentClass name={name} favoriteNumber={3}>
          안녕
        </MyComponentClass> */}

        <CounterClass />
      </div>
    );
  }
}

export default AppClass;
