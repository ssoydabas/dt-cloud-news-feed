import searchNewYorkTimesContent from "../new-york-times/searchContent";
import searchNewsApiContent from "../news-api/searchContent";

import combineResults from "./combineResults";

export default async function searchContent({
  keyword,
  page,
}: {
  keyword?: string;
  page: number;
}) {
  const newYorkTimesPage = page - 1;
  const newsApiPage = page;

  const newYorkTimesResponse = await searchNewYorkTimesContent({
    page: newYorkTimesPage,
    keyword,
  });
  const newsApiResponse = await searchNewsApiContent({
    page: newsApiPage,
    keyword,
  });

  const combinedResults = combineResults({
    newYorkTimesResponse,
    newsApiResponse,
    page,
  });

  return combinedResults;
}
