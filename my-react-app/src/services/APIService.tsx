import { useQuery } from "@tanstack/react-query";
import type { WeatherDataType } from "../interfaces/interfaces";

export const getWeatherData = async function (
  city: string,
  units: "imperial" | "metric"
) {
  const APIkey = "24f553f38495c07ad01042098fa56ba3";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=en&appid=${APIkey}&units=${units}`;
  const res = await fetch(url);
  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || "Failed to fetch weather data");
  }
  const data = await res.json();
  return data;
};

export const useWeatherQuery = (city: string, units: "imperial" | "metric") => {
  return useQuery<WeatherDataType, Error>({
    queryKey: ["weatherData", city, units],
    queryFn: () => getWeatherData(city, units),
    enabled: !!city,
    staleTime: 1000 * 60 * 60,
    retry: false,
  });
};
