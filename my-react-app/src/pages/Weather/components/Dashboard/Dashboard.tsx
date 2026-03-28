import * as Layout from "@/components/layouts";
import { FavLocationsContextProvider } from "@/app/providers/FavLocationsProvider";
import {
  SectionFavLocations,
  SectionLocationDetails,
  SectionLocationMain,
  SectionWeatherForecast,
} from "@/pages/Weather/components";

export function Dashboard() {
  return (
    <FavLocationsContextProvider>
      <Layout.Board>
        <Layout.BoardColumn>
          <SectionLocationMain />
          <SectionLocationDetails />
        </Layout.BoardColumn>
        <Layout.BoardColumn>
          <SectionWeatherForecast />
          <SectionFavLocations />
        </Layout.BoardColumn>
      </Layout.Board>
    </FavLocationsContextProvider>
  );
}
