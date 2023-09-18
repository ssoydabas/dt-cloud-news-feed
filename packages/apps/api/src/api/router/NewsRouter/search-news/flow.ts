import { type RouteFlowType } from "../../utils";
import { type SearchNewsParamsType } from "./params";
import { type SearchNewsResults, successResponse } from "./response";

import searchContent from "~api-root/api/services/news/combined/searchContent";

export const flow: RouteFlowType<
  SearchNewsParamsType,
  SearchNewsResults
> = async ({ keyword, page }) => {
  const response = await searchContent({ keyword, page });

  return successResponse(response);
};
