import { type StyledCompWithChildren } from "../types/GeneralTypes";

export default function BlockBottomRow({
  children,
  addStyle,
}: StyledCompWithChildren) {
  return <div className={`flex ${addStyle}`}>{children}</div>;
}
