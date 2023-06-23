import PropTypes from 'prop-types';
import BookItem from './BookItem';

const BooksList = ({ booksProps, deleteBook }) => {
  if (!booksProps) {
    return <div>You didn&apos;t insert a book yet</div>;
  }
  return (
    <ul>
      {booksProps.map((book) => (
        <BookItem key={book.id} itemProp={book} deleteBook={deleteBook} />
      ))}
    </ul>
  );
};

BooksList.propTypes = {
  booksProps: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  deleteBook: PropTypes.func.isRequired,
};

export default BooksList;
