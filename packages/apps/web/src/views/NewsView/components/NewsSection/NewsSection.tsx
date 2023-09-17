import { useEffect } from "react";

import { useFetchNews, useFetchedNews } from "~root/services/news/hooks";
import { useFilters } from "~root/services/filter/hooks";
import { useWindowSize } from "~root/hooks";

import { filterNews } from "~root/utils";

import { NewsItem } from "./components";

export default function NewsSection() {
  const { height } = useWindowSize();
  const parentElementHeight = height - 96;

  const filters = useFilters();

  const { fetchNews } = useFetchNews();
  useEffect(() => {
    fetchNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchedNews = useFetchedNews();
  const filteredNews = filterNews(fetchedNews ?? [], filters);

  return (
    <div
      style={{ height: `${parentElementHeight}px` }}
      className="col-span-4 flex flex-col space-y-16 px-24 py-2 overflow-y-auto thin-scrollbar"
    >
      {filteredNews?.map((news, index) => (
        <NewsItem
          key={`${index} - ${Math.random()}`}
          article={news}
          index={index}
        />
      ))}
    </div>
  );
}
