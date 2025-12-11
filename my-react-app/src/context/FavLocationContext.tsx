import { createContext, useContext } from "react";
import type { FavLocationsContextType } from "../interfaces/interfaces";

export const FavLocationsContext = createContext<
  FavLocationsContextType | undefined
>(undefined);

export function useFavLocationContext() {
  const context = useContext(FavLocationsContext);
  if (context === undefined) {
    throw new Error(
      "useFavLocationContext must be used within a favLocationsContext.Provider"
    );
  }
  return context;
}
