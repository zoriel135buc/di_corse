import React from "react";

class PostClass extends React.Component {
  render() {
    return (
      <div>
        <h2>Post Class</h2>
        <h3>{this.props.title}</h3>
        <p>{this.props.body}</p>
      </div>
    );
  }
}
export default PostClass;
