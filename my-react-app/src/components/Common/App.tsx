import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import WeatherDashboard from "./WeatherDashboard";
import Common from "./Common";
import Contacts from "./Contacts";

export function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Weather</Link>
        <Link to="/common">Common</Link>
        <Link to="/contacts">Contacts</Link>
      </nav>

      <Routes>
        <Route path="/" element={<WeatherDashboard />} />
        <Route path="/common" element={<Common />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  );
}
