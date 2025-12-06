import Search from "./Search";
import Dashboard from "./Dashboard";
import { useState } from "react";
import { LOCATION_DEFAULT, UNITS_DEFAULT } from "../../constants/constants";
import { WeatherProvider } from "../../services/WeatherProvider";
import type { DegreeUnits } from "../../interfaces/interfaces";
import { getStorage } from "../../utils/helpers";

function getStartCity() {
  if (getStorage("locationMain")) {
    return getStorage("locationMain");
  } else return LOCATION_DEFAULT;
}

function getStartUnits() {
  if (getStorage("units")) {
    return getStorage("units");
  } else return UNITS_DEFAULT;
}

export default function WeatherDashboard() {
  const [city, changeCity] = useState(getStartCity());
  const [units, changeUnits] = useState<DegreeUnits>(getStartUnits());
  const [isCorrect, setIsCorrect] = useState(true);

  return (
    <div className="flex flex-col w-full h-full">
      <WeatherProvider city={city} units={units} setIsCorrect={setIsCorrect}>
        <Search
          onCityChange={changeCity}
          units={units}
          onUnitsChange={changeUnits}
          isCorrect={isCorrect}
        />
        <Dashboard units={units} />
      </WeatherProvider>
    </div>
  );
}
