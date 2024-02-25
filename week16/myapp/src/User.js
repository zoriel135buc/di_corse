const User = (props) => {
  console.log(props);
  return (
    <div>
      <h2>user name:{props.name}</h2>
      <h3>user Email:{props.a}</h3>
    </div>
  );
};
export default User;
