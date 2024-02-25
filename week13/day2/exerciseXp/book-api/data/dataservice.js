import axios from "axios";

console.log(axios.isCancel("something"));

function fetchposts() {
  return fetch(`http://localhost:3001/api/posts`);
}
module.exports = {
  fetchposts,
};
