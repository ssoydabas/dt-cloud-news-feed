import { useRequestParams } from "~api/services/validations";
import type { ISearchNewsByKeywordParams } from "./types";

export type SearchNewsByKeywordParamsType = ISearchNewsByKeywordParams;

export const params = useRequestParams<ISearchNewsByKeywordParams>({
  keyword: {
    in: "query",
    isString: true,
    trim: true,
    escape: true,
    notEmpty: { errorMessage: "Keyword is required" },
  },
  page: {
    in: "body",
    isNumeric: true,
    trim: true,
    escape: true,
    optional: true,
  },
});
