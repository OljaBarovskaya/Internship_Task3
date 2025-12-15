import { createContext, useContext } from "react";
import * as types from "@/types";

export const WeatherContext = createContext<types.WeatherContextType | null>(
  null
);

export function useWeather() {
  const context = useContext(WeatherContext);
  if (context === null) {
    throw new Error("useWeather must be used within a WeatherProvider");
  }
  return context;
}
