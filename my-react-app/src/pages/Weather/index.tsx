import Search from "./components/Search";
import Dashboard from "./components/Dashboard";
import { useState } from "react";
import { WeatherProvider } from "@/app/providers/WeatherProvider";
import * as type from "@/types";
import * as utils from "@/utils/index";
import * as Layout from "@/layouts";

export default function WeatherDashboard() {
  const [city, changeCity] = useState(utils.getStartCity());
  const [units, changeUnits] = useState<type.DegreeUnits>(
    utils.getStartUnits()
  );
  const [isCorrect, setIsCorrect] = useState(true);

  return (
    <Layout.Page className="text-light">
      <WeatherProvider city={city} units={units} setIsCorrect={setIsCorrect}>
        <Search
          onCityChange={changeCity}
          units={units}
          onUnitsChange={changeUnits}
          isCorrect={isCorrect}
        />
        <Dashboard units={units} />
      </WeatherProvider>
    </Layout.Page>
  );
}
