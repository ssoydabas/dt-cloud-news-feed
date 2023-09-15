import type {
  IGetManyResponse,
  IBadRequestErrorResponse,
  INotFoundErrorResponse,
  IUnauthorizedErrorResponse,
} from "~api/responses";

import type { INewsApiResponseResults } from "~api/types";

export interface ISearchNewsApiByKeywordParams {
  keyword: string;
  page: number;
}

export type SearchNewsApiByKeywordSuccessResponseBody =
  IGetManyResponse<INewsApiResponseResults>;

export type SearchNewsApiByKeywordErrorResponseBody =
  | IBadRequestErrorResponse
  | INotFoundErrorResponse
  | IUnauthorizedErrorResponse;

export type SearchNewsApiByKeywordResponseType =
  | SearchNewsApiByKeywordSuccessResponseBody
  | SearchNewsApiByKeywordErrorResponseBody;
