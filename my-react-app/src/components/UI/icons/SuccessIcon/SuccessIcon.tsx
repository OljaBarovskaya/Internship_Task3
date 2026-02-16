import Tick from "@/assets/img/tick.svg?react";
import * as S from "./SuccessIcon.styled";

export function SuccessIcon({ dim = "25px" }: { dim?: string }) {
  return (
    <S.GreenCircle style={{ width: dim, height: dim }}>
      <Tick />
    </S.GreenCircle>
  );
}
