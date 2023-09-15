import { UserModel } from "@dt-cloud/mongodb";

import mailing from "~api/services/mailing";

import { type RouteFlowType } from "../../utils";
import {
  createVerificationToken,
  hashPassword,
  createAccessToken,
} from "~api/services/auth/utils";
import { type IRegisterParams } from "./params";
import {
  successResponse,
  emailAlreadyExistsResponse,
  type RegisterResults,
} from "./response";

export const flow: RouteFlowType<IRegisterParams, RegisterResults> = async ({
  name,
  email,
  password,
}) => {
  const doesUserExist = await UserModel.exists({ email });

  if (doesUserExist) {
    return emailAlreadyExistsResponse(email);
  }

  const user = await UserModel.create({
    name,
    email,
    password: await hashPassword(password),
    verificationToken: createVerificationToken(),
  });

  await mailing.sendEmailVerification({
    email,
    verificationToken: user.verificationToken,
  });

  const accessToken = createAccessToken(user._id.toString());

  return successResponse(accessToken);
};
