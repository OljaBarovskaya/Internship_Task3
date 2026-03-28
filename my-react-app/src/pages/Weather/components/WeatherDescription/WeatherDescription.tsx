import { useWeather } from "@/context";
import { METRIC_UNITS_OBJ, IMPERIAL_UNITS_OBJ } from "@/constants";
import * as S from "./WeatherDescription.styled";

interface WeatherDescriptionProps {
  description?: string;
  feelsLike?: number | "unknown";
}

export function WeatherDescription({
  description,
  feelsLike,
}: WeatherDescriptionProps) {
  const { units } = useWeather();

  return (
    <div>
      {description && <S.Description>{description}</S.Description>}
      {feelsLike && (
        <S.Feels>
          feels like{" "}
          {units === "metric"
            ? feelsLike + METRIC_UNITS_OBJ.degrees
            : feelsLike + IMPERIAL_UNITS_OBJ.degrees}
        </S.Feels>
      )}
    </div>
  );
}
