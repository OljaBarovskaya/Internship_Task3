import { Heading } from "@/components/UI";
import * as Layout from "@/components/layouts";
import OpenWeatherMapSection from "./components/OpenWeatherMapSection";
import HowToUseSection from "./components/HowToUseSection";

export default function Common() {
  return (
    <Layout.Page>
      <Heading> The App and Data Source</Heading>
      <p>
        The weather information for this web app is being presented by
        OpenWeather.
      </p>
      <OpenWeatherMapSection />
      <HowToUseSection />
    </Layout.Page>
  );
}
