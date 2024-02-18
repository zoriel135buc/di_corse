const apiUrl = "https://pokeapi.co/api/v2/pokemon/";
let currentPokemonId = 1;

const loadingIcon = document.createElement("img");
loadingIcon.src = "http://www.complicite.org/_images/loading.gif"; // Provide the path to your loading icon or gif

const pokemonImage = document.getElementById("pokemon-image");
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const pokemonHeight = document.getElementById("pokemon-height");
const pokemonWeight = document.getElementById("pokemon-weight");
const pokemonType = document.getElementById("pokemon-type");

const randomButton = document.getElementById("random-button");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

randomButton.addEventListener("click", getRandomPokemon);
prevButton.addEventListener("click", getPreviousPokemon);
nextButton.addEventListener("click", getNextPokemon);

async function getRandomPokemon() {
  try {
    pokemonImage.src = loadingIcon.src;
    const response = await fetch(`${apiUrl}${getRandomId()}`);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    displayPokemon(data);
  } catch (error) {
    console.error(error);
    pokemonImage.src = "";
    pokemonName.textContent = "Oh no! That Pokemon isn’t available…";
    pokemonId.textContent = "";
    pokemonHeight.textContent = "";
    pokemonWeight.textContent = "";
    pokemonType.textContent = "";
  }
}

async function getPreviousPokemon() {
  currentPokemonId = Math.max(currentPokemonId - 1, 1);
  await fetchAndDisplayPokemon(currentPokemonId);
}

async function getNextPokemon() {
  currentPokemonId++;
  await fetchAndDisplayPokemon(currentPokemonId);
}

async function fetchAndDisplayPokemon(id) {
  try {
    const response = await fetch(`${apiUrl}${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    displayPokemon(data);
  } catch (error) {
    console.error(error);
    pokemonImage.src = "";
    pokemonName.textContent = "Oh no! That Pokemon isn’t available…";
    pokemonId.textContent = "";
    pokemonHeight.textContent = "";
    pokemonWeight.textContent = "";
    pokemonType.textContent = "";
  }
}

function displayPokemon(data) {
  pokemonImage.src = data.sprites.front_default;
  pokemonName.textContent = capitalizeFirstLetter(data.name);
  pokemonId.textContent = data.id;
  pokemonHeight.textContent = data.height;
  pokemonWeight.textContent = data.weight;
  pokemonType.textContent = data.types
    .map((type) => capitalizeFirstLetter(type.type.name))
    .join(", ");
}

function getRandomId() {
  return Math.floor(Math.random() * 898) + 1; // There are 898 Pokémon in total
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Load a random Pokémon when the page loads
getRandomPokemon();
