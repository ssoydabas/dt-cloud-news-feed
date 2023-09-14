import type { Dispatch } from "react";

export interface AuthState {
  accessToken?: string;
}

export interface AuthSetAccessTokenAction {
  type: "SET_ACCESS_TOKEN";
  payload?: string;
}

export interface AuthLogoutAction {
  type: "LOGOUT";
}

export type AuthAction = AuthSetAccessTokenAction | AuthLogoutAction;

export type AuthActionDispathcer = Dispatch<AuthAction>;
