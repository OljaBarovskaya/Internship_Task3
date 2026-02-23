import { Controller, useForm } from "react-hook-form";
import { useEffect, useState, type SetStateAction } from "react";
import { useDebounce } from "@/pages/Weather/hooks";
import * as type from "@/types";
import { Select, ErrorMessage, CitiesList } from "@/pages/Weather/components";
import { CITY_INPUT_PLACEHOLDER } from "@/constants";
import { useCitiesQuery } from "@/services/CitiesAPIService";
import { Loader } from "@/components/UI";
import * as S from "./Search.styled";

interface SearchProps {
  changeCity: React.Dispatch<SetStateAction<string>>;
  changeUnits: React.Dispatch<SetStateAction<type.DegreeUnits>>;
  reqStatus: type.ReqStatusType;
  setReqStatus: React.Dispatch<SetStateAction<type.ReqStatusType>>;
}

export function Search({
  changeCity,
  changeUnits,
  reqStatus,
  setReqStatus,
}: SearchProps) {
  const { handleSubmit, setValue, control, watch } = useForm({
    defaultValues: { city: "" },
  });

  const [isSelected, setIsSelected] = useState(false);

  const searchValue = watch("city");
  const debouncedSearchTerm = useDebounce(searchValue, 500);

  const { data: propCitiesArr, isFetching } = useCitiesQuery(
    debouncedSearchTerm,
    {
      skip: debouncedSearchTerm.length < 3 || isSelected,
    },
  );

  const suggestions = propCitiesArr || [];

  useEffect(() => {
    if (reqStatus === "success") {
      setValue("city", "");
      setIsSelected(false);
      setReqStatus("noCurReq");
    }
  }, [reqStatus, setValue, setReqStatus]);

  return (
    <S.FormArea>
      <S.Form
        onSubmit={handleSubmit((data) => {
          changeCity(data.city);
          setIsSelected(true);
          (document.activeElement as HTMLElement)?.blur();
        })}
      >
        <Controller
          name="city"
          control={control}
          rules={{ required: "You need to enter a city" }}
          render={({ field }) => (
            <S.InputArea>
              <S.InputField
                {...field}
                autoComplete="off"
                type="text"
                placeholder={CITY_INPUT_PLACEHOLDER}
                onChange={(e: string) => {
                  field.onChange(e);
                  setIsSelected(false);
                  setReqStatus("noCurReq");
                }}
              />
              {isFetching &&
                searchValue.length >= 3 &&
                suggestions.length === 0 &&
                !isSelected && (
                  <S.ClueField>
                    <Loader height="h-20" color="text-gray-700" />
                  </S.ClueField>
                )}
              {suggestions.length > 0 && !isSelected && (
                <S.ClueField>
                  <CitiesList
                    suggestions={suggestions}
                    field={field}
                    setIsSelected={setIsSelected}
                  />
                </S.ClueField>
              )}
            </S.InputArea>
          )}
        />
        <ErrorMessage reqStatus={reqStatus} />
      </S.Form>
      <Select changeUnits={changeUnits} />
    </S.FormArea>
  );
}
