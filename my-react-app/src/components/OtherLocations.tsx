import DashboardBlock from "./DashboardBlock";
import BlockRow1 from "./BlockRow1";
import BlockRow2 from "./BlockRow2";
import Select from "./Select";
import LocationBlock from "./LocationBlock";
import { favouriteLocations } from "../contents/Locations";
import { WeatherProvider } from "../contents/Contents";

export default function OtherLocations() {
  return (
    <DashboardBlock>
      <BlockRow1>
        <h3>Others Countries</h3>
        <Select />
      </BlockRow1>
      <BlockRow2 addStyle="flex-col gap-y-[18px]">
        {favouriteLocations.map((location) => {
          return (
            <WeatherProvider city={location}>
              <LocationBlock city={location} />
            </WeatherProvider>
          );
        })}
      </BlockRow2>
    </DashboardBlock>
  );
}
