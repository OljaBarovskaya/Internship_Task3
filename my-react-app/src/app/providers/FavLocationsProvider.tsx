import { useState } from "react";
import * as utils from "@/utils/index";
import { FavLocationsContext } from "@/context";
import { FAV_LOCATIONS } from "@/constants/constants";

export function FavLocationsContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [favouriteLocations, setFavLocations] = useState<string[]>(
    utils.getStorage(FAV_LOCATIONS)
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
