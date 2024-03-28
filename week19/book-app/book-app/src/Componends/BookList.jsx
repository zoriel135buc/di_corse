import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../App";
import BookCard from "./BookCard";

const BookList = (props) => {
  const { searchTerm, sortuse, books, setBooks } = useContext(AppContext);
  const fetchData = async () => {
    try {
      const res = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`
      );
      const data = await res.json();

      // console.log("data", data.items);
      if (data && data.items) setBooks(data.items);
    } catch (err) {
      console.log(err);
    }
  };
  const bookSort = () => {
    if (sortuse == "old") {
      books.sort(
        (a, b) =>
          new Date(a?.volumeInfo.publishedDate) -
          new Date(b?.volumeInfo.publishedDate)
      );
    } else if (sortuse == "new") {
      books.sort(
        (a, b) =>
          new Date(b?.volumeInfo.publishedDate) -
          new Date(a?.volumeInfo.publishedDate)
      );
    } else {
      return;
    }

    setBooks([...books]);
  };
  useEffect(() => {
    bookSort();
  }, [sortuse]);
  useEffect(() => {
    if (!searchTerm) return;
    fetchData();
  }, [searchTerm]);
  return (
    <>
      <h1>bookList</h1>
      <div>
        {books.map((item, index) => {
          return (
            <div key={index}>
              <BookCard item={item} />;
            </div>
          );
        })}
      </div>
    </>
  );
};

export default BookList;
