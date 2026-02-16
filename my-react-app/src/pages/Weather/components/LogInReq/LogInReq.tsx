import { Link } from "react-router-dom";
import { Button } from "@/components/UI";

export function LogInReq() {
  return (
    <Button>
      Please{" "}
      <Link to={"/log_in"} className="text-blue-600 hover:underline">
        log in
      </Link>{" "}
      to see weather forecast for 6 hours
    </Button>
  );
}
