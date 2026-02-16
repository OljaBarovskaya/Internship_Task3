import * as type from "@/types";

export function ErrorMessage({ reqStatus }: { reqStatus: type.ReqStatusType }) {
  return reqStatus === "error" ? (
    <span className="text-[#FF0000]">
      Please check whether the city name is correct
    </span>
  ) : (
    <span className="h-[11.5px]"> </span>
  );
}
