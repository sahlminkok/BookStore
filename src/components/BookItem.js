import PropTypes from 'prop-types';

const BookItem = ({ itemProp, deleteBook }) => (
  <li>
    <div>
      <p>{itemProp.category}</p>
      <h2>{itemProp.name}</h2>
      <p>{itemProp.author}</p>
    </div>
    <div>
      <button type="button">Comments</button>
      <button type="button" onClick={() => deleteBook(itemProp.id)}>
        Remove
      </button>
      <button type="button">Edit</button>
    </div>
  </li>
);

BookItem.propTypes = {
  itemProp: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  deleteBook: PropTypes.func.isRequired,
};

export default BookItem;
