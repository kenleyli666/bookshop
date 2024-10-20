"use client";

import React, { useContext, useEffect, useState } from "react";
import BookFilter from "../components/bookFilter.jsx";
import "../globals.css";
import axios from "axios";
import ShoppingCartContext from "../contextCart.js";
import FavouriteContext from "../contextFavourite.js";

const books = () => {
  const [books, setBooks] = useState([]);
  const fetchBooks = async () => {
    try {
      const response = await axios.get(
        "https://kenleyli666.github.io/booksApi/books.json"
      ); // Assuming you have an endpoint that returns all books
      setBooks(response.data.books);
    } catch (error) {
      console.error("Error fetching the books data:", error);
    }
  };

  // Fetching all books on component mount
  useEffect(() => {
    fetchBooks();
  }, []);
  return (
    <>
      <div className="relative p-4 orange-mode mb-20" style={{ top: "10vh" }}>
        <BookFilter books={books} initialBooks={books} showFilter={true} />
      </div>
    </>
  );
};

export default books;
