import { useState } from "react"
import imageBook from "../assets/book.png"
import { useDispatch } from "react-redux"
import { deleteBook, setBook } from "../store/books/BookSlice"
import { useNavigate } from "react-router-dom"
import { deleteBooksApi } from "../firebase/BooksApi"

function Book({ book }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <>
      <div className="d-flex align-items-center column-gap-4 w-100 pt-4">
        <img src={imageBook} alt="" width="100" height="100" />
        <div>
          <p className="mb-1">{book.title}</p>
          <p className="mb-1">{book.description}</p>
          <p className="m-0">Catégorie: {book.category}</p>
        </div>
        <div>
          <button
            className="btn btn-primary mx-2"
            onClick={() => {
              dispatch(setBook(book))
              navigate(`/edit-book/${book.id}`)
            }}
          >
            Editer
          </button>
          <button
            className="btn btn-primary"
            onClick={async () => {
              await deleteBooksApi(book.id)
              dispatch(deleteBook(book.id))
            }}
          >
            Supprimer
          </button>
        </div>
      </div>
    </>
  )
}

export default Book
