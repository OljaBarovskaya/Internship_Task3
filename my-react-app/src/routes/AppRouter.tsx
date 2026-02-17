import { BrowserRouter } from "react-router-dom";
import { Route, Routes, NavLink } from "react-router-dom";
import Weather from "@/pages/Weather";
import Common from "@/pages/Common";
import Contacts from "@/pages/Contacts";
import LogIn from "@/pages/LogIn";
import PersonImg from "@/assets/img/person.svg?react";
import { useState } from "react";
import * as S from "./AppRouter.styled";
import SignUp from "@/pages/SignUp";
import { LogOut } from "@/components/UI";
import { UserContext } from "@/context";

export default function AppRouter() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isPopUp, setIsPopUp] = useState(false);

  const getNavLinkClassName = ({ isActive }: { isActive: boolean }) =>
    `${
      isActive ? "text-primary font-bold" : "text-black font-medium"
    } px-6  sm:px-9 no-underline`;

  return (
    <UserContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
      }}
    >
      <BrowserRouter>
        <S.Header>
          <S.Nav>
            <NavLink to="/" className={getNavLinkClassName}>
              Weather
            </NavLink>
            <NavLink to="/common" className={getNavLinkClassName}>
              Common
            </NavLink>
            <NavLink to="/contacts" className={getNavLinkClassName}>
              Contacts
            </NavLink>
            {isLoggedIn ? (
              <LogOut
                setIsPopUp={setIsPopUp}
                isPopUp={isPopUp}
                setIsLoggedIn={setIsLoggedIn}
              />
            ) : (
              <NavLink to="/log_in" className={getNavLinkClassName}>
                <PersonImg />
              </NavLink>
            )}
          </S.Nav>
        </S.Header>
        <S.Main>
          <Routes>
            <Route path="/" element={<Weather />} />
            <Route path="/common" element={<Common />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route
              path="/log_in"
              element={<LogIn setIsLoggedIn={setIsLoggedIn} />}
            />
            <Route path="/sign_up" element={<SignUp />} />
          </Routes>
        </S.Main>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
