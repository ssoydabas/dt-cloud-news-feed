import type { INewYorkTimesResponseResults } from "./types";

export const sanitizeRecord = (
  doc: INewYorkTimesResponseResults
): INewYorkTimesResponseResults => ({
  _id: doc._id,
  web_url: doc.web_url,
  snippet: doc.snippet,
  headline: {
    main: doc.headline.main,
  },
  pub_date: doc.pub_date,
});
