import React, { forwardRef, type InputHTMLAttributes } from "react";
import * as S from "./Input.styled";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: { message?: string };
  icon?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, icon, id, ...props }, ref) => {
    return (
      <S.FormField>
        {label && <S.FormLabel htmlFor={id}>{label}</S.FormLabel>}

        <div className="relative">
          <S.FormInput {...props} id={id} ref={ref} $isError={!!error} />
          {icon && <S.IconWrapper>{icon}</S.IconWrapper>}
        </div>

        {error?.message ? (
          <S.ErrorMessage>{error.message}</S.ErrorMessage>
        ) : (
          <S.EmptySpan />
        )}
      </S.FormField>
    );
  },
);

Input.displayName = "Input";
