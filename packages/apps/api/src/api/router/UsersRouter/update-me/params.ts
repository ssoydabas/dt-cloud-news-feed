import {
  type AuthenticatedUserParams,
  useAuthenticatedUserParams,
} from "~api/services/auth";
import { useRequestParams } from "~api/services/validations";

import type { UpdateUserBodyParams } from "./types";

export type UpdateUserParams = AuthenticatedUserParams & UpdateUserBodyParams;

export const params = useAuthenticatedUserParams<UpdateUserParams>(
  useRequestParams({
    darkTheme: {
      in: "body",
      isBoolean: true,
      optional: true,
    },

    sources: {
      in: "body",
      isArray: true,
      optional: true,
      custom: {
        options: (arr: any[]) => arr.every((item) => typeof item === "string"),
      },
      errorMessage: "sources should be an array of strings",
    },

    categories: {
      in: "body",
      isArray: true,
      optional: true,
      custom: {
        options: (arr: any[]) => arr.every((item) => typeof item === "string"),
      },
      errorMessage: "categories should be an array of strings",
    },

    authors: {
      in: "body",
      isArray: true,
      optional: true,
      custom: {
        options: (arr: any[]) => arr.every((item) => typeof item === "string"),
      },
      errorMessage: "authors should be an array of strings",
    },
  })
);
