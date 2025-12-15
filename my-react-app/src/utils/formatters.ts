export function convertToWeekday(date: Date) {
  return date.toLocaleDateString("en-US", {
    weekday: "long",
  });
}

export function convertToFamiliarDateFormat(date: Date) {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    day: "numeric",
    month: "short",
  });
}

export function convertToTime(milliseconds: number) {
  const date = new Date(milliseconds);

  const time = date.toLocaleTimeString().slice(0, 5);

  return time;
}
