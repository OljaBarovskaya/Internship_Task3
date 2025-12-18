import * as context from "@/context";
import * as Layout from "@/layouts";
import * as type from "@/types";
import * as utils from "@/utils/index";
import DetailsBlock from "./DetailsBlock";

export function LocationDetailsInfo({ units }: { units: type.DegreeUnits }) {
  const { lastSuccessfulWeather, isLoading } = context.useWeather();

  if (!lastSuccessfulWeather && isLoading) {
    return (
      <Layout.BoardSection>
        <h2>Loading...</h2>
      </Layout.BoardSection>
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
    <div className="flex flex-wrap gap-y-space-medium gap-x-space-medium justify-evenly overflow-y-auto">
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
  );
}
