import { Injectable, UnauthorizedException } from "@nestjs/common";
import { LoginDto } from "./dto/login.dto";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "src/user/scemas/user.schema";
import { Model } from "mongoose";
//import { UpdateLoginDto } from "./dto/update-login.dto";

@Injectable()
export class LoginService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}
  // create(loginDto: LoginDto) {
  //   return loginDto;
  // }

  // findAll() {
  //   return `This action returns all login`;
  // }

  async findOne(loginDto: LoginDto) {
    const { userName, password } = loginDto;

    const user = await this.userModel.findOne({ userName }).exec();
    console.log(user);
    if (user && user.password) {
      const isMatch = password === user.password ? true : false;

      if (isMatch) {
        return user;
      }
    }

    throw new UnauthorizedException("Authorization failrd");
  }

  // update(id: number, updateLoginDto: UpdateLoginDto) {
  //   return `This action updates a #${id} login`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} login`;
  // }
}
