import Temperature from "./Temperature";
import * as context from "../../../context";
import Star from "../../../assets/img/star.svg?react";
import { setStorage } from "../../../utils/helpers";
import * as type from "../../../types";

export default function LocationBlock({
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
    return <h2>Loading...</h2>;
  }

  const weather = lastSuccessfulWeather;

  const country = weather?.sys.country;
  const iconCode = weather?.weather[0].icon;
  const mainDescription = weather?.weather[0].main;
  const tMin = Math.round(weather!.main.temp_min);
  const tMax = Math.round(weather!.main.temp_max);

  return (
    <div className="w-full min-h-[127px] p-[24px] rounded-[24px] bg-[#1f46ac] flex justify-between">
      <div className="flex flex-col gap-y-[8px]">
        <p>{country}</p>
        <h2>{city}</h2>
        <p>{mainDescription}</p>
      </div>
      <img
        className="w-[72px] h-[72px] cover"
        src={`http://openweathermap.org/img/w/${iconCode}.png`}
        alt={mainDescription}
      ></img>
      <div className="flex flex-col items-end gap-y-[12px]">
        <Temperature
          highT={tMax!}
          lowT={tMin!}
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
            setStorage("favouriteLocations", updatedFavLocations!);
          }}
        />
      </div>
    </div>
  );
}
