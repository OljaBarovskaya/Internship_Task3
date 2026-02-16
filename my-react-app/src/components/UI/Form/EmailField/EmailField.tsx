import { Input } from "@/components/UI";
import { useFormContext } from "react-hook-form";

export function EmailField() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Input
      label="Your email"
      type="email"
      placeholder="Enter your email"
      error={errors.email}
      {...register("email", { required: "Email is required" })}
    />
  );
}
