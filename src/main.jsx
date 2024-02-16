import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { store } from "./store/store.js"
import { fetchedBooks } from "./data/message.js"
import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css"

// const request = indexedDB.open("LibraryDB", 1)

// request.onupgradeneeded = (e) => {
//   const db = e.target.result

//   const bookStore = db.createObjectStore("books", { keyPath: "id" })

//   for (let book of fetchedBooks) {
//     bookStore.put(book)
//   }
// }

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
