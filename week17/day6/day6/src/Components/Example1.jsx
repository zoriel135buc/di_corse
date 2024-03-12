import React from "react";
import Data2 from "../Data2.json";

class Example1 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <h1>Example1</h1>
        <div>
          <h1>
            {Data2.SocialMedias.map((item, index) => {
              return <div key={index}>{item}</div>;
            })}
          </h1>
        </div>
      </>
    );
  }
}
export default Example1;
