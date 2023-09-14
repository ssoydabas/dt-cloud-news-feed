import type {
  ILoginBodyParams,
  LoginSuccessResponseBody,
} from "@dt-cloud/api-types";
import { useMutation, type UseMutationOptions } from "@tanstack/react-query";

import type { ApiError } from "../errors";
import { fetchApi } from "../fetchers";

export type LoginMutationOptions = UseMutationOptions<
  LoginSuccessResponseBody,
  ApiError,
  ILoginBodyParams
>;

const mutation = async (body: ILoginBodyParams) =>
  await fetchApi<LoginSuccessResponseBody, ILoginBodyParams>({
    url: "/auth/login",
    method: "POST",
    body,
  });

export const useLoginMutation = (options: LoginMutationOptions = {}) =>
  useMutation<LoginSuccessResponseBody, ApiError, ILoginBodyParams>(mutation, {
    ...options,
    mutationKey: ["login"],
  });
