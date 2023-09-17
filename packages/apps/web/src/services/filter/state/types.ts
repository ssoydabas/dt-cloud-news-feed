import { Dispatch } from "react";

export interface FilterState {
  source: string;
  category: string;
  author: string;
}

export interface SetSourceAction {
  type: "SET_SOURCE";
  payload: string;
}

export interface SetCategoryAction {
  type: "SET_CATEGORY";
  payload: string;
}

export interface SetAuthorAction {
  type: "SET_AUTHOR";
  payload: string;
}

export type FilterAction =
  | SetSourceAction
  | SetCategoryAction
  | SetAuthorAction;

export type FilterActionDispatcher = Dispatch<FilterAction>;
