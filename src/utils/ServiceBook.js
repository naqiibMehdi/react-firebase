export const addBookDB = (book) => {
  const request = indexedDB.open("LibraryDB", 1)

  request.onsuccess = (e) => {
    const db = e.target.result

    const bookStore = db
      .transaction(["books"], "readwrite")
      .objectStore("books")

    const addBook = bookStore.put(book)

    addBook.onsuccess = () => {
      console.log("livre ajouté avec succès")
    }
  }
}

export const deleteBookDB = (id) => {
  const request = indexedDB.open("LibraryDB", 1)

  request.onsuccess = (e) => {
    const db = e.target.result

    const bookStore = db
      .transaction(["books"], "readwrite")
      .objectStore("books")

    const addBook = bookStore.delete(id)

    addBook.onsuccess = () => {
      console.log("livre supprimé avec succès")
    }
  }
}

export const updateBookDB = (book) => {
  const request = indexedDB.open("LibraryDB", 1)

  request.onsuccess = (e) => {
    const db = e.target.result

    const bookStore = db
      .transaction(["books"], "readwrite")
      .objectStore("books")

    const addBook = bookStore.put(book)

    addBook.onsuccess = () => {
      console.log("livre mis à jour avec succès")
    }
  }
}
