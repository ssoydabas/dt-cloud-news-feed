import axios, { type AxiosResponse, type AxiosError } from "axios";

import { newsApiApiKey } from "~api-root/config";
import type { INewsApiResponse } from "./types";

const newsApiUrl = "https://newsapi.org";
const newsApiPath = "/v2/everything";

export default async function searchContent({
  keyword,
  page,
}: {
  keyword: string;
  page: number;
}) {
  if (page > 5) {
    console.log("Page is larger than 5");
    const mockedEmptyResult: INewsApiResponse = {
      totalResults: 0,
      articles: [],
    };

    return mockedEmptyResult;
  }

  const url = new URL(newsApiUrl + newsApiPath);
  url.searchParams.append("apiKey", newsApiApiKey);
  url.searchParams.append("pageSize", "10");
  url.searchParams.append("q", keyword);

  if (page) {
    url.searchParams.append("page", page.toString());
  }

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
