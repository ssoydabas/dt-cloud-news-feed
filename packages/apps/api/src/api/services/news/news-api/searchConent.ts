import axios, { type AxiosResponse, type AxiosError } from "axios";

import { newsApiApiKey } from "~api-root/config";
import type { INewsApiResponse } from "./types";

const newsApiUrl = "https://newsapi.org";
const newsApiPath = "/v2/everything";

export default async function searchContent(keyword: string, page: number) {
  const url = new URL(newsApiUrl + newsApiPath);
  url.searchParams.append("q", keyword);
  url.searchParams.append("apiKey", newsApiApiKey);
  url.searchParams.append("pageSize", "10");
  url.searchParams.append("page", page.toString());

  const fullURL = url.toString();

  return await axios
    .get(fullURL)
    .then((response: AxiosResponse<INewsApiResponse>) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      throw error;
    });
}
