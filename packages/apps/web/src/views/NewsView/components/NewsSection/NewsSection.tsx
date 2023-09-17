import { useRef } from "react";
import { useWindowSize, useFlatList, useNewsData } from "~root/hooks";

import { NewsItem, Loading, NoNewsAvailable } from "./components";

export default function NewsSection() {
  const { height } = useWindowSize();
  const parentElementHeight = height - 96;

  const { filteredNews, isLoading } = useNewsData();

  const newsSectionRef = useRef(null);
  useFlatList(newsSectionRef);

  if (isLoading) return <Loading />;
  if (filteredNews.length === 0) return <NoNewsAvailable />;

  return (
    <div
      style={{ height: `${parentElementHeight}px` }}
      className="col-span-4 flex flex-col space-y-16 px-24 py-2 overflow-y-auto thin-scrollbar"
      ref={newsSectionRef}
    >
      {filteredNews.map((news, index) => (
        <NewsItem
          key={`${index} - ${Math.random()}`}
          article={news}
          index={index}
        />
      ))}
    </div>
  );
}
