async function fetchPosts() {
  try {
    const res = await fetch("https://www.swapi.tech/api/starships/9/");
    if (res.ok) {
      const data = await res.json();
      console.log(data.result);
    } else {
      console.log("error");
      throw new Error("there was an issue");
    }
  } catch (e) {
    console.log(e);
  }
}
fetchPosts();
