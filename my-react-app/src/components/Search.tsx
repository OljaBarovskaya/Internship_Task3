import { useForm } from "react-hook-form";
import type { Inputs, SearchProps } from "../interfaces/types";

import Select from "./Select";

export default function Search({
  onCityChange,
  currentCity,
  units,
  onUnitsChange,
}: SearchProps) {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<Inputs>();

  return (
    <div className="searchForm flex justify-end gap-x-[24px] items-center">
      <form
        className="w-1/2 self-end"
        onSubmit={handleSubmit((data) => {
          onCityChange((currentCity = data.city));
        })}
      >
        <input
          type="text"
          className="search-input"
          {...register("city", { required: "You need to enter a city" })}
          placeholder='Please, input a city here and press "Enter"'
        ></input>
        {/* <span>{errors.city?.message}</span> */}
      </form>
      <Select units={units} onUnitsChange={onUnitsChange} />
    </div>
  );
}
