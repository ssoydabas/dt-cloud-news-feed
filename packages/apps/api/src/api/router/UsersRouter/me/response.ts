import { StatusCodes } from "http-status-codes";
import type { IUser } from "@dt-cloud/mongodb";

import { type IFlowResults } from "~api/router/utils";

import type { IMyUserResponseType } from "./types";

export type IMyUserFlowResults = IFlowResults<
  StatusCodes.OK,
  IMyUserResponseType
>;

export const successResponse = (user: IUser): IMyUserFlowResults => ({
  status: StatusCodes.OK,
  body: {
    record: {
      name: user.name,
      email: user.email,

      verifiedAt: user.verifiedAt,
    },
  },
});
