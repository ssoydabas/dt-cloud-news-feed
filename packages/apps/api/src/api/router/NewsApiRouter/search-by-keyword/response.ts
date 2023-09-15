import { StatusCodes } from "http-status-codes";

import { type IFlowResults } from "~api/router/utils";

import type { SearchNewsApiByKeywordResponseType } from "./types";

import type { ICustomizedNewsApiResponse } from "~api/types";

import { sanitizeRecord } from "~api-root/api/services/news/news-api/sanitizeRecords";

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
}: ICustomizedNewsApiResponse): SearchNewsApiByKeywordResults => {
  const records = articles.map(sanitizeRecord);

  return {
    status: StatusCodes.OK,
    body: {
      currentPage,
      totalPages,
      totalRecords: totalResults,
      records,
    },
  };
};
