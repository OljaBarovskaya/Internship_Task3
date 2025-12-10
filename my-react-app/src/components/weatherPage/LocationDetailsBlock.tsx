import DashboardBlock from "./DashboardBlock";
import BlockTopRow from "../../containers/BlockTopRow";
import BlockBottomRow from "../../containers/BlockBottomRow";
import DetailsBlock from "./DetailsBlock";
import convertTime from "../../utils/helpers";
import type { DegreeUnits } from "../../interfaces/interfaces";
import { useWeather } from "../../context/WeatherContext";

export default function LocationDetailsBlock({
  units,
}: {
  units: DegreeUnits;
}) {
  const { lastSuccessfulWeather, isLoading } = useWeather();

  if (!lastSuccessfulWeather && isLoading) {
    return (
      <DashboardBlock>
        <h2>Loading...</h2>
      </DashboardBlock>
    );
  }

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
  } else sunRiseTime = "unknown";

  if (sunset && timezone) {
    sunSetTime = convertTime(sunset * 1000 + timezone);
  } else sunSetTime = "unknown";

  return (
    <DashboardBlock>
      <BlockTopRow>
        <h2>Detailed Weather</h2>
      </BlockTopRow>
      <BlockBottomRow addStyle="flex-wrap gap-y-[18px] gap-x-[18px] justify-evenly">
        <DetailsBlock name="Humidity" value={humidity + "%"} />
        <DetailsBlock name="Pressure" value={pressure + " hPa"} />
        <DetailsBlock
          name="Wind"
          value={units === "metric" ? wind + " m/s" : wind + " m/h"}
        />
        <DetailsBlock name="Visibility" value={visibility + " m"} />
        <DetailsBlock name="Sunrise" value={sunRiseTime} />
        <DetailsBlock name="Sunset" value={sunSetTime} />
      </BlockBottomRow>
    </DashboardBlock>
  );
}
