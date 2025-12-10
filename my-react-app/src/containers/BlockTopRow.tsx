import { type PropsWithChildren } from "react";

export default function BlockTopRow({ children }: PropsWithChildren) {
  return <div className="flex justify-between">{children}</div>;
}
