import type {
  ISearchNewsParams,
  SearchNewsSuccessResponseBody,
} from "~api/types";
import { useMutation, type UseMutationOptions } from "@tanstack/react-query";

import type { ApiError } from "../errors";
import { fetchApi } from "../fetchers";

export type FetchNewsMutationOptions = UseMutationOptions<
  SearchNewsSuccessResponseBody,
  ApiError,
  ISearchNewsParams
>;

const mutation = async (body: ISearchNewsParams) =>
  await fetchApi<SearchNewsSuccessResponseBody, ISearchNewsParams>({
    url: "/news/search",
    method: "POST",
    body,
  });

export const useFetchNewsMutation = (options: FetchNewsMutationOptions = {}) =>
  useMutation<SearchNewsSuccessResponseBody, ApiError, ISearchNewsParams>(
    mutation,
    {
      ...options,
      mutationKey: ["fetch-news"],
    }
  );
