import type { IGetOneResponse } from "~api/responses";

export interface IMyUserRecord {
  name: string;
  email: string;
  verifiedAt?: Date;
}

export type IMyUserSuccessResponse = IGetOneResponse<IMyUserRecord>;

export type IMyUserResponseType = IMyUserSuccessResponse;
