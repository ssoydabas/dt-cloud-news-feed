import axios, { type AxiosResponse, type AxiosError } from "axios";

import { newYorkTimesApiKey } from "~api-root/config";
import type { INewYorkTimesResponse } from "./types";

const nytUrl = "https://api.nytimes.com/svc/search/v2";
const nytPath = "/articlesearch.json";

export default async function searchContent(keyword: string, page = 0) {
  const url = new URL(nytUrl + nytPath);
  url.searchParams.append("q", keyword);
  url.searchParams.append("api-key", newYorkTimesApiKey);
  url.searchParams.append("page", page.toString());

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
