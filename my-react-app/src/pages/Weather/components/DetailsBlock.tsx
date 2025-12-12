import Humidity from "../../../assets/img/humidity.png";
import Pressure from "../../../assets/img/pressure.png";
import Sunrise from "../../../assets/img/sunrise.png";
import Sunset from "../../../assets/img/sunset.png";
import Visibility from "../../../assets/img/visibility.png";
import Wind from "../../../assets/img/wind.png";

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
    <div className="w-[157px] h-[134px] p-[16px] rounded-[16px] bg-[#1f46ac] flex flex-col gap-y-[24px]">
      <div className="flex justify-between">
        <img className="w-[24px]" src={iconImg} alt={name}></img>
        <h3 className="inline-block">{name}</h3>
      </div>
      <div className="flex text-[2em]">{value}</div>
    </div>
  );
}
