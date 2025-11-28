import DashboardBlock from "./DashboardBlock";
import BlockRow1 from "../../containers/BlockRow1";
import BlockRow2 from "../../containers/BlockRow2";
import Location from "./Location";
import Date from "./Date";
import Temperature from "./Temperature";
import Star from "../../assets/img/star.svg?react";
import { useWeather } from "../../contents/Contents";
import { favLocationsContext } from "./Dashboard";
import { useContext } from "react";
import { setStorage } from "../../utils/helpers";
import type { DegreeUnits } from "../../interfaces/interfaces";

export default function LocationMainBlock({ units }: { units: DegreeUnits }) {
  const { lastSuccessfulWeather, isLoading } = useWeather();

  if (!lastSuccessfulWeather && isLoading) {
    return <h2>Loading...</h2>;
  }

  let weather = lastSuccessfulWeather;

  const cityRequested = weather?.name!;
  const country = weather?.sys.country;
  const iconCode = weather?.weather[0].icon;
  const mainDescription = weather?.weather[0].main;
  let tMin = weather?.main.temp_min;
  let tMax = weather?.main.temp_max;
  const description = weather?.weather[0].description;
  let feelsLike = weather?.main.feels_like;

  if (tMax) {
    tMax = Math.round(tMax);
  }

  if (tMin) {
    tMin = Math.round(tMin);
  }
  if (feelsLike) {
    feelsLike = Math.round(feelsLike);
  }

  const favContext = useContext(favLocationsContext);
  if (!favContext) {
    return <div>Loading context...</div>;
  }

  const { favLocations, setFavLocations } = favContext;

  const isFavorite = favLocations.includes(cityRequested!);

  const toggleFavorite = () => {
    let updatedFavLocations;
    if (isFavorite) {
      updatedFavLocations = favLocations.filter(
        (location) => location !== cityRequested
      );
      !isFavorite;
    } else {
      updatedFavLocations = [...favLocations, cityRequested];
      !isFavorite;
    }
    setFavLocations(updatedFavLocations);
    setStorage("favouriteLocations", updatedFavLocations);
  };

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
