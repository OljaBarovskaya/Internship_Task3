import BlockRow1 from "../../containers/BlockRow1";
import BlockRow2 from "../../containers/BlockRow2";

export default function DetailsBlock({
  name,
  value,
}: {
  name: string;
  value: string;
}) {
  const nameL = name.toLowerCase();
  return (
    <div className="w-[157px] h-[134px] p-[16px] rounded-[16px] bg-[#00008B] flex flex-col gap-y-[24px]">
      <BlockRow1>
        <img
          className="w-[24px]"
          src={`./src/assets/img/${nameL}.png`}
          alt={name}
        ></img>
        <h3 className="inline-block">{name}</h3>
      </BlockRow1>
      <BlockRow2 addStyle="text-[2em]">{value}</BlockRow2>
    </div>
  );
}
