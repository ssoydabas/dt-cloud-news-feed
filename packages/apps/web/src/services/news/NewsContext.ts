import { createContext } from "react";

import type { NewsState, NewsActionDispatcher } from "./state";

export type INewsContext = NewsState & {
  dispatch?: NewsActionDispatcher;
};

export default createContext<INewsContext>({
  currentKeyword: "global",
  requestHistory: {},
  sources: [],
  categories: [],
  authors: [],
});
