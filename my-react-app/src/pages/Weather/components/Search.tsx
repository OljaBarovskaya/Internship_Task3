import { useForm } from "react-hook-form";
import * as type from "@/types";
import Select from "./Select";
import { ErrorMessage } from "./ErrorMessage";
import { useEffect } from "react";

interface SearchProps {
  onCityChange: (newCity: string) => void;
  units: type.DegreeUnits;
  onUnitsChange: (value: type.DegreeUnits) => void;
  noError: boolean;
  isSuccess: boolean;
  setIsSuccess: (value: true | false) => void;
}

export default function Search({
  onCityChange,
  units,
  onUnitsChange,
  noError,
  isSuccess,
  setIsSuccess,
}: SearchProps) {
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: { city: "" },
  });

  useEffect(() => {
    if (isSuccess && noError) {
      setValue("city", "");
      setIsSuccess(false);
    }
  }, [isSuccess, noError]);

  return (
    <div className="flex justify-end gap-x-space-large text-black items-start">
      <form
        className="w-full xs:w-1/2 self-end flex flex-col min-w-[250px] gap-y-space-small "
        onSubmit={handleSubmit((data) => {
          onCityChange(data.city);
        })}
      >
        <input
          type="text"
          className="h-22 w-full rounded-[36px] px-[5%] border border-black text-size-medium placeholder:italic"
          {...register("city", { required: "You need to enter a city" })}
          placeholder='Please, input a city here and press "Enter"'
        ></input>
        <ErrorMessage noError={noError} />
      </form>
      <Select units={units} onUnitsChange={onUnitsChange} />
    </div>
  );
}
