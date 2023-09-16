import { type RouteFlowType } from "../../utils";
import { type SearchNewYorkTimesParamsType } from "./params";
import { type SearchNewYorkTimesResults, successResponse } from "./response";

import searchContent from "~api-root/api/services/news/new-york-times/searchContent";

export const flow: RouteFlowType<
  SearchNewYorkTimesParamsType,
  SearchNewYorkTimesResults
> = async ({ keyword, page }) => {
  const response = await searchContent({ keyword, page });

  return successResponse(response);
};
