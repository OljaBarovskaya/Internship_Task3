import { useEffect, useState } from "react";
import { MINUTE } from "@/constants/constants";
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
    <div className="self-start">
      <p className="text-[3.6rem] mb-2">{weekday}</p>
      <p className="text-size-small">{day}</p>
    </div>
  );
}
