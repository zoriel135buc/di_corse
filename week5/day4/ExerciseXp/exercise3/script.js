let allBoldItems;

function getBoldItems() {
  allBoldItems = document.getElementsByTagName("strong");
}
function highlight() {
  getBoldItems();
  for (const bolditem of allBoldItems) {
    console.log((bolditem.style.color = "blue"));
  }
}
highlight();

function returnItemsToDefault() {
  getBoldItems();
  for (const item of allBoldItems) {
    item.style.color = "black";
  }
}
returnItemsToDefault();

const paragraph = document.querySelector("p");
paragraph.addEventListener("mouseover", highlight);
paragraph.addEventListener("mouseour", returnItemsToDefault);
