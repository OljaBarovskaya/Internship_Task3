import type { OptimizedWeatherData } from "@/types";

export const LOCATION_DEFAULT = "Minsk";
export const API_KEY = "24f553f38495c07ad01042098fa56ba3";
export const UNITS_DEFAULT = "metric";
export const LOCATION_MAIN = "locationMain";
export const FAV_LOCATIONS = "favouriteLocations";
export const MINUTE = 60000;
export const UNITS = "units";
export const CITY_INPUT_PLACEHOLDER = "Please, input a city here";
export const HF_TOKEN = "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";
//"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";
//"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";
export const HF_MODEL = "openai/gpt-oss-120b";
//"meta-llama/Llama-3.1-8B-Instruct";
export const FORECAST_DATA_FORM =
  '[{"hour":hour number,"temperature":temperature value without pointing temperature scale sign,"description":short 1-3 words description},{"hour":hour number, ...},{"hour":hour number, ...}...] taking the day number, temperature value and short 1-3 words description in "" mark ';

export const METRIC_UNITS_OBJ = {
  degrees: "\u00B0C",
  speed: "m/s",
};

export const IMPERIAL_UNITS_OBJ = {
  degrees: "\u00B0F",
  speed: "m/h",
};

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
  windDirection: "unknown",
};

export const UNEXPECTED_ERROR =
  "Sorry, an unexpected error happened. Please try again later.";

export const TEL = "+375292883985";
export const GITHUB = "https://github.com/OljaBarovskaya";
export const EMAIL = "volha.barouskaya@ventionteams.com";
