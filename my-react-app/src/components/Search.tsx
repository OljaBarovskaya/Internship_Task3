import { useForm } from "react-hook-form";
import type { Inputs, SearchProps } from "../interfaces/types";

export default function Search({ onCityChange, currentCity }: SearchProps) {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<Inputs>();

  return (
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
  );
}
