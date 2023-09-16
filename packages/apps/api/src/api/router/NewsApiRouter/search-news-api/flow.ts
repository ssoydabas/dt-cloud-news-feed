import { type RouteFlowType } from "../../utils";
import { type SearchNewsApiParamsType } from "./params";
import {
  type SearchNewsApiResults,
  successResponse,
  excessPageNumberError,
} from "./response";
import { isDevelopment } from "~api-root/config";

import searchContent from "~api-root/api/services/news/news-api/searchContent";

export const flow: RouteFlowType<
  SearchNewsApiParamsType,
  SearchNewsApiResults
> = async ({ keyword, page }) => {
  if (isDevelopment && page > 5) {
    return excessPageNumberError();
  }

  const response = await searchContent({
    keyword,
    page: page ?? 1,
  });
  const totalPages = Math.floor(response.totalResults / 10);

  const customizedResponse = {
    ...response,
    currentPage: page ?? 1,
    totalPages,
  };

  return successResponse(customizedResponse);
};
