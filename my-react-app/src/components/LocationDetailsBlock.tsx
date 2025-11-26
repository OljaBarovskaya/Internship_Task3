import DashboardBlock from "./DashboardBlock";
import BlockRow1 from "./BlockRow1";
import BlockRow2 from "./BlockRow2";
import DetailsBlock from "./DetailsBlock";
import { useWeather } from "../contents/Contents";
import convertTime from "../utils/helpers";

export default function LocationDetailsBlock({
  units,
}: {
  units: "metric" | "imperial";
}) {
  const weatherData = useWeather();
  const humidity = weatherData?.weather?.main.humidity;
  const pressure = weatherData?.weather?.main.pressure;
  const wind = weatherData?.weather?.wind.speed;
  const timezone = weatherData?.weather?.timezone;
  const sunrise = convertTime(
    weatherData?.weather?.sys.sunrise! * 1000 + timezone!
  );
  const sunset = convertTime(
    weatherData?.weather?.sys.sunset! * 1000 + timezone!
  );
  const visibility = weatherData?.weather?.visibility;

  return (
    <DashboardBlock>
      <BlockRow1>
        <h2>Detailed Weather</h2>
      </BlockRow1>
      <BlockRow2 addStyle="flex-wrap gap-y-[18px] gap-x-[18px]">
        <DetailsBlock name="Humidity" value={humidity + "%"} />
        <DetailsBlock name="Pressure" value={pressure + " hPa"} />
        <DetailsBlock
          name="Wind"
          value={units === "metric" ? wind + " m/s" : wind + " m/h"}
        />
        <DetailsBlock name="Visibility" value={visibility + " m"} />
        <DetailsBlock name="Sunrise" value={sunrise} />
        <DetailsBlock name="Sunset" value={sunset} />
      </BlockRow2>
    </DashboardBlock>
  );
}
