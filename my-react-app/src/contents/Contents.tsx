import { useState, useEffect, createContext, useContext } from "react";
import getWeatherData from "../services/APIService";
import type { WeatherProviderType } from "../interfaces/interfaces";
import { useQuery } from "@tanstack/react-query";
import useWeatherQuery from "../services/APIService";
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
  // const [weather, setWeather] = useState<WeatherDataType | null>(null);
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState<Error | null>(null);

  // useEffect(() => {
  //   const loadWeatherData = async (
  //     city: string,
  //     units: "imperial" | "metric"
  //   ) => {
  //     setError(null);
  //     try {
  //       const data = await getWeatherData(city, units);
  //       setWeather(data);
  //     } catch (err) {
  //       setError(
  //         err instanceof Error ? err : new Error("An unknown error occurred")
  //       );
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   loadWeatherData(city, units);
  // }, [city, units]);
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
      // If we have an error object, the city is likely incorrect (e.g., 404)
      // We only care about the *final* result when fetching is done.
      // If we have successfully loaded data *at any point*, we count it as correct
      // until a subsequent fetch definitively fails.

      // A simple check: if there's an error and NO data available at all, it's incorrect.
      // If there's an error but we still have 'weather' data (due to placeholderData),
      // the previous value remains visible, but we set the flag to false because the NEW one failed.

      if (error) {
        setIsCorrect(false);
      } else if (currentWeatherData) {
        setIsCorrect(true);
      }
      // Note: While the query is loading, setIsCorrect retains its previous value.
    }
  }, [currentWeatherData, error, setIsCorrect]);

  return (
    <WeatherContext.Provider value={contextValue}>
      {children}
    </WeatherContext.Provider>
  );
}
