import * as type from "@/types";
import * as utils from "@/utils/index";
import * as S from "./Select.styled";

interface SelectProps {
  units: type.DegreeUnits;
  onUnitsChange: (value: type.DegreeUnits) => void;
}

export function Select({ units, onUnitsChange }: SelectProps) {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onUnitsChange(event.target.value as type.DegreeUnits);
    utils.setStorage("units", event.target.value as type.DegreeUnits);
  };
  return (
    <S.Select value={units} onChange={handleChange}>
      <option value="metric">C</option>
      <option value="imperial">F</option>
    </S.Select>
  );
}
