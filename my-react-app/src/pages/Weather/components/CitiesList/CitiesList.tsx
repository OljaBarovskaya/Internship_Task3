import type { ControllerRenderProps } from "react-hook-form";
import * as type from "@/types";
import * as S from "./CitiesList.styled";
import type { SetStateAction } from "react";

interface CitiesListProps {
  suggestions: type.CitiesData[] | [];
  setIsSelected: React.Dispatch<SetStateAction<boolean>>;
  field: ControllerRenderProps<{ city: string }, "city">;
}

export function CitiesList({
  suggestions,
  field,
  setIsSelected,
}: CitiesListProps) {
  return (
    <S.ListOfCities>
      {suggestions.map((item) => (
        <li key={item.id}>
          <S.CityOption
            onClick={() => {
              field.onChange(item.name + ", " + item.country);
              setIsSelected(true);
              const input = document.getElementsByName(
                field.name,
              )[0] as HTMLInputElement;
              input?.focus();
            }}
          >
            {item.name + ", " + item.country}
          </S.CityOption>
        </li>
      ))}
    </S.ListOfCities>
  );
}
