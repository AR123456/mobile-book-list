import { createContext, useState } from "react";
import { DATABASE_ID, TABLE_ID } from "../lib/appwrite";
export const BooksContext = createContext();

export function BooksProvider({ children }) {
  const [books, setBooks] = useState([]);
  async function fetchBooks() {
    try {
    } catch (error) {
      console.error(error.message);
    }
  }
  async function fetchBookById(id) {
    try {
    } catch (error) {
      console.error(error.message);
    }
  }
  async function createBook(data) {
    try {
    } catch (error) {
      console.error(error.message);
    }
  }
  async function deleteBook(id) {
    try {
    } catch (error) {
      console.error(error.message);
    }
  }
  async function updateBook() {
    try {
    } catch (error) {
      console.error(error.message);
    }
  }
  return (
    <BooksContext.Provider
      value={{
        books,
        fetchBooks,
        fetchBookById,
        createBook,
        deleteBook,
        updateBook,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
}
