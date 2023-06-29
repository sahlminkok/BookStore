import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import bookItems from '../../bookItems';

const initialState = {
  booksList: bookItems,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const newBook = {
        id: uuidv4(),
        title: action.payload[0],
        category: 'Science',
        author: action.payload[1],
      };
      state.booksList = [...state.booksList, newBook];
    },
    removeBook: (state, action) => {
      const bookId = action.payload;
      state.booksList = state.booksList.filter((book) => book.id !== bookId);
    },
  },
});

export const { removeBook, addBook } = booksSlice.actions;
export default booksSlice.reducer;
