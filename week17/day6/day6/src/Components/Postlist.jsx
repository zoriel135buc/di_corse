import Data from "../data.json";
console.log(Data);
const Postlist = (props) => {
  return (
    <>
      <h1>Hi this is a Title</h1>
      <br></br>
      {Data.map((item) => {
        return (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <h3>{item.content}</h3>
          </div>
        );
      })}
    </>
  );
};
export default Postlist;
