import {
  FAV_LOCATIONS,
  LOCATION_DEFAULT,
  LOCATION_MAIN,
  UNITS,
  UNITS_DEFAULT,
} from "@/constants/constants";

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

export function getStartCity() {
  if (getStorage(LOCATION_MAIN)) {
    return getStorage(LOCATION_MAIN);
  } else return LOCATION_DEFAULT;
}

export function getStartUnits() {
  if (getStorage(UNITS)) {
    return getStorage(UNITS);
  } else return UNITS_DEFAULT;
}
