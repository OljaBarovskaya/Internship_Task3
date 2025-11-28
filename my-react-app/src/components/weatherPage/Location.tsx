import LocationIcon from "../../assets/img/location.png";

export default function Location({
  city,
  country,
}: {
  city: string;
  country: string;
}) {
  return (
    <div className="flex items-center p-[9px_0] gap-x-[8px] text-[1.8em]">
      <img src={LocationIcon} alt="locationIcon" className="w-[24px]"></img>
      <div>{city + ", " + country}</div>
    </div>
  );
}
