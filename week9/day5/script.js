const quotes = [
  {
    id: 0,
    author: `J D Salinger`,
    quote: `What really knocks me out is a book that, when youre all done reading it, you wish the author that wrote it was a terrific friend of yours and you could call him up on the phone whenever you felt like it. That doesnt happen much, though.`,
  },
  {
    id: 1,
    author: `Thomas Mann`,
    quote: `A writer is someone for whom writing is more difficult than it is for other people`,
  },
  {
    id: 2,
    author: `Ernest Hemingway`,
    quote: `All good books are alike in that they are truer than if they had really happened and after you are finished reading one you will feel that all that happened to you and afterwards it all belongs to you: the good and the bad, the ecstasy, the remorse and sorrow, the people and the places and how the weather was. If you can get so that you can give that to people, then you are a writer.`,
  },
  {
    id: 3,
    author: `Louisa May Alcott`,
    quote: `I've got the key to my castle in the air, but whether I can unlock the door remains to be seen.`,
  },
  {
    id: 4,
    author: `G.K. Chesterton`,
    quote: `A good novel tells us the truth about its hero; but a bad novel tells us the truth about its author`,
  },
  {
    id: 5,
    author: `Flannery O'Connor`,
    quote: `Anybody who has survived his childhood has enough information about life to last him the rest of his days`,
  },
  {
    id: 6,
    author: `Carlos Ruiz Zafón`,
    quote: `A story is a letter that the author writes to himself, to tell himself things that he would be unable to discover otherwise.`,
  },
];

let previousQuoteId = -1;
let filteredQuotes = [];
let currentFilteredIndex = -1;

const generateQuote = () => {
  let randomIndex;

  do {
    randomIndex = Math.floor(Math.random() * quotes.length);
  } while (randomIndex === previousQuoteId);

  previousQuoteId = randomIndex;

  const quoteText = document.getElementById("quote-text");
  const authorText = document.getElementById("author-text");

  quoteText.textContent = quotes[randomIndex].quote;
  authorText.textContent = "- " + quotes[randomIndex].author;
};

const addQuote = (quote, author) => {
  const newQuote = {
    id: quotes.length,
    author: author,
    quote: quote,
    likes: 0,
  };

  quotes.push(newQuote);
};

const updateLikes = () => {
  const currentQuoteId = previousQuoteId;
  quotes[currentQuoteId].likes += 1;

  console.log(
    `Quote ${currentQuoteId} Liked! Likes: ${quotes[currentQuoteId].likes}`
  );
};

const filterQuotes = (author) => {
  filteredQuotes = quotes.filter(
    (quote) => quote.author.toLowerCase() === author.toLowerCase()
  );
  currentFilteredIndex = -1;
  displayFilteredQuote();
};

const displayFilteredQuote = () => {
  const filteredQuoteText = document.getElementById("filtered-quote-text");
  const filteredAuthorText = document.getElementById("filtered-author-text");

  if (filteredQuotes.length === 0) {
    filteredQuoteText.textContent = "No quotes found for the specified author.";
    filteredAuthorText.textContent = "";
    document.getElementById("prev-button").disabled = true;
    document.getElementById("next-button").disabled = true;
  } else {
    currentFilteredIndex =
      (currentFilteredIndex + filteredQuotes.length) % filteredQuotes.length;
    const currentFilteredQuote = filteredQuotes[currentFilteredIndex];

    filteredQuoteText.textContent = currentFilteredQuote.quote;
    filteredAuthorText.textContent = "- " + currentFilteredQuote.author;

    document.getElementById("prev-button").disabled =
      currentFilteredIndex === 0;
    document.getElementById("next-button").disabled =
      currentFilteredIndex === filteredQuotes.length - 1;
  }
};

const generateButton = document.getElementById("generate-button");
const charCountButton = document.getElementById("char-count");
const charCountNoSpaceButton = document.getElementById("char-count-no-space");
const wordCountButton = document.getElementById("word-count");
const likeButton = document.getElementById("like-button");
const filterButton = document.getElementById("filter-button");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

generateButton.addEventListener("click", generateQuote);
charCountButton.addEventListener("click", getCharCountWithSpace);
charCountNoSpaceButton.addEventListener("click", getCharCountWithoutSpace);
wordCountButton.addEventListener("click", getWordCount);
likeButton.addEventListener("click", updateLikes);
filterButton.addEventListener("click", function () {
  const authorFilter = document.getElementById("author-filter").value;
  filterQuotes(authorFilter);
});
prevButton.addEventListener("click", displayFilteredQuote);
nextButton.addEventListener("click", displayFilteredQuote);

const addQuoteButton = document.getElementById("add-quote-button");
addQuoteButton.addEventListener("click", function () {
  const quoteInput = document.getElementById("quote-input").value;
  const authorInput = document.getElementById("author-input").value;

  if (quoteInput && authorInput) {
    addQuote(quoteInput, authorInput);
    document.getElementById("add-quote-form").reset();
  }
});

generateQuote();
