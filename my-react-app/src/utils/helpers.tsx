export default function convertTime(milliseconds: number) {
  const date = new Date(milliseconds);

  const time = date.toLocaleTimeString().slice(0, 5);

  return time;
}

export function getStorage(item: string) {
  if (localStorage.getItem(item)) {
    return JSON.parse(localStorage.getItem(item)!);
  } else return [];
}

export function setStorage(item: string, value: string | string[]) {
  console.log(item, value);
  if (typeof localStorage === "undefined") {
    console.error("localStorage is not available in this environment");
    return;
  }
  if (typeof value !== "string") {
    localStorage.setItem(item, JSON.stringify(value));
  } else localStorage.setItem(item, value);
}
