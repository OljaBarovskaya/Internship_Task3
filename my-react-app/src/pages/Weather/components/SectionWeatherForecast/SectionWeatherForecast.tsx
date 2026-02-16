import * as Layout from "@/components/layouts";
import { WeatherForecastInfo } from "@/pages/Weather/components";

export function SectionWeatherForecast() {
  return (
    <Layout.BoardSection>
      <h2>Weather Forecast</h2>
      <WeatherForecastInfo />
    </Layout.BoardSection>
  );
}
