import * as type from "@/types";
import * as utils from "@/utils/index";

interface SelectProps {
  units: type.DegreeUnits;
  onUnitsChange: (value: type.DegreeUnits) => void;
}

export default function Select({ units, onUnitsChange }: SelectProps) {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onUnitsChange(event.target.value as type.DegreeUnits);
    utils.setStorage("units", event.target.value as type.DegreeUnits);
  };
  return (
    <select
      value={units}
      onChange={handleChange}
      className="h-22 text-size-large font-medium"
    >
      <option value="metric">C</option>
      <option value="imperial">F</option>
    </select>
  );
}
