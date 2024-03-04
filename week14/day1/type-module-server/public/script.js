// fetch("http://localhost:3001/all")
//   .then((res) => res.json())
//   .then((products) => {
//     render(products);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const all = async () => {
  try {
    const res = await fetch("http://localhost:3001/all");
    const data = await res.json();
    render(data);
  } catch (error) {
    console.log(error);
  }
};
all();

const searchProduct = () => {
  const name = document.getElementById("productname").value;
  fetch(`http://localhost:3001/search?name=${name}`)
    .then((res) => res.json())
    .then((products) => {
      render(products);
    })
    .catch((err) => {
      console.log(err);
    });
};

const render = (arr) => {
  const html = arr.map((item) => {
    return `<div style="
        display:inline-block;
        margin:20px;
        padding:20px;
        border:1px solid #000;
        text-align:center;  
      ">
      <h2>${item.name}</h2>
      <h3>${item.price}</h3>
      </div>`;
  });
  document.getElementById("root").innerHTML = html.join("");
};
