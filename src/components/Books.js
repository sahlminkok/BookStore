import BooksList from './BooksList';
import InputBook from './InputBook';

const Books = () => {
  const books = [
    {
      id: 1,
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      category: 'Action',
      completed: 64,
      chapter: 'chapter 17',
    },
    {
      id: 2,
      title: 'Dune',
      author: 'Frank Herbert',
      category: 'Science Fiction',
      completed: 8,
      chapter: 'chapter 3',
    },
    {
      id: 3,
      title: 'Capital in the Twenty-First Century',
      author: 'Suzanne Collins',
      category: 'Science Fiction',
      completed: 0,
      chapter: 'chapter 1',
    },
  ];

  return (
    <>
      <BooksList booksProps={books} />
      <InputBook />
    </>
  );
};

export default Books;
