import { IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
  @IsString({ message: "Name is not a string" })
  @IsNotEmpty({ message: "Name field can't be empty" })
  userName: string;

  @IsNotEmpty({ message: "Password field can't be empty" })
  password: string;
}
