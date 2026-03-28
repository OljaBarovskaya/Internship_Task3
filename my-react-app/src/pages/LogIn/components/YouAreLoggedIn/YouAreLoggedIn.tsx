import * as Layout from "@/components/layouts";
import { Message } from "@/components/UI";
import { SuccessIcon } from "@/components/UI/icons";

export function YouAreLoggedIn() {
  return (
    <Layout.Page>
      <Message>
        <SuccessIcon />
        <p>You are already logged in</p>
      </Message>
    </Layout.Page>
  );
}
