import AppRouter from "./routes/AppRouter";
import * as S from "./App.styled";

export function App() {
  return (
    <S.Wrapper>
      <AppRouter />
    </S.Wrapper>
  );
}
