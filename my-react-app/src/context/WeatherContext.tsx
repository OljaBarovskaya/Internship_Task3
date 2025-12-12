import { createContext, useContext } from "react";

import type { WeatherContextType } from "../types/GeneralTypes";

export const WeatherContext = createContext<WeatherContextType | null>(null);

export function useWeather() {
  const context = useContext(WeatherContext);
  if (context === null) {
    throw new Error("useWeather must be used within a WeatherProvider");
  }
  return context;
}
