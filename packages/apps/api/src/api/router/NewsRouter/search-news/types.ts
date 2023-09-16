import type {
  IGetManyResponse,
  IBadRequestErrorResponse,
  INotFoundErrorResponse,
  IUnauthorizedErrorResponse,
} from "~api/responses";

import type { INewsResultType } from "~api/types";

export interface ISearchNewsParams {
  page: number;
  keyword: string;
}

export type SearchNewsSuccessResponseBody = IGetManyResponse<INewsResultType>;

export type SearchNewsErrorResponseBody =
  | IBadRequestErrorResponse
  | INotFoundErrorResponse
  | IUnauthorizedErrorResponse;

export type SearchNewsResponseType =
  | SearchNewsSuccessResponseBody
  | SearchNewsErrorResponseBody;
