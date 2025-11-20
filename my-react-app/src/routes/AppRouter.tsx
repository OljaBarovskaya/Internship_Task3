import { BrowserRouter } from "react-router-dom";
import { Route, Routes, Link } from "react-router-dom";
import WeatherDashboard from "../components/WeatherDashboard";
import Common from "../components/Common";
import Contacts from "../components/Contacts";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <Link to="/">Weather</Link>
          <Link to="/common">Common</Link>
          <Link to="/contacts">Contacts</Link>
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
