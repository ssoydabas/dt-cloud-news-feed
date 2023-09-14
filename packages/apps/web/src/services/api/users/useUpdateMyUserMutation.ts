import type {
  UpdateUserBodyParams,
  UpdateUserSuccessResponseBody,
} from "@dt-cloud/api-types";
import { useMutation, type UseMutationOptions } from "@tanstack/react-query";

import type { ApiError } from "../errors";
import { fetchApi } from "../fetchers";

export type UpdateUserMutationOptions = UseMutationOptions<
  UpdateUserSuccessResponseBody,
  ApiError,
  UpdateUserBodyParams
>;

const mutation = async (body: UpdateUserBodyParams) =>
  await fetchApi<UpdateUserSuccessResponseBody, UpdateUserBodyParams>({
    url: "/users/me",
    method: "PUT",
    body,
  });

export const useUpdateMyUserMutation = (
  options: UpdateUserMutationOptions = {}
) =>
  useMutation<UpdateUserSuccessResponseBody, ApiError, UpdateUserBodyParams>(
    mutation,
    options
  );
