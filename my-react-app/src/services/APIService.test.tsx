import { describe, test, expect, vi, beforeEach } from "vitest";
import { getWeatherData } from "./APIService";

const fetchSpy = vi.spyOn(global, "fetch");

beforeEach(() => {
  vi.clearAllMocks();
});

describe("getWeatherData", () => {
  const city = "Minsk";
  const units = "metric" as const;
  const expectedApiKey = "24f553f38495c07ad01042098fa56ba3";

  test("fetches and returns weather data on success", async () => {
    const mockWeatherData = {
      name: "Minsk",
      main: { temp: 15, humidity: 60 },
      weather: [{ description: "Cloudy" }],
    };

    const mockResponse = {
      ok: true,
      json: () => Promise.resolve(mockWeatherData),
    } as Response;

    fetchSpy.mockResolvedValueOnce(mockResponse);

    const data = await getWeatherData(city, units);

    expect(data).toEqual(mockWeatherData);
    expect(fetchSpy).toHaveBeenCalledTimes(1);

    const expectedUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=en&appid=${expectedApiKey}&units=${units}`;
    expect(fetchSpy).toHaveBeenCalledWith(expectedUrl);
  });

  test("throws an error if the city is not found", async () => {
    const errorMessage = "city not found";
    const mockErrorResponse = {
      ok: false,
      json: () => Promise.resolve({ message: errorMessage }),
    } as Response;

    fetchSpy.mockResolvedValueOnce(mockErrorResponse);

    await expect(getWeatherData("NonExistentCity", units)).rejects.toThrow(
      "city not found"
    );

    expect(fetchSpy).toHaveBeenCalledTimes(1);
  });

  test("throws a generic error if fetch fails (e.g., network error)", async () => {
    fetchSpy.mockRejectedValueOnce(new Error("Network request failed"));

    await expect(getWeatherData(city, units)).rejects.toThrow(
      "Network request failed"
    );

    expect(fetchSpy).toHaveBeenCalledTimes(1);
  });
});
