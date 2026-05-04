import { createContext, useState } from "react";
import { account } from "../lib/appwrite";
// generate ids for unique user accounts
import { ID } from "react-native-appwrite";

export const UserContext = createContext();

// provider component to track state for the context
export function UserProvider({ children }) {
  // user getter setter
  const [user, setUser] = useState(null);
  // functions to update or mutate that state
  async function login(email, password) {}
  // getting email and password form the input fields on the forms
  async function register(email, password) {
    try {
      await account.create(ID.unique(), email, password);
    } catch (error) {
      console.log(error.message);
    }
  }
  async function logout() {}
  //   return template the user context and the built in provider context( which supplies values to components it wraps)
  return (
    <UserContext.Provider value={{ user, login, register, logout }}>
      {children}
    </UserContext.Provider>
  );
}
