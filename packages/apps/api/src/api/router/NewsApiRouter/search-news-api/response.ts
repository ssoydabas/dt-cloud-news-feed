import { StatusCodes } from "http-status-codes";

import { type IFlowResults } from "~api/router/utils";

import type { SearchNewsApiResponseType } from "./types";

import type { ICustomizedNewsApiResponse } from "~api/types";

import { sanitizeRecord } from "~api-root/api/services/news/news-api/sanitizeRecords";

export type SearchNewsApiResults = IFlowResults<
  | StatusCodes.OK
  | StatusCodes.BAD_REQUEST
  | StatusCodes.NOT_FOUND
  | StatusCodes.UNAUTHORIZED,
  SearchNewsApiResponseType
>;

export const successResponse = ({
  currentPage,
  totalPages,
  totalResults,
  articles,
}: ICustomizedNewsApiResponse): SearchNewsApiResults => {
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

export const excessPageNumberError = (): SearchNewsApiResults => ({
  status: StatusCodes.BAD_REQUEST,
  body: {
    message:
      "You can't request the pages that are greater than 5 in development mode and developer api",
  },
});
