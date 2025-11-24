import Search from "./Search";
import Dashboard from "./Dashboard";

export default function WeatherDashboard() {
  return (
    <div className="flex flex-col w-full h-full">
      <Search />
      <Dashboard />
    </div>
  );
}
