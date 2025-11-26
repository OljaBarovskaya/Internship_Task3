import Logo from "../../assets/img/OpenWeatherLogo.png";

export default function LogoOpenWeather() {
  return (
    <div className="logo-section flex flex-col gap-y-[8px]">
      <img src={Logo} alt="OpenWeatherMap Logo" className="w-[150px]" />
      <a href="openweathermap.org" target="_blank">
        Website link
      </a>
    </div>
  );
}
