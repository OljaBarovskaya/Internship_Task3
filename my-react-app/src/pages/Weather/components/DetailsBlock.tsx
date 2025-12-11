import BlockTopRow from "../../../containers/BlockTopRow";
import BlockBottomRow from "../../../containers/BlockBottomRow";
import Humidity from "../../../assets/img/humidity.png";
import Pressure from "../../../assets/img/pressure.png";
import Sunrise from "../../../assets/img/sunrise.png";
import Sunset from "../../../assets/img/sunset.png";
import Visibility from "../../../assets/img/visibility.png";
import Wind from "../../../assets/img/wind.png";

export default function DetailsBlock({
  name,
  value,
}: {
  name: string;
  value: string;
}) {
  let iconImg;

  function chooseIcon() {
    switch (name) {
      case "Humidity":
        iconImg = Humidity;
        break;
      case "Pressure":
        iconImg = Pressure;
        break;
      case "Sunset":
        iconImg = Sunset;
        break;
      case "Sunrise":
        iconImg = Sunrise;
        break;
      case "Visibility":
        iconImg = Visibility;
        break;
      case "Wind":
        iconImg = Wind;
        break;
    }
  }

  chooseIcon();

  return (
    <div className="w-[157px] h-[134px] p-[16px] rounded-[16px] bg-[#1f46ac] flex flex-col gap-y-[24px]">
      <BlockTopRow>
        <img className="w-[24px]" src={iconImg} alt={name}></img>
        <h3 className="inline-block">{name}</h3>
      </BlockTopRow>
      <BlockBottomRow addStyle="text-[2em]">{value}</BlockBottomRow>
    </div>
  );
}
