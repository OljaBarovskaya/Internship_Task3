import { useQuery } from "@tanstack/react-query";
import type { WeatherDataType } from "../interfaces/interfaces";

const getWeatherData = async function (
  city: string,
  units: "imperial" | "metric"
) {
  const APIkey = "24f553f38495c07ad01042098fa56ba3";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=en&appid=${APIkey}&units=${units}`;
  const res = await fetch(url);
  const data = await res.json();
  console.log(data.weather[0].id, data.weather[0].description, data.main.temp);
  return data;
};

const useWeatherQuery = (city: string, units: "imperial" | "metric") => {
  return useQuery<WeatherDataType, Error>({
    queryKey: ["weatherData", city, units],
    queryFn: () => getWeatherData(city, units),
    enabled: !!city,
    staleTime: 1000 * 60 * 60,
    retry: false,
  });
};

export default useWeatherQuery;
