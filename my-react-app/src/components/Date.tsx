import { useState } from "react";

export default function CurrentDate() {
  const [date, setDate] = useState(new Date());

  const weekday = date.toLocaleDateString("en-US", {
    weekday: "long",
  });
  const day = date.toLocaleDateString("en-US", {
    year: "numeric",
    day: "numeric",
    month: "short",
  });

  let interval = setInterval(() => setDate(new Date()), 6000);

  return (
    <div className="self-start">
      <h2>{weekday}</h2>
      <p>{day}</p>
    </div>
  );
}
