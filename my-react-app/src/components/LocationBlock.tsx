import Temperature from "./Temperature";
import { useWeather, WeatherContext } from "../contents/Contents";
import { useContext } from "react";
import Star from "../assets/img/star.svg?react";
import { favLocationsContext } from "./Dashboard";
import { setStorage } from "../utils/helpers";

// interface ChildProps {
//   city: string;
//   onFavLocationsChange: (data: string[]) => void;
//   favouriteLocations: string[];
// }

export default function LocationBlock({ city }: { city: string }) {
  const weatherData = useWeather();

  const country = weatherData?.weather?.sys.country;
  const iconCode = weatherData?.weather?.weather[0].icon;
  const mainDescription = weatherData?.weather?.weather[0].main;
  const tMin = weatherData?.weather?.main.temp_min;
  const tMax = weatherData?.weather?.main.temp_max;
  const favLocations = useContext(favLocationsContext);

  return (
    <div className="w-full min-h-[127px] p-[24px] rounded-[24px] bg-[#00008B] flex justify-between">
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
        />
        <Star
          width={30}
          height={30}
          fill="yellow"
          onClick={() => {
            const updatedFavLocations = favLocations?.favLocations.filter(
              (item) => item !== city
            );
            favLocations?.setFavLocations(updatedFavLocations!);
            setStorage("favouriteLocations", updatedFavLocations!);
          }}
        />
      </div>
    </div>
  );
}
