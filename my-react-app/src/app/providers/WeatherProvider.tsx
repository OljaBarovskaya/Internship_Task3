import { useRef, useEffect, useMemo, type SetStateAction } from "react";
import * as type from "@/types";
import { useWeatherQuery } from "@/services/OpenWeatherAPIService";
import { WeatherContext } from "@/context";
import { convertToNecessaryObj } from "./utils/converters";

interface WeatherProviderType {
  children: React.ReactNode;
  city: string;
  units: type.DegreeUnits;
  setReqStatus?: React.Dispatch<SetStateAction<type.ReqStatusType>>;
}

export function WeatherProvider({
  children,
  city,
  units,
  setReqStatus,
}: WeatherProviderType) {
  const lastSuccessfulDataRef = useRef<type.OptimizedWeatherData | undefined>(
    undefined,
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
    city,
    units,
  };

  useEffect(() => {
    if (error) {
      setReqStatus?.("error");
    } else if (isSuccess) {
      setReqStatus?.("success");
    }
  }, [currentWeatherData, error, isSuccess]);

  return (
    <WeatherContext.Provider value={contextValue}>
      {children}
    </WeatherContext.Provider>
  );
}
