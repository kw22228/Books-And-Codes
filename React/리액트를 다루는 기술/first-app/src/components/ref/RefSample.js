import React, { Component } from 'react';

export default class RefSample extends Component {
  input = null;
  //   input = React.createRef();

  handleFocus = () => this.input.focus();

  render() {
    return (
      <div>
        <input ref={(ref) => (this.input = ref)} />
        <button onClick={this.handleFocus}>포커스</button>
      </div>
    );
  }
}
