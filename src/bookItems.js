import { v4 as uuidv4 } from 'uuid';

const bookItems = [
  {
    id: uuidv4(),
    title: 'The Great Gatsby',
    author: 'John Smith',
    category: 'Fiction',
  },
  {
    id: uuidv4(),
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
    category: 'Fiction',
  },
  {
    id: uuidv4(),
    title: 'The Selfish Gene',
    author: 'Richard Dawkins',
    category: 'Nonfiction',
  },
];

export default bookItems;
