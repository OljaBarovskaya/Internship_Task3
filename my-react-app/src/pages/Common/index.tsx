import * as Layout from "@/layouts";
import HowToUse from "./components/HowToUse";
import OpenWeatherMap from "./components/OpenWeatherMap";

export default function Common() {
  return (
    <Layout.Page>
      <h1 className="inline-block, text-[3.5rem]"> The App and Data Source</h1>
      <p>
        The weather information for this web app is being presented by
        OpenWeather.
      </p>
      <OpenWeatherMap />
      <HowToUse />
    </Layout.Page>
  );
}
