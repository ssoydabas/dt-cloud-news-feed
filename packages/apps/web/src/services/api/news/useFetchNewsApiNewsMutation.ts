import type {
  ISearchNewsApiByKeywordParams,
  SearchNewsApiByKeywordSuccessResponseBody,
} from "~api/types";
import { useMutation, type UseMutationOptions } from "@tanstack/react-query";

import type { ApiError } from "../errors";
import { fetchApi } from "../fetchers";

export type FetchNewsApiNewsMutationOptions = UseMutationOptions<
  SearchNewsApiByKeywordSuccessResponseBody,
  ApiError,
  ISearchNewsApiByKeywordParams
>;

const mutation = async (body: ISearchNewsApiByKeywordParams) =>
  await fetchApi<
    SearchNewsApiByKeywordSuccessResponseBody,
    ISearchNewsApiByKeywordParams
  >({
    url: "news-api/search",
    method: "POST",
    body,
  });

export const useFetchNewsApiNewsMutation = (
  options: FetchNewsApiNewsMutationOptions = {}
) =>
  useMutation<
    SearchNewsApiByKeywordSuccessResponseBody,
    ApiError,
    ISearchNewsApiByKeywordParams
  >(mutation, {
    ...options,
    mutationKey: ["fetch-news-api-news"],
  });
