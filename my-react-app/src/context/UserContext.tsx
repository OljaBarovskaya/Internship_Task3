import { createContext, useContext } from "react";

interface UserContextType {
  isLoggedIn: boolean;
}

export const UserContext = createContext<UserContextType>({
  isLoggedIn: false,
});

export function useUserContext() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("StateContext must be used within a StateContext.Provider");
  }
  return context;
}
