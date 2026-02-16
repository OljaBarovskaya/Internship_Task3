import { Link } from "@/components/UI";
import { EMAIL } from "@/constants";

export function EmailContact() {
  return (
    <p>
      <strong>Email</strong>:{" "}
      <Link className="" href={`mailto:${EMAIL}`}>
        {EMAIL}
      </Link>
    </p>
  );
}
