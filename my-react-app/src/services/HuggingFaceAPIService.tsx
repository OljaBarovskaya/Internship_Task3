import * as type from "@/types";
import { useQuery } from "@tanstack/react-query";

export const fetchForecastFromApi = async (
  weatherData: type.OptimizedWeatherData | undefined,
  units: type.DegreeUnits,
) => {
  try {
    const response = await fetch("/api/forecast", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        weatherData,
        units,
      }),
    });
    return response.json();
  } catch (error) {
    if (error instanceof Error) {
      console.error("An error occurred:", error.message);
    } else {
      console.error("An unexpected error occurred:", error);
    }
    return null;
  }
};

export const useForecastQuery = (
  weatherData: type.OptimizedWeatherData | undefined,
  units: type.DegreeUnits,
) => {
  return useQuery({
    queryKey: ["forecast", weatherData],
    queryFn: () => fetchForecastFromApi(weatherData, units),
    enabled: !!weatherData,
    staleTime: 1000 * 60 * 60,
    retry: false,
  });
};
