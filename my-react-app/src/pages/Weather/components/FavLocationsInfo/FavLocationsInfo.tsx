import * as context from "@/context";
import { LocationBlock } from "@/pages/Weather/components";
import { WeatherProvider } from "@/app/providers/WeatherProvider";
import * as type from "@/types";
import * as S from "./FavLocationsInfo.styled";

export function FavLocationsInfo({ units }: { units: type.DegreeUnits }) {
  const favLocations = context.useFavLocationContext().favLocations;
  return (
    <S.FavLocationsInfoContainer>
      {favLocations &&
        favLocations.map((location: string, index) => (
          <WeatherProvider key={index} city={location} units={units}>
            <LocationBlock city={location} units={units} />
          </WeatherProvider>
        ))}
    </S.FavLocationsInfoContainer>
  );
}
