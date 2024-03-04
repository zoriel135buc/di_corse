import { useState } from "react";
const Evant = (props) => {
  const [isToggleOn, setIsToggleOn] = useState(true);
  const handleClick = () => {
    setIsToggleOn(!isToggleOn);
  };
  const clickMe = () => {
    return alert("i was clicked");
  };
  const handleKeyPress = (e) => {
    if (e.key != "Enter") return;
    const massage =
      "the enter key was pressed,your input is: " + e.target.value;
    alert(massage);
  };

  return (
    <>
      <button onClick={clickMe}>ok</button>
      <input
        type="text"
        onKeyDown={handleKeyPress}
        placeholder="press the ENTER key!"
      ></input>
      <button onClick={handleClick}>{isToggleOn ? `ON` : `OFF`}</button>
    </>
  );
};
export default Evant;
