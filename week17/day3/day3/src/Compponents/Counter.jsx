import { useState } from "react";

const Counter = (props) => {
  const [count, setCount] = useState(0);
  if (count > 5) {
    throw new Error("crased....opps!");
  }
  return (
    <>
      <button onClick={() => setCount(count + 1)}>Add </button>
      <h2>{count}</h2>
    </>
  );
};
export default Counter;
