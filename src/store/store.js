import { configureStore } from "@reduxjs/toolkit"
import BookSlice from "./books/BookSlice"

export const store = configureStore({
  reducer: {
    book: BookSlice,
  },
})
