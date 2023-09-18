import { useReducer, Reducer } from "react";

import type { NewsState, NewsAction } from "./types";

export type NewsReducer = Reducer<NewsState, NewsAction>;

const reducer: NewsReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_NEWS":
      const fetchedNews = state.news ?? [];

      return {
        ...state,
        news: [...fetchedNews, ...action.payload],
      };

    case "SET_FILTER_OPTIONS":
      const news = state.news ?? [];

      const sourcesSet = new Set(news.map((item) => item.source));
      const categoriesSet = new Set(news.map((item) => item.category));
      const authorsSet = new Set(news.map((item) => item.author));
      const datesSet = new Set(news.map((item) => item.publishedAt.toString()));

      const sources = Array.from(sourcesSet);
      const categories = Array.from(categoriesSet);
      const authors = Array.from(authorsSet);
      const dates = Array.from(datesSet);

      return {
        ...state,
        sources: [...sources],
        categories: [...categories],
        authors: [...authors],
        dates: [...dates],
      };

    case "SET_KEYWORD":
      return {
        ...state,
        currentKeyword: action.payload,
      };

    case "ADD_TO_HISTORY":
      return {
        ...state,
        requestHistory: {
          ...state.requestHistory,
          [action.payload.keyword]: action.payload.page,
        },
      };

    default:
      return state;
  }
};

export const useNewsReducer = (initialState: NewsState) =>
  useReducer(reducer, initialState);
