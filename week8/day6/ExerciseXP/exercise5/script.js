function makeJuice(size) {
  const ingredients = [];
  function addIngredients(first, second, third) {
    ingredients.push(first, second, third);
  }
  addIngredients("banan", "apple", "orange");
  addIngredients("milk", "water", "sugar");
  function displayJuice() {
    let Ingredients = document.createElement("p");
    let body = document.querySelector("body");
    body.append(Ingredients);
    let str = ingredients.join(", ");
    Ingredients.textContent = ` The client wants a ${size} juice, containing , ${str}`;
  }
  displayJuice();
}
makeJuice("small");
