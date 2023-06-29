import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/booksSlice';

const BookItem = ({ book }) => {
  const dispatch = useDispatch();

  const handleRemoveBtn = () => {
    dispatch(removeBook(book.id));
  };

  return (
    <div>
      <div>
        <p>{book.category}</p>
        <h2>{book.title}</h2>
        <p>{book.author}</p>
      </div>
      <ul>
        <li>
          <button type="button">Comments</button>
        </li>
        <li>
          <button
            type="button"
            onClick={handleRemoveBtn}
          >
            Remove
          </button>
        </li>
        <li>
          <button type="button">Edit</button>
        </li>
      </ul>
      <div>
        <p>
          64%
        </p>
        <p>completed</p>
      </div>
      <div>
        <p>current chapter</p>
        <p>chapter 8</p>
        <button type="button">update progress</button>
      </div>
    </div>
  );
};

BookItem.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    author: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
};

export default BookItem;
