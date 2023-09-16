import { StatusCodes } from "http-status-codes";

import { type IFlowResults } from "~api/router/utils";

import type {
  SearchNewsByKeywordResponseType,
  SearchNewsByKeywordSuccessResponseBody,
} from "./types";

export type SearchNewsByKeywordResults = IFlowResults<
  | StatusCodes.OK
  | StatusCodes.BAD_REQUEST
  | StatusCodes.NOT_FOUND
  | StatusCodes.UNAUTHORIZED,
  SearchNewsByKeywordResponseType
>;

export const successResponse = (
  body: SearchNewsByKeywordSuccessResponseBody
): SearchNewsByKeywordResults => {
  return {
    status: StatusCodes.OK,
    body,
  };
};
