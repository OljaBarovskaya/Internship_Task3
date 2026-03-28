import { WeatherForecastBlock } from "@/pages/Weather/components";
import * as S from "./Forecast.styled";

interface ForecastData {
  hour: number;
  temperature: number;
  description: string;
}

export function Forecast({ weatherForecastData }: { weatherForecastData: [] }) {
  return (
    <S.Forecast>
      {weatherForecastData.map((forecast: ForecastData, index: number) => (
        <WeatherForecastBlock
          key={index}
          hour={forecast?.hour}
          highT={forecast?.temperature}
          description={forecast?.description}
        />
      ))}
    </S.Forecast>
  );
}
