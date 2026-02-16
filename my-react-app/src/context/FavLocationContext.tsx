import { createContext, useContext } from "react";

interface FavLocationsContextType {
  favLocations: string[];
  setFavLocations: React.Dispatch<React.SetStateAction<string[]>>;
}

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
