import * as S from "./WeatherForecastInfo.styled";
import { useUserContext, useWeather } from "@/context";
import { useForecastQuery } from "@/services/HuggingFaceAPIService";
import { Forecast, Insights, LogInReq } from "@/pages/Weather/components";
import { Loader } from "@/components/UI";
import { UNEXPECTED_ERROR } from "@/constants";

export function WeatherForecastInfo() {
  const { isLoggedIn } = useUserContext();

  const {
    lastSuccessfulWeather,
    isLoading: isWeatherLoading,
    units,
  } = useWeather();

  const {
    data: weatherForecastData,
    isLoading: isForecastLoading,
    error,
  } = useForecastQuery(lastSuccessfulWeather, units);

  if (!isLoggedIn) {
    return <LogInReq />;
  }

  if (error || weatherForecastData === null) {
    return <p> {UNEXPECTED_ERROR}</p>;
  }

  if (
    !lastSuccessfulWeather ||
    isWeatherLoading ||
    !weatherForecastData ||
    isForecastLoading
  ) {
    return <Loader />;
  }

  console.log(weatherForecastData.forecast);

  return (
    <S.WeatherForecastInfo>
      <Forecast weatherForecastData={weatherForecastData.forecast} />
      <Insights insightsData={weatherForecastData.weatherInsights} />
    </S.WeatherForecastInfo>
  );
}
