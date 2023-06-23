import InputBook from "./InputBook";
import BooksList from "./BooksList";
import { useState } from "react";

const BooksLogic = () => {
  const [books, setBooks] = useState([
    {
      id: 1,
      name: "The Hunger Games",
      author: "Suzanne Collins",
      category: "Action",
    },
    {
      id: 2,
      name: "Dune",
      author: "Frank Herbert",
      category: "Science Fiction",
    },
    {
      id: 3,
      name: "Capital in the Twenty-First Century",
      author: "Suzanne Collins",
      category: "Science Fiction",
    },
  ]);

  const deleteBook = (id) => {
    setBooks((prevBooks) => {
      const updatedBooks = prevBooks.filter((book) => book.id !== id);
      return updatedBooks.map((book, index) => ({ ...book, id: index + 1 }));
    });
  };
  
  return (
    <div>
      <BooksList booksProps={books} deleteBook={deleteBook} />
      <InputBook />
    </div>
  );
};

export default BooksLogic;
