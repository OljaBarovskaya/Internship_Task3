import { useState, useEffect, createContext, useContext } from "react";
import type { WeatherProviderType } from "../interfaces/interfaces";
import { useWeatherQuery } from "../services/APIService";
import type {
  WeatherContextType,
  WeatherDataType,
} from "../interfaces/interfaces";

export const WeatherContext = createContext<WeatherContextType | null>(null);

export function useWeather() {
  const context = useContext(WeatherContext);
  if (context === null) {
    throw new Error("useWeather must be used within a WeatherProvider");
  }
  return context;
}

export function WeatherProvider({
  children,
  city,
  units,
  setIsCorrect,
}: WeatherProviderType) {
  const [lastSuccessfulWeather, setLastSuccessfulWeather] = useState<
    WeatherDataType | undefined
  >(undefined);
  const {
    data: currentWeatherData,
    isLoading,
    error,
  } = useWeatherQuery(city, units);

  useEffect(() => {
    if (currentWeatherData) {
      setLastSuccessfulWeather(currentWeatherData);
    }
  }, [currentWeatherData]);

  const contextValue: WeatherContextType = {
    lastSuccessfulWeather,
    isLoading,
    error,
  };

  useEffect(() => {
    if (setIsCorrect) {
      if (error) {
        setIsCorrect(false);
      } else if (currentWeatherData) {
        setIsCorrect(true);
      }
    }
  }, [currentWeatherData, error, setIsCorrect]);

  return (
    <WeatherContext.Provider value={contextValue}>
      {children}
    </WeatherContext.Provider>
  );
}
