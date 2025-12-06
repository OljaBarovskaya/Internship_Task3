import DashboardBlock from "./DashboardBlock";
import BlockRow1 from "../../containers/BlockRow1";
import BlockRow2 from "../../containers/BlockRow2";
import Location from "./Location";
import Date from "./Date";
import Temperature from "./Temperature";
import Star from "../../assets/img/star.svg?react";
import { useFavLocationContext, useWeather } from "../../contents/Context";
import { setStorage } from "../../utils/helpers";
import type { DegreeUnits } from "../../interfaces/interfaces";
import { useState, useEffect } from "react";

export default function LocationMainBlock({ units }: { units: DegreeUnits }) {
  const { lastSuccessfulWeather, isLoading } = useWeather();
  const { favLocations, setFavLocations } = useFavLocationContext();
  const [isFavorite, setIsFavorite] = useState(false);
  const cityRequested = lastSuccessfulWeather?.name || " ";

  useEffect(() => {
    if (cityRequested && favLocations) {
      setIsFavorite(favLocations.includes(cityRequested));
    }
  }, [cityRequested, favLocations]);

  if (!lastSuccessfulWeather && isLoading) {
    return (
      <DashboardBlock>
        <h2>Loading...</h2>
      </DashboardBlock>
    );
  }

  const country = lastSuccessfulWeather!.sys.country;
  const iconCode = lastSuccessfulWeather!.weather[0].icon;
  const mainDescription = lastSuccessfulWeather!.weather[0].main;
  let tMin = lastSuccessfulWeather!.main.temp_min;
  let tMax = lastSuccessfulWeather!.main.temp_max;
  const description = lastSuccessfulWeather!.weather[0].description;
  let feelsLike = lastSuccessfulWeather!.main.feels_like;

  if (tMax) {
    tMax = Math.round(tMax);
  }

  if (tMin) {
    tMin = Math.round(tMin);
  }
  if (feelsLike) {
    feelsLike = Math.round(feelsLike);
  }

  if (!favLocations) {
    return <div>Loading context...</div>;
  }

  const toggleFavorite = () => {
    let updatedFavLocations;
    if (isFavorite) {
      updatedFavLocations = favLocations.filter(
        (location) => location !== cityRequested
      );
      setIsFavorite(false);
    } else {
      updatedFavLocations = [...favLocations, cityRequested];
      setIsFavorite(true);
    }
    setFavLocations(updatedFavLocations);
    setStorage("favouriteLocations", updatedFavLocations);
  };

  setStorage("locationMain", cityRequested);

  return (
    <DashboardBlock>
      <BlockRow1>
        <Location city={cityRequested} country={country!} />
      </BlockRow1>
      <BlockRow2 addStyle="gap-x-[14%] justify-between">
        <div className="flex flex-col justify-between">
          <Date />
          <div className="details-main">
            <p className="text-[2em] font-medium">{description}</p>
            <p className="text-[1.6em] font-normal">
              feels like{" "}
              {units === "metric"
                ? feelsLike + "\u00B0C"
                : feelsLike + "\u00B0F"}
            </p>
          </div>
        </div>

        <img
          className="object-contain w-[70px] h-auto"
          src={`http://openweathermap.org/img/w/${iconCode}.png`}
          alt={mainDescription}
        />

        <div className="flex flex-col justify-between gap-y-[45px] items-end">
          <Temperature
            highT={tMax!}
            lowT={tMin!}
            sizeHighT={4.0}
            sizeLowT={2.4}
            units={units}
          />
          <Star
            width={30}
            height={30}
            fill={isFavorite ? "yellow" : "white"}
            onClick={toggleFavorite}
          />
        </div>
      </BlockRow2>
    </DashboardBlock>
  );
}
