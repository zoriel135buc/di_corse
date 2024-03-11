import React from "react";

class ChildClass extends React.Component {
  componentWillUnmount() {
    alert("Component will unmount");
  }

  render() {
    return (
      <>
        <div>
          <header>"hello world"</header>
        </div>
      </>
    );
  }
}
export default ChildClass;
