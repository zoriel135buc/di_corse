import logo from "./logo.svg";
import React from "react";
import reactDOM from "react-dom";
import UserFavoriteAnimals from "./UserFavoriteAnimals";

import "./App.css";
import Exercise3 from "./Exercise3";

const myelement = <h1>i love jsx</h1>;
const sum = 5 + 5;
console.log(sum);

const user = {
  firstName: "Bob",
  lastName: "Dylan",
  favAnimals: ["Horse", "Turtle", "Elephant", "Monkey"],
};
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Exercise3 />
      </header>
    </div>
  );
}

export default App;
{
  /* <h3>{user.firstName}</h3>
<h3>{user.lastName}</h3>
<h3>{user.favAnimals}</h3>
<UserFavoriteAnimals favAnimals={user.favAnimals} />

<p>`React is {sum} times better with JSX</p>
<p>{myelement}</p>
<p>hello world</p>
<img src={logo} className="App-logo" alt="logo" />
<p>
  Edit <code>src/App.js</code> and save to reload.
</p>
<a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Learn React
</a> */
}
