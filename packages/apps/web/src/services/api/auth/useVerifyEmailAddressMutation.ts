import type { IVerifyEmailBodyParams } from "@dt-cloud/api-types";
import { useMutation, type UseMutationOptions } from "@tanstack/react-query";

import type { ApiError } from "../errors";
import { fetchApi } from "../fetchers";

export type VerifyEmailMutationOptions = IVerifyEmailBodyParams;

export interface VerifyEmailMutationResult {
  email: string;
}

const mutation = async ({ token }: VerifyEmailMutationOptions) =>
  await fetchApi<VerifyEmailMutationResult, VerifyEmailMutationOptions>({
    url: "/auth/verify",
    method: "POST",
    body: { token },
  });

export const useVerifyEmailAddressMutation = (
  options: UseMutationOptions<
    VerifyEmailMutationResult,
    ApiError,
    VerifyEmailMutationOptions
  > = {}
) => {
  return useMutation<
    VerifyEmailMutationResult,
    ApiError,
    VerifyEmailMutationOptions
  >(mutation, { ...options });
};
