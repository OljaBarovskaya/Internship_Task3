import { type StyledCompWithChildren } from "../interfaces/interfaces";

export default function BlockBottomRow({
  children,
  addStyle,
}: StyledCompWithChildren) {
  return <div className={`flex ${addStyle}`}>{children}</div>;
}
