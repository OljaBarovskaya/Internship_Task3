import { useForm } from "react-hook-form";
import * as type from "../../../types";
import Select from "./Select";

interface SearchProps {
  onCityChange: (newCity: string) => void;
  units: type.DegreeUnits;
  onUnitsChange: (value: type.DegreeUnits) => void;
  isCorrect: true | false;
}

export default function Search({
  onCityChange,
  units,
  onUnitsChange,
  isCorrect,
}: SearchProps) {
  const { register, handleSubmit } = useForm();

  return (
    <div className="searchForm flex justify-end gap-x-[24px] items-center">
      <form
        className="w-1/2 self-end flex flex-col min-w-[250px] gap-y-[8px]"
        onSubmit={handleSubmit((data) => {
          onCityChange(data.city);
        })}
      >
        <input
          type="text"
          className="search-input h-[56px] w-full rounded-[36px] px-[5%]"
          {...register("city", { required: "You need to enter a city" })}
          placeholder='Please, input a city here and press "Enter"'
        ></input>
        {!isCorrect ? (
          <span className="text-[#FF0000]">
            Please check whether the city name is correct
          </span>
        ) : (
          <span className="h-[11.5px]"> </span>
        )}
      </form>
      <Select units={units} onUnitsChange={onUnitsChange} />
    </div>
  );
}
