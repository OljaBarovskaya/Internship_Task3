import DashboardBlock from "./DashboardBlock";
import BlockRow1 from "../../containers/BlockRow1";
import BlockRow2 from "../../containers/BlockRow2";
import LocationBlock from "./LocationBlock";
import { WeatherProvider } from "../../contents/Contents";
import { useContext } from "react";
import { favLocationsContext } from "./Dashboard";
import type { DegreeUnits } from "../../interfaces/interfaces";

export default function OtherLocations({ units }: { units: DegreeUnits }) {
  const favContext = useContext(favLocationsContext);
  const favLocations = favContext?.favLocations || [];

  return (
    <DashboardBlock addStyle="h-full">
      <BlockRow1>
        <h3>Others Countries</h3>
      </BlockRow1>
      <BlockRow2 addStyle="flex-col gap-y-[18px]">
        {favLocations &&
          favLocations.map((location: string, index) => {
            return (
              <WeatherProvider key={index} city={location} units={units}>
                <LocationBlock city={location} units={units} />
              </WeatherProvider>
            );
          })}
      </BlockRow2>
    </DashboardBlock>
  );
}
