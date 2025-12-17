import * as Layout from "@/layouts";
import * as type from "@/types";
import { LocationDetailsInfo } from "./LocationDetailsInfo";

export default function SectionLocationDetails({
  units,
}: {
  units: type.DegreeUnits;
}) {
  return (
    <Layout.BoardSection>
      <h2>Detailed Weather</h2>
      <LocationDetailsInfo units={units} />
    </Layout.BoardSection>
  );
}
