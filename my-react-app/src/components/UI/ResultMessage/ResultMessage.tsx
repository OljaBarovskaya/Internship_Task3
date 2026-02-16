import { SuccessIcon, FailIcon } from "@/components/UI/icons";
import { Message } from "@/components/UI";
import * as type from "@/types";
import * as S from "./ResultMessage.styled";

interface ResultMessageProps {
  result: type.LoginResult | type.SignUpResult;
  children?: React.ReactNode;
}

const messageObject = new Map([
  ["logInSuccess", "Login successful! You'll be redirected to Weather page."],
  ["signUpSuccess", "Signup successful!"],
  ["systemError", "Sorry! Something went wrong. Please try again later."],
  ["userError", "There is not such user in the system."],
  ["userExists", "User with such email already exists."],
  ["passwordError", "Ivalid password."],
]);

export function ResultMessage({ result, children }: ResultMessageProps) {
  return (
    <Message className={result ? "opacity-100" : "opacity-0"}>
      {result === "logInSuccess" || result === "signUpSuccess" ? (
        <SuccessIcon />
      ) : (
        <FailIcon />
      )}
      <S.MessageText>
        {result && messageObject.get(result)}
        {children}
      </S.MessageText>
    </Message>
  );
}
