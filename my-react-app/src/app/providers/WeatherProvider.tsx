import { useRef, useEffect } from "react";

import type {
  WeatherProviderType,
  WeatherDataType,
  WeatherContextType,
} from "../../interfaces/interfaces";
import { useWeatherQuery } from "../../services/APIService";
import * as context from "../../context";

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
    <context.WeatherContext.Provider value={contextValue}>
      {children}
    </context.WeatherContext.Provider>
  );
}
