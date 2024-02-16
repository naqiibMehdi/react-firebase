import { useState } from "react"
import { Link } from "react-router-dom"

function Header() {
  return (
    <>
      <header className="bg-dark py-3">
        <nav>
          <ul className="d-flex justify-content-center align-items-center gap-4 list-unstyled m-0">
            <li>
              <Link to="/" className="text-white">
                Accueil
              </Link>
            </li>
            <li>
              <Link to="/add-book" className="text-white">
                Ajouter un livre
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header
