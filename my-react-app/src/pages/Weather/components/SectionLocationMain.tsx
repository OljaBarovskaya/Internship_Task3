import * as Layout from "@/layouts";
import Location from "./Location";
import Date from "./Date";
import Temperature from "./Temperature";
import Star from "@/assets/img/star.svg?react";
import * as context from "@/context";
import * as utils from "@/utils/index";
import * as type from "@/types";
import { useState, useEffect } from "react";
import { LOCATION_MAIN } from "@/constants/constants";
import { WeatherDescription } from "./WeatherDescription";
import { Loader } from "@/components/Loader";

export default function SectionLocationMain({
  units,
}: {
  units: type.DegreeUnits;
}) {
  const { lastSuccessfulWeather, isLoading } = context.useWeather();
  const { favLocations, setFavLocations } = context.useFavLocationContext();
  const [isFavorite, setIsFavorite] = useState(false);
  const city = lastSuccessfulWeather?.city || " ";

  useEffect(() => {
    if (city && favLocations) {
      setIsFavorite(favLocations.includes(city));
    }
  }, [city, favLocations]);

  if (!lastSuccessfulWeather && isLoading) {
    return (
      <Layout.BoardSection>
        <Loader />
      </Layout.BoardSection>
    );
  }

  if (!favLocations) {
    return <div>Loading context...</div>;
  }

  utils.setStorage(LOCATION_MAIN, city);

  return (
    <Layout.BoardSection>
      <Location city={city} country={lastSuccessfulWeather?.country!} />
      <div className="flexHorizontal">
        <div className="flexVertical gap-y-[7rem]">
          <Date />
          <WeatherDescription
            description={lastSuccessfulWeather?.description!}
            units={units}
            feelsLike={lastSuccessfulWeather?.feelsLike!}
          />
        </div>
        <img
          className="object-contain w-28"
          src={`http://openweathermap.org/img/w/${lastSuccessfulWeather?.iconCode}.png`}
          alt={lastSuccessfulWeather?.mainDescription}
        />
        <div className="flexVertical items-end">
          <Temperature
            highT={lastSuccessfulWeather?.tMax!}
            lowT={lastSuccessfulWeather?.tMin!}
            sizeHighT={4.0}
            sizeLowT={2.4}
            units={units}
          />
          <Star
            width={30}
            height={30}
            fill={isFavorite ? "yellow" : "white"}
            onClick={() =>
              utils.toggleFavorite(
                isFavorite,
                setIsFavorite,
                favLocations,
                setFavLocations,
                city
              )
            }
          />
        </div>
      </div>
    </Layout.BoardSection>
  );
}
