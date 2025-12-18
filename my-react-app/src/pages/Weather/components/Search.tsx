import { useForm } from "react-hook-form";
import * as type from "@/types";
import Select from "./Select";
import { ErrorMessage } from "./ErrorMessage";

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
    <div className="flex justify-end gap-x-space-large items-center">
      <form
        className="w-full xs:w-1/2 self-end flex flex-col min-w-[250px] gap-y-space-small"
        onSubmit={handleSubmit((data) => {
          onCityChange(data.city);
        })}
      >
        <input
          type="text"
          className="h-22 w-full rounded-[36px] px-[5%] border border-black text-black"
          {...register("city", { required: "You need to enter a city" })}
          placeholder='Please, input a city here and press "Enter"'
        ></input>
        <ErrorMessage isCorrect={isCorrect} />
      </form>
      <Select units={units} onUnitsChange={onUnitsChange} />
    </div>
  );
}
