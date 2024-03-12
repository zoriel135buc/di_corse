import React from "react";
import Data2 from "../Data2.json";

class Example2 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <h3>Example2</h3>;
        {Data2.Skills.map((item, index) => {
          return (
            <div key={index}>
              <h1>{item.Area}</h1>
              {Data2.Skills[index].SkillSet.map((item, index) => {
                return (
                  <div key={index}>
                    <ul>
                      <li>{item.Name}</li>
                    </ul>
                  </div>
                );
              })}
            </div>
          );
        })}
      </>
    );
  }
}
export default Example2;
