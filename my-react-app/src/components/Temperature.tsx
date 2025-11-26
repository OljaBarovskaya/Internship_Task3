export default function Temperature({
  highT,
  lowT,
  sizeHighT,
  sizeLowT,
  units,
}: {
  highT: number;
  lowT: number;
  sizeHighT: number;
  sizeLowT: number;
  units: "metric" | "imperial";
}) {
  return (
    <div>
      <p style={{ fontSize: `${sizeHighT}em` }} className="font-medium">
        {units === "metric" ? highT + "\u00B0C" : highT + "\u00B0F"}
      </p>
      <p
        className="text-[#B9B9B9] font-medium"
        style={{ fontSize: `${sizeLowT}em` }}
      >
        {units === "metric" ? "/" + lowT + "\u00B0C" : "/" + lowT + "\u00B0F"}
      </p>
    </div>
  );
}
