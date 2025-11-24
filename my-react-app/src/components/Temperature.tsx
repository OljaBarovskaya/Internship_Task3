export default function Temperature({
  highT,
  lowT,
  sizeHighT,
  sizeLowT,
}: {
  highT: number;
  lowT: number;
  sizeHighT: number;
  sizeLowT: number;
}) {
  return (
    <div>
      <p style={{ fontSize: `${sizeHighT}em` }} className="font-medium">
        {highT}
      </p>
      <p
        className="text-[#B9B9B9] font-medium"
        style={{ fontSize: `${sizeLowT}em` }}
      >
        {`/${lowT}`}
      </p>
    </div>
  );
}
