import { TEL } from "@/constants/constants";

export function TelContact() {
  return (
    <p>
      <strong>Tel number</strong>: <a href={`tel:${TEL}`}>+375292883985</a>
    </p>
  );
}
