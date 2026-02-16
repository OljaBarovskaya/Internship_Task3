import * as utils from "@/utils";
import { FAV_LOCATIONS } from "@/constants";
import type { SetStateAction } from "react";

export function deleteFavCity(
  favLocations: string[],
  city: string,
  setFavLocations: React.Dispatch<SetStateAction<string[]>>,
) {
  const updatedFavLocations = favLocations.filter(
    (item: string) => item !== city,
  );
  setFavLocations(updatedFavLocations!);
  utils.setStorage(FAV_LOCATIONS, updatedFavLocations!);
}
