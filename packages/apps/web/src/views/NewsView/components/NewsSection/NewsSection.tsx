import { useEffect } from "react";

import { useFetchNews, useFetchedNews } from "~root/services/news/hooks";
import { useWindowSize } from "~root/hooks";

import { NewsItem } from "./components";

export default function NewsSection() {
  const { height } = useWindowSize();
  const { fetchNews } = useFetchNews();
  const fetchedNews = useFetchedNews();

  const parentElementHeight = height - 96;
  useEffect(() => {
    fetchNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(fetchedNews);
  return (
    <div
      style={{ height: `${parentElementHeight}px` }}
      className="col-span-4 flex flex-col space-y-16 px-24 py-2 overflow-y-auto thin-scrollbar"
    >
      {fetchedNews?.map((news, index) => (
        <NewsItem
          key={`${index} - ${Math.random()}`}
          article={news}
          index={index}
        />
      ))}
    </div>
  );
}
