import { FlexColumnSection } from "@/pages/Common/layouts";
import Logo from "@/assets/img/OpenWeatherLogo.png";

export default function LogoOpenWeather() {
  return (
    <FlexColumnSection>
      <img src={Logo} alt="OpenWeatherMap Logo" className="w-[150px]" />
      <a href="https://openweathermap.org/" target="_blank">
        Website link
      </a>
    </FlexColumnSection>
  );
}
