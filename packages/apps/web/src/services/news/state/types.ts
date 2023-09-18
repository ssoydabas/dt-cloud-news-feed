import { Dispatch } from "react";

import type { INewsResultType } from "~api/types";

export interface IRequestHistory {
  [key: string]: number;
}

export interface NewsState {
  news?: INewsResultType[];
  currentKeyword: string;
  requestHistory: IRequestHistory;
  sources: string[];
  categories: string[];
  authors: string[];
  dates: string[];
}

export interface FetchNewsAction {
  type: "FETCH_NEWS";
  payload: INewsResultType[];
}

export interface SetFilterOptionsAction {
  type: "SET_FILTER_OPTIONS";
  payload: string;
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
  | SetFilterOptionsAction
  | SetKeywordAction
  | AddToHistoryAction;

export type NewsActionDispatcher = Dispatch<NewsAction>;
