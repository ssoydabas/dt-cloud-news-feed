import { createRouteAction } from "../../utils";
import { params, type SearchNewsApiParamsType } from "./params";
import { flow } from "./flow";
import { type SearchNewsApiResults } from "./response";

export default createRouteAction<SearchNewsApiParamsType, SearchNewsApiResults>(
  {
    flow,
    params,
  }
);
