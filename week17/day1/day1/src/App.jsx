import { useState, useEffect } from "react";
import Post from "./components/Post";
import PostClass from "./components/PostClass";
import "./App.css";
import Test from "./components/Test";
import Name from "./components/Name";

function App() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUserName();
  }, []);
  const GetUserPosts = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  };

  const getUserName = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      });
  };
  return (
    <>
      <button onClick={() => setNumber(num + 1)}>update Number</button>
      <button onClick={() => GetUserPosts(1)}>Get post of User 1</button>

      <button onClick={() => GetUserPosts(2)}>Get post of User 2</button>

      <select onChange={(e) => GetUserPosts(e.target.value)}>
        <option value={-1}>choose User</option>
        {users.map((item, index) => {
          return (
            <option value={item.id} key={index}>
              {item.name}
            </option>
          );
        })}
      </select>
      <div>
        <h2>Posts</h2>
        {posts.map((item, index) => {
          return <Post title={item.title} body={item.body} key={index} />;
        })}
      </div>
    </>
  );
}

export default App;
