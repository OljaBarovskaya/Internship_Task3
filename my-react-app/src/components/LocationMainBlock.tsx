import DashboardBlock from "./DashboardBlock";
import BlockRow1 from "./BlockRow1";
import BlockRow2 from "./BlockRow2";
import Location from "./Location";
import Select from "./Select";
import Date from "./Date";
import Temperature from "./Temperature";
import { useContext } from "react";
import { useWeather, WeatherContext } from "../contents/Contents";

export default function LocationMainBlock({ city }: { city: string }) {
  const weatherData = useWeather();
  // if (!weatherData) {
  //   return <div>Loading...</div>;
  // }
  console.log(WeatherContext);
  const country = weatherData?.weather?.sys.country;
  const iconCode = weatherData?.weather?.weather[0].icon;
  const mainDescription = weatherData?.weather?.weather[0].main;
  const tMin = weatherData?.weather?.main.temp_min;
  const tMax = weatherData?.weather?.main.temp_max;
  const description = weatherData?.weather?.weather[0].description;
  const feelsLike = weatherData?.weather?.main.feels_like;

  return (
    <DashboardBlock>
      <BlockRow1>
        <Location city={city} country={country!} />
        <Select />
      </BlockRow1>
      <BlockRow2 addStyle="gap-x-[14%]">
        <Date />
        <img
          className="object-contain w-[70px] h-auto"
          src={`http://openweathermap.org/img/w/${iconCode}.png`}
          alt={mainDescription}
        />
        <div className="flex flex-col justify-between gap-y-[45px]">
          <Temperature
            highT={tMax!}
            lowT={tMin!}
            sizeHighT={4.0}
            sizeLowT={2.4}
          />
          <div className="details-main">
            <p className="text-[2em] font-medium">{description}</p>
            <p className="text-[1.6em] font-normal">feels like {feelsLike}°</p>
          </div>
        </div>
      </BlockRow2>
    </DashboardBlock>
  );
}
