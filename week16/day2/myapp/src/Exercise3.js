import React from "react";
import logo from "./logo.svg";
import "./Exercise.css";

class Exercise3 extends React.Component {
  render() {
    const style_header = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial",
    };
    return (
      <div className="para">
        <h1>this is a header</h1>
        <p>this is a paragraph</p>
        <a href="http://localhost:3000/">my link</a>
        <form>
          <h2>this is a form</h2>
          <p>enter your name</p>
          <input />
          <button>submit</button>
        </form>
        <img src={logo}></img>
        <ul>
          <h2>this is a list:</h2>
          <li>Coffe</li>
          <li>Tea</li>
          <li>Milk</li>
        </ul>
      </div>
    );
  }
}
export default Exercise3;
