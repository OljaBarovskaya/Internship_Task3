import { FAV_LOCATIONS } from "@/constants/constants";
import { setStorage } from "./storageHandlers";
import { type SetStateAction, type Dispatch } from "react";

export function toggleFavorite(
  isFavorite: boolean,
  setIsFavorite: Dispatch<SetStateAction<boolean>>,
  favLocations: string[],
  setFavLocations: Dispatch<SetStateAction<string[]>>,
  city: string
) {
  let updatedFavLocations;
  if (isFavorite) {
    updatedFavLocations = favLocations.filter((location) => location !== city);
    setIsFavorite(false);
  } else {
    updatedFavLocations = [...favLocations, city];
    setIsFavorite(true);
  }
  setFavLocations(updatedFavLocations);
  setStorage(FAV_LOCATIONS, updatedFavLocations);
}
