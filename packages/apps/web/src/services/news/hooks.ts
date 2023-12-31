import { useContext, useCallback } from "react";

import NewsContext from "./NewsContext";

import { useFetchNewsMutation } from "../api/news/useFetchNewsMutation";
import { ISearchNewsParams } from "~api/types";

const useNewsContext = () => useContext(NewsContext);

export const useFetchedNews = () => useNewsContext().news;

export const useCurrentKeyword = () => useNewsContext().currentKeyword;

export const useRequestHistory = () => useNewsContext().requestHistory;

export const useSources = () => useNewsContext().sources;

export const useCategories = () => useNewsContext().categories;

export const useAuthors = () => useNewsContext().authors;

export const useDates = () => useNewsContext().dates;

export const useSetKeyword = () => {
  const { dispatch } = useNewsContext();

  const setKeyword = useCallback(
    (keyword: string) => {
      if (!dispatch) return;

      dispatch({ type: "SET_KEYWORD", payload: keyword });
    },
    [dispatch]
  );

  return setKeyword;
};

export const useFetchNews = () => {
  const { dispatch, news, currentKeyword, requestHistory } = useNewsContext();

  const fetchNewsMutation = useFetchNewsMutation({
    onSuccess: ({ records }) => {
      if (
        news &&
        news.length > 0 &&
        records.length &&
        records[records.length - 1].url === news[news.length - 1].url
      ) {
        return;
      }

      dispatch?.({ type: "FETCH_NEWS", payload: records });
      dispatch?.({ type: "SET_FILTER_OPTIONS", payload: "" });
    },
  });

  const fetchNews = useCallback(() => {
    if (!dispatch) return;
    if (currentKeyword === "") return;

    const currentPageForKeyword = requestHistory[currentKeyword] ?? 0;

    const pageToFetch = currentPageForKeyword + 1;

    dispatch?.({
      type: "ADD_TO_HISTORY",
      payload: { keyword: currentKeyword, page: pageToFetch },
    });

    const params: ISearchNewsParams = {
      keyword: currentKeyword,
      page: pageToFetch,
    };

    fetchNewsMutation.mutate(params);
  }, [dispatch, fetchNewsMutation, currentKeyword, requestHistory]);

  return {
    fetchNews,
    ...fetchNewsMutation,
  };
};
