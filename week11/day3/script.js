function getJoke() {
  fetch("https://api.chucknorris.io/jokes/random?category=animal")
    .then((res) => {
      console.log(res);
      if (res.ok) {
        return res.json();
      } else {
        console.log("an error has occured");
        throw new Error("Something went wrong...");
      }
    })
    .then((data) => {
      console.log(data);
      console.log(data.value);
    })
    .catch((e) => console.log(e));
}
getJoke();
