import { FlexColumnSection } from "@/pages/Common/layouts";
import HowToUseBlock from "./HowToUseBlock";
import { howToUseDesc } from "./HowToUseDesc";

export default function HowToUseSection() {
  return (
    <FlexColumnSection>
      <h2>How to use the application</h2>
      <p>
        This app consists of two main blocks - Search and Dashboard itself that
        is divided into 3 sections: two of them show the weather in the
        requested location and the 3rd shows the list of favorite locations with
        brief weather data there.
      </p>
      {howToUseDesc.map((instructions, index) => (
        <HowToUseBlock {...instructions} key={index} />
      ))}
    </FlexColumnSection>
  );
}
