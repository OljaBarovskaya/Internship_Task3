import DashboardBlock from "./DashboardBlock";
import BlockRow1 from "../../containers/BlockRow1";
import BlockRow2 from "../../containers/BlockRow2";
import LocationBlock from "./LocationBlock";
import { WeatherProvider } from "../../services/WeatherProvider";
import type { DegreeUnits } from "../../interfaces/interfaces";
import { useFavLocationContext } from "../../context/FavLocationContext";

export default function OtherLocations({ units }: { units: DegreeUnits }) {
  const favLocations = useFavLocationContext().favLocations;

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
