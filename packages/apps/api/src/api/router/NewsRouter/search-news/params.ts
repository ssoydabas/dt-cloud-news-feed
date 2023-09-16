import { useRequestParams } from "~api/services/validations";
import type { ISearchNewsParams } from "./types";

export type SearchNewsParamsType = ISearchNewsParams;

export const params = useRequestParams<ISearchNewsParams>({
  keyword: {
    in: "query",
    isString: true,
    trim: true,
    escape: true,
    optional: true,
  },
  page: {
    in: "body",
    isNumeric: true,
    trim: true,
    escape: true,
    optional: true,
  },
});
