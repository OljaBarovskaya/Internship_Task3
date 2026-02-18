import type { VercelRequest, VercelResponse } from "@vercel/node";
import {
  FORECAST_DATA_FORM,
  HF_MODEL,
  IMPERIAL_UNITS_OBJ,
  METRIC_UNITS_OBJ,
} from "../src/constants/index.js";

export default async function getWeatherForecast(
  req: VercelRequest,
  res: VercelResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { weatherData, units } = req.body;

  if (!weatherData) {
    return res.status(400).json({ error: "noWeatherData" });
  }

  const token = process.env.HF_TOKEN;
  if (!token) {
    throw new Error("HF_TOKEN is not defined in Vercel settings");
  }

  const { InferenceClient } = await import("@huggingface/inference");

  const unitsObject =
    units === "metric" ? METRIC_UNITS_OBJ : IMPERIAL_UNITS_OBJ;

  const hf = new InferenceClient(token);
  const weatherString = `Provide a short-term forecast for 6 hours: City ${weatherData?.city}, temperature ${weatherData?.tMax + unitsObject.degrees}, humidity ${weatherData?.humidity}%, pressure ${weatherData?.pressure}hPA, wind ${weatherData?.wind + unitsObject.speed + " " + weatherData?.windDirection}, description: ${weatherData?.description}, ${weatherData?.mainDescription}. The forecast must be given strictly in the following form with no extra words: ${FORECAST_DATA_FORM}.`;

  const resAI = await hf.chatCompletion({
    model: HF_MODEL,
    messages: [
      {
        role: "user",
        content: weatherString,
      },
    ],
  });
  const weatherForecastData = resAI.choices[0]?.message?.content || "";
  return res.status(200).json(JSON.parse(weatherForecastData));
}
