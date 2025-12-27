import * as type from "@/types";
import * as Layout from "@/layouts";
import { FavLocationsContextProvider } from "@/app/providers/FavLocationsProvider";
import {
  SectionFavLocations,
  SectionLocationDetails,
  SectionLocationMain,
} from "@/pages/Weather/components";

export function Dashboard({ units }: { units: type.DegreeUnits }) {
  return (
    <FavLocationsContextProvider>
      <Layout.Board>
        <Layout.Column>
          <SectionLocationMain units={units} />
          <SectionLocationDetails units={units} />
        </Layout.Column>
        <Layout.Column>
          <SectionFavLocations units={units} />
        </Layout.Column>
      </Layout.Board>
    </FavLocationsContextProvider>
  );
}
