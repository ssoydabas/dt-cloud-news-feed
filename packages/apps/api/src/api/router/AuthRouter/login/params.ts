import { useRequestParams } from "~api/services/validations";
import type { ILoginBodyParams } from "./types";

export type ILoginParams = ILoginBodyParams;

export const params = useRequestParams<ILoginParams>({
  email: {
    in: "body",
    isString: true,
    trim: true,
    escape: true,
    notEmpty: { errorMessage: "Email is required" },
    isEmail: { errorMessage: "Invalid email address" },
  },
  password: {
    in: "body",
    isString: true,
    trim: true,
    escape: true,
    notEmpty: { errorMessage: "Password is required" },
  },
});
