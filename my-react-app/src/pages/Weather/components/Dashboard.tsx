import * as type from "@/types";
import * as Layout from "@/layouts";
import { FavLocationsContextProvider } from "@/app/providers/FavLocationsProvider";
import SectionLocationMain from "./SectionLocationMain";
import SectionLocationDetails from "./SectionLocationDetails";
import BlockFavLocations from "./SectionFavLocations";

export default function Dashboard({ units }: { units: type.DegreeUnits }) {
  return (
    <FavLocationsContextProvider>
      <Layout.Board>
        <Layout.Column>
          <SectionLocationMain units={units} />
          <SectionLocationDetails units={units} />
        </Layout.Column>
        <Layout.Column>
          <BlockFavLocations units={units} />
        </Layout.Column>
      </Layout.Board>
    </FavLocationsContextProvider>
  );
}
