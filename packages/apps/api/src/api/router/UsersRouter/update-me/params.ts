import {
  type AuthenticatedUserParams,
  useAuthenticatedUserParams,
} from "~api/services/auth";
import { useRequestParams } from "~api/services/validations";

import type { UpdateUserBodyParams } from "./types";

export type UpdateUserParams = AuthenticatedUserParams & UpdateUserBodyParams;

export const params = useAuthenticatedUserParams<UpdateUserParams>(
  useRequestParams({
    name: {
      in: "body",
      isString: true,
      trim: true,
      escape: true,
      notEmpty: { errorMessage: "Name is required" },
    },
  })
);
