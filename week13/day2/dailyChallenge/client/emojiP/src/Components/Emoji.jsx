import { useState, useEffect } from "react";
const Emoji = (props) => {
  const [emoji, setEmoji] = useState({});
  const [emojiName, setEmojiName] = useState([]);
  const [emojiFace, setEmojiFace] = useState({});
  const [massage, setMassage] = useState("");
  const [score, setScore] = useState(0);
  useEffect(() => {
    randomEmoji();
  }, []);
  const randomEmoji = async () => {
    try {
      const res = await fetch(`http://localhost:3001/`);
      const data = await res.json();
      console.log(data);
      setEmoji(data);
      setEmojiFace(data.randomEmoji);
    } catch (error) {
      console.log(error);
    }
  };
  const Submit = async () => {
    try {
      const res = await fetch(`http://localhost:3001/submit`, {
        method: "post",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ emojiName }),
      });
      const data = await res.json();
      setMassage(data.massage);
      setScore(data.score);
      setEmojiFace(data.randomEmoji);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmmit = (e) => {
    e.preventDefault();
    Submit();
  };
  return (
    <>
      <header>welcome to the gussing game</header>
      <form onSubmit={handleSubmmit}>
        <h1>{emojiFace && emojiFace.randomFace}</h1>
        <input type="submit" value={"Submit"}></input>
        <select onChange={(e) => setEmojiName(e.target.value)}>
          {emoji.emojis &&
            emoji.emojis.map((item, index) => {
              return (
                <option key={index} value={item.name}>
                  {item.name}
                </option>
              );
            })}
        </select>
        <h2
          style={massage == "try again" ? { color: "red" } : { color: "blue" }}
        >
          {massage}
        </h2>
        <h1>score:{score}</h1>
      </form>
    </>
  );
};
export default Emoji;
