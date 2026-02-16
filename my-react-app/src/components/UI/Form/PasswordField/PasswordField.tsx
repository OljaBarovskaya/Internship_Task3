import { Input } from "@/components/UI";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import EyeImg from "@/assets/img/eye.svg?react";

export function PasswordField({ validation }: { validation?: boolean }) {
  const [isVisible, setIsVisible] = useState(false);

  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Input
      label="Password"
      type={isVisible ? "text" : "password"}
      placeholder="Enter password"
      icon={
        <span
          onClick={() => setIsVisible(!isVisible)}
          className="cursor-pointer"
        >
          <EyeImg />
        </span>
      }
      error={errors.password}
      {...register("password", {
        required: "Password is required",
        deps: ["confirmPassword"],
        ...(validation && {
          minLength: { value: 6, message: "Min 6 characters" },
        }),
      })}
    />
  );
}
