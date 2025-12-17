import * as context from "@/context";
import LocationBlock from "./LocationBlock";
import { WeatherProvider } from "@/app/providers/WeatherProvider";
import * as type from "@/types";

export function FavLocationsInfo({ units }: { units: type.DegreeUnits }) {
  const favLocations = context.useFavLocationContext().favLocations;
  return (
    <div className="flex flex-col gap-y-space-medium">
      {favLocations &&
        favLocations.map((location: string, index) => (
          <WeatherProvider key={index} city={location} units={units}>
            <LocationBlock city={location} units={units} />
          </WeatherProvider>
        ))}
    </div>
  );
}
