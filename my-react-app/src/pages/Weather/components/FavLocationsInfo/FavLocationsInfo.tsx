import { useFavLocationContext, useWeather } from "@/context";
import { FavLocationBlock } from "@/pages/Weather/components";
import { WeatherProvider } from "@/app/providers/WeatherProvider";
import * as S from "./FavLocationsInfo.styled";

export function FavLocationsInfo() {
  const favLocations = useFavLocationContext().favLocations;
  const { units } = useWeather();
  return (
    <S.FavLocationsInfoContainer>
      {favLocations &&
        favLocations.map((location: string, index) => (
          <WeatherProvider key={index} city={location} units={units}>
            <FavLocationBlock city={location} />
          </WeatherProvider>
        ))}
    </S.FavLocationsInfoContainer>
  );
}
