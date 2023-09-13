import type { IUpdateOneResponse } from "~api/responses";

export interface UpdateUserBodyParams {
  darkTheme?: boolean;
  sources?: string[];
  categories?: string[];
  authors?: string[];
}

export type UpdateUserSuccessResponseBody = IUpdateOneResponse<undefined>;

export type UpdateUserResponseBody = UpdateUserSuccessResponseBody;
