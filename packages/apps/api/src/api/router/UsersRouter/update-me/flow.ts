import { type RouteFlowType } from "~api/router/utils";

import type { UpdateUserParams } from "./params";
import { type UpdateUserResults, successResponse } from "./response";

export const flow: RouteFlowType<UpdateUserParams, UpdateUserResults> = async ({
  user,
  name,
}) => {
  if (user === undefined || user === null) {
    throw new Error("User not loaded in request");
  }

  if (user.name !== undefined) {
    user.name = name;
  }

  await user.save();

  return successResponse();
};
