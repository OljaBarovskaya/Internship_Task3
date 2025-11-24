import LocationDetailsBlock from "./LocationDetailsBlock";
import LocationMainBlock from "./LocationMainBlock";
import OtherLocations from "./OtherLocations";
import { WeatherProvider } from "../contents/Contents";
import { LOCATION_DEFAULT } from "../contents/Locations";

export default function Dashboard() {
  return (
    <div className="Dashboard w-full h-full text-[#FFFFFF] pt-[24px] pb-[24px]">
      <div className="column-2-layout">
        <WeatherProvider city={LOCATION_DEFAULT}>
          <div className="w-[calc(50%-12px)] flex flex-col gap-y-[24px]">
            <LocationMainBlock city={LOCATION_DEFAULT} />
            <LocationDetailsBlock />
          </div>
        </WeatherProvider>
        <div className="w-[calc(50%-12px)]">
          <OtherLocations />
        </div>
      </div>
    </div>
  );
}
