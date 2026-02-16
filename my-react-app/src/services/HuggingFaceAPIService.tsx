import {
  FORECAST_DATA_FORM,
  HF_MODEL,
  HF_TOKEN,
  IMPERIAL_UNITS_OBJ,
  METRIC_UNITS_OBJ,
} from "@/constants";
import * as type from "@/types";
import { useQuery } from "@tanstack/react-query";

async function getWeatherForecast(
  weatherData: type.OptimizedWeatherData | undefined,
  units: type.DegreeUnits,
) {
  const { InferenceClient } = await import("@huggingface/inference");

  if (!weatherData) {
    return "noWeatherData";
  }
  let unitsObject;

  if (units === "metric") {
    unitsObject = METRIC_UNITS_OBJ;
  } else {
    unitsObject = IMPERIAL_UNITS_OBJ;
  }

  const hf = new InferenceClient(HF_TOKEN);

  const weatherString = `Provide a short-term forecast for 6 hours: City ${weatherData?.city}, temperature ${weatherData?.tMax + unitsObject.degrees}, humidity ${weatherData?.humidity}%, pressure ${weatherData?.pressure}hPA, wind ${weatherData?.wind + unitsObject.speed + " " + weatherData?.windDirection}, description: ${weatherData?.description}, ${weatherData?.mainDescription}. The forecast must be given strictly in the following form with no extra words: ${FORECAST_DATA_FORM}.`;

  try {
    const res = await hf.chatCompletion({
      model: HF_MODEL,
      messages: [
        {
          role: "user",
          content: weatherString,
        },
      ],
    });
    const weatherForecastData = res.choices[0]?.message?.content || "";
    return JSON.parse(weatherForecastData);
  } catch (error) {
    if (error instanceof Error) {
      console.error("An error occurred:", error.message);
    } else {
      console.error("An unexpected error occurred:", error);
    }
    return null;
  }
}

export const useForecastQuery = (
  weatherData: type.OptimizedWeatherData | undefined,
  units: type.DegreeUnits,
) => {
  return useQuery({
    queryKey: ["forecast", weatherData],
    queryFn: () => getWeatherForecast(weatherData, units),
    enabled: !!weatherData,
    staleTime: 1000 * 60 * 60,
    retry: false,
  });
};
