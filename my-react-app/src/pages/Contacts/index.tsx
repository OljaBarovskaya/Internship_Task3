import * as Layout from "@/layouts";

export default function Contacts() {
  return (
    <Layout.Page>
      <h1 className="inline-block, text-[3.5rem]">Contact Page</h1>
      <p>
        The web-app is created by <strong>Olga Barovskaya</strong>
      </p>
      <p>You can find the contacts below:</p>
      <p>
        Tel number: <a href="tel:+375292883985">+375292883985</a>
      </p>
      <p>
        Email:{" "}
        <a href="mailto:volha.barouskaya@ventionteams.com">
          volha.barouskaya@ventionteams.com
        </a>
      </p>
      <p>
        Github:{" "}
        <a href="https://github.com/OljaBarovskaya" target="_blank">
          Olga Barovskya
        </a>
      </p>
    </Layout.Page>
  );
}
