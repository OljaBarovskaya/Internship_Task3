import * as type from "../../../types";
import { setStorage } from "../../../utils/storageHandlers";

interface SelectProps {
  units: type.DegreeUnits;
  onUnitsChange: (value: type.DegreeUnits) => void;
}

export default function Select({ units, onUnitsChange }: SelectProps) {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onUnitsChange(event.target.value as type.DegreeUnits);
    setStorage("units", event.target.value as type.DegreeUnits);
  };
  return (
    <select value={units} onChange={handleChange}>
      <option value="metric">C</option>
      <option value="imperial">F</option>
    </select>
  );
}
