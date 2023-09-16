import axios, { type AxiosResponse, type AxiosError } from "axios";

import { newYorkTimesApiKey } from "~api-root/config";
import type { INewYorkTimesResponse } from "./types";

const nytUrl = "https://api.nytimes.com/svc/search/v2";
const nytPath = "/articlesearch.json";

export default async function searchContent({
  keyword = "",
  page,
}: {
  keyword?: string;
  page: number;
}) {
  const url = new URL(nytUrl + nytPath);
  url.searchParams.append("api-key", newYorkTimesApiKey);

  if (keyword) {
    url.searchParams.append("q", keyword);
  }
  if (page) {
    url.searchParams.append("page", page.toString());
  }

  const fullURL = url.toString();

  return await axios
    .get(fullURL)
    .then((response: AxiosResponse<INewYorkTimesResponse>) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      throw error;
    });
}
