import Cross from "@/assets/img/cross.svg?react";
import * as S from "./FailIcon.styled";

export function FailIcon({ dim = "25px" }: { dim?: string }) {
  return (
    <S.RedCircle style={{ width: dim, height: dim }}>
      <Cross />
    </S.RedCircle>
  );
}
