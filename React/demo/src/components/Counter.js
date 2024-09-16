import React from "react";

export default class Counter extends React.Component {
  state = { count: 0 };

  onIncrement() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <button onClick={() => this.onIncrement()}>Increment</button>
        <span>{this.state.count}</span>
      </div>
    );
  }
}
