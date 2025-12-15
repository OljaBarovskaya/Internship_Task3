import DashboardBlock from "./DashboardBlock";
import DetailsBlock from "./DetailsBlock";
import * as type from "@/types";
import * as context from "@/context";
import * as utils from "@/utils/index";

export default function LocationDetailsBlock({
  units,
}: {
  units: type.DegreeUnits;
}) {
  const { lastSuccessfulWeather, isLoading } = context.useWeather();

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
  const timezone = weather!.timezone;
  const sunrise = utils.convertToTime(weather!.sys.sunrise * 1000 + timezone);
  const sunset = utils.convertToTime(weather!.sys.sunset * 1000 + timezone);
  const visibility = weather?.visibility;

  return (
    <DashboardBlock>
      <h2>Detailed Weather</h2>
      <div className="flex flex-wrap gap-y-[18px] gap-x-[18px] justify-evenly">
        <DetailsBlock name="Humidity" value={humidity + "%"} />
        <DetailsBlock name="Pressure" value={pressure + " hPa"} />
        <DetailsBlock
          name="Wind"
          value={units === "metric" ? wind + " m/s" : wind + " m/h"}
        />
        <DetailsBlock name="Visibility" value={visibility + " m"} />
        <DetailsBlock name="Sunrise" value={sunrise} />
        <DetailsBlock name="Sunset" value={sunset} />
      </div>
    </DashboardBlock>
  );
}
