import { useQuery } from "@tanstack/react-query";
import * as type from "@/types";
import { API_KEY } from "@/constants/constants";

export const getWeatherData = async function (
  city: string,
  units: type.DegreeUnits
) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=en&appid=${API_KEY}&units=${units}`;
  const res = await fetch(url);
  if (!res.ok) {
    const errorData = (await res.json()) as Error;
    throw new Error(errorData.message || "Failed to fetch weather data");
  }
  const data = await res.json();

  return data;
};

export const useWeatherQuery = (city: string, units: type.DegreeUnits) => {
  return useQuery<type.WeatherDataType, Error>({
    queryKey: ["weatherData", city, units],
    queryFn: () => getWeatherData(city, units),
    enabled: !!city,
    staleTime: 1000 * 60 * 60,
    retry: false,
  });
};
