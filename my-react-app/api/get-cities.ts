import type { VercelRequest, VercelResponse } from "@vercel/node";
import { connectToDatabase } from "../lib/mongodb"; // Убедись, что путь верный
import * as type from "@/types";

export default async function getCities(
  req: VercelRequest,
  res: VercelResponse,
) {
  const { query = "" } = req.query;
  const searchTerm = String(query).trim();
  const limit = 50;

  try {
    const client = await connectToDatabase();
    const db = client.db("WeatherApp");
    const collection = db.collection<type.CitiesData>("Cities");

    const escapedTerm = searchTerm.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

    const filteredData = await collection
      .find({
        name: { $regex: `^${escapedTerm}`, $options: "i" },
      })
      .limit(limit)
      .toArray();

    return res.status(200).json(filteredData);
  } catch (error) {
    console.error("MongoDB Error:", error);
    return res.status(500).json({
      error: "Failed to fetch from DB",
      details: error instanceof Error ? error.message : "Unknown error",
    });
  }
}
