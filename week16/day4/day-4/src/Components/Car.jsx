import { useState } from "react";
import Garage from "./Garage";
const Car = (props) => {
  const [color, setColor] = useState(`yellow`);

  return (
    <div>
      <h2>
        this car is {color} {props.model}
      </h2>
      <Garage size="small" />
    </div>
  );
};
export default Car;
