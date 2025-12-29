import { TEL } from "@/constants/constants";

export function TelContact() {
  return (
    <p>
      Tel number: <a href={`tel:${TEL}`}>+375292883985</a>
    </p>
  );
}
