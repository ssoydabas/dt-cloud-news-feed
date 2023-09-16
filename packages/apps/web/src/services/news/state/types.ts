import type { Dispatch } from "react";
import type { INewsResultType } from "~api/types";

export interface NewsState {
  isReady?: boolean;
  news?: INewsResultType[];
  fetchNews?: () => void;
  dispatch?: NewsActionDispatcher;
}

export interface SetIsReadyAction {
  type: "SET_IS_READY";
  payload: boolean;
}

export interface FetchNewsAction {
  type: "FETCH_NEWS";
  payload: INewsResultType[];
}

export type NewsAction = SetIsReadyAction | FetchNewsAction;

export type NewsActionDispatcher = Dispatch<NewsAction>;
