import { useState, useEffect } from "react";
const Users = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  };
  return (
    <div>
      {users.map((item) => {
        return <div key={item.id}>{item.name}</div>;
      })}
    </div>
  );
};
export default Users;
