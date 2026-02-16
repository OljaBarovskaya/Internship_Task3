import * as type from "@/types";
import * as utils from "@/utils/index";
import * as S from "./Select.styled";
import { useWeather } from "@/context";

interface SelectProps {
  changeUnits: (value: type.DegreeUnits) => void;
}

export function Select({ changeUnits }: SelectProps) {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    changeUnits(event.target.value as type.DegreeUnits);
    utils.setStorage("units", event.target.value as type.DegreeUnits);
  };

  const { units } = useWeather();

  return (
    <S.Select value={units} onChange={handleChange}>
      <option value="metric">C</option>
      <option value="imperial">F</option>
    </S.Select>
  );
}
