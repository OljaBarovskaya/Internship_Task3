export interface SignUpFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface LoginFormData {
  email: string;
  password: string;
}

export type LoginResult =
  | "logInSuccess"
  | "systemError"
  | "userError"
  | "passwordError"
  | null;

export type SignUpResult =
  | "signUpSuccess"
  | "systemError"
  | "userExists"
  | null;
