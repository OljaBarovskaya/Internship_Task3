import { useForm } from "react-hook-form";
import type { SearchProps } from "../../interfaces/interfaces";
import Select from "./Select";

export default function Search({
  onCityChange,
  currentCity,
  units,
  onUnitsChange,
  isCorrect,
}: SearchProps) {
  const { register, handleSubmit } = useForm();

  return (
    <div className="searchForm flex justify-end gap-x-[24px] items-center">
      <form
        className="w-1/2 self-end flex flex-col"
        onSubmit={handleSubmit((data) => {
          onCityChange((currentCity = data.city));
        })}
      >
        <input
          type="text"
          className="search-input h-[56px] w-full rounded-[36px] px-[24px]"
          {...register("city", { required: "You need to enter a city" })}
          placeholder='Please, input a city here and press "Enter"'
        ></input>
        {!isCorrect ? (
          <span className="text-red">
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
