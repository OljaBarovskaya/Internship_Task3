import { useState, useEffect, createContext, useContext } from "react";
import getWeatherData from "../services/APIService";
import type { WeatherProviderType } from "../interfaces/interfaces";

interface Coord {
  lon: number;
  lat: number;
}

interface WeatherItem {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
}

interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

interface Clouds {
  all: number;
}

interface Sys {
  country: string;
  sunrise: number;
  sunset: number;
}

interface WeatherDataType {
  coord: Coord;
  weather: WeatherItem[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

interface WeatherContextType {
  weather: WeatherDataType | null;
  isLoading: boolean;
  error: Error | null;
}

export const WeatherContext = createContext<WeatherContextType | null>(null);

export function useWeather() {
  const context = useContext(WeatherContext);
  if (context === null) {
    throw new Error("useWeather must be used within a WeatherProvider");
  }
  return context;
}

export function WeatherProvider({ children, city }: WeatherProviderType) {
  const [weather, setWeather] = useState<WeatherDataType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadWeatherData = async (city: string) => {
      try {
        const data = await getWeatherData(city);
        setWeather(data);
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error("An unknown error occurred")
        );
      } finally {
        setIsLoading(false);
      }
    };

    loadWeatherData(city);
  }, [city]);

  const contextValue: WeatherContextType = {
    weather,
    isLoading,
    error,
  };

  return (
    <WeatherContext.Provider value={contextValue}>
      {children}
    </WeatherContext.Provider>
  );
}
