import { createRouteAction } from "../../utils";
import { params, type SearchNewsParamsType } from "./params";
import { flow } from "./flow";
import { type SearchNewsResults } from "./response";

export default createRouteAction<SearchNewsParamsType, SearchNewsResults>({
  flow,
  params,
});
