import AppRouter from "./routes/AppRouter";
import Wrapper from "./containers/Wrapper";

export function App() {
  return (
    <Wrapper>
      <AppRouter />
    </Wrapper>
  );
}
