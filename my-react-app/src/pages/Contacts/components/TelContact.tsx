import { TEL } from "@/constants";
import { Link } from "@/components/UI";

export function TelContact() {
  return (
    <p>
      <strong>Tel number</strong>: <Link href={`tel:${TEL}`}>{TEL}</Link>
    </p>
  );
}
