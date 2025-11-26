import LocationDetailsBlock from "./LocationDetailsBlock";
import LocationMainBlock from "./LocationMainBlock";
import OtherLocations from "./OtherLocations";
import { WeatherProvider } from "../contents/Contents";
import { useState, createContext, useContext } from "react";
import { getStorage } from "../utils/helpers";

interface FavLocationsContextType {
  favLocations: string[];
  setFavLocations: React.Dispatch<React.SetStateAction<string[]>>;
}

export const favLocationsContext = createContext<
  FavLocationsContextType | undefined
>(undefined);

export default function Dashboard({
  city,
  units,
}: {
  city: string;
  units: "metric" | "imperial";
}) {
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
        <div className="column-2-layout">
          <WeatherProvider city={city} units={units}>
            <div className="w-[calc(50%-12px)] flex flex-col gap-y-[24px]">
              <LocationMainBlock />
              <LocationDetailsBlock />
            </div>
          </WeatherProvider>
          <div className="w-[calc(50%-12px)]">
            <OtherLocations units={units} />
          </div>
        </div>
      </div>
    </favLocationsContext.Provider>
  );
}
