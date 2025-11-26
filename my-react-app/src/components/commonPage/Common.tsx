import HowToUse from "./HowToUse";
import OpenWeatherMap from "./OpenWeatherMap";

export default function Common() {
  return (
    <div className="container flex flex-col gap-y-[24px]">
      <h1> The App and Data Source</h1>
      <p>
        The weather information for this web app is being presented by
        OpenWeather.
      </p>
      <OpenWeatherMap />
      <HowToUse />
    </div>
  );
}
