import * as Layout from "@/layouts";
import { TelContact } from "./components/TelContact";
import { EmailContact } from "./components/EmailContact";
import { GithubContact } from "./components/GithubContact";

export default function Contacts() {
  return (
    <Layout.Page>
      <Layout.Heading>Contact Page</Layout.Heading>
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
