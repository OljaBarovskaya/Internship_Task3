import { useState } from "react";
import { FavLocationsContext } from "../../context";
import { getStorage } from "../../utils/storageHandlers";
import { FAV_LOCATIONS } from "../../constants/constants";

export function FavLocationsContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [favouriteLocations, setFavLocations] = useState<string[]>(
    getStorage(FAV_LOCATIONS)
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
