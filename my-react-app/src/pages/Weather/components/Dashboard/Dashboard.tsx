import * as Layout from "@/components/layouts";
import { FavLocationsContextProvider } from "@/app/providers/FavLocationsProvider";
import {
  SectionFavLocations,
  SectionLocationDetails,
  SectionLocationMain,
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
          <SectionFavLocations />
        </Layout.BoardColumn>
      </Layout.Board>
    </FavLocationsContextProvider>
  );
}
