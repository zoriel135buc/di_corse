const books = [
  {
    title: "Harry Potter 1",
    author: "JK ROWLING",
    image:
      "https://upload.wikimedia.org/wikipedia/en/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg",
    alreadyRead: true,
  },
  {
    title: "Harry Potter 2",
    author: "JK ROWLING",
    image:
      "https://prodimage.images-bn.com/pimages/9780545139700_p0_v5_s1200x630.jpg",
    alreadyRead: false,
  },
];

const container = document.querySelector(".listBooks");
const table = document.createElement("table");
const headerRow = document.createElement("tr");
const thTitle = document.createElement("th");
const thAuthor = document.createElement("th");
const thimage = document.createElement("th");
thTitle.textContent = "Title";
thAuthor.textContent = "Author";
thimage.textContent = "Img";
table.style.border = "1px solid";
container.append(table);
table.append(headerRow);
headerRow.append(thTitle, thAuthor, thimage);

for (let i = 0; i < books.length; i++) {
  console.log(books[i]);
  const tr = document.createElement("tr");
  const tdTitle = document.createElement("td");
  const tdAuthor = document.createElement("td");
  const tdImage = document.createElement("td");
  if (books[i].alreadyRead) {
    tdAuthor.style.color = "red";
    tdTitle.style.color = "red";
  }
  tdTitle.textContent = books[i].title;
  tdAuthor.textContent = books[i].author;
  tdImage.innerHTML = `<img src='${books[i].image}' width="100px"/>`;
  table.append(tr);
  tr.append(tdTitle, tdAuthor, tdImage);
}

let obj = {
  title: "harry potter",
};

console.log(obj.title);
