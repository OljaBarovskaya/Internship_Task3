import type { DegreeUnits } from "../../../interfaces/interfaces";
import { setStorage } from "../../../utils/helpers";

interface SelectProps {
  units: DegreeUnits;
  onUnitsChange: (value: DegreeUnits) => void;
}

export default function Select({ units, onUnitsChange }: SelectProps) {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onUnitsChange(event.target.value as DegreeUnits);
    setStorage("units", event.target.value as DegreeUnits);
  };
  return (
    <select value={units} onChange={handleChange}>
      <option value="metric">C</option>
      <option value="imperial">F</option>
    </select>
  );
}
