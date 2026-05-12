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
  async function fetchBookById() {
    try {
    } catch (error) {
      console.error(error.message);
    }
  }
  async function createBook() {
    try {
    } catch (error) {
      console.error(error.message);
    }
  }
  async function deleteBook() {
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
}
