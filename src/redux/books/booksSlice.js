import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/7X46V8Dd0WfJBIcm83Iz/books';

export const getBooks = createAsyncThunk('books/getBooks', async () => {
  try {
    const response = await axios.get(baseUrl);
    const result = response.data;
    return result;
  } catch (error) {
    return error.message;
  }
});

export const addBook = createAsyncThunk('books/addBook', async (bookInfo) => {
  const newBook = {
    item_id: uuidv4(),
    title: bookInfo[0],
    category: 'Science',
    author: bookInfo[1],
  };
  try {
    const res = await axios.post(baseUrl, newBook);
    return res.data;
  } catch (error) {
    return error.message;
  }
});

export const removeBook = createAsyncThunk('books/removeBook', async (id) => {
  try {
    const response = await axios.delete(`${baseUrl}/${id}`);
    const result = response.data;
    return result;
  } catch (error) {
    return error.message;
  }
});

const initialState = {
  booksList: [],
  isLoading: false,
  error: null,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.booksList = action.payload;
      })
      .addCase(getBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })

      .addCase(addBook.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addBook.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addBook.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })

      .addCase(removeBook.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(removeBook.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(removeBook.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { extraReducers } = booksSlice.actions;
export default booksSlice.reducer;
