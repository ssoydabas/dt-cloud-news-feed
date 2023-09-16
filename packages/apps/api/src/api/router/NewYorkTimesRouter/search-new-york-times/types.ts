import type {
  IGetManyResponse,
  IBadRequestErrorResponse,
  INotFoundErrorResponse,
  IUnauthorizedErrorResponse,
} from "~api/responses";

import type { INewsResultType } from "~api/types";

export interface ISearchNewYorkTimesParams {
  keyword: string;
  page: number;
}

export type SearchNewYorkTimesSuccessResponseBody =
  IGetManyResponse<INewsResultType>;

export type SearchNewYorkTimesErrorResponseBody =
  | IBadRequestErrorResponse
  | INotFoundErrorResponse
  | IUnauthorizedErrorResponse;

export type SearchNewYorkTimesResponseType =
  | SearchNewYorkTimesSuccessResponseBody
  | SearchNewYorkTimesErrorResponseBody;
