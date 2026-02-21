import type { VercelRequest, VercelResponse } from "@vercel/node";
import * as type from "@/types";

let cachedCities: type.CitiesData[] | null = null;

export default async function getCities(
  req: VercelRequest,
  res: VercelResponse,
) {
  const { query = "" } = req.query;
  const searchTerm = String(query).toLowerCase();
  const limit = 50;

  try {
    if (!cachedCities) {
      console.log("Запрос к API начат...");
      const response = await fetch(
        "https://nannmhnaurhfszte.public.blob.vercel-storage.com/city.list.json",
      );

      cachedCities = await response.json();
      console.log("Файл успешно загружен и распарсен");

      const filteredData = cachedCities!
        .filter((city: type.CitiesData) =>
          city.name?.toLowerCase().startsWith(searchTerm),
        )
        .slice(0, limit);
      console.log(`Найдено: ${filteredData.length} объектов`);

      return res.status(200).json(filteredData);
    }
  } catch {
    console.error("Failed to receive data:");
    return res.status(500).json({ error: "Failed to receive data:" });
  }
}
