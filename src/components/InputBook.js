const InputBook = () => (
  <>
    <form>
      <input placeholder="Book title" />
      <select name="Category">
        <option value="">Category</option>
        <option value="science-fiction">Science Fiction</option>
        <option value="action">Action</option>
      </select>
      <button type="button">Add Book</button>
    </form>
  </>
);

export default InputBook;
