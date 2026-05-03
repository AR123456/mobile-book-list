import { createContext } from "react";

export const UserContext = createContext();

// provider component to track state for the context
export function UserProvider({ children }) {
  // user state
  // functions to update or mutate that state
}
