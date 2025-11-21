interface DashboardBlockProps {
  children?: React.ReactNode;
  addStyle?: string;
}

export default function DashboardBlock({
  children,
  addStyle,
}: DashboardBlockProps) {
  return (
    <div
      className={`dashboard-block p-[24px] flex flex-col gap-x-8 bg-[#0088ff] rounded-[24px] ${addStyle}`}
    >
      {children}
    </div>
  );
}
