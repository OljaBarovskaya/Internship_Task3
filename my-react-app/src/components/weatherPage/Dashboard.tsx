import LocationDetailsBlock from "./LocationDetailsBlock";
import LocationMainBlock from "./LocationMainBlock";
import OtherLocations from "./OtherLocations";
import type { DegreeUnits } from "../../interfaces/interfaces";
import { useState } from "react";
import { getStorage } from "../../utils/helpers";
import { favLocationsContext } from "../../contents/Context";

// export const favLocationsContext = createContext<
//   FavLocationsContextType | undefined
// >(undefined);

export default function Dashboard({ units }: { units: DegreeUnits }) {
  const [favouriteLocations, setFavLocations] = useState<string[]>(
    getStorage("favouriteLocations")
  );
  return (
    <favLocationsContext.Provider
      value={{
        favLocations: favouriteLocations,
        setFavLocations: setFavLocations,
      }}
    >
      <div className="Dashboard w-full h-full text-[#FFFFFF] pt-[24px] pb-[24px]">
        <div className="column-2-layout flex gap-x-[24px] flex-wrap gap-y-[24px] justify-center">
          <div className="w-[calc(50%-12px)] flex flex-col gap-y-[24px] min-w-[300px]">
            <LocationMainBlock units={units} />
            <LocationDetailsBlock units={units} />
          </div>
          <div className="w-[calc(50%-12px)] min-w-[300px]">
            <OtherLocations units={units} />
          </div>
        </div>
      </div>
    </favLocationsContext.Provider>
  );
}
