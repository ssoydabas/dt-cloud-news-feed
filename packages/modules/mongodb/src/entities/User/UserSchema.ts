import { Schema } from "mongoose";

const UserSchema = new Schema(
  {
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

    darkTheme: {
      type: Boolean,
    },

    sources: {
      type: [String],
      default: [],
    },

    categories: {
      type: [String],
      default: [],
    },

    authors: {
      type: [String],
      default: [],
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
