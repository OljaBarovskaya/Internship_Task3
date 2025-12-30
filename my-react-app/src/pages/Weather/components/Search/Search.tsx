import { useForm } from "react-hook-form";
import { useEffect } from "react";
import * as type from "@/types";
import { Select, ErrorMessage } from "@/pages/Weather/components";
import * as S from "./Search.styled";
import { CITY_INPUT_PLACEHOLDER } from "@/constants/constants";

interface SearchProps {
  onCityChange: (newCity: string) => void;
  units: type.DegreeUnits;
  onUnitsChange: (value: type.DegreeUnits) => void;
  noError: boolean;
  isSuccess: boolean;
  setIsSuccess: (value: true | false) => void;
}

export function Search({
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
    <S.FormArea>
      <S.Form
        onSubmit={handleSubmit((data) => {
          onCityChange(data.city);
          if (document.activeElement instanceof HTMLElement) {
            document.activeElement.blur();
          }
        })}
      >
        <S.InputField
          type="text"
          {...register("city", { required: "You need to enter a city" })}
          placeholder={CITY_INPUT_PLACEHOLDER}
        ></S.InputField>
        <ErrorMessage noError={noError} />
      </S.Form>
      <Select units={units} onUnitsChange={onUnitsChange} />
    </S.FormArea>
  );
}
