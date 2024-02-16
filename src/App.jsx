import { Route, Routes } from "react-router-dom"
import Books from "./components/Books"
import FormAddBook from "./components/FormAddBook"
import FormUpdateBook from "./components/FormUpdateBook"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/add-book" element={<FormAddBook />} />
        <Route path="/edit-book/:id" element={<FormUpdateBook />} />
      </Routes>
    </>
  )
}

export default App
