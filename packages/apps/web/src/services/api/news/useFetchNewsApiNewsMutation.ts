import type {
  ISearchNewsApiParams,
  SearchNewsApiSuccessResponseBody,
} from "~api/types";
import { useMutation, type UseMutationOptions } from "@tanstack/react-query";

import type { ApiError } from "../errors";
import { fetchApi } from "../fetchers";

export type FetchNewsApiNewsMutationOptions = UseMutationOptions<
  SearchNewsApiSuccessResponseBody,
  ApiError,
  ISearchNewsApiParams
>;

const mutation = async (body: ISearchNewsApiParams) =>
  await fetchApi<
    SearchNewsApiSuccessResponseBody,
    ISearchNewsApiParams
  >({
    url: "/news-api/search",
    method: "POST",
    body,
  });

export const useFetchNewsApiNewsMutation = (
  options: FetchNewsApiNewsMutationOptions = {}
) =>
  useMutation<
    SearchNewsApiSuccessResponseBody,
    ApiError,
    ISearchNewsApiParams
  >(mutation, {
    ...options,
    mutationKey: ["fetch-news-api-news"],
  });
