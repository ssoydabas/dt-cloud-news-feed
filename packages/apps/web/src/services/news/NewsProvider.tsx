import { type ReactNode, useState } from "react";
import { useNewsReducer } from "./state";
import NewsContext from "./NewsContext";

export interface INewsProviderProps {
  children: ReactNode;
}

export default function NewsProvider({ children }: INewsProviderProps) {
  const [isReady, setIsReady] = useState(false);
  const [state, dispatch] = useNewsReducer();

  // Here I will fetch the first 20 news to initialize the app
  // gonna use a custom hook for it

  return (
    <NewsContext.Provider
      value={{
        ...state,
        isReady,
        news: [],
        fetchNews: () => {},
        dispatch,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
}
