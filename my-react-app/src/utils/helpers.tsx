import { FAV_LOCATIONS } from "../constants/constants";

export default function convertTime(milliseconds: number) {
  const date = new Date(milliseconds);

  const time = date.toLocaleTimeString().slice(0, 5);

  return time;
}

export function getStorage(item: string) {
  if (item === FAV_LOCATIONS) {
    if (localStorage.getItem(item)) {
      return JSON.parse(localStorage.getItem(item)!);
    } else return [];
  } else return localStorage.getItem(item);
}

export function setStorage(item: string, value: string | string[]) {
  if (typeof localStorage === "undefined") {
    console.error("localStorage is not available in this environment");
    return;
  }
  if (typeof value !== "string") {
    localStorage.setItem(item, JSON.stringify(value));
  } else localStorage.setItem(item, value);
}
