import * as Layout from "@/components/layouts";
import { LocationDetailsInfo } from "@/pages/Weather/components";

export function SectionLocationDetails() {
  return (
    <Layout.BoardSection>
      <h2>Detailed Weather</h2>
      <LocationDetailsInfo />
    </Layout.BoardSection>
  );
}
