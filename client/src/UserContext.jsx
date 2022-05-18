import React from "react";
import { createContext } from "react";
import { useStore } from "./hooks/api/use-store";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const { store, userType, setGuest, setUser } = useStore();

  return (
    <UserContext.Provider value={{ store, userType, setGuest, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
