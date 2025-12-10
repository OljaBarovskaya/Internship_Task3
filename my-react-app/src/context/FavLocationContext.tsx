import { createContext, useContext } from "react";
import type { FavLocationsContextType } from "../interfaces/interfaces";

export const favLocationsContext = createContext<
  FavLocationsContextType | undefined
>(undefined);

export function useFavLocationContext() {
  const context = useContext(favLocationsContext);
  if (context === undefined) {
    throw new Error(
      "useFavLocationContext must be used within a favLocationsContext.Provider"
    );
  }
  return context;
}
