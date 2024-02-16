import React, { useEffect, useState } from "react"
import Header from "./Header"
import { useDispatch } from "react-redux"
import { addBook } from "../store/books/BookSlice"
import { useNavigate } from "react-router-dom"
import { postBooksApi } from "../firebase/BooksApi"

function FormAddBook() {
  const [currentBook, setCurrentBook] = useState({})

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChangeBook = (e) => {
    const { name, value } = e.target
    setCurrentBook({ ...currentBook, [name]: value })
  }

  const categories = [
    "Roman",
    "Romane historique",
    "Comte philosophique",
    "Roman social",
    "Poésie",
    "Roman d'aventure",
    "Série de romans",
  ]

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
              value={currentBook.title || ""}
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
              value={currentBook.description || ""}
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
              value={currentBook.url || ""}
              onChange={() => null}
            />
          </div>
          <label htmlFor="category">Catégories</label>
          <select
            className="form-select"
            value={currentBook.category || ""}
            onChange={handleChangeBook}
            name="category"
            id="category"
          >
            <option value="">Toutes les catégories</option>
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
                const data = await postBooksApi(
                  currentBook.title,
                  currentBook.description,
                  currentBook.category
                )
                dispatch(addBook({ id: data.name.split("/")[6], currentBook }))
                setCurrentBook({})
                navigate("/")
              }}
            >
              Ajouter le livre
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default FormAddBook
