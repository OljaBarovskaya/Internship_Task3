import DashboardBlock from "./DashboardBlock";
import BlockRow1 from "../../containers/BlockRow1";
import BlockRow2 from "../../containers/BlockRow2";
import DetailsBlock from "./DetailsBlock";
import { useWeather } from "../../contents/Context";
import convertTime from "../../utils/helpers";
import type { DegreeUnits } from "../../interfaces/interfaces";

export default function LocationDetailsBlock({
  units,
}: {
  units: DegreeUnits;
}) {
  const { lastSuccessfulWeather, isLoading } = useWeather();
  const weather = lastSuccessfulWeather;
  const humidity = weather?.main.humidity;
  const pressure = weather?.main.pressure;
  const wind = weather?.wind.speed;
  const timezone = weather?.timezone;
  const sunrise = weather?.sys.sunrise;
  const sunset = weather?.sys.sunset;
  const visibility = weather?.visibility;

  let sunRiseTime;
  let sunSetTime;

  if (sunrise && timezone) {
    sunRiseTime = convertTime(sunrise * 1000 + timezone);
  } else return "unknown";

  if (sunset && timezone) {
    sunSetTime = convertTime(sunset * 1000 + timezone);
  } else return "unknown";

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
        <DetailsBlock name="Sunrise" value={sunRiseTime} />
        <DetailsBlock name="Sunset" value={sunSetTime} />
      </BlockRow2>
    </DashboardBlock>
  );
}
