import React from 'react';
import { useSelector } from 'react-redux';
import BookItem from './BookItem';

const BooksList = () => {
  const { booksList } = useSelector((store) => store.books);

  // if (bookItems.length === 0) {
  //   return <div>You didn&apos;t insert a book yet</div>;
  // }
  return (
    <div>
      {booksList.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BooksList;
