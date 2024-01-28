//Fetch
// fetch("https://api.artic.edu/api/v1/artworks/4")
//   .then((response) => {
//     console.log(response);
//     return response.json();
//   })
//   .then((data) => console.log(data))
//   .catch((e) => {
//     console.log(e);
//   });

//Get request
// const body = document.body;
// console.log("Starting");

// const getArtwork = () => {
//   console.log("Working...");
//   fetch("https://api.artic.edu/api/v1/artworks/14572")
//     .then((res) => {
//       if (res.ok) {
//         return res.json();
//       } else {
//         throw new Error("Something went wrong");
//       }
//     })
//     .then((data) => {
//       console.log(data);
//       console.log(`The name of the art is ${data.data.title}
//       The name of the artist is ${data.data.artist_title}`);
//       const h2 = document.createElement("h2");
//       const h3 = document.createElement("h3");
//       h3.innerText = data.data.title;
//       h2.innerText = data.data.artist_title;
//       body.append(h2, h3);
//     })
//     .catch((e) => console.log(e));
// };
// getArtwork();

// const addArticle = () => {
//   fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "post",
//     headers: { "content-type": "application/json" },
//     body: JSON.stringify({
//       title: "Article on Javascript",
//       body: "This is an article presenting the new features of Javascript",
//       userId: 1,
//     }),
//   })
//     .then((res) => {
//       if (res.ok) {
//         return res.json();
//       } else {
//         throw new Error("Something went wrong with POST");
//       }
//     })
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((e) => {
//       console.log(e);
//     });
// };
// addArticle();

// function getJoke() {
//   fetch("https://api.chucknorris.io/jokes/random?category=animal")
//     .then((res) => {
//       console.log(res);
//       if (res.ok) {
//         return res.json();
//       } else {
//         console.log("an error has occured");
//         throw new Error("Something went wrong...");
//       }
//     })
//     .then((data) => {
//       console.log(data);
//       console.log(data.value);
//     })
//     .catch((e) => console.log(e));
// }
// getJoke();
// const body = document.body;
// const loader = document.querySelector(".loader");
// async function getJoke() {
//   const res = await fetch("https://api.chucknorris.io/jokes/random?category=animal");
//   if (res.ok) {
//     const data = await res.json();
//     console.log(data.value);
//   } else {
//     console.log("there was an issue");
//   }
// }

// getJoke();

// async function getUsers() {
//   setTimeout(async () => {
//     const res = await fetch("https://jsonplaceholder.typicode.com/users");
//     if (res.ok) {
//       const data = await res.json();
//       console.log(data);
//       data.forEach((element) => {
//         const h2 = document.createElement("h2");
//         h2.innerText = element.name;
//         loader.style.display = "none";
//         body.append(h2);
//       });
//     } else {
//       console.log("there is an error");
//     }
//   }, 3000);
// }

// getUsers();

// function fetchPosts() {
//   fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((res) => {
//       if (res.ok) {
//         return res.json();
//       } else {
//         console.log("there was an error");
//       }
//     })
//     .then((data) => {
//       console.log(data);
//     });
// }

// fetchPosts();

// async function fetchPostsAsync() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   if (res.ok) {
//     const data = await res.json();
//     console.log(data);
//   } else {
//     console.log("error");
//   }
// }
// fetchPostsAsync();

// try {
//   const fname = "Dani";
//   fname = "Yosi";
// } catch (e) {
//   console.log(e);
// }

async function fetchPostsAsync() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (res.ok) {
      const data = await res.json();
      console.log(data);
    } else {
      console.log("error");
      throw new Error("there was an issue");
    }
  } catch (e) {
    console.log(e);
  }
}
fetchPostsAsync();
