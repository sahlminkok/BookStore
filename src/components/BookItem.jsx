import PropTypes from 'prop-types';

const BookItem = ({ itemProp, deleteBook }) => {
  return (
    <li>
      <div>
        <p>{itemProp.category}</p>
        <h2>{itemProp.name}</h2>
        <p>{itemProp.author}</p>
      </div>
      <div>
        <button>Comments</button>
        <button onClick={() => deleteBook(itemProp.id)} >Remove</button>
        <button>Edit</button>
      </div>
    </li>
  );
};

BookItem.propTypes = {
  itemProp: PropTypes.object.isRequired,
  deleteBook: PropTypes.func.isRequired,
};

export default BookItem;
