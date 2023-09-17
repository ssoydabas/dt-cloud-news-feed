import { useEffect } from "react";

import {
  useFetchNews,
  useFetchedNews,
  useCurrentKeyword,
} from "~root/services/news/hooks";
import { useFilters } from "~root/services/filter/hooks";
import { useWindowSize } from "~root/hooks";

import { filterNews } from "~root/utils";

import { NewsItem } from "./components";

export default function NewsSection() {
  const { height } = useWindowSize();
  const parentElementHeight = height - 96;

  const filters = useFilters();

  const keyword = useCurrentKeyword();
  const { fetchNews } = useFetchNews();
  useEffect(() => {
    fetchNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyword]);

  const fetchedNews = useFetchedNews();
  const filteredNews = filterNews(fetchedNews ?? [], keyword, filters);

  return (
    <div
      style={{ height: `${parentElementHeight}px` }}
      className="col-span-4 flex flex-col space-y-16 px-24 py-2 overflow-y-auto thin-scrollbar"
    >
      {filteredNews.length > 0 &&
        filteredNews?.map((news, index) => (
          <NewsItem
            key={`${index} - ${Math.random()}`}
            article={news}
            index={index}
          />
        ))}

      {filteredNews.length === 0 && (
        <div className="px-2 py-8 text-center text-lg italic">
          We couldn't find any news that you are looking for :(
        </div>
      )}
    </div>
  );
}
