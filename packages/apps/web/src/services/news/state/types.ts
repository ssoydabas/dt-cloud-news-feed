import { Dispatch } from "react";

import type { INewsResultType } from "~api/types";

export interface IRequestHistory {
  [key: string]: number;
}

export interface NewsState {
  news?: INewsResultType[];
  currentKeyword: string;
  requestHistory: IRequestHistory;
  error?: string;
  loading?: boolean;
}

export interface FetchNewsAction {
  type: "FETCH_NEWS";
  payload: INewsResultType[];
}

export interface SetKeywordAction {
  type: "SET_KEYWORD";
  payload: string;
}

export interface AddToHistoryAction {
  type: "ADD_TO_HISTORY";
  payload: { keyword: string; page: number };
}

export type NewsAction =
  | FetchNewsAction
  | SetKeywordAction
  | AddToHistoryAction;

export type NewsActionDispatcher = Dispatch<NewsAction>;
