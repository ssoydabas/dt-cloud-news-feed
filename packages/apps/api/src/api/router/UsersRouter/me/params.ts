import {
  type AuthenticatedUserParams,
  useAuthenticatedUserParams,
} from "~api/services/auth";

import { useRequestParams } from "~api/services/validations";

export type IMyUserParams = AuthenticatedUserParams;

export const params = useAuthenticatedUserParams<IMyUserParams>(
  useRequestParams({})
);
