import * as S from "./Loader.styled";

export function Loader({
  height,
  color = "white",
}: {
  height?: string;
  color?: string;
}) {
  return (
    <S.LoaderContainer className={height}>
      <div className={`loader-bbl text-${color}`} />
    </S.LoaderContainer>
  );
}
