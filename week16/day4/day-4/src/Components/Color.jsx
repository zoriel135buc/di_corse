import { useState, useEffect } from "react";

const Color = () => {
  const [favoriteColor, setFavoriteColor] = useState(`red`);
  useEffect(() => {
    setTimeout(() => {
      alert("useEffect reached");
      setFavoriteColor("yellow");
    }, 3000);
  }, []);
  const changeColor = () => {
    setFavoriteColor("blue");
  };

  return (
    <div>
      <header>my favorite Color is {favoriteColor}</header>
      <button onClick={changeColor}>changeColor</button>
    </div>
  );
};
export default Color;
