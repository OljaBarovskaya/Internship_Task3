import { BrowserRouter } from "react-router-dom";
import { Route, Routes, NavLink } from "react-router-dom";
import WeatherDashboard from "../components/WeatherDashboard";
import Common from "../components/commonPage/Common";
import Contacts from "../components/contactsPage/Contacts";

interface MyComponentProps {
  isActive: boolean;
}

const navLinkStyle = ({ isActive }: MyComponentProps) => ({
  color: isActive ? "#007bff" : "#333",
  fontWeight: isActive ? "bold" : "normal",
});

export default function AppRouter() {
  return (
    <BrowserRouter>
      <header>
        <nav>
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
