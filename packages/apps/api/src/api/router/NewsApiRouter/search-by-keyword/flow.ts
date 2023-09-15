import { type RouteFlowType } from "../../utils";
import { type SearchNewsApiByKeywordParamsType } from "./params";
import {
  type SearchNewsApiByKeywordResults,
  successResponse,
} from "./response";

import searchContent from "~api/services/news/news-api/searchConent";

export const flow: RouteFlowType<
  SearchNewsApiByKeywordParamsType,
  SearchNewsApiByKeywordResults
> = async ({ keyword, page }) => {
  let pageControl: number;
  if (page) {
    pageControl = page;
  } else {
    pageControl = 1;
  }

  const response = await searchContent(keyword, pageControl);
  const totalPages = Math.floor(response.totalResults / 10);

  const customizedResponse = {
    ...response,
    currentPage: pageControl,
    totalPages,
  };

  return successResponse(customizedResponse);
};
