import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook, getBooks } from '../redux/books/booksSlice';

const BookItem = ({
  itemId, category, title, author,
}) => {
  const dispatch = useDispatch();

  const handleRemoveBtn = async (itemId) => {
    try {
      await dispatch(removeBook(itemId));
      dispatch(getBooks());
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <div>
      <div>
        <p>{category}</p>
        <h2>{title}</h2>
        <p>{author}</p>
      </div>
      <ul>
        <li>
          <button type="button">Comments</button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => handleRemoveBtn(itemId)}
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
  itemId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default BookItem;
