import { useEffect, createContext, useContext, useRef } from "react";
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
  const {
    data: currentWeatherData,
    isLoading,
    error,
  } = useWeatherQuery(city, units);

  const lastSuccessfulDataRef = useRef<WeatherDataType | undefined>(undefined);

  useEffect(() => {
    if (currentWeatherData) {
      lastSuccessfulDataRef.current = currentWeatherData;
    }
  }, [currentWeatherData]);

  const dataToShowInContext =
    currentWeatherData || lastSuccessfulDataRef.current;

  const contextValue: WeatherContextType = {
    lastSuccessfulWeather: dataToShowInContext,
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
