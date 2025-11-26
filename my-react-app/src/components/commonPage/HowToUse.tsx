import { HowToUseDesc } from "./HowToUseDesc";
import HowToUseBlock from "./HowToUseBlock";

export default function HowToUse() {
  return (
    <section className="flex flex-col gap-y-[8px]">
      <h2>How to use the application</h2>
      <p>
        This app consists of two main blocks - Search and Dashboard itself that
        is divided into 3 sections: two of them show the weather in the
        requested location and the 3rd shows the list of favorite locations with
        brief weather data there.
      </p>
      {HowToUseDesc.map((description, index) => {
        return <HowToUseBlock {...description} key={index} />;
      })}
    </section>
  );
}
