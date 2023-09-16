import type {
  IGetManyResponse,
  IBadRequestErrorResponse,
  INotFoundErrorResponse,
  IUnauthorizedErrorResponse,
} from "~api/responses";

import type { INewsResultType } from "~api/types";

export interface ISearchNewsByKeywordParams {
  keyword: string;
  page: number;
}

export type SearchNewsByKeywordSuccessResponseBody =
  IGetManyResponse<INewsResultType>;

export type SearchNewsByKeywordErrorResponseBody =
  | IBadRequestErrorResponse
  | INotFoundErrorResponse
  | IUnauthorizedErrorResponse;

export type SearchNewsByKeywordResponseType =
  | SearchNewsByKeywordSuccessResponseBody
  | SearchNewsByKeywordErrorResponseBody;
