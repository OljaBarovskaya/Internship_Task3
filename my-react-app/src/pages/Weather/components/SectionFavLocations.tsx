import * as Layout from "@/layouts";

import * as type from "@/types";
import { FavLocationsInfo } from "./FavLocationsInfo";

export default function BlockFavLocations({
  units,
}: {
  units: type.DegreeUnits;
}) {
  return (
    <Layout.BoardSection className="h-full ">
      <h2>Others Countries</h2>
      <FavLocationsInfo units={units} />
    </Layout.BoardSection>
  );
}
