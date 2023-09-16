import { createContext } from "react";
import type { INewsResultType } from "@dt-cloud/api-types";

import type { NewsState, NewsActionDispatcher } from "./state";

export type INewsContext = NewsState & {
  isReady: boolean;
  news?: INewsResultType[];
  fetchNews?: () => void;
  dispatch?: NewsActionDispatcher;
};

export default createContext<INewsContext>({ isReady: false });
