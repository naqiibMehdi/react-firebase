import React, { useEffect, useState } from "react"
import Header from "./Header"
import { useSelector, useDispatch } from "react-redux"
import { updateBook, setBook } from "../store/books/BookSlice"
import { useNavigate } from "react-router-dom"
import { updateBookDB } from "../utils/ServiceBook"
import { patchBooksApi } from "../firebase/BooksApi"

function FormUpdateBook() {
  const categories = [
    "Roman",
    "Romane historique",
    "Comte philosophique",
    "Roman social",
    "Poésie",
    "Roman d'aventure",
    "Série de romans",
  ]
  const [currentBook, setCurrentBook] = useState({})
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { book } = useSelector((state) => state.book)

  const handleChangeBook = (e) => {
    const { name, value } = e.target
    setCurrentBook({ ...currentBook, [name]: value })
  }

  return (
    <>
      <Header />
      <div className="w-50 container">
        <form className="bg-white p-3 rounded h-100 d-flex flex-column gap-4">
          <p className="fs-2">Ajouter un utilisateur</p>
          <div className="form-group">
            <label htmlFor="title" className="mb-2">
              Titre
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={currentBook.title || book.title}
              onChange={handleChangeBook}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description" className="mb-2">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              value={currentBook.description || book.description}
              onChange={handleChangeBook}
            />
          </div>
          <div className="form-group">
            <label htmlFor="url" className="mb-2">
              URL de l'imurl
            </label>
            <input
              type="text"
              className="form-control"
              id="url"
              name="url"
              value={""}
              onChange={() => null}
            />
          </div>
          <label htmlFor="category">Catégories</label>
          <select
            className="form-select"
            value={currentBook.category || book.category}
            onChange={handleChangeBook}
            name="category"
            id="category"
          >
            {categories.map((category, i) => (
              <option value={category} key={i}>
                {category}
              </option>
            ))}
          </select>
          <div className="d-flex flex-column row-gap-3">
            <button
              className="btn btn-primary"
              type="submit"
              onClick={async (e) => {
                e.preventDefault()
                await patchBooksApi(
                  book.id,
                  currentBook.title || book.title,
                  currentBook.description || book.description,
                  currentBook.category || book.category
                )
                dispatch(
                  updateBook({
                    id: book.id,
                    title: currentBook.title || book.title,
                    description: currentBook.description || book.description,
                    category: currentBook.category || book.category,
                  })
                )
                // updateBookDB({
                //   id: book.id,
                //   title: currentBook.title || book.title,
                //   description: currentBook.description || book.description,
                //   category: currentBook.category || book.category,
                // })
                dispatch(setBook({}))
                navigate("/")
              }}
            >
              Mettre à jour le livre
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default FormUpdateBook
