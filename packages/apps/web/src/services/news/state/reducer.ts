import { useReducer, Reducer } from "react";

import type { NewsState, NewsAction } from "./types";

export type NewsReducer = Reducer<NewsState, NewsAction>;

const reducer: NewsReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_NEWS":
      return {
        ...state,
        news: [...(state.news || []), ...action.payload],
      };

    case "SET_IS_READY":
      return {
        ...state,
        isReady: action.payload,
      };

    default:
      return state;
  }
};

export const useNewsReducer = (initialState: NewsState = {}) =>
  useReducer(reducer, initialState);
