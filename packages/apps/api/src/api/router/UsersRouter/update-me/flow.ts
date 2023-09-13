import { type RouteFlowType } from "~api/router/utils";

import type { UpdateUserParams } from "./params";
import { type UpdateUserResults, successResponse } from "./response";

export const flow: RouteFlowType<UpdateUserParams, UpdateUserResults> = async ({
  user,
  darkTheme,
  sources,
  categories,
  authors,
}) => {
  if (user === undefined || user === null) {
    throw new Error("User not loaded in request");
  }

  if (darkTheme !== undefined) {
    user.darkTheme = darkTheme;
  }

  if (sources !== undefined) {
    user.sources = sources;
  }

  if (categories !== undefined) {
    user.categories = categories;
  }

  if (authors !== undefined) {
    user.authors = authors;
  }

  await user.save();

  return successResponse();
};
