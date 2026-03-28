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
    return res.status(400).json({
      error: {
        forecast: "noWeatherData",
        weatherInsights: "noInsightsData",
      },
    });
  }

  const token = process.env.HF_TOKEN;
  if (!token) {
    throw new Error("HF_TOKEN is not defined in Vercel settings");
  }

  const { InferenceClient } = await import("@huggingface/inference");

  const unitsObject =
    units === "metric" ? METRIC_UNITS_OBJ : IMPERIAL_UNITS_OBJ;

  const hf = new InferenceClient(token);

  const weather = `City ${weatherData.city}, temperature ${weatherData.tMax + unitsObject.degrees}, humidity ${weatherData.humidity}%, pressure ${weatherData.pressure}hPA, wind ${weatherData.wind + unitsObject.speed + " " + weatherData.windDirection}, description: ${weatherData.description}, ${weatherData.mainDescription}.`;

  const [forecastRes, insightsRes] = await Promise.all([
    hf.chatCompletion({
      model: HF_MODEL,
      messages: [
        {
          role: "user",
          content: `Provide a short-term forecast for 6 hours: ${weather} The forecast must be given strictly in the following form: ${FORECAST_DATA_FORM}.`,
        },
      ],
    }),
    hf.chatCompletion({
      model: HF_MODEL,
      messages: [
        {
          role: "user",
          content: `Provide a 3 points short practical (1-3 sentences) weather insights based on: ${weather}`,
        },
      ],
    }),
  ]);

  const weatherForecastData = forecastRes.choices[0]?.message?.content || "{}";
  const weatherInsights = insightsRes.choices[0]?.message?.content || "";

  return res.status(200).json({
    forecast: JSON.parse(weatherForecastData),
    weatherInsights: weatherInsights,
  });
}
