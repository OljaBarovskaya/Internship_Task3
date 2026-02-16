import { Temperature } from "@/pages/Weather/components";
import * as context from "@/context";
import Star from "@/assets/img/star.svg?react";
import * as utils from "@/utils/index";
import * as type from "@/types";
import { FAV_LOCATIONS } from "@/constants/constants";
import * as Layout from "@/layouts";
import { Loader } from "@/components/Loader";
import * as S from "./LocationBlock.styled";

export function LocationBlock({
  city,
  units,
}: {
  city: string;
  units: type.DegreeUnits;
}) {
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
          highT={lastSuccessfulWeather?.tMax!}
          lowT={lastSuccessfulWeather?.tMin!}
          sizeHighT={2.4}
          sizeLowT={1.8}
          units={units}
        />
        <Star
          width={30}
          height={30}
          fill="yellow"
          onClick={() => {
            const updatedFavLocations = favLocations.filter(
              (item) => item !== city
            );
            setFavLocations(updatedFavLocations!);
            utils.setStorage(FAV_LOCATIONS, updatedFavLocations!);
          }}
        />
      </S.SecInfo>
    </Layout.BlockHorizontal>
  );
}
