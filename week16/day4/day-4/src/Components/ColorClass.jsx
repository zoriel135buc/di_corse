import React from "react";
import ChildClass from "./ChildClass";

class ColorClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteColor: "red",
      show: true,
    };
  }
  handleDelete = () => {
    this.setState({ show: false });
  };

  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextState.favoriteColor !== this.state.favoriteColor ||
      nextState.show !== this.state.show
    );
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.favoriteColor !== this.state.favoriteColor) {
      console.log("Color changed");
    }
    if (prevState.show !== this.state.show && !this.state.show) {
      console.log("Component will unmount");
    }
  }

  changeColor = () => {
    this.setState({ favoriteColor: "blue" });
  };

  render() {
    const { show } = this.state;
    return (
      <>
        <div style={{ border: "1px solid grey", padding: "10px" }}>
          {show ? (
            <>
              {/* Render Child component only if show is true */}
              <ChildClass />
              <button onClick={this.handleDelete}>
                <p>Delete</p>
              </button>
            </>
          ) : (
            <button onClick={() => this.setState({ show: true })}>
              Delete header
            </button>
          )}
        </div>
        {/* <p>My favorite color is {this.state.favoriteColor}</p>
            <button onClick={this.changeColor}>Change Color</button> */}
      </>
    );
  }
}

export default ColorClass;
