import { useRequestParams } from "~api/services/validations";
import type { ISearchNewsApiByKeywordParams } from "./types";

export type SearchNewsApiByKeywordParamsType = ISearchNewsApiByKeywordParams;

export const params = useRequestParams<ISearchNewsApiByKeywordParams>({
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
