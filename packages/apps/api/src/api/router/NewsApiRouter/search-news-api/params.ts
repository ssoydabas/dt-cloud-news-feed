import { useRequestParams } from "~api/services/validations";
import type { ISearchNewsApiParams } from "./types";

export type SearchNewsApiParamsType = ISearchNewsApiParams;

export const params = useRequestParams<ISearchNewsApiParams>({
  keyword: {
    in: "body",
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
