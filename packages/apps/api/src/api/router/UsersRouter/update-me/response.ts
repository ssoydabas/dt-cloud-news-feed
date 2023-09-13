import { StatusCodes } from "http-status-codes";

import { type IFlowResults } from "~api/router/utils";
import type { UpdateUserResponseBody } from "./types";

export type UpdateUserResults = IFlowResults<
  StatusCodes.OK,
  UpdateUserResponseBody
>;

export const successResponse = (): UpdateUserResults => ({
  status: StatusCodes.OK,
  body: {
    record: undefined,
  },
});
