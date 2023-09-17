import type {
  ISearchNewYorkTimesParams,
  SearchNewYorkTimesSuccessResponseBody,
} from "~api/types";
import { useMutation, type UseMutationOptions } from "@tanstack/react-query";

import type { ApiError } from "../errors";
import { fetchApi } from "../fetchers";

export type FetchNYTNewsMutationOptions = UseMutationOptions<
  SearchNewYorkTimesSuccessResponseBody,
  ApiError,
  ISearchNewYorkTimesParams
>;

const mutation = async (body: ISearchNewYorkTimesParams) =>
  await fetchApi<
    SearchNewYorkTimesSuccessResponseBody,
    ISearchNewYorkTimesParams
  >({
    url: "/new-york-times/search",
    method: "POST",
    body,
  });

export const useFetchNYTNewsMutation = (options: FetchNYTNewsMutationOptions = {}) =>
  useMutation<
    SearchNewYorkTimesSuccessResponseBody,
    ApiError,
    ISearchNewYorkTimesParams
  >(mutation, {
    ...options,
    mutationKey: ["fetch-new-york-times-news"],
  });
