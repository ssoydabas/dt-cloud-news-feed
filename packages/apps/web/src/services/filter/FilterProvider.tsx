import { type ReactNode } from "react";
import { useFilterReducer } from "./state";
import FilterContext from "./FilterContext";

export interface IFilterProviderProps {
  children: ReactNode;
}

export default function FilterProvider({ children }: IFilterProviderProps) {
  const [state, dispatch] = useFilterReducer({
    source: "",
    category: "",
    author: "",
    date: "",
  });

  return (
    <FilterContext.Provider
      value={{
        ...state,
        source: state.source,
        category: state.category,
        author: state.author,
        dispatch,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
