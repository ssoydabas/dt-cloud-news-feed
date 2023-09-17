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
  });

  return (
    <NewsContext.Provider
      value={{
        ...state,
        news: [...(state.news ?? [])],
        currentKeyword: state.currentKeyword,
        requestHistory: { ...state.requestHistory },
        dispatch,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
}
