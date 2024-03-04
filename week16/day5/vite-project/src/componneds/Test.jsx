import { useState, useEffect } from "react";

const Test = (props) => {
  const [count, setCount] = useState(0);
  const [msg, setMsg] = useState(`hello`);

  useEffect(() => {
    setCount(count + 1);
  }, [msg]);

  return (
    <div>
      <h2>{msg} function component</h2>
      <div>
        <input onChange={(e) => setMsg(e.target.value)} />
      </div>
      count:{count}
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};
export default Test;
