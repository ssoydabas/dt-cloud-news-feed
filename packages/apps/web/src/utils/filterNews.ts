import { INewsResultType } from "~api/types";
import { FilterState } from "~root/services/filter/state";

export default function filterNews(
  news: INewsResultType[],
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

    return sourceMatches && categoryMatches && authorMatches;
  });
}
