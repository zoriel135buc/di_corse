import { useState } from "react";
const BuggyCounter = (props) => {
  const [count, setCount] = useState(0);
  if (count > 5) {
    throw new Error("crased....opps!");
  }
  return (
    <>
      <button onClick={() => setCount(count + 1)}> {count}</button>
    </>
  );
};
export default BuggyCounter;
