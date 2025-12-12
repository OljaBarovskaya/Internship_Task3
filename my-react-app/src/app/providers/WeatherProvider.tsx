import { useRef, useEffect } from "react";
import * as type from "../../types";
import { useWeatherQuery } from "../../services/APIService";
import * as context from "../../context";

interface WeatherProviderType {
  children: React.ReactNode;
  city: string;
  units: type.DegreeUnits;
  setIsCorrect?: (value: true | false) => void;
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

  const lastSuccessfulDataRef = useRef<type.WeatherDataType | undefined>(
    undefined
  );

  useEffect(() => {
    if (currentWeatherData) {
      lastSuccessfulDataRef.current = currentWeatherData;
    }
  }, [currentWeatherData]);

  const dataToShowInContext =
    currentWeatherData || lastSuccessfulDataRef.current;

  const contextValue: type.WeatherContextType = {
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
