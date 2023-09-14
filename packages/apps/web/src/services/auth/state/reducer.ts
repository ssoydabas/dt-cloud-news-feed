import { useReducer, type Reducer } from "react";

import type { AuthState, AuthAction } from "./types";

export type AuthReducer = Reducer<AuthState, AuthAction>;

const reducer: AuthReducer = (state, action) => {
  switch (action.type) {
    case "SET_ACCESS_TOKEN":
      return action.payload ? { accessToken: action.payload } : {};
    case "LOGOUT":
      return {};
    default:
      return state;
  }
};

export const useAuthReducer = (initialState: AuthState = {}) =>
  useReducer(reducer, initialState);
