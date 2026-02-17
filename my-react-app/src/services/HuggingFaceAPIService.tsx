import getWeatherForecast from "api/inference";
import * as type from "@/types";
import { useQuery } from "@tanstack/react-query";

export const useForecastQuery = (
  weatherData: type.OptimizedWeatherData | undefined,
  units: type.DegreeUnits,
) => {
  return useQuery({
    queryKey: ["forecast", weatherData],
    queryFn: () => getWeatherForecast(weatherData, units),
    enabled: !!weatherData,
    staleTime: 1000 * 60 * 60,
    retry: false,
  });
};
