import * as Layout from "@/components/layouts";
import { Temperature } from "@/pages/Weather/components";

interface WeatherForecastBlockProps {
  hour: number;
  highT: number;
  description: string;
}

export function WeatherForecastBlock({
  hour,
  highT,
  description,
}: WeatherForecastBlockProps) {
  return (
    <Layout.BlockVertical className="gap-y-space-medium ">
      <h3>{hour + " h"}</h3>
      <Temperature highT={highT} sizeHighT={2.4} />
      <p>{description}</p>
    </Layout.BlockVertical>
  );
}
