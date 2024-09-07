// rfc React Functional components
//rcc class components

import React, { Component } from "react";

export default class State extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  IncrementHandler = () => {
    // state value change korte setState use korte hobe
    this.setState({
      count: this.state.count + 1,
    });
  };

  Dicement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>Count : {count}</h1>
        <button onClick={this.IncrementHandler}>Increment</button>
        <button onClick={this.Dicement} disabled={count === 0 ? true : false}>
          Dicement
        </button>
      </div>
    );
  }
}
