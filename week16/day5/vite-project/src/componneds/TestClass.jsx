import React from "react";

class TestClass extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      msg: `hello`,
    };
    console.log(`constructor`);
  }

  addOne = () => {
    this.setState({ count: this.state.count + 1 });
  };

  componentDidMount = () => {
    console.log(`componentDidMount`);
    setTimeout(() => {
      this.addOne();
    }, 5000);
  };

  render() {
    console.log(`render`);
    return (
      <div>
        <h2>{this.state.msg} class component</h2>
        count:{this.state.count}
        <button onClick={this.addOne}>+</button>
      </div>
    );
  }
}
export default TestClass;
