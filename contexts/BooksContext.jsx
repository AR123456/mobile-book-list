import { createContext, useState } from "react";

export const BooksContext = createContext();

export function BooksProvider({ children }) {
  const [books, setBooks] = useState;
  async function fetchBooks() {}
  async function fetchBookById() {}
  async function createBook() {}
  async function deleteBook() {}
  async function updateBook() {}
}
