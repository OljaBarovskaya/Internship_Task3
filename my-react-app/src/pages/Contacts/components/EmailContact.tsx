import { EMAIL } from "@/constants/constants";

export function EmailContact() {
  return (
    <p>
      Email: <a href={`mailto:${EMAIL}`}>volha.barouskaya@ventionteams.com</a>
    </p>
  );
}
