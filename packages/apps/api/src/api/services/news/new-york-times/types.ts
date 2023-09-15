export interface INewYorkTimesResponseResults {
  _id: string;
  web_url: string;
  snippet: string;
  headline: {
    main: string;
  };
  pub_date: string;
}

export interface INewYorkTimesResponse {
  status: string;
  copywrite: string;
  response: {
    docs: INewYorkTimesResponseResults[];
    meta: { hits: number; offset: number; time: number };
  };
}
