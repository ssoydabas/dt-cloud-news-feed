import { useReducer, Reducer } from "react";

import type { FilterState, FilterAction } from "./types";

export type FilterReducer = Reducer<FilterState, FilterAction>;

const reducer: FilterReducer = (state, action) => {
  switch (action.type) {
    case "SET_SOURCE":
      return {
        ...state,
        source: action.payload,
      };

    case "SET_CATEGORY":
      return {
        ...state,
        category: action.payload,
      };

    case "SET_AUTHOR":
      return {
        ...state,
        author: action.payload,
      };

    default:
      return state;
  }
};

export const useFilterReducer = (initialState: FilterState) =>
  useReducer(reducer, initialState);
