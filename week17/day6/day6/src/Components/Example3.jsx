import React from "react";
import Data2 from "../Data2.json";
console.log(Data2.Experiences);
import { Link, NavLink } from "react-router-dom";
class Example3 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div>
          <h4>Example3</h4>;
          {Data2.Experiences.map((item, index) => {
            return (
              <div>
                <img></img>
                <br></br>
                <img src={item.logo}></img>
                <br></br>
                <NavLink to={item.url}>{item.companyName}</NavLink>
                <br></br>
                <div>
                  {Data2.Experiences[index].roles.map((item) => {
                    return (
                      <div>
                        <br></br>
                        <h3>{item.title}</h3>
                        <br></br>

                        <h5>
                          {item.startDate} {item.location}
                        </h5>
                        <br></br>
                        <h4>{item.description}</h4>
                        <br></br>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default Example3;
