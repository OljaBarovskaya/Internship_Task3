import { Input } from "@/components/UI";
import { useFormContext } from "react-hook-form";

export function NameField() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Input
      label="Full Name"
      type="name"
      placeholder="Enter your name"
      error={errors.name}
      {...register("name", { required: "Name is required" })}
    />
  );
}
