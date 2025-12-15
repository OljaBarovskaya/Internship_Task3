import { useEffect, useState } from "react";
import { MINUTE } from "../../../constants/constants";
import {
  convertToFamiliarDateFormat,
  convertToWeekday,
} from "../../../utils/formatters";

export default function CurrentDate() {
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
      <h2 className="text-[3.6em] mb-[4px]">{weekday}</h2>
      <p className="text-[1.6em]">{day}</p>
    </div>
  );
}
