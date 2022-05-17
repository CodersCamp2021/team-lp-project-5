import { useState } from "react";
import { useApi } from "./use-api";
import { useLocalStorage } from "./use-local-storage";

export const useStore = () => {
  const [userType, setUserType] = useState(localStorage.getItem("userType"));

  const setGuest = () => {
    setUserType("guest");
    localStorage.setItem("userType", "guest");
  };

  const setUser = () => {
    setUserType("user");
    localStorage.setItem("userType", "user");
  };

  const guestStore = useLocalStorage();
  const userStore = useApi();

  const store = userType === "guest" ? userStore : guestStore;

  return { store, setGuest, setUser };
};
