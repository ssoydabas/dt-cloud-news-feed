import type {
  IGetManyResponse,
  IBadRequestErrorResponse,
  INotFoundErrorResponse,
  IUnauthorizedErrorResponse,
} from "~api/responses";

import type { INewYorkTimesResponseResults } from "~api/types";

export interface ISearchNewYorkTimesByKeywordParams {
  keyword: string;
  page: number;
}

export type SearchNewYorkTimesByKeywordSuccessResponseBody =
  IGetManyResponse<INewYorkTimesResponseResults>;

export type SearchNewYorkTimesByKeywordErrorResponseBody =
  | IBadRequestErrorResponse
  | INotFoundErrorResponse
  | IUnauthorizedErrorResponse;

export type SearchNewYorkTimesByKeywordResponseType =
  | SearchNewYorkTimesByKeywordSuccessResponseBody
  | SearchNewYorkTimesByKeywordErrorResponseBody;
