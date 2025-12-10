import { IsNotEmpty } from "class-validator";

export class LoginDto {
  @IsNotEmpty({ message: "Name field can't be empty" })
  userName: string;

  @IsNotEmpty({ message: "Password field can't be empty" })
  password: string;
}
