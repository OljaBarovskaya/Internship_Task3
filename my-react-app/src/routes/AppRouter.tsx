import { BrowserRouter } from "react-router-dom";
import { Route, Routes, NavLink } from "react-router-dom";
import Weather from "@/pages/Weather";
import Common from "@/pages/Common";
import Contacts from "@/pages/Contacts";
import * as Layout from "@/layouts";

export default function AppRouter() {
  const getNavLinkClassName = ({ isActive }: { isActive: Boolean }) =>
    `${
      isActive ? "text-primary font-bold" : "text-black font-medium"
    } px-6  sm:px-9 no-underline`;

  return (
    <BrowserRouter basename="/Internship_Task3">
      <Layout.Header>
        <nav className="text-size-large">
          <NavLink to="/" className={getNavLinkClassName}>
            Weather
          </NavLink>
          <NavLink to="/common" className={getNavLinkClassName}>
            Common
          </NavLink>
          <NavLink to="/contacts" className={getNavLinkClassName}>
            Contacts
          </NavLink>
        </nav>
      </Layout.Header>
      <Layout.Main>
        <Routes>
          <Route path="/" element={<Weather />} />
          <Route path="/common" element={<Common />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </Layout.Main>
    </BrowserRouter>
  );
}
