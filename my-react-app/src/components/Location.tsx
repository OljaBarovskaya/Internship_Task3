export default function Location({
  city,
  country,
}: {
  city: string;
  country: string;
}) {
  return (
    <div className="flex items-center p-[9px_16px] gap-x-[8px] text-[1.8em]">
      <div className="bg-[url('./src/assets/img/location.png')] w-[24px] h-[24px] inline-block"></div>
      {city + ", " + country}
    </div>
  );
}
