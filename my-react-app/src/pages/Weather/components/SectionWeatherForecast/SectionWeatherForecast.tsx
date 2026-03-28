import * as Layout from "@/components/layouts";
import { useUserContext } from "@/context";
import { LogInReq, WeatherForecastInfo } from "@/pages/Weather/components";

export function SectionWeatherForecast() {
  const { isLoggedIn } = useUserContext();

  return (
    <Layout.BoardSection>
      <h2>Weather Forecast</h2>
      {isLoggedIn ? <WeatherForecastInfo /> : <LogInReq />}
    </Layout.BoardSection>
  );
}
