import "./App.css";
import Post from "./components/Post";
import PostClass from "./components/PostClass";
import Test from "./components/Test";

import { useState, useEffect } from "react";

function App() {
  const [posts, setPosts] = useState([{ title: "no title", body: "no body" }]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUserPosts = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  };

  const getUsers = () => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  };

  return (
    <>
      <select onChange={(e) => getUserPosts(e.target.value)}>
        <option value={-1}>Choose user</option>
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
