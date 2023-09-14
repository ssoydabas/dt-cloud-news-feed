import { useMutation, type UseMutationOptions } from "@tanstack/react-query";
import type {
  IRegisterBodyParams,
  RegisterSuccessResponseBody,
} from "@dt-cloud/api-types";

import type { ApiError } from "../errors";
import { fetchApi } from "../fetchers";

export type RegisterMutationOptions = UseMutationOptions<
  RegisterSuccessResponseBody,
  ApiError,
  IRegisterBodyParams
>;

const mutation = async (body: IRegisterBodyParams) =>
  await fetchApi<RegisterSuccessResponseBody, IRegisterBodyParams>({
    url: "/auth/register",
    method: "POST",
    body,
  });

export const useRegisterMutation = (options: RegisterMutationOptions = {}) =>
  useMutation<RegisterSuccessResponseBody, ApiError, IRegisterBodyParams>(
    mutation,
    {
      ...options,
      mutationKey: ["register"],
    }
  );
