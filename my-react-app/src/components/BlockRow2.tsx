import { type PropsWithChildren } from "react";

export default function BlockRow2({ children }: PropsWithChildren) {
  return <div className="flex justify-between gap-x-[16%]">{children}</div>;
}
