const User = (props) => {
  const { id, name, username, email, address } = props.userinfo;
  return (
    <div>
      <img src={`https://robohash.org/${id}`} />
      <h2>{name}</h2>
      <h3>{username}</h3>
      <p>{email}</p>
      <p>{address.city}</p>
    </div>
  );
};
export default User;
