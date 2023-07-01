import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook, getBooks } from '../redux/books/booksSlice';
import '../styles/bookItem.css';

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
    <div className="book">
      <div className="group">
        <div className="bookElm">
          <p>{category}</p>
          <h2>{title}</h2>
          <p>{author}</p>
        </div>
        <div className="CREBtn">
          <button type="button">Comments</button>
          <button
            type="button"
            onClick={() => handleRemoveBtn(itemId)}
          >
            Remove
          </button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="group2">
        <div className="completed">
          <div className="progress"> </div>
          <div className="cmpltd">
            <p>64%</p>
            <p>completed</p>
          </div>
        </div>
        <div className="chapter">
          <p>current chapter</p>
          <p>Chapter 8</p>
          <button type="button">update progress</button>
        </div>
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
