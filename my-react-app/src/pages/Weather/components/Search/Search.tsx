import { useForm } from "react-hook-form";
import { useEffect, type SetStateAction } from "react";
import * as type from "@/types";
import { Select, ErrorMessage } from "@/pages/Weather/components";
import * as S from "./Search.styled";
import { CITY_INPUT_PLACEHOLDER } from "@/constants";

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
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: { city: "" },
  });

  useEffect(() => {
    if (reqStatus === "success") {
      setValue("city", "");
      setReqStatus("noCurReq");
    }
  }, [reqStatus]);

  return (
    <S.FormArea>
      <S.Form
        onSubmit={handleSubmit((data) => {
          changeCity(data.city);
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
        <ErrorMessage reqStatus={reqStatus} />
      </S.Form>
      <Select changeUnits={changeUnits} />
    </S.FormArea>
  );
}
