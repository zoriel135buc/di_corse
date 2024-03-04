import "../App.css";
const ShowCard = (props) => {
  return (
    <div>
      <h1>Quote: {props.quote}</h1>
      <h4>Author: {props.author}</h4>
    </div>
  );
};
export default ShowCard;
