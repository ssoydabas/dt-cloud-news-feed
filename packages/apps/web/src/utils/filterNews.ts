import { INewsResultType } from "~api/types";
import { FilterState } from "~root/services/filter/state";

export default function filterNews(
  news: INewsResultType[],
  keyword: string,
  filters: FilterState
) {
  return news.filter((item) => {
    const sourceMatches = filters.source
      ? item.source === filters.source
      : true;
    const categoryMatches = filters.category
      ? item.category === filters.category
      : true;
    const authorMatches = filters.author
      ? item.author === filters.author
      : true;
    const dateMatches = filters.date
      ? new Date(item.publishedAt).toLocaleDateString() ===
        new Date(filters.date).toLocaleDateString()
      : true;

    return sourceMatches && categoryMatches && authorMatches && dateMatches;
  });
}
