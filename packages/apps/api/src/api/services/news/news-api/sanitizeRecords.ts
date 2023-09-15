import type { INewsApiResponseResults } from "./types";
import type { INewsResultType } from "../types";

export const sanitizeRecord = ({
  author,
  description,
  publishedAt,
  title,
  url,
}: INewsApiResponseResults): INewsResultType => ({
  url,
  author,
  title,
  description,
  publishedAt,
});
