import type { IGetManyResponse, INewsResultType } from "~api/types";
import type { INewYorkTimesResponse } from "../new-york-times/types";
import type { INewsApiResponse } from "../news-api/types";

import { sanitizeRecord as sanitizeNewYorkTimesRecords } from "../new-york-times/sanitizeRecords";
import { sanitizeRecord as sanitizeNewsApiRecords } from "../news-api/sanitizeRecords";

const NUMBER_OF_RECORDS_RETURNED_EACH_REQUEST = 20;

export interface ICombineResultsItems {
  newYorkTimesResponse: INewYorkTimesResponse;
  newsApiResponse: INewsApiResponse;
  page: number;
  keyword: string;
}

export default function combineResults({
  newYorkTimesResponse,
  newsApiResponse,
  page: currentPage,
  keyword,
}: ICombineResultsItems) {
  const totalNewYorkTimesRecords = newYorkTimesResponse.response.meta.hits;
  const totalNewsApiRecords = newsApiResponse.totalResults;
  const totalRecords = totalNewYorkTimesRecords + totalNewsApiRecords;

  const totalPages = Math.floor(
    totalRecords / NUMBER_OF_RECORDS_RETURNED_EACH_REQUEST
  );

  const {
    response: { docs },
  } = newYorkTimesResponse;
  const sanitizedNewYorkTimesResults = docs.map(sanitizeNewYorkTimesRecords);

  const { articles } = newsApiResponse;
  const sanitizedNewsApiResults = articles.map((article) =>
    sanitizeNewsApiRecords({ ...article, keyword })
  );

  const results: IGetManyResponse<INewsResultType> = {
    currentPage,
    totalPages,
    totalRecords,
    records: [...sanitizedNewYorkTimesResults, ...sanitizedNewsApiResults],
  };

  return results;
}
