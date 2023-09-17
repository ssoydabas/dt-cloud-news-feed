import { createContext } from "react";

import type { FilterState, FilterActionDispatcher } from "./state";

export type IFilterContext = FilterState & {
  dispatch?: FilterActionDispatcher;
};

export default createContext<IFilterContext>({
  source: "",
  category: "",
  author: "",
});
