import { FormProvider, useForm } from "react-hook-form";
import { Form, FormField, Button } from "@/components/UI";
import * as type from "@/types";
import { registerUser } from "@/services/AuthorizationAPIService";
import { useState } from "react";
import {
  ConfirmPasswordField,
  EmailField,
  Loader,
  NameField,
  PasswordField,
  ResultMessage,
} from "@/components/UI";
import { useNavigate } from "react-router-dom";
import { delay } from "@/utils";

export function SignUpForm({
  setIsLoggedIn,
}: {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<type.SignUpResult>(null);
  const navigate = useNavigate();

  const methods = useForm<type.SignUpFormData>();
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (userData: type.SignUpFormData) => {
    setLoading(true);
    const signUpResult = await registerUser(userData);
    setResult(signUpResult);
    setLoading(false);
    if (signUpResult === "signUpSuccess") {
      await delay(2000);
      setIsLoggedIn(true);
      navigate("/");
    }
  };

  return (
    <FormProvider {...methods}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <ResultMessage result={result}></ResultMessage>
        <FormField disabled={isSubmitting}>
          <NameField />
          <EmailField />
          <PasswordField validation={true} />
          <ConfirmPasswordField validation={true} />
          <Button className="enabled:hover:bg-[#E0BC00]" type="submit">
            {loading ? <Loader /> : "Create Account"}
          </Button>
        </FormField>
      </Form>
    </FormProvider>
  );
}
