import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  booksList: [],
};

const booksSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state) => {
      const newBook = {
        id: 4,
        title: 'Book',
        category: 'cat',
        author: 'me',
        completed: 45,
        chapter: 'chapter 89',
      };
      state.booksList = [...state.booksList, newBook];
    },
    removeBook: (state, id) => {
      const bookId = id;
      state.booksList = state.booksList.filter((book) => book.id !== bookId);
    },
  },
});

export const { removeBook } = booksSlice.actions;
export default booksSlice.reducer;
