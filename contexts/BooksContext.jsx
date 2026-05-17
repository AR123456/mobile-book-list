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
      //  could update state here but opting for real time data instead
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
  // setting up real time subscription
  useEffect(() => {
    let unsubscribe;
    // set up appwrite channel to listen to - this may need to be .table
    const channel = `databases.${DATABASE_ID}.collections.${TABLE_ID}.documents`;
    if (user) {
      // only fetch the data if the user is authenticated
      fetchBooks();
      unsubscribe = client.subscribe(channel, (response) => {
        //destructure - events is an array
        const { payload, event } = response;
        // listen for a create event- use its payload to update state - looking for word create
        if (events[0].includes("create")) {
          //use payload to update state
        }
      });
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
