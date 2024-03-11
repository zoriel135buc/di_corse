import "./App.css";
import { useState } from "react";
import Car from "./Components/Car";
import Garage from "./Components/Garage";
import Evant from "./Components/Event";
import Phone from "./Components/Phone";
import Color from "./Components/Color";
const carInfo = { name: `Ford`, model: `Mustang` };
import ColorClass from "./Components/ColorClass";
import ChildClass from "./Components/ChildClass";

function App() {
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaScript", votes: 0 },
    { name: "Java", votes: 0 },
  ]);

  return (
    <div>
      <h1>
        <ColorClass />
        {/* <ChildClass /> */}
        {/* <Color /> */}
        {/* <Phone /> */}
        {/* <Evant /> */}
      </h1>

      <h1>{/* <Car model={carInfo.model} /> */}</h1>
      <h2></h2>
    </div>
  );
}
export default App;
