import { createRouteAction } from "~api/router/utils";

import { params, type UpdateUserParams } from "./params";
import { flow } from "./flow";
import { type UpdateUserResults } from "./response";

export default createRouteAction<UpdateUserParams, UpdateUserResults>({
  params,
  flow,
});
