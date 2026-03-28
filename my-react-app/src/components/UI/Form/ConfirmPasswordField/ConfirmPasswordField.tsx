import { Input } from "@/components/UI";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import EyeImg from "@/assets/img/eye.svg?react";

export function ConfirmPasswordField({ validation }: { validation?: boolean }) {
  const [isVisible, setIsVisible] = useState(false);

  const {
    register,
    getValues,
    formState: { errors },
  } = useFormContext();

  return (
    <Input
      label="Confirm Password"
      type={isVisible ? "text" : "password"}
      placeholder="Repeat your password"
      error={errors.confirmPassword}
      icon={
        <span
          onClick={() => setIsVisible(!isVisible)}
          className="cursor-pointer"
        >
          <EyeImg />
        </span>
      }
      {...register("confirmPassword", {
        required: "Please confirm your password",
        validate: (value) =>
          value === getValues("password") || "Passwords do not match",
        ...(validation && {
          minLength: { value: 6, message: "Min 6 characters" },
        }),
      })}
    />
  );
}
