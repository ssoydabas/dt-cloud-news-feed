import { useContext, useCallback } from "react";

import NewsContext from "./NewsContext";

const useNewsContext = () => useContext(NewsContext);

export const useIsNewsReady = () => useNewsContext().isReady;

export const useFetchedNews = () => useNewsContext().news;

export const useFetchNews = () => useNewsContext().fetchNews;
