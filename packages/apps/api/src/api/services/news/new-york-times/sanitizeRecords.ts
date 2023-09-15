/* eslint-disable @typescript-eslint/naming-convention */
import type { INewYorkTimesResponseResults } from "./types";
import type { INewsResultType } from "../types";

export const sanitizeRecord = ({
  web_url,
  byline: { person },
  headline: { main },
  snippet,
  pub_date,
}: INewYorkTimesResponseResults): INewsResultType => ({
  url: web_url,
  author: `${person[0].firstname} ${person[0].lastname}`,
  title: main,
  description: snippet,
  publishedAt: pub_date,
});
