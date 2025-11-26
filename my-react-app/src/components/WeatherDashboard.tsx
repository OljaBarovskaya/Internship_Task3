import Search from "./Search";
import Dashboard from "./Dashboard";
import { useState } from "react";
import { LOCATION_DEFAULT } from "../contents/Locations";

type UnitType = "metric" | "imperial";

export default function WeatherDashboard() {
  const [city, changeCity] = useState(LOCATION_DEFAULT);
  const [units, changeUnits] = useState<UnitType>("metric");

  return (
    <div className="flex flex-col w-full h-full">
      <Search
        onCityChange={changeCity}
        currentCity={city}
        units={units}
        onUnitsChange={changeUnits}
      />
      <Dashboard city={city} units={units} />
    </div>
  );
}
