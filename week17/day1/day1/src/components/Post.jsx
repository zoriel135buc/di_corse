const Post = (props) => {
  return (
    <div>
      <h2>Post</h2>
      <h3>{props.title}</h3>
      <p>{props.body}</p>
    </div>
  );
};
export default Post;
