const form = document.forms[0];
const div = document.querySelector("#container");
const apiKey = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  try {
    const inputValue = form.children[0].value;
    const res = await fetch(`https://api.giphy.com/v1/gifs/search?q=${inputValue}&api_key=${apiKey}&limit=1`);
    if (res.ok) {
      const data = await res.json();
      const img = document.createElement("img");
      const containerDiv = document.createElement("div");
      const deleteButton = document.createElement("button");

      deleteButton.innerText = `Delete ${inputValue} gif`;
      img.src = data.data[0].images.original.url;
      img.style.width = "200px";
      deleteButton.addEventListener("click", () => {
        containerDiv.remove();
      });

      containerDiv.style =
        "display:inline-block; width:300px; height:250px; display:flex; justify-content:center;align-items:center; border:1px solid black; margin:5px;flex-direction:column;";
      containerDiv.append(img, deleteButton);
      div.append(containerDiv);
    } else {
      throw new Error("there was an error");
    }
  } catch (e) {
    console.log(e);
  }
});

const deleteAllButton = document.getElementById("deleteAllButton");

deleteAllButton.addEventListener("click", () => {
  div.innerHTML = "";
});
