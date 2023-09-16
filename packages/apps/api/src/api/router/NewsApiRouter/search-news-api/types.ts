import type {
  IGetManyResponse,
  IBadRequestErrorResponse,
  INotFoundErrorResponse,
  IUnauthorizedErrorResponse,
} from "~api/responses";

import type { INewsResultType } from "~api/types";

export interface ISearchNewsApiParams {
  keyword: string;
  page: number;
}

export type SearchNewsApiSuccessResponseBody =
  IGetManyResponse<INewsResultType>;

export type SearchNewsApiErrorResponseBody =
  | IBadRequestErrorResponse
  | INotFoundErrorResponse
  | IUnauthorizedErrorResponse;

export type SearchNewsApiResponseType =
  | SearchNewsApiSuccessResponseBody
  | SearchNewsApiErrorResponseBody;
