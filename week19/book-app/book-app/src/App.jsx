import { createContext, useState } from "react";
import ErrorBoundary from "./Componends/ErrorHandling.jsx";
import Header from "./Componends/Header";
import Book from "./Componends/Book";
import BookList from "./Componends/BookList";
import BookCard from "./Componends/BookCard";
import "./App.css";
export const AppContext = createContext();
function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortuse, setSortUse] = useState();
  const [input, setInput] = useState("");
  const [books, setBooks] = useState([]);

  return (
    <>
      <ErrorBoundary>
        <AppContext.Provider
          value={{
            searchTerm,
            setSearchTerm,
            sortuse,
            setSortUse,
            input,
            setInput,
            books,
            setBooks,
          }}
        >
          <Header />
          <Book />
          <BookList />
          <BookCard />
        </AppContext.Provider>
      </ErrorBoundary>
    </>
  );
}

export default App;
