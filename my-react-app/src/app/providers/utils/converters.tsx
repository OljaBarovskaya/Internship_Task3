import * as utils from "@/utils";
import * as type from "@/types";
import { NO_DATA_OBJECT } from "@/constants/constants";

export function convertToNecessaryObj(
  WeatherData: type.WeatherDataType | undefined
): type.OptimizedWeatherData {
  const necessaryData = {} as type.OptimizedWeatherData;
  if (WeatherData === undefined) {
    return NO_DATA_OBJECT;
  }

  necessaryData.country = WeatherData.sys.country ?? "unknown";
  necessaryData.iconCode = WeatherData.weather[0].icon ?? "unknown";
  necessaryData.mainDescription = WeatherData.weather[0].main ?? "unknown";
  necessaryData.tMin = Math.round(WeatherData.main.temp_min) ?? "unknown";
  necessaryData.tMax = Math.round(WeatherData.main.temp_max) ?? "unknown";
  necessaryData.description = WeatherData.weather[0].description ?? "unknown";
  necessaryData.feelsLike =
    Math.round(WeatherData.main.feels_like) ?? "unknown";
  necessaryData.visibility = WeatherData.visibility ?? "unknown";
  necessaryData.wind = WeatherData.wind.speed ?? "unknown";
  necessaryData.pressure = WeatherData.main.pressure ?? "unknown";
  necessaryData.humidity = WeatherData.main.humidity ?? "unknown";
  necessaryData.timezone = WeatherData.timezone ?? "unknown";
  necessaryData.sunrise =
    utils.convertToTime(WeatherData.sys.sunrise, necessaryData.timezone) ??
    "unknown";
  necessaryData.sunset =
    utils.convertToTime(WeatherData.sys.sunset, necessaryData.timezone) ??
    "unknown";
  necessaryData.city = WeatherData.name ?? "unknown";

  return necessaryData;
}
