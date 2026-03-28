import type { SetStateAction } from "react";
import * as S from "./LogOut.styled";
import LogOutImg from "@/assets/img/logout.svg?react";

interface LogOutProps {
  setIsPopUp: React.Dispatch<SetStateAction<boolean>>;
  isPopUp: boolean;
  setIsLoggedIn: React.Dispatch<SetStateAction<boolean>>;
}

export function LogOut({ setIsPopUp, isPopUp, setIsLoggedIn }: LogOutProps) {
  return (
    <S.LogOutBlock>
      <S.LogOutButton
        onClick={() => {
          setIsPopUp(!isPopUp);
        }}
      >
        <LogOutImg />
      </S.LogOutButton>
      <S.LogOutPopUp
        $isPopUp={isPopUp}
        onClick={() => {
          setIsPopUp(false);
          setIsLoggedIn(false);
        }}
      >
        Logout
      </S.LogOutPopUp>
    </S.LogOutBlock>
  );
}
