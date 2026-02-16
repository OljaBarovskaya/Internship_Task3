import { DetailsBlock } from "@/pages/Weather/components";
import { Loader } from "@/components/UI";
import * as S from "./LocationDetailsInfo.styled";
import { IMPERIAL_UNITS_OBJ, METRIC_UNITS_OBJ } from "@/constants";
import { useWeather } from "@/context";

export function LocationDetailsInfo() {
  const { lastSuccessfulWeather, isLoading, units } = useWeather();

  if (!lastSuccessfulWeather && isLoading) {
    return <Loader />;
  }

  let unitsObject;
  if (units === "metric") {
    unitsObject = METRIC_UNITS_OBJ;
  } else {
    unitsObject = IMPERIAL_UNITS_OBJ;
  }

  return (
    <S.DetailsInfo>
      <DetailsBlock
        name="Humidity"
        value={lastSuccessfulWeather?.humidity + "%"}
      />
      <DetailsBlock
        name="Pressure"
        value={lastSuccessfulWeather?.pressure + " hPa"}
      />
      <DetailsBlock
        name="Wind"
        value={
          lastSuccessfulWeather?.wind +
          " " +
          unitsObject.speed +
          " " +
          lastSuccessfulWeather?.windDirection
        }
      />
      <DetailsBlock
        name="Visibility"
        value={lastSuccessfulWeather?.visibility + " m"}
      />
      <DetailsBlock name="Sunrise" value={lastSuccessfulWeather?.sunrise} />
      <DetailsBlock name="Sunset" value={lastSuccessfulWeather?.sunset} />
    </S.DetailsInfo>
  );
}
