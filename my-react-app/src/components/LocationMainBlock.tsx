import DashboardBlock from "./DashboardBlock";
import BlockRow1 from "./BlockRow1";
import BlockRow2 from "./BlockRow2";
import Location from "./Location";
import Select from "./Select";
import Date from "./Date";
import Temperature from "./Temperature";
import Star from "../assets/img/star.svg?react";
import { useWeather, WeatherContext } from "../contents/Contents";
import { favLocationsContext } from "./Dashboard";
import { useContext, useState } from "react";
import { setStorage } from "../utils/helpers";

export default function LocationMainBlock() {
  const weatherData = useWeather();
  // if (!weatherData) {
  //   return <div>Loading...</div>;
  // }
  const cityRequested = weatherData?.weather?.name!;
  const country = weatherData?.weather?.sys.country;
  const iconCode = weatherData?.weather?.weather[0].icon;
  const mainDescription = weatherData?.weather?.weather[0].main;
  let tMin = weatherData?.weather?.main.temp_min;
  let tMax = weatherData?.weather?.main.temp_max;
  const description = weatherData?.weather?.weather[0].description;
  const feelsLike = weatherData?.weather?.main.feels_like;

  function setTemperature() {}

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
      console.log(favLocations);
      updatedFavLocations = [...favLocations, cityRequested];
      !isFavorite;
    }
    setFavLocations(updatedFavLocations);
    setStorage("favouriteLocations", updatedFavLocations);
    console.log(favLocations);
  };

  return (
    <DashboardBlock>
      <BlockRow1>
        <Location city={cityRequested} country={country!} />
        {/* <Select tempUnit={tempUnit} setTempUnit={setTempUnit} /> */}
      </BlockRow1>
      <BlockRow2 addStyle="gap-x-[14%]">
        <Date />
        <div>
          <img
            className="object-contain w-[70px] h-auto"
            src={`http://openweathermap.org/img/w/${iconCode}.png`}
            alt={mainDescription}
          />
          <div className="details-main">
            <p className="text-[2em] font-medium">{description}</p>
            <p className="text-[1.6em] font-normal">feels like {feelsLike}°</p>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-y-[45px] items-end">
          <Temperature
            highT={tMax!}
            lowT={tMin!}
            sizeHighT={4.0}
            sizeLowT={2.4}
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
