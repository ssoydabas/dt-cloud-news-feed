export interface INewsApiResponseResults {
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
}

export interface INewsApiResponse {
  totalResults: number;
  articles: INewsApiResponseResults[];
}

export interface ICustomizedNewsApiResponse extends INewsApiResponse {
  totalPages: number;
  currentPage: number;
}
