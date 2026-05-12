import { createContext, useState } from "react";

import { databases, DATABASE_ID, TABLE_ID } from "../lib/appwrite";
import { Permission, Role, ID } from "react-native-appwrite";
import { useUser } from "../hooks/useUser";

export const BooksContext = createContext();

export function BooksProvider({ children }) {
  const [books, setBooks] = useState([]);
  const { user } = useUser();
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
      await databases.createRow(
        DATABASE_ID,
        TABLE_ID, // Formerly collectionId
        ID.unique(),
        { ...data, userId: user.$id },
        [Permission.read(Role.user(user.$id))],
        Permission.update(Role.user(user.$id)),
        Permission.delete(Role.user(user.$id)),
      );
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
