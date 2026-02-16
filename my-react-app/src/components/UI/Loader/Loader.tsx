import * as S from "./Loader.styled";

export function Loader({ height }: { height?: string }) {
  return (
    <S.LoaderContainer className={height}>
      <div className="loader-bbl" />
    </S.LoaderContainer>
  );
}
