export default function convertTime(milliseconds: number) {
  const date = new Date(milliseconds);

  const time = date.toLocaleTimeString().slice(0, 5);

  return time;
}
