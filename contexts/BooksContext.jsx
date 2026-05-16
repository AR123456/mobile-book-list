import { createContext, useEffect, useState } from "react";

import { databases, DATABASE_ID, TABLE_ID, client } from "../lib/appwrite";
import { Permission, Role, ID, Query } from "react-native-appwrite";
import { useUser } from "../hooks/useUser";

export const BooksContext = createContext();

export function BooksProvider({ children }) {
  const [books, setBooks] = useState([]);
  const { user } = useUser();

  async function fetchBooks() {
    try {
      const response = await databases.listDocuments(DATABASE_ID, TABLE_ID, [
        Query.equal("userId", user.$id),
      ]);
      setBooks(response.documents);
      // console.log(response.documents);
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
      // await databases.createRow(
      await databases.createDocument(
        DATABASE_ID,
        TABLE_ID, // Formerly collectionId
        ID.unique(),
        { ...data, userId: user.$id },
        [
          Permission.read(Role.user(user.$id)),
          Permission.update(Role.user(user.$id)),
          Permission.delete(Role.user(user.$id)),
        ],
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
  // run the getBooks function
  useEffect(() => {
    let unsubscribe;
    if (user) {
      fetchBooks();
    } else {
      //
      setBooks([]);
    }
  }, [user]);
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
