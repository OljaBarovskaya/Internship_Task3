import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";

export class CreateUserDto {
  @IsString({ message: "Name must be of a string type" })
  @IsNotEmpty({ message: "Name field can't be empty" })
  @MaxLength(50, { message: "Name must not be more than 50 characters" })
  userName: string;

  @IsNotEmpty({ message: "Password field can't be empty" })
  @MaxLength(50, { message: "Password must not be more than 50 characters" })
  password: string;
}
