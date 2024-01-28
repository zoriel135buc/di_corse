const apiKey = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
const searchTerm = "sun";
const limit = 10;
const offset = 2;

const apiUrl = `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&limit=${limit}&offset=${offset}&api_key=${apiKey}`;

fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Error during fetch:", error.message);
  });
