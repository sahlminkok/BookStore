import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook, getBooks } from '../redux/books/booksSlice';

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

  const handleDispatch = async (e) => {
    e.preventDefault();
    const bookInfo = [book.title, book.author];
    if (bookInfo[0] !== '' || bookInfo[1] !== '') {
      try {
        await dispatch(addBook(bookInfo));
        dispatch(getBooks());
        setBook({ title: '', author: '' });
      } catch (error) {
        throw new Error(error);
      }
    }
  };

  return (
    <div>
      <h2>Add a Book</h2>
      <form onSubmit={handleDispatch}>
        <input
          type="text"
          name="title"
          value={book.title}
          onChange={handleChange}
          placeholder="Title"
          required
        />
        <input
          type="text"
          name="author"
          value={book.author}
          onChange={handleChange}
          placeholder="Author"
          required
        />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default InputBook;
