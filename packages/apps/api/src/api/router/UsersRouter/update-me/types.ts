import type { IUpdateOneResponse } from "~api/responses";

export interface UpdateUserBodyParams {
  name: string;
}

export type UpdateUserSuccessResponseBody = IUpdateOneResponse<undefined>;

export type UpdateUserResponseBody = UpdateUserSuccessResponseBody;
