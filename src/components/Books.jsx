import { useEffect, useState } from "react"
import Book from "./Book"
import Header from "./Header"
import { useDispatch, useSelector } from "react-redux"
import { setBooks } from "../store/books/BookSlice"
import { getBooksApi } from "../firebase/BooksApi"

function Books() {
  const dispatch = useDispatch()
  const { books } = useSelector((state) => state.book)

  useEffect(() => {
    const getBooks = async () => {
      dispatch(setBooks(await getBooksApi()))
    }

    getBooks()
  }, [])

  return (
    <>
      <Header />
      <main className="container w-50 d-flex flex-column align-items-start border border-dark border-top-0 border-bottom-0 px-4">
        {books &&
          books.map((book) => {
            return <Book book={book} key={book.id} />
          })}
        <p>{books.length === 0 && "aucun livre disponible !"}</p>
      </main>
    </>
  )
}

export default Books
