import React from "react";

class PostClass extends React.Component {

  render() {

    return (
      <div>
        <h3>{this.props.title}</h3>
        <p>{this.props.body}</p>
      </div>
    );

  }

}
export default PostClass;
