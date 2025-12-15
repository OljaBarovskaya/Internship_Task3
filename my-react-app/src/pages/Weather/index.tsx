import Search from "./components/Search";
import Dashboard from "./components/Dashboard";
import { useState } from "react";
import {
  LOCATION_DEFAULT,
  LOCATION_MAIN,
  UNITS_DEFAULT,
} from "../../constants/constants";
import { WeatherProvider } from "../../app/providers/WeatherProvider";
import * as type from "../../types";
import { getStorage } from "../../utils/storageHandlers";

function getStartCity() {
  if (getStorage(LOCATION_MAIN)) {
    return getStorage(LOCATION_MAIN);
  } else return LOCATION_DEFAULT;
}

function getStartUnits() {
  if (getStorage("units")) {
    return getStorage("units");
  } else return UNITS_DEFAULT;
}

export default function WeatherDashboard() {
  const [city, changeCity] = useState(getStartCity());
  const [units, changeUnits] = useState<type.DegreeUnits>(getStartUnits());
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
