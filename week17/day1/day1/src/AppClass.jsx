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
  GetUserPosts = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ posts: data });
      });
  };

  getUserName = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ users: data });
      });
  };
  componentDidMount = () => {
    this.getUserName();
  };
  render() {
    return (
      <>
        <h2>posts</h2>
        <select onChange={(e) => this.GetUserPosts(e.target.value)}>
          <option value={-1}></option>
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
            return <Post title={item.title} body={item.body} key={index} />;
          })}
        </div>
      </>
    );
  }
}
export default AppClass;
