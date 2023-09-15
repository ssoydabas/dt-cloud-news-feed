import { useRequestParams } from "~api/services/validations";
import type { ISearchNewYorkTimesByKeywordParams } from "./types";

export type SearchNewYorkTimesByKeywordParamsType =
  ISearchNewYorkTimesByKeywordParams;

export const params = useRequestParams<ISearchNewYorkTimesByKeywordParams>({
  keyword: {
    in: "query",
    isString: true,
    trim: true,
    escape: true,
    notEmpty: { errorMessage: "Keyword is required" },
  },
  page: {
    in: "query",
    isNumeric: true,
    trim: true,
    escape: true,
    optional: true,
  },
});
