import { createContext, useState } from "react";

export const UserContext = createContext();

// provider component to track state for the context
export function UserProvider({ children }) {
  // user getter setter
  const [user, setUser] = useState();
  // functions to update or mutate that state
  async function login(email, password) {}
  async function register(email, password) {}
  async function logout() {}
  //   return the user context and the built in provider context( which supplies values)
  return (
    <UserContext.Provider value={{ user, login, register, logout }}>
      {children}
    </UserContext.Provider>
  );
}
