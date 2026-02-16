import * as Layout from "@/layouts";
import OpenWeatherMapSection from "./components/OpenWeatherMapSection";
import HowToUseSection from "./components/HowToUseSection";

export default function Common() {
  return (
    <Layout.Page>
      <Layout.Heading> The App and Data Source</Layout.Heading>
      <p>
        The weather information for this web app is being presented by
        OpenWeather.
      </p>
      <OpenWeatherMapSection />
      <HowToUseSection />
    </Layout.Page>
  );
}
