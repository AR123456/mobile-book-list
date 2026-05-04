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
  async function login(email, password) {
    try {
      // create session
      await account.createEmailPasswordSession(email, password);
      // get the created session from server
      const response = await account.get();
      // setter
      setUser(response);
    } catch (error) {
      console.log(error.message);
    }
  }
  // getting email and password form the input fields on the forms
  async function register(email, password) {
    try {
      // creating, note it does not automatically log user in
      await account.create(ID.unique(), email, password);
      // log the newly created user in
      await login(email, password);
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
