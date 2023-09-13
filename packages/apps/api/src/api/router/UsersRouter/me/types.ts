import type { IGetOneResponse } from "~api/responses";

export interface IMyUserRecord {
  email: string;

  darkTheme?: boolean;
  sources?: string[];
  categories?: string[];
  authors?: string[];

  verifiedAt?: Date;
}

export type IMyUserSuccessResponse = IGetOneResponse<IMyUserRecord>;

export type IMyUserResponseType = IMyUserSuccessResponse;
