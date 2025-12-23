import * as type from "@/types";

interface WeatherDescriptionProps {
  description: string;
  units: type.DegreeUnits;
  feelsLike: number | "unknown";
}

export function WeatherDescription({
  description,
  units,
  feelsLike,
}: WeatherDescriptionProps) {
  return (
    <div>
      <p className="text-size-medium font-medium">{description}</p>
      <p className="text-size-small font-normal">
        feels like{" "}
        {units === "metric" ? feelsLike + "\u00B0C" : feelsLike + "\u00B0F"}
      </p>
    </div>
  );
}
