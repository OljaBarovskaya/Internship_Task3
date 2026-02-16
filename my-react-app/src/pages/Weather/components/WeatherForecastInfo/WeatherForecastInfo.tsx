import { WeatherForecastBlock } from "@/pages/Weather/components";
import * as S from "./WeatherForecastInfo.styled";
import { useUserContext, useWeather } from "@/context";
import { useForecastQuery } from "@/services/HuggingFaceAPIService";
import { LogInReq } from "@/pages/Weather/components";
import { Loader } from "@/components/UI";
import { UNEXPECTED_ERROR } from "@/constants";

export interface ForecastData {
  hour: number;
  temperature: number;
  description: string;
}

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

  return (
    <S.WeatherForecastInfo>
      {weatherForecastData.map((forecast: ForecastData, index: number) => {
        return (
          <WeatherForecastBlock
            key={index}
            hour={forecast?.hour}
            highT={forecast?.temperature}
            description={forecast?.description}
          />
        );
      })}
    </S.WeatherForecastInfo>
  );
}
