import * as type from "@/types";
import {
  FORECAST_DATA_FORM,
  HF_MODEL,
  IMPERIAL_UNITS_OBJ,
  METRIC_UNITS_OBJ,
} from "@/constants";

export default async function getWeatherForecast(
  weatherData: type.OptimizedWeatherData | undefined,
  units: type.DegreeUnits,
) {
  const token = import.meta.env.VITE_HF_TOKEN;

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

  const hf = new InferenceClient(token);
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

//async function getWeatherForecast(
// weatherData: type.OptimizedWeatherData | undefined,
// units: type.DegreeUnits,
//) {
