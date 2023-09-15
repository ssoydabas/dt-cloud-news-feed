import { createRouteAction } from "../../utils";
import { params, type SearchNewsApiByKeywordParamsType } from "./params";
import { flow } from "./flow";
import { type SearchNewsApiByKeywordResults } from "./response";

export default createRouteAction<
  SearchNewsApiByKeywordParamsType,
  SearchNewsApiByKeywordResults
>({
  flow,
  params,
});
