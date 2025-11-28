import Search from "./Search";
import Dashboard from "./Dashboard";
import { useState } from "react";
import { LOCATION_DEFAULT } from "../../contents/Locations";
import { WeatherProvider } from "../../contents/Contents";
import type { DegreeUnits } from "../../interfaces/interfaces";

export default function WeatherDashboard() {
  const [city, changeCity] = useState(LOCATION_DEFAULT);
  const [units, changeUnits] = useState<DegreeUnits>("metric");
  const [isCorrect, setIsCorrect] = useState(true);

  return (
    <div className="flex flex-col w-full h-full">
      <WeatherProvider city={city} units={units} setIsCorrect={setIsCorrect}>
        <Search
          onCityChange={changeCity}
          currentCity={city}
          units={units}
          onUnitsChange={changeUnits}
          isCorrect={isCorrect}
        />
        <Dashboard units={units} />
      </WeatherProvider>
    </div>
  );
}
