import { useRequestParams } from "~api/services/validations";
import type { ISearchNewYorkTimesParams } from "./types";

export type SearchNewYorkTimesParamsType = ISearchNewYorkTimesParams;

export const params = useRequestParams<ISearchNewYorkTimesParams>({
  keyword: {
    in: "body",
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
