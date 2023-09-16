import { createRouteAction } from "../../utils";
import { params, type SearchNewsByKeywordParamsType } from "./params";
import { flow } from "./flow";
import { type SearchNewsByKeywordResults } from "./response";

export default createRouteAction<
  SearchNewsByKeywordParamsType,
  SearchNewsByKeywordResults
>({
  flow,
  params,
});
