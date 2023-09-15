import { type RouteFlowType } from "../../utils";
import { type SearchNewYorkTimesByKeywordParamsType } from "./params";
import {
  type SearchNewYorkTimesByKeywordResults,
  successResponse,
} from "./response";

import searchContent from "~api-root/api/services/news/new-york-times/searchContent";

export const flow: RouteFlowType<
  SearchNewYorkTimesByKeywordParamsType,
  SearchNewYorkTimesByKeywordResults
> = async ({ keyword, page }) => {
  const response = await searchContent(keyword, page);

  return successResponse(response);
};
