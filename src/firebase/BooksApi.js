import axios from "axios"
const apiKey = import.meta.env.VITE_API_KEY
const projectId = import.meta.env.VITE_PROJECT_ID
const url_get_post = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/books?key=${apiKey}`

export const getBooksApi = async () => {
  try {
    let tempBooks = []
    const response = await axios.get(url_get_post)
    if (response.data.documents) {
      for (let book of response.data.documents) {
        const { title, description, category } = book.fields
        let bookObject = {
          id: book.name.split("/")[6],
          title: title.stringValue,
          description: description.stringValue,
          category: category.stringValue,
        }
        tempBooks.push(bookObject)
      }
      return tempBooks
    }
    return []
  } catch (error) {
    console.log(error)
  }
}

export const postBooksApi = async (title, description, category) => {
  try {
    let bodyPostBook = {
      fields: {
        title: {
          stringValue: title,
        },
        description: {
          stringValue: description,
        },
        category: {
          stringValue: category,
        },
      },
    }
    const response = await axios.post(url_get_post, bodyPostBook, {
      headers: {
        "Content-Type": "application/json",
      },
    })

    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const patchBooksApi = async (idBook, title, description, category) => {
  try {
    let bodyPostBook = {
      fields: {
        title: {
          stringValue: title,
        },
        description: {
          stringValue: description,
        },
        category: {
          stringValue: category,
        },
      },
    }
    const url_patch_delete = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/books/${idBook}?key=${apiKey}`
    const response = await axios.patch(url_patch_delete, bodyPostBook, {
      headers: {
        "Content-Type": "application/json",
      },
    })

    console.log("mise à jour effectuée avec succès")
  } catch (error) {
    console.log(error)
  }
}

export const deleteBooksApi = async (idBook) => {
  try {
    const url_patch_delete = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/books/${idBook}?key=${apiKey}`
    await axios.delete(url_patch_delete)

    console.log("suppression du livre avec succès")
  } catch (error) {
    console.log(error)
  }
}
