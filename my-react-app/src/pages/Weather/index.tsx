import { useState } from "react";
import { WeatherProvider } from "@/app/providers/WeatherProvider";
import * as type from "@/types";
import * as utils from "@/utils/index";
import * as Layout from "@/components/layouts";
import { Search, Dashboard } from "./components";

export default function WeatherDashboard() {
  const [city, changeCity] = useState(utils.getStartCity());
  const [units, changeUnits] = useState<type.DegreeUnits>(
    utils.getStartUnits(),
  );
  const [reqStatus, setReqStatus] = useState<type.ReqStatusType>("noCurReq");

  return (
    <Layout.Page className="text-light">
      <WeatherProvider city={city} units={units} setReqStatus={setReqStatus}>
        <Search
          changeCity={changeCity}
          changeUnits={changeUnits}
          reqStatus={reqStatus}
          setReqStatus={setReqStatus}
        />
        <Dashboard />
      </WeatherProvider>
    </Layout.Page>
  );
}
