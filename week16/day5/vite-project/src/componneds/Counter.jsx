import { useState } from "react";
const Counter = (props) => {
  const [count, setCount] = useState(0);

  const [massage, setMassage] = useState(``);
  const add = () => {
    // count++;
    setCount(count + 1);
  };

  const minus = () => {
    // count--;
    setCount(count - 1);
  };
  const input = (e) => {
    setMassage(e.target.value);
  };
  return (
    <div>
      <button onClick={minus}>-</button>
      <h1>counter:{count}</h1>
      <button onClick={add}>+</button>
      <div>
        <br />
        <input onChange={(e) => input(e)} />
        <h2>{massage}</h2>
      </div>
    </div>
  );
};

export default Counter;
