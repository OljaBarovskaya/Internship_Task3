import { Heading } from "@/components/UI";
import { TextWithLink } from "@/components/UI";
import { LoginForm } from "./components";
import * as Layout from "@/components/layouts";
import { useUserContext } from "@/context";
import { YouAreLoggedIn } from "./components/YouAreLoggedIn";

export default function LogIn({
  setIsLoggedIn,
}: {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { isLoggedIn } = useUserContext();

  if (isLoggedIn) {
    return <YouAreLoggedIn />;
  }

  return (
    <Layout.FormPage>
      <Heading>Log in</Heading>
      <LoginForm setIsLoggedIn={setIsLoggedIn} />
      <TextWithLink
        text="Don't have an account?"
        path="/sign_up"
        linkText="Sign up"
      />
    </Layout.FormPage>
  );
}
