import { type StyledCompWithChildren } from "../interfaces/interfaces";

export default function BlockRow2({
  children,
  addStyle,
}: StyledCompWithChildren) {
  return <div className={`flex ${addStyle}`}>{children}</div>;
}
