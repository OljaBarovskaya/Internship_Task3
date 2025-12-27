import * as Layout from "@/layouts";
import * as type from "@/types";
import { LocationDetailsInfo } from "@/pages/Weather/components";

export function SectionLocationDetails({ units }: { units: type.DegreeUnits }) {
  return (
    <Layout.BoardSection>
      <h2>Detailed Weather</h2>
      <LocationDetailsInfo units={units} />
    </Layout.BoardSection>
  );
}
