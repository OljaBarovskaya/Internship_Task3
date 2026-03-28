import { Temperature } from "@/pages/Weather/components";
import * as context from "@/context";
import Star from "@/assets/img/star.svg?react";
import * as Layout from "@/components/layouts";
import { Loader } from "@/components/UI";
import * as S from "./FavLocationBlock.styled";
import { deleteFavCity } from "@/pages/Weather/utils/deleteFavCity";

export function FavLocationBlock({ city }: { city: string }) {
  const { favLocations, setFavLocations } = context.useFavLocationContext();
  const weatherData = context.useWeather();
  const { lastSuccessfulWeather, isLoading } = weatherData;

  if (!lastSuccessfulWeather && isLoading) {
    return <Loader />;
  }

  return (
    <Layout.BlockHorizontal className="w-full">
      <S.MainInfo>
        <p>{lastSuccessfulWeather?.country}</p>
        <h2>{city}</h2>
        <p>{lastSuccessfulWeather?.mainDescription}</p>
      </S.MainInfo>
      <S.WeatherImg
        src={`http://openweathermap.org/img/w/${lastSuccessfulWeather?.iconCode}.png`}
        alt={lastSuccessfulWeather?.mainDescription}
      ></S.WeatherImg>
      <S.SecInfo>
        <Temperature
          highT={lastSuccessfulWeather?.tMax}
          lowT={lastSuccessfulWeather?.tMin}
          sizeHighT={2.4}
          sizeLowT={1.8}
        />
        <Star
          width={30}
          height={30}
          fill="yellow"
          stroke="yellow"
          className="cursor-pointer transition-all duration-300 ease-in-out transform active:scale-90"
          onClick={() => {
            deleteFavCity(favLocations, city, setFavLocations);
          }}
        />
      </S.SecInfo>
    </Layout.BlockHorizontal>
  );
}
