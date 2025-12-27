import * as type from "@/types";

interface TemperatureProps {
  highT: number | "unknown";
  lowT: number | "unknown";
  sizeHighT: number | "unknown";
  sizeLowT: number | "unknown";
  units: type.DegreeUnits;
}

export function Temperature({
  highT,
  lowT,
  sizeHighT,
  sizeLowT,
  units,
}: TemperatureProps) {
  return (
    <div>
      <p style={{ fontSize: `${sizeHighT}rem` }}>
        {units === "metric" ? highT + "\u00B0C" : highT + "\u00B0F"}
      </p>
      <p className="text-light-gray" style={{ fontSize: `${sizeLowT}rem` }}>
        {units === "metric" ? "/" + lowT + "\u00B0C" : "/" + lowT + "\u00B0F"}
      </p>
    </div>
  );
}
