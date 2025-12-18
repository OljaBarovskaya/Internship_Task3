import Humidity from "@/assets/img/humidity.png";
import Pressure from "@/assets/img/pressure.png";
import Sunrise from "@/assets/img/sunrise.png";
import Sunset from "@/assets/img/sunset.png";
import Visibility from "@/assets/img/visibility.png";
import Wind from "@/assets/img/wind.png";
import * as Layout from "@/layouts";

const weatherIconsObject = new Map([
  ["Humidity", Humidity],
  ["Pressure", Pressure],
  ["Sunset", Sunset],
  ["Sunrise", Sunrise],
  ["Visibility", Visibility],
  ["Wind", Wind],
]);

export default function DetailsBlock({
  name,
  value,
}: {
  name: string;
  value: string;
}) {
  const iconImg = weatherIconsObject.get(name);

  return (
    <Layout.BlockVertical className="w-60 h-48 lg:h-55">
      <div className="w-full flexHorizontal items-center ">
        <img className="w-10 object-contain" src={iconImg} alt={name}></img>
        <h3>{name}</h3>
      </div>
      <p className="text-size-large">{value}</p>
    </Layout.BlockVertical>
  );
}
