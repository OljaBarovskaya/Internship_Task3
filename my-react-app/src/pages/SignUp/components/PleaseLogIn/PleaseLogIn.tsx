import { Link } from "react-router-dom";

export function PleaseLogIn() {
  return (
    <span>
      Please{" "}
      <Link to={"/log_in"} className="text-blue-600 hover:underline font-bold">
        log in
      </Link>{" "}
      to proceed.
    </span>
  );
}
