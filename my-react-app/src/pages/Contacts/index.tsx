import * as Layout from "@/components/layouts";
import { Heading } from "@/components/UI";
import { TelContact } from "./components/TelContact";
import { EmailContact } from "./components/EmailContact";
import { GithubContact } from "./components/GithubContact";

export default function Contacts() {
  return (
    <Layout.Page>
      <Heading>Contact Page</Heading>
      <p>
        The web-app is created by <strong>Olga Barovskaya</strong>
      </p>
      <p>You can find the contacts below:</p>
      <TelContact />
      <EmailContact />
      <GithubContact />
    </Layout.Page>
  );
}
