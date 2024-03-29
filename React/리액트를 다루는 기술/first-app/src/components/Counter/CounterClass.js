import { Component } from 'react';

class CounterClass extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       number: 0,
  //       fixedNumber: 0,
  //     };
  //   }
  state = {
    number: 10,
    fixedNumber: 0,
  };

  render() {
    const { number, fixedNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h2>고정된 값: {fixedNumber}</h2>
        <button
          onClick={() => {
            // this.setState({ number: number + 1 });
            // this.setState({ number: this.state.number + 1 });
            this.setState((prev) => ({ number: prev.number + 1 }));
            this.setState(
              (prev) => ({ number: prev.number + 1 }),
              () => {
                console.log('방금 state가 호출되엇습니다.');
                console.log(this.state);
              }
            );
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default CounterClass;
