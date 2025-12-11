import LogoOpenWeather from "./Logo";

export default function OpenWeatherMap() {
  return (
    <section className="flex flex-col gap-y-[8px]">
      <h2>About OpenWeatherMap</h2>
      <p>
        OpenWeatherMap is an online service that provides global weather data
        via APIs, including current conditions, a wide range of forecasts, and
        historical data. It serves over six million users, from independent
        developers to large businesses, offering both free and paid plans.
      </p>
      <LogoOpenWeather />
    </section>
  );
}
