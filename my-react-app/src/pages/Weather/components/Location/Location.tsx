import LocationIcon from "@/assets/img/location.png";
import * as S from "./Location.styled";

export function Location({ city, country }: { city: string; country: string }) {
  return (
    <S.Location>
      <img src={LocationIcon} alt="locationIcon" className="w-[24px]"></img>
      {city + ", " + country}
    </S.Location>
  );
}
