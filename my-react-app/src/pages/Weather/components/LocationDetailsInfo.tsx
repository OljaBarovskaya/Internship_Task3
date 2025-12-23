import * as context from "@/context";
import * as Layout from "@/layouts";
import * as type from "@/types";
import DetailsBlock from "./DetailsBlock";
import { Loader } from "@/components/Loader";

export function LocationDetailsInfo({ units }: { units: type.DegreeUnits }) {
  const { lastSuccessfulWeather, isLoading } = context.useWeather();

  if (!lastSuccessfulWeather && isLoading) {
    return (
      <Layout.BoardSection>
        <Loader />
      </Layout.BoardSection>
    );
  }

  return (
    <div className="flex flex-wrap gap-y-space-medium gap-x-space-medium justify-evenly overflow-y-auto">
      <DetailsBlock
        name="Humidity"
        value={lastSuccessfulWeather?.humidity + "%"}
      />
      <DetailsBlock
        name="Pressure"
        value={lastSuccessfulWeather?.pressure + " hPa"}
      />
      <DetailsBlock
        name="Wind"
        value={
          units === "metric"
            ? lastSuccessfulWeather?.wind + " m/s"
            : lastSuccessfulWeather?.wind + " m/h"
        }
      />
      <DetailsBlock
        name="Visibility"
        value={lastSuccessfulWeather?.visibility + " m"}
      />
      <DetailsBlock name="Sunrise" value={lastSuccessfulWeather?.sunrise} />
      <DetailsBlock name="Sunset" value={lastSuccessfulWeather?.sunset} />
    </div>
  );
}
