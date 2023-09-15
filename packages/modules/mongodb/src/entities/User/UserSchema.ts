import { Schema } from "mongoose";

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    password: {
      type: String,
      required: true,
    },

    profilePictureUrl: {
      type: String,
    },

    verificationToken: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },

    resetPasswordToken: {
      type: String,
      index: true,
    },

    verifiedAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

export default UserSchema;
