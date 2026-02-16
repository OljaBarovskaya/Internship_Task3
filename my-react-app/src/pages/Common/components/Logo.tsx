import * as Layout from "@/components/layouts";
import Logo from "@/assets/img/OpenWeatherLogo.png";

export default function LogoOpenWeather() {
  return (
    <Layout.FlexColumnSection>
      <img src={Logo} alt="OpenWeatherMap Logo" className="w-[150px]" />
      <a href="https://openweathermap.org/" target="_blank">
        Website link
      </a>
    </Layout.FlexColumnSection>
  );
}
