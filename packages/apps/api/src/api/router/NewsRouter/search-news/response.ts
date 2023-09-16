import { StatusCodes } from "http-status-codes";

import { type IFlowResults } from "~api/router/utils";

import type {
  SearchNewsResponseType,
  SearchNewsSuccessResponseBody,
} from "./types";

export type SearchNewsResults = IFlowResults<
  | StatusCodes.OK
  | StatusCodes.BAD_REQUEST
  | StatusCodes.NOT_FOUND
  | StatusCodes.UNAUTHORIZED,
  SearchNewsResponseType
>;

export const successResponse = (
  body: SearchNewsSuccessResponseBody
): SearchNewsResults => {
  return {
    status: StatusCodes.OK,
    body,
  };
};
