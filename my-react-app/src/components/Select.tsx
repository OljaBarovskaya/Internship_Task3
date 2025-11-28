import type { SelectProps } from "../interfaces/interfaces";

export default function Select({ units, onUnitsChange }: SelectProps) {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onUnitsChange(event.target.value as "metric" | "imperial");
  };
  return (
    <select value={units} onChange={handleChange}>
      <option value="metric">C</option>
      <option value="imperial">F</option>
    </select>
  );
}
