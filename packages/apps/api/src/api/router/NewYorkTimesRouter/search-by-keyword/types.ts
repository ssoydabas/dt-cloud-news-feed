import type {
  IGetManyResponse,
  IBadRequestErrorResponse,
  INotFoundErrorResponse,
  IUnauthorizedErrorResponse,
} from "~api/responses";

import type { INewsResultType } from "~api/types";

export interface ISearchNewYorkTimesByKeywordParams {
  keyword: string;
  page: number;
}

export type SearchNewYorkTimesByKeywordSuccessResponseBody =
  IGetManyResponse<INewsResultType>;

export type SearchNewYorkTimesByKeywordErrorResponseBody =
  | IBadRequestErrorResponse
  | INotFoundErrorResponse
  | IUnauthorizedErrorResponse;

export type SearchNewYorkTimesByKeywordResponseType =
  | SearchNewYorkTimesByKeywordSuccessResponseBody
  | SearchNewYorkTimesByKeywordErrorResponseBody;
