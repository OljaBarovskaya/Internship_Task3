import { Heading } from "@/components/UI";
import * as Layout from "@/components/layouts";
import { SignUpForm } from "./components";
import { TextWithLink } from "@/components/UI";

export default function SignUp() {
  return (
    <Layout.FormPage>
      <Heading>Sign Up</Heading>
      <SignUpForm />
      <TextWithLink
        text={"Already have an ccount?"}
        path={"/log_in"}
        linkText={"Log in"}
      />
    </Layout.FormPage>
  );
}
