import { useRef, useEffect, useMemo } from "react";
import * as type from "@/types";
import { useWeatherQuery } from "@/services/APIService";
import * as context from "@/context";
import { convertToNecessaryObj } from "./utils/converters";

interface WeatherProviderType {
  children: React.ReactNode;
  city: string;
  units: type.DegreeUnits;
  setNoError?: (value: true | false) => void;
  setIsSuccess?: (value: true | false) => void;
}

export function WeatherProvider({
  children,
  city,
  units,
  setNoError,
  setIsSuccess,
}: WeatherProviderType) {
  const lastSuccessfulDataRef = useRef<type.OptimizedWeatherData | undefined>(
    undefined
  );

  const {
    data: currentWeatherData,
    isLoading,
    error,
    isSuccess,
  } = useWeatherQuery(city, units);

  const weatherData = useMemo(() => {
    return currentWeatherData
      ? convertToNecessaryObj(currentWeatherData)
      : null;
  }, [currentWeatherData]);

  useEffect(() => {
    if (weatherData) {
      lastSuccessfulDataRef.current = weatherData;
    }
  }, [currentWeatherData]);

  const dataToShowInContext = weatherData || lastSuccessfulDataRef.current;

  const contextValue: type.WeatherContextType = {
    lastSuccessfulWeather: dataToShowInContext,
    isLoading,
    error,
    isSuccess,
  };

  useEffect(() => {
    if (error) {
      setNoError?.(false);
    } else if (isSuccess) {
      setNoError?.(true);
      setIsSuccess?.(true);
    }
  }, [currentWeatherData, error, isSuccess]);

  return (
    <context.WeatherContext.Provider value={contextValue}>
      {children}
    </context.WeatherContext.Provider>
  );
}
