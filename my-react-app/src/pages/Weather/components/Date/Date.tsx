import { useEffect, useState } from "react";
import * as S from "./Date.styled";
import { MINUTE } from "@/constants";
import {
  convertToFamiliarDateFormat,
  convertToWeekday,
} from "@/utils/formatters";

export function CurrentDate() {
  const [date, setDate] = useState(new Date());

  const weekday = convertToWeekday(date);
  const day = convertToFamiliarDateFormat(date);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setDate(new Date());
    }, MINUTE);
    return () => {
      clearInterval(intervalID);
    };
  }, []);

  return (
    <S.DateContainer>
      <S.Weekday>{weekday}</S.Weekday>
      <S.Day>{day}</S.Day>
    </S.DateContainer>
  );
}
