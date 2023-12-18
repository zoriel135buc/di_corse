const newDiv = document.getElementById("navBar");
newDiv.setAttribute("id", "socialNetworkNavigation");

const newLi = document.createElement("li");
const textLI = document.createTextNode("Logout");
newLi.appendChild(textLI);
document.getElementById("socialNetworkNavigation").appendChild(newLi);
