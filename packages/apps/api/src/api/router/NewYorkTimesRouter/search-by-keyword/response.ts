import { StatusCodes } from "http-status-codes";

import { type IFlowResults } from "~api/router/utils";

import type { SearchNewYorkTimesByKeywordResponseType } from "./types";

import type { INewYorkTimesResponse } from "~api/types";
import { sanitizeRecord } from "~api-root/api/services/news/new-york-times/sanitizeRecords";

export type SearchNewYorkTimesByKeywordResults = IFlowResults<
  | StatusCodes.OK
  | StatusCodes.BAD_REQUEST
  | StatusCodes.NOT_FOUND
  | StatusCodes.UNAUTHORIZED,
  SearchNewYorkTimesByKeywordResponseType
>;

export const successResponse = ({
  response,
}: INewYorkTimesResponse): SearchNewYorkTimesByKeywordResults => {
  const records = response.docs.map(sanitizeRecord);
  const totalRecords = response.meta.hits;
  const totalPages = Math.ceil(totalRecords / 10);
  const currentPage = response.meta.offset / 10;

  return {
    status: StatusCodes.OK,
    body: {
      currentPage,
      totalPages,
      totalRecords,
      records,
    },
  };
};
