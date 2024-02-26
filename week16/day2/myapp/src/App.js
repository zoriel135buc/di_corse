import logo from "./logo.svg";
import "./App.css";

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
        <h3>{user.firstName}</h3>
        <h3>{user.lastName}</h3>
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
        </a>
      </header>
    </div>
  );
}

export default App;
