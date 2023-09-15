import type { Model } from "mongoose";
import type { Document } from "~types/mongoose";

export interface IUser {
  name: string;

  email: string;
  password: string;

  profilePictureUrl: string;

  verificationToken: string;
  resetPasswordToken?: string;

  createdAt: Date;
  updatedAt: Date;
  verifiedAt?: Date;
}

export type IUserDocument = Document<IUser>;

export type IUserModel = Model<IUserDocument>;
