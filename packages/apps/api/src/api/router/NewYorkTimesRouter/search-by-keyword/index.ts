import { createRouteAction } from "../../utils";
import { params, type SearchNewYorkTimesByKeywordParamsType } from "./params";
import { flow } from "./flow";
import { type SearchNewYorkTimesByKeywordResults } from "./response";

export default createRouteAction<
  SearchNewYorkTimesByKeywordParamsType,
  SearchNewYorkTimesByKeywordResults
>({
  flow,
  params,
});
