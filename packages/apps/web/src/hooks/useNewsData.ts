import { useEffect } from "react";
import {
  useFetchNews,
  useFetchedNews,
  useCurrentKeyword,
} from "~root/services/news/hooks";
import { useFilters } from "~root/services/filter/hooks";
import { filterNews } from "~root/utils";

export default function useNewsData() {
  const keyword = useCurrentKeyword();
  const { fetchNews, isLoading } = useFetchNews();

  useEffect(() => {
    fetchNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyword]);

  const filters = useFilters();
  const fetchedNews = useFetchedNews();
  const filteredNews = filterNews(fetchedNews ?? [], keyword, filters);

  return {
    isLoading,
    filteredNews,
  };
}
