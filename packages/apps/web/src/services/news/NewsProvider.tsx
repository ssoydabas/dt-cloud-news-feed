import { type ReactNode } from "react";
import { useNewsReducer } from "./state";
import NewsContext from "./NewsContext";

export interface INewsProviderProps {
  children: ReactNode;
}

export default function NewsProvider({ children }: INewsProviderProps) {
  const [state, dispatch] = useNewsReducer({
    currentKeyword: "global",
    requestHistory: {},
    sources: [],
    categories: [],
    authors: [],
    dates: [],
  });

  return (
    <NewsContext.Provider
      value={{
        ...state,
        news: [...(state.news ?? [])],
        currentKeyword: state.currentKeyword,
        requestHistory: { ...state.requestHistory },
        sources: [...state.sources],
        categories: [...state.categories],
        authors: [...state.authors],
        dates: [...state.dates],
        dispatch,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
}
