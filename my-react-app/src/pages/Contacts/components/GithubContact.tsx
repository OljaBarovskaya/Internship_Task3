import { GITHUB } from "@/constants";
import { Link } from "@/components/UI";

export function GithubContact() {
  return (
    <p>
      <strong>Github</strong>:{" "}
      <Link href={GITHUB} target="_blank">
        {GITHUB}
      </Link>
    </p>
  );
}
