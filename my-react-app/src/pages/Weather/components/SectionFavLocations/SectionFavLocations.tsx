import * as Layout from "@/components/layouts";
import { FavLocationsInfo } from "@/pages/Weather/components";

export function SectionFavLocations() {
  return (
    <Layout.BoardSection className="overflow-hidden grow-10">
      <h2>Others Countries</h2>
      <FavLocationsInfo />
    </Layout.BoardSection>
  );
}
