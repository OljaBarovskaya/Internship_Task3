import { useWeather } from "@/context";
import { useForecastQuery } from "@/services/HuggingFaceAPIService";
import { Forecast, Insights } from "@/pages/Weather/components";
import { Loader } from "@/components/UI";
import { UNEXPECTED_ERROR } from "@/constants";
import * as S from "./WeatherForecastInfo.styled";

export function WeatherForecastInfo() {
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

  return (
    <S.WeatherForecastInfo>
      <Forecast weatherForecastData={weatherForecastData.forecast} />
      <Insights insightsData={weatherForecastData.weatherInsights} />
    </S.WeatherForecastInfo>
  );
}
