import type { INewsApiResponseResults } from "./types";
import type { INewsResultType } from "../types";

export const sanitizeRecord = ({
  author,
  description,
  publishedAt,
  title,
  url,
  urlToImage,
  keyword,
}: INewsApiResponseResults & { keyword: string }): INewsResultType => ({
  url,
  author,
  title,
  description,
  publishedAt,
  imageUrl: urlToImage,
  source: "news-api",
  category: keyword,
});
