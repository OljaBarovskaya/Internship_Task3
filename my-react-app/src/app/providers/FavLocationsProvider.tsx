import { useState } from "react";
import { FavLocationsContext } from "../../context";
import { getStorage } from "../../utils/helpers";

export function FavLocationsContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [favouriteLocations, setFavLocations] = useState<string[]>(
    getStorage("favouriteLocations")
  );
  return (
    <FavLocationsContext.Provider
      value={{
        favLocations: favouriteLocations,
        setFavLocations: setFavLocations,
      }}
    >
      {children}
    </FavLocationsContext.Provider>
  );
}
