import DashboardBlock from "./DashboardBlock";
import BlockRow1 from "./BlockRow1";
import BlockRow2 from "./BlockRow2";
import Select from "./Select";
import LocationBlock from "./LocationBlock";
import { WeatherProvider } from "../contents/Contents";
import { getStorage } from "../utils/helpers";
import { useContext, useState } from "react";
import { favLocationsContext } from "./Dashboard";

export default function OtherLocations({
  units,
}: {
  units: "metric" | "imperial";
}) {
  // const [favLocations, updateFavLocations] = useState(
  //   getStorage("favouriteLocations")
  // );
  // function changeFavLocations(locations: string[]) {
  //   updateFavLocations(locations);
  // }
  const favContext = useContext(favLocationsContext);
  const favLocations = favContext?.favLocations || [];

  //const [tempUnit, setTempUnit] = useState<"metric" | "imperial">("metric");

  return (
    <DashboardBlock addStyle="h-full">
      <BlockRow1>
        <h3>Others Countries</h3>
        {/* <Select tempUnit={tempUnit} setTempUnit={setTempUnit} /> */}
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
