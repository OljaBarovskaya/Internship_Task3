import { createContext, useContext } from "react";
import type {
  FavLocationsContextType,
  WeatherContextType,
} from "../interfaces/interfaces";

export const WeatherContext = createContext<WeatherContextType | null>(null);

export function useWeather() {
  const context = useContext(WeatherContext);
  if (context === null) {
    throw new Error("useWeather must be used within a WeatherProvider");
  }
  return context;
}

export const favLocationsContext = createContext<
  FavLocationsContextType | undefined
>(undefined);

export function useFavLocationContext() {
  const context = useContext(favLocationsContext);
  if (context === undefined) {
    throw new Error(
      "useFavLocationContext must be used within a favLocationsContext.Provider"
    );
  }
  return context;
}
