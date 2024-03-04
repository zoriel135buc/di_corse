import React from "react";
import Post from "./components/Post";

class AppClass extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      posts: [],
    };
  }

  getUserPosts = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ posts: data });
      });
  };

  getUsers = () => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ users: data });
      });
  };

  componentDidMount = () => {
    this.getUsers();
  };

  render() {
    return (
      <>
        <h2>Posts</h2>
        <select onChange={(e) => this.getUserPosts(e.target.value)}>
          <option value={-1}>Choose user...</option>
          {this.state.users.map((item, index) => {
            return (
              <option value={item.id} key={index}>
                {item.name}
              </option>
            );
          })}
        </select>
        <div>
          {this.state.posts.map((item, index) => {
            return <Post key={index} title={item.title} body={item.body} />;
          })}
        </div>
      </>
    );
  }
}
export default AppClass;
