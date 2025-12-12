import DashboardBlock from "./DashboardBlock";
import LocationBlock from "./LocationBlock";
import { WeatherProvider } from "../../../app/providers/WeatherProvider";
import * as type from "../../../types";
import * as context from "../../../context";

export default function OtherLocations({ units }: { units: type.DegreeUnits }) {
  const favLocations = context.useFavLocationContext().favLocations;

  return (
    <DashboardBlock addStyle="h-full">
      <h3>Others Countries</h3>
      <div className="flex flex-col gap-y-[18px]">
        {favLocations &&
          favLocations.map((location: string, index) => {
            return (
              <WeatherProvider key={index} city={location} units={units}>
                <LocationBlock city={location} units={units} />
              </WeatherProvider>
            );
          })}
      </div>
    </DashboardBlock>
  );
}
