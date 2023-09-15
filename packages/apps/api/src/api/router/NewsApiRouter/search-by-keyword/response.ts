import { StatusCodes } from "http-status-codes";

import { type IFlowResults } from "~api/router/utils";

import type { SearchNewsApiByKeywordResponseType } from "./types";

import type { ICustomizedNewsApiResponse } from "~api/types";

export type SearchNewsApiByKeywordResults = IFlowResults<
  | StatusCodes.OK
  | StatusCodes.BAD_REQUEST
  | StatusCodes.NOT_FOUND
  | StatusCodes.UNAUTHORIZED,
  SearchNewsApiByKeywordResponseType
>;

export const successResponse = ({
  currentPage,
  totalPages,
  totalResults,
  articles,
}: ICustomizedNewsApiResponse): SearchNewsApiByKeywordResults => ({
  status: StatusCodes.OK,
  body: {
    currentPage,
    totalPages,
    totalRecords: totalResults,
    records: articles,
  },
});
