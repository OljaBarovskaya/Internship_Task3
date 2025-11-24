import { useForm } from "react-hook-form";
import type { Inputs, SearchProps } from "../interfaces/types";

export default function Search({ onCityChange, currentCity }: SearchProps) {
  const { register, handleSubmit } = useForm<Inputs>();

  return (
    <form
      className="w-1/2 self-end"
      onSubmit={handleSubmit((data) => {
        onCityChange((currentCity = data.city));
      })}
    >
      <input
        className="search-input"
        {...register("city")}
        placeholder='Please, input a city here and press "Enter"'
      ></input>
    </form>
  );
}
