import { EMAIL } from "@/constants/constants";

export function EmailContact() {
  return (
    <p>
      <strong>Email</strong>:{" "}
      <a href={`mailto:${EMAIL}`}>volha.barouskaya@ventionteams.com</a>
    </p>
  );
}
