import { createRouteAction } from "../../utils";
import { params, type SearchNewYorkTimesParamsType } from "./params";
import { flow } from "./flow";
import { type SearchNewYorkTimesResults } from "./response";

export default createRouteAction<
  SearchNewYorkTimesParamsType,
  SearchNewYorkTimesResults
>({
  flow,
  params,
});
