import { useRequestParams } from "~api/services/validations";
import type { ISearchNewsApiParams } from "./types";

export type SearchNewsApiParamsType = ISearchNewsApiParams;

export const params = useRequestParams<ISearchNewsApiParams>({
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
    notEmpty: { errorMessage: "Page is required" },
    custom: {
      options: (value) => {
        if (value <= 0) {
          throw new Error("Page should be greater than 0");
        }
        return true;
      },
    },
  },
});
