import * as Laouyt from "@/components/layouts";
import * as S from "./FormPage.styled";

export function FormPage({ children }: { children: React.ReactNode }) {
  return (
    <Laouyt.Page className=" bg-gray-100 items-center justify-center grow-2 p-space-large">
      <S.FormWindow>{children}</S.FormWindow>
    </Laouyt.Page>
  );
}
