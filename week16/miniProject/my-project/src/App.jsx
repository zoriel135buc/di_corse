import { useState } from "react";
import Quotes from "./componneds/Quotes";
import "./App.css";
import ShowCard from "./componneds/ShowCard";

function App() {
  const [quiet, setquiet] = useState({});
  const [color, setColor] = useState({});

  const randonColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };

  const randomTitle = () => {
    return Math.floor(Math.random() * Quotes.length);
  };
  const getQuet = () => {
    setquiet(Quotes[randomTitle()]);
    const bg = randonColor();
    setColor(bg);
    document.querySelector("body").style.backgroundColor = bg;
  };

  return (
    <>
      <div className="ShowCard" style={{ backgroundColor: color }}>
        <ShowCard quote={quiet.quote} author={quiet.author} />
        <button onClick={getQuet}>newQuote</button>
      </div>
    </>
  );
}

export default App;
