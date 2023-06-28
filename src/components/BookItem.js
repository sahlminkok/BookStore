import PropTypes from 'prop-types';

const BookItem = ({ itemProp }) => (
  <div>
    <div>
      <p>{itemProp.category}</p>
      <h2>{itemProp.title}</h2>
      <p>{itemProp.author}</p>
    </div>
    <ul>
      <li>
        <button type="button">Comments</button>
      </li>
      <li>
        <button type="button">
          Remove
        </button>
      </li>
      <li>
        <button type="button">Edit</button>
      </li>
    </ul>
    <div>
      <p>
        {itemProp.completed}
        %
      </p>
      <p>completed</p>
    </div>
    <div>
      <p>current chapter</p>
      <p>{itemProp.chapter}</p>
      <button type="button">update progress</button>
    </div>
  </div>
);

BookItem.propTypes = {
  itemProp: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    author: PropTypes.string,
    category: PropTypes.string,
    completed: PropTypes.number,
    chapter: PropTypes.string,
  }).isRequired,
};

export default BookItem;
