import { IMPERIAL_UNITS_OBJ, METRIC_UNITS_OBJ } from "@/constants";
import { useWeather } from "@/context";

interface TemperatureProps {
  highT: number | "unknown" | undefined;
  lowT?: number | "unknown";
  sizeHighT: number | "unknown";
  sizeLowT?: number | "unknown";
}

export function Temperature({
  highT,
  lowT,
  sizeHighT,
  sizeLowT,
}: TemperatureProps) {
  const { units } = useWeather();

  const unitsObject =
    units === "metric" ? METRIC_UNITS_OBJ : IMPERIAL_UNITS_OBJ;

  if (highT === undefined) {
    return <span>--</span>;
  }

  return (
    <div>
      <p style={{ fontSize: `${sizeHighT}rem` }}>
        {highT + unitsObject.degrees}
      </p>
      {lowT !== undefined && sizeLowT && (
        <p className="text-light-gray" style={{ fontSize: `${sizeLowT}rem` }}>
          {"/" + lowT + unitsObject.degrees}
        </p>
      )}
    </div>
  );
}
