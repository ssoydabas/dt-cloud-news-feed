/* eslint-disable @typescript-eslint/naming-convention */
import type { INewYorkTimesResponseResults } from "./types";
import type { INewsResultType } from "../types";

export const sanitizeRecord = ({
  web_url,
  byline: { person },
  headline: { main },
  snippet,
  pub_date,
  multimedia,
  section_name,
}: INewYorkTimesResponseResults): INewsResultType => ({
  url: web_url,
  author: `${person?.[0]?.firstname ?? "Unknown"} ${
    person?.[0]?.lastname ?? ""
  }`.trim(),
  title: main,
  description: snippet,
  publishedAt: pub_date,
  imageUrl:
    multimedia.length > 0 ? `https://www.nytimes.com/${multimedia[0].url}` : "",
  source: "new-york-times",
  category: section_name,
});
