import { type RouteFlowType } from "../../utils";
import { type SearchNewsParamsType } from "./params";
import { type SearchNewsResults, successResponse } from "./response";

import searchContent from "~api-root/api/services/news/combined/searchContent";

export const flow: RouteFlowType<
  SearchNewsParamsType,
  SearchNewsResults
> = async ({ keyword, page }) => {
  let pageControl: number;
  if (!page || page === 0 || page < 0) {
    pageControl = 1;
  } else {
    pageControl = page;
  }

  const response = await searchContent({ keyword, page: pageControl });

  return successResponse(response);
};
