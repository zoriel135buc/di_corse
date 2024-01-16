const users = { user1: 18273, user2: 92833, user3: 90315 };
const newUsers = Object.entries(users);
console.log(newUsers);

// part 2

const modifiedUsersArray = newUsers.map(([username, id]) => [username, id * 2]);

console.log(modifiedUsersArray);
