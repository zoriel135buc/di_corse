(function (userName) {
  let div = document.createElement("div");
  div.innerText = userName;
  let nav = document.querySelector("nav");
  let image = document.createElement("img");
  image.src =
    "https://wallpapers.com/images/hd/cool-profile-picture-87h46gcobjl5e4xu.jpg";
  image.style.width = "100px";
  nav.append(div, image);
})("john");
