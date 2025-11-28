import { BrowserRouter } from "react-router-dom";
import { Route, Routes, NavLink } from "react-router-dom";
import WeatherDashboard from "../components/weatherPage/WeatherDashboard";
import Common from "../components/commonPage/Common";
import Contacts from "../components/contactsPage/Contacts";
import type { MyComponentProps } from "../interfaces/interfaces";

const navLinkStyle = ({ isActive }: MyComponentProps) => ({
  color: isActive ? "#007bff" : "#333",
  fontWeight: isActive ? "bold" : "normal",
});

export default function AppRouter() {
  return (
    <BrowserRouter basename="/Internship_Task3">
      <header className="flex justify-end w-full py-[20px]">
        <nav className="text-[1.5rem]">
          <NavLink to="/" style={navLinkStyle as React.CSSProperties}>
            Weather
          </NavLink>
          <NavLink to="/common" style={navLinkStyle as React.CSSProperties}>
            Common
          </NavLink>
          <NavLink to="/contacts" style={navLinkStyle as React.CSSProperties}>
            Contacts
          </NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<WeatherDashboard />} />
          <Route path="/common" element={<Common />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
