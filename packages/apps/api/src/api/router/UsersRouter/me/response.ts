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
      email: user.email,
      darkTheme: user.darkTheme,
      sources: user.sources,
      categories: user.categories,
      authors: user.authors,

      verifiedAt: user.verifiedAt,
    },
  },
});
