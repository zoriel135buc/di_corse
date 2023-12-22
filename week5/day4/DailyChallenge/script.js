<<<<<<< HEAD
const button = getbutton();
button.addEventListener("click", handleClick);

function handleClick(e) {
  e.preventDefault();
  const noun = document.getElementById("noun").value;
  const adjective = document.getElementById("adjective").value;
  const person = document.getElementById("person").value;
  const verb = document.getElementById("verb").value;
  const place = document.getElementById("place").value;

  if (
    noun == " " ||
    adjective == "" ||
    person == "" ||
    verb == "" ||
    place == ""
  )
    return;
  const Story = writeStory(noun.adjective, person, verb, place);
  console.log(`story`, Story);
  appenStoryToPage(Story);
}

function appenStoryToPage(story) {
  const paragraph = document.getElementById("story");
  const sapn = document.createElement("span");
  sapn.innerText = story;
  paragraph.appendChild(sapn);
}

function writeStory(noun, adjective, person, verb, place) {
  return `i like to look at ${noun}s , i think that are ${adjective}. my favorite person is ${person}. we often ${verb} together when we are in ${place} `;
}

function getbutton() {
  return document.getElementById("lib-button");
}
=======
const button = getbutton();
button.addEventListener("click", handleClick);

function handleClick(e) {
  e.preventDefault();
  const noun = document.getElementById("noun").value;
  const adjective = document.getElementById("adjective").value;
  const person = document.getElementById("person").value;
  const verb = document.getElementById("verb").value;
  const place = document.getElementById("place").value;

  if (
    noun == " " ||
    adjective == "" ||
    person == "" ||
    verb == "" ||
    place == ""
  )
    return;
  const Story = writeStory(noun.adjective, person, verb, place);
  console.log(`story`, Story);
  appenStoryToPage(Story);
}

function appenStoryToPage(story) {
  const paragraph = document.getElementById("story");
  const sapn = document.createElement("span");
  sapn.innerText = story;
  paragraph.appendChild(sapn);
}

function writeStory(noun, adjective, person, verb, place) {
  return `i like to look at ${noun}s , i think that are ${adjective}. my favorite person is ${person}. we often ${verb} together when we are in ${place} `;
}

function getbutton() {
  return document.getElementById("lib-button");
}
>>>>>>> 379a1cdbe8378079caf73d6115b436c9795c6cc3
