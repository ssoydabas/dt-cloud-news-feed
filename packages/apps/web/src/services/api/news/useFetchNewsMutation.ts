import type {
  ISearchNewYorkTimesByKeywordParams,
  SearchNewYorkTimesByKeywordSuccessResponseBody,
} from "~api/types";
import { useMutation, type UseMutationOptions } from "@tanstack/react-query";

import type { ApiError } from "../errors";
import { fetchApi } from "../fetchers";

export type FetchNYTNewsMutationOptions = UseMutationOptions<
  SearchNewYorkTimesByKeywordSuccessResponseBody,
  ApiError,
  ISearchNewYorkTimesByKeywordParams
>;

const mutation = async (body: ISearchNewYorkTimesByKeywordParams) =>
  await fetchApi<
    SearchNewYorkTimesByKeywordSuccessResponseBody,
    ISearchNewYorkTimesByKeywordParams
  >({
    url: "new-york-times/search",
    method: "POST",
    body,
  });

export const useFetchNYTNewsMutation = (
  options: FetchNYTNewsMutationOptions = {}
) =>
  useMutation<
    SearchNewYorkTimesByKeywordSuccessResponseBody,
    ApiError,
    ISearchNewYorkTimesByKeywordParams
  >(mutation, {
    ...options,
    mutationKey: ["fetch-new-york-times-news"],
  });
