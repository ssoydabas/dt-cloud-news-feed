import type {
  IGetManyResponse,
  IBadRequestErrorResponse,
  INotFoundErrorResponse,
  IUnauthorizedErrorResponse,
} from "~api/responses";

import type { INewsResultType } from "~api/types";

export interface ISearchNewsApiByKeywordParams {
  keyword: string;
  page: number;
}

export type SearchNewsApiByKeywordSuccessResponseBody =
  IGetManyResponse<INewsResultType>;

export type SearchNewsApiByKeywordErrorResponseBody =
  | IBadRequestErrorResponse
  | INotFoundErrorResponse
  | IUnauthorizedErrorResponse;

export type SearchNewsApiByKeywordResponseType =
  | SearchNewsApiByKeywordSuccessResponseBody
  | SearchNewsApiByKeywordErrorResponseBody;
