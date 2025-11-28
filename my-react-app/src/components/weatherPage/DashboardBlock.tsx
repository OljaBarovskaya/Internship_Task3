import { type StyledCompWithChildren } from "../../interfaces/interfaces";

export default function DashboardBlock({
  children,
  addStyle,
}: StyledCompWithChildren) {
  return (
    <div
      className={`dashboard-block p-[24px] flex flex-col gap-y-[8px] bg-[#0088ff] rounded-[24px] ${addStyle}`}
    >
      {children}
    </div>
  );
}
