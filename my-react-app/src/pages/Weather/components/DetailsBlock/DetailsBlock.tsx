import Humidity from "@/assets/img/humidity.png";
import Pressure from "@/assets/img/pressure.png";
import Sunrise from "@/assets/img/sunrise.png";
import Sunset from "@/assets/img/sunset.png";
import Visibility from "@/assets/img/visibility.png";
import Wind from "@/assets/img/wind.png";
import * as Layout from "@/components/layouts";
import * as S from "./DetailsBlock.styled";

const weatherIconsObject = new Map([
  ["Humidity", Humidity],
  ["Pressure", Pressure],
  ["Sunset", Sunset],
  ["Sunrise", Sunrise],
  ["Visibility", Visibility],
  ["Wind", Wind],
]);

export function DetailsBlock({
  name,
  value,
}: {
  name: string;
  value: string | undefined;
}) {
  const iconImg = weatherIconsObject.get(name);

  return (
    <Layout.BlockVertical className="gap-y-space-large">
      <S.Title>
        <S.TitleImg src={iconImg} alt={name} />
        <h3>{name}</h3>
      </S.Title>
      <S.Info>{value}</S.Info>
    </Layout.BlockVertical>
  );
}
