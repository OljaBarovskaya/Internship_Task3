import DashboardBlock from "./DashboardBlock";
import BlockTopRow from "../../containers/BlockTopRow";
import BlockBottomRow from "../../containers/BlockBottomRow";
import LocationBlock from "./LocationBlock";
import { WeatherProvider } from "../../app/providers/WeatherProvider";
import type { DegreeUnits } from "../../interfaces/interfaces";
import { useFavLocationContext } from "../../context/FavLocationContext";

export default function OtherLocations({ units }: { units: DegreeUnits }) {
  const favLocations = useFavLocationContext().favLocations;

  return (
    <DashboardBlock addStyle="h-full">
      <BlockTopRow>
        <h3>Others Countries</h3>
      </BlockTopRow>
      <BlockBottomRow addStyle="flex-col gap-y-[18px]">
        {favLocations &&
          favLocations.map((location: string, index) => {
            return (
              <WeatherProvider key={index} city={location} units={units}>
                <LocationBlock city={location} units={units} />
              </WeatherProvider>
            );
          })}
      </BlockBottomRow>
    </DashboardBlock>
  );
}
