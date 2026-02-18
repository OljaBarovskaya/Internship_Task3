import { useEffect } from "react";
import {
  Location,
  CurrentDate,
  Temperature,
  WeatherDescription,
} from "@/pages/Weather/components";
import Star from "@/assets/img/star.svg?react";
import * as context from "@/context";
import { toggleFavCity } from "@/pages/Weather/utils";
import { setStorage } from "@/utils";
import * as Layout from "@/components/layouts";
import { LOCATION_MAIN } from "@/constants";
import { Loader } from "@/components/UI";
import * as S from "./SectionLocationMain.styled";

export function SectionLocationMain() {
  const { lastSuccessfulWeather, isLoading } = context.useWeather();
  const { favLocations, setFavLocations } = context.useFavLocationContext();
  const city = lastSuccessfulWeather?.city || " ";

  const isFavorite = Boolean(city && favLocations?.includes(city));

  useEffect(() => {
    if (city) {
      setStorage(LOCATION_MAIN, city);
    }
  }, [city]);

  if ((!lastSuccessfulWeather && isLoading) || !favLocations) {
    return (
      <Layout.BoardSection>
        <Loader height="useUserContext" />
      </Layout.BoardSection>
    );
  }

  return (
    <Layout.BoardSection>
      <Location city={city} country={lastSuccessfulWeather?.country} />
      <div className="flexHorizontal">
        <S.LeftColumn>
          <CurrentDate />
          <WeatherDescription
            description={lastSuccessfulWeather?.description}
            feelsLike={lastSuccessfulWeather?.feelsLike}
          />
        </S.LeftColumn>
        <S.WeatherImg
          src={`http://openweathermap.org/img/w/${lastSuccessfulWeather?.iconCode}.png`}
          alt={lastSuccessfulWeather?.mainDescription}
        />
        <S.RightColumn>
          <Temperature
            highT={lastSuccessfulWeather?.tMax}
            lowT={lastSuccessfulWeather?.tMin}
            sizeHighT={4.0}
            sizeLowT={2.4}
          />
          <Star
            width={30}
            height={30}
            fill={isFavorite ? "yellow" : "none"}
            stroke={isFavorite ? "yellow" : "white"}
            className="cursor-pointer transition-all duration-300 ease-in-out transform active:scale-90"
            onClick={() =>
              toggleFavCity(isFavorite, favLocations, setFavLocations, city)
            }
          />
        </S.RightColumn>
      </div>
    </Layout.BoardSection>
  );
}
