import PropTypes from 'prop-types';
import BookItem from './BookItem';

const BooksList = ({ booksProps }) => {
  if (!booksProps) {
    return <div>You didn&apos;t insert a book yet</div>;
  }
  return (
    <div>
      {booksProps.map((book) => (
        <BookItem key={book.id} itemProp={book} />
      ))}
    </div>
  );
};

BooksList.propTypes = {
  booksProps: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    author: PropTypes.string,
    category: PropTypes.string,
  })).isRequired,
};

export default BooksList;
