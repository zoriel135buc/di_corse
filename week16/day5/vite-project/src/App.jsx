import Counter from "./componneds/Counter";
import User from "./componneds/User";
import { useState } from "react";
import Test from "./componneds/Test";
import TestClass from "./componneds/TestClass";
import Users from "./componneds/Users";
import "./App.css";

function App() {
  return (
    <div>
      <Users />
    </div>
  );
}

export default App;
// function App() {
//   const [username, setUsername] = useState(``);
//   const [input, setInput] = useState("");

//   const handleChange = (e) => {
//     setInput(e.target.value);
//   };

//   const changeUsername = () => {
//     setUsername(input);
//   };
//   return (
//     <div>
//       {/* {<Counter />}; */}
//       <User name={username} />
//       username:
//       <input onChange={handleChange} />
//       <button onClick={changeUsername}>submit</button>
//     </div>
//   );
// }

// const [Users, setUsers] = useState([]);
// const fetchData = () => {
//   fetch(`https://jsonplaceholder.typicode.com/users`)
//     .then((res) => res.json())
//     .then((data) => {
//       setUsers(data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// return (
//   <>
//     <button onClick={fetchData}>get Users</button>
//     <h2>Users</h2>
//     {Users.map((item, index) => {
//       return <div key={index}>{item.name}</div>;
//     })}
//   </>
// );
