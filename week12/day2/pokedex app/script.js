const container = document.querySelector("#container");
const randomPoke = (max) => {
  Math.floor(Math.random() * max);
};
const fetchPoke = async () => {
  try {
    const randomGenerated = randomPoke(803);
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${randomGenerated}/`
    );
    if (res.ok) {
      const data = await res.json();
    } else {
      throw new Error("data not found");
    }
    console.log(res);
  } catch (e) {
    console.log(e);
  }
};
fetchPoke();
