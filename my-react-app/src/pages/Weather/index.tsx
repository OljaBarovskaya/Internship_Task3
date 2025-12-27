import { useState } from "react";
import { WeatherProvider } from "@/app/providers/WeatherProvider";
import * as type from "@/types";
import * as utils from "@/utils/index";
import * as Layout from "@/layouts";
import { Search, Dashboard } from "./components";

export default function WeatherDashboard() {
  const [city, changeCity] = useState(utils.getStartCity());
  const [units, changeUnits] = useState<type.DegreeUnits>(
    utils.getStartUnits()
  );
  const [noError, setNoError] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <Layout.Page className="text-light">
      <WeatherProvider
        city={city}
        units={units}
        setNoError={setNoError}
        setIsSuccess={setIsSuccess}
      >
        <Search
          onCityChange={changeCity}
          units={units}
          onUnitsChange={changeUnits}
          noError={noError}
          isSuccess={isSuccess}
          setIsSuccess={setIsSuccess}
        />
        <Dashboard units={units} />
      </WeatherProvider>
    </Layout.Page>
  );
}
