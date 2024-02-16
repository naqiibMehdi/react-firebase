import { createSlice } from "@reduxjs/toolkit"
import { v4 as uuidv4 } from "uuid"
// import { addBookDB, deleteBookDB } from "../../utils/ServiceBook"

export const BookSlice = createSlice({
  name: "book",
  initialState: {
    books: [],
    book: {},
  },
  reducers: {
    setBooks: (state, { payload }) => {
      state.books = payload
    },
    addBook: (state, { payload }) => {
      // addBookDB({ id: uuidv4(), ...payload })
      state.books.push({ id: payload.id, ...payload })
    },
    deleteBook: (state, { payload }) => {
      // deleteBookDB(payload)
      state.books = state.books.filter((book) => book.id !== payload)
    },
    setBook: (state, { payload }) => {
      state.book = payload
    },
    updateBook: (state, { payload }) => {
      const indexBook = state.books.findIndex(
        (book) => book.id.toString() === payload.id.toString()
      )
      state.books[indexBook].title = payload.title
      state.books[indexBook].description = payload.description
      state.books[indexBook].category = payload.category
    },
  },
})

export const { setBooks, addBook, deleteBook, setBook, updateBook } =
  BookSlice.actions

export default BookSlice.reducer
