'use client'

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@mui/material";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";
import { relative } from "path";

const BookFilter = ({ books, initialBooks, showFilter, customGridCols, customBorder, customGap }) => {
  const [filter, setFilter] = useState("");
  const [filteredBooks, setFilteredBooks] = useState(initialBooks || []);

  const handleSearch = () => {
    const lowerCaseFilter = filter.toLowerCase();
    let filtered = books.filter((book) => {
      return (
        book.title?.toLowerCase().includes(lowerCaseFilter) ||
        "" ||
        book.author?.toLowerCase().includes(lowerCaseFilter) ||
        "" ||
        book.publication_year?.toString().includes(lowerCaseFilter) ||
        ""
      );
    });

    if (!isNaN(filter)) {
      const exactMatch = books.filter(
        (book) => book.price === parseFloat(filter)
      );
      if (exactMatch.length > 0) {
        filtered = exactMatch;
      } else {
        const lowerPriceMatch = books.filter(
          (book) => book.price < parseFloat(filter)
        );
        filtered =
          lowerPriceMatch.length > 0
            ? lowerPriceMatch
            : [
                {
                  title: "沒有找到匹配價格的書藉",
                  author: "",
                  publication_year: "",
                  price: "",
                  cover_image: "/images/nothisbook.png",
                },
              ];
      }
    }
    setFilteredBooks(filtered);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };
  const handleReset = () => {
    setFilter("");
    setFilteredBooks(initialBooks || books.slice(0, 21));
  };


  useEffect(() => {
    if (!filter) {
      setFilteredBooks(initialBooks || books.slice(0, 21));
    }
  }, [books, initialBooks, filter]);
  return (
    <>
      {
      showFilter && (
        <div className="mb-4 flex">
          <input
            type="text"
            placeholder="Filter by title, author, or price"
            value={filter}
            onChange={handleFilterChange}
            className="border p-2 mr-2 flex-grow rounded-md border-sky-600 focus:ring focus:ring-sky-500 focus:outline-none focus:outline-sky-400 focus:outline-1"
            style={{ width: "80%" }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSearch}
            className="mr-2"
            style={{ width: "10%", marginRight:'10px' }}
          >
            <SearchIcon /> 
            查詢
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleReset}
            style={{ width: "10%" }}
          >
            重設
          </Button>
        </div>
      )}
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 ${
          customGridCols || "md:grid-cols-3"} gap-4 ${customGap} relative `}
      >
          {
          filteredBooks.map((book, index) => (
            <div
              key={book.id || index}
              className={`bookFilter shadow-md hover:shadow-2xl rounded p-4 flex flex-col items-center ${customBorder} truncate leading-4`}
            >
              <Image
                src={book.cover_image || '/images/nothisbook.png'}
                alt={book.title}
                width={1000}
                height={1000}
                className="w-full h-auto hover:scale-110 mb-5"
                style={{ width: "300px", height: "300px" }}
                // style={{ width: "100%", height: "auto" }}
                priority
              />
              <h2 className="text-2xl font-bold mb-1">{book.title}</h2>
              <p className="mb-1">
                <strong>作者: </strong>
                <span className="font-semibold">{book.author}</span>
              </p>
              <p className="mb-1">
                <strong>年份: </strong> <span className="font-medium">{book.publication_year}</span>
              </p>
              <p className="mb-1">
                <strong>價格: </strong>
                <strong>${book.price}</strong>
              </p>

              <div className="p-2">
                <Button
                  className="hover:text-orange-500 font-semibold text"
                  variant="contained"
                  color="primary"
                  component={Link}
                  href={`/books/${book.id}`}
                  style={{textShadow:'none'}}
                >
                  詳細資料
                </Button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default BookFilter;