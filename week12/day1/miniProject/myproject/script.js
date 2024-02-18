const container = document.querySelector("#container");
const randomNumber = (max) => {
  return Math.floor(Math.random() * max);
};

const fetchPersonData = async () => {
  try {
    container.innerHTML = `<div id="loader"></div>`;
    const randomNumGenerated = randomNumber(83);
    const res = await fetch(
      `https://www.swapi.tech/api/people/${randomNumGenerated}`
    );
    if (res.ok) {
      const data = await res.json();
      const homeWorld = await fetchPersonHomeworld(
        data.result.properties.homeworld
      );
      const allPersonInfo = createObj(data, homeWorld);
      container.innerHTML = "";

      showData(allPersonInfo);
    } else {
      throw new Error("Failed to fetch data");
    }
  } catch (e) {
    console.log(e);
  }
};

const fetchPersonHomeworld = async (url) => {
  try {
    const res = await fetch(url);
    if (res.ok) {
      const data = await res.json();
      return data;
    } else {
      throw new Error("Could not retrive homeworld");
    }
  } catch (e) {
    console.log(e);
  }
};

const showData = (obj) => {
  const { name, height, birth_year, gender, homeworld } = obj;

  const domName = document.createElement("h2");
  domName.innerText = `${name}`;

  const domHeight = document.createElement("p");
  domHeight.innerText = `Height: ${height}`;

  const domBirthyear = document.createElement("p");
  domBirthyear.innerText = `Birthyear: ${birth_year}`;

  const domGender = document.createElement("p");
  domGender.innerText = `Gender: ${gender}`;

  const domHomeworld = document.createElement("p");
  domHomeworld.innerText = `Homeworld: ${homeworld}`;

  container.append(domName, domHeight, domBirthyear, domGender, domHomeworld);
};

const createObj = (person, homeworld) => {
  const persondata = person.result.properties;
  const homeworlddata = homeworld.result.properties;

  return {
    name: persondata.name,
    height: persondata.height,
    birth_year: persondata.birth_year,
    gender: persondata.gender,
    homeworld: homeworlddata.name,
  };
};
