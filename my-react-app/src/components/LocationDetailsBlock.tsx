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
  const { lastSuccessfulWeather, isLoading } = useWeather();
  let weather = lastSuccessfulWeather;
  const humidity = weather?.main.humidity;
  const pressure = weather?.main.pressure;
  const wind = weather?.wind.speed;
  const timezone = weather?.timezone;
  const sunrise = convertTime(weather?.sys.sunrise! * 1000 + timezone!);
  const sunset = convertTime(weather?.sys.sunset! * 1000 + timezone!);
  const visibility = weather?.visibility;

  if (!lastSuccessfulWeather && isLoading) {
    return <h2>Loading...</h2>;
  }
  return (
    <DashboardBlock>
      <BlockRow1>
        <h2>Detailed Weather</h2>
      </BlockRow1>
      <BlockRow2 addStyle="flex-wrap gap-y-[18px] gap-x-[18px] justify-evenly">
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
