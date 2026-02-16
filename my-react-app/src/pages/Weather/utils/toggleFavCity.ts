import { FAV_LOCATIONS } from "@/constants";
import * as utils from "@/utils";
import { type SetStateAction, type Dispatch } from "react";

export function toggleFavCity(
  isFavorite: boolean,
  favLocations: string[],
  setFavLocations: Dispatch<SetStateAction<string[]>>,
  city: string,
) {
  let updatedFavLocations;
  if (isFavorite) {
    updatedFavLocations = favLocations.filter((location) => location !== city);
  } else {
    updatedFavLocations = [...favLocations, city];
  }
  setFavLocations(updatedFavLocations);
  utils.setStorage(FAV_LOCATIONS, updatedFavLocations);
}
