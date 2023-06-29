import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

const InputBook = () => {
  const dispatch = useDispatch();

  const [book, setBook] = useState({
    title: '',
    author: '',
  });

  const handleChange = (e) => {
    setBook((book) => ({
      ...book,
      [e.target.name]: e.target.value,
    }));
  };

  const handleDispatch = (e) => {
    e.preventDefault();
    const info = [book.title, book.author];
    if (info[0] !== '' || info[1] !== '') {
      dispatch(addBook(info));
      book.title = '';
      book.author = '';
    }
  };

  return (
    <>
      <form>
        <input
          type="text"
          name="title"
          value={book.title}
          placeholder="Book title"
          onChange={handleChange}
        />
        <input
          type="text"
          name="author"
          value={book.author}
          placeholder="Author"
          onChange={handleChange}
        />
        <button type="submit" onClick={handleDispatch}>Add Book</button>
      </form>
    </>
  );
};

export default InputBook;
