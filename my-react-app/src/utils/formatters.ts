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

export function convertToTime(
  timeMs: number | "unknown",
  timezoneMs: number | "unknown"
) {
  if (timeMs === "unknown" || timezoneMs === "unknown") {
    return "unknown";
  }
  const localTimeMs = timeMs * 1000 + timezoneMs;
  const date = new Date(localTimeMs);
  const time = date.toLocaleTimeString().slice(0, 5);

  return time;
}
