import AppRouter from "./routes/AppRouter";
import * as Layout from "@/layouts";

export function App() {
  return (
    <Layout.Wrapper>
      <AppRouter />
    </Layout.Wrapper>
  );
}
