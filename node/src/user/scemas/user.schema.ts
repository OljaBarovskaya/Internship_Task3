import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({
    required: [true, "User name can not be empty"],
    unique: true,
    trim: true,
  })
  userName: string;

  @Prop({ required: [true, "Password can not be empty"] })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
