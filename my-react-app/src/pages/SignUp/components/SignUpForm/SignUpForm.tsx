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
import { PleaseLogIn } from "@/pages/SignUp/components";

export function SignUpForm() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<type.SignUpResult>(null);

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
  };

  return (
    <FormProvider {...methods}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <ResultMessage result={result}>
          {result === "signUpSuccess" && <PleaseLogIn />}
        </ResultMessage>
        <FormField disabled={isSubmitting}>
          <NameField />
          <EmailField />
          <PasswordField validation={true} />
          <ConfirmPasswordField validation={true} />
          <Button type="submit">
            {loading ? <Loader /> : "Create Account"}
          </Button>
        </FormField>
      </Form>
    </FormProvider>
  );
}
