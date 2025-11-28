import { type PropsWithChildren } from "react";

export default function BlockRow1({ children }: PropsWithChildren) {
  return <div className="flex justify-between">{children}</div>;
}
