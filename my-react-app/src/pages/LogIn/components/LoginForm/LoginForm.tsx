import { FormProvider, useForm } from "react-hook-form";
import { Form, FormField, Button } from "@/components/UI";
import * as type from "@/types";
import { checkUser } from "@/services/AuthorizationAPIService";
import { useState } from "react";
import {
  EmailField,
  Loader,
  PasswordField,
  ResultMessage,
} from "@/components/UI";
import { delay } from "@/utils";
import { useNavigate } from "react-router-dom";

export function LoginForm({
  setIsLoggedIn,
}: {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const navigate = useNavigate();
  const methods = useForm<type.LoginFormData>();
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<type.LoginResult>(null);

  const onSubmit = async (userData: type.LoginFormData) => {
    setLoading(true);
    const loginResult = await checkUser(userData);
    setResult(loginResult);
    setLoading(false);
    if (loginResult === "logInSuccess") {
      await delay(2000);
      setIsLoggedIn(true);
      navigate("/");
    }
  };

  return (
    <FormProvider {...methods}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <ResultMessage result={result} />
        <FormField disabled={isSubmitting}>
          <EmailField />
          <PasswordField />
          <Button className="enabled:hover:bg-[#E0BC00]" type="submit">
            {loading ? <Loader /> : "Log In"}
          </Button>
        </FormField>
      </Form>
    </FormProvider>
  );
}
