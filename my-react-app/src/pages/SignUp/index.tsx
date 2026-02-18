import { Heading } from "@/components/UI";
import * as Layout from "@/components/layouts";
import { SignUpForm } from "./components";
import { TextWithLink } from "@/components/UI";

export default function SignUp({
  setIsLoggedIn,
}: {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <Layout.FormPage>
      <Heading>Sign Up</Heading>
      <SignUpForm setIsLoggedIn={setIsLoggedIn} />
      <TextWithLink
        text={"Already have an ccount?"}
        path={"/log_in"}
        linkText={"Log in"}
      />
    </Layout.FormPage>
  );
}
