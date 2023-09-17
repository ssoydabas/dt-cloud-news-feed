import { useReducer, Reducer } from "react";

import type { NewsState, NewsAction } from "./types";

export type NewsReducer = Reducer<NewsState, NewsAction>;

const reducer: NewsReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_NEWS":
      return {
        ...state,
        news: [...(state.news ?? []), ...action.payload],
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
