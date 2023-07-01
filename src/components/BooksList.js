import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookItem from './BookItem';
import { getBooks } from '../redux/books/booksSlice';

const BooksList = () => {
  const dispatch = useDispatch();
  const books = useSelector((store) => store.books.booksList);

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <div>
      {Object.entries(books).map(([itemId, bookArray]) => bookArray.map((book) => (
        <BookItem
          key={itemId}
          itemId={itemId}
          category={book.category}
          title={book.title}
          author={book.author}
        />
      )))}
    </div>
  );
};

export default BooksList;
