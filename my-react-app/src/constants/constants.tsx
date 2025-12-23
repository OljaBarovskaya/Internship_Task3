import type { OptimizedWeatherData } from "@/types";

export const LOCATION_DEFAULT = "Minsk";
export const API_KEY = "24f553f38495c07ad01042098fa56ba3";
export const UNITS_DEFAULT = "metric";
export const LOCATION_MAIN = "locationMain";
export const FAV_LOCATIONS = "favouriteLocations";
export const MINUTE = 60000;
export const UNITS = "units";

export const NO_DATA_OBJECT: OptimizedWeatherData = {
  country: "unknown",
  iconCode: "unknown",
  mainDescription: "unknown",
  tMin: "unknown",
  tMax: "unknown",
  description: "unknown",
  feelsLike: "unknown",
  visibility: "unknown",
  wind: "unknown",
  pressure: "unknown",
  humidity: "unknown",
  timezone: "unknown",
  sunrise: "unknown",
  sunset: "unknown",
  city: "unknown",
};
