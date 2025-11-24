import Search from "./Search";
import Dashboard from "./Dashboard";
import { useState } from "react";
import { LOCATION_DEFAULT } from "../contents/Locations";

export default function WeatherDashboard() {
  const [city, changeCity] = useState(LOCATION_DEFAULT);

  function updateCity(newCity: string) {
    changeCity(newCity);
  }

  return (
    <div className="flex flex-col w-full h-full">
      <Search onCityChange={updateCity} currentCity={city} />
      <Dashboard city={city} />
    </div>
  );
}
