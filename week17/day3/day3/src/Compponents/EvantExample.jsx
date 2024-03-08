import { useState } from "react";
const EvantExample = (props) => {
  const [count, setCount] = useState(0);
  const [massage, setMessage] = useState(`hello`);
  const [bgColor, setBgColor] = useState("lightgreen");

  const add = () => {
    setCount(count + 1);
  };
  return (
    <>
      <div style={{ backgroundColor: setBgColor }}>
        <h3>Evant Example</h3>
        <h4>{count}</h4>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => add()}> add</button>
        <button onClick={() => props.setcountApp(props.countApp + 1)}>
          Add one from App
        </button>
        <div>
          <input onChange={(e) => setMessage(e.target.value)} />
          <h4>{massage}</h4>
        </div>
        <div />
      </div>
    </>
  );
};

export default EvantExample;
